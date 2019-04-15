/**
 * 
 */
package com.aem.backbase.kalah.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.aem.backbase.kalah.DTO.NotificationMessageDTO;
import com.aem.backbase.kalah.domain.Game;
import com.aem.backbase.kalah.domain.Player;
import com.aem.backbase.kalah.service.NotificationService;

/**
 * @author Andrew Ellis-Moseley
 *
 */
@Service
public class NotificationServiceImpl implements NotificationService {

	@Autowired
	private SimpMessagingTemplate template;
	
	@Override
	public void notifyPlayerOfStatus(ArrayList<Player> players, String status, int gameId) {
		NotificationMessageDTO messageDTO = new NotificationMessageDTO(status, gameId);
		for (Player p : players) {
			template.convertAndSend("/topic/connection/" + p.getPlayerSession(), messageDTO);
		}	
	}

	public void notifyWhosMoving(ArrayList<Player> players, Game game) {
		for (Player p : players) {
			template.convertAndSend("/topic/turn/" + p.getPlayerSession(), game.getGameStatus());
		}
	}

	@Override
	public void updatePlayersWithLatestGame(ArrayList<Player> players, Game game) {
		for (Player p : players) {
			template.convertAndSend("/topic/updateBoard/"  + p.getPlayerSession(), game);
		}	
	}

}
