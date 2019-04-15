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
	
	void notifyPlayerOfStatus(ArrayList<Player> arrayList, String status, int gameId);
	
	void notifyWhosMoving(ArrayList<Player> players, Game game);

	void updatePlayersWithLatestGame(ArrayList<Player> players, Game game);
}
