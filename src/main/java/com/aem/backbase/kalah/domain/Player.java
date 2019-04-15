package com.aem.backbase.kalah.domain;

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
	
	public Player(int id, String name, String session) {
		this.id = id;
		this.name = name;
		this.playerSession = session;
		this.playerHouseIndex = (id == 1) ? PLAYER_ONE_HOUSE_INDEX : PLAYER_TWO_HOUSE_INDEX;
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

}
