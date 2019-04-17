(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/sass/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".hidden {\n  display: none; }\n\n#form-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 0.2fr 0.3fr 0.3fr 1.4fr 2.8fr;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid gray;\n  grid-template-areas: \". . .\" \". message .\" \". player .\" \". rules .\" \". . .\"; }\n\n.message {\n  grid-area: message;\n  font-size: 3rem; }\n\n.player {\n  grid-area: player; }\n\n.rules {\n  grid-area: rules;\n  grid-auto-rows: auto; }\n\n#game-container {\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  grid-template-areas: \". . . . . . . . . .\"\r \". . . header header header header . . .\"\r \". . . . status status . . . .\"\r \". player-two-area player-two-area player-two-area player-two-area . . . . .\"\r \". player-two-house player-two-pit-12 player-two-pit-11 player-two-pit-10 player-two-pit-9 player-two-pit-8 player-two-pit-7 player-one-house .\"\r \". player-two-house player-one-pit-0 player-one-pit-1 player-one-pit-2 player-one-pit-3 player-one-pit-4 player-one-pit-5 player-one-house .\"\r \". . . . . player-one-area player-one-area player-one-area player-one-area .\"\r \". . . . . . . . . .\"; }\n\n.header {\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem; }\n\n.status {\n  grid-area: status;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem; }\n\n.player-one-pit-0 {\n  grid-area: player-one-pit-0;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-1 {\n  grid-area: player-one-pit-1;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-2 {\n  grid-area: player-one-pit-2;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-3 {\n  grid-area: player-one-pit-3;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-4 {\n  grid-area: player-one-pit-4;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-pit-5 {\n  grid-area: player-one-pit-5;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-7 {\n  grid-area: player-two-pit-7;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-8 {\n  grid-area: player-two-pit-8;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-9 {\n  grid-area: player-two-pit-9;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-10 {\n  grid-area: player-two-pit-10;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-11 {\n  grid-area: player-two-pit-11;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-pit-12 {\n  grid-area: player-two-pit-12;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-house {\n  grid-area: player-two-house;\n  width: auto;\n  height: auto;\n  background: green;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-house {\n  grid-area: player-one-house;\n  width: auto;\n  height: auto;\n  background: red;\n  border: 2px solid grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-one-area {\n  grid-area: player-one-area;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n.player-two-area {\n  grid-area: player-two-area;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zYXNzL0Q6XFxQcm9ncmFtbWluZ1xcYmFja2Jhc2VcXGthbGFoXFxmcm9udGVuZC9zcmNcXHNhc3NcXHN0eWxlcy5zY3NzIiwic3JjL3Nhc3MvRDpcXFByb2dyYW1taW5nXFxiYWNrYmFzZVxca2FsYWhcXGZyb250ZW5kL3NyY1xcc2Fzc1xcX21peGlucy5zY3NzIiwic3JjL3Nhc3Mvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGlEQUFpRDtFQUNqRCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwyRUFBMkUsRUFBQTs7QUFHN0U7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsNGtCQWlCRCxFQUFBOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBVztFQ2xFWCxhQUFhO0VBQ2IsdUJBQVk7RUFDWixtQkFBYTtFQUNiLGVERG9CLEVBQUE7O0FFZ0R0QjtFRDVDRSwyQkFBdUI7RUFDdkIsa0JBQWE7RUFDYixZQUFXO0VDOENYLGFBQWE7RUZnQmYsZUFBaUI7RUFDZixzQkFBVztFQ3ZFWCxhQUFhO0VBQ2IsdUJBQVk7RUFDWixtQkFBYTtFQUNiLGVERG9CLEVBQUE7O0FFNER0QjtFRHhERSwyQkFBdUI7RUFDdkIsa0JBQWE7RUFDYixZQUFXO0VDMERYLGFBQWE7RUZTZixlQUFpQjtFQUNmLHNCQUFXO0VDNUVYLGFBQWE7RUFDYix1QkFBWTtFQUNaLG1CQUFhO0VBQ2IsZUREb0IsRUFBQTs7QUV3RXRCO0VEcEVFLDJCQUF1QjtFQUN2QixrQkFBYTtFQUNiLFlBQVc7RUNzRVgsYUFBYTtFRkVmLGVBQWlCO0VBQ2Ysc0JBQVc7RUNqRlgsYUFBYTtFQUNiLHVCQUFZO0VBQ1osbUJBQWE7RUFDYixlRERvQixFQUFBOztBRW9GdEI7RURoRkUsMkJBQXVCO0VBQ3ZCLGtCQUFhO0VBQ2IsWUFBVztFQ2tGWCxhQUFhO0VGTGYsZUFBaUI7RUFDZixzQkFBVztFQ3RGWCxhQUFhO0VBQ2IsdUJBQVk7RUFDWixtQkFBYTtFQUNiLGVERG9CLEVBQUE7O0FFZ0d0QjtFRDVGRSwyQkFBdUI7RUFDdkIsa0JBQWE7RUFDYixZQUFXO0VDOEZYLGFBQWE7RUZaZixlQUFpQjtFQUNmLHNCQUFXO0VDM0ZYLGFBQWE7RUFDYix1QkFBWTtFQUNaLG1CQUFhO0VBQ2IsZUREb0IsRUFBQTs7QUU0R3RCO0VEeEdFLDJCQUF1QjtFQUN2QixrQkFBYTtFQUNiLFlBQVc7RUMwR1gsYUFBYTtFRm5CZixlQUFpQjtFQUNmLHNCQUFXO0VDaEdYLGFBQWE7RUFDYix1QkFBWTtFQUNaLG1CQUFhO0VBQ2IsZURBaUIsRUFBSzs7QUV1SHhCO0VEcEhFLDJCQUF1QjtFQUN2QixrQkFBYTtFQUNiLFlBQVc7RUNzSFgsYUFBYTtFRjFCZixpQkFBa0I7RUFDaEIsc0JBQVc7RUNyR1gsYUFBYTtFQUNiLHVCQUFZO0VBQ1osbUJBQWE7RUFDYixlREFpQixFQUFLOztBRW1JeEI7RURoSUUsMkJBQXVCO0VBQ3ZCLGtCQUFhO0VBQ2IsWUFBVztFQ2tJWCxhQUFhO0VGakNmLGlCQUFrQjtFQUNoQixzQkFBVztFQzFHWCxhQUFhO0VBQ2IsdUJBQVk7RUFDWixtQkFBYTtFQUNiLGVEQWlCLEVBQUs7O0FFK0l4QjtFRDVJRSwyQkFBdUI7RUFDdkIsa0JBQWE7RUFDYixZQUFXO0VDOElYLGFBQWE7RUZ4Q2YsaUJBQW1CO0VBQ2pCLHNCQUFXO0VDL0dYLGFBQWE7RUFDYix1QkFBWTtFQUNaLG1CQUFhO0VBQ2IsZURBaUIsRUFBSzs7QUUySnhCO0VEeEpFLDRCQUF1QjtFQUN2QixrQkFBYTtFQUNiLFlBQVc7RUMwSlgsYUFBYTtFRi9DZixpQkFBbUI7RUFDakIsc0JBQVc7RUNwSFgsYUFBYTtFQUNiLHVCQUFZO0VBQ1osbUJBQWE7RUFDYixlREFpQixFQUFLOztBRXVLeEI7RURwS0UsNEJBQXVCO0VBQ3ZCLGtCQUFhO0VBQ2IsWUFBVztFQ3NLWCxhQUFhO0VGdERmLGlCQUFtQjtFQUNqQixzQkFBVztFQ3pIWCxhQUFhO0VBQ2IsdUJBQVk7RUFDWixtQkFBYTtFQUNiLGVEQWlCLEVBQUs7O0FFbUx4QjtFRGhMRSw0QkFBdUI7RUFDdkIsa0JBQWE7RUFDYixZQUFXO0VDa0xYLGFBQWE7RUY3RGYsaUJBQWtCO0VBQ2hCLHNCQUFXO0VDbEhYLGFBQVc7RUFDWCx1QkFBWTtFQUNaLG1CRFhzQjtFQ1l0QixlQUFRLEVBQUE7O0FDbUxWO0VEaExFLDJCQUFtQjtFQUNuQixXQUFXO0VDa0xYLFlBQVk7RUZuRWQsaUJBQWtCO0VBQ2hCLHNCQUFXO0VDdkhYLGFBQVc7RUFDWCx1QkFBWTtFQUNaLG1CRFpvQjtFQ2FwQixlQUFRLEVBQUE7O0FDOExWO0VEM0xFLDJCQUFtQjtFQUNuQixXQUFXO0VDNkxYLFlBQVk7RUZ6RWQsZUFBaUI7RUFDZixzQkFBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBRTJFakI7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFFIiwiZmlsZSI6InNyYy9zYXNzL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuL21peGluc1wiO1xyXG5cclxuJHBsYXllci1vbmUtY29sb3I6IHJlZDtcclxuJHBsYXllci10d28tY29sb3I6IGdyZWVuO1xyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2Zvcm0tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjNmciAwLjNmciAxLjRmciAyLjhmcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIC4gLlwiIFwiLiBtZXNzYWdlIC5cIiBcIi4gcGxheWVyIC5cIiBcIi4gcnVsZXMgLlwiIFwiLiAuIC5cIjtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGdyaWQtYXJlYTogbWVzc2FnZTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi5wbGF5ZXIge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyO1xyXG59XHJcblxyXG4ucnVsZXMge1xyXG4gIGdyaWQtYXJlYTogcnVsZXM7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbn1cclxuXHJcbiNnYW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMC41cmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiLiAuIC4gLiAuIC4gLiAuIC4gLlwiXHJcbiAgICBcIi4gLiAuIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciAuIC4gLlwiXHJcbiAgICBcIi4gLiAuIC4gc3RhdHVzIHN0YXR1cyAuIC4gLiAuXCJcclxuICAgIFwiLiBwbGF5ZXItdHdvLWFyZWEgcGxheWVyLXR3by1hcmVhIHBsYXllci10d28tYXJlYSBwbGF5ZXItdHdvLWFyZWEgLiAuIC4gLiAuXCJcclxuICAgIFwiLiBwbGF5ZXItdHdvLWhvdXNlIHBsYXllci10d28tcGl0LTEyIHBsYXllci10d28tcGl0LTExIHBsYXllci10d28tcGl0LTEwIHBsYXllci10d28tcGl0LTkgcGxheWVyLXR3by1waXQtOCBwbGF5ZXItdHdvLXBpdC03IHBsYXllci1vbmUtaG91c2UgLlwiXHJcbiAgICBcIi4gcGxheWVyLXR3by1ob3VzZSBwbGF5ZXItb25lLXBpdC0wIHBsYXllci1vbmUtcGl0LTEgcGxheWVyLW9uZS1waXQtMiBwbGF5ZXItb25lLXBpdC0zIHBsYXllci1vbmUtcGl0LTQgcGxheWVyLW9uZS1waXQtNSBwbGF5ZXItb25lLWhvdXNlIC5cIlxyXG4gICAgXCIuIC4gLiAuIC4gcGxheWVyLW9uZS1hcmVhIHBsYXllci1vbmUtYXJlYSBwbGF5ZXItb25lLWFyZWEgcGxheWVyLW9uZS1hcmVhIC5cIlxyXG4gICAgXCIuIC4gLiAuIC4gLiAuIC4gLiAuXCI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIGdyaWQtYXJlYTogc3RhdHVzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5wbGF5ZXItb25lLXBpdC0wIHtcclxuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTA7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItb25lLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci1vbmUtcGl0LTEge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLW9uZS1waXQtMTtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci1vbmUtY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLW9uZS1waXQtMiB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLXBpdC0yO1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLW9uZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItb25lLXBpdC0zIHtcclxuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTM7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItb25lLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci1vbmUtcGl0LTQge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLW9uZS1waXQtNDtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci1vbmUtY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLW9uZS1waXQtNSB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLXBpdC01O1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLW9uZS1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItdHdvLXBpdC03IHtcclxuICBncmlkLWFyZWE6IHBsYXllci10d28tcGl0LTc7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItdHdvLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci10d28tcGl0LTgge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLXR3by1waXQtODtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci10d28tY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLXR3by1waXQtOSB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItdHdvLXBpdC05O1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLXR3by1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItdHdvLXBpdC0xMCB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItdHdvLXBpdC0xMDtcclxuICBAaW5jbHVkZSBwbGF5ZXJQaXQoJHBsYXllci10d28tY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLXR3by1waXQtMTEge1xyXG4gIGdyaWQtYXJlYTogcGxheWVyLXR3by1waXQtMTE7XHJcbiAgQGluY2x1ZGUgcGxheWVyUGl0KCRwbGF5ZXItdHdvLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci10d28tcGl0LTEyIHtcclxuICBncmlkLWFyZWE6IHBsYXllci10d28tcGl0LTEyO1xyXG4gIEBpbmNsdWRlIHBsYXllclBpdCgkcGxheWVyLXR3by1jb2xvcik7XHJcbn1cclxuXHJcbi5wbGF5ZXItdHdvLWhvdXNlIHtcclxuICBncmlkLWFyZWE6IHBsYXllci10d28taG91c2U7XHJcbiAgQGluY2x1ZGUgcGxheWVySG91c2UoJHBsYXllci10d28tY29sb3IpO1xyXG59XHJcblxyXG4ucGxheWVyLW9uZS1ob3VzZSB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLWhvdXNlO1xyXG4gIEBpbmNsdWRlIHBsYXllckhvdXNlKCRwbGF5ZXItb25lLWNvbG9yKTtcclxufVxyXG5cclxuLnBsYXllci1vbmUtYXJlYSB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLWFyZWE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnBsYXllci10d28tYXJlYSB7XHJcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItdHdvLWFyZWE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4iLCJAbWl4aW4gcGxheWVyUGl0KCRjb2xvcikge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gcGxheWVySG91c2UoJGNvbG9yKSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbkBtaXhpbiBwbGF5ZXJBcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGFsbDogdW5zZXQ7XHJcbn1cclxuIiwiLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuI2Zvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjNmciAwLjNmciAxLjRmciAyLjhmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiAuIC5cIiBcIi4gbWVzc2FnZSAuXCIgXCIuIHBsYXllciAuXCIgXCIuIHJ1bGVzIC5cIiBcIi4gLiAuXCI7IH1cblxuLm1lc3NhZ2Uge1xuICBncmlkLWFyZWE6IG1lc3NhZ2U7XG4gIGZvbnQtc2l6ZTogM3JlbTsgfVxuXG4ucGxheWVyIHtcbiAgZ3JpZC1hcmVhOiBwbGF5ZXI7IH1cblxuLnJ1bGVzIHtcbiAgZ3JpZC1hcmVhOiBydWxlcztcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87IH1cblxuI2dhbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDAuNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiAuIC4gLiAuIC4gLiAuIC4gLlwiXHIgXCIuIC4gLiBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgLiAuIC5cIlxyIFwiLiAuIC4gLiBzdGF0dXMgc3RhdHVzIC4gLiAuIC5cIlxyIFwiLiBwbGF5ZXItdHdvLWFyZWEgcGxheWVyLXR3by1hcmVhIHBsYXllci10d28tYXJlYSBwbGF5ZXItdHdvLWFyZWEgLiAuIC4gLiAuXCJcciBcIi4gcGxheWVyLXR3by1ob3VzZSBwbGF5ZXItdHdvLXBpdC0xMiBwbGF5ZXItdHdvLXBpdC0xMSBwbGF5ZXItdHdvLXBpdC0xMCBwbGF5ZXItdHdvLXBpdC05IHBsYXllci10d28tcGl0LTggcGxheWVyLXR3by1waXQtNyBwbGF5ZXItb25lLWhvdXNlIC5cIlxyIFwiLiBwbGF5ZXItdHdvLWhvdXNlIHBsYXllci1vbmUtcGl0LTAgcGxheWVyLW9uZS1waXQtMSBwbGF5ZXItb25lLXBpdC0yIHBsYXllci1vbmUtcGl0LTMgcGxheWVyLW9uZS1waXQtNCBwbGF5ZXItb25lLXBpdC01IHBsYXllci1vbmUtaG91c2UgLlwiXHIgXCIuIC4gLiAuIC4gcGxheWVyLW9uZS1hcmVhIHBsYXllci1vbmUtYXJlYSBwbGF5ZXItb25lLWFyZWEgcGxheWVyLW9uZS1hcmVhIC5cIlxyIFwiLiAuIC4gLiAuIC4gLiAuIC4gLlwiOyB9XG5cbi5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTsgfVxuXG4uc3RhdHVzIHtcbiAgZ3JpZC1hcmVhOiBzdGF0dXM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07IH1cblxuLnBsYXllci1vbmUtcGl0LTAge1xuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci1vbmUtcGl0LTEge1xuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci1vbmUtcGl0LTIge1xuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci1vbmUtcGl0LTMge1xuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci1vbmUtcGl0LTQge1xuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci1vbmUtcGl0LTUge1xuICBncmlkLWFyZWE6IHBsYXllci1vbmUtcGl0LTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci10d28tcGl0LTcge1xuICBncmlkLWFyZWE6IHBsYXllci10d28tcGl0LTc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuXG4ucGxheWVyLXR3by1waXQtOCB7XG4gIGdyaWQtYXJlYTogcGxheWVyLXR3by1waXQtODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtOyB9XG5cbi5wbGF5ZXItdHdvLXBpdC05IHtcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItdHdvLXBpdC05O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci10d28tcGl0LTEwIHtcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItdHdvLXBpdC0xMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtOyB9XG5cbi5wbGF5ZXItdHdvLXBpdC0xMSB7XG4gIGdyaWQtYXJlYTogcGxheWVyLXR3by1waXQtMTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuXG4ucGxheWVyLXR3by1waXQtMTIge1xuICBncmlkLWFyZWE6IHBsYXllci10d28tcGl0LTEyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci10d28taG91c2Uge1xuICBncmlkLWFyZWE6IHBsYXllci10d28taG91c2U7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtOyB9XG5cbi5wbGF5ZXItb25lLWhvdXNlIHtcbiAgZ3JpZC1hcmVhOiBwbGF5ZXItb25lLWhvdXNlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuLnBsYXllci1vbmUtYXJlYSB7XG4gIGdyaWQtYXJlYTogcGxheWVyLW9uZS1hcmVhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtOyB9XG5cbi5wbGF5ZXItdHdvLWFyZWEge1xuICBncmlkLWFyZWE6IHBsYXllci10d28tYXJlYTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuIl19 */", '', '']]

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