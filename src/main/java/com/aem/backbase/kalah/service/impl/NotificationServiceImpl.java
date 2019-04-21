/**
 * 
 */
package com.aem.backbase.kalah.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.aem.backbase.kalah.domain.Game;
import com.aem.backbase.kalah.domain.Player;
import com.aem.backbase.kalah.service.NotificationService;

/**
 * @author Andrew Ellis-Moseley
 * 
 * This service notifies the players of the current game state
 *
 */
@Service
public class NotificationServiceImpl implements NotificationService {

	@Autowired
	private SimpMessagingTemplate template;

	/**
	 * Notifies both players of the current game state
	 */
	@Override
	public void updatePlayersWithLatestGame(ArrayList<Player> players, Game game) {
		for (Player p : players) {
			template.convertAndSend("/topic/updateBoard/" + p.getPlayerSession(), game);
		}
	}

}
