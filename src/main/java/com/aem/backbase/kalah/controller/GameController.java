package com.aem.backbase.kalah.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.aem.backbase.kalah.DTO.MoveDTO;
import com.aem.backbase.kalah.service.GameService;

/**
 * 
 * @author Andrew Ellis-Moseley
 * 
 * GameController class contains the message mapping a player can use in other to
 * interact with a game
 *
 */
@Controller 
public class GameController {

	@Autowired 
	private GameService gameService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@MessageMapping("/game/{sessionId}")
    public void getConnection(@DestinationVariable String sessionId, @Payload String name) throws Exception {
		gameService.createGame(sessionId, name);
    }
	
	@MessageMapping("/move/{sessionId}")
    public void move(@DestinationVariable String sessionId, @Payload MoveDTO moveDTO) throws Exception {
        gameService.move(moveDTO.getGameId(), moveDTO.getPit());
    }
	
}
