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
        path: 'findbands',
        component: _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_6__["FindbandsComponent"]
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

module.exports = "/* Universal Styles for Jambre Website */\r\n\r\n::ng-deep :root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\np {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n::ng-deep body {\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n::ng-deep html {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.label {\r\n    font-family: var(--main-font);\r\n    color: var(--main-red);\r\n}\r\n\r\n.label-title {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 30px;\r\n    margin: 0px;\r\n    padding: 3px 0px 3px 0px;\r\n}\r\n\r\n/* ---------------------Classes--------------------- */\r\n\r\n/*-----------Font Styles----------*/\r\n\r\n.font-size-xs {\r\n    font-size: 15px !important; \r\n}\r\n\r\n.font-size-s {\r\n    font-size: 20px !important; \r\n}\r\n\r\n.font-size-m {\r\n    font-size: 18px !important; \r\n}\r\n\r\n.font-size-l {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.font-size-xl {\r\n    font-size: 40px !important; \r\n}\r\n\r\n.text-align-left {\r\n    text-align:left;\r\n}\r\n\r\n.text-align-center {\r\n    text-align:center;\r\n}\r\n\r\n.text-align-right {\r\n    text-align:right;\r\n}\r\n\r\n.description {\r\n    font-size: 18px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n.location {\r\n    font-size: 20px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    margin: 0px;\r\n}\r\n\r\n.page-title {\r\n    font-size: 65px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-white);\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-shadow: 0 0 10px black\r\n}\r\n\r\n/*Formatting*/\r\n\r\n.flow-left {\r\n    float: left !important;\r\n}\r\n\r\n.flow-right {\r\n    float: right !important;\r\n}\r\n\r\n.flow-center {\r\n    float: center !important;\r\n}\r\n\r\n.vertical-center {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n/*Padding*/\r\n\r\n.padding-left {\r\n    padding: 0px 0px 0px 7px;\r\n}\r\n\r\n.padding-right {\r\n    padding: 0px 10px 0px 0px;\r\n}\r\n\r\n.padding-up {\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.padding-down {\r\n    padding: 0px 0px 5px 0px;\r\n}\r\n\r\n.padding-left-l {\r\n    padding: 0px 0px 0px 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEM7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUEsc0RBQXNEOztBQUV0RCxtQ0FBbUM7O0FBQ25DO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKOztBQUdBLGFBQWE7O0FBRWI7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBLFVBQVU7O0FBQ1Y7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBVbml2ZXJzYWwgU3R5bGVzIGZvciBKYW1icmUgV2Vic2l0ZSAqL1xyXG5cclxuOjpuZy1kZWVwIDpyb290IHtcclxuICAgIC0tbWFpbi1ibGFjazogIzJhMjkyOTtcclxuICAgIC0tbWFpbi1yZWQ6ICNlMzU5NTM7XHJcbiAgICAtLW1haW4teWVsbG93OiAjZjJjMDZmO1xyXG4gICAgLS1tYWluLWdyZWVuOiAjYzNkMTkwO1xyXG4gICAgLS1tYWluLW1hdXZlOiAjZDhiY2JjO1xyXG4gICAgLS1tYWluLXdoaXRlOiB3aGl0ZTtcclxuXHJcbiAgICAtLW1haW4tZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBib2R5IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBodG1sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ2xhc3Nlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyotLS0tLS0tLS0tLUZvbnQgU3R5bGVzLS0tLS0tLS0tLSovXHJcbi5mb250LXNpemUteHMge1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5mb250LXNpemUtcyB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLmZvbnQtc2l6ZS1tIHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50OyBcclxufVxyXG4uZm9udC1zaXplLWwge1xyXG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5mb250LXNpemUteGwge1xyXG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4udGV4dC1hbGlnbi1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxufVxyXG4udGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnRleHQtYWxpZ24tcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrXHJcbn1cclxuXHJcblxyXG4vKkZvcm1hdHRpbmcqL1xyXG5cclxuLmZsb3ctbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5mbG93LXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcbi5mbG93LWNlbnRlciB7XHJcbiAgICBmbG9hdDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uY2VudGVyLXh7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbn1cclxuXHJcbi8qUGFkZGluZyovXHJcbi5wYWRkaW5nLWxlZnQge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggN3B4O1xyXG59XHJcblxyXG4ucGFkZGluZy1yaWdodCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy11cCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWRvd24ge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0LWwge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTVweDtcclxufVxyXG4iXX0= */"

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
                _findbands_findbands_component__WEBPACK_IMPORTED_MODULE_10__["FindbandsComponent"]
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

/***/ "./src/app/findbands/findbands.component.css":
/*!***************************************************!*\
  !*** ./src/app/findbands/findbands.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background-image {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#page-main-text {\r\n    width: 300px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#band-img {\r\n    width: 380px;\r\n    height: auto;\r\n    border-radius: 3px;\r\n}\r\n\r\n#band-info {\r\n    width: 380px;\r\n    height: auto;\r\n}\r\n\r\n.float-on-image {\r\n    left: 0;\r\n    position:absolute;\r\n    text-align:center;\r\n    top: 30%;\r\n    width: 100%;\r\n    color:white;\r\n}\r\n\r\n.band-desc {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:center;\r\n    width: 800px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmRiYW5kcy9maW5kYmFuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQiIsImZpbGUiOiJmaW5kYmFuZHMvZmluZGJhbmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3BhZ2UtbWFpbi10ZXh0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuI2JhbmQtaW1nIHtcclxuICAgIHdpZHRoOiAzODBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuI2JhbmQtaW5mbyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mbG9hdC1vbi1pbWFnZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJhbmQtZGVzYyB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG59XHJcbiJdfQ== */"

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

module.exports = "<div class=\"background\">\r\n    <script src=\"./firebase.js\"></script>\r\n    <div class=\"center\" id=\"login_div\" class=\"main-div\">\r\n        <input type=\"email\" class=\"input\" type=\"text\" placeholder=\"Username\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\" id=\"password_field\">\r\n        <br />\r\n\r\n        <button class=\"center-x\" id=\"loginButton\" onclick=\"login()\">Login</button>\r\n        <br />\r\n        <br />\r\n        <br />\r\n        <div class=\"center-x\" id=\"createAccount\">\r\n            <a class=\"center-x\" href=\"Need an account? Sign up here!\">Need an account? Sign up here!</a>\r\n        </div>\r\n    </div>\r\n    <div id=\"user_div\" class=\"loggedin-div\">\r\n        <h3>Welcome User</h3>\r\n        <p id=\"user_para\">Welcome to Firebase web login Example. You're currently logged in.</p>\r\n        <button onclick=\"logout()\">Logout</button>\r\n    </div>\r\n\r\n\r\n\r\n    <script>\r\n        // Initialize Firebase\r\n        var config = {\r\n            apiKey: \"AIzaSyDtJrNKruPz74uXLW6PnGsWOv9bVQsS9ng\",\r\n            authDomain: \"bandbase-26533.firebaseapp.com\",\r\n            databaseURL: \"https://bandbase-26533.firebaseio.com\",\r\n            projectId: \"bandbase-26533\",\r\n            storageBucket: \"bandbase-26533.appspot.com\",\r\n            messagingSenderId: \"962953801879\"\r\n        };\r\n        firebase.initializeApp(config);\r\n    </script>\r\n    <script src=\"index.js\"></script>\r\n</div>\r\n"

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
        var e = document.createElement("script");
        e.src = './firebase.js';
        e.type = "text/javascript";
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                document.getElementById("user_div").style.display = "block";
                document.getElementById("login_div").style.display = "none";
                var user = firebase.auth().currentUser;
                if (user != null) {
                    var email_id = user.email;
                    document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
                }
            }
            else {
                // No user is signed in.
                document.getElementById("user_div").style.display = "none";
                document.getElementById("login_div").style.display = "block";
            }
        });
        function login() {
            var userEmail = document.getElementById("email_field").value;
            var userPass = document.getElementById("password_field").value;
            firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert("Error : " + errorMessage);
                // Do other stuff??
            });
        }
        function logout() {
            firebase.auth().signOut();
        }
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

module.exports = "/*----------Links---------*/\r\n:root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\na {\r\n    text-decoration: none;\r\n    transition: color 0.3s;\r\n}\r\na:hover {\r\n    color: var(--main-mauve);\r\n}\r\na:active {\r\n    text-decoration: underline;\r\n}\r\n/* ---------------------Navbar--------------------- */\r\n#nav-bar {\r\n    background-color: #333;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 5;\r\n}\r\n#links {\r\n    /* text-align: center;\r\n    width: 100%;\r\n    height: 100%; */\r\n    height: auto;\r\n    width: auto;\r\n}\r\n.nav-label {\r\n    padding: 20px 0px 20px 40px;\r\n    display: inline;\r\n}\r\n.user-icon {\r\n    width: 45px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    margin: 10px 20px 10px 15px;\r\n    \r\n}\r\nli {\r\n    display: inline;\r\n    list-style: none;\r\n}\r\nul {\r\n    vertical-align: middle;\r\n    margin: 0px;\r\n    height: 62.4px;\r\n    padding: 0px;\r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjs7SUFFbkIsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUdBLHFEQUFxRDtBQUNyRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFFQTtJQUNJOzttQkFFZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7O0FBRS9CO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0FBQ2hCIiwiZmlsZSI6Im5hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLUxpbmtzLS0tLS0tLS0tKi9cclxuOnJvb3Qge1xyXG4gICAgLS1tYWluLWJsYWNrOiAjMmEyOTI5O1xyXG4gICAgLS1tYWluLXJlZDogI2UzNTk1MztcclxuICAgIC0tbWFpbi15ZWxsb3c6ICNmMmMwNmY7XHJcbiAgICAtLW1haW4tZ3JlZW46ICNjM2QxOTA7XHJcbiAgICAtLW1haW4tbWF1dmU6ICNkOGJjYmM7XHJcbiAgICAtLW1haW4td2hpdGU6IHdoaXRlO1xyXG5cclxuICAgIC0tbWFpbi1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLW1hdXZlKTtcclxufVxyXG5cclxuYTphY3RpdmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS1OYXZiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuI25hdi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuI2xpbmtzIHtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtbGFiZWwge1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggMjBweCA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAxNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGhlaWdodDogNjIuNHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59IFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nav-bar\">\r\n    <ul>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-left\">FIND JAMS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">MY BANDS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">ABOUT</a></li>\r\n        \r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-right\">FIONA</a></li>\r\n    </ul>\r\n</div>\r\n"

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

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n#container{\r\n    margin-top:50px;\r\n    padding: 20px 40px 20px 40px;\r\n    background-color: rgba(115,115,115,.7);\r\n    border-radius: 20px;\r\n}\r\n\r\n#createButton{\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 30px;\r\n    background-color: #e35953;\r\n    width: 80%;\r\n    height: 50px;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n.input{\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 80%;\r\n    margin-bottom: 30px;\r\n    background-color: rgba(255,255,255,1);\r\n}\r\n\r\n.title{\r\n    font-size: 30pt;\r\n    font-weight: bold;\r\n    color: black;\r\n    padding: 5px 5px 5px 5px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0Q0FBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMENBQTBDO0FBQzlDIiwiZmlsZSI6InJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JDQkNCQztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsMTE1LDExNSwuNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4jY3JlYXRlQnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNTk1MztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbn1cclxuXHJcbi5jZW50ZXIteHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div id=\"container\" class=\"center-x\">\r\n        <h1 class=\"title\">Create An Account</h1>\r\n        <input type=\"email\" class=\"input\"type=\"text\" placeholder=\"Email\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Password\"><br />\r\n        <input type=\"password\" class=\"input\" type=\"text\" placeholder=\"Re-type password\">\r\n        <button id=\"createButton\" onclick=\"login()\"> Create Account </button>\r\n    </div>\r\n\r\n</div>\r\n"

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