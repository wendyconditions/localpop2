(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Slight';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 82px auto 32px;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #888;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .card.card-small[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(black, 0.35);\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: rgb(105, 103, 103);\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%] {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n\r\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 60px;\r\n  }\r\n\r\n  svg#rocket[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: -24px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 95px);\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 180px;\r\n    z-index: -10;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%] {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27,31,35,.2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]:hover {\r\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n    border-color: rgba(27,31,35,.35);\r\n    background-position: -.5em;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n  }\r\n\r\n  svg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n\r\n  \r\n\r\n  @media screen and (max-width: 767px) {\r\n\r\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      right: 120px;\r\n      transform: rotate(-5deg);\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 575px) {\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsMEpBQTBKO0lBQzFKLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7RUFDcEM7O0VBRUE7Ozs7OztJQU1FLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLE9BQU87RUFDVDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQix3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBOzs7SUFHRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9FQUFvRTtJQUNwRSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3RUFBd0U7SUFDeEUsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsOERBQThEO0lBQzlELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0lBQWtJO0VBQ3BJOztFQUVBO0lBQ0UsOERBQThEO0lBQzlELGdDQUFnQztJQUNoQywwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBR0Esc0JBQXNCOztFQUN0Qjs7SUFFRTs7TUFFRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsWUFBWTtNQUNaLHdCQUF3QjtJQUMxQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIDpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciBpbWcge1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogIzg4ODtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC1zbWFsbCB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTY4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtMjRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgfVxyXG5cclxuICBhLFxyXG4gIGE6dmlzaXRlZCxcclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzEyNTY5OTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgIGNvbG9yOiAjYzJjM2M0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgIHRleHQtaW5kZW50OiA0cHg7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwgcHJlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbmsge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjMjQyOTJlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0xNjBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIHdpZHRoOiAxOTIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gICAgLnRlcm1pbmFsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurant-profile/restaurant-profile.component */ "./src/app/restaurant-profile/restaurant-profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _services_interceptors_404_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/interceptors/404.interceptor */ "./src/app/services/interceptors/404.interceptor.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_interceptors_404_interceptor__WEBPACK_IMPORTED_MODULE_16__["HttpErrorInterceptorProvider"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"] },
                { path: 'restaurant/:restaurantId', component: _restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantProfileComponent"] },
                { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] },
                { path: '**', redirectTo: '/404' }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
        _restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantProfileComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
                    _restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantProfileComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                        { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"] },
                        { path: 'restaurant/:restaurantId', component: _restaurant_profile_restaurant_profile_component__WEBPACK_IMPORTED_MODULE_6__["RestaurantProfileComponent"] },
                        { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] },
                        { path: '**', redirectTo: '/404' }
                    ])
                ],
                providers: [_services_interceptors_404_interceptor__WEBPACK_IMPORTED_MODULE_16__["HttpErrorInterceptorProvider"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/404"]; };
class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 2, consts: [["role", "banner", 1, "toolbar"], [2, "font-size", "3rem"], [1, "spacer"], ["href", "http://www.google.com", 1, "profile-menu", 3, "routerLink"], ["href", "http://www.google.com", 1, "profile-menu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83C\uDF54 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Local Plate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #2f2fa2;\r\n    color: white;\r\n    \r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.profile-menu[_ngcontent-%COMP%] {\r\n    color: #fff!important;\r\n    padding-right: 1.5em;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZmEyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnByb2ZpbGUtbWVudSB7XHJcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuYSwgYTp2aXNpdGVkLCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTI1Njk5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






class LandingPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 155, vars: 0, consts: [[1, "overlay"], ["fxLayout", "row wrap", "fxLayoutAlign", "center", "fxLayoutGap", "15px", 1, "app-details-main"], ["fxLayout", "column", "fxLayout.xs", "row", "fxLayoutAlign", "center end", "fxFlex", "calc(50% - 15px)", "fxFlex.xs", "100"], ["fxLayout", "column", "fxLayout.xs", "row wrap", "fxLayoutAlign", "center start", "fxLayoutAlign.sm", "center end", "fxFlex", "calc(50% - 15px)", "fxFlex.sm", "45", "fxFlex.xs", "100"], [1, "header-button"], ["mat-raised-button", "", "color", "primary"], ["id", "icon-section"], ["fxLayout", "row", "fxLayoutAlign", "space-around stretch", 1, "icon-section-header"], [1, "hr-container"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around stretch", 1, "icon-container"], ["fxFlex", "25", "fxFlex.xs", "50", 1, "icon-div"], [1, "material-icons", "circle-icon", 2, "font-size", "5rem", "color", "#fff"], ["id", "about"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutGap", "1.5%", "fxLayoutAlign", "center center", "fxLayoutAlign.xs", "space-around center", 1, "about-container"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "about-left"], ["fxLayout", "column", 1, "about-right"], ["id", "card-section"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutGap", "1.5%", "fxLayoutAlign", "center", "fxLayoutAlign.xs", "space-around center", 1, "card-list"], ["fxFlex", "20%", 1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""], ["role", "main", 1, "content"], [1, "card-container"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Local Plate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Custom food ordering system made easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Solution for independent food creators!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get started!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delivsh Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "done_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Easy to use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Setup your menu and profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Custom profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Use your own menu, images, and logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Set pickup or delivery options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Choose your own pickup location and delivery times");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "fastfood");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Live inventory updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Keep track of your menu items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Hello about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " ima left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " fsdffs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " test right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"]], styles: ["[_nghost-%COMP%] {\r\n    \r\n    \r\n    \r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    font-size: 4rem;\r\n    line-height: 100px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 82px auto 32px;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #888;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n        right: 120px;\r\n        transform: rotate(-5deg);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: borderbox;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    background-color: #2f2fa2;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: auto;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #ffffff;\r\n    \r\n}\r\n\r\n.example-card[_ngcontent-%COMP%] {\r\n    max-width: 30em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.app-details-main[_ngcontent-%COMP%] {\r\n    margin-top: 7em;\r\n    margin-bottom: 6em;\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #333;\r\n    padding: 1em;\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.circle-icon[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(to bottom right, rgb(0, 26, 255), rgb(57, 3, 78));\r\n    \r\n    border-radius: 50%;\r\n    text-align: center;\r\n    \r\n    padding: 30px;\r\n}\r\n\r\n.icon-div[_ngcontent-%COMP%] {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n#icon-section[_ngcontent-%COMP%] {\r\n    margin-top: 3.5em;\r\n}\r\n\r\n\r\n\r\n.icon-section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n    color: #333;\r\n}\r\n\r\n.hr-container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: -1em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    clear: both;\r\n    display: inline-block;\r\n    width: 5em;\r\n    background-color: #333;\r\n    height: 4px;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]:nth-child(2) {\r\n    background-color: blue;\r\n}\r\n\r\n#about[_ngcontent-%COMP%]{\r\n    margin-top: 3.5em;\r\n    background-color: red;\r\n}\r\n\r\n.header-button[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0tBQWdLO0lBQ2hLLHdDQUF3QztJQUN4Qzs7Ozt5Q0FJcUM7QUFDekM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSTtRQUNJLFlBQVk7UUFDWix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBLFlBQVk7O0FBRVo7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1GQUFtRjtJQUNuRixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1GQUFtRjtJQUNuRjttQkFDZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7NkJBQ3lCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjsgKi9cclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7ICovXHJcbiAgICAvKiBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7ICovXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG5hLCBhOnZpc2l0ZWQsIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcjY2xvdWRzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLTE2MHB4O1xyXG4gICAgbGVmdDogLTIzMHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgd2lkdGg6IDE5MjBweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyYm94O1xyXG59XHJcblxyXG4vKk5FVyBTVFVGRiovXHJcblxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmZhMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5oZWFkZXIgLm92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8qIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMzMzOyAqL1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzBlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmFwcC1kZXRhaWxzLW1haW4ge1xyXG4gICAgbWFyZ2luLXRvcDogN2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNmVtO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5pY29uLWNvbnRhaW5lcj5kaXY+aDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2lyY2xlLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDAsIDI2LCAyNTUpLCByZ2IoNTcsIDMsIDc4KSk7XHJcbiAgICAvKiB3aWR0aDogLjVlbTtcclxuICAgIGhlaWdodDogLjVlbTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaWNvbi1kaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4jaWNvbi1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMuNWVtO1xyXG59XHJcblxyXG4vKiAuaWNvbi1zZWN0aW9uLWhlYWRlcntcclxuICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xyXG59ICovXHJcblxyXG4uaWNvbi1zZWN0aW9uLWhlYWRlciBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmhyLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbmhyOm50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4jYWJvdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAzLjVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmhlYWRlci1idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/restaurant-profile/restaurant-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurant-profile/restaurant-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: RestaurantProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantProfileComponent", function() { return RestaurantProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");









function RestaurantProfileComponent_div_2_mat_card_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SHARE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const restaurantDetail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurantDetail_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurantDetail_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", restaurantDetail_r2.productImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", restaurantDetail_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", restaurantDetail_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", restaurantDetail_r2.price, " ");
} }
function RestaurantProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RestaurantProfileComponent_div_2_mat_card_22_Template, 18, 6, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/", ctx_r0.restaurant.logo_url, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.restaurant.name, " logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.restaurant.city, ", ", ctx_r0.restaurant.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.restaurant.products);
} }
class RestaurantProfileComponent {
    constructor(restaurantService, route) {
        this.route = route;
        this.route.paramMap.subscribe(params => {
            restaurantService.getRestInfoByID(params.get('restaurantId'))
                .subscribe(resp => {
                this.restaurant = resp.body;
            });
        });
    }
    ngOnInit() {
        // this.route.paramMap.subscribe(params => {
        //   console.log(params)
        //   this.restaurant = RestaurantService
        // });
    }
}
RestaurantProfileComponent.ɵfac = function RestaurantProfileComponent_Factory(t) { return new (t || RestaurantProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RestaurantProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestaurantProfileComponent, selectors: [["app-restaurant-profile"]], decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "overlay"], [1, "restaurant-details-main"], [1, "img-circle-main-logo", 3, "src", "alt"], [1, "header-button"], ["mat-raised-button", "", "color", "primary"], ["id", "about-section"], ["id", "card-section"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutGap", "1.5%", "fxLayoutAlign", "center", "fxLayoutAlign.xs", "space-around center", 1, "card-list"], ["class", "example-card", "fxFlex", "20%", 4, "ngFor", "ngForOf"], ["role", "main", 1, "content"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], ["fxFlex", "20%", 1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", 3, "src", "alt"], ["mat-button", ""]], template: function RestaurantProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RestaurantProfileComponent_div_2_Template, 27, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restaurant);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"]], styles: ["[_nghost-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 82px auto 32px;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #888;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%] {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27, 31, 35, .2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]:hover {\r\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\r\n    border-color: rgba(27, 31, 35, .35);\r\n    background-position: -.5em;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n}\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n    .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n        height: 16px;\r\n        margin: 8px 0;\r\n    }\r\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        margin-left: 72px;\r\n    }\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n        right: 120px;\r\n        transform: rotate(-5deg);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: borderbox;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    background-color: #2f2fa2;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: auto;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    position: relative;\r\n    overflow: hidden;\r\n    \r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #ffffff;\r\n    \r\n}\r\n\r\n.example-card[_ngcontent-%COMP%] {\r\n    max-width: 30em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.img-circle-main-logo[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    max-width: 10em;\r\n}\r\n\r\n.restaurant-details-main[_ngcontent-%COMP%]{\r\n    margin-top:7em;\r\n    margin-bottom: 6em;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    \r\n    height: 40%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudC1wcm9maWxlL3Jlc3RhdXJhbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixnRUFBZ0U7SUFDaEUsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwwSUFBMEk7QUFDOUk7O0FBRUE7SUFDSSxnRUFBZ0U7SUFDaEUsbUNBQW1DO0lBQ25DLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxZQUFZOztBQUVaO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUZBQW1GO0lBQ25GLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsOERBQThEO0lBQzlELFdBQVc7QUFDZjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnQtcHJvZmlsZS9yZXN0YXVyYW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuYSwgYTp2aXNpdGVkLCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTI1Njk5O1xyXG59XHJcblxyXG5cclxuZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMyNDI5MmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIC4zNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5zdmcjY2xvdWRzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLTE2MHB4O1xyXG4gICAgbGVmdDogLTIzMHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgd2lkdGg6IDE5MjBweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZC1jb250YWluZXI+Kjpub3QoLmNpcmNsZS1saW5rKSwgLnRlcm1pbmFsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gICAgfVxyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlcmJveDtcclxufVxyXG5cclxuLypORVcgU1RVRkYqL1xyXG5cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJmYTI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAgMCAxMjAlIDEyMCU7ICovXHJcbn1cclxuXHJcbmhlYWRlciAub3ZlcmxheSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMzMzM7ICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaW1nLWNpcmNsZS1tYWluLWxvZ28ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMGVtO1xyXG59XHJcblxyXG4ucmVzdGF1cmFudC1kZXRhaWxzLW1haW57XHJcbiAgICBtYXJnaW4tdG9wOjdlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDZlbTtcclxufVxyXG5cclxubWF0LWNhcmQgaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgLyp0aGlzIG1ha2VzIHRoZSBpbWFnZSBpbiBzcmMgZml0IHRvIHRoZSBzaXplIHNwZWNpZmllZCBiZWxvdyovXHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-restaurant-profile',
                templateUrl: './restaurant-profile.component.html',
                styleUrls: ['./restaurant-profile.component.css']
            }]
    }], function () { return [{ type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/error.generic.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/error.generic.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorGenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorGenericService", function() { return ErrorGenericService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ErrorGenericService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // Note: 404 errors are handled by HttpErrorInterceptorProvider
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            console.log(error);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
}
ErrorGenericService.ɵfac = function ErrorGenericService_Factory(t) { return new (t || ErrorGenericService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ErrorGenericService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorGenericService, factory: ErrorGenericService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorGenericService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/interceptors/404.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/interceptors/404.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpErrorInterceptor, HttpErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptorProvider", function() { return HttpErrorInterceptorProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class HttpErrorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigateByUrl('/404', { replaceUrl: true });
                // tslint:disable-next-line: deprecation
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
        })));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();
const HttpErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
    useClass: HttpErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/app/services/restaurant.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/restaurant.service.ts ***!
  \************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _error_generic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.generic.service */ "./src/app/services/error.generic.service.ts");





class RestaurantService {
    constructor(http, errorGenericService) {
        this.http = http;
        this.errorGenericService = errorGenericService;
        this.configUrl = 'http://localhost:3000/restaurant';
    }
    getRestInfo() {
        return this.http.get(this.configUrl, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorGenericService.handleError));
    }
    getRestInfoByID(restaurantId) {
        return this.http.get(this.configUrl + '/' + restaurantId, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorGenericService.handleError));
    }
}
RestaurantService.ɵfac = function RestaurantService_Factory(t) { return new (t || RestaurantService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_generic_service__WEBPACK_IMPORTED_MODULE_3__["ErrorGenericService"])); };
RestaurantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestaurantService, factory: RestaurantService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _error_generic_service__WEBPACK_IMPORTED_MODULE_3__["ErrorGenericService"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\OnlineOrdering.Frontend\onlineordering-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map