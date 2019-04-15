(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/sass/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".hidden {\n  display: none; }\n\n#form-container {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  border: 2px solid grey;\n  grid-template-areas: \". . . . . . . .\" \". . message message message message . .\" \". . player-name player-name play-button play-button . .\" \". . rules rules rules rules . .\" \". . rules rules rules rules . .\" \". . rules rules rules rules . .\" \". . rules rules rules rules . .\" \". . . . . . . .\"; }\n\n.message {\n  grid-area: message; }\n\n.player-name {\n  grid-area: player-name; }\n\n.play-button {\n  grid-area: play-button; }\n\n.rules {\n  grid-area: rules; }\n\n#game-container {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  grid-template-rows: repeat(13, 1fr);\n  grid-template-areas: \". . . header header header header . . .\" \". . . status status status status . . .\" \". player-one-area player-one-area player-one-area . . . . . .\" \". . . . . . . . . .\" \". . player-two-pit-12 player-two-pit-11 player-two-pit-10 player-two-pit-9 player-two-pit-8 player-two-pit-7 . .\" \". player-two-house . . . . . . player-one-house .\" \". . player-one-pit-1 player-one-pit-2 player-one-pit-3 player-one-pit-4 player-one-pit-5 player-one-pit-6 . .\" \". . . . . . . . . .\" \". . . . . . player-two-area player-two-area player-two-area .\" \". . . . . . . . . .\" \". . . . . . . . . .\" \". . . . . . . . . .\"; }\n\n.header {\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem; }\n\n.status {\n  grid-area: status;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem; }\n\n.player-one-area {\n  grid-area: player-one-area;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-house {\n  grid-area: player-two-house;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-1 {\n  grid-area: player-one-pit-1;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-2 {\n  grid-area: player-one-pit-2;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-3 {\n  grid-area: player-one-pit-3;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-4 {\n  grid-area: player-one-pit-4;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-5 {\n  grid-area: player-one-pit-5;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-6 {\n  grid-area: player-one-pit-6;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-house {\n  grid-area: player-one-house;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-7 {\n  grid-area: player-two-pit-7;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-8 {\n  grid-area: player-two-pit-8;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-9 {\n  grid-area: player-two-pit-9;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-10 {\n  grid-area: player-two-pit-10;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-11 {\n  grid-area: player-two-pit-11;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-12 {\n  grid-area: player-two-pit-12;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-area {\n  grid-area: player-two-area;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL0Q6XFxQcm9ncmFtbWluZ1xcYmFja2Jhc2VcXGthbGFoXFxmcm9udGVuZC9zcmNcXHNhc3NcXHN0eWxlcy5zY3NzIiwic3JjL3Nhc3MvRDpcXFByb2dyYW1taW5nXFxiYWNrYmFzZVxca2FsYWhcXGZyb250ZW5kL3NyY1xcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLG9TQUFvUyxFQUFBOztBQUd0UztFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLDZtQkFBNm1CLEVBQUE7O0FBRy9tQjtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDJCQUEyQjtFQ3JEM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkRYc0I7RUNZdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QURrRGpCO0VBQ0UsMkJBQTJCO0VDdEUzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlRERvQjtFQ0VwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBRGtFakI7RUFDRSwyQkFBMkI7RUMzRTNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVERG9CO0VDRXBCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEdUVqQjtFQUNFLDJCQUEyQjtFQ2hGM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUREb0I7RUNFcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUQ0RWpCO0VBQ0UsMkJBQTJCO0VDckYzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlRERvQjtFQ0VwQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBRGlGakI7RUFDRSwyQkFBMkI7RUMxRjNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVERG9CO0VDRXBCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEc0ZqQjtFQUNFLDJCQUEyQjtFQy9GM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUREb0I7RUNFcEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUQyRmpCO0VBQ0UsMkJBQTJCO0VDeEYzQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVEWm9CO0VDYXBCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEcUZqQjtFQUNFLDJCQUEyQjtFQ3pHM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJEQXNCO0VDQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEcUdqQjtFQUNFLDJCQUEyQjtFQzlHM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJEQXNCO0VDQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEMEdqQjtFQUNFLDJCQUEyQjtFQ25IM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJEQXNCO0VDQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEK0dqQjtFQUNFLDRCQUE0QjtFQ3hINUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJEQXNCO0VDQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEb0hqQjtFQUNFLDRCQUE0QjtFQzdINUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJEQXNCO0VDQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEeUhqQjtFQUNFLDRCQUE0QjtFQ2xJNUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJEQXNCO0VDQ3RCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FEOEhqQjtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL3Nhc3Mvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4vbWl4aW5zXCI7XHJcblxyXG4kcGxheWVyLW9uZS1jb2xvcjogcmVkO1xyXG4kcGxheWVyLXR3by1jb2xvcjogZ3JlZW47XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIC4gLiAuIC4gLiAuIC5cIiBcIi4gLiBtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZSBtZXNzYWdlIC4gLlwiIFwiLiAuIHBsYXllci1uYW1lIHBsYXllci1uYW1lIHBsYXktYnV0dG9uIHBsYXktYnV0dG9uIC4gLlwiIFwiLiAuIHJ1bGVzIHJ1bGVzIHJ1bGVzIHJ1bGVzIC4gLlwiIFwiLiAuIHJ1bGVzIHJ1bGVzIHJ1bGVzIHJ1bGVzIC4gLlwiIFwiLiAuIHJ1bGVzIHJ1bGVzIHJ1bGVzIHJ1bGVzIC4gLlwiIFwiLiAuIHJ1bGVzIHJ1bGVzIHJ1bGVzIHJ1bGVzIC4gLlwiIFwiLiAuIC4gLiAuIC4gLiAuXCI7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBncmlkLWFyZWE6IG1lc3NhZ2U7XHJcbn1cclxuXHJcbi5wbGF5ZXItbmFtZSB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItbmFtZTtcclxufVxyXG5cclxuLnBsYXktYnV0dG9uIHtcclxuICBncmlkLWFyZWE6IHBsYXktYnV0dG9uO1xyXG59XHJcblxyXG4ucnVsZXMge1xyXG4gIGdyaWQtYXJlYTogcnVsZXM7XHJcbn1cclxuXHJcbiNnYW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiAuIC4gaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIC4gLiAuXCIgXCIuIC4gLiBzdGF0dXMgc3RhdHVzIHN0YXR1cyBzdGF0dXMgLiAuIC5cIiBcIi4gcGxheWVyLW9uZS1hcmVhIHBsYXllci1vbmUtYXJlYSBwbGF5ZXItb25lLWFyZWEgLiAuIC4gLiAuIC5cIiBcIi4gLiAuIC4gLiAuIC4gLiAuIC5cIiBcIi4gLiBwbGF5ZXItdHdvLXBpdC0xMiBwbGF5ZXItdHdvLXBpdC0xMSBwbGF5ZXItdHdvLXBpdC0xMCBwbGF5ZXItdHdvLXBpdC05IHBsYXllci10d28tcGl0LTggcGxheWVyLXR3by1waXQtNyAuIC5cIiBcIi4gcGxheWVyLXR3by1ob3VzZSAuIC4gLiAuIC4gLiBwbGF5ZXItb25lLWhvdXNlIC5cIiBcIi4gLiBwbGF5ZXItb25lLXBpdC0xIHBsYXllci1vbmUtcGl0LTIgcGxheWVyLW9uZS1waXQtMyBwbGF5ZXItb25lLXBpdC00IHBsYXllci1vbmUtcGl0LTUgcGxheWVyLW9uZS1waXQtNiAuIC5cIiBcIi4gLiAuIC4gLiAuIC4gLiAuIC5cIiBcIi4gLiAuIC4gLiAuIHBsYXllci10d28tYXJlYSBwbGF5ZXItdHdvLWFyZWEgcGxheWVyLXR3by1hcmVhIC5cIiBcIi4gLiAuIC4gLiAuIC4gLiAuIC5cIiBcIi4gLiAuIC4gLiAuIC4gLiAuIC5cIiBcIi4gLiAuIC4gLiAuIC4gLiAuIC5cIjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnN0YXR1cyB7XHJcbiAgZ3JpZC1hcmVhOiBzdGF0dXM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnBsYXllci1vbmUtYXJlYSB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLWFyZWE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnBsYXllci10d28taG91c2Uge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLXR3by1ob3VzZTtcclxuICBAaW5jbHVkZSBwbGF5ZXJIb3VzZSgkcGxheWVyLXR3by1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItb25lLXBpdC0xIHtcclxuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTE7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItb25lLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci1vbmUtcGl0LTIge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLW9uZS1waXQtMjtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci1vbmUtY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLW9uZS1waXQtMyB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLXBpdC0zO1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLW9uZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItb25lLXBpdC00IHtcclxuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTQ7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItb25lLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci1vbmUtcGl0LTUge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLW9uZS1waXQtNTtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci1vbmUtY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLW9uZS1waXQtNiB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLXBpdC02O1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLW9uZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItb25lLWhvdXNlIHtcclxuICBncmlkLWFyZWE6IHBsYXllci1vbmUtaG91c2U7XHJcbiAgQGluY2x1ZGUgcGxheWVySG91c2UoJHBsYXllci1vbmUtY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLXR3by1waXQtNyB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItdHdvLXBpdC03O1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLXR3by1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItdHdvLXBpdC04IHtcclxuICBncmlkLWFyZWE6IHBsYXllci10d28tcGl0LTg7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItdHdvLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci10d28tcGl0LTkge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLXR3by1waXQtOTtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci10d28tY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLXR3by1waXQtMTAge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLXR3by1waXQtMTA7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItdHdvLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci10d28tcGl0LTExIHtcclxuICBncmlkLWFyZWE6IHBsYXllci10d28tcGl0LTExO1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLXR3by1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItdHdvLXBpdC0xMiB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItdHdvLXBpdC0xMjtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci10d28tY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLXR3by1hcmVhIHtcclxuICBncmlkLWFyZWE6IHBsYXllci10d28tYXJlYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbiIsIkBtaXhpbiBwbGF5ZXJQaXQoJGNvbG9yKSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBwbGF5ZXJIb3VzZSgkY29sb3IpIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gcGxheWVyQXJlYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBhbGw6IHVuc2V0O1xyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./src/sass/styles.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\backbase\kalah\frontend\src\sass\styles.scss */"./src/sass/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map