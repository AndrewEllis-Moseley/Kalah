package com.aem.backbase.kalah.service.impl;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.aem.backbase.kalah.domain.Game;

@RunWith(MockitoJUnitRunner.class)
public class GameServiceImplTest {
	
	@Mock
	GameServiceImpl gameService = new GameServiceImpl();

	Game game = gameService.createGame("mockSession", "Bob");
	
	@InjectMocks
	private NotificationServiceImpl notificationService;
	
	@Test
	public void createNewGameTest() {
		assertEquals(game.getGameId(), 0);
		System.out.println("GAME CREATED WITH AN ID OF 0.");
		assertEquals(game.getPlayers().size(), 1);
		System.out.println("GAME CONTAINS ONLY 1 PLAYER WHEN ORIGINALLY CREATED.");
		assertEquals(game.getGameStatus(), "Awaiting Player");
		System.out.println("GAME STATUS IS SET TO Awaiting Player.");
	}

	@Test
	public void joinActiveGameTest() { 
		Game game = gameService.createGame("mockSession", "Frank");
		assertEquals(game.getGameId(), 0);
		System.out.println("GAME ID SHOULD BE 1");
		assertEquals(game.getPlayers().size(), 2);
		System.out.println("NEW PLAYER ADDED TO CURRENT GAME");
	}
}
