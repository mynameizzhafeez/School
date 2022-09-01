(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/term.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/term.service.ts ***!
  \**************************************/
/*! exports provided: TermService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermService", function() { return TermService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/setting */ "./src/app/models/setting.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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







var TermService = /** @class */ (function (_super) {
    __extends(TermService, _super);
    function TermService(environment, userService, httpClient) {
        var _this = _super.call(this, _models_setting__WEBPACK_IMPORTED_MODULE_1__["Term"], userService, httpClient, environment) || this;
        _this.resourceBaseUrl = '/setting/term';
        return _this;
    }
    TermService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function TermService_Factory() { return new TermService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"]("AppEnvironment"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: TermService, providedIn: "root" });
    return TermService;
}(_utils__WEBPACK_IMPORTED_MODULE_3__["RESTService"]));



/***/ }),

/***/ "./src/app/course-module/course-module.resolve.ts":
/*!********************************************************!*\
  !*** ./src/app/course-module/course-module.resolve.ts ***!
  \********************************************************/
/*! exports provided: CourseModuleResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleResolve", function() { return CourseModuleResolve; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils_routing_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/routing-utils */ "./src/app/utils/routing-utils.ts");
/* harmony import */ var _course_module_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");














var CourseModuleResolve = /** @class */ (function () {
    function CourseModuleResolve(courseModuleService, router, routeSpinnerService, errorHandlerService, userService) {
        this.courseModuleService = courseModuleService;
        this.router = router;
        this.routeSpinnerService = routeSpinnerService;
        this.errorHandlerService = errorHandlerService;
        this.userService = userService;
    }
    CourseModuleResolve.prototype.resolve = function (route) {
        var _this = this;
        this.routeSpinnerService.start('courseModuleView');
        var id = Object(_utils_routing_utils__WEBPACK_IMPORTED_MODULE_5__["findParam"])('moduleId', route);
        var populate;
        if (route.data &&
            route.data.courseModuleResolve &&
            route.data.courseModuleResolve.populate) {
            populate = route.data.courseModuleResolve.populate;
        }
        var obs;
        if (this.userService.currentUser &&
            !this.router.url.includes('module-search')) {
            obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.courseModuleService.getCourseModuleInfo(id, populate));
        }
        else if (this.userService.currentUser &&
            this.router.url.includes('module-search')) {
            obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.courseModuleService.getCourseModuleInfo(id, populate));
        }
        else {
            obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.courseModuleService.getPublicCourseModuleInfo(id, populate));
        }
        return obs
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var courseModule = _a[0], details = _a[1];
            if (courseModule) {
                if (details) {
                    courseModule.details = details.data;
                }
                return courseModule;
            }
            else {
                _this.router.navigate(['/modules']);
                return null;
            }
        }))
            .toPromise()
            .catch(function (error) {
            _this.errorHandlerService.handle(error);
        });
    };
    CourseModuleResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ factory: function CourseModuleResolve_Factory() { return new CourseModuleResolve(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_course_module_service__WEBPACK_IMPORTED_MODULE_6__["CourseModuleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_route_spinner_service__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); }, token: CourseModuleResolve, providedIn: "root" });
    return CourseModuleResolve;
}());



/***/ }),

/***/ "./src/app/course-module/departments.resolve.ts":
/*!******************************************************!*\
  !*** ./src/app/course-module/departments.resolve.ts ***!
  \******************************************************/
/*! exports provided: DepartmentsResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsResolve", function() { return DepartmentsResolve; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_department_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/department.service */ "./src/app/core/department.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var DepartmentsResolve = /** @class */ (function () {
    function DepartmentsResolve(departmentService, routeSpinnerService, errorHandlerService) {
        this.departmentService = departmentService;
        this.routeSpinnerService = routeSpinnerService;
        this.errorHandlerService = errorHandlerService;
    }
    DepartmentsResolve.prototype.resolve = function (route) {
        if (route.data['routeSpinner']) {
            this.routeSpinnerService.start(route.data['routeSpinner']);
        }
        return this.getDepartments(route);
    };
    DepartmentsResolve.prototype.getDepartments = function (route) {
        var _this = this;
        return this.departmentService
            .query()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result.data; }))
            .toPromise()
            .catch(function (err) {
            _this.errorHandlerService.handle(err);
            return Promise.resolve([]);
        });
    };
    DepartmentsResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function DepartmentsResolve_Factory() { return new DepartmentsResolve(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_department_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_route_spinner_service__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"])); }, token: DepartmentsResolve, providedIn: "root" });
    return DepartmentsResolve;
}());



/***/ }),

/***/ "./src/app/lti/lti.module.ngfactory.js":
/*!*********************************************!*\
  !*** ./src/app/lti/lti.module.ngfactory.js ***!
  \*********************************************/
/*! exports provided: LtiModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LtiModuleNgFactory", function() { return LtiModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lti_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lti.module */ "./src/app/lti/lti.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _lti_app_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lti-app-list.page.ngfactory */ "./src/app/lti/lti-app-list.page.ngfactory.js");
/* harmony import */ var _testing_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../testing/index.ngfactory */ "./src/app/testing/index.ngfactory.js");
/* harmony import */ var _lti_app_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lti-app-edit.page.ngfactory */ "./src/app/lti/lti-app-edit.page.ngfactory.js");
/* harmony import */ var _lti_app_launch_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lti-app-launch.page.ngfactory */ "./src/app/lti/lti-app-launch.page.ngfactory.js");
/* harmony import */ var _lti_app_return_page_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lti-app-return.page.ngfactory */ "./src/app/lti/lti-app-return.page.ngfactory.js");
/* harmony import */ var _edx_content_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edx-content-list.page.ngfactory */ "./src/app/lti/edx-content-list.page.ngfactory.js");
/* harmony import */ var _edx_content_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edx-content-edit.page.ngfactory */ "./src/app/lti/edx-content-edit.page.ngfactory.js");
/* harmony import */ var _past_paper_page_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./past-paper.page.ngfactory */ "./src/app/lti/past-paper.page.ngfactory.js");
/* harmony import */ var _shared_ngui_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime-picker.component.ngfactory */ "./src/app/shared/ngui-datetime-picker/datetime-picker.component.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-dragula/components/dragula.provider */ "./node_modules/ng2-dragula/components/dragula.provider.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime */ "./src/app/shared/ngui-datetime-picker/datetime.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-katex */ "./node_modules/ng-katex/fesm5/ng-katex.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/tool-layout.component */ "./src/app/shared/tool-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lti_routing__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lti.routing */ "./src/app/lti/lti.routing.ts");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-dragula/components/dragular.module */ "./node_modules/ng2-dragula/components/dragular.module.js");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime-picker.module */ "./src/app/shared/ngui-datetime-picker/datetime-picker.module.ts");
/* harmony import */ var ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-treeview/src/treeview.module */ "./node_modules/ngx-treeview/src/treeview.module.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _lti_app_list_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lti-app-list.page */ "./src/app/lti/lti-app-list.page.ts");
/* harmony import */ var _testing_index__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../testing/index */ "./src/app/testing/index.ts");
/* harmony import */ var _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../core/page-hit.guard */ "./src/app/core/page-hit.guard.ts");
/* harmony import */ var _lti_app_edit_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lti-app-edit.page */ "./src/app/lti/lti-app-edit.page.ts");
/* harmony import */ var _lti_system_apps_resolve__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lti-system-apps.resolve */ "./src/app/lti/lti-system-apps.resolve.ts");
/* harmony import */ var _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../core/route-spinner.guard */ "./src/app/core/route-spinner.guard.ts");
/* harmony import */ var _lti_app_resolve__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./lti-app.resolve */ "./src/app/lti/lti-app.resolve.ts");
/* harmony import */ var _lti_app_launch_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./lti-app-launch.page */ "./src/app/lti/lti-app-launch.page.ts");
/* harmony import */ var _lti_app_launch_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./lti-app-launch.guard */ "./src/app/lti/lti-app-launch.guard.ts");
/* harmony import */ var _lti_app_return_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lti-app-return.page */ "./src/app/lti/lti-app-return.page.ts");
/* harmony import */ var _edx_content_list_page__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./edx-content-list.page */ "./src/app/lti/edx-content-list.page.ts");
/* harmony import */ var _edx_content_edit_page__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./edx-content-edit.page */ "./src/app/lti/edx-content-edit.page.ts");
/* harmony import */ var _lti_content_resolve__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./lti-content.resolve */ "./src/app/lti/lti-content.resolve.ts");
/* harmony import */ var _past_paper_page__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./past-paper.page */ "./src/app/lti/past-paper.page.ts");
/* harmony import */ var _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../course-module/course-module.resolve */ "./src/app/course-module/course-module.resolve.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































var LtiModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_lti_module__WEBPACK_IMPORTED_MODULE_1__["LtiModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _lti_app_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["LtiAppListPageNgFactory"], _testing_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["EmptyComponentNgFactory"], _lti_app_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__["LtiAppEditPageNgFactory"], _lti_app_launch_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__["LtiAppLaunchPageNgFactory"], _lti_app_return_page_ngfactory__WEBPACK_IMPORTED_MODULE_7__["LtiAppReturnPageNgFactory"], _edx_content_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_8__["EdxContentListPageNgFactory"], _edx_content_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_9__["EdxContentEditPageNgFactory"], _past_paper_page_ngfactory__WEBPACK_IMPORTED_MODULE_10__["PastPaperPageNgFactory"], _shared_ngui_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["NguiDatetimePickerComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵxNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵnNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_12__["ɵtNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_15__["DragulaService"], ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_15__["DragulaService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_16__["NguiDatetime"], _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_16__["NguiDatetime"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["ɵy"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_katex__WEBPACK_IMPORTED_MODULE_18__["ɵa"], ng_katex__WEBPACK_IMPORTED_MODULE_18__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthStorage"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["ValidationHandler"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["NullValidationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["UrlHelperService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["UrlHelperService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthLogger"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["ɵa"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["JwksValidationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClient"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthStorage"]], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["ValidationHandler"]], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["AuthConfig"]], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["UrlHelperService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthLogger"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["ɵa"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthResourceServerErrorHandler"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthNoopResourceServerErrorHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"], function (p0_0, p0_1, p0_2, p0_3) { return [new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["DefaultOAuthInterceptor"](p0_0, p0_1, p0_2, p0_3)]; }, [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthStorage"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthResourceServerErrorHandler"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthModuleConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_21__["ToolContentDirective"], _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_21__["ToolContentDirective"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _lti_routing__WEBPACK_IMPORTED_MODULE_23__["LtiRoutingModule"], _lti_routing__WEBPACK_IMPORTED_MODULE_23__["LtiRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_24__["DragulaModule"], ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_24__["DragulaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_25__["NguiDatetimePickerModule"], _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_25__["NguiDatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_26__["TreeviewModule"], ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_26__["TreeviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_katex__WEBPACK_IMPORTED_MODULE_18__["KatexModule"], ng_katex__WEBPACK_IMPORTED_MODULE_18__["KatexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_28__["InfiniteScrollModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_28__["InfiniteScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _lti_module__WEBPACK_IMPORTED_MODULE_1__["LtiModule"], _lti_module__WEBPACK_IMPORTED_MODULE_1__["LtiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () { return [[{ path: "ext-app", children: [{ path: "", component: _lti_app_list_page__WEBPACK_IMPORTED_MODULE_29__["LtiAppListPage"], children: [{ path: "", component: _testing_index__WEBPACK_IMPORTED_MODULE_30__["EmptyComponent"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]] }, { path: "new-app", component: _lti_app_edit_page__WEBPACK_IMPORTED_MODULE_32__["LtiAppEditPage"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]], resolve: { systemTools: _lti_system_apps_resolve__WEBPACK_IMPORTED_MODULE_33__["LtiSystemAppsResolve"] } }, { path: ":appId/edit", component: _lti_app_edit_page__WEBPACK_IMPORTED_MODULE_32__["LtiAppEditPage"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_34__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]], data: _lti_routing__WEBPACK_IMPORTED_MODULE_23__["ɵ0"], resolve: { ltiApp: _lti_app_resolve__WEBPACK_IMPORTED_MODULE_35__["LtiAppResolve"] } }] }, { path: ":appId/launch", component: _lti_app_launch_page__WEBPACK_IMPORTED_MODULE_36__["LtiAppLaunchPage"], canActivate: [_lti_app_launch_guard__WEBPACK_IMPORTED_MODULE_37__["LtiAppLaunchGuard"], _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_34__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]], data: _lti_routing__WEBPACK_IMPORTED_MODULE_23__["ɵ1"], resolve: { ltiApp: _lti_app_resolve__WEBPACK_IMPORTED_MODULE_35__["LtiAppResolve"] } }, { path: ":appId/return", component: _lti_app_return_page__WEBPACK_IMPORTED_MODULE_38__["LtiAppReturnPage"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_34__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]], data: _lti_routing__WEBPACK_IMPORTED_MODULE_23__["ɵ2"], resolve: { ltiApp: _lti_app_resolve__WEBPACK_IMPORTED_MODULE_35__["LtiAppResolve"] } }] }, { path: "ext-content", children: [{ path: "", component: _edx_content_list_page__WEBPACK_IMPORTED_MODULE_39__["EdxContentListPage"], children: [{ path: "", component: _testing_index__WEBPACK_IMPORTED_MODULE_30__["EmptyComponent"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]] }, { path: ":contentId/edit", component: _edx_content_edit_page__WEBPACK_IMPORTED_MODULE_40__["EdxContentEditPage"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_34__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]], data: _lti_routing__WEBPACK_IMPORTED_MODULE_23__["ɵ3"], resolve: { content: _lti_content_resolve__WEBPACK_IMPORTED_MODULE_41__["LtiContentResolve"] } }] }] }, { path: "past-papers", component: _past_paper_page__WEBPACK_IMPORTED_MODULE_42__["PastPaperPage"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_34__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_31__["PageHitGuard"]], resolve: { courseModule: _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_43__["CourseModuleResolve"] } }, { path: "modules", loadChildren: _lti_routing__WEBPACK_IMPORTED_MODULE_23__["ɵ4"] }, { path: "", redirectTo: "ext-app", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_19__["OAuthModuleConfig"], null, [])]); });



/***/ }),

/***/ "./src/app/manager/manager.service.ts":
/*!********************************************!*\
  !*** ./src/app/manager/manager.service.ts ***!
  \********************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/manager */ "./src/app/models/manager.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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










var ManagerService = /** @class */ (function (_super) {
    __extends(ManagerService, _super);
    function ManagerService(environment, userService, httpClient) {
        var _this = _super.call(this, _models_manager__WEBPACK_IMPORTED_MODULE_3__["Manager"], userService, httpClient, environment) || this;
        _this.resourceBaseUrl = '/module/Manager/';
        _this.isStaging = false;
        _this.onResourceImported = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isStaging = environment.ENV === 'staging';
        if (_this.isStaging) {
            _this.apiBaseUrl = _this.environment.API_BASE_URL_GRP1;
        }
        else {
            _this.apiBaseUrl = _this.environment.API_BASE_URL;
        }
        return _this;
    }
    ManagerService.prototype.queryByResource = function (id, query) {
        if (!query) {
            query = new _utils__WEBPACK_IMPORTED_MODULE_5__["RESTQuery"]();
            query.populate = 'photo,groupID';
        }
        return _super.prototype.query.call(this, query, this.apiBaseUrl + ("/module/" + id + "/Manager"));
    };
    ManagerService.prototype.transfer = function (payload) {
        return this.httpClient.put(this.apiBaseUrl + '/module/Transfer', payload);
    };
    ManagerService.prototype.importFromExcel = function (file, resourceId) {
        var payload = { resourceID: resourceId };
        return this.upload("/module/" + resourceId + "/Manager/ImportByExcel", file.file, payload);
    };
    ManagerService.prototype.removeById = function (id) {
        var _this = this;
        return this.httpClient
            .delete(this.apiBaseUrl + this.resourceBaseUrl + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (r) { return _this.onResourceDeleted.emit(id); }));
    };
    ManagerService.prototype._parseManager = function (resourceId, json) {
        var manager = new _models_manager__WEBPACK_IMPORTED_MODULE_3__["Manager"](underscore__WEBPACK_IMPORTED_MODULE_2__["omit"](json, 'managerProperty'));
        Object.assign(manager, json.managerProperty);
        manager.department = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["toTitleCase"])(json.department);
        return manager;
    };
    ManagerService.prototype.addNonNUSFacilitator = function (payload) {
        var _this = this;
        return this.httpClient
            .post(this.apiBaseUrl + '/module/ManagerNonNUS', payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return _this.createModelInstance(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (f) { return _this.onResourceCreated.emit(f); }));
    };
    ManagerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function ManagerService_Factory() { return new ManagerService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]("AppEnvironment"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); }, token: ManagerService, providedIn: "root" });
    return ManagerService;
}(_utils__WEBPACK_IMPORTED_MODULE_5__["RESTService"]));



/***/ }),

/***/ "./src/app/my-modules/my-modules.module.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/my-modules/my-modules.module.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: MyModulesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModulesModuleNgFactory", function() { return MyModulesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_modules_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-modules.module */ "./src/app/my-modules/my-modules.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _shared_ngui_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime-picker.component.ngfactory */ "./src/app/shared/ngui-datetime-picker/datetime-picker.component.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _my_modules_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-modules.page.ngfactory */ "./src/app/my-modules/my-modules.page.ngfactory.js");
/* harmony import */ var _testing_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../testing/index.ngfactory */ "./src/app/testing/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula/components/dragula.provider */ "./node_modules/ng2-dragula/components/dragula.provider.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime */ "./src/app/shared/ngui-datetime-picker/datetime.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-katex */ "./node_modules/ng-katex/fesm5/ng-katex.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/tool-layout.component */ "./src/app/shared/tool-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-dragula/components/dragular.module */ "./node_modules/ng2-dragula/components/dragular.module.js");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime-picker.module */ "./src/app/shared/ngui-datetime-picker/datetime-picker.module.ts");
/* harmony import */ var ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-treeview/src/treeview.module */ "./node_modules/ngx-treeview/src/treeview.module.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _my_modules_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./my-modules-routing.module */ "./src/app/my-modules/my-modules-routing.module.ts");
/* harmony import */ var _course_module_list_course_module_list_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../course-module-list/course-module-list.module */ "./src/app/course-module-list/course-module-list.module.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _dashboard_news_dashboard_news_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dashboard-news/dashboard-news.module */ "./src/app/dashboard-news/dashboard-news.module.ts");
/* harmony import */ var _main_nav_main_nav_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../main-nav/main-nav.module */ "./src/app/main-nav/main-nav.module.ts");
/* harmony import */ var _module_type_select_module_type_select_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../module-type-select/module-type-select.module */ "./src/app/module-type-select/module-type-select.module.ts");
/* harmony import */ var _my_modules_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./my-modules.page */ "./src/app/my-modules/my-modules.page.ts");
/* harmony import */ var _user_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../user/auth-guard.service */ "./src/app/user/auth-guard.service.ts");
/* harmony import */ var _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../core/route-spinner.guard */ "./src/app/core/route-spinner.guard.ts");
/* harmony import */ var _dashboard_academic_week_resolve__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../dashboard/academic-week.resolve */ "./src/app/dashboard/academic-week.resolve.ts");
/* harmony import */ var _testing_index__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../testing/index */ "./src/app/testing/index.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var MyModulesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_my_modules_module__WEBPACK_IMPORTED_MODULE_1__["MyModulesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _shared_ngui_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NguiDatetimePickerComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵxNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵnNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵtNgFactory"], _my_modules_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MyModulesPageNgFactory"], _testing_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["EmptyComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_9__["DragulaService"], ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_9__["DragulaService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_10__["NguiDatetime"], _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_10__["NguiDatetime"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ɵy"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_katex__WEBPACK_IMPORTED_MODULE_12__["ɵa"], ng_katex__WEBPACK_IMPORTED_MODULE_12__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthStorage"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["ValidationHandler"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["NullValidationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["UrlHelperService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["UrlHelperService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthLogger"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["ɵa"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["JwksValidationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthStorage"]], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["ValidationHandler"]], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["AuthConfig"]], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["UrlHelperService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthLogger"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["ɵa"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthResourceServerErrorHandler"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthNoopResourceServerErrorHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], function (p0_0, p0_1, p0_2, p0_3) { return [new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["DefaultOAuthInterceptor"](p0_0, p0_1, p0_2, p0_3)]; }, [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthStorage"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthResourceServerErrorHandler"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthModuleConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_15__["ToolContentDirective"], _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_15__["ToolContentDirective"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_17__["DragulaModule"], ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_17__["DragulaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_18__["NguiDatetimePickerModule"], _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_18__["NguiDatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_19__["TreeviewModule"], ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_19__["TreeviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_katex__WEBPACK_IMPORTED_MODULE_12__["KatexModule"], ng_katex__WEBPACK_IMPORTED_MODULE_12__["KatexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _my_modules_routing_module__WEBPACK_IMPORTED_MODULE_21__["MyModulesRoutingModule"], _my_modules_routing_module__WEBPACK_IMPORTED_MODULE_21__["MyModulesRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _course_module_list_course_module_list_module__WEBPACK_IMPORTED_MODULE_22__["CourseModuleListModule"], _course_module_list_course_module_list_module__WEBPACK_IMPORTED_MODULE_22__["CourseModuleListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__["InfiniteScrollModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__["InfiniteScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _dashboard_news_dashboard_news_module__WEBPACK_IMPORTED_MODULE_24__["DashboardNewsModule"], _dashboard_news_dashboard_news_module__WEBPACK_IMPORTED_MODULE_24__["DashboardNewsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _main_nav_main_nav_module__WEBPACK_IMPORTED_MODULE_25__["MainNavModule"], _main_nav_main_nav_module__WEBPACK_IMPORTED_MODULE_25__["MainNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _module_type_select_module_type_select_module__WEBPACK_IMPORTED_MODULE_26__["ModuleTypeSelectModule"], _module_type_select_module_type_select_module__WEBPACK_IMPORTED_MODULE_26__["ModuleTypeSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _my_modules_module__WEBPACK_IMPORTED_MODULE_1__["MyModulesModule"], _my_modules_module__WEBPACK_IMPORTED_MODULE_1__["MyModulesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__["OAuthModuleConfig"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () { return [[{ path: "", component: _my_modules_page__WEBPACK_IMPORTED_MODULE_27__["MyModulesPage"], canActivate: [_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"], _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_29__["RouteSpinnerGuard"]], resolve: { academicWeek: _dashboard_academic_week_resolve__WEBPACK_IMPORTED_MODULE_30__["AcademicWeekResolve"] }, data: _my_modules_routing_module__WEBPACK_IMPORTED_MODULE_21__["ɵ0"], children: [{ path: "", component: _testing_index__WEBPACK_IMPORTED_MODULE_31__["EmptyComponent"], pathMatch: "full" }, { path: "new-module", loadChildren: _my_modules_routing_module__WEBPACK_IMPORTED_MODULE_21__["ɵ1"] }, { path: ":moduleId", loadChildren: _my_modules_routing_module__WEBPACK_IMPORTED_MODULE_21__["ɵ2"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/shared/list-filters.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/shared/list-filters.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_FilterComponent, View_FilterComponent_0, View_FilterComponent_Host_0, FilterComponentNgFactory, RenderType_ListFiltersComponent, View_ListFiltersComponent_0, View_ListFiltersComponent_Host_0, ListFiltersComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FilterComponent", function() { return RenderType_FilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FilterComponent_0", function() { return View_FilterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FilterComponent_Host_0", function() { return View_FilterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponentNgFactory", function() { return FilterComponentNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListFiltersComponent", function() { return RenderType_ListFiltersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListFiltersComponent_0", function() { return View_ListFiltersComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListFiltersComponent_Host_0", function() { return View_ListFiltersComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFiltersComponentNgFactory", function() { return ListFiltersComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_filters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-filters.component */ "./src/app/shared/list-filters.component.ts");
/* harmony import */ var _list_filters_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-filters.component.scss.shim.ngstyle */ "./src/app/shared/list-filters.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_FilterComponent = [];
var RenderType_FilterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_FilterComponent, data: {} });

function View_FilterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { content: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["content", 1]], null, 1, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null); }
function View_FilterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "filter", [], null, null, null, View_FilterComponent_0, RenderType_FilterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _list_filters_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"], [], null, null)], null, null); }
var FilterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("filter", _list_filters_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"], View_FilterComponent_Host_0, { fieldName: "fieldName", value: "value", selected: "selected" }, { change: "change" }, ["*"]);

var styles_ListFiltersComponent = [_list_filters_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_ListFiltersComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ListFiltersComponent, data: {} });

function View_ListFiltersComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-default"], ["type", "button"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.visibleFilterType = _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.visibleFilterType === _v.context.$implicit); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_1); }); }
function View_ListFiltersComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "label", [["class", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "input", [["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        _v.context.$implicit.toggle();
        var pd_0 = (_co.onFilterSelectedChange(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.selected; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_1); }); }
function View_ListFiltersComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "filter-category"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ListFiltersComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.visibleFilterType.filters; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ListFiltersComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "selected-filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_ListFiltersComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "btn-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ListFiltersComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ListFiltersComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "div", [["class", "selected-filters"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ListFiltersComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "a", [["class", "reset"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reset() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Reset"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.filterTypes; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.visibleFilterType; _ck(_v, 4, 0, currVal_1); var currVal_3 = _co.selectedFilters; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.selectedFilters.length; _ck(_v, 5, 0, currVal_2); }); }
function View_ListFiltersComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "list-filters", [], null, null, null, View_ListFiltersComponent_0, RenderType_ListFiltersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 1, _list_filters_component__WEBPACK_IMPORTED_MODULE_1__["ListFiltersComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { filterTypes: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListFiltersComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("list-filters", _list_filters_component__WEBPACK_IMPORTED_MODULE_1__["ListFiltersComponent"], View_ListFiltersComponent_Host_0, {}, { filterChange: "filterChange" }, []);



/***/ }),

/***/ "./src/app/shared/list-filters.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/shared/list-filters.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: block; }\n.filter-category[_ngcontent-%COMP%] {\n  margin: 20px 0 10px 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  max-height: 100px; }\n.filter-category[_ngcontent-%COMP%]   label.checkbox[_ngcontent-%COMP%] {\n    display: inline-block;\n    flex: 1 0 21%;\n    margin-right: 15px;\n    margin-bottom: 5px; }\n.selected-filters[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #909090; }\n.selected-filters[_ngcontent-%COMP%]   .selected-filter[_ngcontent-%COMP%] {\n    margin-right: 11px; }\n.selected-filters[_ngcontent-%COMP%]   .reset[_ngcontent-%COMP%] {\n    font-weight: 600; }"];



/***/ }),

/***/ "./src/app/shared/list-filters.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/list-filters.component.ts ***!
  \**************************************************/
/*! exports provided: FilterComponent, FilterTypeDirective, ListFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTypeDirective", function() { return FilterTypeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFiltersComponent", function() { return ListFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);


var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.selected = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FilterComponent.prototype, "name", {
        get: function () {
            return this.content.nativeElement.innerText;
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.toggle = function () {
        this.selected = !this.selected;
        this.change.emit(this.selected);
    };
    return FilterComponent;
}());

var FilterTypeDirective = /** @class */ (function () {
    function FilterTypeDirective() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFilters = [];
    }
    return FilterTypeDirective;
}());

var ListFiltersComponent = /** @class */ (function () {
    function ListFiltersComponent() {
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFilters = [];
    }
    ListFiltersComponent.prototype.ngOnInit = function () { };
    ListFiltersComponent.prototype.onFilterSelectedChange = function (filter) {
        if (filter.selected) {
            this.selectedFilters = underscore__WEBPACK_IMPORTED_MODULE_1__["uniq"](this.selectedFilters.concat(filter));
        }
        else {
            var i = this.selectedFilters.indexOf(filter);
            if (i > -1) {
                this.selectedFilters.splice(i, 1);
            }
        }
        this.filterChange.emit(this.selectedFilters);
    };
    ListFiltersComponent.prototype.reset = function () {
        this.selectedFilters.forEach(function (f) { return f.toggle(); });
        this.selectedFilters = [];
        this.filterChange.emit(this.selectedFilters);
    };
    return ListFiltersComponent;
}());



/***/ }),

/***/ "./src/app/user/current-user-module-groups.resolve.ts":
/*!************************************************************!*\
  !*** ./src/app/user/current-user-module-groups.resolve.ts ***!
  \************************************************************/
/*! exports provided: CurrentUserModuleGroupsResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserModuleGroupsResolve", function() { return CurrentUserModuleGroupsResolve; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var CurrentUserModuleGroupsResolve = /** @class */ (function () {
    function CurrentUserModuleGroupsResolve(userService) {
        this.userService = userService;
    }
    CurrentUserModuleGroupsResolve.prototype.resolve = function (route) {
        var moduleId = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["findParam"])('moduleId', route);
        return this.userService.getCurrentUserGroupsByModule(moduleId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["toArray"])()).toPromise();
    };
    CurrentUserModuleGroupsResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function CurrentUserModuleGroupsResolve_Factory() { return new CurrentUserModuleGroupsResolve(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); }, token: CurrentUserModuleGroupsResolve, providedIn: "root" });
    return CurrentUserModuleGroupsResolve;
}());



/***/ }),

/***/ "./src/app/user/current-user.resolve.ts":
/*!**********************************************!*\
  !*** ./src/app/user/current-user.resolve.ts ***!
  \**********************************************/
/*! exports provided: CurrentUserResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserResolve", function() { return CurrentUserResolve; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CurrentUserResolve = /** @class */ (function () {
    function CurrentUserResolve(userService) {
        this.userService = userService;
    }
    CurrentUserResolve.prototype.resolve = function (route) {
        var query = new _utils__WEBPACK_IMPORTED_MODULE_1__["RESTQuery"]();
        if (this.userService.currentRoles.includes('Student')) {
            query.populate = 'photo,groupId,userRole,acadCareer,matricYear,programme';
        }
        return this.userService.getUserProfile(query).then(function (profile) {
            return Promise.resolve(profile);
        });
    };
    CurrentUserResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function CurrentUserResolve_Factory() { return new CurrentUserResolve(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"])); }, token: CurrentUserResolve, providedIn: "root" });
    return CurrentUserResolve;
}());



/***/ })

}]);