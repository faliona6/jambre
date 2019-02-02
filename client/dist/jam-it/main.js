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
/* harmony import */ var _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./findbands/findbands.component */ "./src/app/findbands/findbands.component.ts");
/* harmony import */ var _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bandpage/bandpage.component */ "./src/app/bandpage/bandpage.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");









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
        component: _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_7__["BandpageComponent"]
    },
    {
        path: 'findbands',
        component: _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_6__["FindbandsComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
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

module.exports = "/* Universal Styles for Jambre Website */\r\n\r\n::ng-deep :root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\np {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n::ng-deep body {\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n::ng-deep html {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* ---------------------Classes--------------------- */\r\n\r\n/*-----------Font Styles----------*/\r\n\r\n.font-size-xs {\r\n    font-size: 15px !important; \r\n}\r\n\r\n.font-size-s {\r\n    font-size: 20px !important; \r\n}\r\n\r\n.font-size-m {\r\n    font-size: 18px !important; \r\n}\r\n\r\n.font-size-l {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.font-size-xl {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.text-align-left {\r\n    text-align:left;\r\n}\r\n\r\n.text-align-center {\r\n    text-align:center;\r\n}\r\n\r\n.text-align-right {\r\n    text-align:right;\r\n}\r\n\r\n/*Common text styles*/\r\n\r\n.label {\r\n    font-family: var(--main-font);\r\n    color: var(--main-red);\r\n}\r\n\r\n.label-title {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 30px;\r\n    margin: 0px;\r\n    padding: 3px 0px 3px 0px;\r\n}\r\n\r\n.header {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 27px;\r\n    margin: 0px;\r\n    padding: 40px 0px 40px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.description {\r\n    font-size: 16px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n.location {\r\n    font-size: 20px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    margin: 0px;\r\n}\r\n\r\n.page-title {\r\n    font-size: 65px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-white);\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-shadow: 0 0 10px black\r\n}\r\n\r\n.line {\r\n    width: 800px;\r\n    height: 1px;\r\n    background: grey;\r\n    margin: 0px;\r\n    text-align:center;\r\n}\r\n\r\n/*Formatting*/\r\n\r\n.flow-left {\r\n    float: left !important;\r\n}\r\n\r\n.flow-right {\r\n    float: right !important;\r\n}\r\n\r\n.flow-center {\r\n    float: center !important;\r\n}\r\n\r\n.vertical-center {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n/*Padding*/\r\n\r\n.padding-left {\r\n    padding: 0px 0px 0px 7px;\r\n}\r\n\r\n.padding-right {\r\n    padding: 0px 10px 0px 0px;\r\n}\r\n\r\n.padding-up {\r\n    padding: 10px 0px 0px 0px;\r\n}\r\n\r\n.padding-down {\r\n    padding: 0px 0px 5px 0px;\r\n}\r\n\r\n.padding-left-l {\r\n    padding: 10px 0px 0px 23px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEM7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLHNEQUFzRDs7QUFFdEQsbUNBQW1DOztBQUNuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBR0EsYUFBYTs7QUFFYjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUVSLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUEsVUFBVTs7QUFDVjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFVuaXZlcnNhbCBTdHlsZXMgZm9yIEphbWJyZSBXZWJzaXRlICovXHJcblxyXG46Om5nLWRlZXAgOnJvb3Qge1xyXG4gICAgLS1tYWluLWJsYWNrOiAjMmEyOTI5O1xyXG4gICAgLS1tYWluLXJlZDogI2UzNTk1MztcclxuICAgIC0tbWFpbi15ZWxsb3c6ICNmMmMwNmY7XHJcbiAgICAtLW1haW4tZ3JlZW46ICNjM2QxOTA7XHJcbiAgICAtLW1haW4tbWF1dmU6ICNkOGJjYmM7XHJcbiAgICAtLW1haW4td2hpdGU6IHdoaXRlO1xyXG5cclxuICAgIC0tbWFpbi1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGh0bWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLUNsYXNzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qLS0tLS0tLS0tLS1Gb250IFN0eWxlcy0tLS0tLS0tLS0qL1xyXG4uZm9udC1zaXplLXhzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50OyBcclxufVxyXG4uZm9udC1zaXplLXMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5mb250LXNpemUtbSB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDsgXHJcbn1cclxuLmZvbnQtc2l6ZS1sIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50OyBcclxufVxyXG4uZm9udC1zaXplLXhsIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLnRleHQtYWxpZ24tbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuLnRleHQtYWxpZ24tY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi50ZXh0LWFsaWduLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuXHJcbi8qQ29tbW9uIHRleHQgc3R5bGVzKi9cclxuXHJcbi5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XHJcbn1cclxuXHJcbi5sYWJlbC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweCA0MHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFja1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG5cclxuLypGb3JtYXR0aW5nKi9cclxuXHJcbi5mbG93LWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4uZmxvdy1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG4uZmxvdy1jZW50ZXIge1xyXG4gICAgZmxvYXQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmNlbnRlci14e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59XHJcblxyXG4vKlBhZGRpbmcqL1xyXG4ucGFkZGluZy1sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDdweDtcclxufVxyXG5cclxuLnBhZGRpbmctcmlnaHQge1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG5cclxuLnBhZGRpbmctdXAge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLnBhZGRpbmctZG93biB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWxlZnQtbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMjNweDtcclxufVxyXG4iXX0= */"

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

module.exports = "#banner-photo{\r\n    position: absolute;\r\n    width:100%;\r\n    clip: rect(0px,0px,100px,0px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmRwYWdlL2JhbmRwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJiYW5kcGFnZS9iYW5kcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jhbm5lci1waG90b3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBjbGlwOiByZWN0KDBweCwwcHgsMTAwcHgsMHB4KTtcclxufVxyXG4iXX0= */"

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

module.exports = "#background-image {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#page-main-text {\r\n    width: 300px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#band-img {\r\n    width: 380px;\r\n    height: auto;\r\n    border-radius: 3px;\r\n}\r\n\r\n#bands {\r\n    padding: 0px 0px 50px 0px\r\n}\r\n\r\n#band-info {\r\n    width: 380px;\r\n    height: auto;\r\n}\r\n\r\n.float-on-image {\r\n    left: 0;\r\n    position:absolute;\r\n    text-align:center;\r\n    top: 30%;\r\n    width: 100%;\r\n    color:white;\r\n}\r\n\r\n.band-desc {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:center;\r\n    width: 800px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmRiYW5kcy9maW5kYmFuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoiZmluZGJhbmRzL2ZpbmRiYW5kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNwYWdlLW1haW4tdGV4dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNiYW5kLWltZyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiNiYW5kcyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDUwcHggMHB4XHJcbn1cclxuXHJcbiNiYW5kLWluZm8ge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZmxvYXQtb24taW1hZ2Uge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5iYW5kLWRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/findbands/findbands.component.html":
/*!****************************************************!*\
  !*** ./src/app/findbands/findbands.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--Header image-->\r\n  <img style=\"position:relative\" id=\"background-image\" src = \"../../assets/findJamsHeader.jpg\">\r\n  <div class=\"float-on-image\">\r\n    <div id=\"page-main-text\">\r\n      <p class=\"page-title\"> FIND JAMS </p>\r\n      <p class=\"font-size-m page-title flow-left padding-left\"> Find your fit. </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Current Jam Content-->\r\n  <div>\r\n    <p class=\"header\"> CURRENT JAM SESSIONS </p>\r\n  </div>\r\n  <div id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"overflow:auto; width:800px; height:2px\">\r\n    <div class=\"line center-x\">\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <p class=\"header\"> SUGGESTED BANDS </p>\r\n  </div>\r\n  \r\n  <!--Suggested Bands-->\r\n\r\n  <div id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n</div>\r\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = ".background{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.center{\r\n    border: 3px 3px 3px 3px;\r\n    border-color: red;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.input{\r\n    padding: 15px;\r\n    width: 210px;\r\n    background-color: rgba(255,255,255,1);\r\n}\r\n\r\n#loginButton{\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 30px;\r\n    background-color: #e35953;\r\n    left: 50%;\r\n    width: 100%;\r\n    height: 50px;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#createAccount{\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n#createAccount a{\r\n    width: 85%;\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n\r\n#createAccount a:hover{\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:active{\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:visited{\r\n    color: lightBlue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0Q0FBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQ0JDQkM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgYm9yZGVyOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG59XHJcblxyXG5cclxuI2xvZ2luQnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNTk1MztcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59XHJcblxyXG4jY3JlYXRlQWNjb3VudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiNjcmVhdGVBY2NvdW50IGF7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuI2NyZWF0ZUFjY291bnQgYTpob3ZlcntcclxuICAgIGNvbG9yOiBsaWdodEdyZXk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4jY3JlYXRlQWNjb3VudCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodEJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4jY3JlYXRlQWNjb3VudCBhOnZpc2l0ZWR7XHJcbiAgICBjb2xvcjogbGlnaHRCbHVlO1xyXG59XHJcbiJdfQ== */"

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

module.exports = "/*----------Links---------*/\r\n:root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\na {\r\n    text-decoration: none;\r\n    transition: color 0.3s;\r\n}\r\na:hover {\r\n    color: var(--main-mauve);\r\n}\r\na:active {\r\n    text-decoration: underline;\r\n}\r\n/* ---------------------Navbar--------------------- */\r\n#nav-bar {\r\n    background-color: #333;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 5;\r\n}\r\n#links {\r\n    /* text-align: center;\r\n    width: 100%;\r\n    height: 100%; */\r\n    height: auto;\r\n    width: auto;\r\n}\r\n.nav-label {\r\n    color: #e35953;\r\n    /* padding: 20px 0px 20px 40px;\r\n    display: inline; */\r\n}\r\n.user-icon {\r\n    width: 45px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\n.user-icon-small {\r\n    width: 25px;\r\n    height: auto;\r\n    border-radius: 25%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\nli {\r\n    display: inline;\r\n    list-style: none;\r\n}\r\nul {\r\n    vertical-align: middle;\r\n    margin: 0px;\r\n    height: 62.4px;\r\n    padding: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUdBLHFEQUFxRDtBQUNyRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFFQTtJQUNJOzttQkFFZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7SUFDZDtzQkFDa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjs7QUFFL0I7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjs7QUFFL0I7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7QUFDaEIiLCJmaWxlIjoibmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tTGlua3MtLS0tLS0tLS0qL1xyXG46cm9vdCB7XHJcbiAgICAtLW1haW4tYmxhY2s6ICMyYTI5Mjk7XHJcbiAgICAtLW1haW4tcmVkOiAjZTM1OTUzO1xyXG4gICAgLS1tYWluLXllbGxvdzogI2YyYzA2ZjtcclxuICAgIC0tbWFpbi1ncmVlbjogI2MzZDE5MDtcclxuICAgIC0tbWFpbi1tYXV2ZTogI2Q4YmNiYztcclxuICAgIC0tbWFpbi13aGl0ZTogd2hpdGU7XHJcblxyXG4gICAgLS1tYWluLWZvbnQ6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tbWF1dmUpO1xyXG59XHJcblxyXG5hOmFjdGl2ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLU5hdmJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4jbmF2LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4jbGlua3Mge1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLm5hdi1sYWJlbCB7XHJcbiAgICBjb2xvcjogI2UzNTk1MztcclxuICAgIC8qIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggNDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTsgKi9cclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMTVweDtcclxuXHJcbn1cclxuXHJcbi51c2VyLWljb24tc21hbGwge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDE1cHg7XHJcblxyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDYyLjRweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n\r\n<!-- <div id=\"nav-bar\">\r\n    <ul>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-left\">FIND JAMS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">MY BANDS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">ABOUT</a></li>\r\n\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-right\">FIONA</a></li>\r\n    </ul>\r\n</div> -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-nav-demo\" aria-expanded=\"false\">\r\n        <!-- <li><img class=\"user-icon-small flow-right\" src=\"../../assets/profilepic.jpg\"></li> -->\r\n        <span class=\"sr-only\">Toggle navigation</span> -->\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a href=\"#\" class=\"navbar-brand\"><i class=\"fas fa-music\"></i> Band Base</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-nav-demo\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\"#\" class=\"nav-label\">FIND JAMS</a></li>\r\n        <li><a href=\"#\" class=\"nav-label\">MY BANDS</a></li>\r\n        <li><a href=\"#\" class=\"nav-label\">ABOUT</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a href=\"#\">FIONA</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- <script src=\"https://code.jquery.com/jquery-3.3.1.js\" integrity=\"sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script> -->\r\n"

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

module.exports = ".user-icon {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCIiwiZmlsZSI6InByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaWNvbiB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuXHJcbn1cclxuIl19 */"

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

module.exports = ".background{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n#header{\r\n    /*border-style: solid;\r\n    border-width: 10px;\r\n    border-color: red;*/\r\n    background-color: #2a2929;\r\n    width: 100%;\r\n    height: 100px;\r\n    position: relative;\r\n}\r\n\r\n#container{\r\n    margin-top: 150px;\r\n    padding: 60px 40px 20px 40px;\r\n    /*background-color: rgba(115,115,115,.7);\r\n    border-radius: 20px;*/\r\n}\r\n\r\n#createButton{\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 30px;\r\n    background-color: #e35953;\r\n    width: 45%;\r\n    height: 50px;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n.input{\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 300px;\r\n    margin-bottom: 30px;\r\n    background-color: rgba(255,255,255,1);\r\n}\r\n\r\n.title{\r\n    font-size: 30pt;\r\n    margin-bottom: 40px;\r\n    font-weight: bold;\r\n    color: white;\r\n    padding: 5px 5px 5px 5px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0Q0FBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJOzt1QkFFbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1Qjt5QkFDcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBDQUEwQztBQUM5QyIsImZpbGUiOiJyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQ0JDQkM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4jaGVhZGVye1xyXG4gICAgLypib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTI5Mjk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDYwcHggNDBweCAyMHB4IDQwcHg7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LDExNSwxMTUsLjcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsqL1xyXG59XHJcblxyXG4jY3JlYXRlQnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNTk1MztcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jZW50ZXIteHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div id=\"header\">\r\n        <h1 class=\"title center-x\">Create An Account</h1>\r\n    <div id=\"login_div\">\r\n    <div id=\"container\" class=\"center-x\">\r\n        <input type=\"email\" class=\"input\"type=\"text\" placeholder=\"Email\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\" id=\"password_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Re-type password\" id=\"password_conf_field\">\r\n        <button id=\"createButton\" onclick=\"create()\"> Create Account </button>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div id=\"user_div\" class=\"loggedin-div\">\r\n    <h3>Welcome User</h3>\r\n    <p id=\"user_para\">Welcome to Firebase. You're currently logged in.</p>\r\n    <button onclick=\"logout()\">Logout</button>\r\n  </div>\r\n        \r\n<script src=\"https://www.gstatic.com/firebasejs/5.8.2/firebase.js\"></script>\r\n<script>\r\n  // Initialize Firebase\r\n  var config = {\r\n    apiKey: \"AIzaSyDtJrNKruPz74uXLW6PnGsWOv9bVQsS9ng\",\r\n    authDomain: \"bandbase-26533.firebaseapp.com\",\r\n    databaseURL: \"https://bandbase-26533.firebaseio.com\",\r\n    projectId: \"bandbase-26533\",\r\n    storageBucket: \"bandbase-26533.appspot.com\",\r\n    messagingSenderId: \"962953801879\"\r\n  };\r\n  firebase.initializeApp(config);\r\n</script>\r\n<script src=\"./index.js\"></script>\r\n"

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

module.exports = __webpack_require__(/*! C:\Users\fiona\Documents\GitHub\jambre\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map