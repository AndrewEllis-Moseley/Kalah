/**
 * 
 */
package com.aem.backbase.kalah.domain;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Andrew Ellis-Moseley
 *
 * Board class which builds the board for the {@link game}
 */
public class Board {

	private static final int NUMBER_OF_STONES = 6;
	private static final int NUMBER_OF_PITS = 14;
	private static final int PLAYER_ONE_HOUSE = 6;
	private static final int PLAYER_TWO_HOUSE = 13;
	
	HashMap<Integer, Integer> pits = new HashMap<>();
	
	@Autowired
	public Board() {
		for (int i = 0; i<NUMBER_OF_PITS; i++) {
			if (i == PLAYER_ONE_HOUSE || i == PLAYER_TWO_HOUSE) {
				pits.put(i, 0);
			} else {
				pits.put(i, NUMBER_OF_STONES);	
			}
		}
	}

	public HashMap<Integer, Integer> getPits() {
		return pits;
	}

	public void setPits(HashMap<Integer, Integer> pits) {
		this.pits = pits;
	}	
	
}
