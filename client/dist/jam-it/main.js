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

module.exports = "/* Universal Styles for Jambre Website */\r\n\r\n::ng-deep :root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\np {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n::ng-deep body {\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n::ng-deep html {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* ---------------------Classes--------------------- */\r\n\r\n/*-----------Font Styles----------*/\r\n\r\n.font-size-xs {\r\n    font-size: 15px !important; \r\n}\r\n\r\n.font-size-s {\r\n    font-size: 20px !important; \r\n}\r\n\r\n.font-size-m {\r\n    font-size: 18px !important; \r\n}\r\n\r\n.font-size-l {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.font-size-xl {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.text-align-left {\r\n    text-align:left;\r\n}\r\n\r\n.text-align-center {\r\n    text-align:center;\r\n}\r\n\r\n.text-align-right {\r\n    text-align:right;\r\n}\r\n\r\n/*Common text styles*/\r\n\r\n.label {\r\n    font-family: var(--main-font);\r\n    color: var(--main-red);\r\n}\r\n\r\n.label-title {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 30px;\r\n    margin: 0px;\r\n    padding: 3px 0px 3px 0px;\r\n}\r\n\r\n.header {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 27px;\r\n    margin: 0px;\r\n    padding: 40px 0px 40px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.description {\r\n    font-size: 16px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n.location {\r\n    font-size: 20px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    margin: 0px;\r\n}\r\n\r\n.page-title {\r\n    font-size: 65px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-white);\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-shadow: 0 0 10px black\r\n}\r\n\r\n.line {\r\n    width: 80%;\r\n    height: 1px;\r\n    background: grey;\r\n    margin: 0px;\r\n    text-align:center;\r\n}\r\n\r\n/*Displaying bands*/\r\n\r\n#band-img {\r\n    width: 380px;\r\n    height: auto;\r\n    border-radius: 3px;\r\n}\r\n\r\n#bands {\r\n    padding: 0px 0px 50px 0px\r\n}\r\n\r\n#band-info {\r\n    width: 380px;\r\n    height: auto;\r\n}\r\n\r\n.float-on-image {\r\n    left: 0;\r\n    position:absolute;\r\n    text-align:center;\r\n    top: 30%;\r\n    width: 100%;\r\n    color:white;\r\n}\r\n\r\n.band-desc {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:center;\r\n    width: 800px;\r\n}\r\n\r\n/*Formatting*/\r\n\r\n.flow-left {\r\n    float: left !important;\r\n}\r\n\r\n.flow-right {\r\n    float: right !important;\r\n}\r\n\r\n.flow-center {\r\n    float: center !important;\r\n}\r\n\r\n.vertical-center {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n/*Padding*/\r\n\r\n.padding-left {\r\n    padding: 0px 0px 0px 7px;\r\n}\r\n\r\n.padding-right {\r\n    padding: 0px 10px 0px 0px;\r\n}\r\n\r\n.padding-up {\r\n    padding: 10px 0px 0px 0px;\r\n}\r\n\r\n.padding-down {\r\n    padding: 0px 0px 5px 0px;\r\n}\r\n\r\n.padding-left-l {\r\n    padding: 10px 0px 0px 23px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEM7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLHNEQUFzRDs7QUFFdEQsbUNBQW1DOztBQUNuQztJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUEsbUJBQW1COztBQUNuQjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUdBLGFBQWE7O0FBRWI7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBLFVBQVU7O0FBQ1Y7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBVbml2ZXJzYWwgU3R5bGVzIGZvciBKYW1icmUgV2Vic2l0ZSAqL1xyXG5cclxuOjpuZy1kZWVwIDpyb290IHtcclxuICAgIC0tbWFpbi1ibGFjazogIzJhMjkyOTtcclxuICAgIC0tbWFpbi1yZWQ6ICNlMzU5NTM7XHJcbiAgICAtLW1haW4teWVsbG93OiAjZjJjMDZmO1xyXG4gICAgLS1tYWluLWdyZWVuOiAjYzNkMTkwO1xyXG4gICAgLS1tYWluLW1hdXZlOiAjZDhiY2JjO1xyXG4gICAgLS1tYWluLXdoaXRlOiB3aGl0ZTtcclxuXHJcbiAgICAtLW1haW4tZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBib2R5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBodG1sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS1DbGFzc2VzLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKi0tLS0tLS0tLS0tRm9udCBTdHlsZXMtLS0tLS0tLS0tKi9cclxuLmZvbnQtc2l6ZS14cyB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDsgXHJcbn1cclxuLmZvbnQtc2l6ZS1zIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50OyBcclxufVxyXG4uZm9udC1zaXplLW0ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5mb250LXNpemUtbCB7XHJcbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLmZvbnQtc2l6ZS14bCB7XHJcbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbi50ZXh0LWFsaWduLWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4udGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG4vKkNvbW1vbiB0ZXh0IHN0eWxlcyovXHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAwcHggNDBweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxufVxyXG5cclxuLmxvY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggYmxhY2tcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi8qRGlzcGxheWluZyBiYW5kcyovXHJcbiNiYW5kLWltZyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiNiYW5kcyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDUwcHggMHB4XHJcbn1cclxuXHJcbiNiYW5kLWluZm8ge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZmxvYXQtb24taW1hZ2Uge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5iYW5kLWRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuXHJcbi8qRm9ybWF0dGluZyovXHJcblxyXG4uZmxvdy1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsb3ctcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsb3ctY2VudGVyIHtcclxuICAgIGZsb2F0OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5jZW50ZXIteHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuLypQYWRkaW5nKi9cclxuLnBhZGRpbmctbGVmdCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA3cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXVwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWRvd24ge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0LWwge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDIzcHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bandpage/bandpage.component */ "./src/app/bandpage/bandpage.component.ts");













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
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _bandpage_bandpage_component__WEBPACK_IMPORTED_MODULE_12__["BandpageComponent"]
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

module.exports = "#banner-photo{\r\n    width:100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmRwYWdlL2JhbmRwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiYmFuZHBhZ2UvYmFuZHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYW5uZXItcGhvdG97XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/findbands/findbands.component.css":
/*!***************************************************!*\
  !*** ./src/app/findbands/findbands.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-image {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#page-main-text {\r\n    width: 300px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmRiYW5kcy9maW5kYmFuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImZpbmRiYW5kcy9maW5kYmFuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jcGFnZS1tYWluLXRleHQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"

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

module.exports = ".background {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.main-div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    width: 70%;\r\n}\r\n\r\n#header{\r\n    /*border-style: solid;\r\n    border-width: 10px;\r\n    border-color: red;*/\r\n    background-color: #2a2929;\r\n    width: 100%;\r\n    height: 100px;\r\n    position: relative;\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 210px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n#loginButton {\r\n    margin-top: 15px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 15px;\r\n    background-color: #e35953;\r\n    position: relative;\r\n    left: 50%;\r\n    width: 20%;\r\n    height: 50px;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Safari */\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n#loginButton:hover{\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n#createAccount {\r\n    width: 100%;\r\n}\r\n\r\n#createAccount a {\r\n    color: white;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#createAccount a:hover {\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:active {\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:visited {\r\n    color: lightBlue;\r\n}\r\n\r\n.bandbase{\r\n    position: absolute;\r\n    top:15%;\r\n    left:50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    height: 130px;\r\n    width: auto;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0Q0FBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0k7O3VCQUVtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLDZFQUE2RSxFQUMxQyxXQUFXO0lBQzlDLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLCtFQUErRTtBQUNuRjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDQkNCQztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5tYWluLWRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuI2hlYWRlcntcclxuICAgIC8qYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyOTI5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbiNsb2dpbkJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNTk1MztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuI2xvZ2luQnV0dG9uOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuI2NyZWF0ZUFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNjcmVhdGVBY2NvdW50IGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59XHJcblxyXG4jY3JlYXRlQWNjb3VudCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBsaWdodEdyZXk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI2NyZWF0ZUFjY291bnQgYTphY3RpdmUge1xyXG4gICAgY29sb3I6IGxpZ2h0Qmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4jY3JlYXRlQWNjb3VudCBhOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IGxpZ2h0Qmx1ZTtcclxufVxyXG5cclxuLmJhbmRiYXNle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjE1JTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div>\r\n        <img class=\"bandbase\" src=\"../../assets/BandBase.png\" alt=\"BandBase logo\">\r\n    </div>\r\n    <br/>\r\n    <div id=\"login_div\" class=\"main-div\">\r\n        <input type=\"email\" class=\"input\" type=\"text\" placeholder=\"Username\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\" id=\"password_field\">\r\n        <br />\r\n\r\n        <button id=\"loginButton\" onclick=\"login()\">Login</button>\r\n\r\n        <div id=\"createAccount\">\r\n            <a href=\"Need an account? Sign up here!\">Need an account? Sign up here!</a>\r\n        </div>\r\n    </div>\r\n    <div id=\"user_div\" class=\"loggedin-div\">\r\n        <h3>Welcome User</h3>\r\n        <p id=\"user_para\">Welcome to Firebase web login Example. You're currently logged in.</p>\r\n        <button onclick=\"logout()\">Logout</button>\r\n    </div>\r\n</div>\r\n\r\n<script src=\"https://www.gstatic.com/firebasejs/5.8.2/firebase.js\"></script>\r\n"

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

module.exports = "/*----------Links---------*/\r\n:root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\na {\r\n    color: var(--main-red) !important;\r\n    font-family: var(--main-font);\r\n    text-decoration: none;\r\n    transition: color 0.3s;\r\n    font-size: 16px;\r\n}\r\na:hover {\r\n    color: var(--main-mauve) !important;\r\n}\r\n/* ---------------------Navbar--------------------- */\r\n#nav-bar {\r\n    background-color: #333;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 5;\r\n}\r\n#links {\r\n    /* text-align: center;\r\n    width: 100%;\r\n    height: 100%; */\r\n    height: auto;\r\n    width: auto;\r\n}\r\n.navbar-inverse .navbar-nav>li {\r\n    color: #e35953;\r\n}\r\n.navbar-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 15px;\r\n}\r\n.user-icon {\r\n    width: 45px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\n.user-icon-small {\r\n    width: 25px;\r\n    height: auto;\r\n    border-radius: 25%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\nli {\r\n    display: inline;\r\n    list-style: none;\r\n}\r\nul {\r\n    vertical-align: middle;\r\n    margin: 0px;\r\n    height: 62.4px;\r\n    padding: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBSUEscURBQXFEO0FBQ3JEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7QUFDZDtBQUVBO0lBQ0k7O21CQUVlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCOztBQUUvQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCOztBQUUvQjtBQUlBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJuYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS1MaW5rcy0tLS0tLS0tLSovXHJcbjpyb290IHtcclxuICAgIC0tbWFpbi1ibGFjazogIzJhMjkyOTtcclxuICAgIC0tbWFpbi1yZWQ6ICNlMzU5NTM7XHJcbiAgICAtLW1haW4teWVsbG93OiAjZjJjMDZmO1xyXG4gICAgLS1tYWluLWdyZWVuOiAjYzNkMTkwO1xyXG4gICAgLS1tYWluLW1hdXZlOiAjZDhiY2JjO1xyXG4gICAgLS1tYWluLXdoaXRlOiB3aGl0ZTtcclxuXHJcbiAgICAtLW1haW4tZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tcmVkKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLW1hdXZlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLU5hdmJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4jbmF2LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4jbGlua3Mge1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2PmxpIHtcclxuICAgIGNvbG9yOiAjZTM1OTUzO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDE1cHg7XHJcblxyXG59XHJcblxyXG4udXNlci1pY29uLXNtYWxsIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAxNXB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDYyLjRweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n\r\n<!-- <div id=\"nav-bar\">\r\n    <ul>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-left\">FIND JAMS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">MY BANDS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">ABOUT</a></li>\r\n\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-right\">FIONA</a></li>\r\n    </ul>\r\n</div> -->\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-nav-demo\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-nav-demo\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink='/findbands' class=\"nav-label\">FIND JAMS</a></li>\r\n        <li><a routerLink='/findbands' class=\"nav-label\">MY BANDS</a></li>\r\n        <li><a routerLink='/findbands' class=\"nav-label\">ABOUT</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a style=\"padding:20px 15px 15px 0px\"class=\"user-name\" routerLink='/profile'>FIONA</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- <script src=\"https://code.jquery.com/jquery-3.3.1.js\" integrity=\"sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script> -->\r\n"

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

module.exports = ".user-icon {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n\r\n.profile-pic {\r\n    width: 320px;\r\n    padding: 30px;\r\n    border-radius: 5px;\r\n    border-style: solid;\r\n    border-color: red;\r\n}\r\n\r\n#info {\r\n    padding: 0px 10px 10px 30px;\r\n}\r\n\r\n#left-column {  \r\n    margin: 0px;\r\n}\r\n\r\n#right-column {\r\n    padding: 14px 30px 30px 30px;\r\n}\r\n\r\n#main-container {\r\n    overflow: auto;\r\n    padding: 61px 0px 0px 0px;\r\n    left: 50%;\r\n}\r\n\r\n.profile-name {\r\n    font-size: 40px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoicHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pY29uIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNpbmZvIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMzBweDtcclxufVxyXG5cclxuI2xlZnQtY29sdW1uIHsgIFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbiNyaWdodC1jb2x1bW4ge1xyXG4gICAgcGFkZGluZzogMTRweCAzMHB4IDMwcHggMzBweDtcclxufVxyXG5cclxuI21haW4tY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNjFweCAwcHggMHB4IDBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4iXX0= */"

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

module.exports = ".background {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n#container {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 28%;\r\n    height: 50px;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    /*background-color: rgba(115,115,115,.7);\r\n    border-radius: 20px;*/\r\n}\r\n\r\n#createButton {\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    background-color: #e35953;\r\n    width: 40%;\r\n    height: 50px;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Safari */\r\n    transition-duration: 0.4s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n#createButton:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 300px;\r\n    margin-bottom: 30px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.bandbase {\r\n    position: absolute;\r\n    top: 15%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    height: 100px;\r\n    width: auto;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#email_field{\r\n    margin-top:20px;\r\n}\r\n\r\n#password_conf_field{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#back {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#back a {\r\n    color: lightGrey;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#back a:hover {\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#back a:active {\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#back a:visited {\r\n    color: lightBlue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0Q0FBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCO3lCQUNxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLDZFQUE2RSxFQUMxQyxXQUFXO0lBQzlDLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQ0JDQkM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMjglO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwxMTUsMTE1LC43KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7Ki9cclxufVxyXG5cclxuI2NyZWF0ZUJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzU5NTM7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuI2NyZWF0ZUJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC42KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4uYmFuZGJhc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jZW1haWxfZmllbGR7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuI3Bhc3N3b3JkX2NvbmZfZmllbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jYmFjayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNiYWNrIGEge1xyXG4gICAgY29sb3I6IGxpZ2h0R3JleTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuI2JhY2sgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogbGlnaHRHcmV5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiNiYWNrIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiBsaWdodEJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI2JhY2sgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBsaWdodEJsdWU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div id=\"header\">\r\n        <img class=\"bandbase\" src=\"../../assets/CreateAccount.png\" alt=\"Create Account word art\">\r\n    <div id=\"login_div\">\r\n    <div id=\"container\">\r\n        <hr/>\r\n        <input type=\"email\" class=\"input\" type=\"text\" placeholder=\"Email\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\" id=\"password_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Re-type password\" id=\"password_conf_field\">\r\n        <button id=\"createButton\" onclick=\"create()\"> Create Account </button>\r\n        <div id=\"back\">\r\n            <a href=\"LOGIN PAGE URL\" margin-bottom=\"10px\">Back to Login page</a>\r\n        </div>\r\n        <br/>\r\n        <hr/>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div id=\"user_div\" class=\"loggedin-div\">\r\n    <h3>Welcome User</h3>\r\n    <p id=\"user_para\">Welcome to Firebase. You're currently logged in.</p>\r\n    <button onclick=\"logout()\">Logout</button>\r\n  </div>\r\n\r\n<script src=\"https://www.gstatic.com/firebasejs/5.8.2/firebase.js\"></script>\r\n"

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