/**
 * 
 */
package com.aem.backbase.kalah.DTO;

/**
 * @author Andrew Ellis-Moseley
 *
 */
public class NotificationMessageDTO {
	
	private String status;
	private int gameId;
	
	public NotificationMessageDTO(String status, int gameId) {
		this.status = status;
		this.gameId = gameId;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getGameId() {
		return gameId;
	}
	public void setGameId(int gameId) {
		this.gameId = gameId;
	}
}
