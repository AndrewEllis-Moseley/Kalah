import { Component } from "@angular/core";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import $ from "jquery";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private endpoint = "/kalah-websocket";
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
    console.log("Setting up connection");
    console.log("About to connect");
    this.stompClient.connect({}, function(frame) {
      console.log("Going to subscribe ... ");
      that.stompClient.subscribe(
        `/topic/connection/${that.sessionId}`,
        payload => {
          console.log("Subscribe: Incoming message: " + payload.body);
          if (payload.body) {
            let message = JSON.parse(payload.body);
            that.status = message.status;
            that.gameId = message.gameId;
          }
        },
        error => {
          console.log("Subscribe: error: " + error);
        },
        () => {
          console.log("Subscribe, On complete");
        }
      );

      that.stompClient.subscribe(
        `/topic/connection/${that.sessionId}`,
        status => {
          that.showStatus(JSON.parse(status.body));
        }
      );

      // that.stompClient.subscribe(`/topic/turn/${that.sessionId}`, turn => {
      //   that.setTurn(turn.body);
      // });

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
    console.log("GAME: ", game);
    this.pits = game.board.pits;
    this.status = game.gameStatus;

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
    console.log("SHOW STATUS CALLED?????", message);
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
