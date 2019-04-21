/**
 * 
 */
package com.aem.backbase.kalah.service;

import java.util.ArrayList;

import com.aem.backbase.kalah.domain.Game;
import com.aem.backbase.kalah.domain.Player;

/**
 * @author Andrew Ellis-Moseley
 *
 */
public interface NotificationService {
	
	void updatePlayersWithLatestGame(ArrayList<Player> players, Game game);
	
}
