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

module.exports = "<!-- <button (click)='createRoom()'>create room</button>\n<button (click)='createUser()'>create user</button> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/web-rtc/components/auth/auth.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web-rtc/components/auth/auth.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page-container\">\n  <div class=\"auth-container\">\n    <div class=\"inputs-container\">\n      <mat-form-field class=\"input-container\" appearance=\"fill\">\n        <mat-label>Enter your username</mat-label>\n        <input #name matInput>\n      </mat-form-field>\n      <div class=\"btn-container\">\n        <button color=\"primary\" mat-flat-button (click)='createUser(name.value)'>Create User</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/web-rtc/components/chat/chat.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/web-rtc/components/chat/chat.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"chat-page-container\">\n  <mat-drawer class=\"sidebar-container\" mode=\"side\" opened>\n    <div class=\"rooms-container\">\n      <div (click)=\"joinRoom(room.id)\" matRipple *ngFor=\"let room of RoomsSubject | async\" class=\"room-container\">\n\n        <div class=\"room-avatar-container\">\n          <span>{{ room.name[0] }}</span>\n        </div>\n        <div class=\"room-name-container\">\n          <span>{{ room.name }}</span>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"add-room-container\">\n      <button color=\"primary\" mat-flat-button (click)='createRoom()' class=\"add-room-btn\">\n        Add Room\n      </button>\n    </div>\n  </mat-drawer>\n\n  <mat-drawer-content>\n    <div class=\"page-content-container\">\n      <div class=\"video-audio-call-container\">\n        <div (click)=\"startVideoCall()\" matRipple class=\"icon-container video-call-icon-container\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">videocam</mat-icon>\n        </div>\n        <div (click)=\"startAudioCall()\" matRipple class=\"icon-container audio-call-icon-container\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">call</mat-icon>\n        </div>\n      </div>\n      <div class=\"message-list-container\">\n        <div *ngFor=\"let msg of messages\" class=\"message-full-width\">\n          <div class=\"{{ msg.sentByMe ? 'message-container sent-by-me' : 'message-container' }}\">\n            <span class=\"message\">{{ msg.message }}</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"message-send-container\">\n        <input #message (keydown.enter)=\"sendMessage(message)\" class=\"msg-input\" type=\"text\">\n        <button (click)=\"sendMessage(message)\" class=\"send-btn\" color=\"primary\" mat-flat-button>Send</button>\n      </div>\n    </div>\n  </mat-drawer-content>\n\n</mat-drawer-container>\n<audio #audioOption>\n    <source src='./../../../../assets/get-outta-here.mp3' type=\"audio/mp3\">\n</audio>\n<div #videosContainer (dblclick)='toggleFullscreen()' class=\"videos-container\" [cdkDragFreeDragPosition]=\"dragPosition\" cdkDrag>\n  <div class=\"full-screen-btn-container\">\n    <button (click)='toggleFullscreen()' class=\"full-screen-btn\" mat-icon-button>\n      <mat-icon>fullscreen</mat-icon>\n    </button>\n  </div>\n  <div class=\"call-options-container\">\n    <div class=\"video-btn-container\">\n      <button (click)=\"toggleVideo()\" class=\"video-btn\" mat-icon-button>\n        <mat-icon>videocam</mat-icon>\n      </button>\n    </div>\n    <div class=\"audio-btn-container\">\n      <button class=\"full-screen-btn\" mat-icon-button>\n        <mat-icon>volume_up</mat-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"remote-video-container\">\n    <video autoplay #remoteVideo></video>\n  </div>\n  <div class=\"local-video-container\">\n    <video autoplay #localVideo></video>\n  </div>\n</div>\n"

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
/* harmony import */ var _web_rtc_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-rtc/components/auth/auth.component */ "./src/app/web-rtc/components/auth/auth.component.ts");
/* harmony import */ var _web_rtc_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-rtc/components/chat/chat.component */ "./src/app/web-rtc/components/chat/chat.component.ts");





const routes = [
    {
        path: '',
        component: _web_rtc_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
    },
    {
        path: 'chat',
        component: _web_rtc_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]
    }
];
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
/* harmony import */ var _web_rtc_services_rtc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-rtc/services/rtc.service */ "./src/app/web-rtc/services/rtc.service.ts");
/* harmony import */ var _web_rtc_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-rtc/services/room.service */ "./src/app/web-rtc/services/room.service.ts");
/* harmony import */ var _web_rtc_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-rtc/services/user.service */ "./src/app/web-rtc/services/user.service.ts");





let AppComponent = class AppComponent {
    constructor(rtc, rooms, user) {
        this.rtc = rtc;
        this.rooms = rooms;
        this.user = user;
        this.title = 'Chat';
        // rooms.getRooms().subscribe(x => console.log(x));
        user.getUser().subscribe(x => console.log(x));
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _web_rtc_services_rtc_service__WEBPACK_IMPORTED_MODULE_2__["RTCService"] },
    { type: _web_rtc_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] },
    { type: _web_rtc_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_rtc_services_rtc_service__WEBPACK_IMPORTED_MODULE_2__["RTCService"], _web_rtc_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"], _web_rtc_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _web_rtc_web_rtc_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-rtc/web-rtc.module */ "./src/app/web-rtc/web-rtc.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");






// import { MatButtonModule } from '@angular/material';

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _web_rtc_web_rtc_module__WEBPACK_IMPORTED_MODULE_5__["WebRTCModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/web-rtc/components/auth/auth.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/web-rtc/components/auth/auth.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-page-container {\n  display: grid;\n  grid-template-columns: 1fr 350px 1fr;\n  grid-template-rows: 1fr 250px 1fr;\n  width: 100%;\n  height: 100%;\n}\n.auth-page-container .auth-container {\n  grid-column: 2/2;\n  grid-row: 2/2;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: column;\n  text-align: center;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.auth-page-container .auth-container .inputs-container {\n  margin-top: 18px;\n  height: 80%;\n  width: 80%;\n  margin: auto;\n  padding: 8px;\n  border-radius: 8px;\n}\n.auth-page-container .auth-container .inputs-container .input-container {\n  margin-top: 40px;\n  height: 35px;\n  width: 100%;\n}\n.auth-page-container .auth-container .inputs-container .btn-container {\n  margin-top: 30px;\n  height: 40px;\n  width: 100%;\n}\n.auth-page-container .auth-container .inputs-container .btn-container button {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXJ0Yy9jb21wb25lbnRzL2F1dGgvQzpcXFVzZXJzXFxMaXNvbWF0cml4XFxEZXNrdG9wXFxTaWduYWxpbmdcXENoYXQvc3JjXFxhcHBcXHdlYi1ydGNcXGNvbXBvbmVudHNcXGF1dGhcXGF1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlYi1ydGMvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJFQUFBO0VBQ0EscURBQUE7QUNDSjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRENNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NSO0FERU07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQVI7QURFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQVYiLCJmaWxlIjoic3JjL2FwcC93ZWItcnRjL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtcGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNTBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4IDFmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAuYXV0aC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyLzI7XG4gICAgZ3JpZC1yb3c6IDIvMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpO1xuXG4gICAgLmlucHV0cy1jb250YWluZXIge1xuICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgIGhlaWdodDogODAlO1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5idG4tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmF1dGgtcGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNTBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1MHB4IDFmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hdXRoLXBhZ2UtY29udGFpbmVyIC5hdXRoLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyLzI7XG4gIGdyaWQtcm93OiAyLzI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG59XG4uYXV0aC1wYWdlLWNvbnRhaW5lciAuYXV0aC1jb250YWluZXIgLmlucHV0cy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5hdXRoLXBhZ2UtY29udGFpbmVyIC5hdXRoLWNvbnRhaW5lciAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdXRoLXBhZ2UtY29udGFpbmVyIC5hdXRoLWNvbnRhaW5lciAuaW5wdXRzLWNvbnRhaW5lciAuYnRuLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXV0aC1wYWdlLWNvbnRhaW5lciAuYXV0aC1jb250YWluZXIgLmlucHV0cy1jb250YWluZXIgLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-rtc/components/auth/auth.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/web-rtc/components/auth/auth.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/web-rtc/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthComponent = class AuthComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    ngOnInit() {
    }
    createUser(name) {
        this.user.createUser(name);
        this.router.navigateByUrl('/chat');
    }
};
AuthComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'rtc-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/web-rtc/components/auth/auth.component.html"),
        styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/web-rtc/components/auth/auth.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthComponent);



/***/ }),

/***/ "./src/app/web-rtc/components/chat/chat.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/web-rtc/components/chat/chat.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-page-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.chat-page-container .sidebar-container {\n  width: 200px;\n  height: 100%;\n}\n.chat-page-container .sidebar-container .rooms-container {\n  width: 100%;\n  height: calc(100% - 80px);\n  overflow: auto;\n}\n.chat-page-container .sidebar-container .rooms-container .room-container {\n  border-top: 1px solid gray;\n  border-bottom: 1px solid gray;\n  width: 100%;\n  height: 55px;\n  padding: 8px;\n  display: flex;\n  cursor: pointer;\n  border-color: lightgray;\n  margin-top: 8px;\n}\n.chat-page-container .sidebar-container .rooms-container .room-container .room-avatar-container {\n  text-align: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 15em;\n  background-color: #3f51b5;\n  display: block;\n  padding-top: 8px;\n}\n.chat-page-container .sidebar-container .rooms-container .room-container .room-avatar-container span {\n  color: #fff;\n}\n.chat-page-container .sidebar-container .rooms-container .room-container .room-name-container {\n  text-align: center;\n  padding-left: 10px;\n  margin-top: 8px;\n}\n.chat-page-container .sidebar-container .add-room-container {\n  height: 80px;\n  text-align: center;\n  padding-top: 18px;\n}\n.chat-page-container .page-content-container {\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  height: 100%;\n}\n.chat-page-container .page-content-container .video-audio-call-container {\n  height: 50px;\n  width: 100%;\n  text-align: right;\n  background-color: #fff;\n  border-bottom: solid 1px rgba(0, 0, 0, 0.12);\n  padding-top: 4px;\n}\n.chat-page-container .page-content-container .video-audio-call-container .icon-container {\n  cursor: pointer;\n  border-radius: 15em;\n  margin-right: 8px;\n  padding-top: 7px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  display: inline-block;\n}\n.chat-page-container .page-content-container .video-audio-call-container .video-call-icon-container {\n  background-color: green;\n  color: #fff;\n}\n.chat-page-container .page-content-container .video-audio-call-container .audio-call-icon-container {\n  background-color: green;\n  color: #fff;\n}\n.chat-page-container .page-content-container .message-list-container {\n  height: calc(100% - 120px);\n  width: 100%;\n  padding: 0 18px 0 18px;\n  overflow: auto;\n  display: flex;\n  flex-flow: column;\n}\n.chat-page-container .page-content-container .message-list-container .message-full-width {\n  width: 100%;\n  word-break: break-all;\n}\n.chat-page-container .page-content-container .message-list-container .message-full-width .message-container {\n  background-color: #f1f0f0;\n  color: #000000;\n  margin-top: 8px;\n  border-radius: 15px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  box-sizing: border-box;\n  padding-left: 8px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 8px;\n  float: left;\n}\n.chat-page-container .page-content-container .message-list-container .message-full-width .sent-by-me {\n  background-color: #3f51b5;\n  float: right;\n  color: #fff;\n}\n.chat-page-container .page-content-container .message-send-container {\n  background-color: #fff;\n  height: 80px;\n  width: 100%;\n  display: flex;\n  padding: 18px 18px 0 18px;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n.chat-page-container .page-content-container .message-send-container .msg-input {\n  height: 40px;\n  width: 100%;\n  border: 1px solid #908f8f;\n  border-radius: 18px;\n  text-indent: 12px;\n  transition: all 0.3s;\n}\n.chat-page-container .page-content-container .message-send-container .msg-input:focus {\n  border-color: #3f51b5;\n  outline: none;\n}\n.chat-page-container .page-content-container .message-send-container .input-container {\n  width: calc(100% - 120px);\n  height: 100%;\n}\n.chat-page-container .page-content-container .message-send-container .send-btn {\n  margin-left: 18px;\n  height: 40px;\n  width: 100px;\n}\n.videos-container-fullscreen {\n  top: 0px !important;\n  right: 0px !important;\n  width: 100vw !important;\n  height: 100vh !important;\n}\n.videos-container-fullscreen * {\n  transition: all 0.3s;\n}\n.videos-container-fullscreen .remote-video-container {\n  width: 100vw !important;\n  height: 100vh !important;\n}\n.videos-container-fullscreen .remote-video-container video {\n  width: 100% !important;\n  height: 100% !important;\n}\n.videos-container-fullscreen .local-video-container {\n  height: 150px !important;\n  bottom: 15px !important;\n  right: 15px !important;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.videos-container-fullscreen .local-video-container video {\n  width: 200px !important;\n}\n.videos-container {\n  display: none;\n  transition: all 0.3s;\n  overflow: hidden;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: 2;\n  background-color: #000;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.videos-container .videos-elemets-container {\n  width: 250px;\n  height: 188px;\n}\n.videos-container .full-screen-btn-container {\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n  z-index: 5;\n}\n.videos-container .full-screen-btn-container .full-screen-btn {\n  color: #fff;\n}\n.videos-container .call-options-container {\n  position: absolute;\n  bottom: 0;\n  z-index: 4;\n  width: 100%;\n  height: 45px;\n  display: grid;\n  grid-template-columns: 1fr auto auto 1fr;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n}\n.videos-container .call-options-container .video-btn-container {\n  grid-column: 2/2;\n  width: 40px;\n  height: 40px;\n  border-radius: 15em;\n  background-color: #76ca44;\n  color: white;\n  text-align: center;\n}\n.videos-container .call-options-container .audio-btn-container {\n  grid-column: 3/3;\n  width: 40px;\n  height: 40px;\n  border-radius: 15em;\n  background-color: #76ca44;\n  color: white;\n  text-align: center;\n  paint-order: 8px;\n}\n.videos-container .remote-video-container {\n  width: 100%;\n  height: 100%;\n}\n.videos-container .remote-video-container video {\n  width: 250px;\n}\n.videos-container .local-video-container {\n  z-index: 3;\n  width: auto;\n  height: 60px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #000;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.videos-container .local-video-container video {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLXJ0Yy9jb21wb25lbnRzL2NoYXQvQzpcXFVzZXJzXFxMaXNvbWF0cml4XFxEZXNrdG9wXFxTaWduYWxpbmdcXENoYXQvc3JjXFxhcHBcXHdlYi1ydGNcXGNvbXBvbmVudHNcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlYi1ydGMvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ047QURDTTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NWO0FEQ1U7RUFDRSxXQUFBO0FDQ1o7QURJUTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRlY7QURPSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTE47QURTRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUEo7QURTSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNQTjtBRFNNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1BSO0FEVU07RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUNSUjtBRFdNO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FDVFI7QURhSTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1hOO0FEYU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNYUjtBRGFRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNYVjtBRGNRO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1pWO0FEaUJJO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0FDZk47QURpQk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDZlI7QURpQlE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUNmVjtBRG1CTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ2pCUjtBRG9CTTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNsQlI7QUR3QkE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ3JCRjtBRHVCRTtFQUNJLG9CQUFBO0FDckJOO0FEd0JFO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtBQ3RCTjtBRHlCTTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUN2QlY7QUQyQkU7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0RUFBQTtBQ3pCTjtBRDJCTTtFQUNJLHVCQUFBO0FDekJWO0FEOEJBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEVBQUE7QUMzQkY7QUQ2QkU7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQzNCTjtBRDhCRTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDNUJOO0FEOEJNO0VBQ0ksV0FBQTtBQzVCVjtBRGdDRTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQzlCTjtBRGdDTTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDOUJWO0FEb0NNO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2xDVjtBRHNDRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDcENOO0FEc0NNO0VBQ0ksWUFBQTtBQ3BDVjtBRHdDRTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDRFQUFBO0FDdkNOO0FEeUNNO0VBQ0ksV0FBQTtBQ3ZDViIsImZpbGUiOiJzcmMvYXBwL3dlYi1ydGMvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1wYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gIC5zaWRlYmFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5yb29tcy1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgIC5yb29tLWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgLnJvb20tYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNWVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucm9vbS1uYW1lLWNvbnRhaW5lciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkLXJvb20tY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wYWdlLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC52aWRlby1hdWRpby1jYWxsLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcblxuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC52aWRlby1jYWxsLWljb24tY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuYXVkaW8tY2FsbC1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWVzc2FnZS1saXN0LWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAxOHB4IDAgMThweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gICAgICAubWVzc2FnZS1mdWxsLXdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuICAgICAgICAubWVzc2FnZS1jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MCwgMjQwKTtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VudC1ieS1tZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWVzc2FnZS1zZW5kLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMThweCAxOHB4IDAgMThweDtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIC4xMik7XG5cbiAgICAgIC5tc2ctaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTA4ZjhmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgICAgICB0ZXh0LWluZGVudDogMTJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnNlbmQtYnRuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udmlkZW9zLWNvbnRhaW5lci1mdWxsc2NyZWVuIHtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuXG4gICoge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cblxuICAucmVtb3RlLXZpZGVvLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcblxuXG4gICAgICB2aWRlbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgfVxuXG4gIC5sb2NhbC12aWRlby1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICAgICAgYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcblxuICAgICAgdmlkZW8ge1xuICAgICAgICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG59XG5cbi52aWRlb3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG5cbiAgLnZpZGVvcy1lbGVtZXRzLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBoZWlnaHQ6IDE4OHB4O1xuICB9XG5cbiAgLmZ1bGwtc2NyZWVuLWJ0bi1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICB6LWluZGV4OiA1O1xuXG4gICAgICAuZnVsbC1zY3JlZW4tYnRuIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgfVxuXG4gIC5jYWxsLW9wdGlvbnMtY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6IDQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG8gMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICBncmlkLWdhcDogOHB4O1xuXG4gICAgICAudmlkZW8tYnRuLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMjtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZjYTQ0O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAudmlkZW8tYnRuIHt9XG4gICAgICB9XG5cblxuICAgICAgLmF1ZGlvLWJ0bi1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzM7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1ZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc2Y2E0NDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhaW50LW9yZGVyOiA4cHg7XG4gICAgICB9XG4gIH1cblxuICAucmVtb3RlLXZpZGVvLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgdmlkZW8ge1xuICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cbiAgfVxuXG4gIC5sb2NhbC12aWRlby1jb250YWluZXIge1xuICAgICAgLy8gcGFkZGluZzogMnB4O1xuICAgICAgei1pbmRleDogMztcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcblxuICAgICAgdmlkZW8ge1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIC8vIGhlaWdodDogODBweDtcbiAgICAgIH1cbiAgfVxufSIsIi5jaGF0LXBhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAuc2lkZWJhci1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5zaWRlYmFyLWNvbnRhaW5lciAucm9vbXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmNoYXQtcGFnZS1jb250YWluZXIgLnNpZGViYXItY29udGFpbmVyIC5yb29tcy1jb250YWluZXIgLnJvb20tY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5zaWRlYmFyLWNvbnRhaW5lciAucm9vbXMtY29udGFpbmVyIC5yb29tLWNvbnRhaW5lciAucm9vbS1hdmF0YXItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5zaWRlYmFyLWNvbnRhaW5lciAucm9vbXMtY29udGFpbmVyIC5yb29tLWNvbnRhaW5lciAucm9vbS1hdmF0YXItY29udGFpbmVyIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5zaWRlYmFyLWNvbnRhaW5lciAucm9vbXMtY29udGFpbmVyIC5yb29tLWNvbnRhaW5lciAucm9vbS1uYW1lLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAuc2lkZWJhci1jb250YWluZXIgLmFkZC1yb29tLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50LWNvbnRhaW5lciAudmlkZW8tYXVkaW8tY2FsbC1jb250YWluZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50LWNvbnRhaW5lciAudmlkZW8tYXVkaW8tY2FsbC1jb250YWluZXIgLmljb24tY29udGFpbmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50LWNvbnRhaW5lciAudmlkZW8tYXVkaW8tY2FsbC1jb250YWluZXIgLnZpZGVvLWNhbGwtaWNvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50LWNvbnRhaW5lciAudmlkZW8tYXVkaW8tY2FsbC1jb250YWluZXIgLmF1ZGlvLWNhbGwtaWNvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50LWNvbnRhaW5lciAubWVzc2FnZS1saXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxOHB4IDAgMThweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xufVxuLmNoYXQtcGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudC1jb250YWluZXIgLm1lc3NhZ2UtbGlzdC1jb250YWluZXIgLm1lc3NhZ2UtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50LWNvbnRhaW5lciAubWVzc2FnZS1saXN0LWNvbnRhaW5lciAubWVzc2FnZS1mdWxsLXdpZHRoIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQtY29udGFpbmVyIC5tZXNzYWdlLWxpc3QtY29udGFpbmVyIC5tZXNzYWdlLWZ1bGwtd2lkdGggLnNlbnQtYnktbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNoYXQtcGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudC1jb250YWluZXIgLm1lc3NhZ2Utc2VuZC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxOHB4IDE4cHggMCAxOHB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQtY29udGFpbmVyIC5tZXNzYWdlLXNlbmQtY29udGFpbmVyIC5tc2ctaW5wdXQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTA4ZjhmO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB0ZXh0LWluZGVudDogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uY2hhdC1wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50LWNvbnRhaW5lciAubWVzc2FnZS1zZW5kLWNvbnRhaW5lciAubXNnLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNoYXQtcGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudC1jb250YWluZXIgLm1lc3NhZ2Utc2VuZC1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jaGF0LXBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQtY29udGFpbmVyIC5tZXNzYWdlLXNlbmQtY29udGFpbmVyIC5zZW5kLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnZpZGVvcy1jb250YWluZXItZnVsbHNjcmVlbiB7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cbi52aWRlb3MtY29udGFpbmVyLWZ1bGxzY3JlZW4gKiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnZpZGVvcy1jb250YWluZXItZnVsbHNjcmVlbiAucmVtb3RlLXZpZGVvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG4udmlkZW9zLWNvbnRhaW5lci1mdWxsc2NyZWVuIC5yZW1vdGUtdmlkZW8tY29udGFpbmVyIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4udmlkZW9zLWNvbnRhaW5lci1mdWxsc2NyZWVuIC5sb2NhbC12aWRlby1jb250YWluZXIge1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICByaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuLnZpZGVvcy1jb250YWluZXItZnVsbHNjcmVlbiAubG9jYWwtdmlkZW8tY29udGFpbmVyIHZpZGVvIHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi52aWRlb3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG59XG4udmlkZW9zLWNvbnRhaW5lciAudmlkZW9zLWVsZW1ldHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDE4OHB4O1xufVxuLnZpZGVvcy1jb250YWluZXIgLmZ1bGwtc2NyZWVuLWJ0bi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHotaW5kZXg6IDU7XG59XG4udmlkZW9zLWNvbnRhaW5lciAuZnVsbC1zY3JlZW4tYnRuLWNvbnRhaW5lciAuZnVsbC1zY3JlZW4tYnRuIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udmlkZW9zLWNvbnRhaW5lciAuY2FsbC1vcHRpb25zLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1nYXA6IDhweDtcbn1cbi52aWRlb3MtY29udGFpbmVyIC5jYWxsLW9wdGlvbnMtY29udGFpbmVyIC52aWRlby1idG4tY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDIvMjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2Y2E0NDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlkZW9zLWNvbnRhaW5lciAuY2FsbC1vcHRpb25zLWNvbnRhaW5lciAuYXVkaW8tYnRuLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAzLzM7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmNhNDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWludC1vcmRlcjogOHB4O1xufVxuLnZpZGVvcy1jb250YWluZXIgLnJlbW90ZS12aWRlby1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnZpZGVvcy1jb250YWluZXIgLnJlbW90ZS12aWRlby1jb250YWluZXIgdmlkZW8ge1xuICB3aWR0aDogMjUwcHg7XG59XG4udmlkZW9zLWNvbnRhaW5lciAubG9jYWwtdmlkZW8tY29udGFpbmVyIHtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuLnZpZGVvcy1jb250YWluZXIgLmxvY2FsLXZpZGVvLWNvbnRhaW5lciB2aWRlbyB7XG4gIHdpZHRoOiA4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/web-rtc/components/chat/chat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/web-rtc/components/chat/chat.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/room.service */ "./src/app/web-rtc/services/room.service.ts");
/* harmony import */ var _services_rtc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rtc.service */ "./src/app/web-rtc/services/rtc.service.ts");





let ChatComponent = class ChatComponent {
    constructor(cdr, rooms, rtcService) {
        this.cdr = cdr;
        this.rooms = rooms;
        this.rtcService = rtcService;
        this.isFullScreen = false;
        this.showingStream = false;
        this.messages = Array();
        this.RoomsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.dragPosition = { x: 0, y: 0 };
        this.rooms.getRooms().subscribe(x => this.RoomsSubject.next(x));
        this.rtcService.getConnectedObservable().subscribe(connected => this.showStreaming(connected));
    }
    ngOnInit() {
        this.rtcService.getPeerMessages().subscribe(peerMessage => {
            this.messages.push({ sentByMe: false, message: peerMessage.message });
            this.audioPlayerRef.nativeElement.play();
        });
    }
    sendMessage(messageInput) {
        const message = messageInput.value;
        messageInput.value = '';
        if (message.trim() !== '') {
            this.rtcService.sendPeerMessage({ message });
            this.messages.push({ sentByMe: true, message });
        }
    }
    createRoom() {
        this.rooms.createRoom('New Room');
    }
    joinRoom(roomId) {
        this.rooms.joinRoom(roomId);
    }
    startVideoCall() {
        this.rtcService.toggleVideo();
        this.rtcService.toggleAudio();
    }
    startAudioCall() {
        this.rtcService.toggleAudio();
    }
    toggleVideo() {
        this.rtcService.toggleVideo();
    }
    showStreaming(connected) {
        if (connected) {
            this.rtcService.showVideo(this.localVideoRef.nativeElement, this.remoteVideoRef.nativeElement);
            this.videosContainer.nativeElement.style.display = 'flex';
        }
        else {
            this.videosContainer.nativeElement.style.display = 'none';
        }
    }
    toggleFullscreen() {
        if (!this.isFullScreen) {
            this.dragPosition = { x: 0, y: 0 };
            this.videosContainer.nativeElement.classList.add('videos-container-fullscreen');
        }
        else {
            this.videosContainer.nativeElement.classList.remove('videos-container-fullscreen');
        }
        this.isFullScreen = !this.isFullScreen;
    }
};
ChatComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] },
    { type: _services_rtc_service__WEBPACK_IMPORTED_MODULE_4__["RTCService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioOption', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChatComponent.prototype, "audioPlayerRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('remoteVideo', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChatComponent.prototype, "remoteVideoRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('localVideo', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChatComponent.prototype, "localVideoRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videosContainer', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChatComponent.prototype, "videosContainer", void 0);
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/web-rtc/components/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/web-rtc/components/chat/chat.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"], _services_rtc_service__WEBPACK_IMPORTED_MODULE_4__["RTCService"]])
], ChatComponent);



/***/ }),

/***/ "./src/app/web-rtc/services/encryption.service.ts":
/*!********************************************************!*\
  !*** ./src/app/web-rtc/services/encryption.service.ts ***!
  \********************************************************/
/*! exports provided: EncryptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionService", function() { return EncryptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tweetnacl-ts */ "./node_modules/tweetnacl-ts/es/nacl.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




let EncryptionService = class EncryptionService {
    constructor() {
        this.keyPair = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["box_keyPair"])();
        this.nonce = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["randomBytes"])(24);
        this.signKeyPair = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["sign_keyPair"])();
        this.secret = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["randomBytes"])(32 /* Key */);
    }
    encryptMessage(message) {
        var decoded;
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isString"])(message)) {
            decoded = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["decodeUTF8"])(message);
        }
        else {
            decoded = message;
        }
        const encryptedMessage = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["box"])(decoded, this.nonce, this.peerPublicKey, this.keyPair.secretKey);
        // const encryptedMessage = secretbox(decoded, this.nonce, decodeBase64('5U9kClQfILAXvan+AaoE3APEpvllHa022pM9EqkxTAM='));
        return { message: encryptedMessage, nonce: this.nonce };
    }
    decryptMessage(message) {
        const msg = this.objectToUInt8Array(message.message);
        const nonce = this.objectToUInt8Array(message.nonce);
        const payload = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["box_open"])(msg, nonce, this.peerPublicKey, this.keyPair.secretKey);
        // const payload = secretbox_open(msg, nonce, decodeBase64('5U9kClQfILAXvan+AaoE3APEpvllHa022pM9EqkxTAM='));
        const utf8 = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["encodeUTF8"])(payload);
        return utf8;
    }
    symetricEncrypt(message) {
        var decoded;
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isString"])(message)) {
            decoded = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["decodeUTF8"])(message);
        }
        else {
            decoded = message;
        }
        const encryptedMessage = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["secretbox"])(decoded, this.nonce, this.secret);
        return { message: encryptedMessage, nonce: this.nonce };
    }
    symetricDecrypt(message) {
        const msg = this.objectToUInt8Array(message.message);
        const nonce = this.objectToUInt8Array(message.nonce);
        const payload = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["secretbox_open"])(msg, nonce, this.secret);
        const utf8 = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["encodeUTF8"])(payload);
        return utf8;
    }
    getSymetricKey() {
        return this.encryptMessage(this.secret).message;
    }
    setSymetricKey(secret) {
        this.secret = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["decodeUTF8"])(this.decryptMessage(secret));
    }
    getPublicKey() {
        return this.keyPair.publicKey;
    }
    setPeerPublicKey(key) {
        this.peerPublicKey = key;
    }
    stringToUint8Array(string) {
        const decoded = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["decodeUTF8"])(string);
        return decoded;
    }
    uInt8ArrayToString(array) {
        const decoded = Object(tweetnacl_ts__WEBPACK_IMPORTED_MODULE_2__["encodeUTF8"])(array);
        return decoded;
    }
    objectToUInt8Array(object) {
        var temp = [];
        Object.entries(object).forEach(([key, val]) => {
            temp.push(val);
        });
        return Uint8Array.from(temp);
    }
};
EncryptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EncryptionService);



/***/ }),

/***/ "./src/app/web-rtc/services/room.service.ts":
/*!**************************************************!*\
  !*** ./src/app/web-rtc/services/room.service.ts ***!
  \**************************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _signaling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signaling.service */ "./src/app/web-rtc/services/signaling.service.ts");




let RoomService = class RoomService {
    constructor(signaling) {
        this.signaling = signaling;
        this.rooms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.signaling.connect();
        this.signaling.emit({ event: 'rooms', data: {} });
        this.signaling.onEvent('new_room').subscribe((data) => this.addRoom(data));
        this.signaling.onEvent('room_created').subscribe(() => { });
    }
    joinRoom(id) {
        this.signaling.emit({ event: 'join_room', data: { id } });
    }
    getRooms() {
        return this.rooms.asObservable();
    }
    createRoom(name) {
        this.signaling.emit({ event: 'new_room', data: { name } });
    }
    addRoom(room) {
        const newRooms = this.rooms.getValue();
        newRooms.push(room);
        this.rooms.next(newRooms);
    }
};
RoomService.ctorParameters = () => [
    { type: _signaling_service__WEBPACK_IMPORTED_MODULE_3__["SignalingService"] }
];
RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signaling_service__WEBPACK_IMPORTED_MODULE_3__["SignalingService"]])
], RoomService);



/***/ }),

/***/ "./src/app/web-rtc/services/rtc.service.ts":
/*!*************************************************!*\
  !*** ./src/app/web-rtc/services/rtc.service.ts ***!
  \*************************************************/
/*! exports provided: RTCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTCService", function() { return RTCService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _signaling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signaling.service */ "./src/app/web-rtc/services/signaling.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room.service */ "./src/app/web-rtc/services/room.service.ts");
/* harmony import */ var _encryption_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encryption.service */ "./src/app/web-rtc/services/encryption.service.ts");






let RTCService = class RTCService {
    constructor(encryptionService, rooms, signaling) {
        this.encryptionService = encryptionService;
        this.rooms = rooms;
        this.signaling = signaling;
        this.connectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.iceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.inboundIceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.peerConnectionMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.streaming = false;
        this.offerSide = false;
        this.offerOptions = {
            offerToReceiveAudio: true,
            offerToReceiveVideo: true,
        };
        this.signaling.connect();
        this.signaling.onEvent('new_room').subscribe((data) => { });
        this.rooms.getRooms().subscribe(rooms => { });
        this.signaling.onEvent('user_joined').subscribe(() => this.sendOffer());
        this.signaling.onEvent('receive_offer').subscribe((offer) => {
            const receivedOffer = new RTCSessionDescription(JSON.parse(offer));
            this.setOffer(receivedOffer);
        });
        this.signaling.onEvent('receive_answer').subscribe(answer => {
            const receivedAnswer = new RTCSessionDescription(JSON.parse(answer));
            this.setAnswer(receivedAnswer);
        });
        this.signaling.onEvent('receive_ice').subscribe(ice => this.inboundIceSubject.next(new RTCIceCandidate(JSON.parse(ice))));
    }
    sendPeerMessage(message) {
        // const encMessage = this.encryptionService.encryptMessage(JSON.stringify(message));
        const encMessage = this.encryptionService.symetricEncrypt(JSON.stringify(message));
        // const encMessage = this.encryptionService.encryptAndSignMessage(JSON.stringify(message));
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        // const sendData = {
        //   message: decoder.decode(encMessage.message),
        //   nonce: decoder.decode(encMessage.nonce)
        // };
        // this.dataChannel.send(encMessage.message);
        // this.dataChannel.send(JSON.stringify(encMessage));
        const json = JSON.stringify(encMessage);
        const binary = encoder.encode(json);
        this.dataChannel.send(binary);
    }
    getConnectedObservable() {
        return this.connectedSubject.asObservable();
    }
    showVideo(local, remote) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            local.srcObject = this.localStream;
            remote.srcObject = this.remoteStream;
        });
    }
    setOffer(offer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.peerConnection) {
                yield this.createRTCPeerConnection();
            }
            this.localStream.getTracks().forEach(track => {
                try {
                    this.peerConnection.addTrack(track, this.localStream);
                }
                catch (ex) { }
            });
            yield this.peerConnection.setRemoteDescription(offer);
            const answer = yield this.peerConnection.createAnswer(this.offerOptions);
            this.peerConnection.setLocalDescription(answer);
            this.signaling.emit({ event: 'send_answer', data: answer });
            this.findIceCandidate();
            this.iceSubject.subscribe(ice => this.signaling.emit({ event: 'send_ice', data: ice }));
            return answer;
        });
    }
    sendOffer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.offerSide = true;
            if (!this.peerConnection) {
                yield this.createRTCPeerConnection();
            }
            this.localStream.getTracks().forEach(track => {
                try {
                    this.peerConnection.addTrack(track, this.localStream);
                }
                catch (ex) { }
            });
            const offer = yield this.peerConnection.createOffer(this.offerOptions);
            this.peerConnection.setLocalDescription(offer);
            this.signaling.emit({ event: 'send_offer', data: offer });
            this.findIceCandidate();
            this.iceSubject.subscribe(ice => this.signaling.emit({ event: 'send_ice', data: ice }));
            return offer;
        });
    }
    getLocalStream() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.localStream)
                this.localStream = yield navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            const devices = yield navigator.mediaDevices.enumerateDevices();
            devices.forEach(device => console.log(device));
            return this.localStream;
        });
    }
    listenToIceCandidates() {
        return this.iceSubject.asObservable();
    }
    addIce(ice) {
        this.inboundIceSubject.next(ice);
    }
    setAnswer(answer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.peerConnection.setRemoteDescription(answer);
        });
    }
    sendMessage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.dataChannel && this.dataChannel.readyState === "open") {
                this.dataChannel.send(message);
            }
        });
    }
    sendStream() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            (yield this.getLocalStream()).getTracks().forEach(track => {
                try {
                    this.peerConnection.addTrack(track, this.localStream);
                }
                catch (ex) {
                }
            });
            this.streaming = true;
        });
    }
    toggleVideo() {
        this.localStream.getTracks().forEach((track) => {
            if (track.kind === 'video') {
                track.enabled = !track.enabled;
            }
        });
    }
    toggleAudio() {
        this.localStream.getTracks().forEach((track) => {
            if (track.kind === 'audio') {
                track.enabled = !track.enabled;
            }
        });
    }
    getPeerMessages() {
        return this.peerConnectionMessageSubject.asObservable();
    }
    findIceCandidate() {
        this.peerConnection.onicecandidate = (ice) => {
            if (ice.candidate) {
                this.iceSubject.next(ice.candidate);
                return ice.candidate;
            }
        };
    }
    createDataChannel() {
        this.dataChannel = this.peerConnection.createDataChannel("sendChannel");
        this.dataChannel.onopen = (e) => {
            this.dataChannel.binaryType = 'arraybuffer';
            console.log('SENT PUBLIC KEY');
            console.log(this.encryptionService.getPublicKey());
            this.dataChannel.send(this.encryptionService.getPublicKey());
        };
        this.dataChannel.onclose = () => { };
        this.dataChannel.onmessage = (e) => {
            if (firstMessage) {
                console.log('RECEIVED PUBLIC KEY');
                console.log(e.data);
                const peerPublicKey = new Uint8Array(e.data);
                this.encryptionService.setPeerPublicKey(peerPublicKey);
                // this.dataChannel.send(this.encryptionService.getSymetricKey());
                firstMessage = false;
            }
            else if (!hasSymetric) {
                console.log('SECRET KEY');
                console.log(e.data);
                this.encryptionService.setSymetricKey(e.data);
                hasSymetric = true;
                return;
            }
            else {
                const decoder = new TextDecoder();
                const decodedData = decoder.decode(e.data);
                const message = JSON.parse(decodedData);
                // const decMessage = this.encryptionService.decryptMessage(message);
                const decMessage = this.encryptionService.symetricDecrypt(message);
                this.peerConnectionMessageSubject.next(JSON.parse(decMessage));
            }
        };
    }
    waitForDataChannel() {
        this.peerConnection.ondatachannel = (event) => {
            this.dataChannel = event.channel;
            this.dataChannel.onopen = (e) => {
                this.dataChannel.binaryType = 'arraybuffer';
            };
            this.dataChannel.onclose = () => { };
            this.dataChannel.onmessage = (e) => {
                if (firstMessage) {
                    console.log('RECEIVED PUBLIC KEY');
                    console.log(e.data);
                    const peerPublicKey = new Uint8Array(e.data);
                    this.encryptionService.setPeerPublicKey(peerPublicKey);
                    console.log('SECRET KEY');
                    console.log(this.encryptionService.getSymetricKey());
                    this.dataChannel.send(this.encryptionService.getSymetricKey());
                    firstMessage = false;
                }
                else {
                    const decoder = new TextDecoder();
                    const decodedData = decoder.decode(e.data);
                    const message = JSON.parse(decodedData);
                    // const decMessage = this.encryptionService.decryptMessage(message);
                    const decMessage = this.encryptionService.symetricDecrypt(message);
                    this.peerConnectionMessageSubject.next(JSON.parse(decMessage));
                }
            };
        };
    }
    createRTCPeerConnection() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getLocalStream();
            const configurations = {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' }
                ]
            };
            this.peerConnection = new RTCPeerConnection(configurations);
            this.peerConnection.ontrack = (event) => {
                this.remoteStream = event.streams[0];
            };
            if (this.offerSide) {
                this.createDataChannel();
            }
            else {
                this.waitForDataChannel();
            }
            this.peerConnection.onicegatheringstatechange = (event) => {
                if (this.peerConnection.iceGatheringState === 'gathering') {
                    this.inboundIceSubject.subscribe(ice => {
                        this.peerConnection.addIceCandidate(ice);
                    });
                }
            };
            this.peerConnection.oniceconnectionstatechange = (event) => {
                if (this.peerConnection.iceConnectionState === 'connected') {
                    if (!this.streaming) {
                        this.sendStream();
                    }
                    this.connectedSubject.next(true);
                }
            };
        });
    }
};
RTCService.ctorParameters = () => [
    { type: _encryption_service__WEBPACK_IMPORTED_MODULE_5__["EncryptionService"] },
    { type: _room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] },
    { type: _signaling_service__WEBPACK_IMPORTED_MODULE_2__["SignalingService"] }
];
RTCService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_encryption_service__WEBPACK_IMPORTED_MODULE_5__["EncryptionService"], _room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"], _signaling_service__WEBPACK_IMPORTED_MODULE_2__["SignalingService"]])
], RTCService);

var firstMessage = true;
var hasSymetric = false;


/***/ }),

/***/ "./src/app/web-rtc/services/signaling.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/web-rtc/services/signaling.service.ts ***!
  \*******************************************************/
/*! exports provided: SignalingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalingService", function() { return SignalingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




const URL = 'http://localhost:3000';
let SignalingService = class SignalingService {
    constructor() {
        this.connected = false;
    }
    connect() {
        if (!this.connected) {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(URL);
            this.connected = true;
        }
    }
    emit(event) {
        this.socket.emit(event.event, JSON.stringify(event.data));
    }
    onEvent(eventName) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            this.socket.on(eventName, (data) => observer.next(data));
        });
    }
};
SignalingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SignalingService);



/***/ }),

/***/ "./src/app/web-rtc/services/user.service.ts":
/*!**************************************************!*\
  !*** ./src/app/web-rtc/services/user.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _signaling_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signaling.service */ "./src/app/web-rtc/services/signaling.service.ts");




let UserService = class UserService {
    constructor(signaling) {
        this.signaling = signaling;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.signaling.connect();
        this.signaling.onEvent('new_user').subscribe((data) => this.user.next(data));
    }
    getUser() {
        return this.user.asObservable();
    }
    createUser(name) {
        this.signaling.emit({ event: 'new_user', data: {} });
    }
};
UserService.ctorParameters = () => [
    { type: _signaling_service__WEBPACK_IMPORTED_MODULE_3__["SignalingService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signaling_service__WEBPACK_IMPORTED_MODULE_3__["SignalingService"]])
], UserService);



/***/ }),

/***/ "./src/app/web-rtc/web-rtc.module.ts":
/*!*******************************************!*\
  !*** ./src/app/web-rtc/web-rtc.module.ts ***!
  \*******************************************/
/*! exports provided: WebRTCModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRTCModule", function() { return WebRTCModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/room.service */ "./src/app/web-rtc/services/room.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./src/app/web-rtc/services/user.service.ts");
/* harmony import */ var _services_rtc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/rtc.service */ "./src/app/web-rtc/services/rtc.service.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/web-rtc/components/chat/chat.component.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/web-rtc/components/auth/auth.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");












let WebRTCModule = class WebRTCModule {
};
WebRTCModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"], _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"]
        ],
        providers: [_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_rtc_service__WEBPACK_IMPORTED_MODULE_5__["RTCService"]],
        exports: [
            _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"]
        ]
    })
], WebRTCModule);



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lisomatrix\Desktop\Signaling\Chat\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map