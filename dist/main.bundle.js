webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__ = __webpack_require__("../../../../../src/app/services/user-access-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_default_default_component__ = __webpack_require__("../../../../../src/app/layouts/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_extra_extra_component__ = __webpack_require__("../../../../../src/app/layouts/extra/extra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_default_pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_default_pages_groups_groups_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_default_pages_transactions_transactions_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_default_pages_requests_requests_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_default_pages_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_default_pages_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_default_pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_default_pages_simulation_simulation_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/simulation/simulation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_extra_pages_signin_signin_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_extra_pages_signup_signup_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_extra_pages_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_extra_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_extra_pages_page_404_page_404_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_extra_pages_page_500_page_500_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var defaultRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__pages_default_pages_dashboard_dashboard_component__["a" /* PageDashboardComponent */] },
    { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_6__pages_default_pages_groups_groups_component__["a" /* PageGroupsComponent */] },
    { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_7__pages_default_pages_transactions_transactions_component__["a" /* PageTransactionsComponent */] },
    { path: 'requests', component: __WEBPACK_IMPORTED_MODULE_8__pages_default_pages_requests_requests_component__["a" /* PageRequestsComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__pages_default_pages_profile_profile_component__["a" /* PageProfileComponent */] },
    { path: 'simulation', component: __WEBPACK_IMPORTED_MODULE_12__pages_default_pages_simulation_simulation_component__["a" /* PageSimulationComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_10__pages_default_pages_aboutus_aboutus_component__["a" /* PageAboutusComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pages_default_pages_not_found_not_found_component__["a" /* PageNotFoundComponent */] },
];
var extraRoutes = [
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_13__pages_extra_pages_signin_signin_component__["a" /* PageSigninComponent */] },
    {
        path: 'sign-up',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_extra_pages_signup_signup_component__["b" /* PageSignupComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]],
        data: {
            authGuardRedirect: 'signup'
        }
    },
    {
        path: 'forgot',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_extra_pages_forgot_forgot_component__["a" /* PageForgotComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]],
        data: {
            authGuardRedirect: 'forgot'
        }
    },
    {
        path: 'confirm',
        component: __WEBPACK_IMPORTED_MODULE_16__pages_extra_pages_confirm_confirm_component__["a" /* PageConfirmComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]],
        data: {
            authGuardRedirect: 'confirm'
        }
    },
    {
        path: 'page-404',
        component: __WEBPACK_IMPORTED_MODULE_17__pages_extra_pages_page_404_page_404_component__["a" /* Page404Component */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]],
        data: {
            authGuardRedirect: 'page404'
        }
    },
    {
        path: 'page-500',
        component: __WEBPACK_IMPORTED_MODULE_18__pages_extra_pages_page_500_page_500_component__["a" /* Page500Component */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]],
        data: {
            authGuardRedirect: 'page500'
        }
    },
];
var routes = [
    {
        path: '',
        redirectTo: '/extra-layout/sign-in',
        pathMatch: 'full'
    },
    {
        path: 'default-layout',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_default_default_component__["a" /* DefaultLayoutComponent */],
        children: defaultRoutes,
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]]
    },
    {
        path: 'extra-layout',
        component: __WEBPACK_IMPORTED_MODULE_4__layouts_extra_extra_component__["a" /* ExtraLayoutComponent */],
        children: extraRoutes
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_default_default_component__["a" /* DefaultLayoutComponent */],
        children: defaultRoutes,
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_user_access_guard_service__["a" /* UserAccessGuardService */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.getConfirmParams(window.location.href);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export translateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_access_guard_service__ = __webpack_require__("../../../../../src/app/services/user-access-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_ui_module__ = __webpack_require__("../../../../../src/app/ui/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ni_components_ni_components_module__ = __webpack_require__("../../../../../src/app/ni-components/ni-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layouts_default_default_component__ = __webpack_require__("../../../../../src/app/layouts/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layouts_extra_extra_component__ = __webpack_require__("../../../../../src/app/layouts/extra/extra.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function translateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["d" /* TranslateStaticLoader */](http, 'assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layouts_default_default_component__["a" /* DefaultLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__layouts_extra_extra_component__["a" /* ExtraLayoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routing_module__["b" /* routes */], { useHash: false }),
                __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["b" /* TranslateModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__ui_ui_module__["a" /* UIModule */],
                __WEBPACK_IMPORTED_MODULE_12__ni_components_ni_components_module__["a" /* NiComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pages_module__["a" /* PagesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_user_access_guard_service__["a" /* UserAccessGuardService */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: translateLoader,
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\" [ngClass]=\"getClasses()\" [attr.dir]=\"rtl ? 'rtl' : null\">\r\n  <horizontal-navbar [title]=\"pageTitle\" (sidebarState)=\"sidebarState()\"></horizontal-navbar>\r\n\r\n  <vertical-navbar></vertical-navbar>\r\n\r\n  <addition-navbar></addition-navbar>\r\n\r\n  <main class=\"main-content\">\r\n    <div class=\"main-content-wrap\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </main>\r\n\r\n  <div class=\"app-overlay\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultLayoutComponent = (function () {
    function DefaultLayoutComponent(_sharedService) {
        var _this = this;
        this._sharedService = _sharedService;
        this.openedSidebar = false;
        this.boxed = false;
        this.compress = false;
        this.menuStyle = 'style-3';
        this.rtl = false;
        _sharedService.changeEmitted$.subscribe(function (title) {
            _this.pageTitle = title;
        });
    }
    DefaultLayoutComponent.prototype.ngOnInit = function () { };
    DefaultLayoutComponent.prototype.getClasses = function () {
        var menu = (this.menuStyle);
        return _a = {},
            _a['menu-' + menu] = menu,
            _a['boxed'] = this.boxed,
            _a['compress-vertical-navbar'] = this.compress,
            _a['open-sidebar'] = this.openedSidebar,
            _a['rtl'] = this.rtl,
            _a;
        var _a;
    };
    DefaultLayoutComponent.prototype.sidebarState = function () {
        this.openedSidebar = !this.openedSidebar;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DefaultLayoutComponent.prototype, "openedSidebar", void 0);
    DefaultLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'default-layout',
            template: __webpack_require__("../../../../../src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/layouts.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
    var _a;
}());

//# sourceMappingURL=default.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/extra/extra.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\" [ngClass]=\"{'rtl': rtl}\" [attr.dir]=\"rtl ? 'rtl' : null\">\r\n  <main class=\"main-content\">\r\n    <div class=\"main-content-wrap\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/extra/extra.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .main-content {\n  height: 100%;\n  padding: 0; }\n  :host .main-content .main-content-wrap {\n    height: 100%;\n    padding: 0;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/extra/extra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtraLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtraLayoutComponent = (function () {
    function ExtraLayoutComponent() {
        this.rtl = false;
    }
    ExtraLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'extra-layout',
            template: __webpack_require__("../../../../../src/app/layouts/extra/extra.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/extra/extra.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraLayoutComponent);
    return ExtraLayoutComponent;
}());

//# sourceMappingURL=extra.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/layouts.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .site-container .main-content {\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 3.4375rem 0 0 15.125rem;\n  transition: padding 0.2s ease-in-out; }\n  @media (max-width: 991px) {\n    :host .site-container .main-content {\n      padding-left: 0; } }\n  :host .site-container .main-content .main-content-wrap {\n    height: calc(100% - 2.75rem); }\n\n:host .site-container .app-navbar {\n  transition: left 0.2s ease-in-out, right 0.2s ease-in-out; }\n  @media (max-width: 991px) {\n    :host .site-container .app-navbar {\n      width: 100%; } }\n\n:host .site-container.open-sidebar .app-navbar {\n  left: 15.125rem; }\n\n:host .site-container.open-sidebar .vertical-navbar {\n  left: 0; }\n  @media (max-width: 991px) {\n    :host .site-container.open-sidebar .vertical-navbar /deep/ .sidebar-overlay {\n      opacity: 1;\n      transition: 0.2s opacity 0s ease-in-out, 0s visibility 0s ease-in-out;\n      visibility: visible; } }\n\n:host .site-container.rtl .main-content {\n  padding-left: 0;\n  padding-right: 15.125rem; }\n  @media (max-width: 991px) {\n    :host .site-container.rtl .main-content {\n      padding-right: 0; } }\n\n:host .site-container.rtl.open-sidebar .app-navbar {\n  left: 0;\n  right: 15.125rem; }\n\n:host .site-container.rtl.open-sidebar .vertical-navbar {\n  right: 0; }\n\n:host .site-container.boxed {\n  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.25);\n  margin: 0 auto;\n  max-width: 1200px;\n  position: relative; }\n\n@media (min-width: 992px) {\n  :host .site-container.compress-vertical-navbar .app-navbar {\n    left: 4.125rem; }\n  :host .site-container.compress-vertical-navbar .vertical-navbar {\n    overflow: hidden;\n    transition: width 0.2s ease-in-out;\n    width: 4.125rem;\n    z-index: 9997; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .text,\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .item-badge,\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .caret {\n      opacity: 0;\n      transition: opacity 0.2s ease-in-out; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group {\n      background: rgba(37, 45, 71, 0.1);\n      transition: background 0.2s ease-in-out; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group .group-title {\n        opacity: 0;\n        transition: opacity 0.2s ease-in-out; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.has-sub.active > .sub {\n      max-height: 0; }\n    :host .site-container.compress-vertical-navbar .vertical-navbar:hover, :host .site-container.compress-vertical-navbar .vertical-navbar.show {\n      width: 15.125rem; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-logo:before, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-logo:before {\n        -webkit-transform: scale(0);\n                transform: scale(0); }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-logo:after, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-logo:after {\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .text,\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .item-badge,\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .caret, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .text,\n      :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .item-badge,\n      :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item .item-link .caret {\n        opacity: 1; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group {\n        background: none; }\n        :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group .group-title, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.menu-item-group .group-title {\n          opacity: 1; }\n      :host .site-container.compress-vertical-navbar .vertical-navbar:hover /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.has-sub.active > .sub, :host .site-container.compress-vertical-navbar .vertical-navbar.show /deep/ .vertical-navbar-wrap .app-menu .main-menu > ul .menu-item.has-sub.active > .sub {\n        max-height: 1000px; }\n  :host .site-container.compress-vertical-navbar.menu-style-2 .vertical-navbar, :host .site-container.compress-vertical-navbar.menu-style-3 .vertical-navbar, :host .site-container.compress-vertical-navbar.menu-style-4 .vertical-navbar {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  :host .site-container.compress-vertical-navbar .main-content {\n    padding-left: 4.125rem; } }\n\n@media (min-width: 992px) {\n  :host .site-container.compress-vertical-navbar.rtl .app-navbar {\n    left: 0;\n    right: 4.125rem; }\n  :host .site-container.compress-vertical-navbar.rtl .main-content {\n    padding-left: 0;\n    padding-right: 4.125rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/shared-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = (function () {
    function SharedService() {
        // Observable string sources
        this.emitChangeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    // Service message commands
    SharedService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared-service.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/auto-grow/auto-grow.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoGrowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoGrowDirective = (function () {
    function AutoGrowDirective(element) {
        this.element = element;
    }
    AutoGrowDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutoGrowDirective.prototype.ngAfterContentChecked = function () {
        this.adjust();
    };
    AutoGrowDirective.prototype.adjust = function () {
        var nativeElement = this.element.nativeElement;
        nativeElement.style.overflow = 'hidden';
        nativeElement.style.height = 'auto';
        nativeElement.style.height = nativeElement.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AutoGrowDirective.prototype, "onInput", null);
    AutoGrowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[autoGrow]',
            host: {
                '(input)': 'setHeight()'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AutoGrowDirective);
    return AutoGrowDirective;
    var _a;
}());

//# sourceMappingURL=auto-grow.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/bg/bg.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BgDirective = (function () {
    function BgDirective() {
        this.outline = false;
    }
    BgDirective.prototype.ngOnInit = function () {
        this.defaultBg = (typeof this.bg === 'string') ? this.bg : this.bg[0];
        this.hoveredBg = (typeof this.bg === 'string') ? this.bg : this.bg[1];
        this.currentBg = (!this.outline) ? this.defaultBg : 'transparent';
        this.outlineColor = this.defaultBg;
    };
    Object.defineProperty(BgDirective.prototype, "getBg", {
        get: function () {
            return this.currentBg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BgDirective.prototype, "getOutline", {
        get: function () {
            return this.outlineColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BgDirective.prototype, "getClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    BgDirective.prototype.onMouseEnter = function () {
        this.currentBg = this.hoveredBg;
    };
    BgDirective.prototype.onMouseLeave = function () {
        this.currentBg = (!this.outline) ? this.defaultBg : 'transparent';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BgDirective.prototype, "bg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BgDirective.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.background'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BgDirective.prototype, "getBg", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.borderColor'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BgDirective.prototype, "getOutline", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.custom-bg'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BgDirective.prototype, "getClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BgDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BgDirective.prototype, "onMouseLeave", null);
    BgDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[bg]'
        }),
        __metadata("design:paramtypes", [])
    ], BgDirective);
    return BgDirective;
}());

//# sourceMappingURL=bg.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/color/color.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorDirective = (function () {
    function ColorDirective() {
    }
    ColorDirective.prototype.ngOnInit = function () {
        this.defaultColor = (typeof this.color === 'string') ? this.color : this.color[0];
        this.hoveredColor = (typeof this.color === 'string') ? this.color : this.color[1];
        this.currentColor = this.defaultColor;
    };
    Object.defineProperty(ColorDirective.prototype, "getColor", {
        get: function () {
            return this.currentColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorDirective.prototype, "getClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ColorDirective.prototype.onMouseEnter = function () {
        this.currentColor = this.hoveredColor;
    };
    ColorDirective.prototype.onMouseLeave = function () {
        this.currentColor = this.defaultColor;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ColorDirective.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.color'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ColorDirective.prototype, "getColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.custom-color'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ColorDirective.prototype, "getClass", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ColorDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ColorDirective.prototype, "onMouseLeave", null);
    ColorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[color]'
        }),
        __metadata("design:paramtypes", [])
    ], ColorDirective);
    return ColorDirective;
}());

//# sourceMappingURL=color.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/directives/gradient/gradient.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradientDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GradientDirective = (function () {
    function GradientDirective() {
    }
    GradientDirective.prototype.ngOnInit = function () {
        this.firstColor = this.gradient[0];
        this.secondColor = this.gradient[1];
        this.linearGradient = 'linear-gradient(to right, ' + this.firstColor + ' 0%, ' + this.secondColor + ' 51%, ' + this.firstColor + ' 100%)';
    };
    Object.defineProperty(GradientDirective.prototype, "getGradient", {
        get: function () {
            return this.linearGradient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradientDirective.prototype, "getClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GradientDirective.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.backgroundImage'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GradientDirective.prototype, "getGradient", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.custom-gradient'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GradientDirective.prototype, "getClass", null);
    GradientDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[gradient]'
        }),
        __metadata("design:paramtypes", [])
    ], GradientDirective);
    return GradientDirective;
}());

//# sourceMappingURL=gradient.directive.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-alert/ni-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"alert\"\n  [ngClass]=\"{\n    'success-alert': color === 'success',\n    'info-alert': color === 'info',\n    'warning-alert': color === 'warning',\n    'danger-alert': color === 'danger',\n    'outline-alert': outline,\n    'with-close': close\n  }\"\n  [ngStyle]=\"{\n   'background': customColor,\n   'border-color': customColor\n  }\"\n  #alert\n>\n  <ng-content></ng-content>\n  <a href=\"#\" class=\"close\" *ngIf=\"close\" (click)=\"delete($event, alert)\"><i class=\"material-icons\">clear</i></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-alert/ni-alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin-bottom: 1.375rem; }\n  :host:last-child {\n    margin-bottom: 0; }\n  :host .alert {\n    background: #252d47;\n    border: 1px solid #252d47;\n    border-radius: 3px;\n    padding: 0.91666667rem 1.375rem;\n    position: relative; }\n    :host .alert:not(.outline-alert) {\n      color: #ffffff; }\n      :host .alert:not(.outline-alert) /deep/ a {\n        color: rgba(255, 255, 255, 0.8); }\n        :host .alert:not(.outline-alert) /deep/ a:hover {\n          color: #ffffff; }\n    :host .alert .close {\n      background: rgba(0, 0, 0, 0.1);\n      font-size: 20px;\n      line-height: 1;\n      position: absolute;\n      right: 0;\n      top: 0;\n      transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n      .rtl :host .alert .close {\n        left: 0;\n        right: auto; }\n      :host .alert .close:hover {\n        background: rgba(255, 255, 255, 0.3);\n        color: #f00; }\n      :host .alert .close .material-icons {\n        color: inherit;\n        font-size: inherit;\n        margin: 0;\n        vertical-align: top; }\n    :host .alert /deep/ .material-icons {\n      color: #2196f3;\n      margin: 0 1.375rem 0 0;\n      vertical-align: top; }\n      .rtl :host .alert /deep/ .material-icons {\n        margin: 0 0 0 1.375rem; }\n    :host .alert.success-alert {\n      background: #81C784;\n      border-color: #81C784; }\n      :host .alert.success-alert /deep/ .material-icons {\n        color: #81C784; }\n    :host .alert.info-alert {\n      background: #64B5F6;\n      border-color: #64B5F6; }\n      :host .alert.info-alert /deep/ .material-icons {\n        color: #64B5F6; }\n    :host .alert.warning-alert {\n      background: #FFB74D;\n      border-color: #FFB74D; }\n      :host .alert.warning-alert /deep/ .material-icons {\n        color: #FFB74D; }\n    :host .alert.danger-alert {\n      background: #e24d4d;\n      border-color: #e24d4d; }\n      :host .alert.danger-alert /deep/ .material-icons {\n        color: #e24d4d; }\n    :host .alert.outline-alert {\n      background: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-alert/ni-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiAlertComponent = (function () {
    function NiAlertComponent() {
        this.color = '';
        this.customColor = '';
        this.outline = false;
        this.close = false;
    }
    NiAlertComponent.prototype.ngOnInit = function () { };
    NiAlertComponent.prototype.delete = function (event, alert) {
        event.preventDefault();
        alert.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiAlertComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiAlertComponent.prototype, "customColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiAlertComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiAlertComponent.prototype, "close", void 0);
    NiAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-alert',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-alert/ni-alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-alert/ni-alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiAlertComponent);
    return NiAlertComponent;
}());

//# sourceMappingURL=ni-alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-badge/ni-badge.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"badge\" [ngClass]=\"getClasses()\" [ngStyle]=\"getStyles()\">\n  <div class=\"arrow\" [ngClass]=\"getArrowClasses()\" *ngIf=\"arrow\"></div>\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-badge/ni-badge.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n  :host .badge {\n    background: #252d47;\n    border: 1px solid #252d47;\n    color: #ffffff;\n    font-size: .75rem;\n    font-family: \"Josefin Sans\", sans-serif;\n    line-height: 1.375;\n    min-width: 20px;\n    padding: 1px 6px;\n    position: relative;\n    text-align: center; }\n    :host .badge .arrow {\n      border: 6px solid transparent;\n      height: 0;\n      position: absolute;\n      width: 0; }\n      :host .badge .arrow.arrow-top {\n        border-bottom-color: inherit;\n        bottom: 100%;\n        left: 50%;\n        margin-left: -6px; }\n      :host .badge .arrow.arrow-right {\n        border-left-color: inherit;\n        left: 100%;\n        margin-top: -6px;\n        top: 50%; }\n      :host .badge .arrow.arrow-bottom {\n        border-top-color: inherit;\n        left: 50%;\n        margin-left: -6px;\n        top: 100%; }\n      :host .badge .arrow.arrow-left {\n        border-right-color: inherit;\n        margin-top: -6px;\n        right: 100%;\n        top: 50%; }\n    :host .badge.border-radius-badge {\n      border-radius: 10px; }\n      :host .badge.border-radius-badge .arrow.arrow-right {\n        margin-left: -2px; }\n      :host .badge.border-radius-badge .arrow.arrow-left {\n        margin-right: -2px; }\n    :host .badge.success-badge {\n      background: #81C784;\n      border-color: #81C784; }\n    :host .badge.info-badge {\n      background: #64B5F6;\n      border-color: #64B5F6; }\n    :host .badge.warning-badge {\n      background: #FFB74D;\n      border-color: #FFB74D; }\n    :host .badge.danger-badge {\n      background: #e24d4d;\n      border-color: #e24d4d; }\n    :host .badge.outline-badge {\n      background: none !important;\n      color: inherit; }\n      :host .badge.outline-badge.success-badge {\n        color: #81C784; }\n      :host .badge.outline-badge.info-badge {\n        color: #64B5F6; }\n      :host .badge.outline-badge.warning-badge {\n        color: #FFB74D; }\n      :host .badge.outline-badge.danger-badge {\n        color: #e24d4d; }\n    :host .badge.custom-badge:not(.outline-badge) {\n      color: #fff !important; }\n    :host .badge.arrow-right-badge {\n      margin-right: 6px; }\n    :host .badge.arrow-left-badge {\n      margin-left: 6px; }\n    :host .badge.large-badge {\n      padding: 6px 20px; }\n      :host .badge.large-badge.border-radius-badge {\n        border-radius: 15px; }\n    :host .badge.medium-badge {\n      padding: 3px 12px; }\n      :host .badge.medium-badge.border-radius-badge {\n        border-radius: 12px; }\n  md-icon :host .badge {\n    bottom: 100%;\n    left: 100%;\n    margin: 0 0 -10px -10px;\n    position: absolute;\n    z-index: 1; }\n    md-icon :host .badge.top-left {\n      left: auto;\n      margin: 0 -10px -10px 0;\n      right: 100%; }\n    md-icon :host .badge.bottom-left {\n      bottom: auto;\n      left: auto;\n      margin: -10px -10px 0 0;\n      right: 100%;\n      top: 100%; }\n    md-icon :host .badge.bottom-right {\n      bottom: auto;\n      margin: -10px 0 0 -10px;\n      top: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-badge/ni-badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiBadgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiBadgeComponent = (function () {
    function NiBadgeComponent() {
        this.color = '';
        this.customColor = '';
        this.outline = false;
        this.borderRadius = true;
        this.arrow = '';
        this.size = '';
        this.position = '';
    }
    NiBadgeComponent.prototype.ngOnInit = function () { };
    NiBadgeComponent.prototype.getClasses = function () {
        return {
            'success-badge': this.color === 'success',
            'info-badge': this.color === 'info',
            'warning-badge': this.color === 'warning',
            'danger-badge': this.color === 'danger',
            'custom-badge': this.customColor,
            'outline-badge': this.outline,
            'border-radius-badge': this.borderRadius,
            'arrow-right-badge': this.arrow === 'right',
            'arrow-left-badge': this.arrow === 'left',
            'large-badge': this.size === 'large',
            'medium-badge': this.size === 'medium',
            'top-left': this.position === 'top-left',
            'bottom-left': this.position === 'bottom-left',
            'bottom-right': this.position === 'bottom-right'
        };
    };
    NiBadgeComponent.prototype.getStyles = function () {
        return {
            'background-color': this.customColor,
            'border-color': this.customColor,
            'color': this.customColor
        };
    };
    NiBadgeComponent.prototype.getArrowClasses = function () {
        return {
            'arrow-top': this.arrow === 'top',
            'arrow-right': this.arrow === 'right',
            'arrow-bottom': this.arrow === 'bottom',
            'arrow-left': this.arrow === 'left'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "customColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiBadgeComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiBadgeComponent.prototype, "borderRadius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "arrow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBadgeComponent.prototype, "position", void 0);
    NiBadgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-badge',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-badge/ni-badge.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-badge/ni-badge.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiBadgeComponent);
    return NiBadgeComponent;
}());

//# sourceMappingURL=ni-badge.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\" [ngClass]=\"getClasses()\">\n  <li *ngFor=\"let item of menu; let last = last\">\n    <a href=\"{{item.link}}\" *ngIf=\"item.link\"><span class=\"icon {{item.icon}}\" *ngIf=\"item.icon\"></span>{{item.title}}</a><!--\n    --><span class=\"static\" *ngIf=\"!item.link\"><span class=\"icon {{item.icon}}\" *ngIf=\"item.icon\"></span>{{item.title}}</span><!--\n    --><span class=\"separator\" *ngIf=\"!last\">{{separator}}</span>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  overflow: hidden; }\n  :host .breadcrumb {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    font-size: 1.2rem;\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n    @media (max-width: 767px) {\n      :host .breadcrumb {\n        font-size: 1rem; } }\n    :host .breadcrumb li a .icon,\n    :host .breadcrumb li .static .icon {\n      font-size: 1rem;\n      margin-right: 6px; }\n      .rtl :host .breadcrumb li a .icon, .rtl\n      :host .breadcrumb li .static .icon {\n        margin-left: 6px;\n        margin-right: 0; }\n    :host .breadcrumb li .separator {\n      color: rgba(0, 0, 0, 0.4);\n      margin: 0 0.6875rem; }\n    :host .breadcrumb.custom-1 {\n      margin: -2px -7px; }\n      @media (max-width: 767px) {\n        :host .breadcrumb.custom-1 {\n          margin-left: -2px;\n          margin-right: -2px; } }\n      :host .breadcrumb.custom-1 li {\n        margin: 2px 7px; }\n        @media (max-width: 767px) {\n          :host .breadcrumb.custom-1 li {\n            margin-left: 2px;\n            margin-right: 2px; } }\n        :host .breadcrumb.custom-1 li a,\n        :host .breadcrumb.custom-1 li .static {\n          background: #252d47;\n          border-color: #252d47;\n          color: #ffffff;\n          display: inline-block;\n          height: 36px;\n          padding: 5px 1.375rem;\n          position: relative;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n          vertical-align: top; }\n          @media (max-width: 767px) {\n            :host .breadcrumb.custom-1 li a,\n            :host .breadcrumb.custom-1 li .static {\n              height: auto;\n              padding: 2px 0.6875rem; } }\n          :host .breadcrumb.custom-1 li a:before, :host .breadcrumb.custom-1 li a:after,\n          :host .breadcrumb.custom-1 li .static:before,\n          :host .breadcrumb.custom-1 li .static:after {\n            border-style: solid;\n            border-color: transparent;\n            content: '';\n            display: block;\n            height: 0px;\n            position: absolute;\n            top: 0px;\n            transition: border-color 0.2s ease-in-out;\n            width: 0px; }\n            @media (max-width: 767px) {\n              :host .breadcrumb.custom-1 li a:before, :host .breadcrumb.custom-1 li a:after,\n              :host .breadcrumb.custom-1 li .static:before,\n              :host .breadcrumb.custom-1 li .static:after {\n                display: none; }\n                .rtl :host .breadcrumb.custom-1 li a:before, .rtl :host .breadcrumb.custom-1 li a:after, .rtl\n                :host .breadcrumb.custom-1 li .static:before, .rtl\n                :host .breadcrumb.custom-1 li .static:after {\n                  display: none !important; } }\n          :host .breadcrumb.custom-1 li a:before,\n          :host .breadcrumb.custom-1 li .static:before {\n            border-width: 36px 10px 0 0;\n            border-right-color: inherit;\n            left: -10px; }\n          :host .breadcrumb.custom-1 li a:after,\n          :host .breadcrumb.custom-1 li .static:after {\n            border-width: 0 0 36px 10px;\n            border-left-color: inherit;\n            right: -10px; }\n        :host .breadcrumb.custom-1 li a:hover {\n          color: #64b6f7; }\n        :host .breadcrumb.custom-1 li .static {\n          opacity: .6; }\n        :host .breadcrumb.custom-1 li .separator {\n          display: none; }\n        :host .breadcrumb.custom-1 li:first-child a:before,\n        :host .breadcrumb.custom-1 li:first-child .static:before {\n          display: none; }\n        .rtl :host .breadcrumb.custom-1 li:first-child a:before, .rtl\n        :host .breadcrumb.custom-1 li:first-child .static:before {\n          display: block; }\n        .rtl :host .breadcrumb.custom-1 li:first-child a:after, .rtl\n        :host .breadcrumb.custom-1 li:first-child .static:after {\n          display: none; }\n        :host .breadcrumb.custom-1 li:last-child a:after,\n        :host .breadcrumb.custom-1 li:last-child .static:after {\n          display: none; }\n        .rtl :host .breadcrumb.custom-1 li:last-child a:before, .rtl\n        :host .breadcrumb.custom-1 li:last-child .static:before {\n          display: none; }\n        .rtl :host .breadcrumb.custom-1 li:last-child a:after, .rtl\n        :host .breadcrumb.custom-1 li:last-child .static:after {\n          display: block; }\n    :host .breadcrumb.custom-2 {\n      margin: -2px -7px; }\n      @media (max-width: 767px) {\n        :host .breadcrumb.custom-2 {\n          margin-left: -2px;\n          margin-right: -2px; } }\n      :host .breadcrumb.custom-2 li {\n        margin: 2px 7px; }\n        @media (max-width: 767px) {\n          :host .breadcrumb.custom-2 li {\n            margin-left: 2px;\n            margin-right: 2px; } }\n        :host .breadcrumb.custom-2 li a,\n        :host .breadcrumb.custom-2 li .static {\n          background: #252d47;\n          border-color: #252d47;\n          color: #ffffff;\n          display: inline-block;\n          height: 36px;\n          padding: 5px 1.375rem;\n          position: relative;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out;\n          vertical-align: top; }\n          @media (max-width: 767px) {\n            :host .breadcrumb.custom-2 li a,\n            :host .breadcrumb.custom-2 li .static {\n              height: auto;\n              padding: 2px 0.6875rem; } }\n          :host .breadcrumb.custom-2 li a:before, :host .breadcrumb.custom-2 li a:after,\n          :host .breadcrumb.custom-2 li .static:before,\n          :host .breadcrumb.custom-2 li .static:after {\n            border-style: solid;\n            border-color: transparent;\n            content: '';\n            display: block;\n            height: 0px;\n            position: absolute;\n            top: 0px;\n            transition: border-color 0.2s ease-in-out;\n            width: 0px; }\n            @media (max-width: 767px) {\n              :host .breadcrumb.custom-2 li a:before, :host .breadcrumb.custom-2 li a:after,\n              :host .breadcrumb.custom-2 li .static:before,\n              :host .breadcrumb.custom-2 li .static:after {\n                display: none; } }\n          :host .breadcrumb.custom-2 li a:before,\n          :host .breadcrumb.custom-2 li .static:before {\n            border-width: 18px 0 18px 10px;\n            border-top-color: inherit;\n            border-bottom-color: inherit;\n            left: -10px; }\n            .rtl :host .breadcrumb.custom-2 li a:before, .rtl\n            :host .breadcrumb.custom-2 li .static:before {\n              border-style: solid;\n              border-color: transparent;\n              border-width: 18px 0 18px 10px;\n              border-left-color: inherit;\n              left: auto;\n              right: -10px; }\n          :host .breadcrumb.custom-2 li a:after,\n          :host .breadcrumb.custom-2 li .static:after {\n            border-width: 18px 0 18px 10px;\n            border-left-color: inherit;\n            right: -10px; }\n            .rtl :host .breadcrumb.custom-2 li a:after, .rtl\n            :host .breadcrumb.custom-2 li .static:after {\n              border-style: solid;\n              border-color: transparent;\n              border-width: 18px 0 18px 10px;\n              border-top-color: inherit;\n              border-bottom-color: inherit;\n              left: -10px;\n              right: auto; }\n        :host .breadcrumb.custom-2 li a:hover {\n          color: #64b6f7; }\n        :host .breadcrumb.custom-2 li .static {\n          opacity: .6; }\n        :host .breadcrumb.custom-2 li .separator {\n          display: none; }\n        :host .breadcrumb.custom-2 li:first-child a:before,\n        :host .breadcrumb.custom-2 li:first-child .static:before {\n          display: none; }\n        :host .breadcrumb.custom-2 li:last-child a:after,\n        :host .breadcrumb.custom-2 li:last-child .static:after {\n          display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiBreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiBreadcrumbComponent = (function () {
    function NiBreadcrumbComponent() {
        this.menu = [];
        this.separator = '/';
        this.style = 'default'; //custom1 | custom2
    }
    NiBreadcrumbComponent.prototype.ngOnInit = function () { };
    NiBreadcrumbComponent.prototype.getClasses = function () {
        return {
            'custom-1': this.style === 'custom1',
            'custom-2': this.style === 'custom2'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiBreadcrumbComponent.prototype, "menu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBreadcrumbComponent.prototype, "separator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiBreadcrumbComponent.prototype, "style", void 0);
    NiBreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-breadcrumb',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiBreadcrumbComponent);
    return NiBreadcrumbComponent;
}());

//# sourceMappingURL=ni-breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-button/ni-button.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"btn-line\" *ngIf=\"outline\" [ngStyle]=\"{'border-style': lineStyle}\"></span>\r\n<span class=\"btn-icon before-icon {{beforeIcon}}\" *ngIf=\"beforeIcon\"></span>\r\n<span class=\"btn-text\"><ng-content></ng-content></span>\r\n<span class=\"btn-icon after-icon {{afterIcon}}\" *ngIf=\"afterIcon\"></span>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-button/ni-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0;\n  border-radius: 3px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 1rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.375;\n  outline: none;\n  padding: 0.34375rem 1.375rem;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  transition: background 0.2s ease-in-out, border 0.2s ease-in-out, color 0.2s ease-in-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n  will-change: background, border, color;\n  -webkit-appearance: none; }\n  :host .btn-text {\n    margin: 0 0.34375rem;\n    min-height: 1.375rem; }\n    :host .btn-text:empty {\n      margin: 0; }\n  :host .btn-line {\n    border-width: 2px;\n    border-style: solid;\n    border-color: inherit;\n    border-radius: inherit;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  :host .btn-icon {\n    margin: 0 0.34375rem; }\n  :host.ni-btn-block {\n    display: block;\n    width: 100%; }\n  :host.ni-btn-left {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: left; }\n  :host.ni-btn-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: right; }\n  :host.ni-btn-large {\n    font-size: 1.2rem;\n    padding: 0.6875rem 2.0625rem; }\n    :host.ni-btn-large .btn-text {\n      min-height: 1.65rem; }\n  :host.ni-btn-small {\n    font-size: 0.8rem;\n    padding: 0.171875rem 0.6875rem; }\n    :host.ni-btn-small .btn-text {\n      min-height: 1.1rem; }\n  :host.ni-btn-default {\n    background: #252d47;\n    color: #ffffff; }\n    :host.ni-btn-default:hover, :host.ni-btn-default:focus {\n      background: #464d63;\n      color: #ffffff; }\n    :host.ni-btn-default.ni-btn-outline {\n      border-color: #252d47;\n      color: #252d47; }\n      :host.ni-btn-default.ni-btn-outline:hover, :host.ni-btn-default.ni-btn-outline:focus {\n        background: #252d47;\n        color: #ffffff; }\n  :host.ni-btn-accent {\n    background: #2196f3;\n    color: #ffffff; }\n    :host.ni-btn-accent:hover, :host.ni-btn-accent:focus {\n      background: #1883ef;\n      color: #ffffff; }\n    :host.ni-btn-accent.ni-btn-outline {\n      border-color: #2196f3;\n      color: #2196f3; }\n      :host.ni-btn-accent.ni-btn-outline:hover, :host.ni-btn-accent.ni-btn-outline:focus {\n        background: #2196f3;\n        color: #ffffff; }\n  :host.ni-btn-success {\n    background: #81C784;\n    color: #000; }\n    :host.ni-btn-success:hover, :host.ni-btn-success:focus {\n      background: #5eb762;\n      color: black; }\n    :host.ni-btn-success.ni-btn-outline {\n      border-color: #81C784;\n      color: #81C784; }\n      :host.ni-btn-success.ni-btn-outline:hover, :host.ni-btn-success.ni-btn-outline:focus {\n        background: #81C784;\n        color: #000; }\n  :host.ni-btn-info {\n    background: #64B5F6;\n    color: #000; }\n    :host.ni-btn-info:hover, :host.ni-btn-info:focus {\n      background: #349ef3;\n      color: black; }\n    :host.ni-btn-info.ni-btn-outline {\n      border-color: #64B5F6;\n      color: #64B5F6; }\n      :host.ni-btn-info.ni-btn-outline:hover, :host.ni-btn-info.ni-btn-outline:focus {\n        background: #64B5F6;\n        color: #000; }\n  :host.ni-btn-warning {\n    background: #FFB74D;\n    color: #000; }\n    :host.ni-btn-warning:hover, :host.ni-btn-warning:focus {\n      background: #ffa21a;\n      color: black; }\n    :host.ni-btn-warning.ni-btn-outline {\n      border-color: #FFB74D;\n      color: #FFB74D; }\n      :host.ni-btn-warning.ni-btn-outline:hover, :host.ni-btn-warning.ni-btn-outline:focus {\n        background: #FFB74D;\n        color: #000; }\n  :host.ni-btn-error {\n    background: #e24d4d;\n    color: #fff; }\n    :host.ni-btn-error:hover, :host.ni-btn-error:focus {\n      background: #d92323;\n      color: #e6e5e5; }\n    :host.ni-btn-error.ni-btn-outline {\n      border-color: #e24d4d;\n      color: #e24d4d; }\n      :host.ni-btn-error.ni-btn-outline:hover, :host.ni-btn-error.ni-btn-outline:focus {\n        background: #e24d4d;\n        color: #fff; }\n  :host.ni-btn-outline {\n    background: transparent; }\n  :host.ni-btn-gradient {\n    background-size: 200% auto; }\n    :host.ni-btn-gradient:hover, :host.ni-btn-gradient:focus {\n      background-position: right center;\n      background-size: 200% auto; }\n  :host.ni-btn-disabled {\n    cursor: not-allowed;\n    opacity: .6;\n    pointer-events: none; }\n  :host.ni-btn-icon-animation .btn-icon {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: -webkit-transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out;\n    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    will-change: transform; }\n  :host.ni-btn-icon-animation .btn-text {\n    transition: opacity 0.2s ease-in-out;\n    will-change: opacity; }\n  :host.ni-btn-icon-animation:hover .btn-icon, :host.ni-btn-icon-animation:focus .btn-icon {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  :host.ni-btn-icon-animation:hover .btn-text, :host.ni-btn-icon-animation:focus .btn-text {\n    opacity: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-button/ni-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiButtonComponent = (function () {
    function NiButtonComponent() {
        this.block = false;
        this.gradient = false;
        this.disabled = false;
        this.outline = false;
        this.align = 'center';
        this.size = 'default';
        this.type = 'default';
        this.iconAnimation = false;
    }
    NiButtonComponent.prototype.ngOnInit = function () {
        //console.log(this.disabled);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "block", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "lineStyle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "align", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiButtonComponent.prototype, "shape", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "beforeIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiButtonComponent.prototype, "afterIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiButtonComponent.prototype, "iconAnimation", void 0);
    NiButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[ni-button]',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-button/ni-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-button/ni-button.component.scss")],
            host: {
                '[class.ni-btn]': 'true',
                '[class.ni-btn-block]': 'block',
                '[class.ni-btn-left]': 'align === "left"',
                '[class.ni-btn-right]': 'align === "right"',
                '[class.ni-btn-large]': 'size === "large"',
                '[class.ni-btn-small]': 'size === "small"',
                '[class.ni-btn-default]': 'type === "default"',
                '[class.ni-btn-accent]': 'type === "accent"',
                '[class.ni-btn-info]': 'type === "info"',
                '[class.ni-btn-success]': 'type === "success"',
                '[class.ni-btn-warning]': 'type === "warning"',
                '[class.ni-btn-error]': 'type === "error"',
                '[class.ni-btn-outline]': 'outline',
                '[class.ni-btn-gradient]': 'gradient',
                '[class.ni-btn-disabled]': 'disabled',
                '[class.ni-btn-icon-animation]': 'iconAnimation',
                '[style.border-radius]': 'shape'
            }
        }),
        __metadata("design:paramtypes", [])
    ], NiButtonComponent);
    return NiButtonComponent;
}());

//# sourceMappingURL=ni-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-card/ni-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"card-wrap\"\n  [ngClass]=\"{\n    'success-card': bgColor === 'success',\n    'info-card': bgColor === 'info',\n    'warning-card': bgColor === 'warning',\n    'danger-card': bgColor === 'danger',\n    'success-color-card': color === 'success',\n    'info-color-card': color === 'info',\n    'warning-color-card': color === 'warning',\n    'danger-color-card': color === 'danger',\n    'bg-image-card': bgImage,\n    'outline-card': outline\n  }\"\n  [ngStyle]=\"{\n   'background-color': customBgColor,\n   'background-image': 'url(' + bgImage + ')',\n   'border-color': customBgColor,\n   'color': customColor\n  }\"\n>\n  <h3\n    class=\"card-header h5\"\n    *ngIf=\"title\"\n    [ngClass]=\"{\n      'text-right': align === 'right',\n      'text-center': align === 'center'\n    }\"\n  >{{title}}</h3>\n\n  <div\n    class=\"card-content\"\n    [ngClass]=\"{\n      'text-right': align === 'right',\n      'text-center': align === 'center'\n    }\"\n    [ngStyle]=\"{'padding': indents}\"\n  >\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-card/ni-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin: 0 0 1.375rem; }\n  :host .card-wrap {\n    background-color: #fff;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 1px solid #e5e6e9;\n    border-radius: 3px;\n    box-shadow: 1px 1px 5px 0px rgba(37, 45, 71, 0.25);\n    position: relative; }\n    :host .card-wrap:not(.outline-card) {\n      border: 0 !important; }\n    :host .card-wrap .card-header {\n      background: #e5e6e9;\n      border-radius: 3px 3px 0 0;\n      color: #000000;\n      display: block;\n      margin: 0;\n      padding: 0.6875rem 1.375rem;\n      position: relative; }\n      :host .card-wrap .card-header + .card-content {\n        border-radius: 0 0 3px 3px; }\n    :host .card-wrap .card-content {\n      border-radius: 3px;\n      display: block;\n      padding: 1.375rem;\n      position: relative; }\n    :host .card-wrap.success-card {\n      background: #81C784;\n      border-color: #81C784; }\n      :host .card-wrap.success-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.info-card {\n      background: #64B5F6;\n      border-color: #64B5F6; }\n      :host .card-wrap.info-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.warning-card {\n      background: #FFB74D;\n      border-color: #FFB74D; }\n      :host .card-wrap.warning-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.danger-card {\n      background: #e24d4d;\n      border-color: #e24d4d; }\n      :host .card-wrap.danger-card:not(.outline-card) {\n        color: #fff; }\n    :host .card-wrap.success-color-card {\n      color: #81C784; }\n    :host .card-wrap.info-color-card {\n      color: #64B5F6; }\n    :host .card-wrap.warning-color-card {\n      color: #FFB74D; }\n    :host .card-wrap.danger-color-card {\n      color: #e24d4d; }\n    :host .card-wrap.outline-card {\n      background: none !important;\n      box-shadow: none !important; }\n    :host .card-wrap.bg-image-card {\n      border: none !important; }\n      :host .card-wrap.bg-image-card:before {\n        background-color: inherit;\n        border-radius: 3px;\n        content: '';\n        display: block;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-card/ni-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiCardComponent = (function () {
    function NiCardComponent() {
        this.title = '';
        this.bgColor = '';
        this.customBgColor = '';
        this.color = '';
        this.customColor = '';
        this.bgImage = '';
        this.outline = false;
        this.indents = '';
        this.align = 'left';
    }
    NiCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "bgColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "customBgColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "customColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "bgImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiCardComponent.prototype, "outline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiCardComponent.prototype, "indents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiCardComponent.prototype, "align", void 0);
    NiCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-card',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-card/ni-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-card/ni-card.component.scss")],
            host: {
                '[class.ni-card]': 'true'
            }
        }),
        __metadata("design:paramtypes", [])
    ], NiCardComponent);
    return NiCardComponent;
}());

//# sourceMappingURL=ni-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/ni-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-wrap\">\n  <div class=\"dialog\">\n    <div class=\"dialog-header\">\n      <div class=\"user-avatar\">\n        <div *ngIf=\"activeUser.avatar && activeUser.avatar !== ''; then imageAvatar else textAvatar\"></div>\n\n        <ng-template #imageAvatar>\n          <div class=\"image-avatar\"><img src=\"{{ activeUser.avatar }}\" alt=\"\"></div>\n        </ng-template>\n        <ng-template #textAvatar>\n          <div class=\"text-avatar\">{{ firstLetter }}</div>\n        </ng-template>\n      </div>\n      <div class=\"user-info\">\n        <h3 class=\"user-name\">{{ activeUser.name }}</h3>\n        <div class=\"user-last-seen\" [ngClass]=\"{'online': activeUser.lastSeen === 'online'}\">{{ activeUser.lastSeen }}</div>\n      </div>\n      <button class=\"btn call\"><i class=\"sli-options-vertical\"></i></button>\n    </div>\n\n    <div class=\"dialog-messages\">\n      <div class=\"messages-list\">\n        <div *ngFor=\"let message of messages\" class=\"message\" [ngClass]=\"{'my-message': message.my}\">\n          <div class=\"message-content\" [innerHtml]=\"message.content\"></div>\n          <div class=\"message-date\">{{ message.date }}</div>\n        </div>\n      </div>\n    </div>\n\n    <form class=\"dialog-footer\" #messageForm=\"ngForm\" (ngSubmit)=\"onSubmit(messageForm)\" (keydown.enter)=\"onSubmit(messageForm)\">\n      <button class=\"btn load-file\" (click)=\"loadFile($event); false\"><i class=\"sli-paper-clip\"></i></button>\n      <div class=\"message-box\">\n        <textarea required ngModel class=\"enter-message\" rows=\"1\" name=\"message\" placeholder=\"Write a message...\"></textarea>\n      </div>\n      <button class=\"btn send-message\" type=\"submit\"><i class=\"sli-paper-plane\"></i></button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/ni-chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #fff;\n  border-radius: 3px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-family: inherit;\n  height: 500px;\n  max-height: 100%;\n  width: 100%; }\n  :host .chat-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    max-height: inherit; }\n    :host .chat-wrap .dialog {\n      background: #e5e6e9;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      max-height: inherit;\n      width: 100%; }\n      :host .chat-wrap .dialog .btn {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background: none;\n        border: none;\n        border-radius: 0;\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.3);\n        cursor: pointer;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 20px;\n        height: 2.75rem;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        outline: none;\n        padding: 0;\n        transition: color 0.2s ease-in-out;\n        width: 2.75rem; }\n        :host .chat-wrap .dialog .btn:hover, :host .chat-wrap .dialog .btn:focus {\n          color: #000; }\n      :host .chat-wrap .dialog .dialog-header {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background: #fff;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0.6875rem 0.6875rem; }\n        :host .chat-wrap .dialog .dialog-header .user-avatar {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          background: #666c7e;\n          border-radius: 50%;\n          color: #ffffff;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 36px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin: 0 0.6875rem;\n          overflow: hidden;\n          width: 36px; }\n          :host .chat-wrap .dialog .dialog-header .user-avatar .text-avatar {\n            font-size: 20px;\n            line-height: 1; }\n        :host .chat-wrap .dialog .dialog-header .user-info {\n          -webkit-box-flex: 2;\n              -ms-flex-positive: 2;\n                  flex-grow: 2; }\n          :host .chat-wrap .dialog .dialog-header .user-info .user-name {\n            font-size: 16px;\n            margin: 0; }\n          :host .chat-wrap .dialog .dialog-header .user-info .user-last-seen {\n            line-height: 1;\n            opacity: .8; }\n            :host .chat-wrap .dialog .dialog-header .user-info .user-last-seen.online {\n              color: #64B5F6;\n              opacity: 1; }\n      :host .chat-wrap .dialog .dialog-messages {\n        height: 100%;\n        min-height: 300px;\n        overflow: auto; }\n        :host .chat-wrap .dialog .dialog-messages .messages-list {\n          padding: 0.34375rem 1.375rem 0; }\n          :host .chat-wrap .dialog .dialog-messages .messages-list .message {\n            padding: 0.34375rem 0;\n            transition: -webkit-transform 0.2s ease-in-out;\n            transition: transform 0.2s ease-in-out;\n            transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n            width: 90%; }\n            :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-content {\n              background: #fff;\n              border-radius: 5px;\n              display: inline-block;\n              padding: 0.34375rem 0.6875rem;\n              position: relative; }\n              :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-content:before {\n                border: 5px solid transparent;\n                border-bottom-color: #fff;\n                bottom: 0;\n                content: '';\n                display: block;\n                height: 0;\n                left: -5px;\n                position: absolute;\n                width: 0; }\n                .rtl :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-content:before {\n                  left: auto;\n                  right: -5px; }\n            :host .chat-wrap .dialog .dialog-messages .messages-list .message .message-date {\n              font-size: 90%;\n              margin-top: 0.171875rem;\n              opacity: .8; }\n            :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message {\n              margin-left: auto;\n              text-align: right; }\n              .rtl :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message {\n                margin-left: 0;\n                margin-right: auto;\n                text-align: left; }\n              :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message .message-content {\n                background: #0bd237;\n                color: #fff; }\n                :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message .message-content:before {\n                  border-bottom-color: #0bd237;\n                  left: auto;\n                  right: -5px; }\n                  .rtl :host .chat-wrap .dialog .dialog-messages .messages-list .message.my-message .message-content:before {\n                    left: -5px;\n                    right: auto; }\n        :host .chat-wrap .dialog .dialog-messages.add-message .messages-list .message:last-child {\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n      :host .chat-wrap .dialog .dialog-footer {\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        background: #fff;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        min-height: 2.75rem;\n        padding: 0 0.6875rem; }\n        :host .chat-wrap .dialog .dialog-footer .btn.send-message {\n          color: #64B5F6; }\n          :host .chat-wrap .dialog .dialog-footer .btn.send-message:hover, :host .chat-wrap .dialog .dialog-footer .btn.send-message:focus {\n            color: #000; }\n        :host .chat-wrap .dialog .dialog-footer .message-box {\n          -webkit-box-flex: 2;\n              -ms-flex-positive: 2;\n                  flex-grow: 2;\n          padding: 0.6875rem 0; }\n          :host .chat-wrap .dialog .dialog-footer .message-box .enter-message {\n            background: none;\n            border: 0;\n            display: block;\n            font-family: inherit;\n            font-size: 14px;\n            height: auto;\n            line-height: 1.6;\n            max-height: 5.5rem;\n            min-height: 1.375rem;\n            outline: none;\n            overflow: hidden;\n            padding: 0;\n            resize: none;\n            width: 100%; }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message::-webkit-input-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message::-moz-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message:-ms-input-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n            :host .chat-wrap .dialog .dialog-footer .message-box .enter-message:-moz-placeholder {\n              color: rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/ni-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/ni-components/ni-chat/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__user__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NiChatComponent = (function () {
    function NiChatComponent(elementRef) {
        this.elementRef = elementRef;
        this.contacts = [];
        this.messages = [];
        this.dialogMessages = this.elementRef.nativeElement.getElementsByClassName('dialog-messages');
    }
    NiChatComponent.prototype.ngOnInit = function () {
        this.firstLetter = this.activeUser.name.charAt(0);
        this.scrollToBottom(this.dialogMessages);
    };
    NiChatComponent.prototype.onSubmit = function (form) {
        var messageContent = form.value.message;
        var newMessage = (messageContent !== '' && messageContent !== null) ? messageContent.replace(/(?:\r\n|\r|\n)/g, '') : messageContent;
        if (newMessage !== '' && newMessage !== null) {
            messageContent = messageContent.replace(/(?:\r\n|\r|\n)/g, ' ');
            var date = new Date();
            var minutes = date.getMinutes();
            this.message = {
                date: date.getHours() + ' : ' + ((minutes > 9) ? minutes : '0' + minutes),
                content: messageContent,
                my: true
            };
            this.messages.push(this.message);
            form.reset();
            var chatDialogMessages_1 = this.dialogMessages[0];
            chatDialogMessages_1.classList.add('add-message');
            setTimeout(function () {
                chatDialogMessages_1.classList.remove('add-message');
            }, 200);
            //Scroll to bottom
            this.scrollToBottom(this.dialogMessages);
        }
    };
    NiChatComponent.prototype.scrollToBottom = function (elem) {
        var eleArray = Array.prototype.slice.call(elem);
        setTimeout(function () {
            eleArray.map(function (val) {
                val.scrollTop = val.scrollHeight;
            });
        }, 0);
    };
    NiChatComponent.prototype.loadFile = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiChatComponent.prototype, "contacts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user__["User"]) === "function" && _a || Object)
    ], NiChatComponent.prototype, "activeUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiChatComponent.prototype, "messages", void 0);
    NiChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-chat',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-chat/ni-chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-chat/ni-chat.component.scss")],
            host: {
                '[class.ni-chat]': 'true'
            }
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
    ], NiChatComponent);
    return NiChatComponent;
    var _a, _b;
}());

//# sourceMappingURL=ni-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-chat/user.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ni_alert_ni_alert_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-alert/ni-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ni_badge_ni_badge_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-badge/ni-badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ni_breadcrumb_ni_breadcrumb_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-breadcrumb/ni-breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ni_button_ni_button_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-button/ni-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ni_card_ni_card_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-card/ni-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ni_chat_ni_chat_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-chat/ni-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ni_file_ni_file_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-file/ni-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ni_h_timeline_ni_h_timeline_component__ = __webpack_require__("../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_color_color_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/color/color.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_bg_bg_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/bg/bg.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_gradient_gradient_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/gradient/gradient.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_auto_grow_auto_grow_directive__ = __webpack_require__("../../../../../src/app/ni-components/directives/auto-grow/auto-grow.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var NiComponentsModule = (function () {
    function NiComponentsModule() {
    }
    NiComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ni_alert_ni_alert_component__["a" /* NiAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ni_badge_ni_badge_component__["a" /* NiBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ni_breadcrumb_ni_breadcrumb_component__["a" /* NiBreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ni_button_ni_button_component__["a" /* NiButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ni_card_ni_card_component__["a" /* NiCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ni_chat_ni_chat_component__["a" /* NiChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ni_file_ni_file_component__["a" /* NiFileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ni_h_timeline_ni_h_timeline_component__["a" /* NiHTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_color_color_directive__["a" /* ColorDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_bg_bg_directive__["a" /* BgDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_gradient_gradient_directive__["a" /* GradientDirective */],
                __WEBPACK_IMPORTED_MODULE_14__directives_auto_grow_auto_grow_directive__["a" /* AutoGrowDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ni_alert_ni_alert_component__["a" /* NiAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ni_badge_ni_badge_component__["a" /* NiBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ni_breadcrumb_ni_breadcrumb_component__["a" /* NiBreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ni_button_ni_button_component__["a" /* NiButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ni_card_ni_card_component__["a" /* NiCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__ni_chat_ni_chat_component__["a" /* NiChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ni_file_ni_file_component__["a" /* NiFileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ni_h_timeline_ni_h_timeline_component__["a" /* NiHTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_color_color_directive__["a" /* ColorDirective */],
                __WEBPACK_IMPORTED_MODULE_12__directives_bg_bg_directive__["a" /* BgDirective */],
                __WEBPACK_IMPORTED_MODULE_13__directives_gradient_gradient_directive__["a" /* GradientDirective */]
            ]
        })
    ], NiComponentsModule);
    return NiComponentsModule;
}());

//# sourceMappingURL=ni-components.module.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-file/ni-file.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"file\"\n  [ngClass]=\"{\n    'doc-file': type === 'doc',\n    'xlx-file': type === 'xlx',\n    'pdf-file': type === 'pdf',\n    'archive-file': type === 'zip',\n    'audio-file': type === 'mp3',\n    'video-file': (type === 'mp4') || (type === 'webm') || (type === 'ogv'),\n    'image-file': (type === 'jpg') || (type === 'jpeg') || (type === 'png') || (type === 'gif'),\n    'size-small': size === 'small',\n    'size-large': size === 'large',\n    'spinner-file': spinner\n  }\"\n>\n  <div class=\"file-prev\">\n    <div class=\"icon\" [ngStyle]=\"{'background-image': 'url('+image+')'}\">\n      <i\n        class=\"fa\"\n        [ngClass]=\"{\n          'fa-paperclip': type === '*',\n          'fa-file-word-o': type === 'doc',\n          'fa-file-excel-o': type === 'xlx',\n          'fa-file-pdf-o': type === 'pdf',\n          'fa-file-archive-o': type === 'zip',\n          'fa-file-audio-o': type === 'mp3',\n          'fa-file-video-o': (type === 'mp4') || (type === 'webm') || (type === 'ogv'),\n          'fa-file-image-o': (type === 'jpg') || (type === 'jpeg') || (type === 'png') || (type === 'gif')\n        }\"\n        *ngIf=\"!image\"\n        aria-hidden=\"true\"\n      ></i>\n      <i class=\"material-icons delete\" *ngIf=\"delete\">clear</i>\n    </div>\n    <div class=\"spinner\" *ngIf=\"spinner\"><i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i></div>\n  </div>\n  <div class=\"file-name\"><span class=\"name\">{{title}}</span><span class=\"type\">.{{type}}</span></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-file/ni-file.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block;\n  margin: 0 4px 10px;\n  position: relative; }\n  :host .file {\n    display: block;\n    width: 120px; }\n    :host .file .file-prev {\n      background: #9296a3;\n      border-radius: 3px;\n      color: #fff;\n      display: block;\n      font-size: 40px;\n      overflow: hidden;\n      padding-top: 100%;\n      position: relative;\n      width: 100%; }\n      :host .file .file-prev .icon {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100%; }\n        :host .file .file-prev .icon .delete {\n          background: rgba(0, 0, 0, 0.1);\n          cursor: pointer;\n          font-size: 20px;\n          position: absolute;\n          right: 0;\n          top: 0;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n          .rtl :host .file .file-prev .icon .delete {\n            left: 0;\n            right: auto; }\n          :host .file .file-prev .icon .delete:hover {\n            background: rgba(255, 255, 255, 0.3);\n            color: #f00; }\n      :host .file .file-prev .spinner {\n        background: inherit;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100%; }\n        :host .file .file-prev .spinner .fa {\n          font-size: inherit; }\n    :host .file .file-name {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      font-size: 11px;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      margin-top: 3px;\n      white-space: nowrap; }\n      .rtl :host .file .file-name {\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start; }\n      :host .file .file-name .name {\n        overflow: hidden;\n        text-overflow: ellipsis; }\n    :host .file.doc-file .file-prev {\n      background: #029acf; }\n    :host .file.xlx-file .file-prev {\n      background: #469408; }\n    :host .file.pdf-file .file-prev {\n      background: #d9831f; }\n    :host .file.archive-file .file-prev {\n      background: #9b479f; }\n    :host .file.audio-file .file-prev {\n      background: #FF9800; }\n    :host .file.video-file .file-prev {\n      background: #FF5722; }\n    :host .file.image-file .file-prev .icon {\n      background-position: 50% 50%;\n      background-repeat: no-repeat;\n      background-size: cover; }\n    :host .file.size-small {\n      width: 50px; }\n      :host .file.size-small .file-prev {\n        font-size: 20px; }\n    :host .file.size-large {\n      width: 180px; }\n      :host .file.size-large .file-prev {\n        font-size: 60px; }\n    :host .file.spinner-file .file-prev .icon {\n      visibility: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-file/ni-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiFileComponent = (function () {
    function NiFileComponent() {
        this.title = 'no-name';
        this.type = '*';
        this.image = '';
        this.size = 'normal';
        this.delete = false;
        this.spinner = false;
        this.link = false;
    }
    NiFileComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiFileComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiFileComponent.prototype, "delete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiFileComponent.prototype, "spinner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiFileComponent.prototype, "link", void 0);
    NiFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-file',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-file/ni-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-file/ni-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NiFileComponent);
    return NiFileComponent;
}());

//# sourceMappingURL=ni-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"line\"></span>\n\n<div class=\"timeline-box\" *ngFor=\"let box of data\">\n  <div class=\"box-label\" *ngIf=\"showYears && box.label\">\n    <div class=\"label-text\">{{ box.label }}</div>\n  </div>\n\n  <div class=\"box-items\">\n    <div class=\"item\" *ngFor=\"let item of box.timeline\">\n      <div class=\"item-point\" [ngStyle]=\"{ 'border-color': item.pointColor }\"></div>\n      <div class=\"item-date\" *ngIf=\"showDate && item.date\"><span>{{ item.date }}</span></div>\n      <div class=\"item-content\">\n        <h2 class=\"h6 item-title\" *ngIf=\"item.title\">{{ item.title }}</h2>\n        <div class=\"item-desc\" [innerHTML]=\"item.content\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  direction: ltr;\n  display: block;\n  position: relative; }\n  :host .line {\n    border-left: 2px solid #e5e6e9;\n    height: 100%;\n    left: 6px;\n    margin-left: -1px;\n    position: absolute;\n    top: 0; }\n  :host .timeline-box .box-label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0.6875rem 0; }\n    :host .timeline-box .box-label .label-text {\n      background: #2196f3;\n      border-radius: 3px;\n      color: #ffffff;\n      display: inline-block;\n      min-width: 5.5rem;\n      padding: 0.34375rem 0.6875rem;\n      position: relative;\n      text-align: center; }\n  :host .timeline-box .box-items {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    :host .timeline-box .box-items .item {\n      margin: 1.375rem 0;\n      padding-left: 50px;\n      position: relative; }\n      @media (max-width: 543px) {\n        :host .timeline-box .box-items .item {\n          padding-left: 32px; } }\n      :host .timeline-box .box-items .item .item-point {\n        background: #fff;\n        border: 2px solid #252d47;\n        border-radius: 50%;\n        display: block;\n        height: 12px;\n        left: 0;\n        position: absolute;\n        top: calc(1.03125rem + 1px);\n        width: 12px; }\n      :host .timeline-box .box-items .item .item-date {\n        font-size: 0.875rem;\n        margin-bottom: 0.6875rem; }\n      :host .timeline-box .box-items .item .item-content {\n        background: #fff;\n        border-radius: 3px;\n        display: inline-block;\n        padding: 1.03125rem 1.375rem;\n        position: relative;\n        width: auto; }\n        .rtl :host .timeline-box .box-items .item .item-content {\n          direction: rtl; }\n        :host .timeline-box .box-items .item .item-content:before, :host .timeline-box .box-items .item .item-content:after {\n          border: 10px solid transparent;\n          content: '';\n          display: block;\n          height: 0;\n          position: absolute;\n          top: 14px;\n          width: 0; }\n        :host .timeline-box .box-items .item .item-content:before {\n          border-right-color: #fff;\n          right: 100%; }\n        :host .timeline-box .box-items .item .item-content:after {\n          display: none;\n          left: 100%;\n          border-left-color: #fff; }\n        :host .timeline-box .box-items .item .item-content .item-title {\n          margin-top: 0; }\n  :host.show-date .timeline-box .box-items .item .item-point {\n    top: calc(2.8875rem + 1px); }\n  :host.align-right .line {\n    left: auto;\n    margin: 0 -1px 0 auto;\n    right: 6px; }\n  :host.align-right .timeline-box .box-label {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  :host.align-right .timeline-box .box-items {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    :host.align-right .timeline-box .box-items .item {\n      padding: 0 50px 0 0; }\n      @media (max-width: 543px) {\n        :host.align-right .timeline-box .box-items .item {\n          padding: 0 32px 0 0; } }\n      :host.align-right .timeline-box .box-items .item .item-point {\n        left: auto;\n        right: 0; }\n      :host.align-right .timeline-box .box-items .item .item-date {\n        text-align: right; }\n      :host.align-right .timeline-box .box-items .item .item-content:before {\n        display: none; }\n      :host.align-right .timeline-box .box-items .item .item-content:after {\n        display: block; }\n  :host.align-center .line {\n    left: 50%; }\n  :host.align-center .timeline-box .box-label {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  :host.align-center .timeline-box .box-items {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    :host.align-center .timeline-box .box-items .item {\n      padding: 0;\n      text-align: center; }\n      @media (max-width: 543px) {\n        :host.align-center .timeline-box .box-items .item {\n          padding: 0; } }\n      :host.align-center .timeline-box .box-items .item .item-point {\n        left: 50%;\n        margin: -26px 0 0 -6px;\n        top: 0; }\n      :host.align-center .timeline-box .box-items .item .item-date {\n        margin-bottom: 33px;\n        text-align: center; }\n        :host.align-center .timeline-box .box-items .item .item-date span {\n          background: #fff;\n          border: 1px solid #e5e6e9;\n          border-radius: 3px;\n          display: inline-block;\n          padding: 0.34375rem 0.6875rem; }\n      :host.align-center .timeline-box .box-items .item .item-content:before {\n        border-color: transparent transparent #fff transparent;\n        left: 50%;\n        margin: -20px 0 0 -10px;\n        top: 0; }\n  :host.align-center.show-date .timeline-box .box-items .item .item-point {\n    margin-top: 40px; }\n  @media (min-width: 768px) {\n    :host.align-between .line {\n      left: 50%; }\n    :host.align-between .timeline-box .box-label {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    :host.align-between .timeline-box .box-items .item {\n      width: 50%; }\n      :host.align-between .timeline-box .box-items .item:nth-child(even) {\n        -ms-flex-item-align: end;\n            align-self: flex-end; }\n        :host.align-between .timeline-box .box-items .item:nth-child(even) .item-point {\n          left: 0;\n          margin-left: -6px; }\n      :host.align-between .timeline-box .box-items .item:nth-child(odd) {\n        padding: 0 50px 0 0;\n        text-align: right; } }\n    @media (min-width: 768px) and (max-width: 543px) {\n      :host.align-between .timeline-box .box-items .item:nth-child(odd) {\n        padding: 0 32px 0 0; } }\n  @media (min-width: 768px) {\n        :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-point {\n          left: 100%;\n          margin-left: -6px; }\n        :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content {\n          text-align: left; }\n          .rtl :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content {\n            text-align: right; }\n          :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content:before {\n            display: none; }\n          :host.align-between .timeline-box .box-items .item:nth-child(odd) .item-content:after {\n            display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiHTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NiHTimelineComponent = (function () {
    function NiHTimelineComponent() {
        this.showYears = false;
        this.showDate = true;
        this.align = 'left';
        this.style = '';
        this.data = [];
        this.alignLeft = false;
        this.alignCenter = false;
        this.alignRight = false;
        this.alignBetween = false;
    }
    NiHTimelineComponent.prototype.ngOnInit = function () {
        this.alignLeft = (this.align === 'left');
        this.alignCenter = (this.align === 'center');
        this.alignRight = (this.align === 'right');
        this.alignBetween = (this.align === 'between');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "showYears", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "showDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NiHTimelineComponent.prototype, "align", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NiHTimelineComponent.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NiHTimelineComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-left'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-center'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignCenter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-right'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.align-between'),
        __metadata("design:type", Boolean)
    ], NiHTimelineComponent.prototype, "alignBetween", void 0);
    NiHTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ni-h-timeline',
            template: __webpack_require__("../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ni-components/ni-h-timeline/ni-h-timeline.component.scss")],
            host: {
                '[class.ni-h-timeline]': 'true',
                '[class.show-years]': 'showYears',
                '[class.show-date]': 'showDate'
            }
        }),
        __metadata("design:paramtypes", [])
    ], NiHTimelineComponent);
    return NiHTimelineComponent;
}());

//# sourceMappingURL=ni-h-timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'danger'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n      <md-icon>shopping_basket</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'warning'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n      <md-icon>equalizer</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n      <md-icon>monetization_on</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'success'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n      <md-icon>donut_large</md-icon>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ni-card [title]=\"'About admin'\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Wordpress</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"90\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Magento</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"80\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Opencart</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"60\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Drupal</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"30\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Angular</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>React</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam cumque dicta earum, iure maiores neque\r\n        nesciunt officia quisquam ullam.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ni-card title=\"Audience Overview\">\r\n      <canvas\r\n        baseChart\r\n        [datasets]=\"lineChartData\"\r\n        [labels]=\"lineChartLabels\"\r\n        [options]=\"lineChartOptions\"\r\n        [colors]=\"lineChartColors\"\r\n        [legend]=\"lineChartLegend\"\r\n        [chartType]=\"lineChartType\"></canvas>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"text-center\">\r\n  <h4>Meet the Team</h4>\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, eum.</p>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-xl-0\">\r\n      <img src=\"assets/content/person-4.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Mark Wahlberg</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-xl-0\">\r\n      <img src=\"assets/content/person-1.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Lindsay Lohan</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-md-0\">\r\n      <img src=\"assets/content/person-3.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Mary Jane</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [align]=\"'center'\" class=\"mb-0\">\r\n      <img src=\"assets/content/person-5.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">\r\n      <h5>Tom Brady</h5>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto corporis culpa eaque earum eius\r\n        eligendi et eveniet ex fuga natus nulla quisquam quod repellat.</p>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/aboutus/aboutus.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageAboutusComponent = (function () {
    function PageAboutusComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'About Us';
        // lineChart
        this.lineChartData = [
            {
                data: [30, 42, 46, 51, 65, 73, 80],
                label: 'Users',
                borderWidth: 1,
                pointRadius: 1
            },
            {
                data: [42, 43, 52, 47, 65, 70, 79],
                label: 'Pages',
                borderWidth: 1,
                pointRadius: 1
            },
            {
                data: [51, 48, 45, 56, 61, 69, 67],
                label: 'Visits',
                borderWidth: 1,
                pointRadius: 1
            }
        ];
        this.lineChartLabels = [
            'Mon.',
            'Tue.',
            'Wed.',
            'Thu.',
            'Fri.',
            'Sat.',
            'Sun.'
        ];
        this.lineChartOptions = {
            responsiveAnimationDuration: 500,
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            display: true
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(93,173,224,0.2)',
                borderColor: '#5dade0',
                pointBackgroundColor: '#5dade0',
                pointBorderColor: '#0e7cc5',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000'
            },
            {
                backgroundColor: 'rgba(255,140,0,0.2)',
                borderColor: '#ff8c00',
                pointBackgroundColor: '#ff8c00',
                pointBorderColor: '#FF630B',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000'
            },
            {
                backgroundColor: 'rgba(220,20,60,0.2)',
                borderColor: '#dc143c',
                pointBackgroundColor: '#dc143c',
                pointBorderColor: '#7E2303',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#000'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageAboutusComponent.prototype.ngOnInit = function () { };
    PageAboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aboutus',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/default-pages/aboutus/aboutus.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageAboutusComponent);
    return PageAboutusComponent;
    var _a;
}());

//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <ni-card [title]=\"'Request'\">\r\n            <md-list>\r\n              <md-list-item>Pepper</md-list-item>\r\n              <md-list-item>Salt</md-list-item>\r\n              <md-list-item>Paprika</md-list-item>\r\n            </md-list>\r\n          </ni-card>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ni-card [title]=\"'Next payment'\">\r\n            <md-list>\r\n              <md-list-item>Pepper</md-list-item>\r\n              <md-list-item>Salt</md-list-item>\r\n              <md-list-item>Paprika</md-list-item>\r\n            </md-list>\r\n          </ni-card>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <ni-card [title]=\"'Request'\">\r\n            <md-list>\r\n              <md-list-item>Pepper</md-list-item>\r\n              <md-list-item>Salt</md-list-item>\r\n              <md-list-item>Paprika</md-list-item>\r\n            </md-list>\r\n          </ni-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <ni-card [title]=\"'Time Line(Last)'\">\r\n        <md-list>\r\n          <md-list-item>Pepper</md-list-item>\r\n          <md-list-item>Salt</md-list-item>\r\n          <md-list-item>Paprika</md-list-item>\r\n        </md-list>\r\n      </ni-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 400px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n  @media (max-width: 767px) {\n    .chart-container {\n      height: 300px; } }\n  .chart-container canvas {\n    margin: 0 auto;\n    max-height: 100%;\n    width: auto !important; }\n\n:host /deep/ .amcharts-graph-g2 .amcharts-graph-stroke {\n  stroke-dasharray: 3px 3px;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  -webkit-animation: am-moving-dashes 1s linear infinite;\n          animation: am-moving-dashes 1s linear infinite; }\n\n@-webkit-keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n@keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n:host /deep/ .lastBullet {\n  -webkit-animation: am-pulsating 1s ease-out infinite;\n          animation: am-pulsating 1s ease-out infinite; }\n\n@-webkit-keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n@keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n:host /deep/ .amcharts-graph-column-front {\n  transition: all .3s .3s ease-out; }\n\n:host /deep/ .amcharts-graph-column-front:hover {\n  fill: #496375;\n  stroke: #496375;\n  transition: all .3s ease-out; }\n\n:host /deep/ .amcharts-graph-g3 {\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  stroke-dasharray: 500%;\n  stroke-dasharray: 0;\n  stroke-dashoffset: 0;\n  -webkit-animation: am-draw 40s;\n          animation: am-draw 40s; }\n\n@-webkit-keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n\n@keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var folders = [
    {
        icon: 'android',
        badge: false,
        name: 'Android app',
        updated: 'July 21, 2017'
    },
    {
        icon: 'update',
        badge: false,
        name: 'Update plugins',
        updated: 'July 19, 2017'
    },
    {
        icon: 'bug_report',
        badge: false,
        name: 'Fix bugs',
        updated: 'July 22, 2017'
    },
    {
        icon: 'unarchive',
        badge: false,
        name: 'Create app design',
        updated: 'July 25, 2017'
    },
    {
        icon: 'content_copy',
        badge: 8,
        name: 'Create widgets',
        updated: 'July 16, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Documentation',
        updated: 'July 28, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Upload',
        updated: 'July 30, 2017'
    }
];
var timelineData = [
    {
        'timeline': [
            {
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'pointColor': '#ea8080'
            },
            {
                'content': "Aenean lacinia bibendum nulla.",
                'pointColor': '#915035'
            },
            {
                'content': "Lorem ipsum dolor sit amet.",
                'pointColor': '#B925FF'
            },
            {
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                'pointColor': '#C5CAE9'
            },
            {
                'content': "Lorem ipsum dolor sit.",
                'pointColor': '#FF8A65'
            }
        ]
    }
];
var PageDashboardComponent = (function () {
    function PageDashboardComponent(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Dashboard';
        this.folders = folders;
        this.timelineData = timelineData;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageDashboardComponent.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'serial',
            'theme': 'light',
            'dataDateFormat': 'YYYY-MM-DD',
            'dataProvider': [
                {
                    'date': '2012-01-01',
                    'distance': 227,
                    'townName': 'New York',
                    'townName2': 'New York',
                    'townSize': 25,
                    'latitude': 40.71,
                    'duration': 408
                }, {
                    'date': '2012-01-02',
                    'distance': 371,
                    'townName': 'Washington',
                    'townSize': 14,
                    'latitude': 38.89,
                    'duration': 482
                }, {
                    'date': '2012-01-03',
                    'distance': 433,
                    'townName': 'Wilmington',
                    'townSize': 6,
                    'latitude': 34.22,
                    'duration': 562
                }, {
                    'date': '2012-01-04',
                    'distance': 345,
                    'townName': 'Jacksonville',
                    'townSize': 7,
                    'latitude': 30.35,
                    'duration': 379
                }, {
                    'date': '2012-01-05',
                    'distance': 480,
                    'townName': 'Miami',
                    'townName2': 'Miami',
                    'townSize': 10,
                    'latitude': 25.83,
                    'duration': 501
                }, {
                    'date': '2012-01-06',
                    'distance': 386,
                    'townName': 'Tallahassee',
                    'townSize': 7,
                    'latitude': 30.46,
                    'duration': 443
                }, {
                    'date': '2012-01-07',
                    'distance': 348,
                    'townName': 'New Orleans',
                    'townSize': 10,
                    'latitude': 29.94,
                    'duration': 405
                }, {
                    'date': '2012-01-08',
                    'distance': 238,
                    'townName': 'Houston',
                    'townName2': 'Houston',
                    'townSize': 16,
                    'latitude': 29.76,
                    'duration': 309
                }, {
                    'date': '2012-01-09',
                    'distance': 218,
                    'townName': 'Dalas',
                    'townSize': 17,
                    'latitude': 32.8,
                    'duration': 287
                }, {
                    'date': '2012-01-10',
                    'distance': 349,
                    'townName': 'Oklahoma City',
                    'townSize': 11,
                    'latitude': 35.49,
                    'duration': 485
                }, {
                    'date': '2012-01-11',
                    'distance': 603,
                    'townName': 'Kansas City',
                    'townSize': 10,
                    'latitude': 39.1,
                    'duration': 890
                }, {
                    'date': '2012-01-12',
                    'distance': 534,
                    'townName': 'Denver',
                    'townName2': 'Denver',
                    'townSize': 18,
                    'latitude': 39.74,
                    'duration': 810
                }, {
                    'date': '2012-01-13',
                    'townName': 'Salt Lake City',
                    'townSize': 12,
                    'distance': 425,
                    'duration': 670,
                    'latitude': 40.75,
                    'alpha': 0.4
                }, {
                    'date': '2012-01-14',
                    'latitude': 36.1,
                    'duration': 470,
                    'townName': 'Las Vegas',
                    'bulletClass': 'lastBullet'
                }
            ],
            'addClassNames': true,
            'startDuration': 1,
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'minPeriod': 'DD',
                'autoGridCount': false,
                'gridCount': 50,
                'gridAlpha': 0.1,
                'gridColor': '#FFFFFF',
                'axisColor': '#555555',
                'dateFormats': [{
                        'period': 'DD',
                        'format': 'DD'
                    }, {
                        'period': 'WW',
                        'format': 'MMM DD'
                    }, {
                        'period': 'MM',
                        'format': 'MMM'
                    }, {
                        'period': 'YYYY',
                        'format': 'YYYY'
                    }]
            },
            'valueAxes': [{
                    'id': 'a1',
                    'title': 'distance',
                    'gridAlpha': 0,
                    'axisAlpha': 0
                }, {
                    'id': 'a2',
                    'position': 'right',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'labelsEnabled': false
                }],
            'graphs': [{
                    'id': 'g1',
                    'valueField': 'distance',
                    'title': 'distance',
                    'type': 'column',
                    'fillAlphas': 0.9,
                    'valueAxis': 'a1',
                    'balloonText': '[[value]] miles',
                    'legendValueText': '[[value]] mi',
                    'legendPeriodValueText': 'total: [[value.sum]] mi',
                    'lineColor': '#B3E5FC',
                    'alphaField': 'alpha'
                }, {
                    'id': 'g2',
                    'valueField': 'latitude',
                    'classNameField': 'bulletClass',
                    'title': 'latitude/city',
                    'type': 'line',
                    'valueAxis': 'a2',
                    'lineColor': '#d50000',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]/[[description]]',
                    'descriptionField': 'townName',
                    'bullet': 'round',
                    'bulletSizeField': 'townSize',
                    'bulletBorderColor': '#ca0000',
                    'bulletBorderAlpha': 1,
                    'bulletBorderThickness': 2,
                    'bulletColor': '#f2b3b3',
                    'labelText': '[[townName2]]',
                    'labelPosition': 'right',
                    'balloonText': 'latitude:[[value]]',
                    'showBalloon': true,
                    'animationPlayed': true
                }, {
                    'id': 'g3',
                    'title': 'duration',
                    'valueField': 'duration',
                    'type': 'line',
                    'valueAxis': 'a3',
                    'lineColor': '#64B5F6',
                    'balloonText': '[[value]]',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]',
                    'bullet': 'square',
                    'bulletBorderColor': '#64B5F6',
                    'bulletBorderThickness': 1,
                    'bulletBorderAlpha': 1,
                    'dashLengthField': 'dashLength',
                    'animationPlayed': true
                }],
            'chartCursor': {
                'zoomable': false,
                'categoryBalloonDateFormat': 'DD',
                'cursorAlpha': 0,
                'valueBalloonsEnabled': false
            },
            'legend': {
                'bulletType': 'round',
                'equalWidths': false,
                'valueWidth': 120,
                'useGraphSettings': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Lithuania',
                    'litres': 501.9
                }, {
                    'country': 'Czech Republic',
                    'litres': 301.9
                }, {
                    'country': 'Ireland',
                    'litres': 201.1
                }, {
                    'country': 'Germany',
                    'litres': 165.8
                }, {
                    'country': 'Australia',
                    'litres': 139.9
                }, {
                    'country': 'Austria',
                    'litres': 128.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }, {
                    'country': 'Belgium',
                    'litres': 60
                }, {
                    'country': 'The Netherlands',
                    'litres': 50
                }
            ],
            'pullOutRadius': 0,
            'labelRadius': -40,
            'valueField': 'litres',
            'titleField': 'country',
            'labelText': '[[litres]]',
            'balloon': {
                'fixedPosition': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-3', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'title': 'Chrome',
                    'value': 70
                }, {
                    'title': 'Firefox',
                    'value': 15
                }, {
                    'title': 'Opera',
                    'value': 10
                }, {
                    'title': 'Safari',
                    'value': 12
                }, {
                    'title': 'Edge',
                    'value': 5
                }
            ],
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': -40,
            'radius': '46%',
            'innerRadius': '60%',
            'labelText': '[[title]]'
        });
        this.chart = this.AmCharts.makeChart('amchart-4', {
            'type': 'radar',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Czech Republic',
                    'litres': 156.9
                }, {
                    'country': 'Ireland',
                    'litres': 131.1
                }, {
                    'country': 'Germany',
                    'litres': 115.8
                }, {
                    'country': 'Australia',
                    'litres': 109.9
                }, {
                    'country': 'Austria',
                    'litres': 108.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }
            ],
            'valueAxes': [{
                    'axisTitleOffset': 20,
                    'minimum': 0,
                    'axisAlpha': 0.15
                }],
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[value]] litres of beer per year',
                    'bullet': 'round',
                    'lineThickness': 2,
                    'valueField': 'litres'
                }],
            'categoryField': 'country'
        });
    };
    PageDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/default-pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageDashboardComponent);
    return PageDashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <ni-card title=\"Column chart\">\r\n      <div id=\"amchart-1\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </ni-card>\r\n\r\n    <ni-card title=\"Lines chart\">\r\n      <div id=\"amchart-2\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </ni-card>\r\n\r\n    <ni-card [title]=\"'What we doing'\" class=\"mb-md-0\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Wordpress</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"90\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Magento</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"80\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Opencart</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"60\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Drupal</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"30\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Angular</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>React</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam cumque dicta earum, iure maiores neque\r\n        nesciunt officia quisquam ullam.</p>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <ni-card [title]=\"'Recent activities'\" [outline]=\"true\">\r\n      <ni-h-timeline [showYears]=\"false\" [align]=\"'left'\" [data]=\"timelineData\"></ni-h-timeline>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(226,77,77,0.6)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-4.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(255,183,77,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-5.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(100,181,246,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-6.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n    </ni-card>\r\n\r\n    <ni-card [customBgColor]=\"'rgba(129,199,132,0.8)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-7.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n    </ni-card>\r\n\r\n    <ni-card title=\"Last uploaded files\" class=\"mb-0\">\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'bulb'\" [image]=\"'assets/content/file-1.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'doc'\" [title]=\"'resume'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'main-image'\" [image]=\"'assets/content/file-2.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'watch'\" [image]=\"'assets/content/file-3.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'camera'\" [image]=\"'assets/content/file-4.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'pdf'\" [title]=\"'documentation'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'mp4'\" [title]=\"'video-tutorial'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'best-work'\" [image]=\"'assets/content/file.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'jpg'\" [title]=\"'smart'\" [image]=\"'assets/content/file-5.jpg'\"></ni-file>\r\n      <ni-file [size]=\"'small'\" [type]=\"'zip'\" [title]=\"'theme'\"></ni-file>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/groups/groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/.ni-h-timeline .timeline-box .box-items .item {\n  margin: 0.6875rem 0 !important;\n  padding-left: 30px !important; }\n  :host /deep/.ni-h-timeline .timeline-box .box-items .item .item-content {\n    padding: 0.6875rem !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var timelineData = [
    {
        'timeline': [
            {
                'date': '12 minutes ago',
                'content': "You <span class=\"text-info\">recommended</span> Sem B.",
                'pointColor': '#ea8080'
            },
            {
                'date': '37 minutes ago',
                'content': "You followed Sydney N.",
                'pointColor': '#915035'
            },
            {
                'date': '2 hours ago',
                'content': "You <span class=\"text-danger\">subscribed</span> to Harold Fuller",
                'pointColor': '#B925FF'
            },
            {
                'date': '7 hours ago',
                'content': "You updated your profile picture",
                'pointColor': '#C5CAE9'
            },
            {
                'date': '8 hours ago',
                'content': "You deleted <i>homepage.psd</i>",
                'pointColor': '#FF8A65'
            }
        ]
    }
];
var PageGroupsComponent = (function () {
    function PageGroupsComponent(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Groups';
        this.timelineData = timelineData;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageGroupsComponent.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'serial',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Angular',
                    'visits': 1232
                }, {
                    'country': 'AngularJS',
                    'visits': 1882
                }, {
                    'country': 'React',
                    'visits': 1809
                }, {
                    'country': 'Vue.js',
                    'visits': 1322
                }, {
                    'country': 'Backbone.js',
                    'visits': 1542
                }, {
                    'country': 'Ember.js',
                    'visits': 1497
                }, {
                    'country': 'Meteor.js',
                    'visits': 1240
                }, {
                    'country': 'jQuery',
                    'visits': 711
                }
            ],
            'valueAxes': [{
                    'gridColor': '#FFFFFF',
                    'gridAlpha': 0.2,
                    'dashLength': 0
                }],
            'gridAboveGraphs': true,
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[category]]: <b>[[value]]</b>',
                    'fillAlphas': 0.8,
                    'lineAlpha': 0.2,
                    'type': 'column',
                    'valueField': 'visits'
                }],
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'country',
            'categoryAxis': {
                'gridPosition': 'start',
                'gridAlpha': 0,
                'tickPosition': 'start',
                'tickLength': 20
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'serial',
            'theme': 'light',
            //'autoMarginOffset':20,
            'dataDateFormat': 'YYYY-MM-DD HH:NN',
            'dataProvider': [
                {
                    'date': '2012-01-01',
                    'value': 8
                }, {
                    'date': '2012-01-02',
                    'color': '#CC0000',
                    'value': 10
                }, {
                    'date': '2012-01-03',
                    'value': 12
                }, {
                    'date': '2012-01-04',
                    'value': 14
                }, {
                    'date': '2012-01-05',
                    'value': 11
                }, {
                    'date': '2012-01-06',
                    'value': 6
                }, {
                    'date': '2012-01-07',
                    'value': 7
                }, {
                    'date': '2012-01-08',
                    'value': 9
                }, {
                    'date': '2012-01-09',
                    'value': 13
                }, {
                    'date': '2012-01-10',
                    'value': 15
                }, {
                    'date': '2012-01-11',
                    'color': '#CC0000',
                    'value': 19
                }, {
                    'date': '2012-01-12',
                    'value': 21
                }, {
                    'date': '2012-01-13',
                    'value': 22
                }, {
                    'date': '2012-01-14',
                    'value': 20
                }, {
                    'date': '2012-01-15',
                    'value': 18
                }, {
                    'date': '2012-01-16',
                    'value': 14
                }, {
                    'date': '2012-01-17',
                    'color': '#CC0000',
                    'value': 16
                }, {
                    'date': '2012-01-18',
                    'value': 18
                }, {
                    'date': '2012-01-19',
                    'value': 17
                }, {
                    'date': '2012-01-20',
                    'value': 15
                }, {
                    'date': '2012-01-21',
                    'value': 12
                }, {
                    'date': '2012-01-22',
                    'color': '#CC0000',
                    'value': 10
                }, {
                    'date': '2012-01-23',
                    'value': 8
                }
            ],
            'valueAxes': [{
                    'axisAlpha': 0,
                    'guides': [{
                            'fillAlpha': 0.1,
                            'fillColor': '#888888',
                            'lineAlpha': 0,
                            'toValue': 16,
                            'value': 10
                        }],
                    'position': 'left',
                    'tickLength': 0
                }],
            'graphs': [{
                    'balloonText': '[[category]]<br><b><span style="font-size:14px;">value:[[value]]</span></b>',
                    'bullet': 'round',
                    'dashLength': 3,
                    'colorField': 'color',
                    'valueField': 'value'
                }],
            'trendLines': [{
                    'finalDate': '2012-01-11 12',
                    'finalValue': 19,
                    'initialDate': '2012-01-02 12',
                    'initialValue': 10,
                    'lineColor': '#CC0000'
                }, {
                    'finalDate': '2012-01-22 12',
                    'finalValue': 10,
                    'initialDate': '2012-01-17 12',
                    'initialValue': 16,
                    'lineColor': '#CC0000'
                }],
            'chartCursor': {
                'fullWidth': true,
                'valueLineEabled': true,
                'valueLineBalloonEnabled': true,
                'valueLineAlpha': 0.5,
                'cursorAlpha': 0
            },
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'axisAlpha': 0,
                'gridAlpha': 0.1,
                'minorGridAlpha': 0.1,
                'minorGridEnabled': true
            }
        });
    };
    PageGroupsComponent.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    PageGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-groups',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/groups/groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/default-pages/groups/groups.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageGroupsComponent);
    return PageGroupsComponent;
    var _a, _b;
}());

//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Not found!</h1>"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Not found!';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
    var _a;
}());

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'danger'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n      <md-icon>shopping_basket</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'warning'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n      <md-icon>equalizer</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n      <md-icon>monetization_on</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'success'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n      <md-icon>donut_large</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(226,77,77,0.6)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-4.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(255,183,77,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-5.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(100,181,246,0.9)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-6.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+210</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [customBgColor]=\"'rgba(129,199,132,0.8)'\" [customColor]=\"'#fff'\" [bgImage]=\"'assets/content/card-7.jpg'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [customColor]=\"'rgba(255,255,255,0.3)'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'danger'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Orders</div>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [color]=\"'danger'\">+17%</ni-badge> <small>from previous period</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'warning'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Revenue</div>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'info'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Products</div>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [color]=\"'info'\">+210</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [outline]=\"true\" [bgColor]=\"'success'\" class=\"info-card\">\r\n      <div class=\"title text-uppercase\">Sold</div>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [color]=\"'success'\">+24%</ni-badge>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"pieChartData\"\r\n          [colors]=\"pieChartColors\"\r\n          [labels]=\"pieChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"pieChartOptions\"\r\n          [chartType]=\"pieChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>930</strong> <small>Resolved</small></div>\r\n        <div class=\"small\">More than 70% resolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"doughnutChartData\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"doughnutChartOptions\"\r\n          [chartType]=\"doughnutChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>466</strong> <small>Unresolved</small></div>\r\n        <div class=\"small\">Less than 30% unresolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"polarAreaChartData\"\r\n          [colors]=\"polarAreaChartColors\"\r\n          [labels]=\"polarAreaChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"polarAreaChartOptions\"\r\n          [chartType]=\"polarAreaChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>1,547</strong> <small>Issues</small></div>\r\n        <div class=\"small\">8 issues are unassigned</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mb-lg-4\">\r\n  <div class=\"col-lg-6 map-col mb-4 mb-lg-0\">\r\n    <ni-card [indents]=\"0\" class=\"mb-0\">\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n      </agm-map>\r\n    </ni-card>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card class=\"mb-lg-0\">\r\n      <canvas\r\n        baseChart\r\n        [datasets]=\"barChartData\"\r\n        [labels]=\"barChartLabels\"\r\n        [options]=\"barChartOptions\"\r\n        [legend]=\"barChartLegend\"\r\n        [chartType]=\"barChartType\"></canvas>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Users'\" class=\"mb-lg-0\">\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let message of messages\">\r\n          <img md-list-avatar src=\"{{ message.avatar }}\" width=\"40\" height=\"40\" alt=\"\">\r\n          <h3 md-line class=\"h3\">{{ message.from }}</h3>\r\n          <p md-line><i>\r\n            <span>{{message.subject}}</span>\r\n            <span> -- {{ message.content }}</span>\r\n          </i></p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'To do list'\" class=\"mb-0\">\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let folder of folders\">\r\n          <md-icon md-list-avatar>{{folder.icon}}<ni-badge *ngIf=\"folder.badge\" [color]=\"'danger'\" [position]=\"'top-right'\">{{folder.badge}}</ni-badge></md-icon>\r\n          <h4 md-line>{{folder.name}}</h4>\r\n          <p md-line><i>{{folder.updated}}</i></p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-col .ni-card {\n  height: 100%; }\n  .map-col .ni-card /deep/.card-wrap {\n    height: 100%; }\n    .map-col .ni-card /deep/.card-wrap .card-content {\n      height: 100%; }\n\n.sebm-google-map-container {\n  height: 100%;\n  min-height: 200px; }\n  .sebm-google-map-container /deep/.sebm-google-map-container-inner {\n    min-height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var messages = [
    {
        from: 'Nancy',
        subject: 'HTML',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        avatar: 'assets/content/avatar-4.jpg'
    },
    {
        from: 'Mary',
        subject: 'Css',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: 'assets/content/avatar-3.jpg'
    },
    {
        from: 'Bobby',
        subject: 'Angular 2',
        content: 'It is a long established fact that a reader will be distracted by the readable content',
        avatar: 'assets/content/avatar-2.jpg'
    },
    {
        from: 'Roma',
        subject: 'Type Script',
        content: 'There are many variations of passages of',
        avatar: 'assets/content/avatar-1.jpg'
    },
    {
        from: 'Amanda',
        subject: 'PHP',
        content: 'Lorem Ipsum has been the industrys standard',
        avatar: 'assets/content/avatar-5.jpg'
    },
    {
        from: 'Tom',
        subject: 'Sql',
        content: 'There are many variations of passages of',
        avatar: 'assets/content/avatar-6.jpg'
    }
];
var folders = [
    {
        icon: 'android',
        badge: false,
        name: 'Android app',
        updated: 'March 21, 2017'
    },
    {
        icon: 'update',
        badge: false,
        name: 'Update plugins',
        updated: 'March 19, 2017'
    },
    {
        icon: 'bug_report',
        badge: false,
        name: 'Fix bugs',
        updated: 'March 22, 2017'
    },
    {
        icon: 'unarchive',
        badge: false,
        name: 'Create app design',
        updated: 'March 25, 2017'
    },
    {
        icon: 'content_copy',
        badge: 8,
        name: 'Create widgets',
        updated: 'March 16, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Documentation',
        updated: 'March 28, 2017'
    }
];
var PageProfileComponent = (function () {
    function PageProfileComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Profile';
        this.lat = 50.4664212;
        this.lng = 30.6;
        this.messages = messages;
        this.folders = folders;
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            responsiveAnimationDuration: 500
        };
        this.barChartLabels = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            {
                data: [59, 80, 81, 56, 55, 40],
                label: 'Angular JS',
                borderWidth: 1,
                pointRadius: 1
            },
            {
                data: [48, 40, 19, 86, 27, 90],
                label: 'React JS',
                borderWidth: 1,
                pointRadius: 1
            }
        ];
        // Pie
        this.pieChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.pieChartData = [
            300,
            500,
            100
        ];
        this.pieChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#5dade0",
                    "#3c4e62"
                ],
            }
        ];
        this.pieChartType = 'pie';
        this.pieChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        //Doughnut
        this.doughnutChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.doughnutChartData = [
            350,
            450,
            100
        ];
        this.doughnutChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#ff8c00",
                    "#3c4e62"
                ],
            }
        ];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        // PolarArea
        this.polarAreaChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.polarAreaChartData = [
            300,
            400,
            500
        ];
        this.polarAreaChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#dc143c",
                    "#3c4e62"
                ],
            }
        ];
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        this._sharedService.emitChange(this.pageTitle);
    }
    PageProfileComponent.prototype.ngOnInit = function () { };
    PageProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/default-pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageProfileComponent);
    return PageProfileComponent;
    var _a;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/requests/requests.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<ni-card>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-xl-6 mb-lg-4\">\r\n      <div class=\"chart-container\">\r\n        <div id=\"amchart-1\" [style.width.%]=\"100\" [style.height.%]=\"100\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3 flex-xl-first mb-4 mb-md-0\">\r\n      <h5 class=\"mt-0\">Last sales</h5>\r\n      <div class=\"table-responsive mb-3\">\r\n        <table class=\"table table-sm\">\r\n          <tbody>\r\n          <tr>\r\n            <td>Samsung Galaxy S8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu M3</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu Pro 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">5</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Apple iPhone SE</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\">7</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 7</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Huawei P8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">4</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Xiaomi Mi Band 2</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'danger'\" [borderRadius]=\"false\">10</ni-badge>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <button ni-button block=\"true\" type=\"accent\" outline=\"true\" lineStyle=\"dashed\" beforeIcon=\"fa fa-shopping-basket\">Look all</button>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <p class=\"mb-1\"><strong>Angular</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>React</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"warn\" [value]=\"85\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" [value]=\"40\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" [value]=\"38\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Ember.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"54\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>Meteor.js</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"warn\" [value]=\"38\"></md-progress-bar>\r\n\r\n      <p class=\"mb-1\"><strong>jQuery</strong></p>\r\n      <md-progress-bar mode=\"determinate\" color=\"warn\" [value]=\"61\"></md-progress-bar>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Orders</h6>\r\n      <div class=\"count\">2,145</div>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">+17%</ni-badge> <small>from previous period</small>\r\n      <md-icon>shopping_basket</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Revenue</h6>\r\n      <div class=\"count\">$ 50,24</div>\r\n      <small>11750</small>\r\n      <md-icon>equalizer</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Products</h6>\r\n      <div class=\"count\">2,543</div>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">+210</ni-badge>\r\n      <md-icon>monetization_on</md-icon>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <ni-card [bgColor]=\"'info'\" [outline]=\"true\" class=\"info-card\">\r\n      <h6 class=\"mt-0 title\">Sold</h6>\r\n      <div class=\"count\">1,005</div>\r\n      <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">+24%</ni-badge>\r\n      <md-icon>donut_large</md-icon>\r\n    </ni-card>\r\n  </div>\r\n</div>\r\n\r\n<ni-card>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div id=\"amchart-2\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div id=\"amchart-3\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div id=\"amchart-4\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n    </div>\r\n  </div>\r\n</ni-card>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'Changelog'\" [outline]=\"true\" class=\"mb-lg-0\">\r\n      <ni-h-timeline [showYears]=\"false\" [showDate]=\"false\" [align]=\"'left'\" [data]=\"timelineData\"></ni-h-timeline>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <ni-card [title]=\"'To do list'\" class=\"mb-0\">\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let folder of folders\">\r\n          <md-icon md-list-avatar>{{folder.icon}}<ni-badge *ngIf=\"folder.badge\" [color]=\"'danger'\" [position]=\"'top-right'\">{{folder.badge}}</ni-badge></md-icon>\r\n          <h4 md-line>{{folder.name}}</h4>\r\n          <p md-line><i>{{folder.updated}}</i></p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </ni-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/requests/requests.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 400px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n  @media (max-width: 767px) {\n    .chart-container {\n      height: 300px; } }\n  .chart-container canvas {\n    margin: 0 auto;\n    max-height: 100%;\n    width: auto !important; }\n\n:host /deep/ .amcharts-graph-g2 .amcharts-graph-stroke {\n  stroke-dasharray: 3px 3px;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  -webkit-animation: am-moving-dashes 1s linear infinite;\n          animation: am-moving-dashes 1s linear infinite; }\n\n@-webkit-keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n@keyframes am-moving-dashes {\n  100% {\n    stroke-dashoffset: -31px; } }\n\n:host /deep/ .lastBullet {\n  -webkit-animation: am-pulsating 1s ease-out infinite;\n          animation: am-pulsating 1s ease-out infinite; }\n\n@-webkit-keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n@keyframes am-pulsating {\n  0% {\n    stroke-opacity: 1;\n    stroke-width: 0px; }\n  100% {\n    stroke-opacity: 0;\n    stroke-width: 50px; } }\n\n:host /deep/ .amcharts-graph-column-front {\n  transition: all .3s .3s ease-out; }\n\n:host /deep/ .amcharts-graph-column-front:hover {\n  fill: #496375;\n  stroke: #496375;\n  transition: all .3s ease-out; }\n\n:host /deep/ .amcharts-graph-g3 {\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  stroke-dasharray: 500%;\n  stroke-dasharray: 0;\n  stroke-dashoffset: 0;\n  -webkit-animation: am-draw 40s;\n          animation: am-draw 40s; }\n\n@-webkit-keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n\n@keyframes am-draw {\n  0% {\n    stroke-dashoffset: 500%; }\n  100% {\n    stroke-dashoffset: 0%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/requests/requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var folders = [
    {
        icon: 'android',
        badge: false,
        name: 'Android app',
        updated: 'July 21, 2017'
    },
    {
        icon: 'update',
        badge: false,
        name: 'Update plugins',
        updated: 'July 19, 2017'
    },
    {
        icon: 'bug_report',
        badge: false,
        name: 'Fix bugs',
        updated: 'July 22, 2017'
    },
    {
        icon: 'unarchive',
        badge: false,
        name: 'Create app design',
        updated: 'July 25, 2017'
    },
    {
        icon: 'content_copy',
        badge: 8,
        name: 'Create widgets',
        updated: 'July 16, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Documentation',
        updated: 'July 28, 2017'
    },
    {
        icon: 'folder_open',
        badge: false,
        name: 'Upload',
        updated: 'July 30, 2017'
    }
];
var timelineData = [
    {
        'timeline': [
            {
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'pointColor': '#ea8080'
            },
            {
                'content': "Aenean lacinia bibendum nulla.",
                'pointColor': '#915035'
            },
            {
                'content': "Lorem ipsum dolor sit amet.",
                'pointColor': '#B925FF'
            },
            {
                'content': "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                'pointColor': '#C5CAE9'
            },
            {
                'content': "Lorem ipsum dolor sit.",
                'pointColor': '#FF8A65'
            }
        ]
    }
];
var PageRequestsComponent = (function () {
    function PageRequestsComponent(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Requests';
        this.folders = folders;
        this.timelineData = timelineData;
        this._sharedService.emitChange(this.pageTitle);
    }
    PageRequestsComponent.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'serial',
            'theme': 'light',
            'dataDateFormat': 'YYYY-MM-DD',
            'dataProvider': [
                {
                    'date': '2012-01-01',
                    'distance': 227,
                    'townName': 'New York',
                    'townName2': 'New York',
                    'townSize': 25,
                    'latitude': 40.71,
                    'duration': 408
                }, {
                    'date': '2012-01-02',
                    'distance': 371,
                    'townName': 'Washington',
                    'townSize': 14,
                    'latitude': 38.89,
                    'duration': 482
                }, {
                    'date': '2012-01-03',
                    'distance': 433,
                    'townName': 'Wilmington',
                    'townSize': 6,
                    'latitude': 34.22,
                    'duration': 562
                }, {
                    'date': '2012-01-04',
                    'distance': 345,
                    'townName': 'Jacksonville',
                    'townSize': 7,
                    'latitude': 30.35,
                    'duration': 379
                }, {
                    'date': '2012-01-05',
                    'distance': 480,
                    'townName': 'Miami',
                    'townName2': 'Miami',
                    'townSize': 10,
                    'latitude': 25.83,
                    'duration': 501
                }, {
                    'date': '2012-01-06',
                    'distance': 386,
                    'townName': 'Tallahassee',
                    'townSize': 7,
                    'latitude': 30.46,
                    'duration': 443
                }, {
                    'date': '2012-01-07',
                    'distance': 348,
                    'townName': 'New Orleans',
                    'townSize': 10,
                    'latitude': 29.94,
                    'duration': 405
                }, {
                    'date': '2012-01-08',
                    'distance': 238,
                    'townName': 'Houston',
                    'townName2': 'Houston',
                    'townSize': 16,
                    'latitude': 29.76,
                    'duration': 309
                }, {
                    'date': '2012-01-09',
                    'distance': 218,
                    'townName': 'Dalas',
                    'townSize': 17,
                    'latitude': 32.8,
                    'duration': 287
                }, {
                    'date': '2012-01-10',
                    'distance': 349,
                    'townName': 'Oklahoma City',
                    'townSize': 11,
                    'latitude': 35.49,
                    'duration': 485
                }, {
                    'date': '2012-01-11',
                    'distance': 603,
                    'townName': 'Kansas City',
                    'townSize': 10,
                    'latitude': 39.1,
                    'duration': 890
                }, {
                    'date': '2012-01-12',
                    'distance': 534,
                    'townName': 'Denver',
                    'townName2': 'Denver',
                    'townSize': 18,
                    'latitude': 39.74,
                    'duration': 810
                }, {
                    'date': '2012-01-13',
                    'townName': 'Salt Lake City',
                    'townSize': 12,
                    'distance': 425,
                    'duration': 670,
                    'latitude': 40.75,
                    'alpha': 0.4
                }, {
                    'date': '2012-01-14',
                    'latitude': 36.1,
                    'duration': 470,
                    'townName': 'Las Vegas',
                    'bulletClass': 'lastBullet'
                }
            ],
            'addClassNames': true,
            'startDuration': 1,
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'minPeriod': 'DD',
                'autoGridCount': false,
                'gridCount': 50,
                'gridAlpha': 0.1,
                'gridColor': '#FFFFFF',
                'axisColor': '#555555',
                'dateFormats': [{
                        'period': 'DD',
                        'format': 'DD'
                    }, {
                        'period': 'WW',
                        'format': 'MMM DD'
                    }, {
                        'period': 'MM',
                        'format': 'MMM'
                    }, {
                        'period': 'YYYY',
                        'format': 'YYYY'
                    }]
            },
            'valueAxes': [{
                    'id': 'a1',
                    'title': 'distance',
                    'gridAlpha': 0,
                    'axisAlpha': 0
                }, {
                    'id': 'a2',
                    'position': 'right',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'labelsEnabled': false
                }],
            'graphs': [{
                    'id': 'g1',
                    'valueField': 'distance',
                    'title': 'distance',
                    'type': 'column',
                    'fillAlphas': 0.9,
                    'valueAxis': 'a1',
                    'balloonText': '[[value]] miles',
                    'legendValueText': '[[value]] mi',
                    'legendPeriodValueText': 'total: [[value.sum]] mi',
                    'lineColor': '#B3E5FC',
                    'alphaField': 'alpha'
                }, {
                    'id': 'g2',
                    'valueField': 'latitude',
                    'classNameField': 'bulletClass',
                    'title': 'latitude/city',
                    'type': 'line',
                    'valueAxis': 'a2',
                    'lineColor': '#d50000',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]/[[description]]',
                    'descriptionField': 'townName',
                    'bullet': 'round',
                    'bulletSizeField': 'townSize',
                    'bulletBorderColor': '#ca0000',
                    'bulletBorderAlpha': 1,
                    'bulletBorderThickness': 2,
                    'bulletColor': '#f2b3b3',
                    'labelText': '[[townName2]]',
                    'labelPosition': 'right',
                    'balloonText': 'latitude:[[value]]',
                    'showBalloon': true,
                    'animationPlayed': true
                }, {
                    'id': 'g3',
                    'title': 'duration',
                    'valueField': 'duration',
                    'type': 'line',
                    'valueAxis': 'a3',
                    'lineColor': '#64B5F6',
                    'balloonText': '[[value]]',
                    'lineThickness': 1,
                    'legendValueText': '[[value]]',
                    'bullet': 'square',
                    'bulletBorderColor': '#64B5F6',
                    'bulletBorderThickness': 1,
                    'bulletBorderAlpha': 1,
                    'dashLengthField': 'dashLength',
                    'animationPlayed': true
                }],
            'chartCursor': {
                'zoomable': false,
                'categoryBalloonDateFormat': 'DD',
                'cursorAlpha': 0,
                'valueBalloonsEnabled': false
            },
            'legend': {
                'bulletType': 'round',
                'equalWidths': false,
                'valueWidth': 120,
                'useGraphSettings': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Lithuania',
                    'litres': 501.9
                }, {
                    'country': 'Czech Republic',
                    'litres': 301.9
                }, {
                    'country': 'Ireland',
                    'litres': 201.1
                }, {
                    'country': 'Germany',
                    'litres': 165.8
                }, {
                    'country': 'Australia',
                    'litres': 139.9
                }, {
                    'country': 'Austria',
                    'litres': 128.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }, {
                    'country': 'Belgium',
                    'litres': 60
                }, {
                    'country': 'The Netherlands',
                    'litres': 50
                }
            ],
            'pullOutRadius': 0,
            'labelRadius': -40,
            'valueField': 'litres',
            'titleField': 'country',
            'labelText': '[[litres]]',
            'balloon': {
                'fixedPosition': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-3', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'title': 'Chrome',
                    'value': 70
                }, {
                    'title': 'Firefox',
                    'value': 15
                }, {
                    'title': 'Opera',
                    'value': 10
                }, {
                    'title': 'Safari',
                    'value': 12
                }, {
                    'title': 'Edge',
                    'value': 5
                }
            ],
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': -40,
            'radius': '46%',
            'innerRadius': '60%',
            'labelText': '[[title]]'
        });
        this.chart = this.AmCharts.makeChart('amchart-4', {
            'type': 'radar',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Czech Republic',
                    'litres': 156.9
                }, {
                    'country': 'Ireland',
                    'litres': 131.1
                }, {
                    'country': 'Germany',
                    'litres': 115.8
                }, {
                    'country': 'Australia',
                    'litres': 109.9
                }, {
                    'country': 'Austria',
                    'litres': 108.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }
            ],
            'valueAxes': [{
                    'axisTitleOffset': 20,
                    'minimum': 0,
                    'axisAlpha': 0.15
                }],
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[value]] litres of beer per year',
                    'bullet': 'round',
                    'lineThickness': 2,
                    'valueField': 'litres'
                }],
            'categoryField': 'country'
        });
    };
    PageRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-requests',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/requests/requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/default-pages/requests/requests.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageRequestsComponent);
    return PageRequestsComponent;
    var _a, _b;
}());

//# sourceMappingURL=requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/simulation/simulation.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ni-card [title]=\"'Headers'\">\n  <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Heading 1</h1>\n      <h2>Heading 2</h2>\n      <h3>Heading 3</h3>\n      <h4>Heading 4</h4>\n      <h5>Heading 5</h5>\n      <h6>Heading 6</h6>\n    </div>\n    <div class=\"col-md-6\">\n      <h1 class=\"text-uppercase\">Heading 1</h1>\n      <h2 class=\"text-uppercase\">Heading 2</h2>\n      <h3 class=\"text-uppercase\">Heading 3</h3>\n      <h4 class=\"text-uppercase\">Heading 4</h4>\n      <h5 class=\"text-uppercase\">Heading 5</h5>\n      <h6 class=\"text-uppercase\">Heading 6</h6>\n    </div>\n  </div>\n</ni-card>\n\n<ni-card [title]=\"'Text style'\">\n  <p><code>.mark</code> and <code>.small</code> classes are also available to apply the same styles as <code>&lt;mark&gt;</code> and <code>&lt;small&gt;</code> while avoiding any unwanted semantic implications that the tags would bring.</p>\n  <p>You can use the mark tag to <mark>highlight</mark> text.</p>\n  <p><del>This line of text is meant to be treated as deleted text.</del></p>\n  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n  <p><u>This line of text will render as underlined</u></p>\n  <p><small>This line of text is meant to be treated as fine print.</small></p>\n  <p><strong>This line rendered as bold text.</strong></p>\n  <p><em>This line rendered as italicized text.</em></p>\n</ni-card>\n\n<ni-card [title]=\"'Blockquotes'\">\n  <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote class=\"blockquote\"&gt;</code> around any <abbr title=\"HyperText Markup Language\">HTML</abbr> as the quote.</p>\n  <blockquote class=\"blockquote\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n  </blockquote>\n\n  <blockquote class=\"blockquote blockquote-reverse\">\n    <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n    <footer class=\"blockquote-footer\">Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n  </blockquote>\n</ni-card>\n\n<ni-card [title]=\"'Lists'\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <ul>\n        <li>Lorem ipsum dolor sit amet</li>\n        <li>Consectetur adipiscing elit</li>\n        <li>Integer molestie lorem at massa</li>\n        <li>Facilisis in pretium nisl aliquet</li>\n        <li>Nulla volutpat aliquam velit\n          <ul>\n            <li>Phasellus iaculis neque</li>\n            <li>Purus sodales ultricies</li>\n            <li>Vestibulum laoreet porttitor sem</li>\n            <li>Ac tristique libero volutpat at</li>\n          </ul>\n        </li>\n        <li>Faucibus porta lacus fringilla vel</li>\n        <li>Aenean sit amet erat nunc</li>\n        <li>Eget porttitor lorem</li>\n      </ul>\n    </div>\n    <div class=\"col-md-6\">\n      <ol>\n        <li>Lorem ipsum dolor sit amet</li>\n        <li>Consectetur adipiscing elit</li>\n        <li>Integer molestie lorem at massa</li>\n        <li>Facilisis in pretium nisl aliquet</li>\n        <li>Nulla volutpat aliquam velit\n          <ol>\n            <li>Phasellus iaculis neque</li>\n            <li>Purus sodales ultricies</li>\n            <li>Vestibulum laoreet porttitor sem</li>\n            <li>Ac tristique libero volutpat at</li>\n          </ol>\n        </li>\n        <li>Faucibus porta lacus fringilla vel</li>\n        <li>Aenean sit amet erat nunc</li>\n        <li>Eget porttitor lorem</li>\n      </ol>\n    </div>\n  </div>\n</ni-card>\n\n<ni-card [title]=\"'Text alignment'\">\n  <p>Easily realign text to components with text alignment classes.</p>\n  <p class=\"text-left\">Left aligned text on all viewport sizes.</p>\n  <p class=\"text-center\">Center aligned text on all viewport sizes.</p>\n  <p class=\"text-right\">Right aligned text on all viewport sizes.</p>\n</ni-card>\n\n<ni-card [title]=\"'Text transform'\" class=\"mb-0\">\n  <p>Transform text in components with text capitalization classes.</p>\n  <p class=\"text-lowercase\">Lowercased text.</p>\n  <p class=\"text-uppercase\">Uppercased text.</p>\n  <p class=\"text-capitalize\">CapiTaliZed text.</p>\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/simulation/simulation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/simulation/simulation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSimulationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageSimulationComponent = (function () {
    function PageSimulationComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.pageTitle = 'Simulation';
        this._sharedService.emitChange(this.pageTitle);
    }
    PageSimulationComponent.prototype.ngOnInit = function () { };
    PageSimulationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-simulation',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/simulation/simulation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/default-pages/simulation/simulation.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _a || Object])
    ], PageSimulationComponent);
    return PageSimulationComponent;
    var _a;
}());

//# sourceMappingURL=simulation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-lg-4\">\r\n    <ni-card>\r\n      <div id=\"amchart-1\" [style.width.%]=\"100\" [style.height.px]=\"300\"></div>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <ni-card>\r\n      <div id=\"amchart-2\" [style.width.%]=\"100\" [style.height.px]=\"300\"></div>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <ni-card>\r\n      <div id=\"amchart-3\" [style.width.%]=\"100\" [style.height.px]=\"300\"></div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-xl-8\">\r\n    <ni-card [title]=\"'What we doing'\">\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolor ducimus est excepturi illo itaque\r\n        modi quis repudiandae totam vitae. Accusamus beatae consectetur dolorum pariatur sapiente. Ad architecto at aut\r\n        et ex facilis fuga, laboriosam, magnam modi obcaecati officia officiis, omnis praesentium quam quas reiciendis\r\n        rerum ullam velit veritatis vitae.</p>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Wordpress</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"90\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Magento</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"80\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Opencart</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"60\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Drupal</strong></p>\r\n          <md-progress-bar mode=\"determinate\" [value]=\"30\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <p class=\"mb-1\"><strong>Angular</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>React</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Vue.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\r\n\r\n          <p class=\"mb-1\"><strong>Backbone.js</strong></p>\r\n          <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at corporis deleniti dicta doloremque\r\n        doloribus, ea ex excepturi fugiat labore minima possimus quia repellat similique soluta ut voluptate! Ad et hic\r\n        incidunt molestiae mollitia officiis omnis, perspiciatis quaerat qui quibusdam.</p>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-xl-4\">\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"pieChartData\"\r\n          [colors]=\"pieChartColors\"\r\n          [labels]=\"pieChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"pieChartOptions\"\r\n          [chartType]=\"pieChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>930</strong> <small>Resolved</small></div>\r\n        <div class=\"small\">More than 70% resolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"doughnutChartData\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"doughnutChartOptions\"\r\n          [chartType]=\"doughnutChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>466</strong> <small>Unresolved</small></div>\r\n        <div class=\"small\">Less than 30% unresolved issues</div>\r\n      </div>\r\n    </ni-card>\r\n    <ni-card [bgColor]=\"''\" class=\"chart-card\">\r\n      <div class=\"chart\">\r\n        <canvas\r\n          baseChart\r\n          [data]=\"polarAreaChartData\"\r\n          [colors]=\"polarAreaChartColors\"\r\n          [labels]=\"polarAreaChartLabels\"\r\n          [legend]=\"false\"\r\n          [options]=\"polarAreaChartOptions\"\r\n          [chartType]=\"polarAreaChartType\"></canvas>\r\n      </div>\r\n      <div class=\"info\">\r\n        <div class=\"title\"><strong>1,547</strong> <small>Issues</small></div>\r\n        <div class=\"small\">8 issues are unassigned</div>\r\n      </div>\r\n    </ni-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <ni-card [title]=\"'Recent activities'\" [outline]=\"true\" class=\"mb-md-0\">\r\n      <ni-h-timeline [showYears]=\"false\" [align]=\"'left'\" [data]=\"timelineData\"></ni-h-timeline>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <ni-card [title]=\"'Last sales'\" class=\"mb-md-0\">\r\n      <div class=\"table-responsive mb-3\">\r\n        <table class=\"table table-sm\">\r\n          <tbody>\r\n          <tr>\r\n            <td>Samsung Galaxy S8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu M3</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Meizu Pro 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">5</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Apple iPhone SE</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'warning'\" [borderRadius]=\"false\">7</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 6</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>iPhone 7</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">1</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Huawei P8</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">4</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Ipad Mini</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'info'\" [borderRadius]=\"false\">15</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Ipad Pro</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'success'\" [borderRadius]=\"false\">6</ni-badge>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Xiaomi Mi Band 2</td>\r\n            <td class=\"text-right\">\r\n              <ni-badge [color]=\"'danger'\" [borderRadius]=\"false\">10</ni-badge>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <button ni-button block=\"true\" type=\"accent\" outline=\"true\" lineStyle=\"dashed\" beforeIcon=\"fa fa-shopping-basket\">Look all</button>\r\n    </ni-card>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <ni-chat [activeUser]=\"activeUser\" [messages]=\"messages\" [style.height.px]=\"474\"></ni-chat>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/transactions/transactions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/.ni-h-timeline .timeline-box .box-items .item {\n  margin: 0.6875rem 0 !important;\n  padding-left: 30px !important; }\n  :host /deep/.ni-h-timeline .timeline-box .box-items .item .item-content {\n    padding: 0.6875rem !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/default-pages/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__ = __webpack_require__("../../../../../src/app/layouts/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var timelineData = [
    {
        'timeline': [
            {
                'date': '12 minutes ago',
                'content': "You <span class=\"text-info\">recommended</span> Sem B.",
                'pointColor': '#ea8080'
            },
            {
                'date': '37 minutes ago',
                'content': "You followed Sydney N.",
                'pointColor': '#915035'
            },
            {
                'date': '2 hours ago',
                'content': "You <span class=\"text-danger\">subscribed</span> to Harold Fuller",
                'pointColor': '#B925FF'
            },
            {
                'date': '7 hours ago',
                'content': "You updated your profile picture",
                'pointColor': '#C5CAE9'
            }
        ]
    }
];
var PageTransactionsComponent = (function () {
    function PageTransactionsComponent(AmCharts, _sharedService) {
        this.AmCharts = AmCharts;
        this._sharedService = _sharedService;
        this.pageTitle = 'Transactions';
        this.timelineData = timelineData;
        this.activeUser = {
            name: 'Amanda Li',
            lastSeen: 'last seen 10 minutes ago',
            avatar: 'assets/content/avatar-4.jpg'
        };
        this.messages = [
            {
                'date': '8 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'my': false
            },
            {
                'date': '7 hours ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'my': true
            },
            {
                'date': '2 hours ago',
                'content': "Contrary to popular belief,",
                'my': false
            },
            {
                'date': '15 minutes ago',
                'content': "Lorem ipsum dolor sit.",
                'my': true
            },
            {
                'date': '14 minutes ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.",
                'my': false
            },
            {
                'date': '12 minutes ago',
                'content': "Aenean lacinia bibendum nulla sed consectetur.",
                'my': true
            }
        ];
        // Pie
        this.pieChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.pieChartData = [
            300,
            500,
            100
        ];
        this.pieChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#5dade0",
                    "#3c4e62"
                ],
            }
        ];
        this.pieChartType = 'pie';
        this.pieChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        //Doughnut
        this.doughnutChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.doughnutChartData = [
            350,
            450,
            100
        ];
        this.doughnutChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#ff8c00",
                    "#3c4e62"
                ],
            }
        ];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        // PolarArea
        this.polarAreaChartLabels = [
            'Angular',
            'PHP',
            'HTML'
        ];
        this.polarAreaChartData = [
            300,
            400,
            500
        ];
        this.polarAreaChartColors = [
            {
                backgroundColor: [
                    "#778391",
                    "#dc143c",
                    "#3c4e62"
                ],
            }
        ];
        this.polarAreaChartType = 'polarArea';
        this.polarAreaChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            tooltips: false
        };
        this._sharedService.emitChange(this.pageTitle);
    }
    PageTransactionsComponent.prototype.ngOnInit = function () {
        this.chart = this.AmCharts.makeChart('amchart-1', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Lithuania',
                    'litres': 501.9
                }, {
                    'country': 'Czech Republic',
                    'litres': 301.9
                }, {
                    'country': 'Ireland',
                    'litres': 201.1
                }, {
                    'country': 'Germany',
                    'litres': 165.8
                }, {
                    'country': 'Australia',
                    'litres': 139.9
                }, {
                    'country': 'Austria',
                    'litres': 128.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }, {
                    'country': 'Belgium',
                    'litres': 60
                }, {
                    'country': 'The Netherlands',
                    'litres': 50
                }
            ],
            'pullOutRadius': 0,
            'labelRadius': -40,
            'valueField': 'litres',
            'titleField': 'country',
            'labelText': '[[litres]]',
            'balloon': {
                'fixedPosition': true
            }
        });
        this.chart = this.AmCharts.makeChart('amchart-2', {
            'type': 'pie',
            'theme': 'light',
            'dataProvider': [
                {
                    'title': 'Chrome',
                    'value': 70
                }, {
                    'title': 'Firefox',
                    'value': 15
                }, {
                    'title': 'Opera',
                    'value': 10
                }, {
                    'title': 'Safari',
                    'value': 12
                }, {
                    'title': 'Edge',
                    'value': 5
                }
            ],
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': -40,
            'radius': '46%',
            'innerRadius': '60%',
            'labelText': '[[title]]'
        });
        this.chart = this.AmCharts.makeChart('amchart-3', {
            'type': 'radar',
            'theme': 'light',
            'dataProvider': [
                {
                    'country': 'Czech Republic',
                    'litres': 156.9
                }, {
                    'country': 'Ireland',
                    'litres': 131.1
                }, {
                    'country': 'Germany',
                    'litres': 115.8
                }, {
                    'country': 'Australia',
                    'litres': 109.9
                }, {
                    'country': 'Austria',
                    'litres': 108.3
                }, {
                    'country': 'UK',
                    'litres': 99
                }
            ],
            'valueAxes': [{
                    'axisTitleOffset': 20,
                    'minimum': 0,
                    'axisAlpha': 0.15
                }],
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[value]] litres of beer per year',
                    'bullet': 'round',
                    'lineThickness': 2,
                    'valueField': 'litres'
                }],
            'categoryField': 'country'
        });
    };
    PageTransactionsComponent.prototype.ngOnDestroy = function () {
        this.AmCharts.destroyChart(this.chart);
    };
    PageTransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transactions',
            template: __webpack_require__("../../../../../src/app/pages/default-pages/transactions/transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/default-pages/transactions/transactions.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layouts_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
    ], PageTransactionsComponent);
    return PageTransactionsComponent;
    var _a, _b;
}());

//# sourceMappingURL=transactions.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Confirm Email'\" [align]=\"'center'\">\r\n  <span class=\"material-icons\">mail_outline</span>\r\n  <p class=\"small\">An email has been send to username@mail.com. Please check for an email from us and click on the included link to reset your password.</p>\r\n  <div class=\"additional-info\">\r\n    <a [routerLink]=\"'/extra-layout/sign-in'\">Return to Sign in</a>\r\n  </div>\r\n</ni-card>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/confirm/confirm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #666c7e;\n  display: table-cell;\n  height: 100%;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card .material-icons {\n      color: #666c7e;\n      font-size: 100px; }\n    :host .ni-card .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageConfirmComponent = (function () {
    function PageConfirmComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    PageConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("aaaa");
        this.auth.validateEmail().then(function (res) {
            if (res === 'yes') {
                _this.router.navigate(['/default-layout/dashboard']);
            }
        });
    };
    PageConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirm',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], PageConfirmComponent);
    return PageConfirmComponent;
    var _a, _b;
}());

//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'Reset Your Password'\" [align]=\"'center'\">\r\n  <form (ngSubmit)=\"onSubmit()\">\r\n    <md-input-container>\r\n      <input mdInput placeholder=\"Email\" value=\"\">\r\n    </md-input-container>\r\n\r\n    <p class=\"text-left small\">Enter your email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>\r\n\r\n    <button md-raised-button color=\"primary\" type=\"submit\">Reset</button>\r\n\r\n    <div class=\"additional-info\">\r\n      <a [routerLink]=\"'/extra-layout/sign-in'\">Sign In</a>\r\n    </div>\r\n  </form>\r\n</ni-card>"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/forgot/forgot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #666c7e;\n  display: table-cell;\n  height: 100%;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card form button {\n      width: 100%; }\n    :host .ni-card form .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n      :host .ni-card form .additional-info .divider {\n        border-left: 1px solid rgba(0, 0, 0, 0.2);\n        display: inline-block;\n        height: 18px;\n        margin: 0 10px;\n        vertical-align: bottom; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageForgotComponent = (function () {
    function PageForgotComponent() {
    }
    PageForgotComponent.prototype.ngOnInit = function () { };
    PageForgotComponent.prototype.onSubmit = function () { };
    PageForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageForgotComponent);
    return PageForgotComponent;
}());

//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-404/page-404.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\r\n<h2>Page not found!</h2>\r\n<p>Sorry, but the page you were trying to view does not exist. Report this error?</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-404/page-404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #FFB74D;\n  color: #fff;\n  display: table-cell;\n  height: 100%;\n  padding: 1.375rem;\n  text-align: center;\n  vertical-align: middle;\n  width: 100%; }\n  :host h1 {\n    font-size: 8rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: 9.5rem;\n    position: relative; }\n    @media (max-width: 767px) {\n      :host h1 {\n        margin-bottom: 6rem; } }\n    :host h1:before {\n      content: \"\\F29C\";\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font: normal normal normal 14px/1 FontAwesome;\n      font-size: 26rem;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      left: 0;\n      line-height: 1;\n      margin-top: -13rem;\n      opacity: .2;\n      position: absolute;\n      right: 0;\n      text-rendering: auto;\n      top: 50%;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale; }\n      @media (max-width: 767px) {\n        :host h1:before {\n          font-size: 20rem;\n          margin-top: -10rem; } }\n  :host h2 {\n    font-size: 2rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: .5rem; }\n  :host p {\n    color: rgba(255, 255, 255, 0.5);\n    margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-404/page-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () { };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-404',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());

//# sourceMappingURL=page-404.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-500/page-500.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Server Error</h1>\r\n<h2>Sorry, server goes wrong</h2>\r\n<p>We track these errors automatically, but if the problem persists feel free to <a href=\"#\">contact us</a>.</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-500/page-500.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #FFB74D;\n  color: #fff;\n  display: table-cell;\n  height: 100%;\n  padding: 1.375rem;\n  text-align: center;\n  vertical-align: middle;\n  width: 100%; }\n  :host h1 {\n    font-size: 3.5rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: 9.5rem;\n    position: relative; }\n    @media (max-width: 767px) {\n      :host h1 {\n        margin-bottom: 6rem; } }\n    :host h1:before {\n      content: \"\\F29C\";\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font: normal normal normal 14px/1 FontAwesome;\n      font-size: 26rem;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      left: 0;\n      line-height: 1;\n      margin-top: -13rem;\n      opacity: .2;\n      position: absolute;\n      right: 0;\n      text-rendering: auto;\n      top: 50%;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale; }\n      @media (max-width: 767px) {\n        :host h1:before {\n          font-size: 20rem;\n          margin-top: -10rem; } }\n  :host h2 {\n    font-size: 2rem;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: .5rem; }\n  :host p {\n    color: rgba(255, 255, 255, 0.5);\n    margin: 0; }\n  :host a {\n    color: rgba(255, 255, 255, 0.7); }\n    :host a:hover {\n      color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/page-500/page-500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page500Component = (function () {
    function Page500Component() {
    }
    Page500Component.prototype.ngOnInit = function () { };
    Page500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-500',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page500Component);
    return Page500Component;
}());

//# sourceMappingURL=page-500.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'signin' | translate\" [align]=\"'left'\">\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n    <md-input-container>\r\n      <input mdInput [placeholder]=\"'email' | translate\" value=\"\" [formControl]=\"form.controls['email']\" type=\"email\">\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n      <input mdInput [placeholder]=\"'password' | translate\" value=\"\" [formControl]=\"form.controls['password']\" type=\"password\">\r\n    </md-input-container>\r\n\r\n    <div class=\"text-left mb-module\">\r\n      <md-checkbox>\r\n        {{'keepSigned' | translate}}\r\n      </md-checkbox>\r\n    </div>\r\n\r\n    <button md-raised-button color=\"primary\" type=\"submit\">{{'signin' | translate}}</button>\r\n\r\n    <md-select [placeholder]=\"'selectLanguage' | translate\" class=\"mt-4 col-sm-12\" (ngModelChange)=\"changeLanguage()\" [formControl]=\"form.controls['langCode']\">\r\n      <md-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">\r\n        {{ lang.value }}\r\n      </md-option>\r\n    </md-select>\r\n\r\n    <div class=\"additional-info\">\r\n      <a (click)=\"goSignupPage()\">{{'signup' | translate}}</a>\r\n      <span class=\"divider\"></span>\r\n      <a (click)=\"goForgotPage()\">{{'forgotPassword' | translate}}</a>\r\n    </div>\r\n  </form>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: url(" + __webpack_require__("../../../../../src/assets/content/login-bg.jpg") + ") 50% 50% no-repeat;\n  background-size: cover;\n  display: table-cell;\n  height: 100%;\n  padding: 1.375rem 0;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card form button {\n      width: 100%; }\n    :host .ni-card form .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n      :host .ni-card form .additional-info .divider {\n        border-left: 1px solid rgba(0, 0, 0, 0.2);\n        display: inline-block;\n        height: 18px;\n        margin: 0 10px;\n        vertical-align: bottom; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_menu__ = __webpack_require__("../../../../../src/settings/menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageSigninComponent = (function () {
    function PageSigninComponent(router, auth, fb, translate) {
        this.router = router;
        this.auth = auth;
        this.fb = fb;
        this.translate = translate;
        this.languages = __WEBPACK_IMPORTED_MODULE_5__settings_menu__["a" /* LANGUAGES */];
        this.form = this.fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            langCode: ['en']
        });
        this.auth.langCode.subscribe(function (code) {
            translate.use(code);
        });
    }
    PageSigninComponent.prototype.ngOnInit = function () {
        this.auth.isConfirm = false;
        this.auth.isLogged = false;
    };
    PageSigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.login(this.form.value).then(function (res) {
            if (res === 'yes') {
                _this.router.navigate(['/default-layout/dashboard']);
            }
        });
    };
    PageSigninComponent.prototype.changeLanguage = function () {
        var _this = this;
        this.form.controls.langCode.valueChanges.subscribe(function (d) {
            _this.translate.use(d);
            _this.auth.changeLanguage(d);
        });
    };
    PageSigninComponent.prototype.goSignupPage = function () {
        this.auth.redirectPage = 'signup';
        this.router.navigate(['/extra-layout/sign-up']);
    };
    PageSigninComponent.prototype.goForgotPage = function () {
        this.auth.redirectPage = 'forgot';
        this.router.navigate(['/extra-layout/forgot']);
    };
    PageSigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]) === "function" && _d || Object])
    ], PageSigninComponent);
    return PageSigninComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/signup/dialog-result.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Privacy and Terms</h2>\n<div md-dialog-content>Combining data\n    We also combine data among our services and across your devices for these purposes. For example, we show you ads based on information from your use of Search and Gmail, and we use data from trillions of search queries to build spell-correction models that we use across all of our services.</div>\n<div md-dialog-actions>\n  <button md-raised-button (click)=\"dialogRef.close('no')\">CANCEL</button>\n  <button md-raised-button (click)=\"dialogRef.close('yes')\" color=\"accent\">I AGREE</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<ni-card [title]=\"'signup' | translate\" [align]=\"'left'\">\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n    <md-input-container>\r\n      <input mdInput [placeholder]=\"'firstname' | translate\" [formControl]=\"form.controls['fname']\">\r\n      <small *ngIf=\"form.controls['fname'].hasError('required') && form.controls['fname'].touched\" class=\"form-message text-danger\">{{'firstnameValid1' | translate}}</small>\r\n      <small *ngIf=\"form.controls['fname'].hasError('minlength') && form.controls['fname'].touched\" class=\"form-message text-danger\">{{'firstnameValid2' | translate}}</small>\r\n      <small *ngIf=\"form.controls['fname'].hasError('maxlength') && form.controls['fname'].touched\" class=\"form-message text-danger\">{{'firstnameValid3' | translate}}</small>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n        <input mdInput [placeholder]=\"'email' | translate\" [formControl]=\"form.controls['email']\" type=\"email\">\r\n        <small *ngIf=\"form.controls['email'].hasError('required') && form.controls['email'].touched\" class=\"form-message text-danger\">{{'emailValid1' | translate}}</small>\r\n        <small *ngIf=\"form.controls['email'].errors?.email && form.controls['email'].touched\" class=\"form-message text-danger\">{{'emailValid2' | translate}}</small>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n      <input mdInput [placeholder]=\"'password' | translate\" [formControl]=\"form.controls['password']\" type=\"password\">\r\n      <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"form-message text-danger\">{{'passwordValid1' | translate}}</small>\r\n    </md-input-container>\r\n\r\n    <md-input-container>\r\n      <input mdInput [placeholder]=\"'confirmPass' | translate\" [formControl]=\"form.controls['confirmPassword']\" type=\"password\">\r\n      <small *ngIf=\"form.controls['confirmPassword'].hasError('required') && form.controls['confirmPassword'].touched\" class=\"form-message text-danger\">{{'confirmpasswordValid1' | translate}}</small>\r\n      <small *ngIf=\"form.controls['confirmPassword'].errors?.equalTo\" class=\"form-message text-danger\">{{'confirmpasswordValid2' | translate}}</small>\r\n    </md-input-container>\r\n\r\n    <div class=\"text-left mb-4 mt-2\">\r\n      <label>{{'gender' | translate}}</label>\r\n      <md-radio-group [formControl]=\"form.controls['gender']\">\r\n        <md-radio-button value=\"male\">{{'male' | translate}}</md-radio-button>\r\n        <md-radio-button value=\"female\">{{'female' | translate}}</md-radio-button>\r\n        <small *ngIf=\"!form.controls['gender'].valid && form.controls['gender'].touched\" class=\"text-danger\">{{'genderValid1' | translate}}</small>\r\n      </md-radio-group>\r\n    </div>\r\n\r\n    <div class=\"text-left mb-module\">\r\n      <md-checkbox [formControl]=\"form.controls['agree']\" (click)=\"openDialog()\">\r\n        {{'agreeTermsofService' | translate}}\r\n      </md-checkbox>\r\n      <small *ngIf=\"!form.controls['agree'].valid && form.controls['agree'].touched\" class=\"text-danger\">{{'agreeTermsofService' | translate}}</small>\r\n    </div>\r\n\r\n    <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">{{'signup' | translate}}</button>\r\n\r\n    <div class=\"additional-info\">\r\n      {{'alreadyHaveAccount' | translate}}\r\n      <a [routerLink]=\"'/extra-layout/sign-in'\">{{'signin' | translate}}</a>\r\n    </div>\r\n  </form>\r\n</ni-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: url(" + __webpack_require__("../../../../../src/assets/content/signup-bg.jpg") + ") 50% 50% no-repeat;\n  background-size: cover;\n  display: table-cell;\n  height: 100%;\n  vertical-align: middle;\n  width: 100%; }\n  :host .ni-card {\n    margin: 0 auto;\n    max-width: 400px; }\n    :host .ni-card /deep/ .card-wrap {\n      border: 0; }\n    :host .ni-card form button {\n      width: 100%; }\n    :host .ni-card form .additional-info {\n      background: rgba(0, 0, 0, 0.1);\n      margin: 1.375rem -1.375rem -1.375rem;\n      padding: 0.6875rem 1.375rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/extra-pages/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageSignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
var confirmPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(password));
var PageSignupComponent = (function () {
    function PageSignupComponent(fb, auth, router, dialog, translate) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.translate = translate;
        this.auth.langCode.subscribe(function (code) {
            translate.use(code);
        });
    }
    PageSignupComponent.prototype.ngOnInit = function () {
        this.auth.isConfirm = false;
        this.auth.isLogged = false;
        this.form = this.fb.group({
            fname: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            email: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            gender: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            agree: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].requiredTrue],
            password: password,
            confirmPassword: confirmPassword,
            langCode: ['en']
        });
    };
    PageSignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.auth.signup(this.form.value).then(function (data) {
            _this.auth.redirectPage = 'confirm';
            _this.router.navigate(['/extra-layout/confirm']);
        });
    };
    PageSignupComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogResultComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result === 'yes') {
                _this.form.patchValue({ agree: true });
            }
            else {
                _this.form.patchValue({ agree: false });
            }
        });
    };
    PageSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/extra-pages/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["c" /* TranslateService */]) === "function" && _e || Object])
    ], PageSignupComponent);
    return PageSignupComponent;
    var _a, _b, _c, _d, _e;
}());

var DialogResultComponent = (function () {
    function DialogResultComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-result',
            template: __webpack_require__("../../../../../src/app/pages/extra-pages/signup/dialog-result.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdDialogRef */]) === "function" && _a || Object])
    ], DialogResultComponent);
    return DialogResultComponent;
    var _a;
}());

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ni_components_ni_components_module__ = __webpack_require__("../../../../../src/app/ni-components/ni-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_squeezebox__ = __webpack_require__("../../../../squeezebox/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__extra_pages_signin_signin_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__extra_pages_signup_signup_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__extra_pages_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__extra_pages_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__extra_pages_page_404_page_404_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-404/page-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__extra_pages_page_500_page_500_component__ = __webpack_require__("../../../../../src/app/pages/extra-pages/page-500/page-500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__default_pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__default_pages_groups_groups_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__default_pages_transactions_transactions_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__default_pages_requests_requests_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/requests/requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__default_pages_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__default_pages_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__default_pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__default_pages_simulation_simulation_component__ = __webpack_require__("../../../../../src/app/pages/default-pages/simulation/simulation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__ni_components_ni_components_module__["a" /* NiComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_translate__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdCoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MdExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MdGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MdProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MdRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MdSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MdSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MdSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MdTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk__["l" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
                }),
                __WEBPACK_IMPORTED_MODULE_11_squeezebox__["a" /* SqueezeBoxModule */],
                __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_20__default_pages_dashboard_dashboard_component__["a" /* PageDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__default_pages_groups_groups_component__["a" /* PageGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__default_pages_requests_requests_component__["a" /* PageRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__default_pages_profile_profile_component__["a" /* PageProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__default_pages_aboutus_aboutus_component__["a" /* PageAboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_27__default_pages_simulation_simulation_component__["a" /* PageSimulationComponent */],
                __WEBPACK_IMPORTED_MODULE_24__default_pages_not_found_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_22__default_pages_transactions_transactions_component__["a" /* PageTransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__extra_pages_signup_signup_component__["a" /* DialogResultComponent */],
                __WEBPACK_IMPORTED_MODULE_14__extra_pages_signin_signin_component__["a" /* PageSigninComponent */],
                __WEBPACK_IMPORTED_MODULE_15__extra_pages_signup_signup_component__["b" /* PageSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__extra_pages_forgot_forgot_component__["a" /* PageForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_17__extra_pages_confirm_confirm_component__["a" /* PageConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_18__extra_pages_page_404_page_404_component__["a" /* Page404Component */],
                __WEBPACK_IMPORTED_MODULE_19__extra_pages_page_500_page_500_component__["a" /* Page500Component */],
                __WEBPACK_IMPORTED_MODULE_24__default_pages_not_found_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_20__default_pages_dashboard_dashboard_component__["a" /* PageDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__default_pages_groups_groups_component__["a" /* PageGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__default_pages_requests_requests_component__["a" /* PageRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__default_pages_profile_profile_component__["a" /* PageProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__default_pages_aboutus_aboutus_component__["a" /* PageAboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_27__default_pages_simulation_simulation_component__["a" /* PageSimulationComponent */],
                __WEBPACK_IMPORTED_MODULE_24__default_pages_not_found_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_22__default_pages_transactions_transactions_component__["a" /* PageTransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__extra_pages_signup_signup_component__["a" /* DialogResultComponent */],
                __WEBPACK_IMPORTED_MODULE_14__extra_pages_signin_signin_component__["a" /* PageSigninComponent */],
                __WEBPACK_IMPORTED_MODULE_15__extra_pages_signup_signup_component__["b" /* PageSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__extra_pages_forgot_forgot_component__["a" /* PageForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_17__extra_pages_confirm_confirm_component__["a" /* PageConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_18__extra_pages_page_404_page_404_component__["a" /* Page404Component */],
                __WEBPACK_IMPORTED_MODULE_19__extra_pages_page_500_page_500_component__["a" /* Page500Component */],
                __WEBPACK_IMPORTED_MODULE_24__default_pages_not_found_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__extra_pages_signup_signup_component__["a" /* DialogResultComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLogged = false;
        this.isConfirm = false;
        this.confirmCode = '';
        this.confirmEmail = '';
        this.langCode = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]('en');
        this.redirectPage = '';
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.isLogged;
    };
    AuthService.prototype.isConfirmRequired = function () {
        return this.isConfirm;
    };
    AuthService.prototype.signup = function (data) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'create_account';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('email', data.email);
        params.set('first_name', data.fname);
        params.set('password', data.password);
        params.set('gender', data.gender);
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { search: params }).subscribe(function (res) {
                _this.isConfirm = true;
                resolve(res.json());
            });
        });
    };
    AuthService.prototype.login = function (data) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'login';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('email', data.email);
        params.set('password', data.password);
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { search: params }).subscribe(function (res) {
                _this.isLogged = true;
                _this.isConfirm = false;
                resolve(res.json().email_validated);
            });
        });
    };
    AuthService.prototype.getConfirmParams = function (url) {
        var searchUrl = new URL(url);
        this.confirmCode = searchUrl.searchParams.get('validation_code');
        this.confirmEmail = searchUrl.searchParams.get('email');
        if (this.confirmCode && this.confirmEmail) {
            this.isConfirm = true;
        }
    };
    AuthService.prototype.validateEmail = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'validate_user_email';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('email', this.confirmEmail);
        params.set('validation_code', this.confirmCode);
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { search: params }).subscribe(function (res) {
                _this.isConfirm = false;
                _this.isLogged = true;
                resolve(res.json().email_validated);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AuthService.prototype.changeLanguage = function (lang) {
        this.langCode.next(lang);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-access-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccessGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAccessGuardService = (function () {
    function UserAccessGuardService(authService) {
        this.authService = authService;
    }
    UserAccessGuardService.prototype.canActivate = function (snapshot) {
        var redirectData = snapshot.data['authGuardRedirect'];
        if (typeof redirectData !== 'undefined' && this.authService.redirectPage !== '') {
            if (redirectData === 'signup') {
                return this.authService.redirectPage === 'signup' ? true : false;
            }
            else if (redirectData === 'confirm') {
                return this.authService.redirectPage === 'confirm' && this.authService.isConfirmRequired() === true ? true : false;
            }
            else if (redirectData === 'forgot') {
                return this.authService.redirectPage === 'forgot' ? true : false;
            }
            else if (redirectData === 'page404') {
                return this.authService.redirectPage === 'page404' ? true : false;
            }
            else if (redirectData === 'page500') {
                return this.authService.redirectPage === 'page500' ? true : false;
            }
            else {
                return false;
            }
        }
        else {
            if (this.authService.isConfirmRequired() && redirectData === 'confirm') {
                return true;
            }
            else {
                return this.authService.isLoggedIn();
            }
        }
    };
    UserAccessGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], UserAccessGuardService);
    return UserAccessGuardService;
    var _a;
}());

//# sourceMappingURL=user-access-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"open-navbar\"  (click)=\"openNavbar($event)\">\n  <i class=\"icon fa fa-object-ungroup\"></i>\n</a>\n\n<div class=\"navbar-wrap\">\n  <div class=\"navbar-header\">\n    {{ title }}\n  </div>\n\n  <div class=\"navbar-content\">\n    <div>\n      <h5 class=\"mt-0\">Frameworks</h5>\n      <p class=\"mb-1\"><strong>Angular</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"98\"></md-progress-bar>\n\n      <p class=\"mb-1\"><strong>React</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"85\"></md-progress-bar>\n\n      <p class=\"mb-1\"><strong>Vue.js</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"40\"></md-progress-bar>\n\n      <p class=\"mb-1\"><strong>Backbone.js</strong></p>\n      <md-progress-bar mode=\"determinate\" color=\"accent\" [value]=\"38\"></md-progress-bar>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #e5e6e9;\n  bottom: 0;\n  box-shadow: -5px 0 5px -4px rgba(0, 0, 0, 0.25);\n  color: #000000;\n  position: fixed;\n  right: 0;\n  top: 0;\n  -webkit-transform: translate(300px, 0);\n          transform: translate(300px, 0);\n  transition: 0s z-index 0.2s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n  transition: 0.2s transform 0s ease-in-out, 0s z-index 0.2s ease-in-out;\n  transition: 0.2s transform 0s ease-in-out, 0s z-index 0.2s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n  width: 300px;\n  z-index: 9997; }\n  @media (max-width: 543px) {\n    :host {\n      -webkit-transform: translate(270px, 0);\n              transform: translate(270px, 0);\n      width: 270px; } }\n  .rtl :host {\n    left: 0;\n    right: auto;\n    -webkit-transform: translate(-300px, 0);\n            transform: translate(-300px, 0); }\n    @media (max-width: 543px) {\n      .rtl :host {\n        -webkit-transform: translate(-270px, 0);\n                transform: translate(-270px, 0); } }\n  :host.open {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    transition: 0.2s z-index 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n    transition: 0.2s transform 0s ease-in-out, 0.2s z-index 0s ease-in-out;\n    transition: 0.2s transform 0s ease-in-out, 0.2s z-index 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n    z-index: 9999; }\n  :host .open-navbar {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #e5e6e9;\n    border: 1px solid #e5e6e9;\n    border-right: 0;\n    border-radius: 3px 0 0 3px;\n    color: #000000;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 20px;\n    height: 50px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-right: -1px;\n    position: absolute;\n    right: 100%;\n    top: 92px;\n    transition: color 0.2s ease-in-out;\n    width: 50px; }\n    .rtl :host .open-navbar {\n      border-radius: 0 3px 3px 0;\n      left: 100%;\n      right: auto; }\n    :host .open-navbar:hover {\n      color: #2196f3; }\n  :host .navbar-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n    width: 100%; }\n    :host .navbar-wrap .navbar-header {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #1b2237;\n      color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 3.4375rem;\n      padding: 0.6875rem 1.375rem; }\n    :host .navbar-wrap .navbar-content {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      overflow: auto;\n      padding: 1.375rem;\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdditionNavbarComponent = (function () {
    function AdditionNavbarComponent() {
        this.title = 'Addition navbar';
        this.open = false;
    }
    AdditionNavbarComponent.prototype.openNavbar = function (event) {
        event.preventDefault();
        this.open = !this.open;
    };
    AdditionNavbarComponent.prototype.ngOnInit = function () { };
    AdditionNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addition-navbar',
            template: __webpack_require__("../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.scss")],
            host: {
                '[class.addition-navbar]': 'true',
                '[class.open]': 'open'
            }
        }),
        __metadata("design:paramtypes", [])
    ], AdditionNavbarComponent);
    return AdditionNavbarComponent;
}());

//# sourceMappingURL=addition-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"copyright\">© Copyright 2017. All Rights Reserved.</div>\r\n<div class=\"version\">Version 1.2.0</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #252d47;\n  color: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: .8rem;\n  height: 2.75rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  @media (max-width: 543px) {\n    :host {\n      font-size: .7rem; } }\n  :host .copyright,\n  :host .version {\n    padding: 10px 1.375rem; }\n  @media (max-width: 543px) {\n    :host .copyright {\n      padding-right: 0; }\n      .rtl :host .copyright {\n        padding-left: 0;\n        padding-right: 1.375rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/ui/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/footer/footer.component.scss")],
            host: { 'class': 'app-footer' }
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrap\">\r\n  <div class=\"navbar-button\" [ngClass]=\"{ 'open' : openedSidebar }\" (click)=\"openSidebar()\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n\r\n  <h1 class=\"page-title\">{{ title }}</h1>\r\n\r\n  <div class=\"nav-items\">\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <button md-raised-button color=\"accent\">Payment</button>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <button md-raised-button color=\"accent\">Create new group</button>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <button md-raised-button [mdMenuTriggerFor]=\"menu\" color=\"accent\">Group List</button>\r\n      <md-menu #menu=\"mdMenu\">\r\n        <button *ngFor=\"let group of groupList\" md-menu-item>\r\n          <span>{{group}}</span>\r\n        </button>\r\n      </md-menu>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <md-select [placeholder]=\"'Group list'\" (ngModelChange)=\"changeLanguage()\" [(ngModel)]=\"langCode\">\r\n        <md-option *ngFor=\"let lang of languages\" [value]=\"lang.code\">\r\n          {{ lang.code.toUpperCase() }}\r\n        </md-option>\r\n      </md-select>\r\n    </div>\r\n\r\n    <div class=\"nav-item\" [ngClass]=\"{ 'opened' : false }\">\r\n      <a href=\"#\" (click)=\"open($event)\" class=\"nav-link\">\r\n        <div class=\"avatar\"><img src=\"assets/content/avatar-2.jpg\" width=\"40\" height=\"40\" alt=\"\"></div>\r\n        <div class=\"name\">Justin Adams</div>\r\n      </a>\r\n\r\n      <div class=\"dropdown-menu mini-menu\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\"><span class=\"icon sli-home\"></span> My Account</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><span class=\"icon sli-user\"></span> Profile</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\" routerLink=\"/default-layout/calendar\"><span class=\"icon sli-calendar\"></span> Calendar</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><span class=\"icon sli-settings\"></span> Settings</a>\r\n          </li>\r\n          <li>\r\n            <a [routerLink]=\"'/'\"><span class=\"icon sli-logout\"></span> Log Out</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"items-overlay\" (click)=\"close($event)\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #252d47;\n  box-shadow: 0px 5px 5px -4px rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n  display: block;\n  height: 3.4375rem;\n  left: 15.125rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 9997; }\n  @media (max-width: 991px) {\n    :host {\n      left: 0; } }\n  .rtl :host {\n    left: 0;\n    right: 15.125rem; }\n    @media (max-width: 991px) {\n      .rtl :host {\n        right: 0; } }\n  :host.show-overlay {\n    z-index: 9998; }\n  :host .navbar-wrap {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    height: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 0 22px; }\n    @media (max-width: 991px) {\n      :host .navbar-wrap {\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; } }\n    :host .navbar-wrap .navbar-button {\n      cursor: pointer;\n      display: none;\n      height: 24px;\n      margin: 0;\n      position: relative;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n      width: 30px; }\n      @media (max-width: 991px) {\n        :host .navbar-wrap .navbar-button {\n          display: block; } }\n      :host .navbar-wrap .navbar-button span {\n        background: #ffffff;\n        display: block;\n        height: 3px;\n        opacity: 1;\n        position: absolute;\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n        transition: 0.25s ease-in-out;\n        width: 50%; }\n        :host .navbar-wrap .navbar-button span:nth-child(even) {\n          left: 50%; }\n        :host .navbar-wrap .navbar-button span:nth-child(odd) {\n          left: 0px; }\n        :host .navbar-wrap .navbar-button span:nth-child(1), :host .navbar-wrap .navbar-button span:nth-child(2) {\n          top: 0px; }\n        :host .navbar-wrap .navbar-button span:nth-child(3), :host .navbar-wrap .navbar-button span:nth-child(4) {\n          top: 10px; }\n        :host .navbar-wrap .navbar-button span:nth-child(5), :host .navbar-wrap .navbar-button span:nth-child(6) {\n          top: 20px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(1), :host .navbar-wrap .navbar-button.open span:nth-child(6) {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      :host .navbar-wrap .navbar-button.open span:nth-child(2), :host .navbar-wrap .navbar-button.open span:nth-child(5) {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n      :host .navbar-wrap .navbar-button.open span:nth-child(1) {\n        left: 3px;\n        top: 6px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(2) {\n        left: calc(50% - 3px);\n        top: 6px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(3) {\n        left: -50%;\n        opacity: 0; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(4) {\n        left: 100%;\n        opacity: 0; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(5) {\n        left: 3px;\n        top: 15px; }\n      :host .navbar-wrap .navbar-button.open span:nth-child(6) {\n        left: calc(50% - 3px);\n        top: 15px; }\n    :host .navbar-wrap .page-title {\n      font-size: 1.6rem;\n      font-weight: normal;\n      line-height: 1;\n      margin: 0;\n      width: 100%; }\n      @media (max-width: 991px) {\n        :host .navbar-wrap .page-title {\n          display: none; } }\n    :host .navbar-wrap .nav-items {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      margin: 0 -11px; }\n      :host .navbar-wrap .nav-items .nav-item {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 100%;\n        margin: 0 5px; }\n        @media (min-width: 544px) {\n          :host .navbar-wrap .nav-items .nav-item {\n            position: relative; } }\n        :host .navbar-wrap .nav-items .nav-item .nav-link {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          color: #ffffff;\n          cursor: pointer;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 22px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          min-width: 44px;\n          padding: 11px;\n          position: relative;\n          transition: color 0.2s ease-in-out; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link .marker {\n            background: #64B5F6;\n            border-radius: 50%;\n            height: 6px;\n            position: absolute;\n            right: 5px;\n            top: 5px;\n            width: 6px; }\n            .rtl :host .navbar-wrap .nav-items .nav-item .nav-link .marker {\n              left: 5px;\n              right: auto; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link .avatar {\n            border-radius: 50%;\n            height: 40px;\n            overflow: hidden;\n            width: 40px; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link .name {\n            font-size: 1rem;\n            padding-left: 0.6875rem;\n            white-space: nowrap; }\n            @media (max-width: 991px) {\n              :host .navbar-wrap .nav-items .nav-item .nav-link .name {\n                display: none; } }\n            .rtl :host .navbar-wrap .nav-items .nav-item .nav-link .name {\n              padding-left: 0;\n              padding-right: 0.6875rem; }\n          :host .navbar-wrap .nav-items .nav-item .nav-link:hover {\n            color: #64b6f7; }\n        :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n          background: #fff;\n          box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.25);\n          display: none;\n          left: 50%;\n          margin: 0 0 0 -150px;\n          padding: 0;\n          position: absolute;\n          top: 100%;\n          width: 300px;\n          z-index: 9998; }\n          @media (max-width: 991px) {\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n              left: auto;\n              margin-left: 0;\n              right: 0; } }\n          @media (max-width: 543px) {\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n              left: 0;\n              margin-left: 0;\n              width: 100%; } }\n          .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n            margin: 0 -150px 0 0; }\n            @media (max-width: 991px) {\n              .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n                left: 0;\n                margin-right: 0;\n                right: auto; } }\n            @media (max-width: 543px) {\n              .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu {\n                margin-right: 0;\n                right: 0; } }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n            border: 10px solid transparent;\n            border-bottom-color: #fff;\n            bottom: 100%;\n            content: '';\n            left: 50%;\n            margin: 0 0 0 -10px;\n            position: absolute; }\n            @media (max-width: 991px) {\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n                left: 100%;\n                margin-left: -34px; } }\n            @media (max-width: 543px) {\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n                display: none; } }\n            @media (max-width: 991px) {\n              .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu:before {\n                left: 0;\n                margin-left: 11px; } }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-title,\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer {\n            margin: 0;\n            padding: 0.6875rem;\n            text-align: center; }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-title {\n            border-bottom: 1px solid rgba(37, 45, 71, 0.1);\n            color: #252d47;\n            font-size: 16px;\n            line-height: 1.3; }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer {\n            background: #666c7e; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer a {\n              color: #ffffff; }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu .menu-footer a:hover {\n                color: rgba(255, 255, 255, 0.8); }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul {\n            list-style-type: none;\n            margin: 0;\n            max-height: 245px;\n            overflow: auto;\n            padding: 0; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li {\n              border-bottom: 1px solid rgba(37, 45, 71, 0.05); }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li:last-child {\n                border-bottom: 0; }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a {\n                -webkit-box-align: center;\n                    -ms-flex-align: center;\n                        align-items: center;\n                color: #252d47;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                padding: 0.6875rem;\n                transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n                @media (min-width: 992px) {\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a:hover {\n                    background: #252d47;\n                    color: #ffffff; }\n                    :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a:hover .icon,\n                    :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a:hover .mat-icon {\n                      background: rgba(255, 255, 255, 0.1); } }\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .icon,\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .mat-icon {\n                  background: rgba(33, 150, 243, 0.1);\n                  border-radius: 50%;\n                  font-size: 22px;\n                  height: auto;\n                  margin-right: 11px;\n                  padding: 11px;\n                  transition: background 0.2s ease-in-out;\n                  width: auto; }\n                  .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .icon, .rtl\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .mat-icon {\n                    margin-right: 0;\n                    margin-left: 0.6875rem; }\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .avatar {\n                  border-radius: 50%;\n                  height: 40px;\n                  margin-right: 0.6875rem;\n                  width: 40px; }\n                  .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .avatar {\n                    margin-right: 0;\n                    margin-left: 0.6875rem; }\n                :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content {\n                  font-size: .85rem; }\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .desc {\n                    display: block; }\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .date {\n                    display: block;\n                    font-size: .75rem;\n                    font-style: italic;\n                    margin-top: 4px;\n                    opacity: .6; }\n                  :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .meta {\n                    -webkit-box-align: end;\n                        -ms-flex-align: end;\n                            align-items: flex-end;\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -webkit-box-pack: justify;\n                        -ms-flex-pack: justify;\n                            justify-content: space-between;\n                    line-height: 1.3;\n                    margin-bottom: 4px; }\n                    :host .navbar-wrap .nav-items .nav-item .dropdown-menu > ul > li > a .content .meta .date {\n                      margin: 0 0 0 11px; }\n          :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu {\n            left: auto;\n            margin: 0;\n            right: 0;\n            width: 220px; }\n            @media (max-width: 543px) {\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu {\n                width: 100%; } }\n            .rtl :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu {\n              left: 0;\n              right: auto; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu:before {\n              display: none; }\n            :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu > ul > li > a {\n              padding-top: 8px;\n              padding-bottom: 8px; }\n              :host .navbar-wrap .nav-items .nav-item .dropdown-menu.mini-menu > ul > li > a .icon {\n                background: none;\n                font-size: 1rem;\n                margin-right: 11px;\n                min-width: 15px;\n                padding: 0; }\n        :host .navbar-wrap .nav-items .nav-item.opened /deep/ .mat-icon-button,\n        :host .navbar-wrap .nav-items .nav-item.opened /deep/ .mat-button {\n          color: #64b6f7; }\n        :host .navbar-wrap .nav-items .nav-item.opened .dropdown-menu {\n          display: block; }\n        :host .navbar-wrap .nav-items .nav-item.opened ~ .items-overlay {\n          opacity: 1;\n          transition: 0.2s opacity 0s ease-in-out, 0s visibility 0s ease-in-out;\n          visibility: visible; }\n      :host .navbar-wrap .nav-items .items-overlay {\n        background: rgba(37, 45, 71, 0.2);\n        height: 100%;\n        left: 0;\n        opacity: 0;\n        position: fixed;\n        top: 0;\n        transition: 0.2s opacity 0s ease-in-out, 0s visibility 0.2s ease-in-out;\n        visibility: hidden;\n        width: 100%;\n        z-index: 9997; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_menu__ = __webpack_require__("../../../../../src/settings/menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HorizontalNavbarComponent = (function () {
    function HorizontalNavbarComponent(translate, auth) {
        var _this = this;
        this.translate = translate;
        this.auth = auth;
        this.sidebarState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.languages = __WEBPACK_IMPORTED_MODULE_3__settings_menu__["a" /* LANGUAGES */];
        this.langCode = 'en';
        this.groupList = ['First', 'Second'];
        this.openedSidebar = false;
        this.showOverlay = false;
        translate.use('en');
        this.auth.langCode.subscribe(function (code) {
            translate.use(code);
            _this.langCode = code;
        });
    }
    HorizontalNavbarComponent.prototype.ngOnInit = function () { };
    HorizontalNavbarComponent.prototype.open = function (event) {
        var clickedComponent = event.target.closest('.nav-item');
        var items = clickedComponent.parentElement.children;
        event.preventDefault();
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove('opened');
        }
        clickedComponent.classList.add('opened');
        this.showOverlay = true;
    };
    HorizontalNavbarComponent.prototype.close = function (event) {
        var clickedComponent = event.target;
        var items = clickedComponent.parentElement.children;
        event.preventDefault();
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove('opened');
        }
        this.showOverlay = false;
    };
    HorizontalNavbarComponent.prototype.openSidebar = function () {
        this.openedSidebar = !this.openedSidebar;
        this.sidebarState.emit();
    };
    HorizontalNavbarComponent.prototype.changeLanguage = function () {
        this.translate.use(this.langCode);
        this.auth.changeLanguage(this.langCode);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HorizontalNavbarComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HorizontalNavbarComponent.prototype, "openedSidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HorizontalNavbarComponent.prototype, "sidebarState", void 0);
    HorizontalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'horizontal-navbar',
            template: __webpack_require__("../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.scss")],
            host: {
                '[class.app-navbar]': 'true',
                '[class.show-overlay]': 'showOverlay'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], HorizontalNavbarComponent);
    return HorizontalNavbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=horizontal-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"'/default-layout/dashboard'\" class=\"logo\">\n  <img src=\"assets/img/logo.png\" alt=\"\" width=\"147\" height=\"33\" class=\"logo-img\">\n</a>\n\n<span class=\"compress-logo\">\n  <img src=\"assets/img/logo-compress.png\" alt=\"\" width=\"38\" height=\"33\" class=\"logo-img\">\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/logo/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #1b2237;\n  color: #ffffff;\n  display: block;\n  height: 3.4375rem;\n  position: relative; }\n  :host .logo {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    color: inherit;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    padding: 0.6875rem 1.375rem;\n    text-decoration: none; }\n    :host .logo .logo-img {\n      height: auto;\n      max-height: 100%;\n      max-width: 100%;\n      vertical-align: top;\n      width: auto; }\n    :host .logo .logo-text {\n      display: block;\n      font-size: 33px;\n      font-weight: 500;\n      line-height: 1; }\n  :host .compress-logo {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    opacity: 0;\n    padding: 0.6875rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 4.125rem; }\n    .rtl :host .compress-logo {\n      left: 0;\n      right: auto; }\n    :host .compress-logo .logo-img {\n      height: auto;\n      max-height: 100%;\n      max-width: 100%;\n      vertical-align: top;\n      width: auto; }\n    :host .compress-logo .logo-text {\n      display: block;\n      font-size: 26px;\n      font-weight: 500;\n      line-height: 1; }\n  .menu-style-2 :host .compress-logo,\n  .menu-style-3 :host .compress-logo,\n  .menu-style-4 :host .compress-logo {\n    left: 0;\n    right: auto; }\n  .menu-style-2.rtl :host .compress-logo,\n  .menu-style-3.rtl :host .compress-logo,\n  .menu-style-4.rtl :host .compress-logo {\n    left: auto;\n    right: 0; }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar :host .logo {\n      opacity: 0;\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n      transition: 0.2s opacity 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out; }\n    .compress-vertical-navbar :host .compress-logo {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out; } }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar.rtl :host .logo {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); } }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar .vertical-navbar:hover :host .logo {\n      opacity: 1;\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out;\n      transition: 0.2s opacity 0.2s ease-in-out, 0.2s transform 0.2s ease-in-out, 0.2s -webkit-transform 0.2s ease-in-out; }\n    .compress-vertical-navbar .vertical-navbar:hover :host .compress-logo {\n      opacity: 0;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: 0.2s opacity 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out;\n      transition: 0.2s opacity 0s ease-in-out, 0.2s transform 0s ease-in-out, 0.2s -webkit-transform 0s ease-in-out; } }\n  @media (min-width: 992px) {\n    .compress-vertical-navbar.rtl .vertical-navbar:hover :host .logo {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () { };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'logo',
            template: __webpack_require__("../../../../../src/app/ui/components/logo/logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/logo/logo.component.scss")],
            host: { 'class': 'app-logo' }
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-menu\">\n  <div class=\"text-center pt-3 pb-3\">\n      <img src=\"assets/content/person-4.jpg\" class=\"circle\" width=\"150\" height=\"150\" alt=\"\">      \n  </div>\n  <ul>\n    <li\n      class=\"menu-item\"\n      *ngFor=\"let item of menuItems\"\n      [ngClass]=\"getLiClasses(item, rla.isActive)\"\n      #rla=\"routerLinkActive\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{exact:true}\"\n    >\n      <div *ngIf=\"item.groupTitle; then group else default\"></div>\n\n      <!-- Group title -->\n      <ng-template #group>\n        <span class=\"group-title\">{{ item.title }}</span>\n      </ng-template>\n      <!-- end Group title -->\n\n      <!-- Default item -->\n      <ng-template #default>\n        <div *ngIf=\"!item.sub; then simple else sub\"></div>\n\n        <ng-template #simple>\n          <a href=\"#\" class=\"item-link\" routerLink=\"{{ item.routing }}\" (click)=\"toggle($event, item, this)\">\n            <span class=\"text\">{{ item.title }}</span>\n\n            <span\n              class=\"item-badge\"\n              *ngIf=\"item.badge && item.badge.text\"\n              [ngStyle]=\"getStyles(item.badge)\"\n            >{{ item.badge.text }}</span>\n\n            <span class=\"icon\">\n              <i class=\"icon-wrap {{ item.icon.class }}\" *ngIf=\"item.icon && item.icon.class\" [ngStyle]=\"getStyles(item.icon)\"></i>\n            </span>\n          </a>\n        </ng-template>\n\n        <ng-template #sub>\n          <!-- Item with sub -->\n          <a href=\"#\" class=\"item-link\" (click)=\"toggle($event, item, this)\">\n            <span class=\"text\">{{ item.title }}</span>\n\n            <span\n              class=\"item-badge\"\n              *ngIf=\"item.badge && item.badge.text\"\n              [ngStyle]=\"getStyles(item.badge)\"\n            >{{ item.badge.text }}</span>\n\n            <span class=\"caret\" *ngIf=\"item.sub\"></span>\n\n            <span class=\"icon\">\n              <i class=\"icon-wrap {{ item.icon.class }}\" *ngIf=\"item.icon && item.icon.class\" [ngStyle]=\"getStyles(item.icon)\"></i>\n            </span>\n          </a>\n\n          <!-- Menu sub -->\n          <ul class=\"sub\" *ngIf=\"!item.groupTitle && item.sub\">\n            <li\n              class=\"menu-item\"\n              *ngFor=\"let itemSub of item.sub\"\n              [ngClass]=\"getLiClasses(itemSub, rla.isActive)\"\n              #rla=\"routerLinkActive\"\n              routerLinkActive=\"active\"\n            >\n              <a href=\"#\" routerLink=\"{{ itemSub.routing }}\" class=\"item-link\">\n                <span class=\"text\">{{ itemSub.title }}</span>\n              </a>\n            </li>\n          </ul>\n        </ng-template>\n      </ng-template>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .main-menu > ul .menu-item .item-link .caret {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n:host {\n  display: block;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0;\n  width: inherit;\n  -webkit-overflow-scrolling: touch; }\n  :host .main-menu {\n    width: inherit; }\n    :host .main-menu > ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n      :host .main-menu > ul .menu-item {\n        position: relative; }\n        :host .main-menu > ul .menu-item:after {\n          background: #2196f3;\n          bottom: 0;\n          content: '';\n          position: absolute;\n          right: 100%;\n          top: 0;\n          transition: -webkit-transform 0.2s ease-in-out;\n          transition: transform 0.2s ease-in-out;\n          transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n          width: 4px; }\n          .rtl :host .main-menu > ul .menu-item:after {\n            left: 100%;\n            right: auto; }\n        :host .main-menu > ul .menu-item .item-link {\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          background: transparent;\n          color: #252d47;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          font-size: 1rem;\n          font-weight: 400;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-height: 2.75rem;\n          padding: 0.34375rem 1.03125rem;\n          position: relative;\n          text-decoration: none;\n          transition: background 0.2s ease-in-out, color 0.2s ease-in-out; }\n          :host .main-menu > ul .menu-item .item-link .text {\n            -webkit-box-flex: 2;\n                -ms-flex-positive: 2;\n                    flex-grow: 2;\n            -ms-flex-negative: 1;\n                flex-shrink: 1;\n            margin: 0 0.34375rem; }\n          :host .main-menu > ul .menu-item .item-link .item-badge {\n            background: #2196f3;\n            border-radius: 8px;\n            color: rgba(33, 150, 243, 0.2);\n            float: right;\n            font-size: 10px;\n            line-height: 1;\n            margin: 0 0.34375rem;\n            padding: 3px 6px; }\n          :host .main-menu > ul .menu-item .item-link .icon {\n            color: inherit;\n            font-size: 15px;\n            margin: 0 0 0 0.34375rem;\n            min-width: 1.375rem;\n            text-align: center; }\n            .rtl :host .main-menu > ul .menu-item .item-link .icon {\n              margin: 0 0.34375rem 0 0; }\n            :host .main-menu > ul .menu-item .item-link .icon .icon-wrap {\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              border-radius: 50%;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              height: 2.0625rem;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              margin: 0 auto;\n              width: 2.0625rem; }\n          :host .main-menu > ul .menu-item .item-link .caret {\n            margin: 0 0.171875rem;\n            transition: -webkit-transform 0.1s ease-in-out;\n            transition: transform 0.1s ease-in-out;\n            transition: transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out; }\n            :host .main-menu > ul .menu-item .item-link .caret:before {\n              content: '\\F105'; }\n          :host .main-menu > ul .menu-item .item-link:hover {\n            background: transparent;\n            color: #2196f3; }\n            :host .main-menu > ul .menu-item .item-link:hover .icon {\n              color: inherit; }\n        :host .main-menu > ul .menu-item.menu-item-group:after {\n          display: none; }\n        :host .main-menu > ul .menu-item.menu-item-group .group-title {\n          color: #666c7e;\n          display: block;\n          font-size: .8rem;\n          font-weight: 600;\n          line-height: 1.71875;\n          padding: 1.03125rem 1.375rem 0.34375rem;\n          text-transform: uppercase; }\n        :host .main-menu > ul .menu-item .sub {\n          background: transparent;\n          list-style-type: none;\n          overflow: hidden;\n          margin: 0;\n          max-height: 0;\n          padding: 0;\n          transition: max-height 0.1s ease-in-out; }\n          :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n            padding-left: 1.375rem;\n            padding-right: 1.375rem; }\n          :host .main-menu > ul .menu-item .sub .menu-item:first-child > .item-link:before {\n            border-top: 1px solid transparent;\n            content: '';\n            left: 0;\n            position: absolute;\n            right: 0;\n            top: 0;\n            transition: border 0.2s ease-in-out; }\n        :host .main-menu > ul .menu-item:hover:after {\n          -webkit-transform: translateX(4px);\n                  transform: translateX(4px); }\n          .rtl :host .main-menu > ul .menu-item:hover:after {\n            -webkit-transform: translateX(-4px);\n                    transform: translateX(-4px); }\n        :host .main-menu > ul .menu-item.active:after {\n          -webkit-transform: translateX(4px);\n                  transform: translateX(4px); }\n          .rtl :host .main-menu > ul .menu-item.active:after {\n            -webkit-transform: translateX(-4px);\n                    transform: translateX(-4px); }\n        :host .main-menu > ul .menu-item.active > .item-link {\n          background: transparent;\n          color: #2196f3; }\n          :host .main-menu > ul .menu-item.active > .item-link .icon {\n            color: #2196f3; }\n        :host .main-menu > ul .menu-item.has-sub {\n          position: relative; }\n          :host .main-menu > ul .menu-item.has-sub > .item-link {\n            position: relative; }\n            :host .main-menu > ul .menu-item.has-sub > .item-link .caret {\n              display: block; }\n          :host .main-menu > ul .menu-item.has-sub.active > .item-link .caret {\n            -webkit-transform: rotate(90deg);\n                    transform: rotate(90deg); }\n          :host .main-menu > ul .menu-item.has-sub.active > .sub {\n            max-height: 1000px; }\n            :host .main-menu > ul .menu-item.has-sub.active > .sub > .menu-item.active:first-child > .item-link:before {\n              border-top-color: #666c7e; }\n        :host .main-menu > ul .menu-item.disabled {\n          pointer-events: none; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0;\n      margin-right: 0.34375rem;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .item-badge {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret {\n      height: 11px;\n      -webkit-box-ordinal-group: 5;\n          -ms-flex-order: 4;\n              order: 4;\n      position: relative;\n      width: 11px; }\n      .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret:before, .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret:after {\n        background: #252d47;\n        content: '';\n        display: block;\n        height: 1px;\n        left: 0;\n        position: absolute;\n        top: 5px;\n        transition: -webkit-transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n        width: 100%; }\n      .menu-style-2 :host .main-menu > ul .menu-item .item-link .caret:after {\n        -webkit-transform: rotate(90deg) scaleX(1);\n                transform: rotate(90deg) scaleX(1); }\n    .menu-style-2 :host .main-menu > ul .menu-item.has-sub.active > .item-link .caret {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n      .menu-style-2 :host .main-menu > ul .menu-item.has-sub.active > .item-link .caret:after {\n        -webkit-transform: rotate(90deg) scaleX(0);\n                transform: rotate(90deg) scaleX(0); }\n    .menu-style-2.rtl :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0.34375rem;\n      margin-right: 0; }\n    .menu-style-3 :host .main-menu > ul .menu-item:after {\n      display: none; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .icon {\n      margin-right: 0.34375rem;\n      margin-left: 0;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .item-badge {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .menu-style-3 :host .main-menu > ul .menu-item .item-link .caret {\n      -webkit-box-ordinal-group: 5;\n          -ms-flex-order: 4;\n              order: 4; }\n    .menu-style-3 :host .main-menu > ul .menu-item .sub {\n      position: relative; }\n      .menu-style-3 :host .main-menu > ul .menu-item .sub:before {\n        border-left: 1px dashed #666c7e;\n        bottom: 1.375rem;\n        content: '';\n        left: 2.0625rem;\n        margin-left: -1px;\n        position: absolute;\n        top: 0;\n        z-index: 2; }\n      .menu-style-3 :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n        padding-left: 3.4375rem;\n        position: relative; }\n        .menu-style-3 :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n          border-top: 1px dashed #666c7e;\n          content: '';\n          left: 2.0625rem;\n          margin-left: -1px;\n          position: absolute;\n          top: 1.375rem;\n          width: 1.1rem;\n          z-index: 2; }\n    .menu-style-3.rtl :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0.34375rem;\n      margin-right: 0; }\n    .menu-style-3.rtl :host .main-menu > ul .menu-item .sub:before {\n      left: auto;\n      right: 2.0625rem; }\n    .menu-style-3.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n      padding-left: 1.375rem;\n      padding-right: 3.4375rem; }\n      .menu-style-3.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n        left: auto;\n        right: 2.0625rem; }\n    .menu-style-4 :host .main-menu > ul .menu-item:after {\n      display: none; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .icon {\n      margin-right: 0.34375rem;\n      margin-left: 0;\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .text {\n      -webkit-box-ordinal-group: 3;\n          -ms-flex-order: 2;\n              order: 2; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .item-badge {\n      -webkit-box-ordinal-group: 4;\n          -ms-flex-order: 3;\n              order: 3; }\n    .menu-style-4 :host .main-menu > ul .menu-item .item-link .caret {\n      -webkit-box-ordinal-group: 5;\n          -ms-flex-order: 4;\n              order: 4; }\n    .menu-style-4 :host .main-menu > ul .menu-item .sub {\n      position: relative; }\n      .menu-style-4 :host .main-menu > ul .menu-item .sub:before {\n        border-left: 1px solid #666c7e;\n        bottom: 1.375rem;\n        content: '';\n        left: 2.0625rem;\n        margin-left: 0;\n        position: absolute;\n        top: -0.34375rem;\n        z-index: 2; }\n      .menu-style-4 :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n        padding-left: 3.09375rem;\n        position: relative; }\n        .menu-style-4 :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n          background: #666c7e;\n          border-radius: 50%;\n          content: '';\n          height: 5px;\n          left: 2.0625rem;\n          margin: -2.5px 0 0 -2px;\n          position: absolute;\n          top: 1.375rem;\n          width: 5px;\n          z-index: 2; }\n    .menu-style-4 :host .main-menu > ul .menu-item.active > .item-link:before {\n      background: #2196f3 !important; }\n    .menu-style-4.rtl :host .main-menu > ul .menu-item .item-link .icon {\n      margin-left: 0.34375rem;\n      margin-right: 0; }\n    .menu-style-4.rtl :host .main-menu > ul .menu-item .sub:before {\n      left: auto;\n      right: 2.0625rem;\n      margin-right: 0; }\n    .menu-style-4.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link {\n      padding-left: 1.375rem;\n      padding-right: 3.09375rem; }\n      .menu-style-4.rtl :host .main-menu > ul .menu-item .sub .menu-item .item-link:before {\n        left: auto;\n        right: 2.0625rem;\n        margin: -2.5px -2px 0 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__("../../../../../src/app/ui/components/menu/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(menuService) {
        this.menuService = menuService;
    }
    MenuComponent.prototype.getMenuItems = function () {
        var _this = this;
        this.menuService.getMenuItems().then(function (menuItems) { return _this.menuItems = menuItems; });
    };
    MenuComponent.prototype.getLiClasses = function (item, isActive) {
        return {
            'has-sub': item.sub,
            'active': item.active || isActive,
            'menu-item-group': item.groupTitle,
            'disabled': item.disabled
        };
    };
    MenuComponent.prototype.getStyles = function (item) {
        return {
            'background': item.bg,
            'color': item.color
        };
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenuItems();
    };
    MenuComponent.prototype.toggle = function (event, item, el) {
        event.preventDefault();
        var items = el.menuItems;
        if (item.active) {
            item.active = false;
        }
        else {
            for (var i = 0; i < items.length; i++) {
                items[i].active = false;
            }
            item.active = true;
        }
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/ui/components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/menu/menu.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]],
            host: {
                'class': 'app-menu'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_menu_items__ = __webpack_require__("../../../../../src/app/ui/components/menu/mock-menu-items.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenuItems = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_menu_items__["a" /* MENUITEMS */]);
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/menu/mock-menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENUITEMS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_menu__ = __webpack_require__("../../../../../src/settings/menu.ts");

var MENUITEMS = __WEBPACK_IMPORTED_MODULE_0__settings_menu__["b" /* MENU */];
//# sourceMappingURL=mock-menu-items.js.map

/***/ }),

/***/ "../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-navbar-wrap\">\n  <logo></logo>\n  <app-menu></app-menu>\n</div>\n\n<div class=\"sidebar-overlay\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #e5e6e9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: left 0.2s ease-in-out, right 0.2s ease-in-out;\n  width: 15.125rem;\n  will-change: left, right, width;\n  z-index: 9996; }\n  @media (max-width: 991px) {\n    :host {\n      left: -15.125rem; } }\n  .rtl :host {\n    left: auto;\n    right: 0; }\n    @media (max-width: 991px) {\n      .rtl :host {\n        left: auto;\n        right: -15.125rem; } }\n  :host .vertical-navbar-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n    width: 15.125rem; }\n    @media (max-width: 991px) {\n      :host .vertical-navbar-wrap {\n        position: relative;\n        z-index: 9999; } }\n  :host .sidebar-overlay {\n    background: rgba(229, 230, 233, 0.2);\n    height: 100%;\n    left: 0;\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    transition: 0.2s opacity 0s ease-in-out, 0s visibility 0.2s ease-in-out;\n    visibility: hidden;\n    width: 100%;\n    z-index: 9998; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerticalNavbarComponent = (function () {
    function VerticalNavbarComponent() {
    }
    VerticalNavbarComponent.prototype.ngOnInit = function () { };
    VerticalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'vertical-navbar',
            template: __webpack_require__("../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.scss")],
            host: { 'class': 'vertical-navbar' }
        }),
        __metadata("design:paramtypes", [])
    ], VerticalNavbarComponent);
    return VerticalNavbarComponent;
}());

//# sourceMappingURL=vertical-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_horizontal_navbar_horizontal_navbar_component__ = __webpack_require__("../../../../../src/app/ui/components/horizontal-navbar/horizontal-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_vertical_navbar_vertical_navbar_component__ = __webpack_require__("../../../../../src/app/ui/components/vertical-navbar/vertical-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_addition_navbar_addition_navbar_component__ = __webpack_require__("../../../../../src/app/ui/components/addition-navbar/addition-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_logo_logo_component__ = __webpack_require__("../../../../../src/app/ui/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/ui/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/ui/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UIModule = (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_horizontal_navbar_horizontal_navbar_component__["a" /* HorizontalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_vertical_navbar_vertical_navbar_component__["a" /* VerticalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_addition_navbar_addition_navbar_component__["a" /* AdditionNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__components_horizontal_navbar_horizontal_navbar_component__["a" /* HorizontalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_vertical_navbar_vertical_navbar_component__["a" /* VerticalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_addition_navbar_addition_navbar_component__["a" /* AdditionNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdCoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MdDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MdDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MdExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MdGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MdIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MdInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MdMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MdPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MdProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MdRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MdRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MdSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MdSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MdSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["G" /* MdTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"]
            ]
        })
    ], UIModule);
    return UIModule;
}());

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "../../../../../src/assets/content/login-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login-bg.c31dfae0909eb8b26d66.jpg";

/***/ }),

/***/ "../../../../../src/assets/content/signup-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "signup-bg.81e23c8b8d4a46fb6187.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverUrl: 'https://www.rollincome.com:444/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/settings/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANGUAGES; });
var MENU = [
    {
        title: 'Dashboard',
        routing: '/default-layout/dashboard'
    },
    {
        title: 'Groups',
        badge: {
            text: '0',
            color: '#fff',
            bg: '#43A047'
        },
        routing: '/default-layout/groups'
    },
    {
        title: 'Transactions',
        routing: '/default-layout/transactions'
    },
    {
        title: 'Requests',
        routing: '/default-layout/requests'
    },
    {
        title: 'Profile',
        routing: '/default-layout/profile'
    },
    {
        title: 'Simulation',
        routing: '/default-layout/simulation'
    },
    {
        title: 'About us',
        routing: '/default-layout/aboutus'
    }
];
var LANGUAGES = [
    { code: 'en', value: 'ENGLISH' },
    { code: 'fr', value: 'FRENCH' },
    { code: 'pt', value: 'PORTUGUESE' },
    { code: 'es', value: 'SPANISH' }
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map