/**
 * 
 */
package com.aem.backbase.kalah.service.impl;

import java.util.HashMap;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aem.backbase.kalah.domain.Game;
import com.aem.backbase.kalah.domain.Player;
import com.aem.backbase.kalah.domain.enums.Status;
import com.aem.backbase.kalah.service.GameService;
import com.aem.backbase.kalah.service.NotificationService;

/**
 * @author Andrew Ellis-Moseley
 * 
 * This service handles creating and join of active games
 * It also contains the logic for the game
 *
 */
@Service
public class GameServiceImpl implements GameService {

	private static final int PLAYER_ONE_ID = 1;
	private static final int PLAYER_TWO_ID = 2;
	private static final int PLAYER_ONE_HOUSE_INDEX = 6;
	private static final int PLAYER_TWO_HOUSE_INDEX = 13;
	private static final int NUMBER_OF_PITS = 14;
	private static final int EMPTY_PIT = 0;
	
	static HashMap<Integer, Game> gameList = new HashMap<>();
	
	@Autowired
	private NotificationService notificationService;

	/**
	 * Either creates a new game or joins a second player to an active game depending on game state
	 */
	@Override
	public Game createGame(String session, String playerName) {
		if (gameList.size() > 0) {
			for (Game g : gameList.values()) {
				switch (g.getGameStatus()) {
					case "Awaiting Player" :
						return joinActiveGame(g, playerName, session);
						
					case "In Progress" : 
					case "Player One Turn" :
					case "Player Two Turn" :
					case "Player One Has Another Turn" :
					case "Player Two Has Another Turn" :
						return createNewGame(playerName, session);
						
						default :
							System.out.println("Do nothing");
				}
			}
		}
		return createNewGame(playerName, session);
	}

	/**
	 * Creates a brand new game with a new Game ID
	 * @param playerName - player name to be added to game
	 * @param session - player session to be added
	 * @return new game object
	 */
	private Game createNewGame(String playerName, String session) {
		Game game = new Game(playerName, session);
		gameList.put(game.getGameId(), game); 
		notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
		return game;
	}
	
	/**
	 * Added a second player to a currently active game
	 * @param game - active game player will join
	 * @param playerName - player name to be added to active game
	 * @param session - player session to be added
	 * @return active game object
	 */
	private Game joinActiveGame(Game game, String playerName, String session) {
		game.setGameStatus(Status.PLAYER_ONE_TURN.getStatus());
		game.addPlayer(PLAYER_TWO_ID, playerName, session);
		notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
		return game;
	}
	
	/**
	 * Processes the current players movement of stones on the board from a selected pit.
	 * This will also check whether the current player has a second go, whether a specific player has
	 * won the game and notifies both players of the current state.
	 */
	@Override
	public void move(int gameId, int pit) {
		Game game = gameList.get(gameId);
		Player activePlayer = game.getPlayers().get(game.getActivePlayer()-1);
		int stonesInPit = game.getBoard().getPits().get(pit);
		updateStonesInPit(game, pit, EMPTY_PIT);
		while(stonesInPit > EMPTY_PIT) {
			int nextPit = ((pit + 1) % NUMBER_OF_PITS);
			int opponentsHouse = (activePlayer.getPlayerHouseIndex() == PLAYER_ONE_HOUSE_INDEX) ? PLAYER_TWO_HOUSE_INDEX : PLAYER_ONE_HOUSE_INDEX;
			// Avoid putting a stone if the next pit is the opponents house
			if (nextPit == opponentsHouse) {
				pit = nextPit;
				continue;
			}
			int addStone = (game.getBoard().getPits().get(nextPit) + 1);
			updateStonesInPit(game, nextPit, addStone);
			boolean emptyPit = oneStoneAddedToEmptyPit(game.getBoard().getPits().get(nextPit));
			stonesInPit--;
			
			if (emptyPit && activePlayer.getBoardRange().contains(pit) && stonesInPit == EMPTY_PIT && nextPit != activePlayer.getPlayerHouseIndex()) {
				takeAllStones(game, pit);
			}
			pit = nextPit;
		}
		// Check whether any player has won the game
		boolean winner = checkForWinner(game);
		
		// Switch active player
		if (!winner) {
			checkPlayerTurn(activePlayer, stonesInPit, pit, game);
		}
		notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);	
	}

	/**
	 * Used to update and notify the players as to who's turn it is
	 * @param activePlayer - the current player making a move
	 * @param stonesInPit - to check how many stones remain in a pit
	 * @param pit - the pit in question
	 * @param game - used to update the status
	 */
	private void checkPlayerTurn(Player activePlayer, int stonesInPit, int pit, Game game) {
		// If active players last stone lands in their own house, notify they have another go
		if (stonesInPit == EMPTY_PIT && pit == activePlayer.getPlayerHouseIndex()) {
			if (activePlayer.getId() == PLAYER_ONE_ID) {
				game.setGameStatus(Status.PLAYER_ONE_ANOTHER_TURN.getStatus());	
			} else {
				game.setGameStatus(Status.PLAYER_TWO_ANOTHER_TURN.getStatus());
			}
		} else if (activePlayer.getId() == PLAYER_ONE_ID) {
			game.setActivePlayer(PLAYER_TWO_ID);
			game.setGameStatus(Status.PLAYER_TWO_TURN.getStatus());
		} else {
			game.setActivePlayer(PLAYER_ONE_ID);
			game.setGameStatus(Status.PLAYER_ONE_TURN.getStatus());
		}
	}

	/**
	 * Checks whether either player has all empty pits before working out the winner
	 * @param game - used to gather pits and update game status
	 * @return boolean true if a player has won, else false
	 */
	private boolean checkForWinner(Game game) {
		HashMap<Integer, Integer> pits = game.getBoard().getPits();
		int stonesRemainingForPlayerOne = 0;
		int stonesRemainingForPlayerTwo = 0;
		
		for (int i=0; i < PLAYER_ONE_HOUSE_INDEX; i++) {
			stonesRemainingForPlayerOne += pits.get(i);
		}
		for (int i=7; i < PLAYER_TWO_HOUSE_INDEX; i++) {
			stonesRemainingForPlayerTwo += pits.get(i);
		}
		
		if (stonesRemainingForPlayerOne == 0 || stonesRemainingForPlayerTwo == 0) {
			if (stonesRemainingForPlayerOne != 0) {
				int stonesToAdd = stonesRemainingForPlayerOne + pits.get(PLAYER_ONE_HOUSE_INDEX);
				pits.replace(PLAYER_ONE_HOUSE_INDEX, stonesToAdd);	
			} else if (stonesRemainingForPlayerTwo != 0) {
				int stonesToAdd = stonesRemainingForPlayerTwo + pits.get(PLAYER_TWO_HOUSE_INDEX);
				pits.replace(PLAYER_TWO_HOUSE_INDEX, stonesToAdd);	
			}
			
			completeBoard(game.getBoard().getPits());
			
			if (pits.get(PLAYER_ONE_HOUSE_INDEX) > pits.get(PLAYER_TWO_HOUSE_INDEX)) {
				game.setGameStatus(Status.PLAYER_ONE_WINS.getStatus());
			} else {
				game.setGameStatus(Status.PLAYER_TWO_WINS.getStatus());
			}
			notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
			return true;
		}
		
		return false;
	}

	/**
	 * Completes the board by setting all remaining pits to zero once either player has won
	 * @param pits - hash map of pits
	 */
	private void completeBoard(HashMap<Integer, Integer> pits) {
		for (Entry<Integer, Integer> pit : pits.entrySet()) {
			if (pit.getKey().equals(PLAYER_ONE_HOUSE_INDEX) || pit.getKey().equals(PLAYER_TWO_HOUSE_INDEX)) {
				continue;
			}
		    pit.setValue(0);
		}
		
	}

	/**
	 * When a players final stone lands in an empty pit that player takes the stones
	 * from that pit as well as all stones in the pit opposite from the opponents side and adds
	 * them to their house.
	 * @param game full game object
	 * @param pit the pit in question
	 */
	private void takeAllStones(Game game, int pit) {
		int remainingStone = 1;
		int nextPit = pit+1;
		HashMap<Integer, Integer> pits = game.getBoard().getPits();
		int oppositeitLocation = oppositePitLocation(pit);
		if (pit >= 0 && pit <= 5) {
			int totalToAddToHouse = (pits.get(oppositeitLocation) + pits.get(PLAYER_ONE_HOUSE_INDEX) + remainingStone);
			pits.replace(PLAYER_ONE_HOUSE_INDEX, totalToAddToHouse);
			pits.replace(nextPit, EMPTY_PIT);
			pits.replace(oppositeitLocation, EMPTY_PIT);
		} else if (pit >= 7 && pit <= 12) {
			int totalToAddToHouse = (pits.get(oppositeitLocation) + pits.get(PLAYER_TWO_HOUSE_INDEX) + remainingStone);
			pits.replace(PLAYER_TWO_HOUSE_INDEX, totalToAddToHouse);
			pits.replace(nextPit, EMPTY_PIT);
			pits.replace(oppositeitLocation, EMPTY_PIT);
		}
		
	}

	/**
	 * Check whether a single stone was placed into an empty pit
	 * @param numberOfStones - amount of stones
	 * @return boolean, true if single stone, else false;
	 */
	private boolean oneStoneAddedToEmptyPit(int numberOfStones) {
		return numberOfStones == 1;
	}

	/**
	 * Simple method which takes a players pit and updates with the amount of stones
	 * @param game - used to locate the pits
	 * @param pit - pit to be updated
	 * @param stones - amount of stones to be added
	 */
	private void updateStonesInPit(Game game, int pit, int stones) {
		game.getBoard().getPits().replace(pit, stones);
		
	}
	
	/**
	 * Gathers the pit location of the opponents board
	 * @param pit - players selected pit
	 * @return - opponents pit location
	 */
	private int oppositePitLocation(int pit) {
		int pitDiff = pit;
		while (pit != 12) {
			pit += 1;
		}
		return pit - pitDiff - 1;
	}
	
	

}
