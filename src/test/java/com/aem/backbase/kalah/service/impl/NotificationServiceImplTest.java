package com.aem.backbase.kalah.service.impl;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import com.aem.backbase.kalah.domain.Game;
import com.aem.backbase.kalah.domain.Player;

public class NotificationServiceImplTest {
	
	private Game game;
	
	@Mock
	SimpMessagingTemplate template;
	
	@InjectMocks
	private NotificationServiceImpl notificationServiceImpl;
	
	@Before
    public void init() {
        System.out.println("startup");
        GameServiceImpl gameService = mock(GameServiceImpl.class);
        gameService.createGame("MockSession", "Bob");
        game = gameService.createGame("mockSession", "Frank");
        
       
    }
 
    @After
    public void finalize() {
        System.out.println("finalize");
    }
    
	@Test
	public void updatePlayersWithLatestGameTest() {
		notificationServiceImpl.updatePlayersWithLatestGame(game.getPlayers(), game);
		for (Player p: game.getPlayers()) {
			verify(template).convertAndSend("/topic/updateBoard/" + p.getPlayerSession(), game);
		}
	}
}
