/**
 * 
 */
package com.aem.backbase.kalah.service.impl;

import java.util.HashMap;

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
 */
@Service
public class GameServiceImpl implements GameService {

	private static final int PLAYER_ONE_ID = 1;
	private static final int PLAYER_TWO_ID = 2;
	private static final int PLAYER_ONE_HOUSE_INDEX = 6;
	private static final int PLAYER_TWO_HOUSE_INDEX = 13;
	private static final int NUMBER_OF_PITS = 14;
	private static final int EMPTY_PIT = 0;
	private static final int DIFF_BETWEEN_STONES = 7;
	
	static HashMap<Integer, Game> gameList = new HashMap<>();
	
	@Autowired
	private NotificationService notificationService;

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
						return createNewGame(playerName, session);
						
						default :
							return createNewGame(playerName, session);
				}
			}
		}
		return createNewGame(playerName, session);
	}

	private Game joinActiveGame(Game game, String playerName, String session) {
		game.setGameStatus(Status.PLAYER_ONE_TURN.getStatus());
		game.addPlayer(PLAYER_TWO_ID, playerName, session);
		notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
		return game;
	}

	private Game createNewGame(String playerName, String session) {
		Game game = new Game(playerName, session);
		gameList.put(game.getGameId(), game); 
		notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
		return game;
	}
	
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

	private boolean checkForWinner(Game game) {
		HashMap<Integer, Integer> pits = game.getBoard().getPits();
		int stonesRemainingForPlayerOne = 0;
		int stonesRemainingForPlayerTwo = 0;
		
		for (int i=0; i <= 5; i++) {
			stonesRemainingForPlayerOne += pits.get(i);
		}
		for (int i=7; i <= 12; i++) {
			stonesRemainingForPlayerTwo += pits.get(i);
		}
		
		if (stonesRemainingForPlayerOne == 0) {
			game.setGameStatus(Status.PLAYER_ONE_WINS.getStatus());
			notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
			return true;
		}
		if (stonesRemainingForPlayerTwo == 0) {
			game.setGameStatus(Status.PLAYER_TWO_WINS.getStatus());
			notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
			return true;
		}
		return false;
	}

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

	private boolean oneStoneAddedToEmptyPit(int numberOfStones) {
		return numberOfStones == 1;
	}

	private void updateStonesInPit(Game game, int pit, int stones) {
		game.getBoard().getPits().replace(pit, stones);
		
	}
	
	private int oppositePitLocation(int pit) {
		int pitDiff = pit;
		while (pit != 12) {
			pit += 1;
		}
		return pit - pitDiff - 1;
	}
	
	

}
