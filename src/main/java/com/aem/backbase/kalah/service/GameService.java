package com.aem.backbase.kalah.service;

import com.aem.backbase.kalah.domain.Game;

public interface GameService {
	
	Game createGame(String playerName, String session);
	
	void move(int gameId, int pit);
}
