/**
 * 
 */
package com.aem.backbase.kalah.domain.enums;

/**
 * @author Andrew Ellis-Moseley
 * 
 * All states for a game
 *
 */
public enum Status {
	AWAITING_PLAYER ("Awaiting Player"),
	IN_PROGRESS ("In Progress"),
	PLAYER_ONE_TURN ("Player One Turn"),
	PLAYER_TWO_TURN ("Player Two Turn"),
	PLAYER_ONE_WINS ("Player One Wins"),
	PLAYER_TWO_WINS ("Player Two Wins"),
	PLAYER_ONE_ANOTHER_TURN ("Player One Has Another Turn"),
	PLAYER_TWO_ANOTHER_TURN ("Player Two Has Another Turn");
	
	private String status;
	
	Status(String s) {
		this.status = s;
	}
	
	public String getStatus() {
		return status;
	}
	
}
