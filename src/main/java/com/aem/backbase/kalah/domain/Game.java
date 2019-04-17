/**
 * 
 */
package com.aem.backbase.kalah.domain;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import com.aem.backbase.kalah.domain.enums.Status;

/**
 * @author Andrew Ellis-Moseley
 *
 */
public class Game {
	
	private int gameId;
	private String gameStatus;
	private static final int PLAYER_ONE_ID = 1;
	ArrayList<Player> players = new ArrayList<>();
	private static int GAME_ID = 0;
	private int activePlayer = 1;
	
	@Autowired
	private Board board;
	
	public Game(String name, String session) {
		this.setGameId(GAME_ID++);
		this.setGameStatus(Status.AWAITING_PLAYER.getStatus());
		this.addPlayer(PLAYER_ONE_ID, name, session);
		this.board = new Board();
		this.setActivePlayer(activePlayer); 
	}

	public int getGameId() {
		return gameId;
	}

	public void setGameId(int gameId) {
		this.gameId = gameId;
	}

	public String getGameStatus() {
		return gameStatus;
	}

	public void setGameStatus(String gameStatus) {
		this.gameStatus = gameStatus;
	}

	public ArrayList<Player> getPlayers() {
		return players;
	}

	public void setPlayers(ArrayList<Player> players) {
		this.players = players;
	}

	public void addPlayer(int id, String name, String session) {
		players.add(new Player(id, name, session));
	}

	public Board getBoard() {
		return board;
	}

	public void setBoard(Board board) {
		this.board = board;
	}

	public int getActivePlayer() {
		return activePlayer;
	}

	public void setActivePlayer(int activePlayer) {
		this.activePlayer = activePlayer;
	}
	
	
	
}
