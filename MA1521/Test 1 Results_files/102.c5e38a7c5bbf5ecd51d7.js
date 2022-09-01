(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./src/app/lti/lti-content.service.ts":
/*!********************************************!*\
  !*** ./src/app/lti/lti-content.service.ts ***!
  \********************************************/
/*! exports provided: LtiContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LtiContentService", function() { return LtiContentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _learning_flow_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../learning-flow/activity.service */ "./src/app/learning-flow/activity.service.ts");
/* harmony import */ var _models_lti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/lti */ "./src/app/models/lti.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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












var LtiContentService = /** @class */ (function (_super) {
    __extends(LtiContentService, _super);
    function LtiContentService(environment, userService, httpClient, activityService) {
        var _this = _super.call(this, _models_lti__WEBPACK_IMPORTED_MODULE_5__["ExternalContent"], userService, httpClient, environment) || this;
        _this.activityService = activityService;
        _this.resourceBaseUrl = '/externallinks/ExternalContent/';
        _this._edxModule = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this.edXModule = false;
        _this.isStaging = false;
        _this.edXContent = _this._edxModule.asObservable();
        _this.isStaging = environment.ENV === 'staging';
        if (_this.isStaging) {
            _this.apiBaseUrl = _this.environment.API_BASE_URL_GRP6;
        }
        else {
            _this.apiBaseUrl = _this.environment.API_BASE_URL;
        }
        return _this;
    }
    LtiContentService.prototype.getedXContent = function (isedX) {
        this._edxModule.next(isedX);
    };
    LtiContentService.prototype.queryByResource = function (moduleId, query) {
        var url = this.apiBaseUrl +
            ("/externallinks/" + moduleId + "/ExternalContent");
        return _super.prototype.query.call(this, query, url);
    };
    LtiContentService.prototype.getExtModules = function () {
        var url = this.apiBaseUrl + '/externallinks/enrolledexternalcontents';
        return this.httpClient
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (r) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(r.data || []); }));
    };
    LtiContentService.prototype.enroll = function (moduleId) {
        return this.httpClient
            .post(this.apiBaseUrl + '/externallinks/SignUp', {
            id: moduleId,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _models_lti__WEBPACK_IMPORTED_MODULE_5__["ExternalContent"](r); }));
    };
    LtiContentService.prototype.logHit = function (lticontentId) {
        var body = { id: lticontentId };
        var path = this.apiBaseUrl + '/externallinks/Log';
        return this.httpClient.post(path, body);
    };
    LtiContentService.prototype.logEnrolled = function (uuid) {
        var body = { id: uuid };
        var path = this.apiBaseUrl + '/externallinks/LogEnrolled';
        return this.httpClient.post(path, body);
    };
    LtiContentService.prototype.removeedXCourse = function (uuid) {
        var _this = this;
        var uuids = underscore__WEBPACK_IMPORTED_MODULE_3__["isArray"](uuid) ? uuid : [uuid];
        return this.httpClient
            .request('delete', this.apiBaseUrl + '/externallinks/SignUp/' + uuid, { body: { iDs: uuid } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (r) { return uuids.forEach(function (i) { return _this.onResourceDeleted.emit(i); }); }));
    };
    LtiContentService.prototype.queryEdxCatalog = function (query) {
        if (query === void 0) { query = new _utils__WEBPACK_IMPORTED_MODULE_7__["RESTQuery"](); }
        var url = this.apiBaseUrl + '/externallinks/edXCourseCatalog';
        return this.httpClient
            .get(url, { params: query.toHttpParams() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _utils__WEBPACK_IMPORTED_MODULE_7__["RESTQueryResult"](r, function (m) { return new _models_lti__WEBPACK_IMPORTED_MODULE_5__["EdxCourse"](m); }); }));
    };
    LtiContentService.prototype.edXFilters = function () {
        var url = this.apiBaseUrl + '/externallinks/edXCourseFilters';
        return this.httpClient.get(url, {});
    };
    LtiContentService.prototype.searchEdxCatalog = function (searchText, query, edXFilter) {
        var url = this.apiBaseUrl + '/externallinks/searchedXCourseCatalog';
        var params;
        if (query) {
            params = query.toHttpParams({ SearchText: searchText }, true);
        }
        if (edXFilter) {
            params = params.set('selectedquery', edXFilter);
        }
        return this.httpClient
            .get(url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _utils__WEBPACK_IMPORTED_MODULE_7__["RESTQueryResult"](r, function (m) { return new _models_lti__WEBPACK_IMPORTED_MODULE_5__["EdxCourse"](m); }); }));
    };
    LtiContentService.prototype.createMultiple = function (moduleId, contentIds, source, lessonId, learningFlow) {
        var _this = this;
        var url = this.apiBaseUrl + '/externallinks/ExternalContents';
        if (learningFlow) {
            return this.httpClient
                .post(url, {
                resourceID: moduleId,
                iDs: contentIds,
                source: source,
                lessonID: lessonId,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (r) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(r.data || []); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return _this.createModelInstance(r); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (f) {
                _this.onResourceCreated.emit(f);
                if (f.activity) {
                    f.activity.target = f;
                    _this.activityService.onResourceCreated.emit(f.activity);
                }
            }));
        }
        else {
            return this.httpClient
                .post(url, {
                resourceID: moduleId,
                iDs: contentIds,
                source: source,
                lessonID: lessonId,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                return (res.data || []).map(function (c) { return _this.createModelInstance(c); });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (f) { return f.forEach(function (c) { return _this.onResourceCreated.emit(c); }); }));
        }
    };
    LtiContentService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ factory: function LtiContentService_Factory() { return new LtiContentService(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"]("AppEnvironment"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_learning_flow_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"])); }, token: LtiContentService, providedIn: "root" });
    return LtiContentService;
}(_utils__WEBPACK_IMPORTED_MODULE_7__["RESTService"]));



/***/ })

}]);