package com.aem.backbase.kalah.service.impl;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;

import java.util.HashMap;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.aem.backbase.kalah.domain.Game;
import com.aem.backbase.kalah.domain.enums.Status;
import com.aem.backbase.kalah.service.NotificationService;

@RunWith(MockitoJUnitRunner.class)
public class GameServiceImplTest {
	
	@Mock
	NotificationService notificationService;
	
	@InjectMocks
	GameServiceImpl gameServiceImpl;

	@Before
    public void init() {
        System.out.println("startup");
        @SuppressWarnings("unused")
		NotificationService ns = mock(NotificationService.class);
    }
 
    @After
    public void finalize() {
        System.out.println("finalize");
    }
	
	@Test
	public void createGameTest() {
		System.out.println("createGameTest");
		Game game = gameServiceImpl.createGame("mockSession", "Frank");
		assertEquals(game.getGameId(), 5);
		assertEquals(game.getGameStatus(), Status.AWAITING_PLAYER.getStatus());
		assertEquals(game.getPlayers().size(), 1);
	}
	
	@Test
	public void createGameSecondPlayerTest() {
		System.out.println("createGameSecondPlayerTest");
		Game game = gameServiceImpl.createGame("mockSession", "Frank");
		gameServiceImpl.createGame("mockSession", "Jess");
		assertEquals(game.getGameStatus(), Status.PLAYER_ONE_TURN.getStatus());
		assertEquals(game.getPlayers().size(), 2);
	}
	
	@Test
	public void basicMoveTest() {
		System.out.println("basicMoveTest");
		Game game = gameServiceImpl.createGame("mockSession", "Frank");
		gameServiceImpl.createGame("mockSession", "Sophie");
		
		gameServiceImpl.move(game.getGameId(), 1);
		int pitValue = game.getBoard().getPits().get(1);
		assertEquals(pitValue, 0);
		assertEquals(game.getGameStatus(), Status.PLAYER_TWO_TURN.getStatus());
		}
	
	@Test
	public void takeAllStonesTest() {
		System.out.println("takeAllStonesTest");
		Game game = gameServiceImpl.createGame("mockSession", "Frank");
		gameServiceImpl.createGame("mockSession", "Sophie");
		HashMap<Integer, Integer> pits = new HashMap<Integer, Integer>();
		pits.put(0, 6);
		pits.put(1, 1);
		pits.put(2, 0);
		pits.put(3, 6);
		pits.put(4, 6);
		pits.put(5, 6);
		pits.put(6, 0);
		pits.put(7, 6);
		pits.put(8, 6);
		pits.put(9, 8);
		pits.put(10, 6);
		pits.put(11, 6);
		pits.put(12, 6);
		pits.put(13, 0);
		game.getBoard().setPits(pits);
		
		gameServiceImpl.move(game.getGameId(), 1);
		int selectedPit = game.getBoard().getPits().get(1);
		int nextPit = game.getBoard().getPits().get(2);
		int oppositePit = game.getBoard().getPits().get(9);
		int movingPlayerHouse = game.getBoard().getPits().get(6);
		assertEquals(selectedPit, 0);
		assertEquals(nextPit, 0);
		assertEquals(oppositePit, 8);
		assertEquals(movingPlayerHouse, 7);
	}
	
	@Test
	public void playerOneAnotherTurn() {
		System.out.println("playerOneAnotherTurn");
		Game game = gameServiceImpl.createGame("mockSession", "Frank");
		gameServiceImpl.createGame("mockSession", "Sophie");
	
		gameServiceImpl.move(game.getGameId(), 0);
		int movingPlayerHouse = game.getBoard().getPits().get(6);
		int selectedPit = game.getBoard().getPits().get(0);
		assertEquals(selectedPit, 0);
		assertEquals(movingPlayerHouse, 1); 
		assertEquals(game.getGameStatus(), Status.PLAYER_ONE_ANOTHER_TURN.getStatus());
	}

	@Test
	public void switchPlayerTurn() {
		System.out.println("switchPlayerTurn");
		Game game = gameServiceImpl.createGame("mockSession", "Frank");
		gameServiceImpl.createGame("mockSession", "Jess");
	
		gameServiceImpl.move(game.getGameId(), 4);
		int selectedPit = game.getBoard().getPits().get(4);
		int nextPit = game.getBoard().getPits().get(5);
		assertEquals(selectedPit, 0);
		assertEquals(nextPit, 7);
		assertEquals(game.getGameStatus(), Status.PLAYER_TWO_TURN.getStatus());
		
		gameServiceImpl.move(game.getGameId(), 8);
		assertEquals(game.getGameStatus(), Status.PLAYER_ONE_TURN.getStatus());
	}
	
	@Test
	public void checkForWinnerTest() {
		System.out.println("checkForWinnerTest");
		Game game = gameServiceImpl.createGame("mockSession", "Frank");
		gameServiceImpl.createGame("mockSession", "Sophie");
		HashMap<Integer, Integer> pits = new HashMap<Integer, Integer>();
		
		pits.put(0, 0);
		pits.put(1, 0);
		pits.put(2, 0);
		pits.put(3, 0);
		pits.put(4, 0);
		pits.put(5, 1);
		pits.put(6, 33);
		pits.put(7, 2);
		pits.put(8, 3);
		pits.put(9, 8);
		pits.put(10, 10);
		pits.put(11, 8);
		pits.put(12, 0);
		pits.put(13, 10);
		game.getBoard().setPits(pits);
		
		gameServiceImpl.move(game.getGameId(), 5);
		assertEquals(game.getGameStatus(), Status.PLAYER_TWO_WINS.getStatus());
	}
	
}
