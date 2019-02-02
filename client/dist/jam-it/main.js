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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bandpage/bandpage.component */ "./src/app/bandpage/bandpage.component.ts");







var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'bandpage',
        component: _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_6__["BandpageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Universal Styles for Jambre Website */\r\n\r\n::ng-deep :root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\np {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n::ng-deep body {\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n::ng-deep html {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.label {\r\n    font-family: var(--main-font);\r\n    color: var(--main-red);\r\n}\r\n\r\n.label-title {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 30px;\r\n    margin: 0px;\r\n    padding: 3px 0px 3px 0px;\r\n}\r\n\r\n/* ---------------------Classes--------------------- */\r\n\r\n/*-----------Font Styles----------*/\r\n\r\n.font-size-xs {\r\n    font-size: 15px !important; \r\n}\r\n\r\n.font-size-s {\r\n    font-size: 20px !important; \r\n}\r\n\r\n.font-size-m {\r\n    font-size: 18px !important; \r\n}\r\n\r\n.font-size-l {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.font-size-xl {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.text-align-left {\r\n    text-align:left;\r\n}\r\n\r\n.text-align-center {\r\n    text-align:center;\r\n}\r\n\r\n.text-align-right {\r\n    text-align:right;\r\n}\r\n\r\n.description {\r\n    font-size: 18px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n.location {\r\n    font-size: 20px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    margin: 0px;\r\n}\r\n\r\n.page-title {\r\n    font-size: 65px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-white);\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-shadow: 0 0 10px black\r\n}\r\n\r\n/*Formatting*/\r\n\r\n.flow-left {\r\n    float: left !important;\r\n}\r\n\r\n.flow-right {\r\n    float: right !important;\r\n}\r\n\r\n.flow-center {\r\n    float: center !important;\r\n}\r\n\r\n.vertical-center {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n/*Padding*/\r\n\r\n.padding-left {\r\n    padding: 0px 0px 0px 7px;\r\n}\r\n\r\n.padding-right {\r\n    padding: 0px 10px 0px 0px;\r\n}\r\n\r\n.padding-up {\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.padding-down {\r\n    padding: 0px 0px 5px 0px;\r\n}\r\n\r\n.padding-left-l {\r\n    padding: 0px 0px 0px 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDOztBQUV4QztJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1COztJQUVuQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQSxzREFBc0Q7O0FBRXRELG1DQUFtQzs7QUFDbkM7SUFDSSwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBR0EsYUFBYTs7QUFFYjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUVSLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUEsVUFBVTs7QUFDVjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVW5pdmVyc2FsIFN0eWxlcyBmb3IgSmFtYnJlIFdlYnNpdGUgKi9cclxuXHJcbjo6bmctZGVlcCA6cm9vdCB7XHJcbiAgICAtLW1haW4tYmxhY2s6ICMyYTI5Mjk7XHJcbiAgICAtLW1haW4tcmVkOiAjZTM1OTUzO1xyXG4gICAgLS1tYWluLXllbGxvdzogI2YyYzA2ZjtcclxuICAgIC0tbWFpbi1ncmVlbjogI2MzZDE5MDtcclxuICAgIC0tbWFpbi1tYXV2ZTogI2Q4YmNiYztcclxuICAgIC0tbWFpbi13aGl0ZTogd2hpdGU7XHJcblxyXG4gICAgLS1tYWluLWZvbnQ6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYm9keSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgaHRtbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tcmVkKTtcclxufVxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLUNsYXNzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qLS0tLS0tLS0tLS1Gb250IFN0eWxlcy0tLS0tLS0tLS0qL1xyXG4uZm9udC1zaXplLXhzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50OyBcclxufVxyXG4uZm9udC1zaXplLXMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5mb250LXNpemUtbSB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDsgXHJcbn1cclxuLmZvbnQtc2l6ZS1sIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50OyBcclxufVxyXG4uZm9udC1zaXplLXhsIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLnRleHQtYWxpZ24tbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuLnRleHQtYWxpZ24tY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi50ZXh0LWFsaWduLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFja1xyXG59XHJcblxyXG5cclxuLypGb3JtYXR0aW5nKi9cclxuXHJcbi5mbG93LWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4uZmxvdy1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG4uZmxvdy1jZW50ZXIge1xyXG4gICAgZmxvYXQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmNlbnRlci14e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59XHJcblxyXG4vKlBhZGRpbmcqL1xyXG4ucGFkZGluZy1sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDdweDtcclxufVxyXG5cclxuLnBhZGRpbmctcmlnaHQge1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuLnBhZGRpbmctdXAge1xyXG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1kb3duIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcclxufVxyXG5cclxuLnBhZGRpbmctbGVmdC1sIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--  nav.component.ts's selector is app-nav  -->\r\n<app-nav *ngIf='showComponent'></app-nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url !== "/login" && event.url !== "/register") {
                    _this.showComponent = true;
                }
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./findbands/findbands.component */ "./src/app/findbands/findbands.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./environment/environment */ "./src/app/environment/environment.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bandpage/bandpage.component */ "./src/app/bandpage/bandpage.component.ts");











// <<<<<<< HEAD

// =======





// >>>>>>> a9c9adb6a6db6f214be0bb5a64a94019cd3e3a94
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_10__["FindbandsComponent"],
                // <<<<<<< HEAD
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                // =======
                _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_16__["BandpageComponent"]
                // >>>>>>> a9c9adb6a6db6f214be0bb5a64a94019cd3e3a94
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environment_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bandpage/bandpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/bandpage/bandpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbmRwYWdlL2JhbmRwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bandpage/bandpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/bandpage/bandpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img id=\"banner-photo\" src=\"../../assets/BannerPhoto.jpg\" alt=\"Band banner photo\">\r\n"

/***/ }),

/***/ "./src/app/bandpage/bandpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/bandpage/bandpage.component.ts ***!
  \************************************************/
/*! exports provided: BandpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandpageComponent", function() { return BandpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BandpageComponent = /** @class */ (function () {
    function BandpageComponent() {
    }
    BandpageComponent.prototype.ngOnInit = function () {
    };
    BandpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bandpage',
            template: __webpack_require__(/*! ./bandpage.component.html */ "./src/app/bandpage/bandpage.component.html"),
            styles: [__webpack_require__(/*! ./bandpage.component.css */ "./src/app/bandpage/bandpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandpageComponent);
    return BandpageComponent;
}());



/***/ }),

/***/ "./src/app/environment/environment.ts":
/*!********************************************!*\
  !*** ./src/app/environment/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDtJrNKruPz74uXLW6PnGsWOv9bVQsS9ng",
        authDomain: "bandbase-26533.firebaseapp.com",
        databaseURL: "https://bandbase-26533.firebaseio.com",
        projectId: "bandbase-26533",
        storageBucket: "bandbase-26533.appspot.com",
        messagingSenderId: "962953801879"
    }
};


/***/ }),

/***/ "./src/app/findbands/findbands.component.css":
/*!***************************************************!*\
  !*** ./src/app/findbands/findbands.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-image {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#page-main-text {\r\n    width: 300px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#band-img {\r\n    width: 380px;\r\n    height: auto;\r\n    border-radius: 3px;\r\n}\r\n\r\n#band-info {\r\n    width: 380px;\r\n    height: auto;\r\n}\r\n\r\n.float-on-image {\r\n    left: 0;\r\n    position:absolute;\r\n    text-align:center;\r\n    top: 30%;\r\n    width: 100%;\r\n    color:white;\r\n}\r\n\r\n.band-desc {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:center;\r\n    width: 800px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZGJhbmRzL2ZpbmRiYW5kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmluZGJhbmRzL2ZpbmRiYW5kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNwYWdlLW1haW4tdGV4dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNiYW5kLWltZyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiNiYW5kLWluZm8ge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZmxvYXQtb24taW1hZ2Uge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5iYW5kLWRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/findbands/findbands.component.html":
/*!****************************************************!*\
  !*** ./src/app/findbands/findbands.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--Header image-->\r\n  <img style=\"position:relative\" id=\"background-image\" src = \"../../assets/findJamsHeader.jpg\">\r\n  <div class=\"float-on-image\">\r\n    <div id=\"page-main-text\">\r\n      <p class=\"page-title\"> FIND JAMS </p>\r\n      <p class=\"font-size-m page-title flow-left padding-left\"> Find your fit. </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Current Jam Content-->\r\n  <div class=\"band-desc\">\r\n    <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n    <div id=\"band-info\" class=\"flow-right\">\r\n      <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n      <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n      <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n      <p id=\"band-description\" class=\"flow-left description text-align-left padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                          ei malis indoctum intellegam nam. wahoo\r\n                          Erant qualisque an nec. No pri nullam ver\r\n                          prodesset, cum et nostrum oportere. </p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/findbands/findbands.component.ts":
/*!**************************************************!*\
  !*** ./src/app/findbands/findbands.component.ts ***!
  \**************************************************/
/*! exports provided: FindbandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindbandsComponent", function() { return FindbandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FindbandsComponent = /** @class */ (function () {
    function FindbandsComponent() {
    }
    FindbandsComponent.prototype.ngOnInit = function () {
    };
    FindbandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-findbands',
            template: __webpack_require__(/*! ./findbands.component.html */ "./src/app/findbands/findbands.component.html"),
            styles: [__webpack_require__(/*! ./findbands.component.css */ "./src/app/findbands/findbands.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FindbandsComponent);
    return FindbandsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.center{\r\n    border: 3px 3px 3px 3px;\r\n    border-color: red;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.input{\r\n    padding: 15px;\r\n    width: 210px;\r\n    background-color: rgba(255,255,255,1);\r\n}\r\n\r\n#loginButton{\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 30px;\r\n    background-color: #e35953;\r\n    left: 50%;\r\n    width: 100%;\r\n    height: 50px;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#createAccount{\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n#createAccount a{\r\n    width: 85%;\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n\r\n#createAccount a:hover{\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:active{\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:visited{\r\n    color: lightBlue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRDQUF5RDtJQUN6RCx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxQ0FBcUM7QUFDekM7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkNCQ0JDO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luQmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIGJvcmRlcjogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxufVxyXG5cclxuXHJcbiNsb2dpbkJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzU5NTM7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuI2NyZWF0ZUFjY291bnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4jY3JlYXRlQWNjb3VudCBhe1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiNjcmVhdGVBY2NvdW50IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogbGlnaHRHcmV5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuI2NyZWF0ZUFjY291bnQgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogbGlnaHRCbHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuI2NyZWF0ZUFjY291bnQgYTp2aXNpdGVke1xyXG4gICAgY29sb3I6IGxpZ2h0Qmx1ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../../firebaseAuth.js\"></script>\r\n<div class=\"background\">\r\n    <div class=\"center\" id=\"login_div\" class=\"main-div\">\r\n        <input type=\"email\" class=\"input\" type=\"text\" placeholder=\"Username\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\" id=\"password_field\">\r\n        <br />\r\n\r\n        <button class=\"center-x\" id=\"loginButton\" onclick=\"login()\">Login</button>\r\n        <br />\r\n        <br />\r\n        <br />\r\n        <div class=\"center-x\" id=\"createAccount\">\r\n            <a class=\"center-x\" href=\"Need an account? Sign up here!\">Need an account? Sign up here!</a>\r\n        </div>\r\n    </div>\r\n    <div id=\"user_div\" class=\"loggedin-div\">\r\n        <h3>Welcome User</h3>\r\n        <p id=\"user_para\">Welcome to Firebase web login Example. You're currently logged in.</p>\r\n        <button onclick=\"logout()\">Logout</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(firebase, afAuth) {
        this.firebase = firebase;
        this.afAuth = afAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----------Links---------*/\r\n:root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\na {\r\n    text-decoration: none;\r\n    transition: color 0.3s;\r\n}\r\na:hover {\r\n    color: var(--main-mauve);\r\n}\r\na:active {\r\n    text-decoration: underline;\r\n}\r\n/* ---------------------Navbar--------------------- */\r\n#nav-bar {\r\n    background-color: #333;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 5;\r\n}\r\n#links {\r\n    /* text-align: center;\r\n    width: 100%;\r\n    height: 100%; */\r\n    height: auto;\r\n    width: auto;\r\n}\r\n.nav-label {\r\n    color: #e35953;\r\n    /* padding: 20px 0px 20px 40px;\r\n    display: inline; */\r\n}\r\n.user-icon {\r\n    width: 45px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\n.user-icon-small {\r\n    width: 25px;\r\n    height: auto;\r\n    border-radius: 25%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\nli {\r\n    display: inline;\r\n    list-style: none;\r\n}\r\nul {\r\n    vertical-align: middle;\r\n    margin: 0px;\r\n    height: 62.4px;\r\n    padding: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1COztJQUVuQiwwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBR0EscURBQXFEO0FBQ3JEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7QUFDZDtBQUVBO0lBQ0k7O21CQUVlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztJQUNkO3NCQUNrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCOztBQUUvQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCOztBQUUvQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLUxpbmtzLS0tLS0tLS0tKi9cclxuOnJvb3Qge1xyXG4gICAgLS1tYWluLWJsYWNrOiAjMmEyOTI5O1xyXG4gICAgLS1tYWluLXJlZDogI2UzNTk1MztcclxuICAgIC0tbWFpbi15ZWxsb3c6ICNmMmMwNmY7XHJcbiAgICAtLW1haW4tZ3JlZW46ICNjM2QxOTA7XHJcbiAgICAtLW1haW4tbWF1dmU6ICNkOGJjYmM7XHJcbiAgICAtLW1haW4td2hpdGU6IHdoaXRlO1xyXG5cclxuICAgIC0tbWFpbi1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLW1hdXZlKTtcclxufVxyXG5cclxuYTphY3RpdmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS1OYXZiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuI25hdi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuI2xpbmtzIHtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtbGFiZWwge1xyXG4gICAgY29sb3I6ICNlMzU5NTM7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7ICovXHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDE1cHg7XHJcblxyXG59XHJcblxyXG4udXNlci1pY29uLXNtYWxsIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAxNXB4O1xyXG5cclxufVxyXG5cclxubGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxudWwge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiA2Mi40cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n\r\n<!-- <div id=\"nav-bar\">\r\n    <ul>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-left\">FIND JAMS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">MY BANDS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">ABOUT</a></li>\r\n\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-right\">FIONA</a></li>\r\n    </ul>\r\n</div> -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-nav-demo\" aria-expanded=\"false\">\r\n        <!-- <li><img class=\"user-icon-small flow-right\" src=\"../../assets/profilepic.jpg\"></li> -->\r\n        <span class=\"sr-only\">Toggle navigation</span> -->\r\n        <!-- <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a href=\"#\" class=\"navbar-brand\"><i class=\"fas fa-music\"></i> Band Base</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-nav-demo\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\"#\" class=\"nav-label\">FIND JAMS</a></li>\r\n        <li><a href=\"#\" class=\"nav-label\">MY BANDS</a></li>\r\n        <li><a href=\"#\" class=\"nav-label\">ABOUT</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a href=\"#\">FIONA</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<script src=\"https://code.jquery.com/jquery-3.3.1.js\" integrity=\"sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-icon {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWljb24ge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <a href=\"#\" class=\"thumbnail\">\r\n        <img src=\"profilepic.jpg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h1>EDDIE AUNG</h1>\r\n      <h5>San Luis Obispo, CA</h5>\r\n      <br>\r\n      <br>\r\n      <div class=\"profile-description\">\r\n        Bacon ipsum dolor amet bacon flank picanha pork chop spare ribs alcatra pastrami pancetta prosciutto sausage chuck frankfurter. Andouille short loin doner, flank fatback capicola shank kevin pork chop pork loin brisket turducken. Chicken beef meatloaf picanha, buffalo ribeye pork chop sausage alcatra tenderloin boudin brisket filet mignon frankfurter. Shoulder ground round biltong, kielbasa drumstick beef ribs turducken.\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div id=\"\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <a href=\"#\" class=\"thumbnail\">\r\n        <img src=\"profilepic.jpg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h1>EDDIE AUNG</h1>\r\n      <h5>San Luis Obispo, CA</h5>\r\n      <br>\r\n      <br>\r\n      <div class=\"profile-description\">\r\n        Bacon ipsum dolor amet bacon flank picanha pork chop spare ribs alcatra pastrami pancetta prosciutto sausage chuck frankfurter. Andouille short loin doner, flank fatback capicola shank kevin pork chop pork loin brisket turducken. Chicken beef meatloaf picanha, buffalo ribeye pork chop sausage alcatra tenderloin boudin brisket filet mignon frankfurter. Shoulder ground round biltong, kielbasa drumstick beef ribs turducken.\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n#header{\r\n    /*border-style: solid;\r\n    border-width: 10px;\r\n    border-color: red;*/\r\n    background-color: #2a2929;\r\n    width: 100%;\r\n    height: 100px;\r\n    position: relative;\r\n}\r\n\r\n#container{\r\n    margin-top: 150px;\r\n    padding: 60px 40px 20px 40px;\r\n    /*background-color: rgba(115,115,115,.7);\r\n    border-radius: 20px;*/\r\n}\r\n\r\n#createButton{\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 30px;\r\n    background-color: #e35953;\r\n    width: 45%;\r\n    height: 50px;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n.input{\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 300px;\r\n    margin-bottom: 30px;\r\n    background-color: rgba(255,255,255,1);\r\n}\r\n\r\n.title{\r\n    font-size: 30pt;\r\n    margin-bottom: 40px;\r\n    font-weight: bold;\r\n    color: white;\r\n    padding: 5px 5px 5px 5px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRDQUF5RDtJQUN6RCx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7O3VCQUVtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCO3lCQUNxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMENBQTBDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkNCQ0JDO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luQmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuI2hlYWRlcntcclxuICAgIC8qYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyOTI5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHggMjBweCA0MHB4O1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwxMTUsMTE1LC43KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7Ki9cclxufVxyXG5cclxuI2NyZWF0ZUJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzU5NTM7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2VudGVyLXh7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMHB0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div id=\"header\">\r\n        <h1 class=\"title center-x\">Create An Account</h1>\r\n    <div>\r\n    <div id=\"container\" class=\"center-x\">\r\n        <input type=\"email\" class=\"input\"type=\"text\" placeholder=\"Email\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Re-type password\">\r\n        <button id=\"createButton\" onclick=\"login()\"> Create Account </button>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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

module.exports = __webpack_require__(/*! C:\Users\SXion\jambre\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map