package com.aem.backbase.kalah.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.aem.backbase.kalah.DTO.MoveDTO;
import com.aem.backbase.kalah.service.GameService;

@Controller 
public class GameController {

	@Autowired 
	private GameService gameService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@MessageMapping("/game/{sessionId}")
    public void getConnection(@DestinationVariable String sessionId, @Payload String name) throws Exception {
		System.out.println("******CREATING GAME******");
		gameService.createGame(sessionId, name);
		System.out.println("******GAME CREATED******");
    }
	
	@MessageMapping("/move/{sessionId}")
    public void move(@DestinationVariable String sessionId, @Payload MoveDTO moveDTO) throws Exception {
		System.out.println("******MAKING A MOVE******");
        gameService.move(moveDTO.getGameId(), moveDTO.getPit());
        System.out.println("******MOVE COMPLETE******");
    }
	
}
