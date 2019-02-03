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
/* harmony import */ var _createband_createband_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createband/createband.component */ "./src/app/createband/createband.component.ts");
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
        redirectTo: '/findbands',
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
    },
    {
        path: 'createband',
        component: _createband_createband_component__WEBPACK_IMPORTED_MODULE_1__["CreatebandComponent"]
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

module.exports = "/* Universal Styles for Jambre Website */\r\n\r\n::ng-deep :root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\np {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n::ng-deep body {\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n::ng-deep html {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* ---------------------Classes--------------------- */\r\n\r\n/*-----------Font Styles----------*/\r\n\r\n.font-size-xs {\r\n    font-size: 15px !important;\r\n}\r\n\r\n.font-size-s {\r\n    font-size: 20px !important;\r\n}\r\n\r\n.font-size-m {\r\n    font-size: 18px !important;\r\n}\r\n\r\n.font-size-l {\r\n    font-size: 40px !important;\r\n}\r\n\r\n.font-size-xl {\r\n    font-size: 40px !important;\r\n}\r\n\r\n.text-align-left {\r\n    text-align:left;\r\n}\r\n\r\n.text-align-center {\r\n    text-align:center;\r\n}\r\n\r\n.text-align-right {\r\n    text-align:right;\r\n}\r\n\r\n/*Common text styles*/\r\n\r\n.label {\r\n    font-family: var(--main-font);\r\n    color: var(--main-red);\r\n}\r\n\r\n.label-title {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 30px;\r\n    margin: 0px;\r\n    padding: 3px 0px 3px 0px;\r\n}\r\n\r\n.header {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 27px;\r\n    margin: 0px;\r\n    padding: 40px 0px 40px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.description {\r\n    font-size: 16px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n.location {\r\n    font-size: 20px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    margin: 0px;\r\n}\r\n\r\n.page-title {\r\n    font-size: 65px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-white);\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-shadow: 0 0 10px black\r\n}\r\n\r\n.line {\r\n    width: 80%;\r\n    height: 1px;\r\n    background: grey;\r\n    margin: 0px;\r\n    text-align:center;\r\n}\r\n\r\n.main-container {\r\n    overflow: auto;\r\n    padding: 61px 0px 0px 0px;\r\n    left: 50%;\r\n}\r\n\r\n/*Displaying bands*/\r\n\r\n#band-img {\r\n    width: 380px;\r\n    height: auto;\r\n    border-radius: 3px;\r\n}\r\n\r\n#bands {\r\n    padding: 0px 0px 50px 0px\r\n}\r\n\r\n#band-info {\r\n    width: 380px;\r\n    height: auto;\r\n}\r\n\r\n.float-on-image {\r\n    left: 0;\r\n    position:absolute;\r\n    text-align:center;\r\n    top: 30%;\r\n    width: 100%;\r\n    color:white;\r\n}\r\n\r\n.band-desc {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:center;\r\n    width: 800px;\r\n}\r\n\r\n/*Formatting*/\r\n\r\n.flow-left {\r\n    float: left !important;\r\n}\r\n\r\n.flow-right {\r\n    float: right !important;\r\n}\r\n\r\n.flow-center {\r\n    float: center !important;\r\n}\r\n\r\n.vertical-center {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n/*Padding*/\r\n\r\n.padding-left {\r\n    padding: 0px 0px 0px 7px;\r\n}\r\n\r\n.padding-right {\r\n    padding: 0px 10px 0px 0px;\r\n}\r\n\r\n.padding-up {\r\n    padding: 10px 0px 0px 0px;\r\n}\r\n\r\n.padding-down {\r\n    padding: 0px 0px 5px 0px;\r\n}\r\n\r\n.padding-left-l {\r\n    padding: 10px 0px 0px 23px;\r\n}\r\n\r\n.button{\r\n    padding: 15px 15px 15px 15px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    background-color: #e35953;\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition-duration: 0.4s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.button:hover{\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEM7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLHNEQUFzRDs7QUFFdEQsbUNBQW1DOztBQUNuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBR0EsYUFBYTs7QUFFYjtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUVSLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUEsVUFBVTs7QUFDVjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGlCQUFpQjtJQUNqQiw2RUFBNkU7SUFFN0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtFQUErRTtBQUNuRiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFVuaXZlcnNhbCBTdHlsZXMgZm9yIEphbWJyZSBXZWJzaXRlICovXHJcblxyXG46Om5nLWRlZXAgOnJvb3Qge1xyXG4gICAgLS1tYWluLWJsYWNrOiAjMmEyOTI5O1xyXG4gICAgLS1tYWluLXJlZDogI2UzNTk1MztcclxuICAgIC0tbWFpbi15ZWxsb3c6ICNmMmMwNmY7XHJcbiAgICAtLW1haW4tZ3JlZW46ICNjM2QxOTA7XHJcbiAgICAtLW1haW4tbWF1dmU6ICNkOGJjYmM7XHJcbiAgICAtLW1haW4td2hpdGU6IHdoaXRlO1xyXG5cclxuICAgIC0tbWFpbi1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGh0bWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLUNsYXNzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qLS0tLS0tLS0tLS1Gb250IFN0eWxlcy0tLS0tLS0tLS0qL1xyXG4uZm9udC1zaXplLXhzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250LXNpemUtcyB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uZm9udC1zaXplLW0ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbnQtc2l6ZS1sIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250LXNpemUteGwge1xyXG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbi50ZXh0LWFsaWduLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4udGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG4vKkNvbW1vbiB0ZXh0IHN0eWxlcyovXHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAwcHggNDBweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxufVxyXG5cclxuLmxvY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggYmxhY2tcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDYxcHggMHB4IDBweCAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qRGlzcGxheWluZyBiYW5kcyovXHJcbiNiYW5kLWltZyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiNiYW5kcyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDUwcHggMHB4XHJcbn1cclxuXHJcbiNiYW5kLWluZm8ge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZmxvYXQtb24taW1hZ2Uge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5iYW5kLWRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuXHJcbi8qRm9ybWF0dGluZyovXHJcblxyXG4uZmxvdy1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsb3ctcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsb3ctY2VudGVyIHtcclxuICAgIGZsb2F0OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5jZW50ZXIteHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuLypQYWRkaW5nKi9cclxuLnBhZGRpbmctbGVmdCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA3cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXVwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWRvd24ge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0LWwge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDIzcHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM1OTUzO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./findbands/findbands.component */ "./src/app/findbands/findbands.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bandpage/bandpage.component */ "./src/app/bandpage/bandpage.component.ts");
/* harmony import */ var _createband_createband_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createband/createband.component */ "./src/app/createband/createband.component.ts");













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
                _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_9__["FindbandsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_11__["BandpageComponent"],
                _createband_createband_component__WEBPACK_IMPORTED_MODULE_12__["CreatebandComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
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

module.exports = ".hero-image {\r\n  /* Use \"linear-gradient\" to add a darken background effect to the image (photographer.jpg)*/\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url('BannerPhoto.jpg');\r\n\r\n  /* Set a specific height */\r\n  height: 60%;\r\n\r\n  /* Position and center the image to scale nicely on all screens */\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n/* BAND BANNER*/\r\n\r\n.band-name{\r\n    position: relative;\r\n    top: 83%;\r\n    left: 1%;\r\n    color: lightGrey;\r\n    font-size: 30pt;\r\n    text-overflow: clip;\r\n    text-shadow: 0 0 4px black;\r\n    font-family: var(--main-font);\r\n}\r\n\r\n.subtext{\r\n    position: inherit;\r\n    top: 83%;\r\n    left: 1%;\r\n    color: lightGrey;\r\n    font-size: 15pt;\r\n    text-overflow: clip;\r\n    text-shadow: 0 0 4px black;\r\n    font-family: var(--main-font);\r\n}\r\n\r\n/*Band Information*/\r\n\r\n.band-information{\r\n    position:absolute;\r\n    left:50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    width: 80%;\r\n}\r\n\r\n.header {\r\n    font-family: var(--main-font);\r\n    color: black;\r\n    font-size: 18pt;\r\n}\r\n\r\n/*Forum Styles*/\r\n\r\n#post {\r\n\twidth: 70%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\t\r\n}\r\n\r\n#box {\r\n    border: 1px solid grey;\r\n    padding: 10px 10px 10px 50px;\r\n    margin: 7px 16px 16px 20px;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n.user-icon {\r\n    width: 60px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JhbmRwYWdlL2JhbmRwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyRkFBMkY7RUFDM0YsaUdBQThHOztFQUU5RywwQkFBMEI7RUFDMUIsV0FBVzs7RUFFWCxpRUFBaUU7RUFDakUsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBLGVBQWU7O0FBQ2Y7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFHQSxlQUFlOztBQUNmO0NBQ0MsVUFBVTtJQUNQLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiLi4vYmFuZHBhZ2UvYmFuZHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLWltYWdlIHtcclxuICAvKiBVc2UgXCJsaW5lYXItZ3JhZGllbnRcIiB0byBhZGQgYSBkYXJrZW4gYmFja2dyb3VuZCBlZmZlY3QgdG8gdGhlIGltYWdlIChwaG90b2dyYXBoZXIuanBnKSovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4wKSwgcmdiYSgwLCAwLCAwLCAwLjgpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL0Jhbm5lclBob3RvLmpwZ1wiKTtcclxuXHJcbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gIC8qIFBvc2l0aW9uIGFuZCBjZW50ZXIgdGhlIGltYWdlIHRvIHNjYWxlIG5pY2VseSBvbiBhbGwgc2NyZWVucyAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBCQU5EIEJBTk5FUiovXHJcbi5iYW5kLW5hbWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDgzJTtcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgY29sb3I6IGxpZ2h0R3JleTtcclxuICAgIGZvbnQtc2l6ZTogMzBwdDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDRweCBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG59XHJcblxyXG4uc3VidGV4dHtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgdG9wOiA4MyU7XHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIGNvbG9yOiBsaWdodEdyZXk7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA0cHggYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxufVxyXG5cclxuLypCYW5kIEluZm9ybWF0aW9uKi9cclxuLmJhbmQtaW5mb3JtYXRpb257XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB0O1xyXG59XHJcblxyXG5cclxuLypGb3J1bSBTdHlsZXMqL1xyXG4jcG9zdCB7XHJcblx0d2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHJcbn1cclxuXHJcbiNib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDUwcHg7XHJcbiAgICBtYXJnaW46IDdweCAxNnB4IDE2cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIFxyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bandpage/bandpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/bandpage/bandpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\r\n    <span class=\"band-name\">SAMMY MILLER AND THE CONGREGATION</span>\r\n    <span class=\"subtext\"> JOYFUL JAZZ—MUSIC THAT FEELS GOOD </span>\r\n</div>\r\n\r\n<div id=\"band-information\">\r\n    <h3>Description</h3>\r\n    <p id=\"Description\">\r\n        A native of Los Angeles, Grammy® nominated drummer Sammy Miller has become known for his\r\n        relentless focus on making music that feels good as a drummer, singer, and bandleader.\r\n        Upon completing his Master’s at The Juilliard School, Sammy formed his ensemble, The\r\n        Congregation. As a band, they share the power of community through their music—joyful jazz.\r\n    </p>\r\n</div>\r\n\r\n<div id=\"band-discussion\">\r\n    <div class=\"header\" style=\"padding:40px 0px 10px 0px\"> \r\n        <p>BAND DISCUSSION</p>\r\n    </div>\r\n\r\n    <div id=\"post\">\r\n        <img class=\"user-icon\"src=\"../../assets/profilepic.jpg\">\r\n        <br>\r\n        <div id=\"box\">\r\n            <p class=\"location\">Fiona Soetrisno</p>\r\n            <p class=\"decsription\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n            <p>1/31/19 12:30</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
            styles: [__webpack_require__(/*! ./bandpage.component.css */ "./src/app/bandpage/bandpage.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BandpageComponent);
    return BandpageComponent;
}());



/***/ }),

/***/ "./src/app/createband/createband.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createband/createband.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n\r\n.inputfile + label {\r\n    font-size: 1.25em;\r\n    font-weight: 700;\r\n    color: white;\r\n    background-color: black;\r\n    display: inline-block;\r\n}\r\n\r\n.inputfile:focus + label,\r\n.inputfile + label:hover {\r\n    background-color: var(--main-red);\r\n}\r\n\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NyZWF0ZWJhbmQvY3JlYXRlYmFuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGlDQUFpQztBQUNyQzs7QUFFQTtDQUNDLGVBQWUsRUFBRSxrQkFBa0I7QUFDcEMiLCJmaWxlIjoiLi4vY3JlYXRlYmFuZC9jcmVhdGViYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRmaWxlIHtcclxuXHR3aWR0aDogMC4xcHg7XHJcblx0aGVpZ2h0OiAwLjFweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbnB1dGZpbGU6Zm9jdXMgKyBsYWJlbCxcclxuLmlucHV0ZmlsZSArIGxhYmVsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcmVkKTtcclxufVxyXG5cclxuLmlucHV0ZmlsZSArIGxhYmVsIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7IC8qIFwiaGFuZFwiIGN1cnNvciAqL1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/createband/createband.component.html":
/*!******************************************************!*\
  !*** ./src/app/createband/createband.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/createband/createband.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createband/createband.component.ts ***!
  \****************************************************/
/*! exports provided: CreatebandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatebandComponent", function() { return CreatebandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatebandComponent = /** @class */ (function () {
    function CreatebandComponent() {
    }
    CreatebandComponent.prototype.ngOnInit = function () {
    };
    CreatebandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createband',
            template: __webpack_require__(/*! ./createband.component.html */ "./src/app/createband/createband.component.html"),
            styles: [__webpack_require__(/*! ./createband.component.css */ "./src/app/createband/createband.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatebandComponent);
    return CreatebandComponent;
}());



/***/ }),

/***/ "./src/app/findbands/findbands.component.css":
/*!***************************************************!*\
  !*** ./src/app/findbands/findbands.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-image {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#page-main-text {\r\n    width: 300px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbmRiYW5kcy9maW5kYmFuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Ii4uL2ZpbmRiYW5kcy9maW5kYmFuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jcGFnZS1tYWluLXRleHQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"

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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.main-div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    width: 70%;\r\n}\r\n\r\n#header{\r\n    /*border-style: solid;\r\n    border-width: 10px;\r\n    border-color: red;*/\r\n    background-color: #2a2929;\r\n    width: 100%;\r\n    height: 100px;\r\n    position: relative;\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 210px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n#loginButton {\r\n    margin-top: 15px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 15px;\r\n    background-color: #e35953;\r\n    position: relative;\r\n    left: 50%;\r\n    width: 20%;\r\n    height: 50px;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Safari */\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n#loginButton:hover{\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n#createAccount {\r\n    width: 100%;\r\n}\r\n\r\n#createAccount a {\r\n    color: white;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#createAccount a:hover {\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:active {\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:visited {\r\n    color: lightBlue;\r\n}\r\n\r\n.bandbase{\r\n    position: absolute;\r\n    top:19%;\r\n    left:50.5%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    height: 100px;\r\n    width: auto;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0Q0FBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0k7O3VCQUVtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLDZFQUE2RSxFQUMxQyxXQUFXO0lBQzlDLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiLi4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDQkNCQztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5tYWluLWRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuI2hlYWRlcntcclxuICAgIC8qYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyOTI5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbiNsb2dpbkJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNTk1MztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuI2xvZ2luQnV0dG9uOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuI2NyZWF0ZUFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjcmVhdGVBY2NvdW50IGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59XHJcblxyXG4jY3JlYXRlQWNjb3VudCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBsaWdodEdyZXk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI2NyZWF0ZUFjY291bnQgYTphY3RpdmUge1xyXG4gICAgY29sb3I6IGxpZ2h0Qmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4jY3JlYXRlQWNjb3VudCBhOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IGxpZ2h0Qmx1ZTtcclxufVxyXG5cclxuLmJhbmRiYXNle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjE5JTtcclxuICAgIGxlZnQ6NTAuNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div>\r\n        <img class=\"bandbase\" src=\"../../assets/BandBaseAlt1.png\" alt=\"BandBase logo\">\r\n    </div>\r\n    <br/>\r\n    <div id=\"login_div\" class=\"main-div\">\r\n        <input type=\"email\" class=\"input\" type=\"text\" placeholder=\"Username\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\" id=\"password_field\">\r\n        <br />\r\n\r\n        <button id=\"loginButton\" onclick=\"login()\">Login</button>\r\n\r\n        <div id=\"createAccount\">\r\n            <a routerLink=\"/register\">Need an account? Sign up here!</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<script src=\"https://www.gstatic.com/firebasejs/5.8.2/firebase.js\"></script>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "/*----------Links---------*/\r\n:root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\na {\r\n    color: var(--main-red) !important;\r\n    font-family: var(--main-font);\r\n    text-decoration: none;\r\n    transition: color 0.3s;\r\n    font-size: 16px;\r\n}\r\na:hover {\r\n    color: var(--main-mauve) !important;\r\n}\r\n/* ---------------------Navbar--------------------- */\r\n#nav-bar {\r\n    background-color: #333;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 5;\r\n}\r\n#links {\r\n    /* text-align: center;\r\n    width: 100%;\r\n    height: 100%; */\r\n    height: auto;\r\n    width: auto;\r\n}\r\n.navbar-inverse .navbar-nav>li {\r\n    color: #e35953;\r\n}\r\n.navbar-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 15px;\r\n}\r\n.dropdown-menu {\r\n  padding-top: 20px;\r\n  padding-bottom: 15px;\r\n}\r\n.btn-default {\r\n    padding-top: 20px;\r\n    padding-bottom: 15px;\r\n    color: #222;\r\n}\r\n.open > .dropdown-toggle.btn-default {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: #ffffff;\r\n    border-width: 0px\r\n}\r\n.btn {\r\n    display: inline-block;\r\n    padding: 0px 0px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1.42857143;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: none;\r\n    border-radius: none;\r\n    background-color: #222;\r\n}\r\n.btn-default:hover {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: var(--main-red);\r\n    border-width: 0px;\r\n}\r\n.btn-default:active {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: var(--main-red);\r\n    border-width: 0px;\r\n}\r\n.btn-default:focus {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: #8c8c8c;\r\n}\r\n.user-icon {\r\n    width: 45px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\n.user-icon-small {\r\n    width: 25px;\r\n    height: auto;\r\n    border-radius: 25%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\n/* li {\r\n    display: inline;\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    vertical-align: middle;\r\n    margin: 0px;\r\n    height: 62.4px;\r\n    padding: 0px;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBSUEscURBQXFEO0FBQ3JEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7QUFDZDtBQUVBO0lBQ0k7O21CQUVlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBRXRCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7QUFJQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjs7QUFFL0I7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjs7QUFFL0I7QUFHQTs7Ozs7Ozs7OztHQVVHIiwiZmlsZSI6Ii4uL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLUxpbmtzLS0tLS0tLS0tKi9cclxuOnJvb3Qge1xyXG4gICAgLS1tYWluLWJsYWNrOiAjMmEyOTI5O1xyXG4gICAgLS1tYWluLXJlZDogI2UzNTk1MztcclxuICAgIC0tbWFpbi15ZWxsb3c6ICNmMmMwNmY7XHJcbiAgICAtLW1haW4tZ3JlZW46ICNjM2QxOTA7XHJcbiAgICAtLW1haW4tbWF1dmU6ICNkOGJjYmM7XHJcbiAgICAtLW1haW4td2hpdGU6IHdoaXRlO1xyXG5cclxuICAgIC0tbWFpbi1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1yZWQpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tbWF1dmUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmF2YmFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiNuYXYtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbiNsaW5rcyB7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+bGkge1xyXG4gICAgY29sb3I6ICNlMzU5NTM7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2PmxpPmEge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4ub3BlbiA+IC5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHhcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tcmVkKTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdDpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICBib3JkZXItY29sb3I6ICM4YzhjOGM7XHJcbn1cclxuXHJcbiAgXHJcblxyXG4udXNlci1pY29uIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAxNXB4O1xyXG5cclxufVxyXG5cclxuLnVzZXItaWNvbi1zbWFsbCB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMTVweDtcclxuXHJcbn1cclxuXHJcblxyXG4vKiBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDYyLjRweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n\r\n<!-- <div id=\"nav-bar\">\r\n    <ul>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-left\">FIND JAMS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">MY BANDS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">ABOUT</a></li>\r\n\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-right\">FIONA</a></li>\r\n    </ul>\r\n</div> -->\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-nav-demo\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-nav-demo\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink='/findbands' class=\"nav-label\">FIND JAMS</a></li>\r\n        <li><a routerLink='/createband' class=\"nav-label\">CREATE A BAND</a></li>\r\n        <li><a routerLink='/findbands' class=\"nav-label\">ABOUT</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a href=\"#\"><span style=\"font-size:1.5em;\" class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></span> <span class=\"badge\">3</span></a></li>\r\n        <li>\r\n        <div class=\"dropdown\">\r\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n            <img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\">\r\n            <!-- Dropdown -->\r\n          </button>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu1\">\r\n            <li><a routerLink=\"/profile\">Profile</a></li>\r\n            <li><a href=\"#\">Messages</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Settings</a></li>\r\n            <li><a href=\"/login\" onclick='logout()'>Log Out</a></li>\r\n          </ul>\r\n        </div>\r\n        </li>\r\n        <!-- <li><a style=\"padding:20px 15px 15px\"class=\"user-name\" routerLink='/'>FIONA</a></li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- <script src=\"https://code.jquery.com/jquery-3.3.1.js\" integrity=\"sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script> -->\r\n"

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

module.exports = ".user-icon {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n\r\n.profile-pic {\r\n    width: 320px;\r\n    padding: 30px;\r\n    border-radius: 5px;\r\n    border-style: solid;\r\n    border-color: red;\r\n}\r\n\r\n#info {\r\n    padding: 0px 10px 10px 30px;\r\n}\r\n\r\n#left-column {  \r\n    margin: 0px;\r\n}\r\n\r\n#right-column {\r\n    padding: 14px 30px 30px 30px;\r\n}\r\n\r\n#main-container {\r\n    overflow: auto;\r\n    padding: 61px 0px 0px 0px;\r\n    left: 50%;\r\n}\r\n\r\n.profile-name {\r\n    font-size: 40px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoiLi4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pY29uIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMzBweDtcclxufVxyXG5cclxuI2xlZnQtY29sdW1uIHsgIFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbiNyaWdodC1jb2x1bW4ge1xyXG4gICAgcGFkZGluZzogMTRweCAzMHB4IDMwcHggMzBweDtcclxufVxyXG5cclxuI21haW4tY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNjFweCAwcHggMHB4IDBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">-->\r\n\r\n<div id=\"main-container\">\r\n  <div id=\"left-column\" class=\"flow-left\" style=\"display:inline-block\">\r\n    <img class=\"profile-pic flow-left\" style=\"border-radius:5px\" src=\"../../assets/profilepic.jpg\">\r\n    <div id=\"info\">\r\n      <p class=\"label-title font-size-m\"> CONTACT </p>\r\n      <p class=\"description\"> email: fiona.soetrisno@gmail.com </p>\r\n      <p class=\"description\"> phone: 425-628-8598 </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"right-column\" style=\"display:inline-block;width:600px\">\r\n    <p class=\"profile-name\">FIONA SOETRISNO</p>\r\n    <p class=\"location\">San Luis Obispo, CA</p>\r\n    <br>\r\n\r\n    <p class=\"description\"> Leiusmod tempor incididunt ut labore et dolore magna aliqua. \r\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco \r\n        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure \r\n        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \r\n        nulla pariatur. Excepteur sint occaecat cupidatat non proident, \r\n        sunt in culpa qui officia deserunt mollit anim id est laborum. </p>\r\n    <p class=\"label-title font-size-m\">INSTRUMENTS</p>\r\n    <p class=\"description\">Violin, Piano</p>\r\n    <p class=\"label-title font-size-m\">GENRES</p>\r\n    <p class=\"description\">Jazz, Classical</p>\r\n    <p class=\"label-title font-size-m\">PREFERENCES</p>\r\n    <p class=\"description\">Casual</p>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"overflow:auto; width:80%; height:2px; padding:15px\">\r\n  <div class=\"line center-x\">\r\n  </div>\r\n</div>\r\n\r\n <div>\r\n    <p class=\"header\">FIONA'S BANDS</p>\r\n  </div>\r\n  \r\n  <!--Suggested Bands-->\r\n\r\n  <div id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc center-x\" style=\"display:inline-block;\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <a href=\"#\" class=\"thumbnail\">\r\n        <img src=\"profilepic.jpg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h1>EDDIE AUNG</h1>\r\n      <h5>San Luis Obispo, CA</h5>\r\n      <br>\r\n      <br>\r\n      <div class=\"profile-description\">\r\n        Bacon ipsum dolor amet bacon flank picanha pork chop spare ribs alcatra pastrami pancetta prosciutto sausage chuck frankfurter. Andouille short loin doner, flank fatback capicola shank kevin pork chop pork loin brisket turducken. Chicken beef meatloaf picanha, buffalo ribeye pork chop sausage alcatra tenderloin boudin brisket filet mignon frankfurter. Shoulder ground round biltong, kielbasa drumstick beef ribs turducken.\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div id=\"\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <a href=\"#\" class=\"thumbnail\">\r\n        <img src=\"profilepic.jpg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h1>EDDIE AUNG</h1>\r\n      <h5>San Luis Obispo, CA</h5>\r\n      <br>\r\n      <br>\r\n      <div class=\"profile-description\">\r\n        Bacon ipsum dolor amet bacon flank picanha pork chop spare ribs alcatra pastrami pancetta prosciutto sausage chuck frankfurter. Andouille short loin doner, flank fatback capicola shank kevin pork chop pork loin brisket turducken. Chicken beef meatloaf picanha, buffalo ribeye pork chop sausage alcatra tenderloin boudin brisket filet mignon frankfurter. Shoulder ground round biltong, kielbasa drumstick beef ribs turducken.\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n"

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
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
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

module.exports = "\r\n\r\n\r\n.background {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n#container {\r\n    display: block;\r\n    position:relative;\r\n    width: 40%;\r\n    left: 50%;\r\n    top: 28%;\r\n    min-height: 100%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n\r\n    background-color: red);\r\n}\r\n\r\n#createButton {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    background-color: #e35953;\r\n    width: 40%;\r\n    height: auto;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition-duration: 0.4s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n#createButton:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 300px;\r\n    border-right: 10px solid #e35953;\r\n    border-top: 0px solid white;\r\n    border-left: 0px solid white;\r\n    border-bottom: 0px solid white;\r\n    margin-bottom: 25px;\r\n    margin-top: 0px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n\r\n}\r\n\r\n.bio{\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 300px;\r\n    margin-bottom: 16px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.bandbase {\r\n    position: relative;\r\n    top: 15%;\r\n    left: 50.5%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    height: 100px;\r\n    width: auto;\r\n    display: block;\r\n}\r\n\r\n#back {\r\n    width: 100%;\r\n    margin-bottom: 175px;\r\n}\r\n\r\n#back a {\r\n    color: lightGrey;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#back a:hover {\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#back a:active {\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#back a:visited {\r\n    color: lightBlue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw0Q0FBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsc0NBQThCO1lBQTlCLDhCQUE4Qjs7SUFFOUIsc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGlCQUFpQjtJQUNqQiw2RUFBNkU7SUFFN0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJLCtFQUErRTtBQUNuRjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdDQUF3Qzs7QUFFNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDQkNCQztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMjglO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQpO1xyXG59XHJcblxyXG5cclxuI2NyZWF0ZUJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM1OTUzO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4jY3JlYXRlQnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcblxyXG4uaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZTM1OTUzO1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG5cclxufVxyXG5cclxuLmJpb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLmJhbmRiYXNlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbGVmdDogNTAuNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbiNiYWNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTc1cHg7XHJcbn1cclxuXHJcbiNiYWNrIGEge1xyXG4gICAgY29sb3I6IGxpZ2h0R3JleTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuI2JhY2sgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogbGlnaHRHcmV5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiNiYWNrIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiBsaWdodEJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI2JhY2sgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBsaWdodEJsdWU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"background\">\r\n    <div id=\"header\">\r\n\r\n        <div id=\"login_div\">\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n\r\n            <img class=\"bandbase\" src=\"../../assets/BandBaseAlt1.png\" alt=\"BandBase Logo\">\r\n            <div id=\"container\">\r\n                <div>\r\n                    <hr />\r\n                    <input type=\"email\" class=\"input\" maxlength=\"15\" type=\"text\" placeholder=\"Email\" id=\"email_field\"><br />\r\n                    <input type=\"password\" class=\"input\" maxlength=\"15\" type=\"text\" placeholder=\"Password\" id=\"password_field\"><br />\r\n                    <input type=\"password\" class=\"input\" maxlength=\"15\" type=\"text\" placeholder=\"Re-type password\" id=\"password_conf_field\"><br />\r\n                    <hr />\r\n                    <input type=\"instruments\" class=\"input\" max=\"200\" type=\"text\" placeholder=\"What instruments do you play?\"><br />\r\n                    <input type=\"genres\" class=\"input\" max=\"200\" type=\"text\" placeholder=\"Which genres of music do you play?\"><br />\r\n                    <select class=\"input\" name=\"Playing preferences\">\r\n                        <option value=\"default\">Choose your playing preference</option>\r\n                        <option value=\"Learner\">Learner</option>\r\n                        <option value=\"Casual\">Casual</option>\r\n                        <option value=\"Amateur\">Amateur</option>\r\n                        <option value=\"Professional\">Professional</option>\r\n                    </select>\r\n\r\n                    <textarea class=\"bio\" name=\"bio\" rows=\"8\" cols=\"50\" placeholder=\"Write a short bio about your experience as a musician.\"></textarea>\r\n                    <hr />\r\n                    <button id=\"createButton\" onclick=\"create()\"> Create Account </button>\r\n                    <div id=\"back\">\r\n                        <a href=\"LOGIN PAGE URL\">Back to Login page</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n\r\n        </div>\r\n\r\n<div id=\"user_div\" class=\"loggedin-div\">\r\n    <h3 style=\"margin-top:0px;\">Welcome User</h3>\r\n    <p id=\"user_para\">Welcome to Firebase. You're currently logged in.</p>\r\n    <button onclick=\"logout()\">Logout</button>\r\n  </div>\r\n\r\n        <script src=\"https://www.gstatic.com/firebasejs/5.8.2/firebase.js\"></script>\r\n"

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
        this.json = [];
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