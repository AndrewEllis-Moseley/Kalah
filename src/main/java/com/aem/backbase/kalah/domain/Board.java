/**
 * 
 */
package com.aem.backbase.kalah.domain;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Andrew Ellis-Moseley
 *
 */
public class Board {

	private static final int NUMBER_OF_STONES = 6;
	private static final int NUMBER_OF_PITS = 14;
	
	HashMap<Integer, Integer> pits = new HashMap<>();
	
	@Autowired
	public Board() {
		for (int i = 0; i<NUMBER_OF_PITS; i++) {
			if (i == 6 || i == 13) {
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
