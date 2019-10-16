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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-map></app-map>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\n  <div class=\"map-tool-bar\">\n    <ul>\n      <li class=\"icon fitview\" (click)=\"maptoolSrv.setFitView()\">复位<b></b></li>\n      <li class=\"icon rect\" [ngClass]=\"{ active: drawType === 'rectangle' }\" (click)=\"draw('rectangle')\">\n        方形<b></b>\n      </li>\n      <li class=\"icon circle\" [ngClass]=\"{ active: drawType === 'circle' }\" (click)=\"draw('circle')\">圆形<b></b></li>\n      <li class=\"icon polygon\" [ngClass]=\"{ active: drawType === 'polygon' }\" (click)=\"draw('polygon')\">\n        多边形<b></b>\n      </li>\n      <li class=\"icon draw-clean\" (click)=\"closeDraw(true)\">清除</li>\n      <li class=\"icon driving-render\" (click)=\"driving()\" style=\"color: #d81e06;font-weight: bold\">路径规划</li>\n    </ul>\n    <div class=\"clear\"></div>\n  </div>\n  <ngx-amap class=\"ngxmap\" [center]=\"centerPoint\" [zoom]=\"13\" [ngStyle]=\"{ height: maxHight }\" [zooms]=\"[11, 18]\">\n    <amap-tool-bar></amap-tool-bar>\n    <ng-container *ngFor=\"let p of markerPoints; index as i\">\n      <amap-marker\n        [position]=\"p.position\"\n        [label]=\"p.label\"\n        [extData]=\"p.extData\"\n        [icon]=\"p.icon\"\n        [offset]=\"{ x: -12, y: -30 }\"\n      >\n        <amap-info-window [offset]=\"{ x: 0, y: -30 }\" *ngIf=\"!p.extData.isWareHouse\">\n          <div class=\"info-card\">\n            <div class=\"info-title\">{{ p.extData?.waybillId }}</div>\n            <div class=\"header\">\n              <div class=\"address\"></div>\n              <div class=\"operate\">\n                <span class=\"btn\">二次预约</span>\n                <span class=\"btn\">上午</span>\n              </div>\n            </div>\n            <div class=\"content\">\n              <ul>\n                <li>地址：{{ p.extData?.address }}</li>\n                <li>方数：{{ p.extData?.volume }} m³</li>\n                <li>派单费：{{ p.extData?.diriverFee }} 元</li>\n                <li>品名：{{ p.extData?.goodName }}</li>\n                <li>备注：{{ p.extData?.remark }}</li>\n              </ul>\n            </div>\n          </div>\n        </amap-info-window>\n      </amap-marker>\n    </ng-container>\n  </ngx-amap>\n  <div id=\"driving-panel\" class=\"panel\"></div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'maptool';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var ngx_amap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-amap */ "./node_modules/ngx-amap/fesm2015/ngx-amap.js");
/* harmony import */ var _map_maptool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/maptool.service */ "./src/app/map/maptool.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({ timeOut: 3000, positionClass: 'toast-top-center' }),
            ngx_amap__WEBPACK_IMPORTED_MODULE_7__["NgxAmapModule"].forRoot({
                apiVersion: '1.4.14',
                apiKey: '146f101e824accd6956eeec4937c1a05' //'eb840ed80f669b89a8ff67602fddd5b1'
            })
        ],
        providers: [_map_maptool_service__WEBPACK_IMPORTED_MODULE_8__["MapToolService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/map/map-config.ts":
/*!***********************************!*\
  !*** ./src/app/map/map-config.ts ***!
  \***********************************/
/*! exports provided: SELECTED_MARKER_ICON, DEFAULT_MARKER_ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_MARKER_ICON", function() { return SELECTED_MARKER_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MARKER_ICON", function() { return DEFAULT_MARKER_ICON; });
const SELECTED_MARKER_ICON = '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png';
const DEFAULT_MARKER_ICON = '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png';


/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.map-container {\n  position: relative;\n}\n.map-container .ngxmap {\n  height: 100%;\n}\n#driving-panel {\n  position: absolute;\n  width: 300px;\n  background: transparent;\n  right: 10px;\n  top: 120px;\n  height: 500px;\n  overflow-y: auto;\n}\n:host ::ng-deep .info-title {\n  color: white;\n  font-size: 14px;\n  background-color: #25a5f7;\n  line-height: 26px;\n  padding: 0px 0 0 6px;\n  font-weight: lighter;\n  letter-spacing: 1px;\n}\n:host ::ng-deep .amap-info-content {\n  padding: 0;\n}\n:host ::ng-deep .amap-info-close {\n  right: 10px !important;\n  color: #fff;\n}\n:host ::ng-deep .info-card .content {\n  padding: 10px;\n}\n:host ::ng-deep .info-card .operate {\n  border-bottom: #e4e4e4 solid 1px;\n  height: 25px;\n}\n:host ::ng-deep .info-card .operate .btn {\n  cursor: pointer;\n  color: #25a5f7;\n}\n.map-tool-bar {\n  position: absolute;\n  z-index: 600;\n  right: 20px;\n  top: 20px;\n  z-index: 1000;\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: 2px 2px 2px #aaa;\n}\n.map-tool-bar ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n  margin: 0 0 0 15px;\n}\n.map-tool-bar ul > li {\n  float: left;\n  padding-left: 25px;\n  width: 60px;\n  height: 48px;\n  line-height: 50px;\n  background-position: 5px 17px;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"微软雅黑\";\n  color: #686c7e;\n}\n.map-tool-bar b {\n  border-left: 1px solid #dedede;\n  border-right: 1px solid #fff;\n  margin-left: 15px;\n}\n.map-tool-bar .icon {\n  background-size: 16px 16px;\n}\n.map-tool-bar .circle {\n  background-image: url(\"/assets/images/map/circle.png\");\n}\n.map-tool-bar .circle.active {\n  background-image: url(\"/assets/images/map/circle-active.png\");\n  color: #0031ff;\n}\n.map-tool-bar .polygon {\n  background-image: url(\"/assets/images/map/polygon.png\");\n}\n.map-tool-bar .polygon.active {\n  background-image: url(\"/assets/images/map/polygon-active.png\");\n  color: #0031ff;\n}\n.map-tool-bar .rect {\n  background-image: url(\"/assets/images/map/rectangle.png\");\n  position: relative;\n}\n.map-tool-bar .rect.active {\n  background-image: url(\"/assets/images/map/rectangle-active.png\");\n  position: relative;\n  color: #0031ff;\n}\n.map-tool-bar .draw-clean {\n  background-image: url(\"/assets/images/map/draw-clean.png\");\n  position: relative;\n}\n.map-tool-bar .fitview {\n  background-image: url(\"/assets/images/map/fitview.png\");\n  position: relative;\n}\n.map-tool-bar .driving-render {\n  background-image: url(\"/assets/images/map/driving-render.png\");\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kZXZlbG9wZXIxeml0b24uY29tL0Rlc2t0b3AvZ2lzY2FmZXIvZ2l0aHViL3Zpc3VhbC1tYXB0b29sL3NyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxrQkFBQTtBREVGO0FDREU7RUFDRSxZQUFBO0FER0o7QUNBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURHRjtBQ0FFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FER0o7QUNERTtFQUNFLFVBQUE7QURHSjtBQ0RFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FER0o7QUNBSTtFQUNFLGFBQUE7QURFTjtBQ0FJO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FERU47QUNETTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FER1I7QUNHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBREFGO0FDQ0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURDSjtBQ0FJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBREVOO0FDQ0U7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QURDSjtBQ0NFO0VBQ0UsMEJBQUE7QURDSjtBQ0NFO0VBQ0Usc0RBQUE7QURDSjtBQ0FJO0VBQ0UsNkRBQUE7RUFDQSxjQUFBO0FERU47QUNDRTtFQUNFLHVEQUFBO0FEQ0o7QUNBSTtFQUNFLDhEQUFBO0VBQ0EsY0FBQTtBREVOO0FDRUU7RUFDRSx5REFBQTtFQUNBLGtCQUFBO0FEQUo7QUNDSTtFQUNFLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEQ047QUNFRTtFQUNFLDBEQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0VFO0VBQ0UsdURBQUE7RUFDQSxrQkFBQTtBREFKO0FDRUU7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0FEQUoiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLWNvbnRhaW5lciAubmd4bWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jZHJpdmluZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTIwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaW5mby10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVhNWY3O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgcGFkZGluZzogMHB4IDAgMCA2cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbWFwLWluZm8tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFtYXAtaW5mby1jbG9zZSB7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pbmZvLWNhcmQgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pbmZvLWNhcmQgLm9wZXJhdGUge1xuICBib3JkZXItYm90dG9tOiAjZTRlNGU0IHNvbGlkIDFweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pbmZvLWNhcmQgLm9wZXJhdGUgLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMyNWE1Zjc7XG59XG5cbi5tYXAtdG9vbC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDYwMDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjYWFhO1xufVxuLm1hcC10b29sLWJhciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCAwIDAgMTVweDtcbn1cbi5tYXAtdG9vbC1iYXIgdWwgPiBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggMTdweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIuW+rui9r+mbhem7kVwiO1xuICBjb2xvcjogIzY4NmM3ZTtcbn1cbi5tYXAtdG9vbC1iYXIgYiB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZGVkZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ubWFwLXRvb2wtYmFyIC5pY29uIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG59XG4ubWFwLXRvb2wtYmFyIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYXAvY2lyY2xlLnBuZ1wiKTtcbn1cbi5tYXAtdG9vbC1iYXIgLmNpcmNsZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYXAvY2lyY2xlLWFjdGl2ZS5wbmdcIik7XG4gIGNvbG9yOiAjMDAzMWZmO1xufVxuLm1hcC10b29sLWJhciAucG9seWdvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21hcC9wb2x5Z29uLnBuZ1wiKTtcbn1cbi5tYXAtdG9vbC1iYXIgLnBvbHlnb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFwL3BvbHlnb24tYWN0aXZlLnBuZ1wiKTtcbiAgY29sb3I6ICMwMDMxZmY7XG59XG4ubWFwLXRvb2wtYmFyIC5yZWN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFwL3JlY3RhbmdsZS5wbmdcIik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXAtdG9vbC1iYXIgLnJlY3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFwL3JlY3RhbmdsZS1hY3RpdmUucG5nXCIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMDAzMWZmO1xufVxuLm1hcC10b29sLWJhciAuZHJhdy1jbGVhbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21hcC9kcmF3LWNsZWFuLnBuZ1wiKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hcC10b29sLWJhciAuZml0dmlldyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21hcC9maXR2aWV3LnBuZ1wiKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hcC10b29sLWJhciAuZHJpdmluZy1yZW5kZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYXAvZHJpdmluZy1yZW5kZXIucG5nXCIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59IiwiLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5uZ3htYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuI2RyaXZpbmctcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEyMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmluZm8tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1YTVmNztcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBwYWRkaW5nOiAwcHggMCAwIDZweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gIC5hbWFwLWluZm8tY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuYW1hcC1pbmZvLWNsb3NlIHtcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5pbmZvLWNhcmQge1xuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5vcGVyYXRlIHtcbiAgICAgIGJvcmRlci1ib3R0b206ICNlNGU0ZTQgc29saWQgMXB4O1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgLmJ0biB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICMyNWE1Zjc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tYXAtdG9vbC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDYwMDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAjYWFhO1xuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xuICAgID4gbGkge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IDE3cHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICflvq7ova/pm4Xpu5EnO1xuICAgICAgY29sb3I6ICM2ODZjN2U7XG4gICAgfVxuICB9XG4gIGIge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZGVkZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIC5pY29uIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgfVxuICAuY2lyY2xlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21hcC9jaXJjbGUucG5nJyk7XG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tYXAvY2lyY2xlLWFjdGl2ZS5wbmcnKTtcbiAgICAgIGNvbG9yOiByZ2IoMCwgNDksIDI1NSk7XG4gICAgfVxuICB9XG4gIC5wb2x5Z29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21hcC9wb2x5Z29uLnBuZycpO1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFwL3BvbHlnb24tYWN0aXZlLnBuZycpO1xuICAgICAgY29sb3I6IHJnYigwLCA0OSwgMjU1KTtcbiAgICB9XG4gIH1cblxuICAucmVjdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tYXAvcmVjdGFuZ2xlLnBuZycpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21hcC9yZWN0YW5nbGUtYWN0aXZlLnBuZycpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6IHJnYigwLCA0OSwgMjU1KTtcbiAgICB9XG4gIH1cbiAgLmRyYXctY2xlYW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFwL2RyYXctY2xlYW4ucG5nJyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5maXR2aWV3IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21hcC9maXR2aWV3LnBuZycpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuZHJpdmluZy1yZW5kZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFwL2RyaXZpbmctcmVuZGVyLnBuZycpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_amap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-amap */ "./node_modules/ngx-amap/fesm2015/ngx-amap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _maptool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maptool.service */ "./src/app/map/maptool.service.ts");





let MapComponent = class MapComponent {
    constructor(mouseToolSrv, maptoolSrv) {
        this.mouseToolSrv = mouseToolSrv;
        this.maptoolSrv = maptoolSrv;
        this.drawType = '';
        this.maxHight = '700px';
        this.centerPoint = [116.397428, 39.90923];
        this.warehouseInfo = [
            {
                label: {
                    content: '直营仓库',
                    offset: {
                        x: -10,
                        y: -25
                    }
                },
                extData: {
                    id: 1,
                    name: '北京直营点',
                    isWareHouse: true,
                    disabled: true // 不可选中
                },
                icon: {
                    size: { width: 34, height: 34 },
                    imageSize: { width: 34, height: 34 },
                    image: './assets/images/map/warehouse.png'
                },
                position: [116.397428, 39.90923]
            }
        ];
        this.markerPoints = [
            ...this.warehouseInfo,
            {
                label: {
                    content: '陈师傅',
                    offset: {
                        x: -10,
                        y: -25
                    }
                },
                extData: {
                    id: 2,
                    waybillId: '1zt32423423412',
                    address: '广州市天河区陶庄路5号空间',
                    taskStatus: 'appointment',
                    volume: 5.1,
                    diriverFee: 115.5,
                    goodName: '三门衣柜-组装',
                    remark: '注意不能倒置，需轻拿轻放',
                    distanceToWarehouse: 3200
                },
                icon: {
                    size: { width: 25, height: 34 },
                    imageSize: { width: 25, height: 34 },
                    image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
                },
                position: [116.427281, 39.903719],
                waybillId: '1zt32423423412'
            },
            {
                label: {
                    content: '赵信',
                    offset: {
                        x: -10,
                        y: -25
                    }
                },
                extData: {
                    id: 3,
                    name: '舒兰市满盆龙虾饭店',
                    distanceToWarehouse: 3100
                },
                icon: {
                    size: { width: 25, height: 34 },
                    imageSize: { width: 25, height: 34 },
                    image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
                },
                position: [116.370275, 39.907781],
                waybillId: '1zt32423423412'
            },
            {
                label: {
                    content: '德邦',
                    offset: {
                        x: -10,
                        y: -25
                    }
                },
                extData: {
                    id: 31,
                    name: '舒兰市满盆龙虾饭店',
                    distanceToWarehouse: 6100
                },
                icon: {
                    size: { width: 25, height: 34 },
                    imageSize: { width: 25, height: 34 },
                    image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
                },
                position: [116.468212, 39.911545],
                waybillId: '1zt32423423412'
            },
            {
                label: {
                    content: '压缩',
                    offset: {
                        x: -10,
                        y: -25
                    }
                },
                extData: {
                    id: 33,
                    name: '复兴门',
                    distanceToWarehouse: 5000
                },
                icon: {
                    size: { width: 25, height: 34 },
                    imageSize: { width: 25, height: 34 },
                    image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
                },
                position: [116.35318, 39.906006],
                waybillId: '1zt32423423412'
            },
            {
                label: {
                    content: '小炮',
                    offset: {
                        x: -10,
                        y: -25
                    }
                },
                extData: {
                    id: 43,
                    name: '舒兰市满盆龙虾饭店',
                    distanceToWarehouse: 7000
                },
                icon: {
                    size: { width: 25, height: 34 },
                    imageSize: { width: 25, height: 34 },
                    image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
                },
                position: [116.343696, 39.917337],
                waybillId: '1zt32423423412'
            }
        ];
    }
    ngOnInit() {
        this.maxHight = window.innerHeight + 'px';
    }
    ngAfterViewInit() {
        this.plugin = this.mapComponent.ready
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .toPromise()
            .then((map) => {
            this.maptoolSrv.setMap(map);
            return this.mouseToolSrv.of(map);
        });
        // 绑定事件侦听：
        this.plugin.then(mouseTool => {
            this._subscription = mouseTool.on('draw').subscribe(e => {
                // console.log('MouseTool event: "draw"', e);
                const inRingMarkers = this.maptoolSrv.getInRingMarkers(e);
                // tslint:disable-next-line: no-console
                console.log(inRingMarkers);
                // tslint:disable-next-line: no-console
                console.log('选中的所有markers:', this.maptoolSrv.getSelectedMarkers());
                this.closeDraw();
            });
        });
    }
    draw(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.drawType = type;
            const wrapper = yield this.plugin;
            yield wrapper[type]();
        });
    }
    driving() {
        this.maptoolSrv.drivingRender().subscribe(() => { });
    }
    closeDraw(clearMarkStyle = false) {
        this.drawType = '';
        this.plugin.then(wrapper => {
            if (clearMarkStyle) {
                this.maptoolSrv.clearSelectMarkersStyle();
                this.maptoolSrv.clearDriving();
            }
            return wrapper.close(true);
        });
    }
    clearMap() {
        this.maptoolSrv.clearMap();
    }
    ngOnDestroy() {
        // 移除侦听器：
        this.plugin.then(wrapper => {
            return wrapper.close(true);
        });
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
};
MapComponent.ctorParameters = () => [
    { type: ngx_amap__WEBPACK_IMPORTED_MODULE_2__["AmapMouseToolService"] },
    { type: _maptool_service__WEBPACK_IMPORTED_MODULE_4__["MapToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_amap__WEBPACK_IMPORTED_MODULE_2__["NgxAmapComponent"], { static: false })
], MapComponent.prototype, "mapComponent", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/map/maptool.service.ts":
/*!****************************************!*\
  !*** ./src/app/map/maptool.service.ts ***!
  \****************************************/
/*! exports provided: MapToolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapToolService", function() { return MapToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _map_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-config */ "./src/app/map/map-config.ts");
/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-10-15 15:13:04
 * @description:
 */





let MapToolService = class MapToolService {
    constructor(toastrSrv) {
        this.toastrSrv = toastrSrv;
    }
    get map() {
        return this._map;
    }
    setMap(map) {
        map.setMapStyle('amap://styles/macaron');
        this._map = map;
        this.initDrivingPlugin();
    }
    initDrivingPlugin() {
        AMap.plugin(['AMap.Driving'], () => {
            const driving = new AMap.Driving({
                map: this.map,
                policy: AMap.DrivingPolicy.LEAST_DISTANCE,
                size: 1,
                panel: 'driving-panel',
                isOutline: true,
                autoFitView: true
            });
            this.driving = driving;
        });
    }
    /**
     * 获取绘制区域内的 marker 点
     * @param e draw event obj
     */
    getInRingMarkers(e) {
        let overlayPath = []; //覆盖物路径
        let inRingMarkers = [];
        const bounds = e.obj.getBounds();
        //可以判断点是否在多边形、矩形、圆内
        //console.log(e.obj.contains(point))
        if (e.obj.CLASS_NAME === 'AMap.Marker') {
            overlayPath.push(e.obj.getPosition());
        }
        else {
            let southWest = bounds.getSouthWest();
            let northEast = bounds.getNorthEast();
            if (southWest.equals(northEast)) {
                return inRingMarkers;
            }
            overlayPath = e.obj.getPath();
        }
        const allMarkers = this.getAllMarkers();
        allMarkers.forEach(marker => {
            const point = marker.getPosition();
            //bounds.contains(point);
            const isPointInRing = AMap.GeometryUtil.isPointInRing(point, overlayPath);
            if (isPointInRing) {
                // marker.on('mouseover', this.showLabel);
                // marker.on('mouseout', this.hideLabel);
                this.changeIcon2Selected(marker);
                marker.selected = true;
                inRingMarkers.push(marker);
            }
        });
        return inRingMarkers;
    }
    /**
     * 路径规划渲染
     */
    drivingRender() {
        this.clearDriving();
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            // 根据起终点经纬度规划驾车导航路线
            const selectedMarkers = this.getSelectedMarkers();
            if (selectedMarkers.length === 0) {
                this.toastrSrv.warning('没有选择点，无法进行路径规划分析', '提示');
                return observer.complete();
            }
            const max = this.getMaxDistanceMarker();
            if (!max) {
                this.toastrSrv.error('获取最远点失败，无法进行路径规划分析', '提示');
                return observer.complete();
            }
            const endpoint = max.getPosition();
            const wayMarkers = selectedMarkers.filter(m => m.getExtData().id !== max.getExtData().id);
            const waypoints = wayMarkers.map(m => m.getPosition());
            this.driving.search(this.getWareHousePoint().getPosition(), endpoint, {
                waypoints
            }, (status, result) => {
                // result 即是对应的驾车导航信息，相关数据结构文档请参考
                // https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                if (status === 'complete') {
                    this.toastrSrv.success('绘制驾车路线完成', '提示');
                }
                else if (result === 'USERKEY_PLAT_NOMATCH') {
                    this.toastrSrv.error('地图服务失败，请联系管理员', '错误');
                }
                else {
                    this.toastrSrv.error('获取驾车数据失败，请联系管理员', '错误');
                }
            });
            // this.map.setFitView();
            this.clearSelectMarkersStyle();
            observer.next();
            observer.complete();
        });
    }
    setFitView() {
        this.map.setFitView();
    }
    /**
     *
     * @param marker
     * @param image 图标地址
     */
    changeMarkerIcon(marker, image) {
        marker.setIcon(new AMap.Icon({
            size: { width: 25, height: 34 },
            imageSize: { width: 25, height: 34 },
            image: image
        }));
    }
    changeIcon2Selected(marker) {
        if (this.isWareHouse(marker)) {
            return;
        }
        this.changeMarkerIcon(marker, _map_config__WEBPACK_IMPORTED_MODULE_4__["SELECTED_MARKER_ICON"]);
    }
    changeIcon2Default(marker) {
        if (this.isWareHouse(marker)) {
            return;
        }
        this.changeMarkerIcon(marker, _map_config__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_MARKER_ICON"]);
    }
    /**
     * 清楚单个 marker 高亮样式
     * @param marker
     */
    clearMarkerStyle(marker) {
        if (this.isWareHouse(marker)) {
            return;
        }
        delete marker.selected;
        this.changeIcon2Default(marker);
    }
    /**
     * 清楚所有 markers 高亮样式
     */
    clearSelectMarkersStyle() {
        const allMarkers = this.getAllMarkers();
        if (allMarkers.length) {
            allMarkers.forEach(m => this.clearMarkerStyle(m));
        }
    }
    /**
     * 清除路径
     */
    clearDriving() {
        if (this.driving && this.driving.clear) {
            this.driving.clear();
        }
    }
    getAllMarkers() {
        return this.map.getAllOverlays('marker') || [];
    }
    getSelectedMarkers() {
        const result = this.getAllMarkers().filter((m) => {
            if (!this.isWareHouse(m) && m.selected) {
                return m;
            }
        });
        return result;
    }
    isWareHouse(marker) {
        return marker.getExtData().isWareHouse;
    }
    /**
     * 获取直营点
     */
    getWareHousePoint() {
        const result = this.getAllMarkers().filter(m => {
            if (this.isWareHouse(m)) {
                return m;
            }
        });
        return result[0];
    }
    /**
     * 离直营点最远的marker点就是终点
     */
    getMaxDistanceMarker() {
        const markers = this.getSelectedMarkers();
        const res = markers.map(m => {
            const extData = m.getExtData();
            return isNaN(+extData.distanceToWarehouse)
                ? 0
                : +extData.distanceToWarehouse;
        });
        const maxDistance = Math.max(...res);
        return markers.filter(m => Number(m.getExtData().distanceToWarehouse) === maxDistance)[0];
    }
    showLabel(marker) {
        if (!marker) {
            return;
        }
        marker.setLabel({
            content: "<div class='info'>" + marker.getExtData().name + '</div>',
            offset: new AMap.Pixel(20, -10)
        });
    }
    hideLabel(marker) {
        if (!marker) {
            return;
        }
        marker.setLabel({});
    }
    clearMap() {
        this.map.clearMap();
    }
    /**
     * 平移到指定marker点
     * @param lnglat
     */
    panTo(lnglat) {
        this.map.panTo(lnglat);
    }
};
MapToolService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
MapToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MapToolService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/developer1ziton.com/Desktop/giscafer/github/visual-maptool/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map