/**
 * 
 */
package com.aem.backbase.kalah.DTO;

/**
 * @author Andrew Ellis-Moseley
 * 
 * DTO used to store the details of a players move to be used as part of the {@link GameServiceImpl}
 *
 */
public class MoveDTO {
	
	private int gameId;
	private int pit;
	
	public int getGameId() {
		return gameId;
	}
	public void setGameId(int gameId) {
		this.gameId = gameId;
	}
	public int getPit() {
		return pit;
	}
	public void setPit(int pit) {
		this.pit = pit;
	}
	
	

}
