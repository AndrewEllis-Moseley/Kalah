package com.aem.backbase.kalah.domain;

import java.util.ArrayList;

/**
 * @author Andrew Ellis-Moseley
 * @dateCreate 09/04/2019
 * 
 * This class contains the information needed for a player to take part in the game.
 * Each game can only have two players, for this the index of a player will either be 1 (Player 1) or 2 (Player 2).
 * Each player requires a unique session in order to trace and return the correct information.
 *
 */
public class Player {
	
	private int id;
	private String name;
	private String playerSession;
	private int playerHouseIndex;
	private static final int PLAYER_ONE_HOUSE_INDEX = 6;
	private static final int PLAYER_TWO_HOUSE_INDEX = 13;
	ArrayList<Integer> boardRange = new ArrayList<Integer>(6);
	
	public Player(int id, String name, String session) {
		this.id = id;
		this.name = name;
		this.playerSession = session;
		this.playerHouseIndex = (id == 1) ? PLAYER_ONE_HOUSE_INDEX : PLAYER_TWO_HOUSE_INDEX;
		createRange(id);
		
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPlayerSession() {
		return playerSession;
	}
	public void setPlayerSession(String playerSession) {
		this.playerSession = playerSession;
	}

	public int getPlayerHouseIndex() {
		return playerHouseIndex;
	}

	public void setPlayerHouseIndex(int playerHouseIndex) {
		this.playerHouseIndex = playerHouseIndex;
	}

	public ArrayList<Integer> getBoardRange() {
		return boardRange;
	}

	public void setBoardRange(ArrayList<Integer> boardRange) {
		this.boardRange = boardRange;
	}
	
	private void createRange(int id) {
		if (id == 1) {
			for (int i=0;i<PLAYER_ONE_HOUSE_INDEX;i++) {
				boardRange.add(i);
			} 
		} else {
			for (int i=7;i<PLAYER_TWO_HOUSE_INDEX;i++) {
				boardRange.add(i);
			}
		}
	}

}
