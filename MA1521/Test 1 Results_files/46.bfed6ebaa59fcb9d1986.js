(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./src/app/course-module-list/course-module-list.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/course-module-list/course-module-list.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_CourseModuleListComponent, View_CourseModuleListComponent_0, View_CourseModuleListComponent_Host_0, CourseModuleListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CourseModuleListComponent", function() { return RenderType_CourseModuleListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleListComponent_0", function() { return View_CourseModuleListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleListComponent_Host_0", function() { return View_CourseModuleListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleListComponentNgFactory", function() { return CourseModuleListComponentNgFactory; });
/* harmony import */ var _course_module_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-module-list.component.scss.shim.ngstyle */ "./src/app/course-module-list/course-module-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/publish-status.component.ngfactory */ "./src/app/shared/publish-status.component.ngfactory.js");
/* harmony import */ var _shared_publish_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/publish-status.component */ "./src/app/shared/publish-status.component.ts");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/tooltip.directive */ "./src/app/shared/tooltip.directive.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/spinner.component.ngfactory */ "./src/app/shared/spinner.component.ngfactory.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _course_module_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./course-module-list.component */ "./src/app/course-module-list/course-module-list.component.ts");
/* harmony import */ var _my_modules_my_modules_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../my-modules/my-modules.page */ "./src/app/my-modules/my-modules.page.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _lti_lti_content_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lti/lti-content.service */ "./src/app/lti/lti-content.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_CourseModuleListComponent = [_course_module_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CourseModuleListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CourseModuleListComponent, data: {} });

function View_CourseModuleListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "a", [["class", "module-card create-course"], ["routerLink", "new-module"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Create Module"]))], function (_ck, _v) { var currVal_2 = "new-module"; _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_CourseModuleListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "publish-status", [], [[8, "className", 0]], null, null, _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PublishStatusIndicatorComponent_0"], _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PublishStatusIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_publish_status_component__WEBPACK_IMPORTED_MODULE_5__["PublishStatusIndicatorComponent"], [], { resource: [0, "resource"], customValidator: [1, "customValidator"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.parent.parent.context.$implicit; var currVal_2 = _co.publishValidator; _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).size; _ck(_v, 0, 0, currVal_0); }); }
function View_CourseModuleListComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "publish-status", [["explain", "This module has not been created or published yet."], ["icon", "help"]], [[8, "className", 0]], null, null, _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PublishStatusIndicatorComponent_0"], _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PublishStatusIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_publish_status_component__WEBPACK_IMPORTED_MODULE_5__["PublishStatusIndicatorComponent"], [], { resource: [0, "resource"], icon: [1, "icon"], explain: [2, "explain"] }, null)], function (_ck, _v) { var currVal_1 = _v.parent.parent.context.$implicit; var currVal_2 = "help"; var currVal_3 = "This module has not been created or published yet."; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).size; _ck(_v, 0, 0, currVal_0); }); }
function View_CourseModuleListComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "publish-status", [["explain", "The module coordinator has extended your access to this module."], ["icon", "help"]], [[8, "className", 0]], null, null, _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PublishStatusIndicatorComponent_0"], _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PublishStatusIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_publish_status_component__WEBPACK_IMPORTED_MODULE_5__["PublishStatusIndicatorComponent"], [], { resource: [0, "resource"], icon: [1, "icon"], explain: [2, "explain"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "isPublished": 0 })], function (_ck, _v) { var currVal_1 = _ck(_v, 2, 0, !_v.parent.parent.context.$implicit.isModuleExtended); var currVal_2 = "help"; var currVal_3 = "The module coordinator has extended your access to this module."; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).size; _ck(_v, 0, 0, currVal_0); }); }
function View_CourseModuleListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.parent.context.$implicit.isModuleExist && !_co.isEnrolledModules); _ck(_v, 2, 0, currVal_0); var currVal_1 = !_v.parent.context.$implicit.isModuleExist; _ck(_v, 4, 0, currVal_1); var currVal_2 = (_v.parent.context.$implicit.isModuleExist && _co.isEnrolledModules); _ck(_v, 6, 0, currVal_2); }, null); }
function View_CourseModuleListComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "publish-status", [["explain", "This module listing shows that you are enrolled to this module either in the past or present."], ["icon", "help"]], [[8, "className", 0]], null, null, _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PublishStatusIndicatorComponent_0"], _shared_publish_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PublishStatusIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _shared_publish_status_component__WEBPACK_IMPORTED_MODULE_5__["PublishStatusIndicatorComponent"], [], { resource: [0, "resource"], icon: [1, "icon"], explain: [2, "explain"] }, null)], function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit; var currVal_2 = "help"; var currVal_3 = "This module listing shows that you are enrolled to this module either in the past or present."; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).size; _ck(_v, 1, 0, currVal_0); }); }
function View_CourseModuleListComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "icon", [["name", "pin"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = "pin"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CourseModuleListComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.note; _ck(_v, 1, 0, currVal_0); }); }
function View_CourseModuleListComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["[", "] ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.termDetail.term; var currVal_1 = _v.parent.parent.context.$implicit.termDetail.description; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleListComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.acadYear; var currVal_1 = _v.parent.parent.context.$implicit.semester; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleListComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.creatorName; _ck(_v, 1, 0, currVal_0); }); }
function View_CourseModuleListComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!!_v.parent.context.$implicit.note && _co.isNonAcademicModules); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((!!_v.parent.context.$implicit.termDetail && !_v.parent.context.$implicit.isCorporateCourse) && !_co.isNonAcademicModules); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((((!_v.parent.context.$implicit.termDetail && !!_v.parent.context.$implicit.acadYear) && !!_v.parent.context.$implicit.semester) && !_v.parent.context.$implicit.isCorporateCourse) && !_co.isNonAcademicModules); _ck(_v, 6, 0, currVal_2); var currVal_3 = !_co.isNonAcademicModules; _ck(_v, 8, 0, currVal_3); }, null); }
function View_CourseModuleListComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["[", "] ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.term; var currVal_1 = _v.parent.parent.context.$implicit.termDescription; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleListComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Modular Credit: ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.modularCredit; _ck(_v, 1, 0, currVal_0); }); }
function View_CourseModuleListComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = !!_v.parent.context.$implicit.term; _ck(_v, 2, 0, currVal_0); var currVal_1 = !!_v.parent.context.$implicit.modularCredit; _ck(_v, 4, 0, currVal_1); }, null); }
function View_CourseModuleListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "a", [["class", "module-card"]], [[2, "past-module", null], [1, "target", 0], [8, "href", 4]], [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseEnter($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseout" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onMouseLeave($event) !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.onSelectModule(_v.context.$implicit, $event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_10__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 13, "div", [["class", "module-card-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "span", [["class", "module-code"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "abbr", [], [[8, "title", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "div", [["class", "fade-out"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "span", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = ((_v.context.$implicit.isModuleExist && _v.context.$implicit.id) || "./"); _ck(_v, 1, 0, currVal_3); var currVal_4 = ((_v.context.$implicit.isModuleExist && "selected") || ""); _ck(_v, 2, 0, currVal_4); var currVal_5 = _co.tooltipText(_v.context.$implicit); _ck(_v, 5, 0, currVal_5); var currVal_6 = !_co.isExpiredModule; _ck(_v, 7, 0, currVal_6); var currVal_7 = _co.isExpiredModule; _ck(_v, 9, 0, currVal_7); var currVal_10 = (_co.isNonAcademicModules && (((((_v.context.$implicit.name === "RC1000A") || (_v.context.$implicit.name === "SE1000")) || (_v.context.$implicit.name === "OSHGEN02")) || (_v.context.$implicit.name === "RC1000B")) || (_v.context.$implicit.name === "UHCMH01"))); _ck(_v, 15, 0, currVal_10); var currVal_12 = !_co.isExpiredModule; _ck(_v, 21, 0, currVal_12); var currVal_13 = _co.isExpiredModule; _ck(_v, 23, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isExpiredModule; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, ""); _ck(_v, 12, 0, currVal_8); var currVal_9 = _v.context.$implicit.name; _ck(_v, 13, 0, currVal_9); var currVal_11 = _v.context.$implicit.courseName; _ck(_v, 17, 0, currVal_11); }); }
function View_CourseModuleListComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["style", "margin-top: 10px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "a", [["routerLink", "new-module"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["create"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0one."]))], function (_ck, _v) { var currVal_2 = "new-module"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_0, currVal_1); }); }
function View_CourseModuleListComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "article", [["class", "no-modules"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["There are no modules."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isStaff && _co.showCreateCourseLink); _ck(_v, 4, 0, currVal_0); }, null); }
function View_CourseModuleListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "modules"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.showCreateCourseLink; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.modules; var currVal_3 = _co.trackById; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = (!_co.courseModules.length && !_co.showExternalModules); _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 0, 0, currVal_0); }); }
function View_CourseModuleListComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "a", [["class", "module-card no-padding"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "div", [["class", "module-card-content edx-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "edx-img-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [["target", "_blank"], ["tooltip", "By clicking on this course, you will begin the course in the audit track."]], [[8, "href", 4]], [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.logHit(_v.context.$implicit.uuid) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_10__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["class", "edx-module-image"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "i", [["class", "fa fa-minus-circle remove-edx"], ["tooltip", "Remove from Dashboard. Please note this only removes the course from LumiNUS. To unenroll from the course, please login to edX course and click on Settings > Unenroll."]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.removeEdx(_v.context.$implicit.uuid) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_10__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "span", [["class", "module-code card-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h4", [["class", "edx-title"]], [[8, "title", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "span", [["class", "details card-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""]))], function (_ck, _v) { var currVal_1 = "By clicking on this course, you will begin the course in the audit track."; _ck(_v, 4, 0, currVal_1); var currVal_3 = "Remove from Dashboard. Please note this only removes the course from LumiNUS. To unenroll from the course, please login to edX course and click on Settings > Unenroll."; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.enrollmentUrl; _ck(_v, 3, 0, currVal_0); var currVal_2 = "assets/img/edx-course.png"; _ck(_v, 5, 0, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.title, ""); _ck(_v, 9, 0, currVal_4); var currVal_5 = _v.context.$implicit.title; _ck(_v, 10, 0, currVal_5); var currVal_6 = _v.context.$implicit.courseKey; _ck(_v, 14, 0, currVal_6); }); }
function View_CourseModuleListComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "edx-enrol-msg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [["class", "edx-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["National University of Singapore has partnered with edX to offer you access to more than 2000 edX courses in a variety of subjects. You may choose to take edX courses for your own personal and professional development. For students, your instructor may curate edX courses as part of the module\u2019s learning materials. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "p", [["class", "edx-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["When you enroll into an edX course from LumiNUS, you will begin in the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["free audit track"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" with temporary access to course materials except graded assignments. You may choose to upgrade later to the "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["paid verified track"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" if you wish to earn a certificate. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Note: Some courses do not have audit tracks and course contents are behind the paywall"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 7, "div", [["class", "inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "bg-orange"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["class", "fa fa-info-circle color-warn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "p", [["class", "alert alert-warning margin-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Courses listed below are shortlisted courses that you have added from the edX search modules and are not an indication of your enrolled edX courses. To check on your enrolled courses (if any), "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "a", [["href", "https://courses.edx.org/dashboard?tpa_hint=saml-nus-prod"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["login "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" to edX Dashboard. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 9, "div", [["class", "modules"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "a", [["class", "module-card create-course search-course"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](27, { module: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "span", [["class", "search-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-search edx-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search edX Modules"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 27, 0, "E"); var currVal_5 = "../module-search"; _ck(_v, 26, 0, currVal_4, currVal_5); var currVal_6 = _co.externalModules; _ck(_v, 33, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.isLoading; _ck(_v, 24, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).href; _ck(_v, 25, 0, currVal_2, currVal_3); }); }
function View_CourseModuleListComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleListComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " ("])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["). "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.lecturerName; _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "mailTo:", _v.parent.context.$implicit.lecturerEmail, ""); _ck(_v, 2, 0, currVal_1); var currVal_2 = _v.parent.context.$implicit.lecturerEmail; _ck(_v, 3, 0, currVal_2); }); }
function View_CourseModuleListComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.lecturerName; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CourseModuleListComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This module has not been created or published in LumiNUS yet. Please contact your module "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.classLecturer; _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.classLecturer.length <= 1) ? "coordinator" : "coordinators"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (!_co.classLecturer.length ? "." : ":"); _ck(_v, 4, 0, currVal_1); }); }
function View_CourseModuleListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { contentEl: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleListComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2], ["content", 2]], null, 0, null, View_CourseModuleListComponent_23))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.showExternalModules; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.showExternalModules; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.isLoading; _ck(_v, 6, 0, currVal_2); }, null); }
function View_CourseModuleListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "course-module-list", [], null, null, null, View_CourseModuleListComponent_0, RenderType_CourseModuleListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_13__["CourseModuleService"], _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_13__["CourseModuleService"], [_user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], "AppEnvironment"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _course_module_list_component__WEBPACK_IMPORTED_MODULE_16__["CourseModuleListComponent"], [_my_modules_my_modules_page__WEBPACK_IMPORTED_MODULE_17__["SearchSubject"], _user_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_18__["SnackBarService"], _lti_lti_content_service__WEBPACK_IMPORTED_MODULE_19__["LtiContentService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_20__["ErrorHandlerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var CourseModuleListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("course-module-list", _course_module_list_component__WEBPACK_IMPORTED_MODULE_16__["CourseModuleListComponent"], View_CourseModuleListComponent_Host_0, { courseModules: "courseModules", isLoading: "isLoading", selectedCourseModule: "selectedCourseModule", showCreateCourseLink: "showCreateCourseLink", selectedModuleType: "selectedModuleType", showExternalModules: "showExternalModules", externalModules: "externalModules" }, { onSelect: "onSelect" }, []);



/***/ }),

/***/ "./src/app/course-module-list/course-module-list.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/course-module-list/course-module-list.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
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
var styles = ["a.module-card[_ngcontent-%COMP%] {\n  display: block;\n  color: #222222;\n  font-size: 14px;\n  background: white;\n  position: relative;\n  overflow: hidden; }\na.module-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 18px;\n    max-width: 100%;\n    max-height: 45%;\n    margin-top: 0;\n    overflow: hidden; }\na.module-card[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 400;\n    font-size: 14px;\n    color: #909090;\n    cursor: pointer;\n    max-width: 100%;\n    display: flex;\n    align-items: center; }\na.module-card[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n      width: 20px;\n      margin-left: 5px;\n      height: 1em; }\na.module-card[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%]     .icon-fill {\n        fill: #909090 !important; }\na.module-card[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%]     .icon-stroke {\n        stroke: #909090 !important; }\na.module-card[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%]   publish-status[_ngcontent-%COMP%]     .icon-fill {\n      fill: white !important; }\na.module-card[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%]   publish-status[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: white !important; }\n@media (max-width: 499px) {\n  a.module-card[_ngcontent-%COMP%] {\n    padding: 4.16666667vw;\n    margin: 2.08333333vw;\n    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.21);\n    border-radius: 3px;\n    max-width: 100%; }\n    a.module-card[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n      display: none; }\n    a.module-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 3px 0; }\n    a.module-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n      color: #909090; }\n    a.module-card.create-course[_ngcontent-%COMP%] {\n      color: #002970;\n      background: transparent;\n      box-shadow: none;\n      padding: 2.08333333vw 4.16666667vw; } }\n@media (min-width: 500px) {\n  a.module-card[_ngcontent-%COMP%] {\n    cursor: pointer;\n    margin-right: 1em;\n    margin-bottom: 2.08333333vw;\n    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.21);\n    border-radius: 3px;\n    position: relative;\n    padding: 18px 16px;\n    padding-bottom: 10px;\n    height: 180px;\n    transition: border-bottom-color 0.2s linear;\n    border-bottom: solid 14px white;\n    width: 280px;\n    margin-right: 16px;\n    float: left; }\n    a.module-card[_ngcontent-%COMP%]:hover {\n      text-decoration: none;\n      background-color: #fcfcfc;\n      border-bottom-color: #ffe393; }\n    a.module-card[_ngcontent-%COMP%]:focus, a.module-card[_ngcontent-%COMP%]:active {\n      text-decoration: none; }\n    a.module-card[_ngcontent-%COMP%]:active {\n      background-color: #cccccc;\n      box-shadow: none; }\n      a.module-card[_ngcontent-%COMP%]:active   .fade-out[_ngcontent-%COMP%] {\n        background-image: linear-gradient(rgba(204, 204, 204, 0), #cccccc 35%); }\n    a.module-card.selected[_ngcontent-%COMP%] {\n      border-bottom-color: #efb200; }\n    a.module-card.selected[_ngcontent-%COMP%]:hover {\n      border-bottom-color: #d69f00; }\n    a.module-card[_ngcontent-%COMP%]   div.module-card-content[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      position: relative; }\n    a.module-card[_ngcontent-%COMP%]   .module-code[_ngcontent-%COMP%] {\n      display: flex;\n      border-bottom: 0;\n      margin-bottom: 6px;\n      max-width: 100%; }\n      a.module-card[_ngcontent-%COMP%]   .module-code[_ngcontent-%COMP%]   abbr[_ngcontent-%COMP%] {\n        flex-grow: 1; }\n    a.module-card[_ngcontent-%COMP%]   .fade-out[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 70px;\n      bottom: 0px;\n      left: 0px;\n      right: 0px;\n      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 35%); }\n    a.module-card[_ngcontent-%COMP%]   .edXcontent[_ngcontent-%COMP%] {\n      top: 114px; }\n    a.module-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n      font-weight: 400;\n      color: #909090;\n      font-size: 11px;\n      max-width: 100%;\n      position: absolute;\n      bottom: 0;\n      left: 0; }\n      a.module-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 1px; }\n    a.module-card.create-course[_ngcontent-%COMP%] {\n      background: transparent;\n      border: dashed 2px #aaa9a9;\n      box-shadow: none; }\n      a.module-card.create-course[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: block;\n        text-align: center;\n        color: #909090;\n        line-height: 1em; }\n      a.module-card.create-course[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n        font-size: 90px; }\n      a.module-card.create-course[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n        font-size: 16px; }\n      a.module-card.create-course[_ngcontent-%COMP%]:hover {\n        background: rgba(255, 255, 255, 0.25); }\n      a.module-card.create-course[_ngcontent-%COMP%]:active {\n        background: rgba(0, 0, 0, 0.05); }\n    a.module-card.past-module[_ngcontent-%COMP%] {\n      pointer-events: none;\n      transition: none !important;\n      cursor: default; }\n      a.module-card.past-module[_ngcontent-%COMP%]   publish-status[_ngcontent-%COMP%] {\n        pointer-events: all;\n        cursor: default; }\n      a.module-card.past-module[_ngcontent-%COMP%]:active, a.module-card.past-module[_ngcontent-%COMP%]:hover {\n        box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.21);\n        text-decoration: none;\n        background-color: #ffffff;\n        border-bottom-color: #ffffff; }\n        a.module-card.past-module[_ngcontent-%COMP%]:active   .fade-out[_ngcontent-%COMP%], a.module-card.past-module[_ngcontent-%COMP%]:hover   .fade-out[_ngcontent-%COMP%] {\n          background-image: unset; }\n  .spinner-wrapper[_ngcontent-%COMP%] {\n    position: relative; }\n    .spinner-wrapper[_ngcontent-%COMP%]   spinner[_ngcontent-%COMP%] {\n      position: absolute;\n      display: block;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%); }\n  .modules[_ngcontent-%COMP%] {\n    padding: 0 4.16666667vw 2.08333333vw 4.16666667vw;\n    overflow: hidden; }\n  article.no-modules[_ngcontent-%COMP%] {\n    height: 180px;\n    text-align: left;\n    line-height: 180px;\n    margin: 4.16666667vw auto; }\n    article.no-modules[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      color: #909090;\n      font-size: 24px;\n      margin-bottom: 50px;\n      text-align: center; }\n      article.no-modules[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #909090;\n        text-decoration: underline; } }\n@media (max-width: 767px) {\n  .modules[_ngcontent-%COMP%], .spinner-wrapper[_ngcontent-%COMP%] {\n    min-height: 100vh; } }\n@media (min-width: 500px) and (max-width: 750px) {\n  a.module-card[_ngcontent-%COMP%] {\n    width: 49%;\n    margin-right: 2%; }\n    a.module-card[_ngcontent-%COMP%]:nth-child(2n+2) {\n      margin-right: 0; } }\n@media (min-width: 751px) and (max-width: 1000px) {\n  a.module-card[_ngcontent-%COMP%] {\n    width: 32%;\n    margin-right: 2%;\n    margin-bottom: 2.08333333vw; }\n    a.module-card[_ngcontent-%COMP%]:nth-child(3n+3) {\n      margin-right: 0; } }\n@media (min-width: 1001px) and (max-width: 1199px) {\n  a.module-card[_ngcontent-%COMP%] {\n    width: 23.5%;\n    margin-right: 2%;\n    margin-bottom: 2.08333333vw; }\n    a.module-card[_ngcontent-%COMP%]:nth-child(4n+4) {\n      margin-right: 0; } }\n@media (min-width: 1200px) {\n  a.module-card[_ngcontent-%COMP%] {\n    width: 18.4%;\n    margin-right: 2%;\n    margin-bottom: 2.08333333vw; }\n    a.module-card[_ngcontent-%COMP%]:nth-child(5n+5) {\n      margin-right: 0; } }\n.edx-enrol-msg[_ngcontent-%COMP%] {\n  padding: 0 4.16666667vw 2.08333333vw 4.16666667vw; }\n.edx-module-image[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%; }\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  height: 285px !important; }\n.card-desc[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-left: 3%; }\n.edx-info[_ngcontent-%COMP%] {\n  color: #464040; }\n.edx-info-payment[_ngcontent-%COMP%] {\n  color: #ce5252; }\n.edx-search[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n  font-size: 49px !important; }\n.remove-edx[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  margin: 6px;\n  color: #2F79B9 !important; }\n.edx-content[_ngcontent-%COMP%] {\n  cursor: auto !important; }\n.edx-title[_ngcontent-%COMP%] {\n  font-size: 1.1em !important;\n  -webkit-line-clamp: 2;\n  display: -webkit-box; }\n.search-course[_ngcontent-%COMP%] {\n  height: 285px !important; }\n.edx-img-wrapper[_ngcontent-%COMP%] {\n  max-height: 70%;\n  width: 100%; }\n.search-icon[_ngcontent-%COMP%] {\n  margin-top: 22px; }\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: orange;\n  padding: 15px;\n  margin-bottom: 20px; }\n.inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0 4.16666667vw 2.08333333vw 4.16666667vw; }\n.color-warn[_ngcontent-%COMP%] {\n  color: #faebcc; }"];



/***/ }),

/***/ "./src/app/course-module-list/course-module-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/course-module-list/course-module-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CourseModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleListComponent", function() { return CourseModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _lti_lti_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lti/lti-content.service */ "./src/app/lti/lti-content.service.ts");
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
/* harmony import */ var _my_modules_my_modules_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-modules/my-modules.page */ "./src/app/my-modules/my-modules.page.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);









var CourseModuleListComponent = /** @class */ (function () {
    function CourseModuleListComponent(searchSubject, userService, snackBarService, ltiContentService, errorHandlerService, cdRef) {
        var _this = this;
        this.searchSubject = searchSubject;
        this.userService = userService;
        this.snackBarService = snackBarService;
        this.ltiContentService = ltiContentService;
        this.errorHandlerService = errorHandlerService;
        this.cdRef = cdRef;
        this.courseModules = [];
        this.isLoading = true;
        this.showCreateCourseLink = false;
        this.externalModules = [];
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.publishValidator = function (resource) {
            if (!resource.publish) {
                if (resource.startDate && moment__WEBPACK_IMPORTED_MODULE_1__().isBefore(resource.startDate)) {
                    return "This module is not open yet and not published therefore not visible to students.";
                }
                else if (resource.endDate && moment__WEBPACK_IMPORTED_MODULE_1__().isAfter(resource.endDate)) {
                    return "This module is closed and not published therefore not visible to students.";
                }
                else {
                    return "This module is not published and not visible to students.";
                }
            }
            else if (resource.startDate && moment__WEBPACK_IMPORTED_MODULE_1__().isBefore(resource.startDate)) {
                return "This module is not open yet and not visible to students";
            }
            else if (resource.endDate && moment__WEBPACK_IMPORTED_MODULE_1__().isAfter(resource.endDate)) {
                return "This module is closed and not visible to students";
            }
            return null;
        };
        this.searchSubject.subscribe(function (s) {
            _this.searchKeyword = s;
            _this.setModules(_this.courseModules);
        });
    }
    Object.defineProperty(CourseModuleListComponent.prototype, "isStaff", {
        get: function () {
            return (this.currentUser &&
                this.currentUser.userRoles &&
                this.currentUser.userRoles.includes('Staff'));
        },
        enumerable: true,
        configurable: true
    });
    CourseModuleListComponent.prototype.tooltipText = function (courseModule) {
        if (courseModule.isMandatory || courseModule.isCorporateCourse) {
            return courseModule.isMandatory
                ? 'Non-Academic Module (Auto-enrolment)'
                : 'Non-Academic Module (Self-enrolment)';
        }
        else {
            return '';
        }
    };
    CourseModuleListComponent.prototype.setModules = function (modules) {
        if (this.searchKeyword) {
            var r_1 = this.searchKeyword && new RegExp(this.searchKeyword, 'i');
            this.modules = this.courseModules.filter(function (c) { return r_1.test(c.courseName) || r_1.test(c.name); });
        }
        else {
            this.modules = this.courseModules;
        }
        this.cdRef.detectChanges();
    };
    CourseModuleListComponent.prototype.ngOnInit = function () {
        this.currentUser = this.userService.getCurrentUser().profile;
        this.setModules(this.courseModules);
    };
    CourseModuleListComponent.prototype.ngOnChanges = function (changes) {
        this.isExpiredModule = this.selectedModuleType === _my_modules_my_modules_page__WEBPACK_IMPORTED_MODULE_5__["ModuleType"].Taken;
        this.isEnrolledModules = this.selectedModuleType === _my_modules_my_modules_page__WEBPACK_IMPORTED_MODULE_5__["ModuleType"].Enrolled;
        this.isNonAcademicModules =
            this.selectedModuleType === _my_modules_my_modules_page__WEBPACK_IMPORTED_MODULE_5__["ModuleType"].nonAcademic;
        this.edXModules = this.externalModules && this.externalModules.length === 0;
        if (changes['courseModules']) {
            this.setModules(this.courseModules);
        }
    };
    CourseModuleListComponent.prototype.onSelectModule = function (courseModule, event) {
        if (event.ctrlKey || event.metaKey) {
            return true;
        }
        if (this.isExpiredModule) {
            return false;
        }
        if (!courseModule.isModuleExist) {
            this.classLecturer = underscore__WEBPACK_IMPORTED_MODULE_8__["uniq"](underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](underscore__WEBPACK_IMPORTED_MODULE_8__["map"](courseModule['classLecturer'], function (lecturer) {
                return { lecturerName: lecturer['lecturerName'], lecturerEmail: lecturer['lecturerEmail'] };
            }), function (lecturer) { return lecturer['lecturerName']; }), function (lecturer) {
                return lecturer['lecturerEmail'];
            });
            this.snackBarService.openFromTemplate(this.contentEl);
            return false;
        }
        this.onSelect.emit(courseModule.id);
        return true;
    };
    CourseModuleListComponent.prototype.isModuleExtended = function (module) {
        return (!!module.termDetail && moment__WEBPACK_IMPORTED_MODULE_1__().isAfter(module.termDetail.termEndDate));
    };
    CourseModuleListComponent.prototype.logHit = function (uuid) {
        var _this = this;
        this.ltiContentService
            .logEnrolled(uuid)
            .subscribe(function () { }, function (err) { return _this.errorHandlerService.handle(err); });
    };
    CourseModuleListComponent.prototype.removeEdx = function (uuid) {
        var _this = this;
        this.ltiContentService.removeedXCourse(uuid).subscribe(function () {
            _this.snackBarService.pop('Course removed successfully.', 'success');
        }, function (err) { return _this.errorHandlerService.handle(err); });
    };
    return CourseModuleListComponent;
}());



/***/ }),

/***/ "./src/app/course-module-list/course-module-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/course-module-list/course-module-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: CourseModuleListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleListModule", function() { return CourseModuleListModule; });
var CourseModuleListModule = /** @class */ (function () {
    function CourseModuleListModule() {
    }
    return CourseModuleListModule;
}());



/***/ }),

/***/ "./src/app/course-module-view/course-module-view.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/course-module-view/course-module-view.page.ts ***!
  \***************************************************************/
/*! exports provided: CourseModuleViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleViewPage", function() { return CourseModuleViewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/confirm.service */ "./src/app/core/confirm.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_page_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/page-base */ "./src/app/core/page-base.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _core_semester_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/semester.service */ "./src/app/core/semester.service.ts");
/* harmony import */ var _course_module_overview_course_module_overview_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../course-module-overview/course-module-overview.page */ "./src/app/course-module-overview/course-module-overview.page.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _lti_lti_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lti/lti-app.service */ "./src/app/lti/lti-app.service.ts");
/* harmony import */ var _manager_manager_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../manager/manager.service */ "./src/app/manager/manager.service.ts");
/* harmony import */ var _my_modules_my_modules_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../my-modules/my-modules.service */ "./src/app/my-modules/my-modules.service.ts");
/* harmony import */ var _quiz_quiz_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../quiz/quiz.service */ "./src/app/quiz/quiz.service.ts");
/* harmony import */ var _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/nav-pills.component */ "./src/app/shared/nav-pills.component.ts");
/* harmony import */ var _shared_semester_feedback_prompt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/semester-feedback-prompt.component */ "./src/app/shared/semester-feedback-prompt.component.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../testing */ "./src/app/testing/index.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _group_group_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../group/group.service */ "./src/app/group/group.service.ts");
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























var STUDENT_READ_ONLY_TOOLS = ['Attendance', 'Settings'];
var CourseModuleViewPage = /** @class */ (function (_super) {
    __extends(CourseModuleViewPage, _super);
    function CourseModuleViewPage(userService, route, routeSpinnerService, router, courseModuleService, confirmService, errorHandlerService, cdRef, semesterService, ltiAppService, snackBarService, myModulesService, managerService, quizService, groupService) {
        var _this = _super.call(this, userService) || this;
        _this.route = route;
        _this.routeSpinnerService = routeSpinnerService;
        _this.router = router;
        _this.courseModuleService = courseModuleService;
        _this.confirmService = confirmService;
        _this.errorHandlerService = errorHandlerService;
        _this.cdRef = cdRef;
        _this.semesterService = semesterService;
        _this.ltiAppService = ltiAppService;
        _this.snackBarService = snackBarService;
        _this.myModulesService = myModulesService;
        _this.managerService = managerService;
        _this.quizService = quizService;
        _this.groupService = groupService;
        _this.generalToolsBackup = [];
        _this.menuToolsBackup = [];
        _this.otherToolsBackup = [];
        _this.generalTools = [];
        _this.menuTools = [];
        _this.otherTools = [];
        _this.isFeatureTryOut = false;
        _this.isLoading = false;
        _this.isLoadingDetails = false;
        _this.isLtiAvaliable = false;
        _this.isEditingTools = false;
        _this.isEditingGeneral = false;
        _this.isEditingOthers = false;
        _this.isLearningFlow = false;
        _this.isStatistics = false;
        _this.canEdit = false;
        _this.isQuizPage = false;
        _this.moment = moment__WEBPACK_IMPORTED_MODULE_2__;
        return _this;
    }
    Object.defineProperty(CourseModuleViewPage.prototype, "isEditing", {
        // TODO: refactor out
        get: function () {
            return this.isEditingTools || this.isEditingGeneral;
        },
        set: function (val) {
            this.isEditingTools = val;
            this.isEditingGeneral = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseModuleViewPage.prototype, "isOthersHidden", {
        // TODO: refactor out
        get: function () {
            if (this.courseModule.isStudent) {
                return (this.courseModule.hiddenMenu &&
                    ((this.courseModule.hiddenMenu.includes('edX Contents') &&
                        this.courseModule.hiddenMenu.includes('External Tools')) ||
                        (this.externalTools && !this.externalTools.length) || !this.externalTools));
            }
            else {
                return this.isEditingOthers;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseModuleViewPage.prototype, "isToolsHidden", {
        get: function () {
            var _this = this;
            var toolMenu = [
                'Announcement',
                'Chat Room',
                'Conferencing',
                'Consultation',
                'Files',
                'Forum',
                'Gradebook',
                'Multimedia',
                'Poll',
                'Quiz',
                'Survey',
                'SCORM',
                'Web Lectures',
                'Attendance',
            ];
            if (this.courseModule.isStudent && this.courseModule.hiddenMenu) {
                return toolMenu.every(function (menu) {
                    return _this.courseModule.hiddenMenu.includes(menu);
                });
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CourseModuleViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.spinnerSub = this.routeSpinnerService.status.subscribe(function (a) {
            _this.isLoadingDetails = a['courseModuleView'];
            _this.cdRef.detectChanges();
        });
        this.route.data.subscribe(function (data) {
            if (data.courseModule.isStudent && data.courseModule.inRoster === ''
                && (!data.courseModule.isCorporateCourse && !data.courseModule.isMandatory)) {
                _this.confirmService.confirm('It seems that you are not in the Student and Guest Rosters, but you are still in the module\'s class group(s). Do you want to remove yourself from the module?')
                    .then(function (yes) {
                    if (yes) {
                        _this.groupService.deleteUserFromClassGroup(_this.courseModule.id).subscribe(function () {
                            _this.courseModuleService.onResourceDeleted.emit(_this.courseModule.id);
                            _this.snackBarService.pop('You are successfully removed from the module.', 'success');
                            _this.router.navigate(['/modules']);
                        }, function (err) {
                            _this.errorHandlerService.handle(err);
                        });
                    }
                }, function (err) {
                    _this.errorHandlerService.handle(err);
                });
            }
            _this.courseModule = data.courseModule;
            _this.isFeatureTryOut = _this.userService.getCurrentUser() && _this.userService.getCurrentUser().profile &&
                _this.userService.getCurrentUser().profile.userRoles &&
                _this.userService.getCurrentUser().profile.userRoles.includes('FeatureTryOut');
            _this.myModulesService.setCourseModule(_this.courseModule);
            _this.courseModuleTools = data.courseModuleTools;
            _this.isLoading = false;
            _this.routeSpinnerService.stop('courseModuleView');
            _this.routeSpinnerService.stop('courseModuleRoot');
            _this.canEdit = _this.courseModule.access.accessSettingsUpdate;
            var ltiIndex = _this.courseModuleTools.findIndex(function (t) { return t.name === 'LTI'; });
            if (ltiIndex > -1) {
                _this.courseModuleTools.splice(ltiIndex, 1);
                _this.isLtiAvaliable = true;
            }
            else {
                _this.isLtiAvaliable = false;
            }
            if (_this.canEdit || _this.courseModule.isReadManager) {
                (_this.courseModule.hiddenMenu || []).forEach(function (s) {
                    var tool = _this.courseModuleTools.find(function (t) { return t.id === s; });
                    if (tool) {
                        tool.disabled = true;
                    }
                });
                STUDENT_READ_ONLY_TOOLS.forEach(function (n) {
                    var tool = _this.courseModuleTools.find(function (t) { return t.name === n; });
                    if (tool) {
                        tool.disabled = true;
                    }
                });
            }
            _this.isLearningFlow = _this.router.url.includes('/lessons/');
            _this.isStatistics = _this.router.url.includes("/" + _this.courseModule.id + "/statistics");
            _this.router.events.subscribe(function (e) {
                if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                    _this.isLearningFlow = e.url.includes('/lessons/');
                    _this.isStatistics = e.url.includes("/" + _this.courseModule.id + "/statistics");
                }
            });
            _this.myModulesService.onModuleCode.subscribe(function (courseModule) {
                _this.courseModule.name = courseModule.name;
            });
            _this.externalTools = underscore__WEBPACK_IMPORTED_MODULE_4__["sortBy"]((data.ltiApps || []).map(function (l) { return l.toCourseModuleTool(); }), 'name');
            _this.filterCourseModuleTools();
            // if ...
            // 1) we're on the module overview page
            // 2) the user is a owner/manager,
            // 3) the semester has ended or is ending soon and
            // 4) the user hasn't declared a feedback channel for end-of-semester feedback
            // display a snackbar prompt
            if (_this.route.firstChild &&
                _this.route.firstChild.firstChild &&
                _this.route.firstChild.firstChild.component === _course_module_overview_course_module_overview_page__WEBPACK_IMPORTED_MODULE_10__["CourseModuleOverviewPage"] &&
                _this.route.firstChild.firstChild.firstChild.component ===
                    _testing__WEBPACK_IMPORTED_MODULE_19__["EmptyComponent"] &&
                (_this.courseModule.isManager || _this.courseModule.isOwner) &&
                !(_this.courseModule.feedbackSender || []).some(function (s) { return s.creatorID === _this.currentUser.id; })) {
                _this.queryFeedbackPrompt();
            }
        });
        this.initEventListener();
        this.quizService.isQuizPrevieworAttemptPage.subscribe(function (val) {
            _this.isQuizPage = val;
        });
        this.isQuizPage =
            this.router.url.indexOf('quiz') > -1 && (this.router.url.indexOf('preview') > -1 ||
                this.router.url.indexOf('attempt') > -1);
    };
    CourseModuleViewPage.prototype.ngAfterViewInit = function () {
    };
    CourseModuleViewPage.prototype.hideClassGroups = function () {
        var classTool = this.courseModuleTools.find(function (t) { return t.name === 'Class & Groups'; });
        if (classTool) {
            classTool.disabled =
                (this.courseModule.isCorporateCourse &&
                    this.courseModule.access.accessRead &&
                    !(this.courseModule.access.accessCreate &&
                        this.courseModule.access.accessDelete &&
                        this.courseModule.access.accessFull &&
                        this.courseModule.access.accessSettingsRead &&
                        this.courseModule.access.accessSettingsUpdate &&
                        this.courseModule.access.accessUpdate)) ||
                    (this.courseModule.hiddenMenu &&
                        this.courseModule.hiddenMenu.includes('Class & Groups'));
        }
    };
    CourseModuleViewPage.prototype.filterCourseModuleTools = function () {
        var _this = this;
        var canReadSettingTool = function (t) {
            return (!(t.name === 'Attendance') ||
                _this.courseModule.access.accessSettingsRead);
        };
        this.hideClassGroups();
        this.generalTools = [];
        this.menuTools = [];
        this.otherTools = [];
        this.courseModuleTools.forEach(function (t) {
            if (t.isGeneralTool) {
                if (canReadSettingTool(t)) {
                    _this.generalTools.push(t);
                }
            }
            else if (t.isOtherTool) {
                _this.otherTools.push(t);
            }
            else {
                // if (t.id === 'Chat Room' && !this.courseModule.teamUpURL) {
                //   t.disabled = true;
                // }
                if (t.id === 'Feedback') {
                    t.disabled = _this.courseModule.endDate && moment__WEBPACK_IMPORTED_MODULE_2__().isAfter(_this.courseModule.endDate);
                    if (_this.isFeatureTryOut) {
                        _this.menuTools.push(t);
                    }
                }
                else {
                    _this.menuTools.push(t);
                }
            }
        });
    };
    CourseModuleViewPage.prototype.initEventListener = function () {
        var _this = this;
        this.courseModuleService.onResourceUpdated
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.id === _this.courseModule.id; }))
            .subscribe(function (m) {
            if (m.moduleCode) {
                Object.assign(_this.courseModule, m);
                // const index = this.menuTools.findIndex(menu => menu.id === 'Chat Room');
                // this.menuTools[index].disabled = m.teamUpURL ? false : true;
            }
        });
        this.subscription = this.managerService.onResourceImported.subscribe(function (m) {
            _this.courseModuleService
                .getCourseModuleInfo(_this.courseModule.id)
                .subscribe(function (data) {
                _this.courseModule.access = data.access;
                _this.courseModule.creatorID = data.creatorID;
            });
        });
        this.managerService.onResourceUpdated
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.userGuid === _this.currentUser.id; }))
            .subscribe(function (m) {
            _this.courseModuleService
                .getCourseModuleInfo(_this.courseModule.id)
                .subscribe(function (data) { return (_this.courseModule.access = data.access); });
        });
        this.ltiAppService.onResourceCreated
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (app) { return app.resourceID === _this.courseModule.id; }))
            .subscribe(function (app) {
            _this.externalTools.push(app.toCourseModuleTool());
            _this.externalTools = underscore__WEBPACK_IMPORTED_MODULE_4__["sortBy"](_this.externalTools, 'name');
        });
        this.ltiAppService.onResourceUpdated
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (app) { return app.resourceID === _this.courseModule.id; }))
            .subscribe(function (app) {
            var tool = _this.externalTools.find(function (t) { return t.id === app.id; });
            if (tool) {
                Object.assign(tool, underscore__WEBPACK_IMPORTED_MODULE_4__["pick"](app, 'name'));
            }
        });
        this.ltiAppService.onResourceDeleted.subscribe(function (appId) {
            var i = _this.externalTools.findIndex(function (t) { return t.id === appId; });
            if (i > -1) {
                _this.externalTools.splice(i, 1);
            }
        });
    };
    CourseModuleViewPage.prototype.queryFeedbackPrompt = function () {
        var _this = this;
        this.semesterService
            .query(new _utils__WEBPACK_IMPORTED_MODULE_21__["RESTQuery"]("year = \"" + this.courseModule.acadYear + "\" AND name = \"" + this.courseModule.semester + "\""))
            .subscribe(function (result) {
            if (result.data.length &&
                moment__WEBPACK_IMPORTED_MODULE_2__()
                    .add(-7, 'days')
                    .isAfter(result.data[0].endDate)) {
                _this.feedbackPrompt = _this.snackBarService.openFromComponent(_shared_semester_feedback_prompt_component__WEBPACK_IMPORTED_MODULE_17__["SemesterFeedbackPromptComponent"], {
                    data: {
                        semesterEnded: moment__WEBPACK_IMPORTED_MODULE_2__().isAfter(result.data[0].endDate),
                    },
                });
                _this.feedbackPrompt.onAction().subscribe(function () {
                    _this.router.navigate(['semester-feedback'], {
                        relativeTo: _this.route,
                    });
                });
            }
        });
    };
    CourseModuleViewPage.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.subscription.unsubscribe();
        this.spinnerSub.unsubscribe();
        if (this.feedbackPrompt) {
            this.feedbackPrompt.dismiss();
        }
    };
    CourseModuleViewPage.prototype.routeActivate = function () {
        this.routeSpinnerService.stop('courseModuleView');
    };
    CourseModuleViewPage.prototype.leaveModule = function () {
        var _this = this;
        this.confirmService
            .confirm('Are you sure you want to leave this module?')
            .then(function (yes) {
            if (yes) {
                _this.courseModuleService.leave(_this.courseModule.id).subscribe(function () {
                    _this.router.navigate(['/modules']);
                    _this.snackBarService.pop("You have left " + _this.courseModule.courseName + ".", 'success');
                }, function (err) {
                    _this.isLoading = false;
                    _this.errorHandlerService.handle(err);
                });
            }
        });
    };
    CourseModuleViewPage.prototype.editMenu = function () {
        this.isEditingTools = true;
        this.menuToolsBackup = this.menuTools.map(underscore__WEBPACK_IMPORTED_MODULE_4__["clone"]);
    };
    CourseModuleViewPage.prototype.editGeneral = function () {
        this.isEditingGeneral = true;
        this.generalToolsBackup = this.generalTools.map(underscore__WEBPACK_IMPORTED_MODULE_4__["clone"]);
    };
    CourseModuleViewPage.prototype.editOthers = function () {
        this.isEditingOthers = true;
        this.otherToolsBackup = this.otherTools.map(underscore__WEBPACK_IMPORTED_MODULE_4__["clone"]);
    };
    CourseModuleViewPage.prototype.cancelEditingOther = function () {
        this.isEditingOthers = false;
        this.otherTools = this.otherToolsBackup;
    };
    CourseModuleViewPage.prototype.cancelEditingMenu = function () {
        this.isEditingTools = false;
        this.menuTools = this.menuToolsBackup;
    };
    CourseModuleViewPage.prototype.cancelEditingGeneral = function () {
        this.isEditingGeneral = false;
        this.generalTools = this.generalToolsBackup;
    };
    CourseModuleViewPage.prototype.saveGeneral = function () {
        var _this = this;
        this.isLoading = true;
        var hiddenMenu = this.getPristineGeneralTools()
            .filter(function (t) { return t.disabled; })
            .map(function (t) { return t.id; });
        this.courseModuleService
            .patch({ id: this.courseModule.id, hiddenMenu: hiddenMenu })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isLoading = false); }))
            .subscribe(function () {
            _this.generalToolsBackup = [];
            _this.snackBarService.pop('General updated.', 'success');
            _this.isEditingGeneral = false;
        }, function (err) {
            _this.errorHandlerService.handle(err);
        });
    };
    CourseModuleViewPage.prototype.saveMenu = function () {
        var _this = this;
        this.isLoading = true;
        var hiddenMenu = this.getPristineMenuTools()
            .filter(function (t) { return t.disabled; })
            .map(function (t) { return t.id; });
        this.courseModuleService
            .patch({ id: this.courseModule.id, hiddenMenu: hiddenMenu })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isLoading = false); }))
            .subscribe(function () {
            _this.menuToolsBackup = [];
            _this.snackBarService.pop('Tools updated.', 'success');
            _this.isEditingTools = false;
        }, function (err) {
            _this.errorHandlerService.handle(err);
        });
    };
    CourseModuleViewPage.prototype.saveOthers = function () {
        var _this = this;
        this.isLoading = true;
        var hiddenMenu = this.getPristineOtherTools()
            .filter(function (t) { return t.disabled; })
            .map(function (t) { return t.id; });
        this.courseModuleService
            .patch({ id: this.courseModule.id, hiddenMenu: hiddenMenu })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return (_this.isLoading = false); }))
            .subscribe(function () {
            _this.menuToolsBackup = [];
            _this.snackBarService.pop('Tools updated.', 'success');
            _this.isEditingOthers = false;
        }, function (err) {
            _this.errorHandlerService.handle(err);
        });
    };
    CourseModuleViewPage.prototype.getPristineOtherTools = function () {
        return this.otherTools
            .concat((this.menuToolsBackup.length > 0 && this.menuToolsBackup) ||
            this.menuTools)
            .concat((this.generalToolsBackup.length > 0 && this.generalToolsBackup) ||
            this.generalTools);
    };
    CourseModuleViewPage.prototype.getPristineGeneralTools = function () {
        return this.generalTools
            .concat((this.menuToolsBackup.length > 0 && this.menuToolsBackup) ||
            this.menuTools)
            .concat((this.otherToolsBackup.length > 0 && this.otherToolsBackup) ||
            this.otherTools);
    };
    CourseModuleViewPage.prototype.getPristineMenuTools = function () {
        return this.menuTools
            .concat((this.generalToolsBackup.length > 0 && this.generalToolsBackup) ||
            this.generalTools)
            .concat((this.otherToolsBackup.length > 0 && this.otherToolsBackup) ||
            this.otherTools);
    };
    CourseModuleViewPage.prototype.isEditable = function (tool) {
        return !STUDENT_READ_ONLY_TOOLS.includes(tool.name);
    };
    CourseModuleViewPage.prototype.getTrucatedText = function (courseName) {
        var str = courseName;
        if (str.length > 60) {
            str = str.substring(0, Math.min(60, str.length)).concat('...');
        }
        return str;
    };
    return CourseModuleViewPage;
}(_core_page_base__WEBPACK_IMPORTED_MODULE_7__["PageBase"]));



/***/ }),

/***/ "./src/app/module-type-select/module-type-select.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/module-type-select/module-type-select.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_ModuleTypeSelectComponent, View_ModuleTypeSelectComponent_0, View_ModuleTypeSelectComponent_Host_0, ModuleTypeSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ModuleTypeSelectComponent", function() { return RenderType_ModuleTypeSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleTypeSelectComponent_0", function() { return View_ModuleTypeSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleTypeSelectComponent_Host_0", function() { return View_ModuleTypeSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleTypeSelectComponentNgFactory", function() { return ModuleTypeSelectComponentNgFactory; });
/* harmony import */ var _module_type_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-type-select.component.scss.shim.ngstyle */ "./src/app/module-type-select/module-type-select.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_type_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-type-select.component */ "./src/app/module-type-select/module-type-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ModuleTypeSelectComponent = [_module_type_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ModuleTypeSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ModuleTypeSelectComponent, data: {} });

function View_ModuleTypeSelectComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "option", [], [[8, "value", 0], [8, "selected", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.value, ""); var currVal_1 = (_v.context.$implicit.value == _co.selected); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.label; _ck(_v, 1, 0, currVal_2); }); }
function View_ModuleTypeSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { select: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "span", [["class", "select"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["select", 1]], null, 2, "select", [], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleTypeSelectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, ":svg:svg", [["height", "10"], ["viewBox", "214 7 15 10"], ["width", "15"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, ":svg:polyline", [["class", "caret"], ["points", "215 9 221.5 15.4 228 9"], ["style", "fill:none;stroke-width:2;stroke:#979797"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.options; _ck(_v, 4, 0, currVal_0); }, null); }
function View_ModuleTypeSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-type-select", [], null, null, null, View_ModuleTypeSelectComponent_0, RenderType_ModuleTypeSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _module_type_select_component__WEBPACK_IMPORTED_MODULE_3__["ModuleTypeSelectComponent"], [], null, null)], null, null); }
var ModuleTypeSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("module-type-select", _module_type_select_component__WEBPACK_IMPORTED_MODULE_3__["ModuleTypeSelectComponent"], View_ModuleTypeSelectComponent_Host_0, { options: "options", selected: "selected" }, { changeValue: "changeValue" }, []);



/***/ }),

/***/ "./src/app/module-type-select/module-type-select.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/module-type-select/module-type-select.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
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
var styles = ["span[_ngcontent-%COMP%] {\n  position: relative; }\n  span[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%], span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    cursor: pointer;\n    outline: none; }\n  select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: 18px;\n  font-family: 'Open Sans';\n  font-weight: 600;\n  padding: 0;\n  border: none;\n  background: transparent;\n  padding-right: 20px;\n  width: 190px; }\n  select[_ngcontent-%COMP%]::-ms-expand {\n    display: none; }\n  svg[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  pointer-events: none;\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%); }"];



/***/ }),

/***/ "./src/app/module-type-select/module-type-select.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/module-type-select/module-type-select.component.ts ***!
  \********************************************************************/
/*! exports provided: ModuleTypeSelectOption, ModuleTypeSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleTypeSelectOption", function() { return ModuleTypeSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleTypeSelectComponent", function() { return ModuleTypeSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ModuleTypeSelectOption = /** @class */ (function () {
    function ModuleTypeSelectOption(value, label) {
        this.value = value;
        this.label = label;
    }
    return ModuleTypeSelectOption;
}());

var ModuleTypeSelectComponent = /** @class */ (function () {
    function ModuleTypeSelectComponent() {
        this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModuleTypeSelectComponent.prototype.onChange = function ($event) {
        this.changeValue.emit(+($event.target.value));
    };
    return ModuleTypeSelectComponent;
}());



/***/ }),

/***/ "./src/app/module-type-select/module-type-select.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-type-select/module-type-select.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModuleTypeSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleTypeSelectModule", function() { return ModuleTypeSelectModule; });
var ModuleTypeSelectModule = /** @class */ (function () {
    function ModuleTypeSelectModule() {
    }
    return ModuleTypeSelectModule;
}());



/***/ }),

/***/ "./src/app/my-modules/my-modules-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-modules/my-modules-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyModulesRoutingModule, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModulesRoutingModule", function() { return MyModulesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/route-spinner.guard */ "./src/app/core/route-spinner.guard.ts");
/* harmony import */ var _dashboard_academic_week_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/academic-week.resolve */ "./src/app/dashboard/academic-week.resolve.ts");
/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../testing */ "./src/app/testing/index.ts");
/* harmony import */ var _user_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/auth-guard.service */ "./src/app/user/auth-guard.service.ts");
/* harmony import */ var _my_modules_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-modules.page */ "./src/app/my-modules/my-modules.page.ts");






var ɵ0 = {
    routeSpinnerName: 'dashboardLayout',
}, ɵ1 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(70)]).then(__webpack_require__.bind(null, /*! ./../course-module-create/course-module-create.module.ngfactory */ "./src/app/course-module-create/course-module-create.module.ngfactory.js")).then(function (m) { return m.CourseModuleCreateModuleNgFactory; });
}, ɵ2 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(14), __webpack_require__.e(45), __webpack_require__.e("common"), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, /*! ./../course-module-view/course-module-view.module.ngfactory */ "./src/app/course-module-view/course-module-view.module.ngfactory.js")).then(function (m) { return m.CourseModuleViewModuleNgFactory; });
};
var routes = [
    {
        path: '',
        component: _my_modules_page__WEBPACK_IMPORTED_MODULE_5__["MyModulesPage"],
        canActivate: [_user_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_1__["RouteSpinnerGuard"]],
        resolve: {
            academicWeek: _dashboard_academic_week_resolve__WEBPACK_IMPORTED_MODULE_2__["AcademicWeekResolve"],
        },
        data: ɵ0,
        children: [
            {
                path: '',
                component: _testing__WEBPACK_IMPORTED_MODULE_3__["EmptyComponent"],
                pathMatch: 'full',
            },
            {
                path: 'new-module',
                loadChildren: ɵ1,
            },
            {
                path: ':moduleId',
                loadChildren: ɵ2,
            },
        ],
    },
];
var MyModulesRoutingModule = /** @class */ (function () {
    function MyModulesRoutingModule() {
    }
    return MyModulesRoutingModule;
}());




/***/ }),

/***/ "./src/app/my-modules/my-modules.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-modules/my-modules.module.ts ***!
  \*************************************************/
/*! exports provided: MyModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModulesModule", function() { return MyModulesModule; });
var MyModulesModule = /** @class */ (function () {
    function MyModulesModule() {
    }
    return MyModulesModule;
}());



/***/ }),

/***/ "./src/app/my-modules/my-modules.page.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/my-modules/my-modules.page.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: RenderType_MyModulesPage, View_MyModulesPage_0, View_MyModulesPage_Host_0, MyModulesPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyModulesPage", function() { return RenderType_MyModulesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyModulesPage_0", function() { return View_MyModulesPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyModulesPage_Host_0", function() { return View_MyModulesPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModulesPageNgFactory", function() { return MyModulesPageNgFactory; });
/* harmony import */ var _my_modules_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-modules.page.scss.shim.ngstyle */ "./src/app/my-modules/my-modules.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_type_select_module_type_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module-type-select/module-type-select.component.ngfactory */ "./src/app/module-type-select/module-type-select.component.ngfactory.js");
/* harmony import */ var _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module-type-select/module-type-select.component */ "./src/app/module-type-select/module-type-select.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/nav-underline.component */ "./src/app/shared/nav-underline.component.ts");
/* harmony import */ var _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tooltip.directive */ "./src/app/shared/tooltip.directive.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/spinner.component.ngfactory */ "./src/app/shared/spinner.component.ngfactory.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_page_title_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/page-title.directive */ "./src/app/shared/page-title.directive.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _shared_tool_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/tool-header.component.ngfactory */ "./src/app/shared/tool-header.component.ngfactory.js");
/* harmony import */ var _shared_tool_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/tool-header.component */ "./src/app/shared/tool-header.component.ts");
/* harmony import */ var _shared_nav_underline_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/nav-underline.component.ngfactory */ "./src/app/shared/nav-underline.component.ngfactory.js");
/* harmony import */ var _course_module_list_course_module_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../course-module-list/course-module-list.component.ngfactory */ "./src/app/course-module-list/course-module-list.component.ngfactory.js");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _course_module_list_course_module_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../course-module-list/course-module-list.component */ "./src/app/course-module-list/course-module-list.component.ts");
/* harmony import */ var _my_modules_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-modules.page */ "./src/app/my-modules/my-modules.page.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _lti_lti_content_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../lti/lti-content.service */ "./src/app/lti/lti-content.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _group_group_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../group/group.service */ "./src/app/group/group.service.ts");
/* harmony import */ var _core_main_nav_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../core/main-nav.service */ "./src/app/core/main-nav.service.ts");
/* harmony import */ var _my_modules_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./my-modules.service */ "./src/app/my-modules/my-modules.service.ts");
/* harmony import */ var _core_module_selection_collapse_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../core/module-selection-collapse.service */ "./src/app/core/module-selection-collapse.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _core_confirm_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../core/confirm.service */ "./src/app/core/confirm.service.ts");
/* harmony import */ var _genius_channel_genius_channel_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../genius-channel/genius-channel.service */ "./src/app/genius-channel/genius-channel.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




































var styles_MyModulesPage = [_my_modules_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MyModulesPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MyModulesPage, data: {} });

function View_MyModulesPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "module-type-select"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "module-type-select", [], null, [[null, "changeValue"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("changeValue" === en)) {
        var pd_0 = (_co.switchModuleType($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_type_select_module_type_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModuleTypeSelectComponent_0"], _module_type_select_module_type_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModuleTypeSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_3__["ModuleTypeSelectComponent"], [], { options: [0, "options"], selected: [1, "selected"] }, { changeValue: "changeValue" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.moduleTypeOptionsList; var currVal_1 = _co.selectedModuleType; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_MyModulesPage_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "a", [["underline-tab", ""]], [[2, "active", null], [2, "btn", null], [2, "btn-link", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.switchModuleType(1) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"], [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Teaching Modules"]))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.selectedModuleType === 1); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnClass; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnLinkClass; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_MyModulesPage_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "a", [["underline-tab", ""]], [[2, "active", null], [2, "btn", null], [2, "btn-link", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.switchModuleType(2) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"], [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Past Modules"]))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.selectedModuleType === 2); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnClass; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnLinkClass; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_MyModulesPage_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "a", [["underline-tab", ""]], [[2, "active", null], [2, "btn", null], [2, "btn-link", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.switchModuleType(3) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"], [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["All Modules Taken"]))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.selectedModuleType === 3); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnClass; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnLinkClass; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_MyModulesPage_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "a", [["class", "raw-text"], ["underline-tab", ""]], [[2, "active", null], [2, "btn", null], [2, "btn-link", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.switchModuleType(4) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"], [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["edX Modules (Bookmarked)"]))], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.selectedModuleType === 4); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnClass; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnLinkClass; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_MyModulesPage_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [["tooltip", "NUS on Coursera Learning Programme"], ["underline-tab", ""]], [[2, "btn", null], [2, "btn-link", null]], [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("mouseover" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseEnter($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseout" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onMouseLeave($event) !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.courseraModule() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 81920, null, 0, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"], [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_7__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Coursera Modules"]))], function (_ck, _v) { _ck(_v, 2, 0); var currVal_2 = "NUS on Coursera Learning Programme"; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).btnLinkClass; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_MyModulesPage_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], [], null, null)], null, null); }
function View_MyModulesPage_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ": ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.key; var currVal_1 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_MyModulesPage_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.sliceLength = _co.moduleToBeCreated.length) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See more"]))], null, null); }
function View_MyModulesPage_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.sliceLength = 2) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See less"]))], null, null); }
function View_MyModulesPage_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "description-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "p", [["class", "alert alert-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" The following modules that you teach/co-teach are not on LumiNUS. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please proceed to create them. If you are co-teaching with your colleagues, please liaise with them on who will create the module. "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.moduleToBeCreated.slice(0, _co.sliceLength); _ck(_v, 6, 0, currVal_0); var currVal_1 = ((_co.moduleToBeCreated.length > 2) && (_co.sliceLength === 2)); _ck(_v, 8, 0, currVal_1); var currVal_2 = (_co.sliceLength !== 2); _ck(_v, 10, 0, currVal_2); }, null); }
function View_MyModulesPage_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "description-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Non-Academic modules are unofficial modules. These are required only if you have been notified in the circulars or by the module owners."]))], null, null); }
function View_MyModulesPage_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "description-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Past modules are teaching modules that have already past the module's closing date (expired)."]))], null, null); }
function View_MyModulesPage_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "description-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["These are a list of modules that you have taken or are taking this semester.This page is for your "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["record"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" only."]))], null, null); }
function View_MyModulesPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { geNiUSModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 56, "section", [["class", "main-content module-navigation"], ["page-title", "My Modules - LumiNUS"]], [[2, "closed", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_page_title_directive__WEBPACK_IMPORTED_MODULE_11__["PageTitleDirective"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]], { pageTitle: [0, "pageTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 14, "header", [["class", "layout-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [["class", "menu-toggler visible-xs"], ["title", "Open Menu"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.mainNavService.toggle(!_co.isMenuOpen) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "icon", [["color", "white"], ["name", "hamburger"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_15__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "tool-header", [], null, null, null, _shared_tool_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ToolHeaderComponent_0"], _shared_tool_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ToolHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 1097728, null, 3, _shared_tool_header_component__WEBPACK_IMPORTED_MODULE_17__["ToolHeaderComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { breadcrumb: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { actions: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { search: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 2, 1, "search", [["placeholder", "Search your modules"]], null, [[null, "onSearch"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onSearch" === en)) {
        var pd_0 = (_co.search($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_tool_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_ToolHeaderSearchComponent_0"], _shared_tool_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_ToolHeaderSearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4243456, [[4, 4]], 0, _shared_tool_header_component__WEBPACK_IMPORTED_MODULE_17__["ToolHeaderSearchComponent"], [], { placeholder: [0, "placeholder"] }, { onSearch: "onSearch" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 25, "div", [["class", "header"]], [[2, "no-margin-bottom", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 21, "nav-underline", [["class", "horizontal"]], [[2, "open", null]], null, null, _shared_nav_underline_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_NavUnderlineComponent_0"], _shared_nav_underline_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_NavUnderlineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 1, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 3, "a", [["underline-tab", ""]], [[2, "active", null], [2, "btn", null], [2, "btn-link", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.switchModuleType(0) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 81920, null, 0, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"], [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Enrolled Modules"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MyModulesPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MyModulesPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MyModulesPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 3, "a", [["underline-tab", ""]], [[2, "active", null], [2, "btn", null], [2, "btn-link", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.switchModuleType(5) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], null, [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 81920, null, 0, _shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["UnderlineTabDirective"], [_shared_nav_underline_component__WEBPACK_IMPORTED_MODULE_5__["NavUnderlineComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Non-Academic Modules"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MyModulesPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_MyModulesPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "div", [["class", "right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.syncStudentModules() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Not seeing your modules? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyModulesPage_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "course-module-list", [], [[8, "hidden", 0]], [[null, "onSelect"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onSelect" === en)) {
        var pd_0 = (_co.onSelectModule($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _course_module_list_course_module_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_CourseModuleListComponent_0"], _course_module_list_course_module_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_CourseModuleListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__["CourseModuleService"], _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__["CourseModuleService"], [_user_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], "AppEnvironment"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 638976, null, 0, _course_module_list_course_module_list_component__WEBPACK_IMPORTED_MODULE_23__["CourseModuleListComponent"], [_my_modules_page__WEBPACK_IMPORTED_MODULE_24__["SearchSubject"], _user_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_25__["SnackBarService"], _lti_lti_content_service__WEBPACK_IMPORTED_MODULE_26__["LtiContentService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_27__["ErrorHandlerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { courseModules: [0, "courseModules"], isLoading: [1, "isLoading"], selectedCourseModule: [2, "selectedCourseModule"], showCreateCourseLink: [3, "showCreateCourseLink"], selectedModuleType: [4, "selectedModuleType"], showExternalModules: [5, "showExternalModules"], externalModules: [6, "externalModules"] }, { onSelect: "onSelect" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, "div", [["class", "catcher"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.mainNavService.toggle(!_co.isMenuOpen) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 5, "section", [["class", "single-module"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 2, "div", [["class", "loading-panel"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 16777216, null, null, 1, "router-outlet", [], null, [[null, "activate"], [null, "deactivate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("activate" === en)) {
        var pd_0 = (_co.onRouteActivate($event) !== false);
        ad = (pd_0 && ad);
    } if (("deactivate" === en)) {
        var pd_1 = (_co.moduleSelectionCollapseService.expand() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, { activateEvents: "activate", deactivateEvents: "deactivate" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = "My Modules - LumiNUS"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "hamburger"; _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.currentUser; _ck(_v, 10, 0, currVal_3); var currVal_4 = "Search your modules"; _ck(_v, 17, 0, currVal_4); _ck(_v, 25, 0); var currVal_10 = (!_co.isStudent || _co.hasManagedModules); _ck(_v, 28, 0, currVal_10); var currVal_11 = (!_co.isStudent || _co.hasManagedModules); _ck(_v, 30, 0, currVal_11); var currVal_12 = _co.isStudent; _ck(_v, 32, 0, currVal_12); _ck(_v, 35, 0); var currVal_16 = !_co.isGuest; _ck(_v, 38, 0, currVal_16); var currVal_17 = !_co.isGuest; _ck(_v, 40, 0, currVal_17); var currVal_18 = _co.isLoading; _ck(_v, 45, 0, currVal_18); var currVal_19 = ((_co.selectedModuleType === 1) && (_co.moduleToBeCreated.length > 0)); _ck(_v, 47, 0, currVal_19); var currVal_20 = (_co.selectedModuleType === 5); _ck(_v, 49, 0, currVal_20); var currVal_21 = (_co.selectedModuleType === 2); _ck(_v, 51, 0, currVal_21); var currVal_22 = (_co.selectedModuleType === 3); _ck(_v, 53, 0, currVal_22); var currVal_24 = _co.courseModules; var currVal_25 = _co.courseModulesLoading; var currVal_26 = _co.currentModule; var currVal_27 = _co.showCreateCourse; var currVal_28 = _co.selectedModuleType; var currVal_29 = _co.showExternalModules; var currVal_30 = _co.externalModules; _ck(_v, 56, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); _ck(_v, 63, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.collapseModuleList; _ck(_v, 1, 0, currVal_0); var currVal_5 = (((((_co.selectedModuleType === 5) || ((_co.selectedModuleType === 1) && (_co.moduleToBeCreated.length > 0))) || (_co.selectedModuleType === 2)) || (_co.selectedModuleType === 3)) || (_co.selectedModuleType === 4)); _ck(_v, 18, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).isOpen; _ck(_v, 19, 0, currVal_6); var currVal_7 = (_co.selectedModuleType === 0); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).btnClass; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).btnLinkClass; _ck(_v, 23, 0, currVal_7, currVal_8, currVal_9); var currVal_13 = (_co.selectedModuleType === 5); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).btnClass; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).btnLinkClass; _ck(_v, 33, 0, currVal_13, currVal_14, currVal_15); var currVal_23 = _co.isLoading; _ck(_v, 54, 0, currVal_23); var currVal_31 = !_co.currentModuleLoading; _ck(_v, 59, 0, currVal_31); }); }
function View_MyModulesPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ng-component", [], [[2, "reveal-main-nav", null]], null, null, View_MyModulesPage_0, RenderType_MyModulesPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _my_modules_page__WEBPACK_IMPORTED_MODULE_24__["SearchSubject"], _my_modules_page__WEBPACK_IMPORTED_MODULE_24__["getSearchSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _my_modules_page__WEBPACK_IMPORTED_MODULE_24__["MyModulesPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__["CourseModuleService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_28__["RouteSpinnerService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_27__["ErrorHandlerService"], _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_25__["SnackBarService"], _user_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _my_modules_page__WEBPACK_IMPORTED_MODULE_24__["SearchSubject"], _group_group_service__WEBPACK_IMPORTED_MODULE_29__["GroupService"], _core_main_nav_service__WEBPACK_IMPORTED_MODULE_30__["MainNavService"], _my_modules_service__WEBPACK_IMPORTED_MODULE_31__["MyModulesService"], _core_module_selection_collapse_service__WEBPACK_IMPORTED_MODULE_32__["ModuleSelectionCollapseService"], _lti_lti_content_service__WEBPACK_IMPORTED_MODULE_26__["LtiContentService"], _core_tooltip_service__WEBPACK_IMPORTED_MODULE_7__["TooltipService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__["CookieService"], _core_confirm_service__WEBPACK_IMPORTED_MODULE_34__["ConfirmService"], _genius_channel_genius_channel_service__WEBPACK_IMPORTED_MODULE_35__["GeniusChannelService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isMenuOpen; _ck(_v, 0, 0, currVal_0); }); }
var MyModulesPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _my_modules_page__WEBPACK_IMPORTED_MODULE_24__["MyModulesPage"], View_MyModulesPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/my-modules/my-modules.page.scss.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/my-modules/my-modules.page.scss.shim.ngstyle.js ***!
  \*****************************************************************/
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
var styles = ["@charset \"UTF-8\";\n\n\n\n.layout-header[_ngcontent-%COMP%] {\n  display: none; }\nh3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-top: 0.5em;\n  margin-top: 3em;\n  margin-bottom: 1em;\n  color: #333333; }\n@media (min-width: 768px) and (max-width: 1199px) {\n  [_nghost-%COMP%] {\n    \n    height: 100%;\n    flex: 1 1 auto;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column; }\n  aside[_ngcontent-%COMP%], .layout-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.08333333vw 4.16666667vw; }\n    aside[_ngcontent-%COMP%]     .icon-fill, .layout-header[_ngcontent-%COMP%]     .icon-fill {\n      fill: #002970 !important; }\n    aside[_ngcontent-%COMP%]     .icon-stroke, .layout-header[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: #002970 !important; }\n  aside[_ngcontent-%COMP%] {\n    flex: 0 0 auto; }\n  aside[_ngcontent-%COMP%]    > .layout-header[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n    padding: 0; }\n  .main-content[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    -webkit-flex: 1 1 auto;\n    position: relative;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n     }\n    .main-content.modal-open[_ngcontent-%COMP%] {\n      -webkit-overflow-scrolling: auto; } }\n@media (max-width: 991px) {\n  [_nghost-%COMP%] {\n    flex-direction: column; }\n    [_nghost-%COMP%]   nav[_ngcontent-%COMP%] {\n      flex: 0 0 auto; }\n    [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n      flex: 1 1 auto; }\n  .reveal-main-nav[_nghost-%COMP%]   .catcher[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; } }\n@media not all and (min-resolution: 0.001dpcm) {\n  @supports (-webkit-appearance: none) {\n    [_nghost-%COMP%] {\n      overflow-y: inherit !important; } } }\n@media (min-width: 1200px) {\n  [_nghost-%COMP%] {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: row;\n    overflow-y: hidden;\n    z-index: 95;\n    -webkit-overflow-scrolling: touch;\n     }\n  nav[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    \n    width: 16.66666667vw; }\n  spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%); }\n  .module-header-wrapper[_ngcontent-%COMP%] {\n    background: #f8f8f8; }\n  aside[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 20.83333333vw;\n    background: white;\n    padding: 2.08333333vw 4.16666667vw;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n     } }\n@media print and (min-width: 1200px) {\n    aside[_ngcontent-%COMP%] {\n      display: none; } }\n@media (min-width: 1200px) {\n    aside[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin-bottom: 2.08333333vw; }\n    aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n      display: block;\n      padding: 0; }\n  .layout-header[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    background: white;\n    padding: 2.08333333vw 4.16666667vw; } }\n@media print and (min-width: 1200px) {\n    .layout-header[_ngcontent-%COMP%] {\n      display: none; } }\n@media (min-width: 1200px) {\n    .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin-bottom: 2.08333333vw; }\n  .main-content[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    overflow-y: scroll;\n    position: relative;\n    background: #f8f8f8; } }\n@media (max-width: 767px) {\n  [_nghost-%COMP%] {\n    background: #f8f8f8;\n    z-index: 95;\n    min-height: 100vh;\n    transition: transform 0.3s ease-out;\n    transform-origin: 0% 50vh;\n    transition-delay: 0.2s; } }\n@media (max-width: 767px) and (max-width: 767px) {\n    [_nghost-%COMP%] {\n      position: relative;\n      z-index: 91;\n      min-height: 100vh;\n      display: block; } }\n@media (max-width: 767px) {\n    .reveal-main-nav[_nghost-%COMP%] {\n      overflow: hidden;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      transform: translateX(66%) scale(0.85) rotate(8deg);\n      transform-origin: 50% 100vh; }\n    [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n      overflow: hidden;\n      position: relative;\n      padding-top: 70px; }\n  .layout-header[_ngcontent-%COMP%] {\n    padding: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background: #002970;\n    color: white;\n    height: 70px;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    z-index: 100;\n    padding: 1.04166667vw 0; }\n    .layout-header[_ngcontent-%COMP%]     .icon-fill {\n      fill: white !important; }\n    .layout-header[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: white !important; }\n    .layout-header[_ngcontent-%COMP%]    \u00A0a {\n      padding: 4.16666667vw; }\n    .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 100%;\n      text-align: center;\n      pointer-events: none;\n      top: 30px; }\n    .layout-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n      margin-left: 4.16666667vw; }\n  aside[_ngcontent-%COMP%] {\n    padding: 0;\n    position: fixed;\n    z-index: 100;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background: #002970;\n    height: 70px; }\n    aside[_ngcontent-%COMP%]    \u00A0a {\n      padding: 4.16666667vw; }\n    aside[_ngcontent-%COMP%]     .icon-fill {\n      fill: white !important; }\n    aside[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: white !important; }\n  h1[_ngcontent-%COMP%] {\n    color: white;\n    font-weight: 400;\n    line-height: 0.5em;\n    font-size: 18px;\n    top: 0px; }\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    min-height: 100vh; }\n    .main-content.loading[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 100 !important; } }\n@media print {\n  aside[_ngcontent-%COMP%], .layout-header[_ngcontent-%COMP%] {\n    display: none; } }\n\n\n\ntool-header[_ngcontent-%COMP%] {\n  position: static;\n  border-bottom: none;\n  padding-right: 0; }\n.semester[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 300; }\n.no-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 1.04166667vw !important; }\n.description-info[_ngcontent-%COMP%] {\n  padding: 0 4.16666667vw 0 4.16666667vw;\n  margin-bottom: 3.125vw; }\n.single-module[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n  position: relative; }\n.single-module[_ngcontent-%COMP%]   spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n  float: right;\n  padding: 15px 0 10px 15px; }\n.right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 11px; }\nh2[_ngcontent-%COMP%], .module-type-select[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333; }\n.module-type-selector[_ngcontent-%COMP%] {\n  margin: 0.5em 0; }\n.modules[_ngcontent-%COMP%] {\n  padding: 2.08333333vw 4.16666667vw; }\n.module-navigation[_ngcontent-%COMP%] {\n  background-color: #e1e1e1; }\n.layout-header[_ngcontent-%COMP%] {\n  padding-right: 4.16666667vw; }\n@media (min-width: 768px) {\n  \n  [_nghost-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    margin-top: 0; }\n    [_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n      flex: 0 0 auto; }\n    [_nghost-%COMP%]   .single-module[_ngcontent-%COMP%] {\n      flex: 1 1 auto;\n      height: 0;\n      display: flex;\n      flex-direction: column; }\n    [_nghost-%COMP%]   .module-navigation[_ngcontent-%COMP%] {\n      flex: 1 1 auto;\n      height: 100%; }\n  .layout-header[_ngcontent-%COMP%] {\n    justify-content: flex-end; }\n    .layout-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n      display: none; }\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: 3.125vw;\n    margin-left: 4.16666667vw;\n    margin-right: 4.16666667vw;\n    border-bottom: 1px solid #909090; }\n    .header[_ngcontent-%COMP%]   nav-underline[_ngcontent-%COMP%] {\n      padding-bottom: 0;\n      flex: 1; }\n      .header[_ngcontent-%COMP%]   nav-underline[_ngcontent-%COMP%]     .nav.nav-underline {\n        padding-left: 0;\n        border-bottom: none;\n        padding-top: 1.04166667vw; }\n  \n  .module-navigation[_ngcontent-%COMP%] {\n    max-height: 9999px;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n     }\n    .module-navigation.closed[_ngcontent-%COMP%] {\n      max-height: 0;\n      padding-bottom: 0; } }\n@media (min-width: 768px) and (max-width: 1199px) {\n  .module-navigation[_ngcontent-%COMP%] {\n    padding-bottom: calc(4.16666667vw + 70px); } }\n@media (min-width: 1200px) {\n  [_nghost-%COMP%] {\n    margin-top: 0;\n    position: fixed;\n    height: calc(100% - 106px); }\n  .layout-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 0;\n    background: #e1e1e1;\n    overflow-y: hidden;\n    width: 100%; }\n  tool-header[_ngcontent-%COMP%] {\n    padding-right: 4.16666667vw; } }\n@media (max-width: 991px) {\n  nav-underline[_ngcontent-%COMP%]     .nav.nav-underline {\n    padding-right: 10px; }\n  nav-underline[_ngcontent-%COMP%]   a[underline-tab][_ngcontent-%COMP%] {\n    font-size: 9px;\n    margin-right: 15px; }\n  .right[_ngcontent-%COMP%] {\n    float: none; } }\n@media (max-width: 767px) {\n  .layout-header[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 70px;\n    z-index: 201; }\n    .layout-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n      display: inherit;\n      float: right; }\n  .header[_ngcontent-%COMP%] {\n    display: inherit; }\n    .header[_ngcontent-%COMP%]   nav-underline[_ngcontent-%COMP%] {\n      display: none; }\n  .module-navigation.closed[_ngcontent-%COMP%] {\n    display: none; }\n    .layout-header {\n    background: #002970;\n    color: white;\n    padding: 0 !important; }\n      .layout-header select {\n      color: white; }\n        .layout-header select option {\n        color: black; }\n      .layout-header .caret {\n      stroke: white !important; }\n      .layout-header a.btn-search {\n      padding: 4.16666667vw;\n      left: 0; }\n        .layout-header a.btn-search path {\n        fill: white !important; }\n  .left[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n    .left[_ngcontent-%COMP%]     .icon-fill {\n      fill: white !important; }\n    .left[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: white !important; }\n    .left[_ngcontent-%COMP%]    > a.menu-toggler[_ngcontent-%COMP%] {\n      padding: 4.16666667vw; }\n  .right[_ngcontent-%COMP%] {\n    padding-right: 2.08333333vw; }\n  .loading-panel[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.3);\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1049;\n    display: block;\n    background: #f2f2f2; }\n  .semester[_ngcontent-%COMP%] {\n    font-size: 14px; }\n  h2[_ngcontent-%COMP%] {\n    color: white; } }\n.raw-text[_ngcontent-%COMP%] {\n  text-transform: none !important; }\n.seamless-modal[_ngcontent-%COMP%]  .modal-content, .seamless-modal[_ngcontent-%COMP%]  .modal-header, .seamless-modal[_ngcontent-%COMP%]  .modal-body {\n  background: transparent;\n  border: none;\n  box-shadow: none; }\n.seamless-modal[_ngcontent-%COMP%]  .modal-content   .icon-fill, .seamless-modal[_ngcontent-%COMP%]  .modal-header   .icon-fill, .seamless-modal[_ngcontent-%COMP%]  .modal-body   .icon-fill {\n    fill: white !important; }\n.seamless-modal[_ngcontent-%COMP%]  .modal-content   .icon-stroke, .seamless-modal[_ngcontent-%COMP%]  .modal-header   .icon-stroke, .seamless-modal[_ngcontent-%COMP%]  .modal-body   .icon-stroke {\n    stroke: white !important; }\n.seamless-modal[_ngcontent-%COMP%]  .modal-content .close, .seamless-modal[_ngcontent-%COMP%]  .modal-header .close, .seamless-modal[_ngcontent-%COMP%]  .modal-body .close {\n    opacity: 1; }\n.seamless-modal[_ngcontent-%COMP%]  .modal-content .align-center, .seamless-modal[_ngcontent-%COMP%]  .modal-header .align-center, .seamless-modal[_ngcontent-%COMP%]  .modal-body .align-center {\n    text-align: center; }\n.seamless-modal[_ngcontent-%COMP%]  .modal-content .geNiUSimg, .seamless-modal[_ngcontent-%COMP%]  .modal-header .geNiUSimg, .seamless-modal[_ngcontent-%COMP%]  .modal-body .geNiUSimg {\n    max-height: 80vh;\n    max-width: 80vw; }\n.seamless-modal[_ngcontent-%COMP%]  .modal-footer {\n  display: none; }"];



/***/ }),

/***/ "./src/app/my-modules/my-modules.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-modules/my-modules.page.ts ***!
  \***********************************************/
/*! exports provided: ModuleType, SearchSubject, getSearchSubject, MyModulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleType", function() { return ModuleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSubject", function() { return SearchSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchSubject", function() { return getSearchSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModulesPage", function() { return MyModulesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_confirm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/confirm.service */ "./src/app/core/confirm.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_main_nav_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/main-nav.service */ "./src/app/core/main-nav.service.ts");
/* harmony import */ var _core_module_selection_collapse_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/module-selection-collapse.service */ "./src/app/core/module-selection-collapse.service.ts");
/* harmony import */ var _core_page_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/page-base */ "./src/app/core/page-base.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _course_module_view_course_module_view_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../course-module-view/course-module-view.page */ "./src/app/course-module-view/course-module-view.page.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _group_group_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../group/group.service */ "./src/app/group/group.service.ts");
/* harmony import */ var _lti_lti_content_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lti/lti-content.service */ "./src/app/lti/lti-content.service.ts");
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
/* harmony import */ var _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../module-type-select/module-type-select.component */ "./src/app/module-type-select/module-type-select.component.ts");
/* harmony import */ var _shared_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/modal.component */ "./src/app/shared/modal.component.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../testing */ "./src/app/testing/index.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _my_modules_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-modules.service */ "./src/app/my-modules/my-modules.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _genius_channel_genius_channel_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../genius-channel/genius-channel.service */ "./src/app/genius-channel/genius-channel.service.ts");
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




























var ModuleType;
(function (ModuleType) {
    ModuleType[ModuleType["Enrolled"] = 0] = "Enrolled";
    ModuleType[ModuleType["Teaching"] = 1] = "Teaching";
    ModuleType[ModuleType["Archived"] = 2] = "Archived";
    ModuleType[ModuleType["Taken"] = 3] = "Taken";
    ModuleType[ModuleType["External"] = 4] = "External";
    ModuleType[ModuleType["nonAcademic"] = 5] = "nonAcademic";
})(ModuleType || (ModuleType = {}));
var SearchSubject = /** @class */ (function (_super) {
    __extends(SearchSubject, _super);
    function SearchSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearchSubject;
}(rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]));

var subject = new SearchSubject();
function getSearchSubject() {
    return subject;
}
var MyModulesPage = /** @class */ (function (_super) {
    __extends(MyModulesPage, _super);
    function MyModulesPage(route, courseModuleService, activatedRoute, routeSpinnerService, errorHandlerService, snackBarService, userService, searchSubject, groupService, mainNavService, myModulesService, moduleSelectionCollapseService, ltiContentService, tooltipService, cookieService, confirmService, geniusChannelService) {
        var _this = _super.call(this, userService) || this;
        _this.route = route;
        _this.courseModuleService = courseModuleService;
        _this.activatedRoute = activatedRoute;
        _this.routeSpinnerService = routeSpinnerService;
        _this.errorHandlerService = errorHandlerService;
        _this.snackBarService = snackBarService;
        _this.searchSubject = searchSubject;
        _this.groupService = groupService;
        _this.mainNavService = mainNavService;
        _this.myModulesService = myModulesService;
        _this.moduleSelectionCollapseService = moduleSelectionCollapseService;
        _this.ltiContentService = ltiContentService;
        _this.tooltipService = tooltipService;
        _this.cookieService = cookieService;
        _this.confirmService = confirmService;
        _this.geniusChannelService = geniusChannelService;
        _this.collapseModuleList = false;
        _this.courseModules = [];
        _this.courseModulesLoading = true;
        _this.currentModule = null;
        _this.currentModuleLoading = false;
        _this.selectedModuleType = ModuleType.Enrolled;
        _this.teachingModules = [];
        _this.enrolledModules = [];
        _this.archivedModules = [];
        _this.pastModules = [];
        _this.externalModules = [];
        _this.nonAcademicModules = [];
        _this.showExternalModules = false;
        _this.sliceLength = 2;
        _this.isMenuOpen = false;
        _this.isLoading = false;
        _this.termMap = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])();
        _this.moduleToBeCreated = [];
        _this.moduleType = ModuleType;
        _this.moduleTypeOptions = [
            new _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_18__["ModuleTypeSelectOption"](ModuleType.Enrolled, 'Enrolled Modules'),
            new _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_18__["ModuleTypeSelectOption"](ModuleType.Teaching, 'Teaching Modules'),
            new _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_18__["ModuleTypeSelectOption"](ModuleType.Archived, 'Past Modules'),
            new _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_18__["ModuleTypeSelectOption"](ModuleType.Taken, 'All Modules Taken'),
            new _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_18__["ModuleTypeSelectOption"](ModuleType.External, 'edX Modules'),
            new _module_type_select_module_type_select_component__WEBPACK_IMPORTED_MODULE_18__["ModuleTypeSelectOption"](ModuleType.nonAcademic, 'Non Academic'),
        ];
        _this.moduleOptions = [];
        _this.groupService.onGroupMembersRemoved.subscribe(function (e) {
            if (_this.currentUser && e.userIds.includes(_this.currentUser.id)) {
                var i = _this.currentUser.groupIDs.indexOf(e.groupId);
                if (i > -1) {
                    _this.currentUser.groupIDs.splice(i, 1);
                }
            }
        });
        _this.groupService.onGroupMembersAdded.subscribe(function (e) {
            if (_this.currentUser &&
                e.users.some(function (u) { return u.id === _this.currentUser.id; }) &&
                !_this.currentUser.groupIDs.includes(e.groupId)) {
                _this.currentUser.groupIDs.push(e.groupId);
            }
        });
        _this.routeSpinnerService.status.subscribe(function (a) {
            _this.currentModuleLoading = a['courseModuleRoot'];
        });
        _this.moduleSelectionCollapseService.collapsed.subscribe(function (s) {
            _this.collapseModuleList = s;
        });
        _this.subscription = _this.myModulesService.onRefreshModules.subscribe(function (message) {
            _this.syncStudentModules(message);
        });
        _this.ltiContentService.onResourceDeleted.subscribe(function (uuid) {
            var removeEle = _this.externalModules.findIndex(function (a) { return a.uuid === uuid; });
            _this.externalModules.splice(removeEle, 1);
            _this.externalModules = _this.externalModules.slice();
        });
        return _this;
    }
    Object.defineProperty(MyModulesPage.prototype, "moduleTypeOptionsList", {
        get: function () {
            var _this = this;
            this.moduleTypeOptions.map(function (moduleType, index) {
                if ((moduleType.value === 1 && (_this.isStudent && _this.hasManagedModules === false)) ||
                    (moduleType.value === 2 && (_this.isStudent && _this.hasManagedModules === false)) ||
                    (moduleType.value === 3 && _this.isStaff)) {
                    _this.moduleTypeOptions.splice(index, 1);
                }
            });
            return this.moduleTypeOptions;
        },
        enumerable: true,
        configurable: true
    });
    MyModulesPage.prototype.onSelectModule = function (courseModule) {
        this.moduleSelectionCollapseService.collapse();
    };
    MyModulesPage.prototype.doSwitch = function () {
        this.courseModules = [
            this.enrolledModules,
            this.teachingModules,
            this.archivedModules,
            this.pastModules,
            this.externalModules,
            this.nonAcademicModules,
        ][+this.selectedModuleType];
        this.courseModules = this.courseModules.slice();
    };
    MyModulesPage.prototype.switchModuleType = function (moduleType) {
        var _this = this;
        this.showExternalModules = false;
        this.tooltipService.widthShow(false);
        var switchPastModules = function () {
            _this.isLoading = true;
            var query = new _utils__WEBPACK_IMPORTED_MODULE_23__["RESTQuery"]();
            query.sortby = 'termCode DESC, moduleCode ASC';
            query.populate = 'termDetail';
            return _this.courseModuleService
                .getModulesTaken(_this.currentUser.id, query)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return (_this.isLoading = false); }))
                .subscribe(function (modules) {
                _this.pastModules = modules.data;
                _this.doSwitch();
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        };
        var switchExtModules = function () {
            _this.isLoading = true;
            return _this.ltiContentService
                .getExtModules()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return (_this.isLoading = false); }))
                .subscribe(function (extModules) {
                _this.externalModules = extModules;
                _this.doSwitch();
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        };
        var switchNonAcademicModules = function () {
            _this.isLoading = true;
            return _this.courseModuleService
                .getNonAcademicModules()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return (_this.isLoading = false); }))
                .subscribe(function (modules) {
                var priorityModules = modules
                    .filter(function (m) {
                    return m.name === 'RC1000A' ||
                        m.name === 'SE1000' ||
                        m.name === 'OSHGEN02' ||
                        m.name === 'RC1000B' ||
                        m.name === 'UHCMH01';
                })
                    .sort(function (a, b) {
                    return a.name.localeCompare(b.name, undefined, {
                        numeric: true,
                        sensitivity: 'base',
                    });
                });
                var nonPriorityModules = modules.filter(function (m) {
                    return m.name !== 'RC1000A' &&
                        m.name !== 'SE1000' &&
                        m.name !== 'OSHGEN02' &&
                        m.name !== 'RC1000B' &&
                        m.name !== 'UHCMH01';
                });
                _this.nonAcademicModules = priorityModules.concat(nonPriorityModules);
                _this.doSwitch();
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        };
        this.selectedModuleType = moduleType;
        if (this.selectedModuleType === ModuleType.Taken && this.userService.currentRoles.includes('Student')) {
            switchPastModules();
        }
        else if (this.selectedModuleType === ModuleType.External) {
            this.showExternalModules = true;
            this.tooltipService.widthShow(true);
            switchExtModules();
        }
        else if (this.selectedModuleType === ModuleType.nonAcademic) {
            switchNonAcademicModules();
        }
        else {
            this.doSwitch();
        }
        this.showCreateCourse =
            this.selectedModuleType === ModuleType.Teaching &&
                this.currentUser.userRoles.includes('RootResource.Create');
    };
    MyModulesPage.prototype.switchTypeToShowModule = function (module) {
        if (underscore__WEBPACK_IMPORTED_MODULE_5__["find"](this.enrolledModules, function (c) { return c.id === module.id; })) {
            this.switchModuleType(ModuleType.Enrolled);
            return;
        }
        if (underscore__WEBPACK_IMPORTED_MODULE_5__["find"](this.teachingModules, function (c) { return c.id === module.id; })) {
            this.switchModuleType(ModuleType.Teaching);
            return;
        }
        if (underscore__WEBPACK_IMPORTED_MODULE_5__["find"](this.archivedModules, function (c) { return c.id === module.id; })) {
            this.switchModuleType(ModuleType.Archived);
            return;
        }
    };
    MyModulesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.selectedTab = Number(params.tab);
            if (!_this.cookieService.get("genius-" + _this.currentUser.userID) && (_this.currentUser.isStudent || _this.currentUser.isStaff)) {
                _this.cookieService.set("genius-" + _this.currentUser.userID, 'true', { expires: moment__WEBPACK_IMPORTED_MODULE_25__().add('1', 'month').toDate() });
                // this.geNiUSModal.open();
            }
        });
        this.courseModulesLoading = true;
        this.currentUser = this.userService.getCurrentUser().profile;
        this.activatedRoute.firstChild.data.forEach(function (data) {
            _this.currentModule = data.courseModule;
        });
        this.activatedRoute.data.subscribe(function (data) {
            _this.academicWeek = data.academicWeek;
        });
        if (this.isStudentOrGuest) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_23__["findDataByResolve"])('TermsResolve', this.activatedRoute).subscribe(function (data) {
                _this.termMap = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])(underscore__WEBPACK_IMPORTED_MODULE_5__["indexBy"](data.terms, 'term'));
            });
        }
        this.queryCourseModules();
        this.moduleNotCreated();
        this.courseModuleService.onResourceCreated.subscribe(function (courseModule) {
            _this.moduleNotCreated();
            // TODO this should really just push to this._modules which should listen and re-filter.
            if (courseModule.endDate < new Date()) {
                _this.archivedModules.unshift(courseModule);
            }
            else {
                _this.teachingModules.unshift(courseModule);
            }
            _this.switchTypeToShowModule(courseModule);
            _this.doSwitch();
        });
        this.courseModuleService.onResourceDeleted.subscribe(function (id) {
            _this.moduleNotCreated();
            var i = _this.teachingModules.findIndex(function (m) { return m.id === id; });
            if (i > -1) {
                _this.teachingModules.splice(i, 1);
            }
            i = _this.enrolledModules.findIndex(function (m) { return m.id === id; });
            if (i > -1) {
                _this.enrolledModules.splice(i, 1);
            }
            i = _this.archivedModules.findIndex(function (m) { return m.id === id; });
            if (i > -1) {
                _this.archivedModules.splice(i, 1);
            }
            _this.doSwitch();
        });
        this.courseModuleService.onResourceUpdated.subscribe(function (cm) {
            var i = _this.courseModules.findIndex(function (m) { return cm.id === m.id; });
            if (i > -1 && !cm.moduleCode) {
                _this.courseModules[i].name = cm.name;
            }
            if (i > -1 && cm.moduleCode) {
                Object.assign(_this.courseModules[i], cm);
            }
            _this.courseModules = _this.courseModules.slice();
        });
        this.mainNavService.onToggleMenu.subscribe(function (openness) {
            _this.isMenuOpen = openness;
        });
        this.routeSpinnerService.stop('dashboardLayout');
    };
    MyModulesPage.prototype.moduleNotCreated = function () {
        var _this = this;
        this.moduleToBeCreated = [];
        this.courseModuleService.getOfficialModules().subscribe(function (modules) {
            modules.map(function (module) {
                if (!module['presence'] && !(_this.moduleToBeCreated.findIndex(function (createdMod) { return createdMod.key === ('[' + module['term'] + '] ' +
                    module['termDetail']['description']); }) > -1)) {
                    var moduleAccess = { key: '[' + module['term'] + '] ' + module['termDetail']['description'],
                        value: modules.filter(function (mod) { return mod['term'] === module['term'] && !mod['presence']; }).map(function (mod) { return ' ' + mod['module']; }) };
                    _this.moduleToBeCreated.push(moduleAccess);
                }
            });
        });
    };
    MyModulesPage.prototype.setCurrentUser = function (user) {
        _super.prototype.setCurrentUser.call(this, user);
        this.canCreateModule =
            user && user.userRoles.indexOf('RootResource.Create') > -1;
    };
    MyModulesPage.prototype.queryCourseModules = function (isRefresh) {
        var _this = this;
        this.isLoading = true;
        this._modules = this.courseModuleService
            .getModules(new _utils__WEBPACK_IMPORTED_MODULE_23__["RESTQuery"]({ populate: 'Creator,termDetail,isMandatory' }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return (_this.isLoading = false); }));
        this.populateTeachingModules();
        this.populateArchivedModules();
        this.populateEnrolledModules(isRefresh);
    };
    MyModulesPage.prototype.populateTeachingModules = function () {
        var _this = this;
        if (!this._modules) {
            return;
        }
        this._modules
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (m) {
            return m.access.accessFull ||
                m.access.accessCreate ||
                m.access.accessUpdate ||
                m.access.accessDelete ||
                m.access.accessSettingsRead ||
                m.access.accessSettingsUpdate;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (m) { return m.endDate >= new Date(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (m) { return m.id !== _models_course_module__WEBPACK_IMPORTED_MODULE_17__["PLACEHOLDER_MODULE_ID"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])())
            .subscribe(function (courseModules) {
            _this.teachingModules = courseModules;
            _this.hasManagedModules =
                _this.teachingModules.length !== 0 ||
                    _this.archivedModules.length !== 0;
        });
    };
    MyModulesPage.prototype.populateArchivedModules = function () {
        var _this = this;
        if (!this._modules) {
            return;
        }
        this._modules
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (m) {
            return m.access.accessFull ||
                m.access.accessCreate ||
                m.access.accessUpdate ||
                m.access.accessDelete ||
                m.access.accessSettingsRead ||
                m.access.accessSettingsUpdate;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (m) { return m.endDate < new Date(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (m) { return m.id !== _models_course_module__WEBPACK_IMPORTED_MODULE_17__["PLACEHOLDER_MODULE_ID"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])())
            .subscribe(function (courseModules) {
            _this.archivedModules = courseModules;
            _this.hasManagedModules =
                _this.teachingModules.length !== 0 ||
                    _this.archivedModules.length !== 0;
        });
    };
    MyModulesPage.prototype.populateEnrolledModules = function (isRefresh) {
        var _this = this;
        if (!this._modules) {
            return;
        }
        var enrolledModulesObs = this._modules.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (m) {
            return ((!m.access.accessCreate &&
                !m.access.accessUpdate &&
                !m.access.accessFull &&
                !m.access.accessDelete &&
                !m.access.accessSettingsRead &&
                !m.access.accessSettingsUpdate) ||
                m.id === _models_course_module__WEBPACK_IMPORTED_MODULE_17__["PLACEHOLDER_MODULE_ID"]) &&
                m.isCorporateCourse !== true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
        var switchToModuleType = function () {
            if (!isRefresh) {
                if (_this.selectedTab) {
                    _this.switchModuleType(ModuleType.External);
                }
                else if (_this.currentModule) {
                    _this.switchTypeToShowModule(_this.currentModule);
                }
                else {
                    if (_this.isStudentOrGuest) {
                        _this.switchModuleType(ModuleType.Enrolled);
                    }
                    else {
                        _this.switchModuleType(ModuleType.Teaching);
                    }
                }
            }
            else {
                _this.switchModuleType(_this.selectedModuleType);
            }
        };
        if (!!isRefresh && this.isStudentOrGuest) {
            var query = new _utils__WEBPACK_IMPORTED_MODULE_23__["RESTQuery"]({ populate: 'termDetail,classLecturer' });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(enrolledModulesObs, this.courseModuleService.getNoPresenceModules(query))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return (_this.courseModulesLoading = false); }))
                .subscribe(function (_a) {
                var courseModules = _a[0], noPresenceMods = _a[1];
                _this.enrolledModules = courseModules;
                switchToModuleType();
                _this.insertNoPresenceModules(noPresenceMods);
            });
        }
        else {
            enrolledModulesObs
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return (_this.courseModulesLoading = false); }))
                .subscribe(function (courseModules) {
                _this.enrolledModules = courseModules;
                switchToModuleType();
            });
        }
    };
    MyModulesPage.prototype.insertNoPresenceModules = function (modules) {
        var _this = this;
        (modules || []).forEach(function (noPresenceMod) {
            var existingModule = _this.enrolledModules.find(function (m) { return m.name === noPresenceMod.name; });
            if (existingModule) {
                existingModule = noPresenceMod;
            }
            else {
                _this.enrolledModules.push(noPresenceMod);
                _this.doSwitch();
            }
        });
        // this.populateNoPresenceModules();
    };
    MyModulesPage.prototype.populateNoPresenceModules = function () {
        var _this = this;
        var nonExistentModules = this.enrolledModules.filter(function (m) { return m.id === _models_course_module__WEBPACK_IMPORTED_MODULE_17__["PLACEHOLDER_MODULE_ID"] && !!m.term; });
        if (nonExistentModules.length > 0) {
            this.courseModuleService
                .getBulletinModuleList(nonExistentModules.map(function (m) { return ({
                moduleCode: m.moduleCode,
                termCode: m.term,
            }); }))
                .subscribe(function (res) {
                res.forEach(function (m) {
                    var mod = nonExistentModules.find(function (nModule) { return nModule.moduleCode === m.moduleCode; });
                    underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](mod, m, {
                        courseName: m.moduleTitle,
                        term: "" + m.term,
                        termDetail: mod.termDetail,
                    });
                });
            }, function (err) {
                if (err.status === 404) {
                    // need to handle server side validation
                }
                else {
                    _this.errorHandlerService.handle(err);
                }
            });
        }
    };
    MyModulesPage.prototype.syncStudentModules = function (message) {
        var _this = this;
        if (message === void 0) { message = 'Successfully refreshed the list of modules.'; }
        var syncModules = function () {
            _this.courseModuleService.refreshStudentModule().subscribe(function () {
                _this.snackBarService.pop(message, 'success');
                _this.queryCourseModules(true);
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        };
        if (this.currentUser.isStudent) {
            this.confirmService
                .confirm("This includes refreshing your officially enrolled modules and groups from EduRec, which might take quite some time.\n        <br><br>\n        Are you sure you want to proceed?")
                .then(function (yes) {
                if (yes) {
                    syncModules();
                }
            });
        }
        else {
            syncModules();
        }
    };
    MyModulesPage.prototype.search = function (keyword) {
        this.searchSubject.next(keyword);
    };
    MyModulesPage.prototype.onRouteActivate = function (component) {
        if (component instanceof _testing__WEBPACK_IMPORTED_MODULE_21__["EmptyComponent"]) {
            this.moduleSelectionCollapseService.expand();
        }
        else if (component instanceof _course_module_view_course_module_view_page__WEBPACK_IMPORTED_MODULE_13__["CourseModuleViewPage"]) {
            this.moduleSelectionCollapseService.collapse();
        }
    };
    MyModulesPage.prototype.redirectTogeNiUS = function () {
        this.geniusChannelService.trackClicks({ 'clickFrom': 'geNiUS_PopBanner',
            'url': 'https://geniuschannel.nus.edu.sg' }).subscribe(function () {
            window.open('https://geniuschannel.nus.edu.sg', '_blank');
        });
    };
    MyModulesPage.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    MyModulesPage.prototype.courseraModule = function () {
        window.open('https://www.coursera.org/programs/national-university-of-singapore-on-coursera-bm9c5', '_blank');
    };
    return MyModulesPage;
}(_core_page_base__WEBPACK_IMPORTED_MODULE_10__["PageBase"]));



/***/ })

}]);