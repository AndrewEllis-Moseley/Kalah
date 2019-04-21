(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"form-container\" *ngIf=\"!playerConnected\">\n  <div class=\"message\">Welcome to Kalah</div>\n  <div class=\"player\">\n    <label for=\"\">Enter Player Name:</label>\n    <input #playerName type=\"text\" /><button\n      (click)=\"connect(playerName.value)\"\n    >\n      Let's Play\n    </button>\n  </div>\n  <div class=\"rules\">\n    <h2>The Game</h2>\n    <p>\n      Kalah is a two player, turn-based game. It is played with a board\n      consisting of 12 small holes, two scoring wells and 72 stones. Each player\n      (P1: North and P2: South) owns the six pits closest to them (numbered 1 to\n      6) and one scoring house.\n    </p>\n    <h2>The Rules:</h2>\n    <ul>\n      <li>Start of Play</li>\n      <p>\n        The game starts with 6 stones in each of the pit with player 1 going\n        first.\n      </p>\n      <li>The Move</li>\n      <p>\n        The player whose turn it is chooses one of the 6 pits they own which is\n        not empty. The stone from that pit are removed and deposited one by one\n        into the subsequent pits moving counter clockwise, skipping only the\n        opponent's scoring house.\n      </p>\n\n      <p>\n        If the last stone is deposited into the current player's scoring house,\n        that player must take another turn.\n      </p>\n\n      <p>\n        If the last stone is deposited into an empty pit owned by the current\n        player and the pit opposite is not empty, the player captures all of the\n        stones in the opposite pit plus the capturing stones, which go into the\n        player's scoring house.\n      </p>\n\n      <p>\n        The player's turn ends with a capture or when the last stone is\n        deposited into a pit other than the player's scoring house.\n      </p>\n      <li>End Game</li>\n      <p>\n        If it is a player's turn and all of his pits are empty, then he has no\n        legal move and the game ends. All stones which are not in one of the\n        scoring wells are deposited into the house of the opposing player. The\n        player whose scoring house contains the most stones is the winner.\n      </p>\n    </ul>\n  </div>\n</div>\n\n<div id=\"game-container\" *ngIf=\"playerConnected\">\n  <div class=\"header\">Welcome - Game ID: {{ gameId }}</div>\n  <div class=\"player-one-pit-1\" (click)=\"move(1)\">{{ pits[1] }}</div>\n  <div class=\"player-one-pit-0\" (click)=\"move(0)\">{{ pits[0] }}</div>\n  <div class=\"player-one-pit-2\" (click)=\"move(2)\">{{ pits[2] }}</div>\n  <div class=\"player-one-pit-3\" (click)=\"move(3)\">{{ pits[3] }}</div>\n  <div class=\"player-one-pit-4\" (click)=\"move(4)\">{{ pits[4] }}</div>\n  <div class=\"player-one-pit-5\" (click)=\"move(5)\">{{ pits[5] }}</div>\n  <div class=\"player-two-pit-7\" (click)=\"move(7)\">{{ pits[7] }}</div>\n  <div class=\"player-two-pit-8\" (click)=\"move(8)\">{{ pits[8] }}</div>\n  <div class=\"player-two-pit-9\" (click)=\"move(9)\">{{ pits[9] }}</div>\n  <div class=\"player-two-pit-10\" (click)=\"move(10)\">{{ pits[10] }}</div>\n  <div class=\"player-two-pit-11\" (click)=\"move(11)\">{{ pits[11] }}</div>\n  <div class=\"player-two-pit-12\" (click)=\"move(12)\">{{ pits[12] }}</div>\n  <div class=\"player-two-house\">{{ pits[13] }}</div>\n  <div class=\"player-one-house\">{{ pits[6] }}</div>\n  <div class=\"player-one-area\">\n    <h2>Player One: {{ playerOneName }} - RED</h2>\n  </div>\n  <div class=\"player-two-area\">\n    <h2>Player Two: {{ playerTwoName }} - GREEN</h2>\n  </div>\n  <div class=\"status\">Status: {{ status }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2dyYW1taW5nXFxiYWNrYmFzZVxca2FsYWhcXGZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.endpoint = "/ws-kalah-game";
        this.title = "Kalah";
        this.sessionId = Math.random()
            .toString(36)
            .substring(7);
        this.playerTwoName = "Awaiting Opponent";
        this.playerConnected = false;
        this.disablePlayerOne = true;
        this.hidePlayerTwo = true;
        this.disablePlayerTwo = true;
        this.pits = null;
        this.bothNamesSet = false;
    }
    AppComponent.prototype.setConnected = function (connected) {
        console.log("CONNECTED", connected);
    };
    AppComponent.prototype.connect = function (playerName) {
        var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.endpoint);
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
        var that = this;
        this.stompClient.connect({}, function (frame) {
            that.stompClient.subscribe("/topic/updateBoard/" + that.sessionId, function (view) {
                that.updateBoard(JSON.parse(view.body));
            });
            that.sendName(playerName);
        });
    };
    AppComponent.prototype.updateBoard = function (game) {
        this.pits = game.board.pits;
        this.status = game.gameStatus;
        this.gameId = game.gameId;
        if (!this.bothNamesSet) {
            var name_1 = JSON.parse(game.players[0].name);
            this.playerOneName = name_1.playerName;
            if (game.players.length > 1) {
                var name_2 = JSON.parse(game.players[1].name);
                this.playerTwoName = name_2.playerName;
                this.bothNamesSet = true;
            }
        }
    };
    AppComponent.prototype.showStatus = function (message) {
        this.gameId = message.gameId;
    };
    AppComponent.prototype.sendName = function (pn) {
        this.stompClient.send("/app/game/" + this.sessionId, {}, JSON.stringify({ playerName: pn }));
        this.playerConnected = true;
    };
    AppComponent.prototype.move = function (pit) {
        this.stompClient.send("/app/move/" + this.sessionId, {}, JSON.stringify({ gameId: this.gameId, pit: pit }));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\backbase\kalah\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map