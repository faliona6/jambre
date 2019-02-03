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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container{\r\n    width:100%;\r\n    height:100%;\r\n    margin: 130px 130px 0px 130px\r\n}\r\n\r\n.title{\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-size: 40pt;\r\n    font-weight: bold;\r\n}\r\n\r\n.body{\r\n    width:75%;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-size: 20pt;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULDBDQUEwQztJQUMxQyxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgbWFyZ2luOiAxMzBweCAxMzBweCAwcHggMTMwcHhcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <p class=\"title\">About</p>\r\n    <p class=\"body\">\r\n        Bandbase is an app made by musicians, for musicians. Our goal is to bring\r\n        musicians together to share the gift of music. We do so in a quick and painless\r\n        fashion to allow bandleaders' and players' passions for music to thrive and grow.\r\n        \r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");










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
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
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

module.exports = "/* Universal Styles for Jambre Website */\r\n\r\n::ng-deep :root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\np {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n::ng-deep body {\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n::ng-deep html {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* ---------------------Classes--------------------- */\r\n\r\n/*-----------Font Styles----------*/\r\n\r\n.font-size-xs {\r\n    font-size: 15px !important;\r\n}\r\n\r\n.font-size-s {\r\n    font-size: 20px !important;\r\n}\r\n\r\n.font-size-m {\r\n    font-size: 18px !important;\r\n}\r\n\r\n.font-size-ml{\r\n    font-size: 20px !important;\r\n}\r\n\r\n.font-size-l {\r\n    font-size: 40px !important;\r\n}\r\n\r\n.font-size-xl {\r\n    font-size: 40px !important;\r\n}\r\n\r\n.text-align-left {\r\n    text-align:left;\r\n}\r\n\r\n.text-align-center {\r\n    text-align:center;\r\n}\r\n\r\n.text-align-right {\r\n    text-align:right;\r\n}\r\n\r\n/*Common text styles*/\r\n\r\n.label {\r\n    font-family: var(--main-font);\r\n    color: var(--main-red);\r\n}\r\n\r\n.label-title {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 30px;\r\n    margin: 0px;\r\n    padding: 3px 0px 3px 0px;\r\n}\r\n\r\n.header {\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    font-size: 27px;\r\n    margin: 0px;\r\n    padding: 40px 0px 40px 0px;\r\n    text-align: center;\r\n}\r\n\r\n.description {\r\n    font-size: 16px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n}\r\n\r\n.location {\r\n    font-size: 20px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n    margin: 0px;\r\n}\r\n\r\n.page-title {\r\n    font-size: 70px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-white);\r\n    margin: 0px;\r\n    padding: 0px;\r\n    text-shadow: 0 0 5px black\r\n}\r\n\r\n.line {\r\n    width: 80%;\r\n    height: 1px;\r\n    background: grey;\r\n    margin: 0px;\r\n    text-align:center;\r\n}\r\n\r\n.main-container {\r\n    overflow: auto;\r\n    padding: 61px 0px 0px 0px;\r\n    left: 50%;\r\n}\r\n\r\n/*Displaying bands*/\r\n\r\n#band-img {\r\n    width: 380px;\r\n    height: auto;\r\n    border-radius: 3px;\r\n}\r\n\r\n#bands {\r\n    padding: 0px 0px 50px 0px\r\n}\r\n\r\n#band-info {\r\n    width: 380px;\r\n    height: auto;\r\n}\r\n\r\n/* .float-on-image {\r\n    left: 0;\r\n    position:absolute;\r\n    text-align:center;\r\n    top: 30%;\r\n    width: 100%;\r\n    color:white;\r\n} */\r\n\r\n.band-desc {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align:center;\r\n    width: 800px;\r\n}\r\n\r\n/*Formatting*/\r\n\r\n.flow-left {\r\n    float: left !important;\r\n}\r\n\r\n.flow-right {\r\n    float: right !important;\r\n}\r\n\r\n.flow-center {\r\n    float: center !important;\r\n}\r\n\r\n.vertical-center {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.center-x{\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n/*Padding*/\r\n\r\n.padding-left {\r\n    padding: 0px 0px 0px 7px;\r\n}\r\n\r\n.padding-right {\r\n    padding: 0px 10px 0px 0px;\r\n}\r\n\r\n.padding-up {\r\n    padding: 10px 0px 0px 0px;\r\n}\r\n\r\n.padding-down {\r\n    padding: 0px 0px 5px 0px;\r\n}\r\n\r\n.padding-left-l {\r\n    padding: 10px 0px 0px 23px;\r\n}\r\n\r\n.button{\r\n    padding: 15px 15px 15px 15px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    background-color: #e35953;\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition-duration: 0.4s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.button-main{\r\n    padding: 8px 50px 8px 50px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    background-color: var(--main-red);\r\n    font-size: 18px;\r\n    font-family: var(--main-font);\r\n    color: var(--main-black);\r\n\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition-duration: 0.4s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.button-main:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.3), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n    color:white;\r\n}\r\n\r\n.button:hover{\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDOztBQUV4QztJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1COztJQUVuQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEsc0RBQXNEOztBQUV0RCxtQ0FBbUM7O0FBQ25DO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsU0FBUztBQUNiOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFHQSxhQUFhOztBQUViO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQSxVQUFVOztBQUNWO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLDZFQUE2RTtJQUU3RSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0JBQXdCOztJQUV4Qiw2RUFBNkU7SUFFN0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtFQUErRTtJQUMvRSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrRUFBK0U7QUFDbkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFVuaXZlcnNhbCBTdHlsZXMgZm9yIEphbWJyZSBXZWJzaXRlICovXHJcblxyXG46Om5nLWRlZXAgOnJvb3Qge1xyXG4gICAgLS1tYWluLWJsYWNrOiAjMmEyOTI5O1xyXG4gICAgLS1tYWluLXJlZDogI2UzNTk1MztcclxuICAgIC0tbWFpbi15ZWxsb3c6ICNmMmMwNmY7XHJcbiAgICAtLW1haW4tZ3JlZW46ICNjM2QxOTA7XHJcbiAgICAtLW1haW4tbWF1dmU6ICNkOGJjYmM7XHJcbiAgICAtLW1haW4td2hpdGU6IHdoaXRlO1xyXG5cclxuICAgIC0tbWFpbi1mb250OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGh0bWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLUNsYXNzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qLS0tLS0tLS0tLS1Gb250IFN0eWxlcy0tLS0tLS0tLS0qL1xyXG4uZm9udC1zaXplLXhzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250LXNpemUtcyB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uZm9udC1zaXplLW0ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvbnQtc2l6ZS1tbHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250LXNpemUtbCB7XHJcbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG4uZm9udC1zaXplLXhsIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1hbGlnbi1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxufVxyXG4udGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnRleHQtYWxpZ24tcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLypDb21tb24gdGV4dCBzdHlsZXMqL1xyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tcmVkKTtcclxufVxyXG5cclxuLmxhYmVsLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmxhY2spO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMHB4IDQwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcbn1cclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJsYWNrKTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXdoaXRlKTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggYmxhY2tcclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDYxcHggMHB4IDBweCAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qRGlzcGxheWluZyBiYW5kcyovXHJcbiNiYW5kLWltZyB7XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiNiYW5kcyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDUwcHggMHB4XHJcbn1cclxuXHJcbiNiYW5kLWluZm8ge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKiAuZmxvYXQtb24taW1hZ2Uge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0gKi9cclxuXHJcbi5iYW5kLWRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuXHJcbi8qRm9ybWF0dGluZyovXHJcblxyXG4uZmxvdy1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsb3ctcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsb3ctY2VudGVyIHtcclxuICAgIGZsb2F0OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5jZW50ZXIteHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuLypQYWRkaW5nKi9cclxuLnBhZGRpbmctbGVmdCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA3cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXVwIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWRvd24ge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0LWwge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDIzcHg7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM1OTUzO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uLW1haW57XHJcbiAgICBwYWRkaW5nOiA4cHggNTBweCA4cHggNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1yZWQpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1ibGFjayk7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1tYWluOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");














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
                _createband_createband_component__WEBPACK_IMPORTED_MODULE_12__["CreatebandComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"]
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

module.exports = ".hero-image {\r\n  /* Use \"linear-gradient\" to add a darken background effect to the image (photographer.jpg)*/\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url('BannerPhoto.jpg');\r\n\r\n  /* Set a specific height */\r\n  height: 60%;\r\n\r\n  /* Position and center the image to scale nicely on all screens */\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n/* BAND BANNER*/\r\n\r\n.band-name{\r\n    position: relative;\r\n    top: 83%;\r\n    left: 3%;\r\n    color: var(--main-white);\r\n    font-size: 35pt;\r\n    text-overflow: clip;\r\n    text-shadow: 0 0 10px black;\r\n    font-family: var(--main-font);\r\n}\r\n\r\n.subtext{\r\n    position: inherit;\r\n    top: 83%;\r\n    left: 4%;\r\n    color: var(--main-white);\r\n    font-size: 15pt;\r\n    text-overflow: clip;\r\n    text-shadow: 0 0 10px black;\r\n    font-family: var(--main-font);\r\n}\r\n\r\n/*Band Information*/\r\n\r\n#band-information{\r\n    width: 100%;\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    margin-left: 0px 50px 0px 50px;\r\n}\r\n\r\n#left-column{\r\n    width:65%;\r\n    float: left;\r\n    padding-right:10px;\r\n    font-family: var(--main-font);\r\n}\r\n\r\n#left-information{\r\n    float:left;\r\n    width: 30%;\r\n    padding-right: 10px;\r\n}\r\n\r\n#left-information p{\r\n    padding-left: 15px;\r\n}\r\n\r\n#right-information{\r\n    float:left;\r\n    width: 70%;\r\n    padding-left: 10px;\r\n}\r\n\r\n#right-information p{\r\n    padding-left: 20px;\r\n}\r\n\r\n.header {\r\n    font-family: var(--main-font);\r\n    color: black;\r\n    font-size: 18pt;\r\n}\r\n\r\n/*player icons*/\r\n\r\n#right-column{\r\n    width:35%;\r\n    float: right;\r\n    padding-left:5px;\r\n    display:inline-block;\r\n}\r\n\r\n.profile-pic{\r\n    margin-top:20px;\r\n    width: 30%;\r\n    height:auto;\r\n    border-style: solid;\r\n    border-width: 5px;\r\n    border-color: lightGrey;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    display:block;\r\n}\r\n\r\n.label{\r\n    color:black;\r\n    font-family: var(--main-font);\r\n    position: relative;\r\n    left:50.5%;\r\n    display: block;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 10pt;\r\n    margin: 10px 0px 0px 0px;\r\n}\r\n\r\n/*Forum Styles*/\r\n\r\n.post {\r\n\twidth: 70%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n#box {\r\n    border: 1px solid grey;\r\n    padding: 10px 10px 10px 50px;\r\n    margin: 7px 16px 16px 20px;\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\n.user-icon {\r\n    width: 60px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n}\r\n\r\n.write-post-box {\r\n    border: 1px solid grey;\r\n    padding: 15px;\r\n    margin: 7px 16px 16px 20px;\r\n    border-radius: 5px;\r\n    width:95%;\r\n    height: 180px;\r\n    vertical-align: text-top;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuZHBhZ2UvYmFuZHBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJGQUEyRjtFQUMzRixpR0FBOEc7O0VBRTlHLDBCQUEwQjtFQUMxQixXQUFXOztFQUVYLGlFQUFpRTtFQUNqRSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFDZjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFFBQVE7SUFDUix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0FBQ2pDOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUdBLGVBQWU7O0FBQ2Y7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFDQSxlQUFlOztBQUNmO0NBQ0MsVUFBVTtJQUNQLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7SUFDYix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9iYW5kcGFnZS9iYW5kcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8taW1hZ2Uge1xyXG4gIC8qIFVzZSBcImxpbmVhci1ncmFkaWVudFwiIHRvIGFkZCBhIGRhcmtlbiBiYWNrZ3JvdW5kIGVmZmVjdCB0byB0aGUgaW1hZ2UgKHBob3RvZ3JhcGhlci5qcGcpKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjApLCByZ2JhKDAsIDAsIDAsIDAuOCkpLCB1cmwoXCIuLi8uLi9hc3NldHMvQmFubmVyUGhvdG8uanBnXCIpO1xyXG5cclxuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cclxuICBoZWlnaHQ6IDYwJTtcclxuXHJcbiAgLyogUG9zaXRpb24gYW5kIGNlbnRlciB0aGUgaW1hZ2UgdG8gc2NhbGUgbmljZWx5IG9uIGFsbCBzY3JlZW5zICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIEJBTkQgQkFOTkVSKi9cclxuLmJhbmQtbmFtZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogODMlO1xyXG4gICAgbGVmdDogMyU7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XHJcbiAgICBmb250LXNpemU6IDM1cHQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbn1cclxuXHJcbi5zdWJ0ZXh0e1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB0b3A6IDgzJTtcclxuICAgIGxlZnQ6IDQlO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG59XHJcblxyXG4vKkJhbmQgSW5mb3JtYXRpb24qL1xyXG4jYmFuZC1pbmZvcm1hdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCA1MHB4IDBweCA1MHB4O1xyXG59XHJcbiNsZWZ0LWNvbHVtbntcclxuICAgIHdpZHRoOjY1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbn1cclxuXHJcbiNsZWZ0LWluZm9ybWF0aW9ue1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiNsZWZ0LWluZm9ybWF0aW9uIHB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuI3JpZ2h0LWluZm9ybWF0aW9ue1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuI3JpZ2h0LWluZm9ybWF0aW9uIHB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThwdDtcclxufVxyXG5cclxuXHJcbi8qcGxheWVyIGljb25zKi9cclxuI3JpZ2h0LWNvbHVtbntcclxuICAgIHdpZHRoOjM1JTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnByb2ZpbGUtcGlje1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodEdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4ubGFiZWx7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDo1MC41JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG59XHJcbi8qRm9ydW0gU3R5bGVzKi9cclxuLnBvc3Qge1xyXG5cdHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuI2JveCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNTBweDtcclxuICAgIG1hcmdpbjogN3B4IDE2cHggMTZweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLndyaXRlLXBvc3QtYm94IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA3cHggMTZweCAxNnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDo5NSU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/bandpage/bandpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/bandpage/bandpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\r\n    <span class=\"band-name\">SAMMY MILLER AND THE CONGREGATION</span>\r\n    <span class=\"subtext\"> JOYFUL JAZZ—MUSIC THAT FEELS GOOD </span>\r\n</div>\r\n\r\n<div id=\"band-information\" class=\"height:auto\">\r\n    <div id=\"left-column\">\r\n        <h3>Description</h3>\r\n        <p class=\"description\" id=\"Description\">\r\n            A native of Los Angeles, Grammy® nominated drummer Sammy Miller has become known for his\r\n            relentless focus on making music that feels good as a drummer, singer, and bandleader.\r\n            Upon completing his Master’s at The Juilliard School, Sammy formed his ensemble, The\r\n            Congregation. As a band, they share the power of community through their music—joyful jazz.\r\n        </p>\r\n\r\n        <div id=\"left-information\">\r\n            <h4>LOCATION</h4>\r\n            <p class=\"description\">Brooklyn, NY</p>\r\n            <h4>LOOKING FOR</h4>\r\n            <p class=\"description\">Trumpet, Percussionist</p>\r\n            <h4>GENRES</h4>\r\n            <p class=\"description\">Jazz</p>\r\n        </div>\r\n        <div id=\"right-information\">\r\n            <h4>LEVEL</h4>\r\n            <p class=\"description\">Professional</p>\r\n            <h4>NEXT PERFORMANCE</h4>\r\n            <p class=\"description\">Toronto, CA - Sony Center 4/5/2019</p>\r\n        </div>\r\n        <br/>\r\n        <!-- <video width=\"320\" height=\"240\" controls>\r\n            <src=\"../../assets/chrisalon.mp4\">\r\n        </video> -->\r\n    </div>\r\n    <div id=\"right-column\">\r\n        <img class=\"profile-pic\" src=\"../../assets/defaultProfilePic.jpg\"/>\r\n        <p class=\"label\">\r\n            [name],[age]\r\n        </p>\r\n        <p class=\"label\">\r\n            [instrument]\r\n        </p>\r\n        <img class=\"profile-pic\" src=\"../../assets/defaultProfilePic.jpg\"/>\r\n        <p class=\"label\">\r\n            [name],[age]\r\n        </p>\r\n        <p class=\"label\">\r\n            [instrument]\r\n        </p>\r\n        <img class=\"profile-pic\" src=\"../../assets/defaultProfilePic.jpg\"/>\r\n        <p class=\"label\">\r\n            [name],[age]\r\n        </p>\r\n        <p class=\"label\">\r\n            [instrument]\r\n        </p>\r\n        <br/>\r\n        <br/>\r\n    </div>\r\n</div>\r\n\r\n<div style=\"overflow:auto; width:100%; height:2px; margin-top:30px\">\r\n    <div class=\"line center-x\">\r\n    </div>\r\n</div>\r\n\r\n\r\n<div id=\"band-discussion\">\r\n    <div class=\"header\" style=\"padding:40px 0px 10px 0px\">\r\n        <p>BAND DISCUSSION</p>\r\n    </div>\r\n\r\n    <div class=\"post\">\r\n        <img class=\"user-icon\"src=\"../../assets/profilepic.jpg\">\r\n        <br>\r\n        <div id=\"box\">\r\n            <p class=\"location\">Fiona Soetrisno</p>\r\n            <p class=\"decsription\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris,\r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n            <p>1/31/19 12:30</p>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"post\">\r\n        <img class=\"user-icon\"src=\"../../assets/profilepic.jpg\">\r\n        <br>\r\n        <div id=\"box\">\r\n            <p class=\"location\">Fiona Soetrisno</p>\r\n            <p class=\"decsription\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris,\r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n            <p>1/31/19 12:30</p>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"header\" style=\"padding:40px 0px 10px 0px\">\r\n        <p>WRITE A POST</p>\r\n    </div>\r\n\r\n    <div class=\"post\" >\r\n        <textarea class=\"write-post-box\"rows=\"8\" cols=\"50\" placeholder=\"Write a post!\"></textarea>\r\n        <input class=\"button-main\" style=\"margin:0px 0px 20px 20px\" type=\"submit\" value=\"Submit\">\r\n    </div>\r\n</div>\r\n"

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

module.exports = ".hero-image {\r\n  /* Use \"linear-gradient\" to add a darken background effect to the image (photographer.jpg)*/\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8)), url('BannerPhoto.jpg');\r\n\r\n  /* Set a specific height */\r\n  height: 60%;\r\n\r\n  /* Position and center the image to scale nicely on all screens */\r\n  background-position: top;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n#upload-banner-image{\r\n    position: relative;\r\n    top: 90%;\r\n    left: 85%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    background-color: lightGrey;\r\n    font: var(--main-font);\r\n    font-weight: bold;\r\n    color: rgb(100,100,100);\r\n    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\r\n    transition-duration: 0.4s;\r\n    margin-bottom: 15px;\r\n    font-size: 14pt;\r\n    border-width: 0;\r\n    border-radius: 7px;\r\n    padding: 10px;\r\n}\r\n#upload-banner-image:hover {\r\n    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.6), 0 8px 15px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n/*Band Information*/\r\n#band-information{\r\n    width: 100%;\r\n    padding-left: 140px;\r\n    padding-right: 100px;\r\n    margin-left: 0px 50px 0px 50px;\r\n}\r\n#band_description{\r\n    width:95%;\r\n    height:90px;\r\n    position: relative;\r\n}\r\n#left-information{\r\n    position: relative;\r\n    float: left;\r\n    width: 50%;\r\n}\r\n#right-information{\r\n    position: relative;\r\n    float: left;\r\n    width: 50%;\r\n    margin-bottom: 15px;\r\n}\r\n.input{\r\n    width: 90%;\r\n    height: 40px;\r\n    padding: 5px 5px 5px 5px;\r\n    margin: 5px 0px 5px 0px;\r\n\r\n}\r\n.header {\r\n    font-family: var(--main-font);\r\n    color: black;\r\n    font-size: 18pt;\r\n}\r\n/*player icons*/\r\n.profile-pic{\r\n    margin-top:20px;\r\n    width: 30%;\r\n    height:auto;\r\n    border-style: solid;\r\n    border-width: 5px;\r\n    border-color: lightGrey;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    display:block;\r\n}\r\n.label{\r\n    color:black;\r\n    font-family: var(--main-font);\r\n    position: relative;\r\n    left:50.5%;\r\n    display: block;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 10pt;\r\n    margin: 10px 0px 0px 0px;\r\n}\r\n.whitespace{\r\n    margin-bottom: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlYmFuZC9jcmVhdGViYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyRkFBMkY7RUFDM0YsaUdBQThHOztFQUU5RywwQkFBMEI7RUFDMUIsV0FBVzs7RUFFWCxpRUFBaUU7RUFDakUsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qiw0RUFBNEU7SUFFNUUseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw2RUFBNkU7QUFDakY7QUFFQSxtQkFBbUI7QUFFbkI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix1QkFBdUI7O0FBRTNCO0FBR0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFHQSxlQUFlO0FBRWY7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGViYW5kL2NyZWF0ZWJhbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLWltYWdlIHtcclxuICAvKiBVc2UgXCJsaW5lYXItZ3JhZGllbnRcIiB0byBhZGQgYSBkYXJrZW4gYmFja2dyb3VuZCBlZmZlY3QgdG8gdGhlIGltYWdlIChwaG90b2dyYXBoZXIuanBnKSovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4wKSwgcmdiYSgwLCAwLCAwLCAwLjgpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL0Jhbm5lclBob3RvLmpwZ1wiKTtcclxuXHJcbiAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiA2MCU7XHJcblxyXG4gIC8qIFBvc2l0aW9uIGFuZCBjZW50ZXIgdGhlIGltYWdlIHRvIHNjYWxlIG5pY2VseSBvbiBhbGwgc2NyZWVucyAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiN1cGxvYWQtYmFubmVyLWltYWdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA5MCU7XHJcbiAgICBsZWZ0OiA4NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodEdyZXk7XHJcbiAgICBmb250OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDEwMCwxMDAsMTAwKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuI3VwbG9hZC1iYW5uZXItaW1hZ2U6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC42KSwgMCA4cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi8qQmFuZCBJbmZvcm1hdGlvbiovXHJcblxyXG4jYmFuZC1pbmZvcm1hdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCA1MHB4IDBweCA1MHB4O1xyXG59XHJcblxyXG4jYmFuZF9kZXNjcmlwdGlvbntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIGhlaWdodDo5MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGVmdC1pbmZvcm1hdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI3JpZ2h0LWluZm9ybWF0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmlucHV0e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHQ7XHJcbn1cclxuXHJcblxyXG4vKnBsYXllciBpY29ucyovXHJcblxyXG4ucHJvZmlsZS1waWN7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0R3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbi5sYWJlbHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OjUwLjUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi53aGl0ZXNwYWNle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/createband/createband.component.html":
/*!******************************************************!*\
  !*** ./src/app/createband/createband.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\r\n    <button id=\"upload-banner-image\">Upload Banner Image</button>\r\n</div>\r\n\r\n<div id=\"band-information\" class=\"height:auto\">\r\n    <div id=\"left-information\">\r\n        <h4>BAND NAME</h4>\r\n        <input id=\"bandName_field\" class=\"input\" name=\"band\" type=\"text\" placeholder=\"What is the name of your band?\">\r\n    </div>\r\n    <div id=\"right-information\">\r\n        <h4>LOCATION</h4>\r\n        <input id=\"bandLocation_field\" class=\"input\" name=\"location\" type=\"text\" placeholder=\"Where is your band based?\">\r\n    </div>\r\n    <h4>DESCRIPTION</h4>\r\n    <textarea id=\"band_description\" placeholder=\"Write a description of your band\"></textarea>\r\n\r\n    <div id=\"left-information\" class=\"whitespace\">\r\n        <h4>LOOKING FOR</h4>\r\n        <input id=\"band_looking_for_instruments\" class=\"input\" name=\"looking for\" type=\"text\" placeholder=\"Which instruments are you looking for?\">\r\n        <h4>GENRES</h4>\r\n        <input id=\"bandGenres_field\" class=\"input\" name=\"genres\" type=\"text\" placeholder=\"Which genre of music do you play?\">\r\n    </div>\r\n    <div id=\"right-information\">\r\n        <h4>LEVEL</h4>\r\n        <select class=\"input\" name=\"Playing preferences\" id=\"bandLevel_field\">\r\n            <option value=\"default\">Choose your playing preference</option>\r\n            <option value=\"Learner\">Learner</option>\r\n            <option value=\"Casual\">Casual</option>\r\n            <option value=\"Amateur\">Amateur</option>\r\n            <option value=\"Professional\">Professional</option>\r\n        </select>\r\n        <h4>NEXT PERFORMANCE</h4>\r\n        <input id=\"next_performance_field\" class=\"input\" name=\"next performance\" type=\"text\" placeholder=\"When and where is your next gig?\">\r\n    </div>\r\n</div>\r\n"

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

module.exports = "#background-image {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n#img-container {\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n#page-main-text {\r\n    position: absolute;\r\n    top:45%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    vertical-align:sub;\r\n    padding: 20px;\r\n}\r\n\r\n.page-descr {\r\n    padding: 100px 0px 0px 30px !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZGJhbmRzL2ZpbmRiYW5kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9maW5kYmFuZHMvZmluZGJhbmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbiNpbWctY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3BhZ2UtbWFpbi10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo0NSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOnN1YjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWRlc2NyIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDBweCAwcHggMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/findbands/findbands.component.html":
/*!****************************************************!*\
  !*** ./src/app/findbands/findbands.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\r\n\r\n<div style=\"margin:65px 0px 0px 0px;\">\r\n  <!--Header image-->\r\n  <div id=\"img-container\">\r\n    <img style=\"position:relative\" id=\"background-image\" src = \"../../assets/findJamsHeader.jpg\">\r\n    <div class=\"float-on-image\">\r\n      <div id=\"page-main-text\">\r\n        <p class=\"page-title\"> FIND JAMS </p>\r\n        <p class=\"page-descr font-size-ml page-title flow-left\" style=\"position:absolute;z-index:2;top: 0;left: 0;\"> Find your fit. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Current Jam Content-->\r\n  <div data-aos=\"fade-up\">\r\n    <p class=\"header\"> CURRENT JAM SESSIONS </p>\r\n  </div>\r\n  <div data-aos=\"fade-up\" id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"overflow:auto; width:800px; height:2px\">\r\n    <div class=\"line center-x\">\r\n    </div>\r\n  </div>\r\n\r\n  <div data-aos=\"fade-up\">\r\n    <p class=\"header\"> SUGGESTED BANDS </p>\r\n  </div>\r\n  \r\n  <!--Suggested Bands-->\r\n\r\n  <div data-aos=\"fade-up\" id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div data-aos=\"fade-up\" id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div data-aos=\"fade-up\" id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div data-aos=\"fade-up\" id = \"bands\" style=\"overflow:auto\">\r\n    <div class=\"band-desc\">\r\n      <img id=\"band-img\" class=\"flow-left\" src= \"../../assets/band.jpg\">\r\n      <div id=\"band-info\" class=\"flow-right\">\r\n        <p id=\"band-name\"class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n        <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n        <p id=\"band-needed-instr\"class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n        <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris, \r\n                            ei malis indoctum intellegam nam. wahoo\r\n                            Erant qualisque an nec. No pri nullam ver\r\n                            prodesset, cum et nostrum oportere. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n</div>\r\n"

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
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "../node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ "../node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);




var FindbandsComponent = /** @class */ (function () {
    function FindbandsComponent() {
    }
    FindbandsComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
    };
    FindbandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-findbands',
            template: __webpack_require__(/*! ./findbands.component.html */ "./src/app/findbands/findbands.component.html"),
            styles: [__webpack_require__(/*! ./findbands.component.css */ "./src/app/findbands/findbands.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        })
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

module.exports = ".background {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.main-div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    width: 70%;\r\n}\r\n\r\n#header{\r\n    /*border-style: solid;\r\n    border-width: 10px;\r\n    border-color: red;*/\r\n    background-color: #2a2929;\r\n    width: 100%;\r\n    height: 100px;\r\n    position: relative;\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 210px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n#loginButton {\r\n    margin-top: 15px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    margin-bottom: 15px;\r\n    background-color: #e35953;\r\n    position: relative;\r\n    left: 50%;\r\n    width: 20%;\r\n    height: 50px;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Safari */\r\n    transition-duration: 0.4s;\r\n}\r\n\r\n#loginButton:hover{\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n#createAccount {\r\n    width: 100%;\r\n}\r\n\r\n#createAccount a {\r\n    color: white;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#createAccount a:hover {\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:active {\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#createAccount a:visited {\r\n    color: lightBlue;\r\n}\r\n\r\n.bandbase{\r\n    position: absolute;\r\n    top:19%;\r\n    left:50.5%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    height: 100px;\r\n    width: auto;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRDQUF5RDtJQUN6RCx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTs7dUJBRW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsNkVBQTZFLEVBQzFDLFdBQVc7SUFDOUMseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksK0VBQStFO0FBQ25GOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLHNDQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQ0JDQkM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubWFpbi1kaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbiNoZWFkZXJ7XHJcbiAgICAvKmJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMjkyOTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4jbG9naW5CdXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzU5NTM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcbiNsb2dpbkJ1dHRvbjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbiNjcmVhdGVBY2NvdW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY3JlYXRlQWNjb3VudCBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxufVxyXG5cclxuI2NyZWF0ZUFjY291bnQgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogbGlnaHRHcmV5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiNjcmVhdGVBY2NvdW50IGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiBsaWdodEJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI2NyZWF0ZUFjY291bnQgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBsaWdodEJsdWU7XHJcbn1cclxuXHJcbi5iYW5kYmFzZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoxOSU7XHJcbiAgICBsZWZ0OjUwLjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div class=\"\">\r\n\r\n    </div>\r\n    <img class=\"bandbase\" src=\"../../assets/BandBaseAlt1.png\" alt=\"BandBase logo\">\r\n    <br />\r\n    <div id=\"login_div\" class=\"main-div\">\r\n        <input type=\"email\" class=\"input\" placeholder=\"Username\" id=\"email_field\"><br />\r\n        <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password_field\">\r\n        <img style=\"width: 25px; height: 25px; top: 80%; left: 80%\" src=\"../../assets/ShowPassword.png\" alt=\"Show Password\">\r\n        <br />\r\n\r\n        <button id=\"loginButton\" onclick=\"login()\">Login</button>\r\n\r\n        <div id=\"createAccount\">\r\n            <a routerLink=\"/register\">Need an account? Sign up here!</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<script src=\"https://www.gstatic.com/firebasejs/5.8.2/firebase.js\"></script>\r\n"

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

module.exports = "/*----------Links---------*/\r\n:root {\r\n    --main-black: #2a2929;\r\n    --main-red: #e35953;\r\n    --main-yellow: #f2c06f;\r\n    --main-green: #c3d190;\r\n    --main-mauve: #d8bcbc;\r\n    --main-white: white;\r\n\r\n    --main-font: 'Source Sans Pro', sans-serif;\r\n}\r\na {\r\n    color: var(--main-red) !important;\r\n    font-family: var(--main-font);\r\n    text-decoration: none;\r\n    transition: color 0.3s;\r\n    font-size: 16px;\r\n}\r\na:hover {\r\n    color: var(--main-mauve) !important;\r\n}\r\n/* ---------------------Navbar--------------------- */\r\n#nav-bar {\r\n    background-color: #333;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 5;\r\n}\r\n#links {\r\n    /* text-align: center;\r\n    width: 100%;\r\n    height: 100%; */\r\n    height: auto;\r\n    width: auto;\r\n}\r\n.navbar-inverse .navbar-nav>li {\r\n    color: #e35953;\r\n}\r\n.navbar-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 15px;\r\n}\r\n.dropdown-menu {\r\n  padding-top: 20px;\r\n  padding-bottom: 15px;\r\n}\r\n.btn-default {\r\n    padding-top: 20px;\r\n    padding-bottom: 15px;\r\n    color: #222;\r\n}\r\n.open > .dropdown-toggle.btn-default {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: #ffffff;\r\n    border-width: 0px\r\n}\r\n.btn {\r\n    display: inline-block;\r\n    padding: 0px 0px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1.42857143;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: none;\r\n    border-radius: none;\r\n    background-color: #222;\r\n}\r\n.btn-default:hover {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: var(--main-red);\r\n    border-width: 0px;\r\n}\r\n.btn-default:active {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: var(--main-red);\r\n    border-width: 0px;\r\n}\r\n.btn-default:focus {\r\n    color: #333;\r\n    background-color: #222;\r\n    border-color: #8c8c8c;\r\n}\r\n.user-icon {\r\n    width: 45px;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\n.user-icon-small {\r\n    width: 25px;\r\n    height: auto;\r\n    border-radius: 25%;\r\n    margin: 10px 20px 10px 15px;\r\n\r\n}\r\n/* li {\r\n    display: inline;\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    vertical-align: middle;\r\n    margin: 0px;\r\n    height: 62.4px;\r\n    padding: 0px;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1COztJQUVuQiwwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFJQSxxREFBcUQ7QUFDckQ7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0lBQ04sVUFBVTtBQUNkO0FBRUE7SUFDSTs7bUJBRWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckI7QUFDSjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFFdEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6QjtBQUlBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCOztBQUUvQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCOztBQUUvQjtBQUdBOzs7Ozs7Ozs7O0dBVUciLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS1MaW5rcy0tLS0tLS0tLSovXHJcbjpyb290IHtcclxuICAgIC0tbWFpbi1ibGFjazogIzJhMjkyOTtcclxuICAgIC0tbWFpbi1yZWQ6ICNlMzU5NTM7XHJcbiAgICAtLW1haW4teWVsbG93OiAjZjJjMDZmO1xyXG4gICAgLS1tYWluLWdyZWVuOiAjYzNkMTkwO1xyXG4gICAgLS1tYWluLW1hdXZlOiAjZDhiY2JjO1xyXG4gICAgLS1tYWluLXdoaXRlOiB3aGl0ZTtcclxuXHJcbiAgICAtLW1haW4tZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tcmVkKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLW1hdXZlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLU5hdmJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4jbmF2LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4jbGlua3Mge1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2PmxpIHtcclxuICAgIGNvbG9yOiAjZTM1OTUzO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJ0bi1kZWZhdWx0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuLm9wZW4gPiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci13aWR0aDogMHB4XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLXJlZCk7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG5cclxuLmJ0bi1kZWZhdWx0OmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tcmVkKTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGM4YzhjO1xyXG59XHJcblxyXG4gIFxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMTVweDtcclxuXHJcbn1cclxuXHJcbi51c2VyLWljb24tc21hbGwge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDE1cHg7XHJcblxyXG59XHJcblxyXG5cclxuLyogbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxudWwge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgaGVpZ2h0OiA2Mi40cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\r\n\r\n<!-- <div id=\"nav-bar\">\r\n    <ul>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-left\">FIND JAMS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">MY BANDS</a></li>\r\n        <li><a routerLink='/'class=\"label font-size-m nav-label flow-left\">ABOUT</a></li>\r\n\r\n        <li><img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\"></li>\r\n        <li><a routerLink='/' class=\"label font-size-m nav-label flow-right\">FIONA</a></li>\r\n    </ul>\r\n</div> -->\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-nav-demo\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-nav-demo\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><img src=\"../../assets/bandbaselogofinal.png\" alt=\"Bandbase Logo\" width=\"auto\" height=\"60px\" style=\"margin-top:5px\"></li>\r\n                <li><a routerLink='/findbands' class=\"nav-label\">FIND JAMS</a></li>\r\n                <li><a routerLink='/createband' class=\"nav-label\">CREATE A BAND</a></li>\r\n                <li><a routerLink='/findbands' class=\"nav-label\">ABOUT</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"#\"><span style=\"font-size:1.5em;\" class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"></span> <span class=\"badge\">3</span></a></li>\r\n                <li>\r\n                    <div class=\"dropdown\">\r\n                        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                            <img class=\"user-icon flow-right\" src=\"../../assets/profilepic.jpg\">\r\n                            <!-- Dropdown -->\r\n                        </button>\r\n                        <ul class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu1\">\r\n                            <li><a routerLink=\"/profile\">Profile</a></li>\r\n                            <li><a href=\"#\">Messages</a></li>\r\n                            <li role=\"separator\" class=\"divider\"></li>\r\n                            <li><a href=\"#\">Settings</a></li>\r\n                            <li><a href=\"/login\" onclick='logout()'>Log Out</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <!-- <li><a style=\"padding:20px 15px 15px\"class=\"user-name\" routerLink='/'>FIONA</a></li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- <script src=\"https://code.jquery.com/jquery-3.3.1.js\" integrity=\"sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script> -->\r\n"

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

module.exports = ".user-icon {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n\r\n.profile-pic {\r\n    width: 320px;\r\n    padding: 30px;\r\n    border-radius: 5px;\r\n    border-style: solid;\r\n    border-color: red;\r\n}\r\n\r\n#info {\r\n    padding: 0px 10px 10px 30px;\r\n}\r\n\r\n#left-column {\r\n    margin: 0px;\r\n}\r\n\r\n#right-column {\r\n    padding: 14px 30px 30px 30px;\r\n}\r\n\r\n#main-container {\r\n    overflow: auto;\r\n    padding: 61px 0px 0px 0px;\r\n    left: 50%;\r\n}\r\n\r\n#bands{\r\n    margin-bottom: 150px;\r\n}\r\n\r\n.profile-name {\r\n    font-size: 40px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaWNvbiB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuXHJcbn1cclxuXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDMwcHg7XHJcbn1cclxuXHJcbiNsZWZ0LWNvbHVtbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuI3JpZ2h0LWNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDMwcHggMzBweCAzMHB4O1xyXG59XHJcblxyXG4jbWFpbi1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA2MXB4IDBweCAwcHggMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4jYmFuZHN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">-->\r\n\r\n<div id=\"main-container\">\r\n  <div id=\"left-column\" class=\"flow-left\" style=\"display:inline-block\">\r\n    <img class=\"profile-pic flow-left\" style=\"border-radius:5px\" src=\"../../assets/profilepic.jpg\">\r\n    <div id=\"info\">\r\n      <p class=\"label-title font-size-m\"></p>\r\n      <p id=\"profile-email\" class=\"description\"></p>\r\n    </div>\r\n\r\n  <div id=\"right-column\" style=\"display:inline-block;width:600px\">\r\n    <p id=\"profile-name\" class=\"profile-name\"></p>\r\n    <p id=\"profile-location\" class=\"location\">San Luis Obispo, CA</p>\r\n    <br>\r\n\r\n    <p id=\"profile-description\" class=\"description\">  </p>\r\n    <p class=\"label-title font-size-m\">INSTRUMENTS</p>\r\n    <p id=\"profile-instruments\" class=\"description\"></p>\r\n    <p class=\"label-title font-size-m\">GENRES</p>\r\n    <p id=\"profile-genres\" class=\"description\"></p>\r\n    <p class=\"label-title font-size-m\">PREFERENCES</p>\r\n    <p id=\"profile-preferences\" class=\"description\"></p>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"overflow:auto; width:80%; height:2px;\">\r\n    <div class=\"line center-x\">\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <p class=\"header\">FIONA'S BANDS</p>\r\n</div>\r\n\r\n<!--Suggested Bands-->\r\n\r\n<div id=\"bands\" style=\"overflow:auto margin-bottom\" >\r\n    <div class=\"band-desc center-x\" style=\"display:inline-block;\">\r\n        <img id=\"band-img\" class=\"flow-left\" src=\"../../assets/band.jpg\" style=\"margin-bottom:70px\">\r\n        <div id=\"band-info\" class=\"flow-right\">\r\n            <p id=\"band-name\" class=\"flow-left label-title text-align-left\">THE CONSOULS</p>\r\n            <p id=\"band-location\" class=\"flow-left location text-align-left\">Located in Cal Poly, San Luis Obispo</p>\r\n            <p id=\"band-needed-instr\" class=\"flow-left location text-align-left\">Looking for: Violin, Piano</p>\r\n            <p id=\"band-description\" class=\"flow-left description text-align-left padding-up padding-left-l\">Lorem ipsum dolor sit amet, hello there no has exerci mandamus interpretaris,\r\n                ei malis indoctum intellegam nam. wahoo\r\n                Erant qualisque an nec. No pri nullam ver\r\n                prodesset, cum et nostrum oportere. </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <a href=\"#\" class=\"thumbnail\">\r\n        <img src=\"profilepic.jpg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h1>EDDIE AUNG</h1>\r\n      <h5>San Luis Obispo, CA</h5>\r\n      <br>\r\n      <br>\r\n      <div class=\"profile-description\">\r\n        Bacon ipsum dolor amet bacon flank picanha pork chop spare ribs alcatra pastrami pancetta prosciutto sausage chuck frankfurter. Andouille short loin doner, flank fatback capicola shank kevin pork chop pork loin brisket turducken. Chicken beef meatloaf picanha, buffalo ribeye pork chop sausage alcatra tenderloin boudin brisket filet mignon frankfurter. Shoulder ground round biltong, kielbasa drumstick beef ribs turducken.\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div id=\"\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <a href=\"#\" class=\"thumbnail\">\r\n        <img src=\"profilepic.jpg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <h1>EDDIE AUNG</h1>\r\n      <h5>San Luis Obispo, CA</h5>\r\n      <br>\r\n      <br>\r\n      <div class=\"profile-description\">\r\n        Bacon ipsum dolor amet bacon flank picanha pork chop spare ribs alcatra pastrami pancetta prosciutto sausage chuck frankfurter. Andouille short loin doner, flank fatback capicola shank kevin pork chop pork loin brisket turducken. Chicken beef meatloaf picanha, buffalo ribeye pork chop sausage alcatra tenderloin boudin brisket filet mignon frankfurter. Shoulder ground round biltong, kielbasa drumstick beef ribs turducken.\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n"

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

module.exports = "\r\n\r\n\r\n.background {\r\n    width: 100%;\r\n    min-height: 100%;\r\n    background-color: #BCBCBC;\r\n    background-image: url('loginBackground.jpg');\r\n    background-position: top;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n#container {\r\n    display: block;\r\n    position:relative;\r\n    width: 40%;\r\n    left: 50%;\r\n    top: 28%;\r\n    min-height: 100%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n\r\n    background-color: red);\r\n}\r\n\r\n#createButton {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-radius: 3px;\r\n    border-width: 0px;\r\n    background-color: #e35953;\r\n    width: 40%;\r\n    height: auto;\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    font-size: 20px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: bold;\r\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transition-duration: 0.4s;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n#createButton:hover {\r\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.6), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 300px;\r\n    border-right: 10px solid #e35953;\r\n    border-top: 0px solid white;\r\n    border-left: 0px solid white;\r\n    border-bottom: 0px solid white;\r\n    margin-bottom: 25px;\r\n    margin-top: 0px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n\r\n}\r\n\r\n.bio{\r\n    position: relative;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    padding: 15px;\r\n    width: 300px;\r\n    margin-bottom: 16px;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.bandbase {\r\n    position: relative;\r\n    top: 15%;\r\n    left: 50.5%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n    height: 100px;\r\n    width: auto;\r\n    display: block;\r\n}\r\n\r\n#back {\r\n    width: 100%;\r\n    margin-bottom: 175px;\r\n}\r\n\r\n#back a {\r\n    color: lightGrey;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0%);\r\n            transform: translate(-50%, 0%);\r\n}\r\n\r\n#back a:hover {\r\n    color: lightGrey;\r\n    text-decoration: underline;\r\n}\r\n\r\n#back a:active {\r\n    color: lightBlue;\r\n    text-decoration: underline;\r\n}\r\n\r\n#back a:visited {\r\n    color: lightBlue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLDRDQUF5RDtJQUN6RCx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixzQ0FBOEI7WUFBOUIsOEJBQThCOztJQUU5QixzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLDZFQUE2RTtJQUU3RSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUlBO0lBQ0ksK0VBQStFO0FBQ25GOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0NBQXdDOztBQUU1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQ0JDQkM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDI4JTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkKTtcclxufVxyXG5cclxuXHJcbiNjcmVhdGVCdXR0b24ge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzNTk1MztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuI2NyZWF0ZUJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC42KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG5cclxuLmlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI2UzNTk1MztcclxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuXHJcbn1cclxuXHJcbi5iaW97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi5iYW5kYmFzZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIGxlZnQ6IDUwLjUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4jYmFjayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3NXB4O1xyXG59XHJcblxyXG4jYmFjayBhIHtcclxuICAgIGNvbG9yOiBsaWdodEdyZXk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbn1cclxuXHJcbiNiYWNrIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGxpZ2h0R3JleTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4jYmFjayBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogbGlnaHRCbHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbiNiYWNrIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogbGlnaHRCbHVlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"background\">\r\n    <div id=\"header\">\r\n\r\n        <div id=\"login_div\">\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n\r\n            <img class=\"bandbase\" src=\"../../assets/BandBaseAlt1.png\" alt=\"BandBase Logo\">\r\n            <div id=\"container\">\r\n                <div>\r\n                    <hr />\r\n                    <input type=\"name\" class=\"input\" maxlength=\"30\" placeholder=\"First Name\" id=\"firstname_field\"><br />\r\n                    <input type=\"name\" class=\"input\" maxlength=\"30\" placeholder=\"Last Name\" id=\"lastname_field\"><br />\r\n                    <input type=\"email\" class=\"input\" maxlength=\"30\" placeholder=\"Email\" id=\"email_field\"><br />\r\n                    <input type=\"password\" class=\"input\" maxlength=\"30\" placeholder=\"Password\" id=\"password_field\"><br />\r\n                    <input type=\"password\" class=\"input\" maxlength=\"30\" placeholder=\"Re-type password\" id=\"password_conf_field\"><br />\r\n                    <hr />\r\n                    <input type=\"instruments\" class=\"input\" max=\"200\" type=\"text\" placeholder=\"What instruments do you play?\" id=\"instruments_field\"><br />\r\n                    <input type=\"genres\" class=\"input\" max=\"200\" type=\"text\" placeholder=\"Which genres of music do you play?\" id=\"genres_field\"><br />\r\n                    <select class=\"input\" name=\"Playing preferences\" id=\"playing_pref_field\">\r\n                        <option value=\"default\">Choose your playing preference</option>\r\n                        <option value=\"Learner\">Learner</option>\r\n                        <option value=\"Casual\">Casual</option>\r\n                        <option value=\"Amateur\">Amateur</option>\r\n                        <option value=\"Professional\">Professional</option>\r\n                    </select>\r\n\r\n                    <textarea class=\"bio\" name=\"bio\" rows=\"8\" cols=\"50\" placeholder=\"Write a short bio about your experience as a musician.\" id=\"bio_field\"></textarea>\r\n                    <hr />\r\n                    <button id=\"createButton\" onclick=\"create()\"> Create Account </button>\r\n                    <div id=\"back\">\r\n                        <a href=\"LOGIN PAGE URL\">Back to Login page</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <br/>\r\n            <br/>\r\n\r\n        </div>\r\n\r\n<div id=\"user_div\" class=\"loggedin-div\">\r\n    <h3 style=\"margin-top:0px;\">Welcome User</h3>\r\n    <p id=\"user_para\">Welcome to Firebase. You're currently logged in.</p>\r\n    <button onclick=\"logout()\">Logout</button>\r\n  </div>\r\n\r\n<script src=\"https://www.gstatic.com/firebasejs/5.8.2/firebase.js\"></script>\r\n"

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