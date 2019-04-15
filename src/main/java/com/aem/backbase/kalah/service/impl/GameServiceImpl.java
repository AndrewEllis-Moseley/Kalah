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
	private static final int NUMBER_OF_PITS = 14;
	private static final int PIT_TO_ZERO = 0;
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
						g.setGameStatus(Status.PLAYER_ONE_TURN.getStatus());
						g.addPlayer(PLAYER_TWO_ID, playerName, session);
						notificationService.notifyPlayerOfStatus(g.getPlayers(), g.getGameStatus(), g.getGameId());
						notificationService.updatePlayersWithLatestGame(g.getPlayers(), g);
						return g;
						
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

	private Game createNewGame(String playerName, String session) {
		Game game = new Game(playerName, session);
		gameList.put(game.getGameId(), game); 
		notificationService.notifyPlayerOfStatus(game.getPlayers(), game.getGameStatus(), game.getGameId());
		notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
		return game;
	}
	
	@Override
	public void move(int gameId, int pit) {
		Game game = gameList.get(gameId);
		Player activePlayer = game.getPlayers().get(game.getActivePlayer()-1);
		int stonesInPit = game.getBoard().getPits().get(pit);
		updateStonesInPit(game, pit, PIT_TO_ZERO);
		while(stonesInPit > 0) {
			int nextPit = ((pit + 1) % NUMBER_OF_PITS);
			// Avoid putting a stone if the next pit is the opponents house
			if (nextPit == activePlayer.getPlayerHouseIndex()) {
				int addStone = (game.getBoard().getPits().get(nextPit) + 1);
				updateStonesInPit(game, nextPit, addStone);
				stonesInPit--;
				pit = nextPit;
				continue;
			}
			// If active players last stone lands in their own house, notify they have another go
			int addStone = (game.getBoard().getPits().get(nextPit) + 1);
			updateStonesInPit(game, nextPit, addStone);
			stonesInPit--;
			pit = nextPit;
			if (stonesInPit == 0 && pit == activePlayer.getPlayerHouseIndex()) {
				String status = "Player One Has Another Turn";
				notificationService.notifyPlayerOfStatus(game.getPlayers(), status, game.getGameId());
			}
			
			boolean emptyPit = stoneInEmptyPit(game.getBoard().getPits().get(pit));
			if (stonesInPit == 0 && emptyPit) {
				takeAllStones(game, pit);
			}
		}
		// Check whether any player has won the game
		boolean winner = checkForWinner(game);
		
		// Switch active player
		if (!winner) {
			if (activePlayer.getId() == PLAYER_ONE_ID) {
				game.setActivePlayer(PLAYER_TWO_ID);
				game.setGameStatus(Status.PLAYER_TWO_TURN.getStatus());
			} else {
				game.setActivePlayer(PLAYER_ONE_ID);
				game.setGameStatus(Status.PLAYER_ONE_TURN.getStatus());
			}
			notificationService.notifyWhosMoving(game.getPlayers(), game);
		}
		notificationService.updatePlayersWithLatestGame(game.getPlayers(), game);
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
			notificationService.notifyPlayerOfStatus(game.getPlayers(), game.getGameStatus(), game.getGameId());
			return true;
		}
		if (stonesRemainingForPlayerTwo == 0) {
			game.setGameStatus(Status.PLAYER_TWO_WINS.getStatus());
			notificationService.notifyPlayerOfStatus(game.getPlayers(), game.getGameStatus(), game.getGameId());
			return true;
		}
		return false;
	}

	private void takeAllStones(Game game, int pit) {
		HashMap<Integer, Integer> pits = game.getBoard().getPits();
		if (pit >= 0 && pit <= 5) {
			int playerOneHouseIndex = 6;
			int indexOfPlayerTwoPit = (pit + DIFF_BETWEEN_STONES);
			int totalToAddToHouse = (pits.get(indexOfPlayerTwoPit) + pits.get(pit) + pits.get(playerOneHouseIndex));
			pits.replace(playerOneHouseIndex, totalToAddToHouse);
			pits.replace(pit, PIT_TO_ZERO);
			pits.replace(indexOfPlayerTwoPit, PIT_TO_ZERO);
		} else if (pit >= 7 && pit <= 12) {
			int playerTwoHouseIndex = 13;
			int indexOfPlayerOnePit = (pit - DIFF_BETWEEN_STONES);
			int totalToAddToHouse = (pits.get(indexOfPlayerOnePit) + pits.get(pit) + pits.get(playerTwoHouseIndex));
			pits.replace(playerTwoHouseIndex, totalToAddToHouse);
			pits.replace(pit, PIT_TO_ZERO);
			pits.replace(indexOfPlayerOnePit, PIT_TO_ZERO);
		}
		
	}

	private boolean stoneInEmptyPit(int numberOfStones) {
		return numberOfStones == 1;
	}

	private void updateStonesInPit(Game game, int pit, int stones) {
		game.getBoard().getPits().replace(pit, stones);
		
	}
	
	

}
