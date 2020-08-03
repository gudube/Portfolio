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

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 2, vars: 0, template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-me works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _photography_photography_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photography/photography.component */ "./src/app/photography/photography.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _title_page_title_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-page/title-page.component */ "./src/app/title-page/title-page.component.ts");







const routes = [
    { path: '', component: _title_page_title_page_component__WEBPACK_IMPORTED_MODULE_4__["TitlePageComponent"] },
    { path: 'about-me', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"] },
    { path: 'photography', component: _photography_photography_component__WEBPACK_IMPORTED_MODULE_2__["PhotographyComponent"] }
    //add error path which would be path: '**'
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
        this.title = 'Guilhem Dubois\'s portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [[1, "footnotes"], ["href", "mailto: GuilhemDubois.mail@gmail.com", "target", "_blank", 2, "margin-right", "auto"], [1, "icons-container"], ["href", "https://www.instagram.com/guilhem.dubois/", "target", "_blank"], ["src", "assets/icons/insta_white_64.png"], ["href", "https://www.linkedin.com/in/guilhem-dubois-mtl", "target", "_blank"], ["src", "assets/icons/li_white_64.png"], ["href", "https://github.com/gudube", "target", "_blank"], ["src", "assets/icons/github_white_64.png"], ["href", "https://www.facebook.com/GuilhemDuboisMtl/", "target", "_blank"], ["src", "assets/icons/fb_white_64.png"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GuilhemDubois.mail@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".footnotes[_ngcontent-%COMP%] {\n  height: auto;\n  padding-right: 20px;\n  padding-left: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.footnotes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  height: 36px;\n}\n\n.footnotes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n}\n\n.footnotes[_ngcontent-%COMP%]   .icons-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0FBQUY7O0FBSUE7RUFDRSxZQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdG5vdGVzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290bm90ZXMgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5mb290bm90ZXMgYSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC8vaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdG5vdGVzIC5pY29ucy1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/menu-item/menu-item.component.ts");
/* harmony import */ var _photography_photography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photography/photography.component */ "./src/app/photography/photography.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _title_page_title_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./title-page/title-page.component */ "./src/app/title-page/title-page.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemComponent"],
        _photography_photography_component__WEBPACK_IMPORTED_MODULE_6__["PhotographyComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
        _title_page_title_page_component__WEBPACK_IMPORTED_MODULE_8__["TitlePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                    _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemComponent"],
                    _photography_photography_component__WEBPACK_IMPORTED_MODULE_6__["PhotographyComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
                    _title_page_title_page_component__WEBPACK_IMPORTED_MODULE_8__["TitlePageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/menu-item/menu-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menu-item/menu-item.component.ts ***!
  \**************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MenuItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(); };
MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItemComponent, selectors: [["app-menu-item"]], inputs: { imgSrc: "imgSrc", title: "title", route: "route" }, decls: 4, vars: 3, consts: [[1, "image-container", 3, "routerLink"], [1, "title"], [1, "menu-image", 3, "src"]], template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.route);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".menu-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 100%;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n\n.image-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  box-shadow: inset 15px 15px 100px 0 black;\n  opacity: 0.7;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.image-container[_ngcontent-%COMP%]:hover:after {\n  opacity: 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  z-index: 2;\n  margin: 0;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: grey;\n  transition: color 0.1s ease-in-out;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBUUEsaUJBQUE7RUFDQSw4QkFBQTtBQVJGOztBQVdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUkY7O0FBWUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQWEsWUFBQTtFQUNiLE9BQUE7RUFBUyxNQUFBO0VBR1QseUNBQUE7RUFDQSxZQUFBO0VBRUEsb0NBQUE7QUFQRjs7QUFXQTtFQUNFLFVBQUE7QUFSRjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBR0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLFlBQUE7QUFYRiIsImZpbGUiOiJzcmMvYXBwL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gdG9kbzogY2VudGVyXHJcbi5tZW51LWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy9tYXgtd2lkdGg6IDEwMCU7XHJcbiAgLy9taW4taGVpZ2h0OiAxMDAlO1xyXG4gIC8vbWFyZ2luOjA7XHJcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy9sZWZ0OiAwO1xyXG4gIC8vdG9wOiA1MCU7XHJcbiAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy9BZGRzIGEgc2hhZG93IG92ZXIgdGhlIGltYWdlXHJcbi5pbWFnZS1jb250YWluZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDsgdG9wOiAwO1xyXG4gIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMTVweCAxNXB4IDEwMHB4IDAgYmxhY2s7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxNXB4IDE1cHggMTAwcHggMCBibGFjaztcclxuICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDE1cHggMTVweCAxMDBweCAwIGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8vUmVtb3ZlcyB0aGUgc2hhZG93IHdoZW4gaG92ZXJpbmcgb3ZlciBpdGVtXHJcbi5pbWFnZS1jb250YWluZXI6aG92ZXI6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi8vVGl0bGUgb24gdG9wIG9mIHRoZSBpdGVtLCBjZW50ZXJlZFxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTB2aDtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiBncmV5O1xyXG5cclxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLy9DaGFuZ2VzIGNvbG9yIG9mIHRpdGxlIHdoZW4gaG92ZXJpbmcgaXRlbVxyXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC50aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-item',
                templateUrl: './menu-item.component.html',
                styleUrls: ['./menu-item.component.scss']
            }]
    }], function () { return []; }, { imgSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], route: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "menu-container"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".menu-container[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: black;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/photography/photography.component.ts":
/*!******************************************************!*\
  !*** ./src/app/photography/photography.component.ts ***!
  \******************************************************/
/*! exports provided: PhotographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotographyComponent", function() { return PhotographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-item/menu-item.component */ "./src/app/menu-item/menu-item.component.ts");





class PhotographyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhotographyComponent.ɵfac = function PhotographyComponent_Factory(t) { return new (t || PhotographyComponent)(); };
PhotographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotographyComponent, selectors: [["app-photography"]], decls: 9, vars: 0, consts: [["routerLink", "", 1, "back"], ["imgSrc", "assets/photography/slovenia-menu.jpg", "title", "Slovenia"], ["imgSrc", "assets/photography/russia-menu.jpg", "title", "Russia"], ["imgSrc", "assets/photography/italia-menu.jpg", "title", "Italia"], ["imgSrc", "assets/photography/lapland-menu.jpg", "title", "Lapland"], ["imgSrc", "assets/photography/tallinn-menu.jpg", "title", "Tallinn"]], template: function PhotographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2190 back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-menu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-menu-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-menu-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-menu-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemComponent"]], styles: [".back[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  cursor: pointer;\n  padding: 10px;\n  background-color: black;\n  box-shadow: 0 0 5px 0 white;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9ncmFwaHkvcGhvdG9ncmFwaHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGhvdG9ncmFwaHkvcGhvdG9ncmFwaHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDM7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCB3aGl0ZTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photography',
                templateUrl: './photography.component.html',
                styleUrls: ['./photography.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/title-page/title-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/title-page/title-page.component.ts ***!
  \****************************************************/
/*! exports provided: TitlePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePageComponent", function() { return TitlePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-item/menu-item.component */ "./src/app/menu-item/menu-item.component.ts");




class TitlePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TitlePageComponent.ɵfac = function TitlePageComponent_Factory(t) { return new (t || TitlePageComponent)(); };
TitlePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitlePageComponent, selectors: [["app-title-page"]], decls: 9, vars: 0, consts: [[1, "header"], ["imgSrc", "assets/menu-items/about-me.jpg", "title", "About Me", "route", "about-me"], ["imgSrc", "assets/menu-items/sheet-music-organizer.jpg", "title", "Personal Projects", "route", "projects"], ["imgSrc", "assets/menu-items/photography.jpg", "title", "Photography", "route", "photography"]], template: function TitlePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guilhem Dubois");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-menu-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-menu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-menu-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuItemComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 20vh;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  font-size: min(9.5vh, 13vw);\n}\n\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 9.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUtcGFnZS90aXRsZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC90aXRsZS1wYWdlL3RpdGxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy5tZW51LWNvbnRhaW5lciB7XHJcbi8vICBtYXJnaW46IDA7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuLy8gIGhlaWdodDogYXV0bztcclxuLy99XHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgZm9udC1zaXplOiBtaW4oOS41dmgsIDEzdncpO1xyXG59XHJcblxyXG4uaGVhZGVyIGgye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6MDtcclxuICBmb250LXNpemU6IDkuNXZoO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitlePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-page',
                templateUrl: './title-page.component.html',
                styleUrls: ['./title-page.component.scss']
            }]
    }], function () { return []; }, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\Guilhem\source\repos\gd-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map