import { Component } from "@angular/core";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private endpoint = "/ws-kalah-game";
  private title = "Kalah";
  private stompClient;
  private sessionId = Math.random()
    .toString(36)
    .substring(7);
  private playerOneName: string;
  private playerTwoName = "Awaiting Opponent";
  private status: String;
  private gameId: number;
  public playerConnected = false;
  public disablePlayerOne = true;
  public hidePlayerTwo = true;
  public disablePlayerTwo = true;
  public pits = null;
  private bothNamesSet = false;

  constructor() {}

  setConnected(connected) {
    console.log("CONNECTED", connected);
  }

  connect(playerName) {
    let ws = new SockJS(this.endpoint);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe(
        `/topic/updateBoard/${that.sessionId}`,
        view => {
          that.updateBoard(JSON.parse(view.body));
        }
      );
      that.sendName(playerName);
    });
  }

  updateBoard(game) {
    this.pits = game.board.pits;
    this.status = game.gameStatus;
    this.gameId = game.gameId;

    if (!this.bothNamesSet) {
      let name = JSON.parse(game.players[0].name);
      this.playerOneName = name.playerName;
      if (game.players.length > 1) {
        let name = JSON.parse(game.players[1].name);
        this.playerTwoName = name.playerName;
        this.bothNamesSet = true;
      }
    }
  }

  showStatus(message) {
    this.gameId = message.gameId;
  }

  sendName(pn) {
    this.stompClient.send(
      "/app/game/" + this.sessionId,
      {},
      JSON.stringify({ playerName: pn })
    );
    this.playerConnected = true;
  }

  move(pit) {
    this.stompClient.send(
      `/app/move/${this.sessionId}`,
      {},
      JSON.stringify({ gameId: this.gameId, pit: pit })
    );
  }
}
