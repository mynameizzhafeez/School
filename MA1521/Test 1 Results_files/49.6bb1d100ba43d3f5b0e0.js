(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./src/app/core/page-base.ts":
/*!***********************************!*\
  !*** ./src/app/core/page-base.ts ***!
  \***********************************/
/*! exports provided: PageBase, ListPageBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBase", function() { return PageBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageBase", function() { return ListPageBase; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-base */ "./src/app/core/component-base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PageBase = /** @class */ (function (_super) {
    __extends(PageBase, _super);
    function PageBase(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        if ('development' === userService.environment.ENV) {
            console.log('instantiated', _this);
        }
        if (_this.userService.currentUser) {
            _this.setCurrentUser(_this.userService.currentUser.profile);
        }
        else {
            _this.userService.onUserLoaded.subscribe(function (user) {
                _this.setCurrentUser(user.profile);
            });
        }
        return _this;
    }
    PageBase.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
        this.isStudent =
            this.currentUser && this.currentUser.userRoles.includes('Student');
        this.isStaff =
            this.currentUser && this.currentUser.userRoles.includes('Staff');
        this.isGuest =
            this.currentUser && this.currentUser.userRoles.includes('Guest');
        this.isStudentOrGuest =
            this.isStudent ||
                this.isGuest;
    };
    PageBase.prototype.hasRole = function () {
        var roles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            roles[_i] = arguments[_i];
        }
        if (!this.currentUser) {
            return false;
        }
        return underscore__WEBPACK_IMPORTED_MODULE_1__["intersection"](roles, this.currentUser.userRoles).length > 0;
    };
    PageBase.prototype.findParentUrl = function (route, componentTypes) {
        var parentRoute = this.findParentRoute(route, componentTypes);
        if (parentRoute) {
            return ['/'].concat(underscore__WEBPACK_IMPORTED_MODULE_1__["flatten"](parentRoute.snapshot.pathFromRoot.map(function (p) { return p.url.map(function (u) { return u.path; }); })));
        }
        else {
            return null;
        }
    };
    PageBase.prototype.findParentRoute = function (route, componentTypes) {
        if (componentTypes.includes(route.component)) {
            return route;
        }
        else if (route.parent) {
            return this.findParentRoute(route.parent, componentTypes);
        }
        return null;
    };
    PageBase.prototype.trackById = function (index, item) {
        return item.id;
    };
    return PageBase;
}(_component_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]));

var ListPageBase = /** @class */ (function (_super) {
    __extends(ListPageBase, _super);
    function ListPageBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRearranging = false;
        _this.listItems = [];
        _this.pageSize = 20;
        _this.offset = 0;
        _this.filters = [];
        _this.pages = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
        _this.sortTermTitle = 'No Sort';
        _this.sortTerm = 'createdDate';
        _this.sortDescending = true;
        return _this;
    }
    ListPageBase.prototype.startRearrange = function () {
        this.listBackup = this.listItems.slice();
        this.filterBackup = this.filters.slice();
        this.pageSizeBackup = this.pageSize;
        this.offsetBackup = this.offset;
        this.pageSize = undefined;
        this.offset = undefined;
        this.isRearranging = true;
        this.query();
    };
    ListPageBase.prototype.cancelRearrange = function () {
        this.listItems = this.listBackup.slice();
        this.filters = this.filterBackup.slice();
        this.pageSize = this.pageSizeBackup;
        this.offset = this.offsetBackup;
        this.isRearranging = false;
        this.query();
    };
    ListPageBase.prototype.sortBy = function (action, field) {
        this.sortTermTitle = action.title;
        if (this.sortTerm === field) {
            this.sortDescending = !this.sortDescending;
        }
        else {
            this.sortTerm = field;
            this.sortDescending = false;
        }
        this.query();
    };
    ListPageBase.prototype.setStart = function (start, event) {
        if (event) {
            event.preventDefault();
        }
        this.offset = start;
        this.query();
    };
    ListPageBase.prototype.getSortBy = function () {
        return this.sortTerm ? (this.sortTerm + (this.sortDescending && ' desc' || '')) : undefined;
    };
    return ListPageBase;
}(PageBase));



/***/ }),

/***/ "./src/app/core/page-hit.guard.ts":
/*!****************************************!*\
  !*** ./src/app/core/page-hit.guard.ts ***!
  \****************************************/
/*! exports provided: PageHitGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHitGuard", function() { return PageHitGuard; });
/* harmony import */ var _models_page_hit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/page-hit */ "./src/app/models/page-hit.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



// import { PageHitService } from './page-hit.service';
var PageHitGuard = /** @class */ (function () {
    function PageHitGuard(
    // private pageHitService: PageHitService
    ) {
    }
    PageHitGuard.prototype.canActivate = function (route, state) {
        var hit = new _models_page_hit__WEBPACK_IMPORTED_MODULE_0__["PageHit"]();
        hit.url = state.url;
        hit.rootID = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findParam"])('moduleId', route);
        if (route.data.pageHitGuard) {
            hit.resourceID = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findParam"])(route.data.pageHitGuard.resourceIDParam, route);
            hit.data = {
                action: route.data.pageHitGuard.action
            };
            if (route.data.pageHitGuard.rootIDParam) {
                hit.rootID = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findParam"])(route.data.pageHitGuard.rootIDParam, route);
            }
        }
        if (!hit.resourceID) {
            hit.resourceID = hit.rootID;
        }
        // this.pageHitService.create(hit).subscribe(() => {});
        return Promise.resolve(true);
    };
    PageHitGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function PageHitGuard_Factory() { return new PageHitGuard(); }, token: PageHitGuard, providedIn: "root" });
    return PageHitGuard;
}());



/***/ }),

/***/ "./src/app/models/news-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/news-item.ts ***!
  \*************************************/
/*! exports provided: NewsItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItem", function() { return NewsItem; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource */ "./src/app/models/resource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var NewsItem = /** @class */ (function (_super) {
    __extends(NewsItem, _super);
    function NewsItem(data) {
        var _this = _super.call(this, data) || this;
        if (data) {
            _this.id = '' + data.id;
            _this.header = data.header;
            _this.description = data.description;
            _this.startDate = moment__WEBPACK_IMPORTED_MODULE_0__(data.startDate).toDate();
            _this.endDate = moment__WEBPACK_IMPORTED_MODULE_0__(data.endDate).toDate();
            _this.publish = data.publish;
            _this.showToStaff = data.showToStaff;
            _this.showToStudent = data.showToStudent;
            _this.isDashboardNews = data.isDashboardNews;
        }
        return _this;
    }
    NewsItem.parseForm = function (formValue) {
        if (!formValue) {
            return null;
        }
        var newsItem = new NewsItem();
        Object.assign(newsItem, underscore__WEBPACK_IMPORTED_MODULE_1__["omit"](formValue, 'showTo'));
        if (newsItem.isDashboardNews) {
            newsItem.showToStaff = ['I', 'B'].includes(formValue.showTo);
            newsItem.showToStudent = ['S', 'B'].includes(formValue.showTo);
        }
        else {
            newsItem.showToStaff = true;
            newsItem.showToStudent = true;
        }
        return newsItem;
    };
    NewsItem.prototype.toFormValue = function () {
        var formValue = underscore__WEBPACK_IMPORTED_MODULE_1__["omit"](this, 'showToStaff', 'showToStudent');
        if (this.showToStaff && this.showToStudent) {
            formValue.showTo = 'B';
        }
        else if (this.showToStaff) {
            formValue.showTo = 'I';
        }
        else if (this.showToStudent) {
            formValue.showTo = 'S';
        }
        return formValue;
    };
    NewsItem.prototype.toUpdatePayload = function () {
        var payload = _super.prototype.toUpdatePayload.call(this);
        payload.id = Number(payload.id);
        return payload;
    };
    return NewsItem;
}(_resource__WEBPACK_IMPORTED_MODULE_2__["LegacyResource"]));



/***/ }),

/***/ "./src/app/models/page-hit.ts":
/*!************************************!*\
  !*** ./src/app/models/page-hit.ts ***!
  \************************************/
/*! exports provided: PageHit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHit", function() { return PageHit; });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./src/app/models/resource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHit = /** @class */ (function (_super) {
    __extends(PageHit, _super);
    function PageHit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_resource__WEBPACK_IMPORTED_MODULE_0__["Serializable"])(),
        __metadata("design:type", String)
    ], PageHit.prototype, "rootID", void 0);
    __decorate([
        Object(_resource__WEBPACK_IMPORTED_MODULE_0__["Serializable"])(),
        __metadata("design:type", String)
    ], PageHit.prototype, "resourceID", void 0);
    __decorate([
        Object(_resource__WEBPACK_IMPORTED_MODULE_0__["Serializable"])(),
        __metadata("design:type", String)
    ], PageHit.prototype, "url", void 0);
    __decorate([
        Object(_resource__WEBPACK_IMPORTED_MODULE_0__["Serializable"])(),
        __metadata("design:type", Object)
    ], PageHit.prototype, "data", void 0);
    return PageHit;
}(_resource__WEBPACK_IMPORTED_MODULE_0__["DataContract"]));



/***/ }),

/***/ "./src/app/news/news.service.ts":
/*!**************************************!*\
  !*** ./src/app/news/news.service.ts ***!
  \**************************************/
/*! exports provided: GET_DASHBOARD_NEWS_PATH, GET_HOMEPAGE_NEWS_PATH, NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DASHBOARD_NEWS_PATH", function() { return GET_DASHBOARD_NEWS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOMEPAGE_NEWS_PATH", function() { return GET_HOMEPAGE_NEWS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_news_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/news-item */ "./src/app/models/news-item.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/http-utils */ "./src/app/utils/http-utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var GET_DASHBOARD_NEWS_PATH = '/news/News/Dashboard';
var GET_HOMEPAGE_NEWS_PATH = '/news/News/Homepage';
var NewsService = /** @class */ (function (_super) {
    __extends(NewsService, _super);
    function NewsService(userService, httpClient, environment) {
        var _this = _super.call(this, _models_news_item__WEBPACK_IMPORTED_MODULE_3__["NewsItem"], userService, httpClient, environment) || this;
        _this.resourceBaseUrl = '/news/News/';
        _this.isStaging = false;
        _this.isStaging = environment.ENV === 'staging';
        if (_this.isStaging) {
            _this.apiBaseUrl = _this.environment.API_BASE_URL_GRP4;
        }
        else {
            _this.apiBaseUrl = _this.environment.API_BASE_URL;
        }
        return _this;
    }
    NewsService.prototype.getHomepageNews = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('sortby', 'startDate DESC');
        return this.httpClient
            .get(this.apiBaseUrl + GET_HOMEPAGE_NEWS_PATH, { headers: Object(_utils_http_utils__WEBPACK_IMPORTED_MODULE_6__["getHttpHeaders"])(this.environment), params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (r) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(r.data || []); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return new _models_news_item__WEBPACK_IMPORTED_MODULE_3__["NewsItem"](n); }));
    };
    NewsService.prototype.getDashboardNews = function () {
        return this.query(new _utils__WEBPACK_IMPORTED_MODULE_5__["RESTQuery"]({ sortby: 'startDate DESC' }), this.apiBaseUrl + GET_DASHBOARD_NEWS_PATH)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (r) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(r.data || []); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _models_news_item__WEBPACK_IMPORTED_MODULE_3__["NewsItem"](r); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["toArray"])())
            .toPromise();
    };
    NewsService.prototype.remove = function (id, url) {
        if (url === void 0) { url = this.apiBaseUrl + this.resourceBaseUrl + id; }
        return _super.prototype.remove.call(this, id, url);
    };
    NewsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ factory: function NewsService_Factory() { return new NewsService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"]("AppEnvironment")); }, token: NewsService, providedIn: "root" });
    return NewsService;
}(_utils__WEBPACK_IMPORTED_MODULE_5__["RESTService"]));



/***/ }),

/***/ "./src/app/shared/bubble.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/shared/bubble.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_BubbleComponent, View_BubbleComponent_0, View_BubbleComponent_Host_0, BubbleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BubbleComponent", function() { return RenderType_BubbleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BubbleComponent_0", function() { return View_BubbleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BubbleComponent_Host_0", function() { return View_BubbleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleComponentNgFactory", function() { return BubbleComponentNgFactory; });
/* harmony import */ var _bubble_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble.component.scss.shim.ngstyle */ "./src/app/shared/bubble.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bubble_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bubble.component */ "./src/app/shared/bubble.component.ts");
/* harmony import */ var _bubble_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubble.service */ "./src/app/shared/bubble.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_BubbleComponent = [_bubble_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BubbleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BubbleComponent, data: {} });

function View_BubbleComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "overlay"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_BubbleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BubbleComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "bubble"]], [[2, "show", null], [2, "reverse", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.show && _co.showOverlay); _ck(_v, 1, 0, currVal_0); var currVal_3 = _co.getStyles(); _ck(_v, 4, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.show; var currVal_2 = _co.reverse; _ck(_v, 2, 0, currVal_1, currVal_2); }); }
function View_BubbleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "bubble", [], null, null, null, View_BubbleComponent_0, RenderType_BubbleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _bubble_service__WEBPACK_IMPORTED_MODULE_4__["BubbleService"]], null, null)], null, null); }
var BubbleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("bubble", _bubble_component__WEBPACK_IMPORTED_MODULE_3__["BubbleComponent"], View_BubbleComponent_Host_0, { show: "show", distance: "distance", width: "width", showOverlay: "showOverlay", tooltipFor: "tooltipFor", reverse: "reverse", setTooltipLen: "setTooltipLen" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/shared/bubble.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/shared/bubble.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 100; }\n.bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.26);\n  border-radius: 3px;\n  width: 100px;\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.2s linear;\n  z-index: 101;\n  padding: 3px; }\n.bubble.show[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: initial; }\n.bubble[_ngcontent-%COMP%]:after {\n    content: ' ';\n    position: absolute;\n    display: block;\n    width: 20px;\n    height: 20px;\n    border-style: solid;\n    border-width: 10px;\n    border-color: transparent;\n    border-top-color: white;\n    bottom: -20px;\n    left: 50%;\n    transform: translateX(-50%); }\n.bubble.reverse[_ngcontent-%COMP%]::after {\n    border-bottom-color: white;\n    top: -20px;\n    border-top-color: transparent !important; }\n.bubble[_ngcontent-%COMP%]:before {\n    content: ' ';\n    position: absolute;\n    height: 20px;\n    top: 100%;\n    width: 100%;\n    left: 0;\n    background: transparent; }"];



/***/ }),

/***/ "./src/app/shared/bubble.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/bubble.component.ts ***!
  \********************************************/
/*! exports provided: BubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleComponent", function() { return BubbleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _bubble_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bubble.service */ "./src/app/shared/bubble.service.ts");




/*
  NOTE: To use the bubble component, the wrapping element MUST be positioned!

  This means its css should have position: relative; or position: absolute;
 */
var BubbleComponent = /** @class */ (function () {
    function BubbleComponent(cdRef, bubbleService) {
        this.cdRef = cdRef;
        this.bubbleService = bubbleService;
        this.show = false;
        this.distance = 10;
        this.width = 200;
        this.showOverlay = true;
        this.reverse = false;
    }
    BubbleComponent.prototype.toggle = function (val) {
        if (val === void 0) { val = !this.show; }
        this.show = val;
    };
    BubbleComponent.prototype.close = function ($event) {
        $event.stopPropagation();
        this.show = false;
    };
    BubbleComponent.prototype.getStyles = function () {
        if (!this.reverse) {
            return {
                bottom: 'calc(100% + ' + (this.distance + 6) + 'px)',
                width: this.width + 'px',
            };
        }
        else {
            return {
                width: this.width + 'px',
                top: this.setTooltipLen
            };
        }
    };
    BubbleComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['tooltipFor'] && changes['tooltipFor'].currentValue) {
            var tooltipFor = changes['tooltipFor'].currentValue;
            this.hover = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(tooltipFor, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(tooltipFor, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return false; }))));
            if (this.sub) {
                this.sub.unsubscribe();
            }
            var debounce$_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["race"])(this.bubbleService.allBubbles.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (b) { return b !== _this && b.show; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return 0; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])((this.show && 400) || 0));
            this.sub = this.hover.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () { return debounce$_1; })).subscribe(function (s) {
                _this.bubbleService.allBubbles.next(_this);
                _this.toggle(s);
                _this.cdRef.detectChanges();
            });
        }
    };
    return BubbleComponent;
}());



/***/ }),

/***/ "./src/app/shared/bubble.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/bubble.service.ts ***!
  \******************************************/
/*! exports provided: BubbleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleService", function() { return BubbleService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BubbleService = /** @class */ (function () {
    function BubbleService() {
        this.allBubbles = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    BubbleService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function BubbleService_Factory() { return new BubbleService(); }, token: BubbleService, providedIn: "root" });
    return BubbleService;
}());



/***/ }),

/***/ "./src/app/shared/form-field.component.ts":
/*!************************************************!*\
  !*** ./src/app/shared/form-field.component.ts ***!
  \************************************************/
/*! exports provided: FormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function() { return FormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-message.component */ "./src/app/shared/validation-message.component.ts");



var FormFieldComponent = /** @class */ (function () {
    function FormFieldComponent(formGroupDirective, cdRef) {
        this.formGroupDirective = formGroupDirective;
        this.cdRef = cdRef;
        this.userValidationMessages = {};
    }
    Object.defineProperty(FormFieldComponent.prototype, "control", {
        set: function (val) {
            this._formControl = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormFieldComponent.prototype, "showError", {
        get: function () {
            if (this.formGroup) {
                var control = this.formControl;
                return control && control.dirty && control.invalid;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormFieldComponent.prototype, "errors", {
        get: function () {
            if (!this.formGroup) {
                return {};
            }
            var control = this.formControl;
            return control && control.errors;
        },
        enumerable: true,
        configurable: true
    });
    FormFieldComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formGroupDirective.form;
        if (!this._formControl && !this.formGroup.get(this.controlName)) {
            throw new Error("Form control " + this.controlName + " not found.");
        }
        this.formControl = this._formControl || this.formGroup.get(this.controlName);
    };
    FormFieldComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var updateMessages = function (msgs) {
            _this.userValidationMessages = {};
            msgs.forEach(function (v) {
                v.formField = _this;
                _this.userValidationMessages[v.key] = v;
            });
        };
        this.validationMessages.changes.subscribe(function (msgs) {
            updateMessages(msgs);
        });
        updateMessages(this.validationMessages);
    };
    FormFieldComponent.prototype.ngAfterViewInit = function () {
        for (var _i = 0, _a = this.defaultValidationMessages.toArray(); _i < _a.length; _i++) {
            var vm = _a[_i];
            vm.formField = this;
        }
        this.cdRef.detectChanges();
    };
    return FormFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/katex-jax/katex-jax.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/shared/katex-jax/katex-jax.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_KatexJaxComponent, View_KatexJaxComponent_0, View_KatexJaxComponent_Host_0, KatexJaxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_KatexJaxComponent", function() { return RenderType_KatexJaxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_KatexJaxComponent_0", function() { return View_KatexJaxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_KatexJaxComponent_Host_0", function() { return View_KatexJaxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatexJaxComponentNgFactory", function() { return KatexJaxComponentNgFactory; });
/* harmony import */ var _katex_jax_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katex-jax.component.scss.shim.ngstyle */ "./src/app/shared/katex-jax/katex-jax.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _katex_jax_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./katex-jax.component */ "./src/app/shared/katex-jax/katex-jax.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_KatexJaxComponent = [_katex_jax_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_KatexJaxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_KatexJaxComponent, data: {} });

function View_KatexJaxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.finalHtml; _ck(_v, 0, 0, currVal_0); }); }
function View_KatexJaxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "katex", [], null, null, null, View_KatexJaxComponent_0, RenderType_KatexJaxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _katex_jax_component__WEBPACK_IMPORTED_MODULE_2__["KatexJaxComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]], null, null)], null, null); }
var KatexJaxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("katex", _katex_jax_component__WEBPACK_IMPORTED_MODULE_2__["KatexJaxComponent"], View_KatexJaxComponent_Host_0, { html: "html" }, {}, []);



/***/ }),

/***/ "./src/app/shared/katex-jax/katex-jax.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/shared/katex-jax/katex-jax.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@font-face {\n  font-family: 'KaTeX_AMS';\n  src: url('KaTeX_AMS-Regular.e78e28b4834954df047e.woff2') format('woff2'), url('KaTeX_AMS-Regular.7f06b4e30317f784d61d.woff') format('woff'), url('KaTeX_AMS-Regular.aaf4eee9fba9907d61c3.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Caligraphic';\n  src: url('KaTeX_Caligraphic-Bold.4ec58befa687e9752c3c.woff2') format('woff2'), url('KaTeX_Caligraphic-Bold.1e802ca9dedc4ed4e3c6.woff') format('woff'), url('KaTeX_Caligraphic-Bold.021dd4dc61ee5f5cdf31.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Caligraphic';\n  src: url('KaTeX_Caligraphic-Regular.7edb53b6693d75b8a223.woff2') format('woff2'), url('KaTeX_Caligraphic-Regular.d3b46c3a530116933081.woff') format('woff'), url('KaTeX_Caligraphic-Regular.d49f2d55ce4f40f982d8.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Fraktur';\n  src: url('KaTeX_Fraktur-Bold.d5b59ec9764e10f4a823.woff2') format('woff2'), url('KaTeX_Fraktur-Bold.c4c8cab7d5be97b2bb28.woff') format('woff'), url('KaTeX_Fraktur-Bold.a31e7cba7b7221ebf1a2.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Fraktur';\n  src: url('KaTeX_Fraktur-Regular.32a5339eb809f381a735.woff2') format('woff2'), url('KaTeX_Fraktur-Regular.b7d9c46bff5d51da6209.woff') format('woff'), url('KaTeX_Fraktur-Regular.a48dad4f58c82e38a10d.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-Bold.8e1e01c4b1207c0a383d.woff2') format('woff2'), url('KaTeX_Main-Bold.22086eb5d97009c3e99b.woff') format('woff'), url('KaTeX_Main-Bold.9ceff51b3cb7ce6eb4e8.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-BoldItalic.284a17fe5baf72ff8217.woff2') format('woff2'), url('KaTeX_Main-BoldItalic.4c57dbc44bfff1fdf08a.woff') format('woff'), url('KaTeX_Main-BoldItalic.e8b44b990516dab7937b.ttf') format('truetype');\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-Italic.e533d5a2506cf053cd67.woff2') format('woff2'), url('KaTeX_Main-Italic.99be0e10c38cd42466e6.woff') format('woff'), url('KaTeX_Main-Italic.29c86397e75cdcb3135a.ttf') format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_Main';\n  src: url('KaTeX_Main-Regular.5c734d78610fa35282f3.woff2') format('woff2'), url('KaTeX_Main-Regular.b741441f6d71014d0453.woff') format('woff'), url('KaTeX_Main-Regular.5c94aef490324b0925db.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Math';\n  src: url('KaTeX_Math-BoldItalic.d747bd1e7a6a43864285.woff2') format('woff2'), url('KaTeX_Math-BoldItalic.b13731ef4e2bfc3d8d85.woff') format('woff'), url('KaTeX_Math-BoldItalic.9a2834a9ff8ab4111535.ttf') format('truetype');\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_Math';\n  src: url('KaTeX_Math-Italic.4ad08b826b8065e1eab8.woff2') format('woff2'), url('KaTeX_Math-Italic.f0303906c2a67ac63bf1.woff') format('woff'), url('KaTeX_Math-Italic.291e76b8871b84560701.ttf') format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url('KaTeX_SansSerif-Bold.6e0830bee40435e72165.woff2') format('woff2'), url('KaTeX_SansSerif-Bold.3fb419559955e3ce7561.woff') format('woff'), url('KaTeX_SansSerif-Bold.7dc027cba9f7b11ec92a.ttf') format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url('KaTeX_SansSerif-Italic.fba01c9c6fb2866a0f95.woff2') format('woff2'), url('KaTeX_SansSerif-Italic.727a9b0d97d72d2fc022.woff') format('woff'), url('KaTeX_SansSerif-Italic.4059868e460d2d2e6be1.ttf') format('truetype');\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'KaTeX_SansSerif';\n  src: url('KaTeX_SansSerif-Regular.d929cd671b19f0cfea55.woff2') format('woff2'), url('KaTeX_SansSerif-Regular.2555754a67062cac3a09.woff') format('woff'), url('KaTeX_SansSerif-Regular.5c58d168c0b66d2c3223.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Script';\n  src: url('KaTeX_Script-Regular.755e2491f13b5269f0af.woff2') format('woff2'), url('KaTeX_Script-Regular.d524c9a5b62a17f98f4a.woff') format('woff'), url('KaTeX_Script-Regular.d12ea9efb375f9dc331f.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size1';\n  src: url('KaTeX_Size1-Regular.048c39cba4dfb0460682.woff2') format('woff2'), url('KaTeX_Size1-Regular.08b5f00e7140f7a10e62.woff') format('woff'), url('KaTeX_Size1-Regular.7342d45b052c3a2abc21.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size2';\n  src: url('KaTeX_Size2-Regular.81d6b8d5ca77d63d5033.woff2') format('woff2'), url('KaTeX_Size2-Regular.af24b0e4b7e52656ca77.woff') format('woff'), url('KaTeX_Size2-Regular.eb130dcc661de766c999.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size3';\n  src: url('KaTeX_Size3-Regular.b311ca09df2c89a10fbb.woff2') format('woff2'), url('KaTeX_Size3-Regular.0d8926405d832a4b065e.woff') format('woff'), url('KaTeX_Size3-Regular.7e02a40c41e52dc3b2b6.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Size4';\n  src: url('KaTeX_Size4-Regular.6a3255dfc1ba41c46e7e.woff2') format('woff2'), url('KaTeX_Size4-Regular.68895bb880a61a7fc019.woff') format('woff'), url('KaTeX_Size4-Regular.ad7672524b64b730dfd1.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'KaTeX_Typewriter';\n  src: url('KaTeX_Typewriter-Regular.6cc31ea5c223c88705a1.woff2') format('woff2'), url('KaTeX_Typewriter-Regular.3fe216d2a5f736c560cd.woff') format('woff'), url('KaTeX_Typewriter-Regular.257023560753aeb0b89b.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n.katex[_ngcontent-%COMP%] {\n  font: normal 1.21em KaTeX_Main, Times New Roman, serif;\n  line-height: 1.2;\n  text-indent: 0;\n  text-rendering: auto;\n}\n.katex[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  -ms-high-contrast-adjust: none !important;\n}\n.katex[_ngcontent-%COMP%]   .katex-version[_ngcontent-%COMP%]::after {\n  content: \"0.11.1\";\n}\n.katex[_ngcontent-%COMP%]   .katex-mathml[_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .katex-html[_ngcontent-%COMP%] {\n  \n}\n.katex[_ngcontent-%COMP%]   .katex-html[_ngcontent-%COMP%]    > .newline[_ngcontent-%COMP%] {\n  display: block;\n}\n.katex[_ngcontent-%COMP%]   .base[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n.katex[_ngcontent-%COMP%]   .strut[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.katex[_ngcontent-%COMP%]   .textbf[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.katex[_ngcontent-%COMP%]   .textit[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.katex[_ngcontent-%COMP%]   .textrm[_ngcontent-%COMP%] {\n  font-family: KaTeX_Main;\n}\n.katex[_ngcontent-%COMP%]   .textsf[_ngcontent-%COMP%] {\n  font-family: KaTeX_SansSerif;\n}\n.katex[_ngcontent-%COMP%]   .texttt[_ngcontent-%COMP%] {\n  font-family: KaTeX_Typewriter;\n}\n.katex[_ngcontent-%COMP%]   .mathdefault[_ngcontent-%COMP%] {\n  font-family: KaTeX_Math;\n  font-style: italic;\n}\n.katex[_ngcontent-%COMP%]   .mathit[_ngcontent-%COMP%] {\n  font-family: KaTeX_Main;\n  font-style: italic;\n}\n.katex[_ngcontent-%COMP%]   .mathrm[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.katex[_ngcontent-%COMP%]   .mathbf[_ngcontent-%COMP%] {\n  font-family: KaTeX_Main;\n  font-weight: bold;\n}\n.katex[_ngcontent-%COMP%]   .boldsymbol[_ngcontent-%COMP%] {\n  font-family: KaTeX_Math;\n  font-weight: bold;\n  font-style: italic;\n}\n.katex[_ngcontent-%COMP%]   .amsrm[_ngcontent-%COMP%] {\n  font-family: KaTeX_AMS;\n}\n.katex[_ngcontent-%COMP%]   .mathbb[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .textbb[_ngcontent-%COMP%] {\n  font-family: KaTeX_AMS;\n}\n.katex[_ngcontent-%COMP%]   .mathcal[_ngcontent-%COMP%] {\n  font-family: KaTeX_Caligraphic;\n}\n.katex[_ngcontent-%COMP%]   .mathfrak[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .textfrak[_ngcontent-%COMP%] {\n  font-family: KaTeX_Fraktur;\n}\n.katex[_ngcontent-%COMP%]   .mathtt[_ngcontent-%COMP%] {\n  font-family: KaTeX_Typewriter;\n}\n.katex[_ngcontent-%COMP%]   .mathscr[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .textscr[_ngcontent-%COMP%] {\n  font-family: KaTeX_Script;\n}\n.katex[_ngcontent-%COMP%]   .mathsf[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .textsf[_ngcontent-%COMP%] {\n  font-family: KaTeX_SansSerif;\n}\n.katex[_ngcontent-%COMP%]   .mathboldsf[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .textboldsf[_ngcontent-%COMP%] {\n  font-family: KaTeX_SansSerif;\n  font-weight: bold;\n}\n.katex[_ngcontent-%COMP%]   .mathitsf[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .textitsf[_ngcontent-%COMP%] {\n  font-family: KaTeX_SansSerif;\n  font-style: italic;\n}\n.katex[_ngcontent-%COMP%]   .mainrm[_ngcontent-%COMP%] {\n  font-family: KaTeX_Main;\n  font-style: normal;\n}\n.katex[_ngcontent-%COMP%]   .vlist-t[_ngcontent-%COMP%] {\n  display: inline-table;\n  table-layout: fixed;\n}\n.katex[_ngcontent-%COMP%]   .vlist-r[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.katex[_ngcontent-%COMP%]   .vlist[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  position: relative;\n}\n.katex[_ngcontent-%COMP%]   .vlist[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 0;\n  position: relative;\n}\n.katex[_ngcontent-%COMP%]   .vlist[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.katex[_ngcontent-%COMP%]   .vlist[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > .pstrut[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 0;\n}\n.katex[_ngcontent-%COMP%]   .vlist-t2[_ngcontent-%COMP%] {\n  margin-right: -2px;\n}\n.katex[_ngcontent-%COMP%]   .vlist-s[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  font-size: 1px;\n  width: 2px;\n  min-width: 2px;\n}\n.katex[_ngcontent-%COMP%]   .msupsub[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%]   .frac-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: solid;\n}\n.katex[_ngcontent-%COMP%]   .mfrac[_ngcontent-%COMP%]   .frac-line[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .overline[_ngcontent-%COMP%]   .overline-line[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%]   .underline-line[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .hline[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .hdashline[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%] {\n  min-height: 1px;\n}\n.katex[_ngcontent-%COMP%]   .mspace[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.katex[_ngcontent-%COMP%]   .llap[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .rlap[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .clap[_ngcontent-%COMP%] {\n  width: 0;\n  position: relative;\n}\n.katex[_ngcontent-%COMP%]   .llap[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .rlap[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .clap[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.katex[_ngcontent-%COMP%]   .llap[_ngcontent-%COMP%]    > .fix[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .rlap[_ngcontent-%COMP%]    > .fix[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .clap[_ngcontent-%COMP%]    > .fix[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.katex[_ngcontent-%COMP%]   .llap[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n  right: 0;\n}\n.katex[_ngcontent-%COMP%]   .rlap[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .clap[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%] {\n  left: 0;\n}\n.katex[_ngcontent-%COMP%]   .clap[_ngcontent-%COMP%]    > .inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-left: -50%;\n  margin-right: 50%;\n}\n.katex[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: solid 0;\n  position: relative;\n}\n.katex[_ngcontent-%COMP%]   .overline[_ngcontent-%COMP%]   .overline-line[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%]   .underline-line[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .hline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: solid;\n}\n.katex[_ngcontent-%COMP%]   .hdashline[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  border-bottom-style: dashed;\n}\n.katex[_ngcontent-%COMP%]   .sqrt[_ngcontent-%COMP%]    > .root[_ngcontent-%COMP%] {\n  margin-left: 0.27777778em;\n  margin-right: -0.55555556em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size1[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size2[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size3[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size4[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size5[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size6[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size7[_ngcontent-%COMP%] {\n  font-size: 2.4em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size8[_ngcontent-%COMP%] {\n  font-size: 2.88em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size9[_ngcontent-%COMP%] {\n  font-size: 3.456em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size10[_ngcontent-%COMP%] {\n  font-size: 4.148em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size1.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size1.size11[_ngcontent-%COMP%] {\n  font-size: 4.976em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size1[_ngcontent-%COMP%] {\n  font-size: 0.83333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size2[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size3[_ngcontent-%COMP%] {\n  font-size: 1.16666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size4[_ngcontent-%COMP%] {\n  font-size: 1.33333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size5[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size6[_ngcontent-%COMP%] {\n  font-size: 1.66666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size7[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size8[_ngcontent-%COMP%] {\n  font-size: 2.4em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size9[_ngcontent-%COMP%] {\n  font-size: 2.88em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size10[_ngcontent-%COMP%] {\n  font-size: 3.45666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size2.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size2.size11[_ngcontent-%COMP%] {\n  font-size: 4.14666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size1[_ngcontent-%COMP%] {\n  font-size: 0.71428571em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size2[_ngcontent-%COMP%] {\n  font-size: 0.85714286em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size3[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size4[_ngcontent-%COMP%] {\n  font-size: 1.14285714em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size5[_ngcontent-%COMP%] {\n  font-size: 1.28571429em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size6[_ngcontent-%COMP%] {\n  font-size: 1.42857143em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size7[_ngcontent-%COMP%] {\n  font-size: 1.71428571em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size8[_ngcontent-%COMP%] {\n  font-size: 2.05714286em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size9[_ngcontent-%COMP%] {\n  font-size: 2.46857143em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size10[_ngcontent-%COMP%] {\n  font-size: 2.96285714em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size3.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size3.size11[_ngcontent-%COMP%] {\n  font-size: 3.55428571em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size1[_ngcontent-%COMP%] {\n  font-size: 0.625em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size2[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size3[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size4[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size5[_ngcontent-%COMP%] {\n  font-size: 1.125em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size6[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size7[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size8[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size9[_ngcontent-%COMP%] {\n  font-size: 2.16em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size10[_ngcontent-%COMP%] {\n  font-size: 2.5925em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size4.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size4.size11[_ngcontent-%COMP%] {\n  font-size: 3.11em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size1[_ngcontent-%COMP%] {\n  font-size: 0.55555556em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size2[_ngcontent-%COMP%] {\n  font-size: 0.66666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size3[_ngcontent-%COMP%] {\n  font-size: 0.77777778em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size4[_ngcontent-%COMP%] {\n  font-size: 0.88888889em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size5[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size6[_ngcontent-%COMP%] {\n  font-size: 1.11111111em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size7[_ngcontent-%COMP%] {\n  font-size: 1.33333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size8[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size9[_ngcontent-%COMP%] {\n  font-size: 1.92em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size10[_ngcontent-%COMP%] {\n  font-size: 2.30444444em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size5.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size5.size11[_ngcontent-%COMP%] {\n  font-size: 2.76444444em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size1[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size2[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size3[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size4[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size5[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size6[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size7[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size8[_ngcontent-%COMP%] {\n  font-size: 1.44em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size9[_ngcontent-%COMP%] {\n  font-size: 1.728em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size10[_ngcontent-%COMP%] {\n  font-size: 2.074em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size6.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size6.size11[_ngcontent-%COMP%] {\n  font-size: 2.488em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size1[_ngcontent-%COMP%] {\n  font-size: 0.41666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size2[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size3[_ngcontent-%COMP%] {\n  font-size: 0.58333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size4[_ngcontent-%COMP%] {\n  font-size: 0.66666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size5[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size6[_ngcontent-%COMP%] {\n  font-size: 0.83333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size7[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size8[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size9[_ngcontent-%COMP%] {\n  font-size: 1.44em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size10[_ngcontent-%COMP%] {\n  font-size: 1.72833333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size7.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size7.size11[_ngcontent-%COMP%] {\n  font-size: 2.07333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size1[_ngcontent-%COMP%] {\n  font-size: 0.34722222em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size2[_ngcontent-%COMP%] {\n  font-size: 0.41666667em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size3[_ngcontent-%COMP%] {\n  font-size: 0.48611111em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size4[_ngcontent-%COMP%] {\n  font-size: 0.55555556em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size5[_ngcontent-%COMP%] {\n  font-size: 0.625em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size6[_ngcontent-%COMP%] {\n  font-size: 0.69444444em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size7[_ngcontent-%COMP%] {\n  font-size: 0.83333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size8[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size9[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size10[_ngcontent-%COMP%] {\n  font-size: 1.44027778em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size8.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size8.size11[_ngcontent-%COMP%] {\n  font-size: 1.72777778em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size1[_ngcontent-%COMP%] {\n  font-size: 0.28935185em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size2[_ngcontent-%COMP%] {\n  font-size: 0.34722222em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size3[_ngcontent-%COMP%] {\n  font-size: 0.40509259em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size4[_ngcontent-%COMP%] {\n  font-size: 0.46296296em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size5[_ngcontent-%COMP%] {\n  font-size: 0.52083333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size6[_ngcontent-%COMP%] {\n  font-size: 0.5787037em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size7[_ngcontent-%COMP%] {\n  font-size: 0.69444444em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size8[_ngcontent-%COMP%] {\n  font-size: 0.83333333em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size9[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size10[_ngcontent-%COMP%] {\n  font-size: 1.20023148em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size9.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size9.size11[_ngcontent-%COMP%] {\n  font-size: 1.43981481em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size1[_ngcontent-%COMP%] {\n  font-size: 0.24108004em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size2[_ngcontent-%COMP%] {\n  font-size: 0.28929605em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size3[_ngcontent-%COMP%] {\n  font-size: 0.33751205em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size4[_ngcontent-%COMP%] {\n  font-size: 0.38572806em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size5[_ngcontent-%COMP%] {\n  font-size: 0.43394407em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size6[_ngcontent-%COMP%] {\n  font-size: 0.48216008em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size7[_ngcontent-%COMP%] {\n  font-size: 0.57859209em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size8[_ngcontent-%COMP%] {\n  font-size: 0.69431051em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size9[_ngcontent-%COMP%] {\n  font-size: 0.83317261em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size10[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size10.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size10.size11[_ngcontent-%COMP%] {\n  font-size: 1.19961427em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size1[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size1[_ngcontent-%COMP%] {\n  font-size: 0.20096463em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size2[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size2[_ngcontent-%COMP%] {\n  font-size: 0.24115756em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size3[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size3[_ngcontent-%COMP%] {\n  font-size: 0.28135048em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size4[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size4[_ngcontent-%COMP%] {\n  font-size: 0.32154341em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size5[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size5[_ngcontent-%COMP%] {\n  font-size: 0.36173633em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size6[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size6[_ngcontent-%COMP%] {\n  font-size: 0.40192926em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size7[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size7[_ngcontent-%COMP%] {\n  font-size: 0.48231511em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size8[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size8[_ngcontent-%COMP%] {\n  font-size: 0.57877814em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size9[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size9[_ngcontent-%COMP%] {\n  font-size: 0.69453376em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size10[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size10[_ngcontent-%COMP%] {\n  font-size: 0.83360129em;\n}\n.katex[_ngcontent-%COMP%]   .sizing.reset-size11.size11[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fontsize-ensurer.reset-size11.size11[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.katex[_ngcontent-%COMP%]   .delimsizing.size1[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size1;\n}\n.katex[_ngcontent-%COMP%]   .delimsizing.size2[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size2;\n}\n.katex[_ngcontent-%COMP%]   .delimsizing.size3[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size3;\n}\n.katex[_ngcontent-%COMP%]   .delimsizing.size4[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size4;\n}\n.katex[_ngcontent-%COMP%]   .delimsizing.mult[_ngcontent-%COMP%]   .delim-size1[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size1;\n}\n.katex[_ngcontent-%COMP%]   .delimsizing.mult[_ngcontent-%COMP%]   .delim-size4[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size4;\n}\n.katex[_ngcontent-%COMP%]   .nulldelimiter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 0.12em;\n}\n.katex[_ngcontent-%COMP%]   .delimcenter[_ngcontent-%COMP%] {\n  position: relative;\n}\n.katex[_ngcontent-%COMP%]   .op-symbol[_ngcontent-%COMP%] {\n  position: relative;\n}\n.katex[_ngcontent-%COMP%]   .op-symbol.small-op[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size1;\n}\n.katex[_ngcontent-%COMP%]   .op-symbol.large-op[_ngcontent-%COMP%] {\n  font-family: KaTeX_Size2;\n}\n.katex[_ngcontent-%COMP%]   .op-limits[_ngcontent-%COMP%]    > .vlist-t[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.katex[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]    > .vlist-t[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.katex[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]   .accent-body[_ngcontent-%COMP%] {\n  position: relative;\n}\n.katex[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]   .accent-body[_ngcontent-%COMP%]:not(.accent-full) {\n  width: 0;\n}\n.katex[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: block;\n}\n.katex[_ngcontent-%COMP%]   .mtable[_ngcontent-%COMP%]   .vertical-separator[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 1px;\n}\n.katex[_ngcontent-%COMP%]   .mtable[_ngcontent-%COMP%]   .arraycolsep[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.katex[_ngcontent-%COMP%]   .mtable[_ngcontent-%COMP%]   .col-align-c[_ngcontent-%COMP%]    > .vlist-t[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.katex[_ngcontent-%COMP%]   .mtable[_ngcontent-%COMP%]   .col-align-l[_ngcontent-%COMP%]    > .vlist-t[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.katex[_ngcontent-%COMP%]   .mtable[_ngcontent-%COMP%]   .col-align-r[_ngcontent-%COMP%]    > .vlist-t[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.katex[_ngcontent-%COMP%]   .svg-align[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.katex[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: inherit;\n  fill: currentColor;\n  stroke: currentColor;\n  fill-rule: nonzero;\n  fill-opacity: 1;\n  stroke-width: 1;\n  stroke-linecap: butt;\n  stroke-linejoin: miter;\n  stroke-miterlimit: 4;\n  stroke-dasharray: none;\n  stroke-dashoffset: 0;\n  stroke-opacity: 1;\n}\n.katex[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: none;\n}\n.katex[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-style: none;\n  min-width: 0;\n  min-height: 0;\n  max-width: none;\n  max-height: none;\n}\n.katex[_ngcontent-%COMP%]   .stretchy[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .stretchy[_ngcontent-%COMP%]::before, .katex[_ngcontent-%COMP%]   .stretchy[_ngcontent-%COMP%]::after {\n  content: \"\";\n}\n.katex[_ngcontent-%COMP%]   .hide-tail[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .halfarrow-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 50.2%;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .halfarrow-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 50.2%;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .brace-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 25.1%;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .brace-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 25%;\n  width: 50%;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .brace-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 25.1%;\n  overflow: hidden;\n}\n.katex[_ngcontent-%COMP%]   .x-arrow-pad[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n}\n.katex[_ngcontent-%COMP%]   .x-arrow[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .mover[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .munder[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.katex[_ngcontent-%COMP%]   .boxpad[_ngcontent-%COMP%] {\n  padding: 0 0.3em 0 0.3em;\n}\n.katex[_ngcontent-%COMP%]   .fbox[_ngcontent-%COMP%], .katex[_ngcontent-%COMP%]   .fcolorbox[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 0.04em solid;\n}\n.katex[_ngcontent-%COMP%]   .cancel-pad[_ngcontent-%COMP%] {\n  padding: 0 0.2em 0 0.2em;\n}\n.katex[_ngcontent-%COMP%]   .cancel-lap[_ngcontent-%COMP%] {\n  margin-left: -0.2em;\n  margin-right: -0.2em;\n}\n.katex[_ngcontent-%COMP%]   .sout[_ngcontent-%COMP%] {\n  border-bottom-style: solid;\n  border-bottom-width: 0.08em;\n}\n.katex-display[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1em 0;\n  text-align: center;\n}\n.katex-display[_ngcontent-%COMP%]    > .katex[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  white-space: nowrap;\n}\n.katex-display[_ngcontent-%COMP%]    > .katex[_ngcontent-%COMP%]    > .katex-html[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n.katex-display[_ngcontent-%COMP%]    > .katex[_ngcontent-%COMP%]    > .katex-html[_ngcontent-%COMP%]    > .tag[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n.katex-display.leqno[_ngcontent-%COMP%]    > .katex[_ngcontent-%COMP%]    > .katex-html[_ngcontent-%COMP%]    > .tag[_ngcontent-%COMP%] {\n  left: 0;\n  right: auto;\n}\n.katex-display.fleqn[_ngcontent-%COMP%]    > .katex[_ngcontent-%COMP%] {\n  text-align: left;\n}"];



/***/ }),

/***/ "./src/app/shared/katex-jax/katex-jax.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/katex-jax/katex-jax.component.ts ***!
  \*********************************************************/
/*! exports provided: KatexJaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KatexJaxComponent", function() { return KatexJaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! katex */ "./node_modules/katex/dist/katex.js");
/* harmony import */ var katex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(katex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var extract_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extract-math */ "./node_modules/extract-math/lib/index.js");
/* harmony import */ var extract_math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extract_math__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var DOUBLE_SLASH_REGEX = /(<span class="math-tex">[^<>]*\\\\[^<>]*<\/span>)+/gim;
var KatexJaxComponent = /** @class */ (function () {
    function KatexJaxComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    KatexJaxComponent.prototype.segments = function (text) {
        if (text.includes('math-tex') && (text.includes('&gt;') || text.includes('&lt;'))) {
            // this if condition is only for <, > symbol conflicts with opening and closing tags of elements eg: a<b is considered as a and tag <b
            var fixedmathSection = text.split('</span>');
            var postConversionArr = [];
            for (var i = 0; i < fixedmathSection.length; i++) {
                if (!!fixedmathSection[i] && (fixedmathSection[i].includes('math-tex')) &&
                    (fixedmathSection[i].includes('&gt;') || fixedmathSection[i].includes('&lt;'))) {
                    fixedmathSection[i] = fixedmathSection[i].replace(/&gt;/g, '>');
                    fixedmathSection[i] = fixedmathSection[i].replace(/&lt;/g, '<');
                    postConversionArr.push(fixedmathSection[i]);
                }
                else {
                    postConversionArr.push(fixedmathSection[i]);
                }
                if (i < fixedmathSection.length - 1) {
                    postConversionArr.push('</span>');
                }
            }
            text = postConversionArr.join('');
        }
        text = text.replace(/&amp;/g, '&');
        text = text.replace(/&nbsp;/g, ' ');
        return Object(extract_math__WEBPACK_IMPORTED_MODULE_2__["extractMath"])(text);
    };
    KatexJaxComponent.prototype.segment = function (text) {
        text = text.replace(/\\mbox/g, '');
        text = text.replace(/\\hbox/g, '');
        text = text.replace(/\\cal/g, '\\mathcal ');
        text = text.replace(/\\leq/g, '≤');
        return text;
    };
    KatexJaxComponent.prototype.ngOnChanges = function (changes) {
        if (changes['html']) {
            this.finalHtml = this.allHtml();
        }
    };
    KatexJaxComponent.prototype.allHtml = function () {
        var span = document.createElement('span');
        span.innerHTML = this.html;
        if (!!span.innerHTML && span.innerHTML.includes('math-tex')) {
            span.innerHTML = span.innerHTML.replace(/\n/g, '');
            if (span.innerHTML.match(DOUBLE_SLASH_REGEX)) {
                span.innerHTML = span.innerHTML.split('$').join('guidLuminus2020');
            }
            else {
                var fixedSpanSection = span.innerHTML.split('</span>');
                var arrPostConversion = [];
                for (var i = 0; i < fixedSpanSection.length; i++) {
                    var mathTexConverion = void 0;
                    var fixedSpanEnd = void 0;
                    if (!!fixedSpanSection[i] && fixedSpanSection[i].includes('math-tex')) {
                        fixedSpanEnd = !!fixedSpanSection[i] && fixedSpanSection[i].split('"math-tex">');
                        if (fixedSpanEnd[0].includes('\\$')) {
                            mathTexConverion = fixedSpanEnd[1].split('\\$').join('\\$');
                        }
                        else {
                            mathTexConverion = fixedSpanEnd[1].split('$').join('\\\\$');
                        }
                        var eachSpanEq = fixedSpanEnd[0] + '"math-tex">' + mathTexConverion + '</span>';
                        arrPostConversion.push(eachSpanEq);
                    }
                    else {
                        if (fixedSpanSection[i].includes('$')) {
                            fixedSpanSection[i] = fixedSpanSection[i].split('$').join('guidLuminus2020');
                        }
                        arrPostConversion.push(fixedSpanSection[i]);
                    }
                }
                span.innerHTML = arrPostConversion.join('');
            }
            span.innerHTML = this.segment(span.innerHTML);
        }
        else if (span.innerHTML.includes('$')) {
            span.innerHTML = span.innerHTML.split('$').join('guidLuminus2020');
        }
        span.innerHTML = span.innerHTML.split('\\(').join('\$');
        span.innerHTML = span.innerHTML.split('\\)').join('\$');
        span.innerHTML = span.innerHTML.split('\\[').join('\$');
        span.innerHTML = span.innerHTML.split('\\]').join('\$');
        var segmentData = this.segments(span.innerHTML);
        if (segmentData.length) {
            var allHtml = segmentData.map(function (seg) {
                if (seg.math) {
                    return katex__WEBPACK_IMPORTED_MODULE_1__["renderToString"](seg.raw, { displayMode: false, output: 'html', throwOnError: false });
                }
                else {
                    return seg.value;
                }
            }).reduce(function (total, current) {
                return total += current;
            });
            allHtml = allHtml.replace(/guidLuminus2020/g, '$');
            return this.domSanitizer.bypassSecurityTrustHtml(allHtml);
        }
    };
    return KatexJaxComponent;
}());



/***/ }),

/***/ "./src/app/shared/moment.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/moment.pipe.ts ***!
  \***************************************/
/*! exports provided: MomentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentPipe", function() { return MomentPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


var MomentPipe = /** @class */ (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, format) {
        if (!value) {
            return value;
        }
        return moment__WEBPACK_IMPORTED_MODULE_1__(value).format(format);
    };
    return MomentPipe;
}());



/***/ }),

/***/ "./src/app/shared/page-title.directive.ts":
/*!************************************************!*\
  !*** ./src/app/shared/page-title.directive.ts ***!
  \************************************************/
/*! exports provided: PageTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleDirective", function() { return PageTitleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DEFAULT_TITLE = 'LumiNUS - National University of Singapore';
var PageTitleDirective = /** @class */ (function () {
    function PageTitleDirective(titleService, router) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.currentUrl = this.router.url;
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            if (_this.currentUrl === _this.router.url) {
                _this.setTitle();
            }
        });
    }
    PageTitleDirective.prototype.ngOnInit = function () {
        this.setTitle();
    };
    PageTitleDirective.prototype.ngOnChanges = function () {
        this.setTitle();
    };
    PageTitleDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    PageTitleDirective.prototype.setTitle = function () {
        this.titleService.setTitle(this.pageTitle || DEFAULT_TITLE);
    };
    return PageTitleDirective;
}());



/***/ }),

/***/ "./src/app/shared/validation-message.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/shared/validation-message.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_ValidationMessageComponent, View_ValidationMessageComponent_0, View_ValidationMessageComponent_Host_0, ValidationMessageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ValidationMessageComponent", function() { return RenderType_ValidationMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ValidationMessageComponent_0", function() { return View_ValidationMessageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ValidationMessageComponent_Host_0", function() { return View_ValidationMessageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessageComponentNgFactory", function() { return ValidationMessageComponentNgFactory; });
/* harmony import */ var _validation_message_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-message.component.scss.shim.ngstyle */ "./src/app/shared/validation-message.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validation_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-message.component */ "./src/app/shared/validation-message.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ValidationMessageComponent = [_validation_message_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ValidationMessageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ValidationMessageComponent, data: {} });

function View_ValidationMessageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "help-block"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null); }
function View_ValidationMessageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "validation-message", [], [[2, "show", null]], null, null, View_ValidationMessageComponent_0, RenderType_ValidationMessageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _validation_message_component__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageComponent"], [], null, null)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).showError; _ck(_v, 0, 0, currVal_0); }); }
var ValidationMessageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("validation-message", _validation_message_component__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageComponent"], View_ValidationMessageComponent_Host_0, { key: "key" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/shared/validation-message.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/shared/validation-message.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: none;\n  margin-top: 10px; }\n  .show[_nghost-%COMP%] {\n    display: block; }\n  [_nghost-%COMP%]   span.help-block[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 12px;\n    margin-bottom: 0; }"];



/***/ }),

/***/ "./src/app/shared/validation-message.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/validation-message.component.ts ***!
  \********************************************************/
/*! exports provided: ValidationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessageComponent", function() { return ValidationMessageComponent; });
var ValidationMessageComponent = /** @class */ (function () {
    function ValidationMessageComponent() {
    }
    Object.defineProperty(ValidationMessageComponent.prototype, "showError", {
        get: function () {
            return this.formField && this.formField.showError &&
                this.formField.formControl.hasError(this.key);
        },
        enumerable: true,
        configurable: true
    });
    return ValidationMessageComponent;
}());



/***/ })

}]);