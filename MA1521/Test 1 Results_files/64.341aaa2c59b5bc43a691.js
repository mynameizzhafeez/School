(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./src/app/course-module-overview/course-module-overview.page.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/course-module-overview/course-module-overview.page.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_CourseModuleOverviewPage, View_CourseModuleOverviewPage_0, View_CourseModuleOverviewPage_Host_0, CourseModuleOverviewPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CourseModuleOverviewPage", function() { return RenderType_CourseModuleOverviewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleOverviewPage_0", function() { return View_CourseModuleOverviewPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleOverviewPage_Host_0", function() { return View_CourseModuleOverviewPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleOverviewPageNgFactory", function() { return CourseModuleOverviewPageNgFactory; });
/* harmony import */ var _course_module_overview_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-module-overview.page.scss.shim.ngstyle */ "./src/app/course-module-overview/course-module-overview.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/action.directive */ "./src/app/shared/action.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/spinner.component.ngfactory */ "./src/app/shared/spinner.component.ngfactory.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../module-announcements/module-announcements.component.ngfactory */ "./src/app/module-announcements/module-announcements.component.ngfactory.js");
/* harmony import */ var _module_announcements_module_announcements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../module-announcements/module-announcements.component */ "./src/app/module-announcements/module-announcements.component.ts");
/* harmony import */ var _files_pending_download_files_pending_download_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../files-pending-download/files-pending-download.ngfactory */ "./src/app/files-pending-download/files-pending-download.ngfactory.js");
/* harmony import */ var _files_pending_download_files_pending_download__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../files-pending-download/files-pending-download */ "./src/app/files-pending-download/files-pending-download.ts");
/* harmony import */ var _file_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../file/file.service */ "./src/app/file/file.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _task_task_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../task/task-list.component.ngfactory */ "./src/app/task/task-list.component.ngfactory.js");
/* harmony import */ var _task_task_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../task/task-list.component */ "./src/app/task/task-list.component.ts");
/* harmony import */ var _lesson_select_lesson_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lesson-select/lesson-select.component.ngfactory */ "./src/app/lesson-select/lesson-select.component.ngfactory.js");
/* harmony import */ var _lesson_select_lesson_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lesson-select/lesson-select.component */ "./src/app/lesson-select/lesson-select.component.ts");
/* harmony import */ var _module_promo_video_module_promo_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../module-promo-video/module-promo-video.component.ngfactory */ "./src/app/module-promo-video/module-promo-video.component.ngfactory.js");
/* harmony import */ var _module_promo_video_module_promo_video_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../module-promo-video/module-promo-video.component */ "./src/app/module-promo-video/module-promo-video.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _module_summary_module_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../module-summary/module-summary.component.ngfactory */ "./src/app/module-summary/module-summary.component.ngfactory.js");
/* harmony import */ var _module_summary_module_summary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../module-summary/module-summary.component */ "./src/app/module-summary/module-summary.component.ts");
/* harmony import */ var _timetable_timetable_module_items_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../timetable/timetable-module-items.component.ngfactory */ "./src/app/timetable/timetable-module-items.component.ngfactory.js");
/* harmony import */ var _timetable_timetable_module_items_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../timetable/timetable-module-items.component */ "./src/app/timetable/timetable-module-items.component.ts");
/* harmony import */ var _timetable_timetable_exams_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../timetable/timetable-exams.component.ngfactory */ "./src/app/timetable/timetable-exams.component.ngfactory.js");
/* harmony import */ var _timetable_timetable_exams_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../timetable/timetable-exams.component */ "./src/app/timetable/timetable-exams.component.ts");
/* harmony import */ var _module_feedback_module_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../module-feedback/module-feedback.component.ngfactory */ "./src/app/module-feedback/module-feedback.component.ngfactory.js");
/* harmony import */ var _module_feedback_module_feedback_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../module-feedback/module-feedback.component */ "./src/app/module-feedback/module-feedback.component.ts");
/* harmony import */ var _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/moment.pipe */ "./src/app/shared/moment.pipe.ts");
/* harmony import */ var _shared_tool_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../shared/tool-layout.component.ngfactory */ "./src/app/shared/tool-layout.component.ngfactory.js");
/* harmony import */ var _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../shared/tool-layout.component */ "./src/app/shared/tool-layout.component.ts");
/* harmony import */ var _shared_page_title_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../shared/page-title.directive */ "./src/app/shared/page-title.directive.ts");
/* harmony import */ var _shared_tool_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../shared/tool-actions.component.ngfactory */ "./src/app/shared/tool-actions.component.ngfactory.js");
/* harmony import */ var _shared_tool_actions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../shared/tool-actions.component */ "./src/app/shared/tool-actions.component.ts");
/* harmony import */ var _shared_route_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../shared/route-spinner.component.ngfactory */ "./src/app/shared/route-spinner.component.ngfactory.js");
/* harmony import */ var _shared_route_spinner_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../shared/route-spinner.component */ "./src/app/shared/route-spinner.component.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _course_module_overview_page__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./course-module-overview.page */ "./src/app/course-module-overview/course-module-overview.page.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _core_confirm_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../core/confirm.service */ "./src/app/core/confirm.service.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _timetable_timetable_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../timetable/timetable.service */ "./src/app/timetable/timetable.service.ts");
/* harmony import */ var _announcement_announcement_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../announcement/announcement.service */ "./src/app/announcement/announcement.service.ts");
/* harmony import */ var _learning_flow_lesson_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../learning-flow/lesson.service */ "./src/app/learning-flow/lesson.service.ts");
/* harmony import */ var _task_task_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../task/task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _core_faculty_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../core/faculty.service */ "./src/app/core/faculty.service.ts");
/* harmony import */ var _core_department_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../core/department.service */ "./src/app/core/department.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















































var styles_CourseModuleOverviewPage = [_course_module_overview_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CourseModuleOverviewPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CourseModuleOverviewPage, data: {} });

function View_CourseModuleOverviewPage_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "action", [["title", "Enable Learning Flow"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.enableLearningFlow() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], primary: [1, "primary"] }, { click: "click" })], function (_ck, _v) { var currVal_0 = "Enable Learning Flow"; var currVal_1 = true; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["icon", "plus"], ["title", "Add a week"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], icon: [1, "icon"], routerLink: [2, "routerLink"], primary: [3, "primary"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Add a week"; var currVal_1 = "plus"; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_co.selectedLesson ? (("lessons" + _co.selectedLesson.id) + "new") : "lessons/new"), ""); var currVal_3 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_co.selectedLesson ? (("lessons" + _co.selectedLesson.id) + "new") : "lessons/new"), ""); _ck(_v, 2, 0, currVal_4); }, null); }
function View_CourseModuleOverviewPage_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["icon", "plus"], ["title", "Add a topic"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], icon: [1, "icon"], routerLink: [2, "routerLink"], primary: [3, "primary"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "Add a topic"; var currVal_1 = "plus"; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_co.selectedLesson ? (("lessons" + _co.selectedLesson.id) + "new") : "lessons/new"), ""); var currVal_3 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_co.selectedLesson ? (("lessons" + _co.selectedLesson.id) + "new") : "lessons/new"), ""); _ck(_v, 2, 0, currVal_4); }, null); }
function View_CourseModuleOverviewPage_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["routerLink", "../bulk/edit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], routerLink: [1, "routerLink"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "Bulk Edit ", (!_co.courseModule.usedNusCalendar ? "Topics" : "Weeks"), ""); var currVal_1 = "../bulk/edit"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "../bulk/edit"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_CourseModuleOverviewPage_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["routerLink", "lessons/semester-view"], ["title", "Switch to All Weeks View"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], routerLink: [1, "routerLink"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var currVal_0 = "Switch to All Weeks View"; var currVal_1 = "lessons/semester-view"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "lessons/semester-view"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_CourseModuleOverviewPage_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["routerLink", "lessons/semester-view"], ["title", "Switch to All Topics View"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], routerLink: [1, "routerLink"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var currVal_0 = "Switch to All Topics View"; var currVal_1 = "lessons/semester-view"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "lessons/semester-view"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_CourseModuleOverviewPage_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["routerLink", "statistics"], ["title", "Statistics"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], routerLink: [1, "routerLink"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var currVal_0 = "Statistics"; var currVal_1 = "statistics"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "statistics"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_CourseModuleOverviewPage_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "action", [["title", "Disable Learning Flow"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.disableLearningFlow() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"] }, { click: "click" })], function (_ck, _v) { var currVal_0 = "Disable Learning Flow"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CourseModuleOverviewPage_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "action", [["title", "Reset Week Period"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetWeek() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"] }, { click: "click" })], function (_ck, _v) { var currVal_0 = "Reset Week Period"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CourseModuleOverviewPage_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["routerLink", "setup/reset"], ["title", "Reset Learning Flow"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], routerLink: [1, "routerLink"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var currVal_0 = "Reset Learning Flow"; var currVal_1 = "setup/reset"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "setup/reset"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_CourseModuleOverviewPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.learningFlowEnabled || !((_co.lessons == null) ? null : _co.lessons.size)); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)) && _co.courseModule.usedNusCalendar); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)) && !_co.courseModule.usedNusCalendar); _ck(_v, 6, 0, currVal_2); var currVal_3 = ((_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)) && _co.canEdit); _ck(_v, 8, 0, currVal_3); var currVal_4 = ((_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)) && _co.courseModule.usedNusCalendar); _ck(_v, 10, 0, currVal_4); var currVal_5 = ((_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)) && !_co.courseModule.usedNusCalendar); _ck(_v, 12, 0, currVal_5); var currVal_6 = (_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)); _ck(_v, 14, 0, currVal_6); var currVal_7 = (_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)); _ck(_v, 16, 0, currVal_7); var currVal_8 = ((((!_co.isRearranging && _co.canEdit) && _co.learningFlowEnabled) && !!((_co.lessons == null) ? null : _co.lessons.size)) && _co.courseModule.hasNusCalendar); _ck(_v, 18, 0, currVal_8); var currVal_9 = (_co.learningFlowEnabled && !!((_co.lessons == null) ? null : _co.lessons.size)); _ck(_v, 20, 0, currVal_9); }, null); }
function View_CourseModuleOverviewPage_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["routerLink", "./lessons/semesterku-view"], ["title", "Knowledge Unit Dashboard"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[8, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { title: [0, "title"], routerLink: [1, "routerLink"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var currVal_0 = "Knowledge Unit Dashboard"; var currVal_1 = "./lessons/semesterku-view"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "./lessons/semesterku-view"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_CourseModuleOverviewPage_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.leaveModule() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unenrol From Module"]))], null, null); }
function View_CourseModuleOverviewPage_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleOverviewPage_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-announcements", [], null, [[null, "createAnnouncement"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("createAnnouncement" === en)) {
        var pd_0 = (_co.router.navigate(["add-announcement"], { relativeTo: _co.route }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ModuleAnnouncementsComponent_0"], _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ModuleAnnouncementsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _module_announcements_module_announcements_component__WEBPACK_IMPORTED_MODULE_8__["ModuleAnnouncementsComponent"], [], { announcements: [0, "announcements"], courseModule: [1, "courseModule"] }, { createAnnouncement: "createAnnouncement" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcements; var currVal_1 = _co.courseModule; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "announcement-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Latest Announcements"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoadingAnnouncements; _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.isLoadingAnnouncements; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "pending-files"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "files-pending-download", [], null, null, null, _files_pending_download_files_pending_download_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_FilesPendingDownloadComponent_0"], _files_pending_download_files_pending_download_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_FilesPendingDownloadComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _files_pending_download_files_pending_download__WEBPACK_IMPORTED_MODULE_10__["FilesPendingDownloadComponent"], [_file_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], null, null); }
function View_CourseModuleOverviewPage_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleOverviewPage_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "infolet-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" You have no active/upcoming deadlines. "]))], null, null); }
function View_CourseModuleOverviewPage_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "task-list", [], null, null, null, _task_task_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_TaskListComponent_0"], _task_task_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_TaskListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _task_task_list_component__WEBPACK_IMPORTED_MODULE_14__["TaskListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], { tasks: [0, "tasks"], showTick: [1, "showTick"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tasks; var currVal_1 = false; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "upcoming-deadlines"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Active/Upcoming Deadlines"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoadingTasks; _ck(_v, 4, 0, currVal_0); var currVal_1 = (!_co.isLoadingTasks && !_co.tasks.size); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.isLoadingTasks; _ck(_v, 8, 0, currVal_2); }, null); }
function View_CourseModuleOverviewPage_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "lesson-select", [], null, null, null, _lesson_select_lesson_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_LessonSelectComponent_0"], _lesson_select_lesson_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_LessonSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4898816, null, 0, _lesson_select_lesson_select_component__WEBPACK_IMPORTED_MODULE_16__["LessonSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { lessons: [0, "lessons"], selectedLesson: [1, "selectedLesson"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.lessons; var currVal_1 = _co.selectedLesson; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ", ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.acadYear; var currVal_1 = _co.courseModule.semesterDisplay; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleOverviewPage_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" [", "] ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.termDetail.term; var currVal_1 = _co.courseModule.termDetail.description; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleOverviewPage_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "td", [["class", "padding-left-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-graduation-cap font-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.courseModule.termDetail; _ck(_v, 7, 0, currVal_0); var currVal_1 = !!_co.courseModule.termDetail; _ck(_v, 9, 0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "td", [["class", "padding-left-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "fa fa-calendar font-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "span", [["class", "padding-left-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " - ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.courseModule.startDate, "ll hh:mm a")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 1, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.courseModule.endDate, "ll hh:mm a")); _ck(_v, 5, 0, currVal_0, currVal_1); }); }
function View_CourseModuleOverviewPage_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "module-promo-video", [], null, [[null, "updatePromoVideo"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("updatePromoVideo" === en)) {
        var pd_0 = (_co.updatePromoVideo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_promo_video_module_promo_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_ModulePromoVideoComponent_0"], _module_promo_video_module_promo_video_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_ModulePromoVideoComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 704512, null, 0, _module_promo_video_module_promo_video_component__WEBPACK_IMPORTED_MODULE_18__["ModulePromoVideoComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"], _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__["CourseModuleService"]], { courseModule: [0, "courseModule"] }, { updatePromoVideo: "updatePromoVideo" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CourseModuleOverviewPage_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "section", [["class", "promo-video"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "div", [["class", "left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 19, "div", [["class", "infolet-box height-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 18, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "td", [["class", "padding-left-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "module-code"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [["class", "padding-left-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [["class", "module-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "td", [["class", "padding-left-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "i", [["class", "fa fa-building font-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "span", [["class", "padding-left-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, [" ", " (", ") "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (!_co.courseModule.isCorporateCourse && (!_co.courseModule.termDetail || (!!_co.courseModule.termDetail && (_co.courseModule.termDetail.term !== "9999")))); _ck(_v, 13, 0, currVal_2); var currVal_5 = _co.academicModule(_co.courseModule); _ck(_v, 21, 0, currVal_5); var currVal_6 = _co.courseModule.promoVideoEmbedUrl; _ck(_v, 23, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.name; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.courseModule.courseName; _ck(_v, 11, 0, currVal_1); var currVal_3 = _co.courseModule["facultyName"]; var currVal_4 = _co.courseModule["departmentName"]; _ck(_v, 19, 0, currVal_3, currVal_4); }); }
function View_CourseModuleOverviewPage_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleOverviewPage_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleOverviewPage_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-announcements", [], null, [[null, "createAnnouncement"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("createAnnouncement" === en)) {
        var pd_0 = (_co.router.navigate(["add-announcement"], { relativeTo: _co.route }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ModuleAnnouncementsComponent_0"], _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ModuleAnnouncementsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _module_announcements_module_announcements_component__WEBPACK_IMPORTED_MODULE_8__["ModuleAnnouncementsComponent"], [], { announcements: [0, "announcements"], courseModule: [1, "courseModule"] }, { createAnnouncement: "createAnnouncement" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcements; var currVal_1 = _co.courseModule; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "announcement-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Latest Announcements"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoadingAnnouncements; _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.isLoadingAnnouncements; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "left margin-top-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "module-summary", [], null, [[null, "updateOverview"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("updateOverview" === en)) {
        var pd_0 = (_co.updateOverview($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_summary_module_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ModuleSummaryComponent_0"], _module_summary_module_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ModuleSummaryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 704512, null, 0, _module_summary_module_summary_component__WEBPACK_IMPORTED_MODULE_22__["ModuleSummaryComponent"], [_course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__["CourseModuleService"]], { courseModule: [0, "courseModule"] }, { updateOverview: "updateOverview" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.screenxs; _ck(_v, 4, 0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleOverviewPage_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-announcements", [], null, [[null, "createAnnouncement"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("createAnnouncement" === en)) {
        var pd_0 = (_co.router.navigate(["add-announcement"], { relativeTo: _co.route }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ModuleAnnouncementsComponent_0"], _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ModuleAnnouncementsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _module_announcements_module_announcements_component__WEBPACK_IMPORTED_MODULE_8__["ModuleAnnouncementsComponent"], [], { announcements: [0, "announcements"], courseModule: [1, "courseModule"] }, { createAnnouncement: "createAnnouncement" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcements; var currVal_1 = _co.courseModule; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "announcement-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Latest Announcements"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoadingAnnouncements; _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.isLoadingAnnouncements; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "left"]], [[2, "margin-top-20", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "module-summary", [], null, [[null, "updateOverview"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("updateOverview" === en)) {
        var pd_0 = (_co.updateOverview($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_summary_module_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ModuleSummaryComponent_0"], _module_summary_module_summary_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ModuleSummaryComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 704512, null, 0, _module_summary_module_summary_component__WEBPACK_IMPORTED_MODULE_22__["ModuleSummaryComponent"], [_course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__["CourseModuleService"]], { courseModule: [0, "courseModule"] }, { updateOverview: "updateOverview" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.courseModule; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.screenxs; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.purpose; _ck(_v, 0, 0, currVal_0); }); }
function View_CourseModuleOverviewPage_40(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleOverviewPage_41(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-announcements", [], null, [[null, "createAnnouncement"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("createAnnouncement" === en)) {
        var pd_0 = (_co.router.navigate(["add-announcement"], { relativeTo: _co.route }) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ModuleAnnouncementsComponent_0"], _module_announcements_module_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ModuleAnnouncementsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _module_announcements_module_announcements_component__WEBPACK_IMPORTED_MODULE_8__["ModuleAnnouncementsComponent"], [], { announcements: [0, "announcements"], courseModule: [1, "courseModule"] }, { createAnnouncement: "createAnnouncement" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcements; var currVal_1 = _co.courseModule; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_39(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "announcement-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Latest Announcements"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_41)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoadingAnnouncements; _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.isLoadingAnnouncements; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_42(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleOverviewPage_45(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "timetable-module-items", [], null, null, null, _timetable_timetable_module_items_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_TimetableModuleItemsComponent_0"], _timetable_timetable_module_items_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_TimetableModuleItemsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _timetable_timetable_module_items_component__WEBPACK_IMPORTED_MODULE_24__["TimetableModuleItemsComponent"], [], { timetable: [0, "timetable"], courseModule: [1, "courseModule"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit; var currVal_1 = _co.courseModule; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_44(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_45)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = !!((_v.context.$implicit == null) ? null : _v.context.$implicit.size); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CourseModuleOverviewPage_46(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "timetable-exams", [], null, null, null, _timetable_timetable_exams_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_TimetableExamsComponent_0"], _timetable_timetable_exams_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_TimetableExamsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _timetable_timetable_exams_component__WEBPACK_IMPORTED_MODULE_26__["TimetableExamsComponent"], [], { timetable: [0, "timetable"], courseModule: [1, "courseModule"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.exams; var currVal_1 = _co.courseModule; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_43(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_44)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_46)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.moduleItemGroupings; _ck(_v, 2, 0, currVal_0); var currVal_1 = !!((_co.exams == null) ? null : _co.exams.size); _ck(_v, 4, 0, currVal_1); }, null); }
function View_CourseModuleOverviewPage_47(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-feedback", [], null, null, null, _module_feedback_module_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_ModuleFeedbackComponent_0"], _module_feedback_module_feedback_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_ModuleFeedbackComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _module_feedback_module_feedback_component__WEBPACK_IMPORTED_MODULE_28__["ModuleFeedbackComponent"], [], { courseModule: [0, "courseModule"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CourseModuleOverviewPage_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 8, "div", [["class", "right margin-top-20"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_42)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_43)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_47)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isStudent; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.isStudent && _co.courseModule.purpose); _ck(_v, 4, 0, currVal_1); var currVal_3 = _co.screensm; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.isLoadingTimetables; _ck(_v, 9, 0, currVal_4); var currVal_5 = !_co.isLoadingTimetables; _ck(_v, 11, 0, currVal_5); var currVal_6 = _co.showModuleFeedback; _ck(_v, 13, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((!_co.timeTableGroup && !((_co.exams == null) ? null : _co.exams.size)) && !_co.showModuleFeedback); _ck(_v, 5, 0, currVal_2); }); }
function View_CourseModuleOverviewPage_48(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["You are unable to reset the week period as there are navigation labels that do not match the official academic week calendar. Please amend the following navigation labels below before continuing: ", ". "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errorWeeks.toString(); _ck(_v, 1, 0, currVal_0); }); }
function View_CourseModuleOverviewPage_49(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This will overwrite the dates in each week to follow the module's academic week calendar of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["[", "] ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["After resetting the week period, you may need to adjust the period of the weeks' activities which have dates tied to it. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Are you sure you want to proceed?"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.termDetail.term; var currVal_1 = _co.courseModule.termDetail.description; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_CourseModuleOverviewPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_29__["MomentPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { snackTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { resetWeekQuestion: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 38, "tool-layout", [["page-title", "Module Overview - LumiNUS"]], [[2, "top-drawer", null]], null, null, _shared_tool_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_ToolLayoutComponent_0"], _shared_tool_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_ToolLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 5, _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_31__["ToolLayoutComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { pills: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { underlines: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { content: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { toolActions: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { toolHeader: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_page_title_directive__WEBPACK_IMPORTED_MODULE_32__["PageTitleDirective"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], { pageTitle: [0, "pageTitle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 3, 16, "tool-actions", [], [[2, "visible", null], [2, "empty", null], [2, "top-drawer", null]], null, null, _shared_tool_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_ToolActionsComponent_0"], _shared_tool_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_ToolActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 180224, [[6, 4]], 1, _shared_tool_actions_component__WEBPACK_IMPORTED_MODULE_34__["ToolActionsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { actions: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 8, "aside", [["class", "visible-md-block visible-lg-block"]], [[2, "student", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 6, 13, "tool-content", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, [[5, 4]], 0, _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_31__["ToolContentDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "route-spinner", [["spinnerName", "courseModuleOverview"]], null, null, null, _shared_route_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["View_RouteSpinnerComponent_0"], _shared_route_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["RenderType_RouteSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 704512, [["routeSpinner", 4]], 0, _shared_route_spinner_component__WEBPACK_IMPORTED_MODULE_36__["RouteSpinnerComponent"], [_core_route_spinner_service__WEBPACK_IMPORTED_MODULE_37__["RouteSpinnerService"]], { spinnerName: [0, "spinnerName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 7, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 4, "section", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleOverviewPage_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2], ["snackTemplate", 2]], null, 0, null, View_CourseModuleOverviewPage_48)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[2, 2], ["resetWeekQuestion", 2]], null, 0, null, View_CourseModuleOverviewPage_49))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "Module Overview - LumiNUS"; _ck(_v, 10, 0, currVal_1); var currVal_5 = _co.canEdit; _ck(_v, 15, 0, currVal_5); var currVal_6 = _co.courseModule.isIALPEnabled; _ck(_v, 18, 0, currVal_6); var currVal_8 = (_co.courseModule.isCorporateCourse && !_co.courseModule.isOwner); _ck(_v, 21, 0, currVal_8); var currVal_9 = (_co.screenlg || _co.screenmd); _ck(_v, 23, 0, currVal_9); var currVal_10 = _co.courseModule.isStudent; _ck(_v, 25, 0, currVal_10); var currVal_11 = !_co.canEdit; _ck(_v, 27, 0, currVal_11); var currVal_12 = (_co.learningFlowEnabled && (((_co.lessons == null) ? null : _co.lessons.size) > 0)); _ck(_v, 31, 0, currVal_12); var currVal_13 = "courseModuleOverview"; _ck(_v, 33, 0, currVal_13); var currVal_15 = !_co.isLoadingLessons; _ck(_v, 36, 0, currVal_15); var currVal_16 = _co.isLoadingLessons; _ck(_v, 39, 0, currVal_16); var currVal_17 = !_co.isLoadingLessons; _ck(_v, 41, 0, currVal_17); _ck(_v, 43, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).isTopDrawer; _ck(_v, 3, 0, currVal_0); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).visible; var currVal_3 = (!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).actions || (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).actions.length === 0)); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).topDrawerMode; _ck(_v, 11, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = !_co.canEdit; _ck(_v, 19, 0, currVal_7); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).showSpinner; _ck(_v, 34, 0, currVal_14); }); }
function View_CourseModuleOverviewPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CourseModuleOverviewPage_0, RenderType_CourseModuleOverviewPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _course_module_overview_page__WEBPACK_IMPORTED_MODULE_38__["CourseModuleOverviewPage"], [_user_user_service__WEBPACK_IMPORTED_MODULE_39__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _core_confirm_service__WEBPACK_IMPORTED_MODULE_40__["ConfirmService"], _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_41__["SnackBarService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlerService"], _timetable_timetable_service__WEBPACK_IMPORTED_MODULE_42__["TimetableService"], _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_20__["CourseModuleService"], _announcement_announcement_service__WEBPACK_IMPORTED_MODULE_43__["AnnouncementService"], _learning_flow_lesson_service__WEBPACK_IMPORTED_MODULE_44__["LessonService"], _task_task_service__WEBPACK_IMPORTED_MODULE_45__["TaskService"], _core_faculty_service__WEBPACK_IMPORTED_MODULE_46__["FacultyService"], _core_department_service__WEBPACK_IMPORTED_MODULE_47__["DepartmentService"], _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_37__["RouteSpinnerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CourseModuleOverviewPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _course_module_overview_page__WEBPACK_IMPORTED_MODULE_38__["CourseModuleOverviewPage"], View_CourseModuleOverviewPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/course-module-overview/course-module-overview.page.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/course-module-overview/course-module-overview.page.scss.shim.ngstyle.js ***!
  \*****************************************************************************************/
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
var styles = ["section[_ngcontent-%COMP%] {\n  display: flex; }\nsection[_ngcontent-%COMP%]    > .spinner-container[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    text-align: center; }\nsection[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    flex: 3 3 0%;\n    margin-right: 15px; }\nsection[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex: 1 1 auto; }\n.feedback-container[_ngcontent-%COMP%] {\n  background: white;\n  background-color: white;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  margin: 20px 0; }\n.feedback-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 10px; }\n.promo-video[_ngcontent-%COMP%] {\n  display: flex; }\n.promo-video[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    margin-right: 0;\n    flex: 1 1 0%; }\n.promo-video[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    margin-left: 10px; }\n.caption-text[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 13px; }\n.vertical-center[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%; }\n.padding-left-10[_ngcontent-%COMP%] {\n  padding-left: 10px; }\n.padding-left-5[_ngcontent-%COMP%] {\n  padding-left: 5px; }\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px; }\n.height-100[_ngcontent-%COMP%] {\n  height: 100%; }\n.module-name[_ngcontent-%COMP%] {\n  font-weight: 600; }\n.module-code[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #002970; }\n.font-12[_ngcontent-%COMP%] {\n  font-size: 12px; }\nlesson-select[_ngcontent-%COMP%] {\n  margin-bottom: 40px; }\ntool-actions[_ngcontent-%COMP%]     aside .section-header {\n  margin-left: 2px; }\ntool-actions[_ngcontent-%COMP%]     aside .btn-danger {\n  width: 100%;\n  margin-bottom: 30px; }\ntool-actions[_ngcontent-%COMP%]     aside.student {\n  margin-top: 0; }\n@media (max-width: 767px) {\n  section[_ngcontent-%COMP%] {\n    flex-direction: column; }\n    section[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n      margin-right: 0; }\n  .promo-video[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-left: 0px; }\n  lesson-select[_ngcontent-%COMP%] {\n    margin-bottom: 40px; }\n  module-summary[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: block; }\n  tool-layout[_ngcontent-%COMP%]     .content {\n    height: 85vh;\n    overflow: scroll; } }\n@media (min-width: 768px) {\n  section[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    max-width: calc(100% / 3);\n    min-width: 240px; } }\n.upcoming-deadlines[_ngcontent-%COMP%] {\n  margin-top: 50px; }\n.upcoming-deadlines[_ngcontent-%COMP%]   task-list[_ngcontent-%COMP%]     {\n    border: none;\n    background: none; }\n.upcoming-deadlines[_ngcontent-%COMP%]   task-list[_ngcontent-%COMP%]     div.task {\n      border: 1px solid #dfdfdf;\n      padding: 20px;\n      background: white;\n      border-radius: 3px;\n      margin: 0.5em 0px;\n      overflow: hidden;\n      position: relative; }\n.upcoming-deadlines[_ngcontent-%COMP%]   task-list[_ngcontent-%COMP%]     div.task:first-child {\n        margin-top: 0em; }\n.upcoming-deadlines[_ngcontent-%COMP%]   task-list[_ngcontent-%COMP%]     div.task:last-child {\n        margin-bottom: 0em; }\n.upcoming-deadlines[_ngcontent-%COMP%]   task-list[_ngcontent-%COMP%]     div.task .task-info span.due {\n        margin-top: 2px; }\n.upcoming-deadlines[_ngcontent-%COMP%]   task-list[_ngcontent-%COMP%]     div.task .task-info span.module {\n        display: none; }\n.pending-files[_ngcontent-%COMP%] {\n  margin-top: 50px; }\n.pending-files[_ngcontent-%COMP%]   files-pending-download[_ngcontent-%COMP%]     {\n    border: none;\n    background: none; }\n.pending-files[_ngcontent-%COMP%]   files-pending-download[_ngcontent-%COMP%]     div.task {\n      border: 1px solid #dfdfdf;\n      padding: 20px;\n      background: white;\n      border-radius: 3px;\n      margin: 0.5em 0px;\n      overflow: hidden;\n      position: relative; }\n.pending-files[_ngcontent-%COMP%]   files-pending-download[_ngcontent-%COMP%]     div.task:first-child {\n        margin-top: 0em; }\n.pending-files[_ngcontent-%COMP%]   files-pending-download[_ngcontent-%COMP%]     div.task:last-child {\n        margin-bottom: 0em; }\n.download-all[_ngcontent-%COMP%] {\n  float: right; }\n.announcement-container[_ngcontent-%COMP%] {\n  margin: 20px 0; }\n.files-pending[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: middle;\n  display: flex;\n  width: 100%;\n  color: #333;\n  padding: 6px 10px;\n  text-decoration: none;\n  white-space: nowrap;\n  flex: 0 0 auto;\n  margin-bottom: 1%;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n.files-pending[_ngcontent-%COMP%]:hover {\n    background-color: #cccccc; }\n.pending-msg[_ngcontent-%COMP%] {\n  flex: 1; }\ntool-layout[_ngcontent-%COMP%]     .tools-and-content {\n  height: 85vh !important; }\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  tool-content[_ngcontent-%COMP%] {\n    padding-bottom: calc(70px + 4.16666667vw); } }"];



/***/ }),

/***/ "./src/app/course-module-tool/course-module-tool.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/course-module-tool/course-module-tool.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_CourseModuleToolComponent, View_CourseModuleToolComponent_0, View_CourseModuleToolComponent_Host_0, CourseModuleToolComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CourseModuleToolComponent", function() { return RenderType_CourseModuleToolComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleToolComponent_0", function() { return View_CourseModuleToolComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleToolComponent_Host_0", function() { return View_CourseModuleToolComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleToolComponentNgFactory", function() { return CourseModuleToolComponentNgFactory; });
/* harmony import */ var _course_module_tool_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-module-tool.component.scss.shim.ngstyle */ "./src/app/course-module-tool/course-module-tool.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/tooltip.directive */ "./src/app/shared/tooltip.directive.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/nav-pills.component */ "./src/app/shared/nav-pills.component.ts");
/* harmony import */ var _course_module_tool_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course-module-tool.component */ "./src/app/course-module-tool/course-module-tool.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_CourseModuleToolComponent = [_course_module_tool_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CourseModuleToolComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CourseModuleToolComponent, data: {} });

function View_CourseModuleToolComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "icon", [["name", "invisible"], ["tooltip", "This tool is not visible to students"]], null, [[null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_4__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_5__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"], tooltip: [1, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "This tool is not visible to students"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "invisible"; var currVal_2 = "This tool is not visible to students"; _ck(_v, 2, 0, currVal_1, currVal_2); }, null); }
function View_CourseModuleToolComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "icon", [["name", "invisible"], ["tooltip", "Click to make visible"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.enable() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_4__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_5__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"], tooltip: [1, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "Click to make visible"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "invisible"; var currVal_2 = "Click to make visible"; _ck(_v, 2, 0, currVal_1, currVal_2); }, null); }
function View_CourseModuleToolComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "icon", [["name", "eye"], ["tooltip", "Click to hide"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.disable() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_4__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_5__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]], { name: [0, "name"], tooltip: [1, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "Click to hide"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "eye"; var currVal_2 = "Click to hide"; _ck(_v, 2, 0, currVal_1, currVal_2); }, null); }
function View_CourseModuleToolComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleToolComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleToolComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tool.disabled; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.tool.disabled; _ck(_v, 4, 0, currVal_1); }, null); }
function View_CourseModuleToolComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "a", [["pill", ""]], [[8, "hidden", 0], [2, "not-visible", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_9__["PillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleToolComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleToolComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.isEditing ? null : _co.tool.routerLink); _ck(_v, 1, 0, currVal_4); var currVal_5 = (!_co.isEditing ? "selected" : ""); _ck(_v, 2, 0, currVal_5); var currVal_7 = (!_co.isEditing && _co.tool.disabled); _ck(_v, 8, 0, currVal_7); var currVal_8 = _co.isEditing; _ck(_v, 10, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.canEdit && _co.tool.disabled); var currVal_1 = _co.tool.disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_6 = _co.tool.name; _ck(_v, 6, 0, currVal_6); }); }
function View_CourseModuleToolComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "course-module-tool", [], null, null, null, View_CourseModuleToolComponent_0, RenderType_CourseModuleToolComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _course_module_tool_component__WEBPACK_IMPORTED_MODULE_10__["CourseModuleToolComponent"], [], null, null)], null, null); }
var CourseModuleToolComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("course-module-tool", _course_module_tool_component__WEBPACK_IMPORTED_MODULE_10__["CourseModuleToolComponent"], View_CourseModuleToolComponent_Host_0, { tool: "tool", canEdit: "canEdit", isEditing: "isEditing" }, { onVisibilityChange: "onVisibilityChange" }, []);



/***/ }),

/***/ "./src/app/course-module-tool/course-module-tool.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/course-module-tool/course-module-tool.component.scss.shim.ngstyle.js ***!
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
var styles = ["a[pill][_ngcontent-%COMP%] {\n  position: relative;\n  height: 35px; }\na[pill].not-visible[_ngcontent-%COMP%] {\n    color: #909090; }\na[pill][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    float: right; }\na[pill][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%]     .icon-fill {\n      fill: #909090 !important; }\na[pill][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: #909090 !important; }\na[pill][_ngcontent-%COMP%]   icon[name=eye][_ngcontent-%COMP%]     .icon-fill {\n      fill: #5cb85c !important; }\na[pill][_ngcontent-%COMP%]   icon[name=eye][_ngcontent-%COMP%]     .icon-stroke {\n      stroke: #5cb85c !important; }"];



/***/ }),

/***/ "./src/app/course-module-tool/course-module-tool.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/course-module-tool/course-module-tool.component.ts ***!
  \********************************************************************/
/*! exports provided: CourseModuleToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleToolComponent", function() { return CourseModuleToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
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



var CourseModuleToolComponent = /** @class */ (function (_super) {
    __extends(CourseModuleToolComponent, _super);
    function CourseModuleToolComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canEdit = false;
        _this.isEditing = false;
        _this.onVisibilityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    CourseModuleToolComponent.prototype.ngOnChanges = function (changes) {
        if (changes.isEditing) {
            this.isEditing = changes.isEditing.currentValue;
        }
        if (changes.tool) {
            this.tool = changes.tool.currentValue;
        }
    };
    CourseModuleToolComponent.prototype.disable = function () {
        if (this.tool) {
            this.tool.disabled = true;
            this.onVisibilityChange.emit(!this.tool.disabled);
        }
    };
    CourseModuleToolComponent.prototype.enable = function () {
        if (this.tool) {
            this.tool.disabled = false;
            this.onVisibilityChange.emit(!this.tool.disabled);
        }
    };
    return CourseModuleToolComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_1__["ComponentBase"]));



/***/ }),

/***/ "./src/app/course-module-tool/course-module-tool.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/course-module-tool/course-module-tool.module.ts ***!
  \*****************************************************************/
/*! exports provided: CourseModuleToolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleToolModule", function() { return CourseModuleToolModule; });
var CourseModuleToolModule = /** @class */ (function () {
    function CourseModuleToolModule() {
    }
    return CourseModuleToolModule;
}());



/***/ }),

/***/ "./src/app/course-module-view/course-module-view-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/course-module-view/course-module-view-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CourseModuleViewRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20, ɵ21, ɵ22, ɵ23, ɵ24, ɵ25, ɵ26, ɵ27, ɵ28, ɵ29, ɵ30, ɵ31, ɵ32, ɵ33, ɵ34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleViewRoutingModule", function() { return CourseModuleViewRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ6", function() { return ɵ6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ7", function() { return ɵ7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ8", function() { return ɵ8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ9", function() { return ɵ9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ10", function() { return ɵ10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ11", function() { return ɵ11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ12", function() { return ɵ12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ13", function() { return ɵ13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ14", function() { return ɵ14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ15", function() { return ɵ15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ16", function() { return ɵ16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ17", function() { return ɵ17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ18", function() { return ɵ18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ19", function() { return ɵ19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ20", function() { return ɵ20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ21", function() { return ɵ21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ22", function() { return ɵ22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ23", function() { return ɵ23; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ24", function() { return ɵ24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ25", function() { return ɵ25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ26", function() { return ɵ26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ27", function() { return ɵ27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ28", function() { return ɵ28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ29", function() { return ɵ29; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ30", function() { return ɵ30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ31", function() { return ɵ31; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ32", function() { return ɵ32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ33", function() { return ɵ33; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ34", function() { return ɵ34; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../announcement/announcement-edit.page */ "./src/app/announcement/announcement-edit.page.ts");
/* harmony import */ var _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/page-hit.guard */ "./src/app/core/page-hit.guard.ts");
/* harmony import */ var _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/route-spinner.guard */ "./src/app/core/route-spinner.guard.ts");
/* harmony import */ var _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/student-redirect-guard.service */ "./src/app/core/student-redirect-guard.service.ts");
/* harmony import */ var _course_module_overview_course_module_overview_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-module-overview/course-module-overview.page */ "./src/app/course-module-overview/course-module-overview.page.ts");
/* harmony import */ var _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../course-module/access-rights.resolve */ "./src/app/course-module/access-rights.resolve.ts");
/* harmony import */ var _course_module_course_module_tools_resolve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-module/course-module-tools.resolve */ "./src/app/course-module/course-module-tools.resolve.ts");
/* harmony import */ var _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../course-module/course-module.resolve */ "./src/app/course-module/course-module.resolve.ts");
/* harmony import */ var _course_module_departments_resolve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course-module/departments.resolve */ "./src/app/course-module/departments.resolve.ts");
/* harmony import */ var _course_module_faculties_resolve__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../course-module/faculties.resolve */ "./src/app/course-module/faculties.resolve.ts");
/* harmony import */ var _lti_lti_apps_resolve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lti/lti-apps.resolve */ "./src/app/lti/lti-apps.resolve.ts");
/* harmony import */ var _testing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../testing */ "./src/app/testing/index.ts");
/* harmony import */ var _course_module_view_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./course-module-view.page */ "./src/app/course-module-view/course-module-view.page.ts");














var ɵ0 = {
    routeSpinnerName: 'courseModuleRoot',
    courseModuleResolve: {
        populate: 'feedbackSender,hiddenMenu,termDetail,faculty,department,creator,inRoster,isMandatory,isAudit,isOfficialModule',
    },
    accessRightsResolve: {
        populate: 'subGroups',
    },
}, ɵ1 = {
    isFilesVisible: true,
    routeSpinnerName: 'courseModuleRoot',
}, ɵ2 = {
    isNew: true,
    isLearningFlow: true,
    accessRightsResourceIdParam: 'moduleId',
    accessRightsResolve: {
        populate: 'subGroups',
    },
    routeSpinnerName: 'modal',
    closeUrl: '../',
}, ɵ3 = {
    routeSpinnerName: 'courseModuleOverview',
}, ɵ4 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(12), __webpack_require__.e(38), __webpack_require__.e(87)]).then(__webpack_require__.bind(null, /*! ./../lesson-edit/lesson-edit.module.ngfactory */ "./src/app/lesson-edit/lesson-edit.module.ngfactory.js")).then(function (m) { return m.LessonEditModuleNgFactory; });
}, ɵ5 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(41), __webpack_require__.e(94)]).then(__webpack_require__.bind(null, /*! ./../module-setup/module-setup.module.ngfactory */ "./src/app/module-setup/module-setup.module.ngfactory.js")).then(function (m) { return m.ModuleSetupModuleNgFactory; });
}, ɵ6 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(12), __webpack_require__.e(40), __webpack_require__.e(78)]).then(__webpack_require__.bind(null, /*! ./../bulk-edit/bulk-edit.module.ngfactory */ "./src/app/bulk-edit/bulk-edit.module.ngfactory.js")).then(function (m) { return m.BulkEditModuleNgFactory; });
}, ɵ7 = function () {
    return __webpack_require__.e(/*! import() */ 84).then(__webpack_require__.bind(null, /*! ./../semester-feedback/semester-feedback.module.ngfactory */ "./src/app/semester-feedback/semester-feedback.module.ngfactory.js")).then(function (m) { return m.SemesterFeedbackModuleNgFactory; });
}, ɵ8 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(30), __webpack_require__.e(55), __webpack_require__.e(61)]).then(__webpack_require__.bind(null, /*! ./../module-analytics/module-analytics.module.ngfactory */ "./src/app/module-analytics/module-analytics.module.ngfactory.js")).then(function (m) { return m.ModuleAnalyticsModuleNgFactory; });
}, ɵ9 = {
    routeSpinnerName: 'courseModuleOverview',
}, ɵ10 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(9), __webpack_require__.e(11), __webpack_require__.e(12), __webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e(15), __webpack_require__.e(17), __webpack_require__.e(18), __webpack_require__.e(19), __webpack_require__.e(20), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(23), __webpack_require__.e(21), __webpack_require__.e(26), __webpack_require__.e(27), __webpack_require__.e(28), __webpack_require__.e(29), __webpack_require__.e(32), __webpack_require__.e(35), __webpack_require__.e(31), __webpack_require__.e(30), __webpack_require__.e(33), __webpack_require__.e(36), __webpack_require__.e(34), __webpack_require__.e(37), __webpack_require__.e(39), __webpack_require__.e(38), __webpack_require__.e(41), __webpack_require__.e(40), __webpack_require__.e(42), __webpack_require__.e(43), __webpack_require__.e("common"), __webpack_require__.e(99)]).then(__webpack_require__.bind(null, /*! ./../learning-flow/learning-flow.module.ngfactory */ "./src/app/learning-flow/learning-flow.module.ngfactory.js")).then(function (m) { return m.LearningFlowModuleNgFactory; });
}, ɵ11 = {
    routeSpinnerName: 'courseModuleView',
    courseModuleResolve: {
        populate: 'termDetail,faculty,department,isMandatory,crossList,isOfficialModule',
    },
}, ɵ12 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(73)]).then(__webpack_require__.bind(null, /*! ./../course-module-edit/course-module-edit.module.ngfactory */ "./src/app/course-module-edit/course-module-edit.module.ngfactory.js")).then(function (m) { return m.CourseModuleEditModuleNgFactory; });
}, ɵ13 = function () {
    return __webpack_require__.e(/*! import() */ 82).then(__webpack_require__.bind(null, /*! ./../edit-module-code/edit-module-code.module.ngfactory */ "./src/app/edit-module-code/edit-module-code.module.ngfactory.js")).then(function (m) { return m.EditModuleCodeModuleNgFactory; });
}, ɵ14 = function () {
    return __webpack_require__.e(/*! import() */ 96).then(__webpack_require__.bind(null, /*! ./../announcement/announcement.module.ngfactory */ "./src/app/announcement/announcement.module.ngfactory.js")).then(function (m) { return m.AnnouncementModuleNgFactory; });
}, ɵ15 = function () {
    return __webpack_require__.e(/*! import() */ 80).then(__webpack_require__.bind(null, /*! ./../course-module-details/course-module-details.module.ngfactory */ "./src/app/course-module-details/course-module-details.module.ngfactory.js")).then(function (m) { return m.CourseModuleDetailsModuleNgFactory; });
}, ɵ16 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(39), __webpack_require__.e(79)]).then(__webpack_require__.bind(null, /*! ./../chat/chat.module.ngfactory */ "./src/app/chat/chat.module.ngfactory.js")).then(function (m) { return m.ChatModuleNgFactory; });
}, ɵ17 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(9), __webpack_require__.e(23), __webpack_require__.e(27), __webpack_require__.e(86)]).then(__webpack_require__.bind(null, /*! ./../forum/forum.module.ngfactory */ "./src/app/forum/forum.module.ngfactory.js")).then(function (m) { return m.ForumModuleNgFactory; });
}, ɵ18 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(98)]).then(__webpack_require__.bind(null, /*! ./../file/file.module.ngfactory */ "./src/app/file/file.module.ngfactory.js")).then(function (m) { return m.FileModuleNgFactory; });
}, ɵ19 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(53), __webpack_require__.e(65)]).then(__webpack_require__.bind(null, /*! ./../attendance/attendance.module.ngfactory */ "./src/app/attendance/attendance.module.ngfactory.js")).then(function (m) { return m.AttendanceModuleNgFactory; });
}, ɵ20 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(15), __webpack_require__.e(52), __webpack_require__.e(53), __webpack_require__.e(51), __webpack_require__.e("common"), __webpack_require__.e(60)]).then(__webpack_require__.bind(null, /*! ./../group/group.module.ngfactory */ "./src/app/group/group.module.ngfactory.js")).then(function (m) { return m.GroupModuleNgFactory; });
}, ɵ21 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(16), __webpack_require__.e(18), __webpack_require__.e(83)]).then(__webpack_require__.bind(null, /*! ./../multimedia/multimedia.module.ngfactory */ "./src/app/multimedia/multimedia.module.ngfactory.js")).then(function (m) { return m.MultimediaModuleNgFactory; });
}, ɵ22 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(10), __webpack_require__.e(31), __webpack_require__.e(93)]).then(__webpack_require__.bind(null, /*! ./../poll/poll.module.ngfactory */ "./src/app/poll/poll.module.ngfactory.js")).then(function (m) { return m.PollModuleNgFactory; });
}, ɵ23 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(21), __webpack_require__.e(32), __webpack_require__.e(95)]).then(__webpack_require__.bind(null, /*! ./../web-lecture/web-lecture.module.ngfactory */ "./src/app/web-lecture/web-lecture.module.ngfactory.js")).then(function (m) { return m.WebLectureModuleNgFactory; });
}, ɵ24 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(63)]).then(__webpack_require__.bind(null, /*! ./../consultation/consultation.module.ngfactory */ "./src/app/consultation/consultation.module.ngfactory.js")).then(function (m) { return m.ConsultationModuleNgFactory; });
}, ɵ25 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(10), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(20), __webpack_require__.e(22), __webpack_require__.e(29), __webpack_require__.e(75)]).then(__webpack_require__.bind(null, /*! ./../survey/survey.module.ngfactory */ "./src/app/survey/survey.module.ngfactory.js")).then(function (m) { return m.SurveyModuleNgFactory; });
}, ɵ26 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(28), __webpack_require__.e(77)]).then(__webpack_require__.bind(null, /*! ./../evaluation/evaluation.module.ngfactory */ "./src/app/evaluation/evaluation.module.ngfactory.js")).then(function (m) { return m.EvaluationModuleNgFactory; });
}, ɵ27 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(8), __webpack_require__.e(9), __webpack_require__.e(15), __webpack_require__.e(17), __webpack_require__.e(55), __webpack_require__.e(54), __webpack_require__.e(51), __webpack_require__.e(56), __webpack_require__.e(58)]).then(__webpack_require__.bind(null, /*! ./../gradebook/gradebook.module.ngfactory */ "./src/app/gradebook/gradebook.module.ngfactory.js")).then(function (m) { return m.GradebookModuleNgFactory; });
}, ɵ28 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(8), __webpack_require__.e(10), __webpack_require__.e(9), __webpack_require__.e(13), __webpack_require__.e(16), __webpack_require__.e(17), __webpack_require__.e(18), __webpack_require__.e(22), __webpack_require__.e(24), __webpack_require__.e(26), __webpack_require__.e(89)]).then(__webpack_require__.bind(null, /*! ./../quiz/quiz.module.ngfactory */ "./src/app/quiz/quiz.module.ngfactory.js")).then(function (m) { return m.QuizModuleNgFactory; });
}, ɵ29 = function () { return Promise.all(/*! import() */[__webpack_require__.e(19), __webpack_require__.e("common"), __webpack_require__.e(90)]).then(__webpack_require__.bind(null, /*! ./../lti/lti.module.ngfactory */ "./src/app/lti/lti.module.ngfactory.js")).then(function (m) { return m.LtiModuleNgFactory; }); }, ɵ30 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(15), __webpack_require__.e(35), __webpack_require__.e(85)]).then(__webpack_require__.bind(null, /*! ./../conferencing/conferencing.module.ngfactory */ "./src/app/conferencing/conferencing.module.ngfactory.js")).then(function (m) { return m.ConferencingModuleNgFactory; });
}, ɵ31 = function () {
    return __webpack_require__.e(/*! import() */ 104).then(__webpack_require__.bind(null, /*! ./../task/task.module.ngfactory */ "./src/app/task/task.module.ngfactory.js")).then(function (m) { return m.TaskModuleNgFactory; });
}, ɵ32 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(9), __webpack_require__.e(23), __webpack_require__.e(56), __webpack_require__.e(67)]).then(__webpack_require__.bind(null, /*! ./../tag/tag.module.ngfactory */ "./src/app/tag/tag.module.ngfactory.js")).then(function (m) { return m.TagModuleNgFactory; });
}, ɵ33 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(33), __webpack_require__.e(88)]).then(__webpack_require__.bind(null, /*! ./../scorm/scorm.module.ngfactory */ "./src/app/scorm/scorm.module.ngfactory.js")).then(function (m) { return m.ScormModuleNgFactory; });
}, ɵ34 = function () {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(12), __webpack_require__.e(76)]).then(__webpack_require__.bind(null, /*! ./../course-module-feedback/course-module-feedback.module.ngfactory */ "./src/app/course-module-feedback/course-module-feedback.module.ngfactory.js")).then(function (m) { return m.CourseModuleFeedbackModuleNgFactory; });
};
var routes = [
    {
        path: '',
        component: _course_module_view_page__WEBPACK_IMPORTED_MODULE_13__["CourseModuleViewPage"],
        resolve: {
            courseModule: _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_8__["CourseModuleResolve"],
            courseModuleTools: _course_module_course_module_tools_resolve__WEBPACK_IMPORTED_MODULE_7__["CourseModuleToolsResolve"],
            ltiApps: _lti_lti_apps_resolve__WEBPACK_IMPORTED_MODULE_11__["LtiAppsResolve"],
        },
        data: ɵ0,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        data: ɵ1,
                        canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerGuard"]],
                        component: _course_module_overview_course_module_overview_page__WEBPACK_IMPORTED_MODULE_5__["CourseModuleOverviewPage"],
                        children: [
                            {
                                path: '',
                                canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_2__["PageHitGuard"]],
                                component: _testing__WEBPACK_IMPORTED_MODULE_12__["EmptyComponent"],
                            },
                            {
                                path: 'add-announcement',
                                component: _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_1__["AnnouncementEditPage"],
                                canActivate: [
                                    _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerGuard"],
                                    _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_2__["PageHitGuard"],
                                    _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_4__["StudentRedirectGuard"],
                                ],
                                data: ɵ2,
                                resolve: {
                                    parentAccess: _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_6__["AccessRightsResolve"],
                                },
                            },
                            {
                                path: 'lessons',
                                canLoad: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerGuard"]],
                                data: ɵ3,
                                loadChildren: ɵ4,
                            },
                            {
                                path: 'setup',
                                loadChildren: ɵ5,
                            },
                            {
                                path: 'bulk/edit',
                                loadChildren: ɵ6,
                            },
                            {
                                path: 'semester-feedback',
                                loadChildren: ɵ7,
                            },
                        ],
                    },
                    {
                        path: 'statistics',
                        loadChildren: ɵ8,
                    },
                    {
                        path: 'lessons',
                        canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerGuard"]],
                        data: ɵ9,
                        loadChildren: ɵ10,
                    },
                ],
            },
            {
                path: 'settings',
                component: _testing__WEBPACK_IMPORTED_MODULE_12__["EmptyComponent"],
                canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_2__["PageHitGuard"], _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_4__["StudentRedirectGuard"]],
                data: ɵ11,
                resolve: {
                    departments: _course_module_departments_resolve__WEBPACK_IMPORTED_MODULE_9__["DepartmentsResolve"],
                    faculties: _course_module_faculties_resolve__WEBPACK_IMPORTED_MODULE_10__["FacultiesResolve"],
                    courseModule: _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_8__["CourseModuleResolve"],
                },
                children: [
                    {
                        path: '',
                        loadChildren: ɵ12,
                    },
                    {
                        path: 'edit-module',
                        loadChildren: ɵ13,
                    },
                ],
            },
            {
                path: 'announcements',
                loadChildren: ɵ14,
            },
            {
                path: 'details',
                loadChildren: ɵ15,
            },
            {
                path: 'chat',
                loadChildren: ɵ16,
            },
            {
                path: 'forum',
                loadChildren: ɵ17,
            },
            {
                path: 'files',
                loadChildren: ɵ18,
            },
            {
                path: 'attendance',
                loadChildren: ɵ19,
                canActivate: [_core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_4__["StudentRedirectGuard"]],
            },
            {
                path: 'groups',
                loadChildren: ɵ20,
            },
            {
                path: 'multimedia',
                loadChildren: ɵ21,
            },
            {
                path: 'poll',
                loadChildren: ɵ22,
            },
            {
                path: 'web-lectures',
                loadChildren: ɵ23,
            },
            {
                path: 'consultation',
                loadChildren: ɵ24,
            },
            {
                path: 'survey',
                loadChildren: ɵ25,
            },
            {
                path: 'evaluation',
                loadChildren: ɵ26,
            },
            {
                path: 'gradebook',
                loadChildren: ɵ27,
            },
            {
                path: 'quiz',
                loadChildren: ɵ28,
            },
            {
                path: 'lti',
                loadChildren: ɵ29,
            },
            {
                path: 'conferencing',
                loadChildren: ɵ30,
            },
            {
                path: 'task',
                loadChildren: ɵ31,
            },
            {
                path: 'tagreport',
                loadChildren: ɵ32,
            },
            {
                path: 'scorm',
                loadChildren: ɵ33,
            },
            {
                path: 'feedback',
                loadChildren: ɵ34,
            },
        ],
    },
];
var CourseModuleViewRoutingModule = /** @class */ (function () {
    function CourseModuleViewRoutingModule() {
    }
    return CourseModuleViewRoutingModule;
}());




/***/ }),

/***/ "./src/app/course-module-view/course-module-view.module.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/course-module-view/course-module-view.module.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: CourseModuleViewModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleViewModuleNgFactory", function() { return CourseModuleViewModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _course_module_view_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-module-view.module */ "./src/app/course-module-view/course-module-view.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _course_module_view_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-module-view.page.ngfactory */ "./src/app/course-module-view/course-module-view.page.ngfactory.js");
/* harmony import */ var _course_module_overview_course_module_overview_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-module-overview/course-module-overview.page.ngfactory */ "./src/app/course-module-overview/course-module-overview.page.ngfactory.js");
/* harmony import */ var _testing_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testing/index.ngfactory */ "./src/app/testing/index.ngfactory.js");
/* harmony import */ var _announcement_announcement_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../announcement/announcement-edit.page.ngfactory */ "./src/app/announcement/announcement-edit.page.ngfactory.js");
/* harmony import */ var _shared_ngui_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime-picker.component.ngfactory */ "./src/app/shared/ngui-datetime-picker/datetime-picker.component.ngfactory.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _announcement_announcement_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../announcement/announcement-list.page.ngfactory */ "./src/app/announcement/announcement-list.page.ngfactory.js");
/* harmony import */ var _announcement_announcement_list_active_page_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../announcement/announcement-list-active.page.ngfactory */ "./src/app/announcement/announcement-list-active.page.ngfactory.js");
/* harmony import */ var _announcement_announcement_view_page_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../announcement/announcement-view.page.ngfactory */ "./src/app/announcement/announcement-view.page.ngfactory.js");
/* harmony import */ var _announcement_announcement_list_archived_page_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../announcement/announcement-list-archived.page.ngfactory */ "./src/app/announcement/announcement-list-archived.page.ngfactory.js");
/* harmony import */ var _task_task_report_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../task/task-report-list.page.ngfactory */ "./src/app/task/task-report-list.page.ngfactory.js");
/* harmony import */ var _task_task_report_reminder_page_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../task/task-report-reminder.page.ngfactory */ "./src/app/task/task-report-reminder.page.ngfactory.js");
/* harmony import */ var _task_task_report_view_page_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../task/task-report-view.page.ngfactory */ "./src/app/task/task-report-view.page.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-dragula/components/dragula.provider */ "./node_modules/ng2-dragula/components/dragula.provider.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime */ "./src/app/shared/ngui-datetime-picker/datetime.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-katex */ "./node_modules/ng-katex/fesm5/ng-katex.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/tool-layout.component */ "./src/app/shared/tool-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./course-module-view-routing.module */ "./src/app/course-module-view/course-module-view-routing.module.ts");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-dragula/components/dragular.module */ "./node_modules/ng2-dragula/components/dragular.module.js");
/* harmony import */ var ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../shared/ngui-datetime-picker/datetime-picker.module */ "./src/app/shared/ngui-datetime-picker/datetime-picker.module.ts");
/* harmony import */ var ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-treeview/src/treeview.module */ "./node_modules/ngx-treeview/src/treeview.module.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../announcement/announcement.routing */ "./src/app/announcement/announcement.routing.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var ng2_ckeditor_lib_src_ckeditor_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng2-ckeditor/lib/src/ckeditor.module */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js");
/* harmony import */ var ng2_ckeditor_lib_src_ckeditor_module__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor_lib_src_ckeditor_module__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _ck_editor_ck_editor_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../ck-editor/ck-editor.module */ "./src/app/ck-editor/ck-editor.module.ts");
/* harmony import */ var _announcement_announcement_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../announcement/announcement.module */ "./src/app/announcement/announcement.module.ts");
/* harmony import */ var _task_task_routing__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../task/task.routing */ "./src/app/task/task.routing.ts");
/* harmony import */ var _task_task_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../task/task.module */ "./src/app/task/task.module.ts");
/* harmony import */ var _lesson_select_lesson_select_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../lesson-select/lesson-select.module */ "./src/app/lesson-select/lesson-select.module.ts");
/* harmony import */ var _module_announcements_module_announcements_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../module-announcements/module-announcements.module */ "./src/app/module-announcements/module-announcements.module.ts");
/* harmony import */ var _module_promo_video_module_promo_video_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../module-promo-video/module-promo-video.module */ "./src/app/module-promo-video/module-promo-video.module.ts");
/* harmony import */ var _module_feedback_module_feedback_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../module-feedback/module-feedback.module */ "./src/app/module-feedback/module-feedback.module.ts");
/* harmony import */ var _module_summary_module_summary_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../module-summary/module-summary.module */ "./src/app/module-summary/module-summary.module.ts");
/* harmony import */ var _files_pending_download_files_pending_download_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../files-pending-download/files-pending-download.module */ "./src/app/files-pending-download/files-pending-download.module.ts");
/* harmony import */ var _timetable_timetable_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../timetable/timetable.module */ "./src/app/timetable/timetable.module.ts");
/* harmony import */ var _course_module_overview_course_module_overview_routing_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../course-module-overview/course-module-overview-routing.module */ "./src/app/course-module-overview/course-module-overview-routing.module.ts");
/* harmony import */ var _course_module_overview_course_module_overview_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../course-module-overview/course-module-overview.module */ "./src/app/course-module-overview/course-module-overview.module.ts");
/* harmony import */ var _course_module_tool_course_module_tool_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../course-module-tool/course-module-tool.module */ "./src/app/course-module-tool/course-module-tool.module.ts");
/* harmony import */ var _course_module_view_page__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./course-module-view.page */ "./src/app/course-module-view/course-module-view.page.ts");
/* harmony import */ var _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../course-module/course-module.resolve */ "./src/app/course-module/course-module.resolve.ts");
/* harmony import */ var _course_module_course_module_tools_resolve__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../course-module/course-module-tools.resolve */ "./src/app/course-module/course-module-tools.resolve.ts");
/* harmony import */ var _lti_lti_apps_resolve__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../lti/lti-apps.resolve */ "./src/app/lti/lti-apps.resolve.ts");
/* harmony import */ var _core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../core/route-spinner.guard */ "./src/app/core/route-spinner.guard.ts");
/* harmony import */ var _course_module_overview_course_module_overview_page__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../course-module-overview/course-module-overview.page */ "./src/app/course-module-overview/course-module-overview.page.ts");
/* harmony import */ var _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../core/page-hit.guard */ "./src/app/core/page-hit.guard.ts");
/* harmony import */ var _testing_index__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../testing/index */ "./src/app/testing/index.ts");
/* harmony import */ var _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../announcement/announcement-edit.page */ "./src/app/announcement/announcement-edit.page.ts");
/* harmony import */ var _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../core/student-redirect-guard.service */ "./src/app/core/student-redirect-guard.service.ts");
/* harmony import */ var _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../course-module/access-rights.resolve */ "./src/app/course-module/access-rights.resolve.ts");
/* harmony import */ var _course_module_departments_resolve__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../course-module/departments.resolve */ "./src/app/course-module/departments.resolve.ts");
/* harmony import */ var _course_module_faculties_resolve__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../course-module/faculties.resolve */ "./src/app/course-module/faculties.resolve.ts");
/* harmony import */ var _announcement_announcement_list_page__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../announcement/announcement-list.page */ "./src/app/announcement/announcement-list.page.ts");
/* harmony import */ var _announcement_announcement_list_active_page__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../announcement/announcement-list-active.page */ "./src/app/announcement/announcement-list-active.page.ts");
/* harmony import */ var _course_module_announcements_resolve__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../course-module/announcements.resolve */ "./src/app/course-module/announcements.resolve.ts");
/* harmony import */ var _announcement_announcement_view_page__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../announcement/announcement-view.page */ "./src/app/announcement/announcement-view.page.ts");
/* harmony import */ var _announcement_announcement_resolve__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../announcement/announcement.resolve */ "./src/app/announcement/announcement.resolve.ts");
/* harmony import */ var _course_module_parent_access_rights_resolve__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../course-module/parent-access-rights.resolve */ "./src/app/course-module/parent-access-rights.resolve.ts");
/* harmony import */ var _announcement_announcement_list_archived_page__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../announcement/announcement-list-archived.page */ "./src/app/announcement/announcement-list-archived.page.ts");
/* harmony import */ var _course_module_archived_announcements_resolve__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../course-module/archived-announcements.resolve */ "./src/app/course-module/archived-announcements.resolve.ts");
/* harmony import */ var _task_task_report_list_page__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../task/task-report-list.page */ "./src/app/task/task-report-list.page.ts");
/* harmony import */ var _task_task_resolve__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../task/task.resolve */ "./src/app/task/task.resolve.ts");
/* harmony import */ var _task_task_report_reminder_page__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../task/task-report-reminder.page */ "./src/app/task/task-report-reminder.page.ts");
/* harmony import */ var _task_task_report_view_page__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../task/task-report-view.page */ "./src/app/task/task-report-view.page.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









































































var CourseModuleViewModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_course_module_view_module__WEBPACK_IMPORTED_MODULE_1__["CourseModuleViewModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _course_module_view_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CourseModuleViewPageNgFactory"], _course_module_overview_course_module_overview_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CourseModuleOverviewPageNgFactory"], _testing_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["EmptyComponentNgFactory"], _announcement_announcement_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AnnouncementEditPageNgFactory"], _shared_ngui_datetime_picker_datetime_picker_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["NguiDatetimePickerComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵwNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵxNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵnNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ɵtNgFactory"], _announcement_announcement_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AnnouncementListPageNgFactory"], _announcement_announcement_list_active_page_ngfactory__WEBPACK_IMPORTED_MODULE_10__["AnnouncementListActivePageNgFactory"], _announcement_announcement_view_page_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AnnouncementViewPageNgFactory"], _announcement_announcement_list_archived_page_ngfactory__WEBPACK_IMPORTED_MODULE_12__["AnnouncementListArchivedPageNgFactory"], _task_task_report_list_page_ngfactory__WEBPACK_IMPORTED_MODULE_13__["TaskReportListPageNgFactory"], _task_task_report_reminder_page_ngfactory__WEBPACK_IMPORTED_MODULE_14__["TaskReportReminderPageNgFactory"], _task_task_report_view_page_ngfactory__WEBPACK_IMPORTED_MODULE_15__["TaskReportViewPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_18__["DragulaService"], ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_18__["DragulaService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_19__["NguiDatetime"], _shared_ngui_datetime_picker_datetime__WEBPACK_IMPORTED_MODULE_19__["NguiDatetime"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["ɵy"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_katex__WEBPACK_IMPORTED_MODULE_21__["ɵa"], ng_katex__WEBPACK_IMPORTED_MODULE_21__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthStorage"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["ValidationHandler"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["NullValidationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["UrlHelperService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["UrlHelperService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthLogger"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["ɵa"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["JwksValidationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthStorage"]], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["ValidationHandler"]], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["AuthConfig"]], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["UrlHelperService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthLogger"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["ɵa"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthResourceServerErrorHandler"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthNoopResourceServerErrorHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"], function (p0_0, p0_1, p0_2, p0_3) { return [new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["DefaultOAuthInterceptor"](p0_0, p0_1, p0_2, p0_3)]; }, [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthStorage"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthResourceServerErrorHandler"], [2, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthModuleConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_24__["ToolContentDirective"], _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_24__["ToolContentDirective"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["CourseModuleViewRoutingModule"], _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["CourseModuleViewRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_27__["DragulaModule"], ng2_dragula_components_dragular_module__WEBPACK_IMPORTED_MODULE_27__["DragulaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_28__["NguiDatetimePickerModule"], _shared_ngui_datetime_picker_datetime_picker_module__WEBPACK_IMPORTED_MODULE_28__["NguiDatetimePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_29__["TreeviewModule"], ngx_treeview_src_treeview_module__WEBPACK_IMPORTED_MODULE_29__["TreeviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthModule"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_katex__WEBPACK_IMPORTED_MODULE_21__["KatexModule"], ng_katex__WEBPACK_IMPORTED_MODULE_21__["KatexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_30__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_30__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["AnnouncementRoutingModule"], _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["AnnouncementRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _user_user_module__WEBPACK_IMPORTED_MODULE_32__["UserModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_32__["UserModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_ckeditor_lib_src_ckeditor_module__WEBPACK_IMPORTED_MODULE_33__["CKEditorModule"], ng2_ckeditor_lib_src_ckeditor_module__WEBPACK_IMPORTED_MODULE_33__["CKEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ck_editor_ck_editor_module__WEBPACK_IMPORTED_MODULE_34__["CkEditorModule"], _ck_editor_ck_editor_module__WEBPACK_IMPORTED_MODULE_34__["CkEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _announcement_announcement_module__WEBPACK_IMPORTED_MODULE_35__["AnnouncementModule"], _announcement_announcement_module__WEBPACK_IMPORTED_MODULE_35__["AnnouncementModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _task_task_routing__WEBPACK_IMPORTED_MODULE_36__["TaskRoutingModule"], _task_task_routing__WEBPACK_IMPORTED_MODULE_36__["TaskRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _task_task_module__WEBPACK_IMPORTED_MODULE_37__["TaskModule"], _task_task_module__WEBPACK_IMPORTED_MODULE_37__["TaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _lesson_select_lesson_select_module__WEBPACK_IMPORTED_MODULE_38__["LessonSelectModule"], _lesson_select_lesson_select_module__WEBPACK_IMPORTED_MODULE_38__["LessonSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _module_announcements_module_announcements_module__WEBPACK_IMPORTED_MODULE_39__["ModuleAnnouncementsModule"], _module_announcements_module_announcements_module__WEBPACK_IMPORTED_MODULE_39__["ModuleAnnouncementsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _module_promo_video_module_promo_video_module__WEBPACK_IMPORTED_MODULE_40__["ModulePromoVideoModule"], _module_promo_video_module_promo_video_module__WEBPACK_IMPORTED_MODULE_40__["ModulePromoVideoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _module_feedback_module_feedback_module__WEBPACK_IMPORTED_MODULE_41__["ModuleFeedbackModule"], _module_feedback_module_feedback_module__WEBPACK_IMPORTED_MODULE_41__["ModuleFeedbackModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _module_summary_module_summary_module__WEBPACK_IMPORTED_MODULE_42__["ModuleSummaryModule"], _module_summary_module_summary_module__WEBPACK_IMPORTED_MODULE_42__["ModuleSummaryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _files_pending_download_files_pending_download_module__WEBPACK_IMPORTED_MODULE_43__["FilesPendingDownloadModule"], _files_pending_download_files_pending_download_module__WEBPACK_IMPORTED_MODULE_43__["FilesPendingDownloadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _timetable_timetable_module__WEBPACK_IMPORTED_MODULE_44__["TimetableModule"], _timetable_timetable_module__WEBPACK_IMPORTED_MODULE_44__["TimetableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _course_module_overview_course_module_overview_routing_module__WEBPACK_IMPORTED_MODULE_45__["CourseModuleOverviewRoutingModule"], _course_module_overview_course_module_overview_routing_module__WEBPACK_IMPORTED_MODULE_45__["CourseModuleOverviewRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _course_module_overview_course_module_overview_module__WEBPACK_IMPORTED_MODULE_46__["CourseModuleOverviewModule"], _course_module_overview_course_module_overview_module__WEBPACK_IMPORTED_MODULE_46__["CourseModuleOverviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _course_module_tool_course_module_tool_module__WEBPACK_IMPORTED_MODULE_47__["CourseModuleToolModule"], _course_module_tool_course_module_tool_module__WEBPACK_IMPORTED_MODULE_47__["CourseModuleToolModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _course_module_view_module__WEBPACK_IMPORTED_MODULE_1__["CourseModuleViewModule"], _course_module_view_module__WEBPACK_IMPORTED_MODULE_1__["CourseModuleViewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_25__["ROUTES"], function () { return [[{ path: "", component: _course_module_view_page__WEBPACK_IMPORTED_MODULE_48__["CourseModuleViewPage"], resolve: { courseModule: _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_49__["CourseModuleResolve"], courseModuleTools: _course_module_course_module_tools_resolve__WEBPACK_IMPORTED_MODULE_50__["CourseModuleToolsResolve"], ltiApps: _lti_lti_apps_resolve__WEBPACK_IMPORTED_MODULE_51__["LtiAppsResolve"] }, data: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ0"], children: [{ path: "", children: [{ path: "", data: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ1"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"]], component: _course_module_overview_course_module_overview_page__WEBPACK_IMPORTED_MODULE_53__["CourseModuleOverviewPage"], children: [{ path: "", canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"]], component: _testing_index__WEBPACK_IMPORTED_MODULE_55__["EmptyComponent"] }, { path: "add-announcement", component: _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_56__["AnnouncementEditPage"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"], _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__["StudentRedirectGuard"]], data: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ2"], resolve: { parentAccess: _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_58__["AccessRightsResolve"] } }, { path: "lessons", canLoad: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"]], data: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ3"], loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ4"] }, { path: "setup", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ5"] }, { path: "bulk/edit", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ6"] }, { path: "semester-feedback", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ7"] }] }, { path: "statistics", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ8"] }, { path: "lessons", canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"]], data: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ9"], loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ10"] }] }, { path: "settings", component: _testing_index__WEBPACK_IMPORTED_MODULE_55__["EmptyComponent"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"], _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__["StudentRedirectGuard"]], data: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ11"], resolve: { departments: _course_module_departments_resolve__WEBPACK_IMPORTED_MODULE_59__["DepartmentsResolve"], faculties: _course_module_faculties_resolve__WEBPACK_IMPORTED_MODULE_60__["FacultiesResolve"], courseModule: _course_module_course_module_resolve__WEBPACK_IMPORTED_MODULE_49__["CourseModuleResolve"] }, children: [{ path: "", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ12"] }, { path: "edit-module", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ13"] }] }, { path: "announcements", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ14"] }, { path: "details", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ15"] }, { path: "chat", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ16"] }, { path: "forum", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ17"] }, { path: "files", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ18"] }, { path: "attendance", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ19"], canActivate: [_core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__["StudentRedirectGuard"]] }, { path: "groups", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ20"] }, { path: "multimedia", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ21"] }, { path: "poll", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ22"] }, { path: "web-lectures", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ23"] }, { path: "consultation", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ24"] }, { path: "survey", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ25"] }, { path: "evaluation", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ26"] }, { path: "gradebook", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ27"] }, { path: "quiz", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ28"] }, { path: "lti", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ29"] }, { path: "conferencing", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ30"] }, { path: "task", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ31"] }, { path: "tagreport", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ32"] }, { path: "scorm", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ33"] }, { path: "feedback", loadChildren: _course_module_view_routing_module__WEBPACK_IMPORTED_MODULE_26__["ɵ34"] }] }], [{ path: "", canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"]], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ0"], children: [{ path: "", component: _announcement_announcement_list_page__WEBPACK_IMPORTED_MODULE_61__["AnnouncementListPage"], children: [{ path: "", redirectTo: "active", pathMatch: "full" }, { path: "active", component: _announcement_announcement_list_active_page__WEBPACK_IMPORTED_MODULE_62__["AnnouncementListActivePage"], resolve: { announcements: _course_module_announcements_resolve__WEBPACK_IMPORTED_MODULE_63__["AnnouncementsResolve"] }, canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"]], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ1"], children: [{ path: "new", component: _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_56__["AnnouncementEditPage"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"], _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__["StudentRedirectGuard"]], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ2"], resolve: { parentAccess: _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_58__["AccessRightsResolve"] } }, { path: ":announcementId", component: _announcement_announcement_view_page__WEBPACK_IMPORTED_MODULE_64__["AnnouncementViewPage"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"]], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ3"], resolve: { announcement: _announcement_announcement_resolve__WEBPACK_IMPORTED_MODULE_65__["AnnouncementResolve"] } }, { path: "edit/:announcementId", component: _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_56__["AnnouncementEditPage"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"], _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__["StudentRedirectGuard"]], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ4"], resolve: { announcement: _announcement_announcement_resolve__WEBPACK_IMPORTED_MODULE_65__["AnnouncementResolve"], resourceAccess: _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_58__["AccessRightsResolve"], parentAccess: _course_module_parent_access_rights_resolve__WEBPACK_IMPORTED_MODULE_66__["ParentAccessRightsResolve"] } }, { path: "", canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"]], component: _testing_index__WEBPACK_IMPORTED_MODULE_55__["EmptyComponent"] }] }, { path: "archived", component: _announcement_announcement_list_archived_page__WEBPACK_IMPORTED_MODULE_67__["AnnouncementListArchivedPage"], canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"]], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ5"], resolve: { announcements: _course_module_archived_announcements_resolve__WEBPACK_IMPORTED_MODULE_68__["ArchivedAnnouncementsResolve"] }, children: [{ path: "new", component: _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_56__["AnnouncementEditPage"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"], _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__["StudentRedirectGuard"]], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ6"], resolve: { parentAccess: _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_58__["AccessRightsResolve"] } }, { path: "edit/:announcementId", component: _announcement_announcement_edit_page__WEBPACK_IMPORTED_MODULE_56__["AnnouncementEditPage"], data: _announcement_announcement_routing__WEBPACK_IMPORTED_MODULE_31__["ɵ7"], canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"], _core_student_redirect_guard_service__WEBPACK_IMPORTED_MODULE_57__["StudentRedirectGuard"]], resolve: { announcement: _announcement_announcement_resolve__WEBPACK_IMPORTED_MODULE_65__["AnnouncementResolve"], resourceAccess: _course_module_access_rights_resolve__WEBPACK_IMPORTED_MODULE_58__["AccessRightsResolve"], parentAccess: _course_module_parent_access_rights_resolve__WEBPACK_IMPORTED_MODULE_66__["ParentAccessRightsResolve"] } }] }] }] }], [{ path: "", canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"], _core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"]], data: _task_task_routing__WEBPACK_IMPORTED_MODULE_36__["ɵ0"], component: _task_task_report_list_page__WEBPACK_IMPORTED_MODULE_69__["TaskReportListPage"], children: [{ path: "reminder/:taskId", canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"]], data: _task_task_routing__WEBPACK_IMPORTED_MODULE_36__["ɵ1"], resolve: { task: _task_task_resolve__WEBPACK_IMPORTED_MODULE_70__["TaskResolve"] }, component: _task_task_report_reminder_page__WEBPACK_IMPORTED_MODULE_71__["TaskReportReminderPage"] }] }, { path: ":taskId", canActivate: [_core_route_spinner_guard__WEBPACK_IMPORTED_MODULE_52__["RouteSpinnerGuard"]], data: _task_task_routing__WEBPACK_IMPORTED_MODULE_36__["ɵ2"], resolve: { task: _task_task_resolve__WEBPACK_IMPORTED_MODULE_70__["TaskResolve"] }, component: _task_task_report_view_page__WEBPACK_IMPORTED_MODULE_72__["TaskReportViewPage"], children: [{ path: "reminder", canActivate: [_core_page_hit_guard__WEBPACK_IMPORTED_MODULE_54__["PageHitGuard"]], component: _task_task_report_reminder_page__WEBPACK_IMPORTED_MODULE_71__["TaskReportReminderPage"] }] }], []]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_22__["OAuthModuleConfig"], null, [])]); });



/***/ }),

/***/ "./src/app/course-module-view/course-module-view.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/course-module-view/course-module-view.module.ts ***!
  \*****************************************************************/
/*! exports provided: CourseModuleViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleViewModule", function() { return CourseModuleViewModule; });
var CourseModuleViewModule = /** @class */ (function () {
    function CourseModuleViewModule() {
    }
    return CourseModuleViewModule;
}());



/***/ }),

/***/ "./src/app/course-module-view/course-module-view.page.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/course-module-view/course-module-view.page.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_CourseModuleViewPage, View_CourseModuleViewPage_0, View_CourseModuleViewPage_Host_0, CourseModuleViewPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CourseModuleViewPage", function() { return RenderType_CourseModuleViewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleViewPage_0", function() { return View_CourseModuleViewPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CourseModuleViewPage_Host_0", function() { return View_CourseModuleViewPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleViewPageNgFactory", function() { return CourseModuleViewPageNgFactory; });
/* harmony import */ var _course_module_view_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-module-view.page.scss.shim.ngstyle */ "./src/app/course-module-view/course-module-view.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tooltip.directive */ "./src/app/shared/tooltip.directive.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/nav-pills.component */ "./src/app/shared/nav-pills.component.ts");
/* harmony import */ var _course_module_tool_course_module_tool_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../course-module-tool/course-module-tool.component.ngfactory */ "./src/app/course-module-tool/course-module-tool.component.ngfactory.js");
/* harmony import */ var _course_module_tool_course_module_tool_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../course-module-tool/course-module-tool.component */ "./src/app/course-module-tool/course-module-tool.component.ts");
/* harmony import */ var _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/spinner.component.ngfactory */ "./src/app/shared/spinner.component.ngfactory.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _shared_nav_pills_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/nav-pills.component.ngfactory */ "./src/app/shared/nav-pills.component.ngfactory.js");
/* harmony import */ var _course_module_view_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./course-module-view.page */ "./src/app/course-module-view/course-module-view.page.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _core_confirm_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/confirm.service */ "./src/app/core/confirm.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_semester_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/semester.service */ "./src/app/core/semester.service.ts");
/* harmony import */ var _lti_lti_app_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lti/lti-app.service */ "./src/app/lti/lti-app.service.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _my_modules_my_modules_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../my-modules/my-modules.service */ "./src/app/my-modules/my-modules.service.ts");
/* harmony import */ var _manager_manager_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../manager/manager.service */ "./src/app/manager/manager.service.ts");
/* harmony import */ var _quiz_quiz_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../quiz/quiz.service */ "./src/app/quiz/quiz.service.ts");
/* harmony import */ var _group_group_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../group/group.service */ "./src/app/group/group.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























var styles_CourseModuleViewPage = [_course_module_view_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CourseModuleViewPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CourseModuleViewPage, data: {} });

function View_CourseModuleViewPage_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "red"], ["routerLink", "settings"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Not Open)"]))], function (_ck, _v) { var currVal_2 = "settings"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleViewPage_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "red"], ["routerLink", "settings"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Not Published)"]))], function (_ck, _v) { var currVal_2 = "settings"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleViewPage_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "red"], ["routerLink", "settings"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Closed)"]))], function (_ck, _v) { var currVal_2 = "settings"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleViewPage_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.courseModule.startDate && _co.moment().isBefore(_co.courseModule.startDate)); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((((!_co.courseModule.publish && _co.courseModule.startDate) && _co.moment().isAfter(_co.courseModule.startDate)) && _co.courseModule.endDate) && _co.moment().isBefore(_co.courseModule.endDate)); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.courseModule.endDate && _co.moment().isAfter(_co.courseModule.endDate)); _ck(_v, 6, 0, currVal_2); }, null); }
function View_CourseModuleViewPage_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ", ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.acadYear; var currVal_1 = _co.courseModule.semesterDisplay; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleViewPage_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" [", "] ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.termDetail.term; var currVal_1 = _co.courseModule.termDetail.description; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_CourseModuleViewPage_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "p", [["class", "hidden-xs acad-year-semester"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.courseModule.termDetail; _ck(_v, 2, 0, currVal_0); var currVal_1 = !!_co.courseModule.termDetail; _ck(_v, 4, 0, currVal_1); }, null); }
function View_CourseModuleViewPage_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Owner"]))], null, null); }
function View_CourseModuleViewPage_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Co-owner"]))], null, null); }
function View_CourseModuleViewPage_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Manager"]))], null, null); }
function View_CourseModuleViewPage_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Read Manager"]))], null, null); }
function View_CourseModuleViewPage_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Class Group)"]))], null, null); }
function View_CourseModuleViewPage_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Guest)"]))], null, null); }
function View_CourseModuleViewPage_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(Auto-Enrolment)"]))], null, null); }
function View_CourseModuleViewPage_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "div", [], null, [[null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Student\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.courseModule.inRoster === "") ? "You are not in any roster." : ""); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.courseModule.inRoster === "") && !_co.courseModule.isMandatory); _ck(_v, 5, 0, currVal_1); var currVal_2 = ((_co.courseModule.inRoster === "GuestRoster") && !_co.courseModule.isMandatory); _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.courseModule.isMandatory; _ck(_v, 9, 0, currVal_3); }, null); }
function View_CourseModuleViewPage_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "sup", [["class", "audit-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Audit"]))], null, null); }
function View_CourseModuleViewPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 31, "header", [["class", "layout-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "a", [["class", "visible-xs"], ["routerLink", "/modules"], ["title", "Back to Your Modules"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "icon", [["name", "close"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 26, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "section visible-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "span", [["tooltipClass", "width-250"]], null, [[null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"], tooltipClass: [1, "tooltipClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 14, "p", [["class", "hidden-xs user-role"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "icon", [["name", "user"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/modules"; _ck(_v, 2, 0, currVal_2); var currVal_3 = "close"; _ck(_v, 4, 0, currVal_3); var currVal_6 = (!_co.courseModule.isStudent && !_co.courseModule.isGuest); _ck(_v, 11, 0, currVal_6); var currVal_7 = ((_co.courseModule.courseName.length > 60) ? _co.courseModule.courseName : null); var currVal_8 = "width-250"; _ck(_v, 13, 0, currVal_7, currVal_8); var currVal_10 = (!_co.courseModule.isCorporateCourse && (!_co.courseModule.termDetail || (!!_co.courseModule.termDetail && (_co.courseModule.termDetail.term !== "9999")))); _ck(_v, 16, 0, currVal_10); var currVal_11 = "user"; _ck(_v, 19, 0, currVal_11); var currVal_12 = (_co.courseModule.isOwner && (_co.courseModule.creatorID === _co.currentUser.id)); _ck(_v, 21, 0, currVal_12); var currVal_13 = (_co.courseModule.isOwner && (_co.courseModule.creatorID !== _co.currentUser.id)); _ck(_v, 23, 0, currVal_13); var currVal_14 = _co.courseModule.isManager; _ck(_v, 25, 0, currVal_14); var currVal_15 = _co.courseModule.isReadManager; _ck(_v, 27, 0, currVal_15); var currVal_16 = _co.courseModule.isStudent; _ck(_v, 29, 0, currVal_16); var currVal_17 = _co.courseModule.isAudit; _ck(_v, 31, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 5).activeText; _ck(_v, 7, 0, currVal_4); var currVal_5 = _co.courseModule.name; _ck(_v, 9, 0, currVal_5); var currVal_9 = _co.getTrucatedText(_co.courseModule.courseName); _ck(_v, 14, 0, currVal_9); }); }
function View_CourseModuleViewPage_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "icon", [["name", "pencil"], ["tooltip", "Edit"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.editGeneral() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"], tooltip: [1, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "Edit"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "pencil"; var currVal_2 = "Edit"; _ck(_v, 2, 0, currVal_1, currVal_2); }, null); }
function View_CourseModuleViewPage_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "a", [["class", "not-visible"], ["pill", ""], ["routerLink", "settings"], ["routerLinkActive", "selected"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[2, 4]], 0, _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_9__["PillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Module Settings "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "icon", [["name", "invisible"], ["tooltip", "This tool is not visible to students"]], null, [[null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"], tooltip: [1, "tooltip"] }, null)], function (_ck, _v) { var currVal_2 = "settings"; _ck(_v, 1, 0, currVal_2); var currVal_3 = "selected"; _ck(_v, 2, 0, currVal_3); var currVal_4 = "This tool is not visible to students"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "invisible"; var currVal_6 = "This tool is not visible to students"; _ck(_v, 9, 0, currVal_5, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_CourseModuleViewPage_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "course-module-tool", [], null, null, null, _course_module_tool_course_module_tool_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CourseModuleToolComponent_0"], _course_module_tool_course_module_tool_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CourseModuleToolComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _course_module_tool_course_module_tool_component__WEBPACK_IMPORTED_MODULE_11__["CourseModuleToolComponent"], [], { tool: [0, "tool"], canEdit: [1, "canEdit"], isEditing: [2, "isEditing"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = (_co.canEdit || _co.courseModule.isReadManager); var currVal_2 = (_co.isEditingGeneral && _co.isEditable(_v.context.$implicit)); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CourseModuleViewPage_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "edit-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancelEditingGeneral() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveGeneral() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], null, null); }
function View_CourseModuleViewPage_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "icon", [["name", "pencil"], ["tooltip", "Edit"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.editMenu() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"], tooltip: [1, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "Edit"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "pencil"; var currVal_2 = "Edit"; _ck(_v, 2, 0, currVal_1, currVal_2); }, null); }
function View_CourseModuleViewPage_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "course-module-tool", [], null, null, null, _course_module_tool_course_module_tool_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CourseModuleToolComponent_0"], _course_module_tool_course_module_tool_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CourseModuleToolComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _course_module_tool_course_module_tool_component__WEBPACK_IMPORTED_MODULE_11__["CourseModuleToolComponent"], [], { tool: [0, "tool"], canEdit: [1, "canEdit"], isEditing: [2, "isEditing"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = (_co.canEdit || _co.courseModule.isReadManager); var currVal_2 = _co.isEditingTools; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CourseModuleViewPage_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "edit-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancelEditingMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], null, null); }
function View_CourseModuleViewPage_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "icon", [["name", "pencil"], ["tooltip", "Edit"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.editOthers() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"], tooltip: [1, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "Edit"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "pencil"; var currVal_2 = "Edit"; _ck(_v, 2, 0, currVal_1, currVal_2); }, null); }
function View_CourseModuleViewPage_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "course-module-tool", [], null, null, null, _course_module_tool_course_module_tool_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CourseModuleToolComponent_0"], _course_module_tool_course_module_tool_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CourseModuleToolComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _course_module_tool_course_module_tool_component__WEBPACK_IMPORTED_MODULE_11__["CourseModuleToolComponent"], [], { tool: [0, "tool"], canEdit: [1, "canEdit"], isEditing: [2, "isEditing"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = (_co.canEdit || _co.courseModule.isReadManager); var currVal_2 = _co.isEditingOthers; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CourseModuleViewPage_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "a", [["class", "ext-tool"], ["pill", ""], ["routerLinkActive", "selected"]], [[8, "hidden", 0], [2, "not-visible", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, [[2, 4]], 0, _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_9__["PillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.isEditingTools ? null : _v.context.$implicit.routerLink); _ck(_v, 1, 0, currVal_4); var currVal_5 = "selected"; _ck(_v, 2, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.canEdit && _v.context.$implicit.disabled); var currVal_1 = _v.context.$implicit.disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_6 = _v.context.$implicit.name; _ck(_v, 6, 0, currVal_6); }); }
function View_CourseModuleViewPage_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.externalTools; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isOthersHidden || (_co.courseModule.isStudent && (_co.courseModule.hiddenMenu && _co.courseModule.hiddenMenu.includes("External Tools")))); _ck(_v, 0, 0, currVal_0); }); }
function View_CourseModuleViewPage_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "edit-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cancelEditingOther() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn btn-primary"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveOthers() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], null, null); }
function View_CourseModuleViewPage_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "h3", [["class", "color-blue"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Others "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (!_co.isEditingOthers && _co.canEdit); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.otherTools; _ck(_v, 6, 0, currVal_2); var currVal_3 = !_co.isEditingOthers; _ck(_v, 8, 0, currVal_3); var currVal_4 = (_co.isEditingOthers && !_co.isLoading); _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isOthersHidden; _ck(_v, 1, 0, currVal_0); }); }
function View_CourseModuleViewPage_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "save-spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleViewPage_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "section", [["class", "main-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], [], null, null)], null, null); }
function View_CourseModuleViewPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { pills: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 36, "aside", [], [[2, "display-fixed", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 33, "nav-pills", [["orientation", "vertical"]], [[2, "open", null], [2, "horizontal", null], [2, "vertical", null]], null, null, _shared_nav_pills_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_NavPillsComponent_0"], _shared_nav_pills_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_NavPillsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, [[1, 4], ["pills", 4]], 1, _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_9__["NavPillsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { orientation: [0, "orientation"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 3, "h3", [["class", "color-blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" General "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 7, "a", [["pill", ""], ["routerLink", "."], ["routerLinkActive", "selected"]], [[2, "overview-selected", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, [[2, 4]], 0, _shared_nav_pills_component__WEBPACK_IMPORTED_MODULE_9__["PillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Module Overview"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CourseModuleViewPage_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CourseModuleViewPage_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CourseModuleViewPage_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 3, "h3", [["class", "color-blue"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Tools "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CourseModuleViewPage_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CourseModuleViewPage_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 0, "div", [["class", "margin-bottom-10"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CourseModuleViewPage_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_CourseModuleViewPage_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CourseModuleViewPage_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "section", [["class", "main-content"]], [[8, "hidden", 0], [2, "block", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 16777216, null, null, 1, "router-outlet", [], null, [[null, "activate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("activate" === en)) {
        var pd_0 = (_co.routeActivate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, { activateEvents: "activate" })], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.courseModule && !_co.isLoading); _ck(_v, 3, 0, currVal_1); var currVal_5 = "vertical"; _ck(_v, 5, 0, currVal_5); var currVal_6 = (!_co.isEditingGeneral && _co.canEdit); _ck(_v, 10, 0, currVal_6); var currVal_10 = "."; _ck(_v, 12, 0, currVal_10); var currVal_11 = _ck(_v, 16, 0, true); var currVal_12 = "selected"; _ck(_v, 13, 0, currVal_11, currVal_12); var currVal_13 = (_co.courseModule.access.accessSettingsUpdate || _co.courseModule.isReadManager); _ck(_v, 20, 0, currVal_13); var currVal_14 = _co.generalTools; _ck(_v, 22, 0, currVal_14); var currVal_15 = (_co.isEditingGeneral && !_co.isLoading); _ck(_v, 24, 0, currVal_15); var currVal_17 = (!_co.isEditingTools && _co.canEdit); _ck(_v, 28, 0, currVal_17); var currVal_18 = _co.menuTools; _ck(_v, 30, 0, currVal_18); var currVal_19 = (_co.isEditingTools && !_co.isLoading); _ck(_v, 32, 0, currVal_19); var currVal_21 = _co.isLtiAvaliable; _ck(_v, 35, 0, currVal_21); var currVal_22 = _co.isLoading; _ck(_v, 37, 0, currVal_22); var currVal_23 = _co.isLoadingDetails; _ck(_v, 39, 0, currVal_23); _ck(_v, 42, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isQuizPage; _ck(_v, 1, 0, currVal_0); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).isOpen; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).orientation === "horizontal"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).orientation === "vertical"); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); var currVal_7 = (_co.isLearningFlow || _co.isStatistics); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_7, currVal_8, currVal_9); var currVal_16 = _co.isToolsHidden; _ck(_v, 25, 0, currVal_16); var currVal_20 = !_co.isOthersHidden; _ck(_v, 33, 0, currVal_20); var currVal_24 = _co.isLoadingDetails; var currVal_25 = !_co.isLoadingDetails; _ck(_v, 40, 0, currVal_24, currVal_25); }); }
function View_CourseModuleViewPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_CourseModuleViewPage_0, RenderType_CourseModuleViewPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _course_module_view_page__WEBPACK_IMPORTED_MODULE_15__["CourseModuleViewPage"], [_user_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_17__["RouteSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_18__["CourseModuleService"], _core_confirm_service__WEBPACK_IMPORTED_MODULE_19__["ConfirmService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_20__["ErrorHandlerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _core_semester_service__WEBPACK_IMPORTED_MODULE_21__["SemesterService"], _lti_lti_app_service__WEBPACK_IMPORTED_MODULE_22__["LtiAppService"], _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_23__["SnackBarService"], _my_modules_my_modules_service__WEBPACK_IMPORTED_MODULE_24__["MyModulesService"], _manager_manager_service__WEBPACK_IMPORTED_MODULE_25__["ManagerService"], _quiz_quiz_service__WEBPACK_IMPORTED_MODULE_26__["QuizService"], _group_group_service__WEBPACK_IMPORTED_MODULE_27__["GroupService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CourseModuleViewPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _course_module_view_page__WEBPACK_IMPORTED_MODULE_15__["CourseModuleViewPage"], View_CourseModuleViewPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/course-module-view/course-module-view.page.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/course-module-view/course-module-view.page.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
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
var styles = ["@charset \"UTF-8\";\n\n\n\n.layout-header[_ngcontent-%COMP%] {\n  display: none; }\nh3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-top: 0.5em;\n  margin-top: 3em;\n  margin-bottom: 1em;\n  color: #333333; }\n@media (min-width: 768px) and (max-width: 1199px) {\n  [_nghost-%COMP%] {\n    \n    height: 100%;\n    flex: 1 1 auto;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column; }\n  aside[_ngcontent-%COMP%], .layout-header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2.08333333vw 4.16666667vw; }\n    aside[_ngcontent-%COMP%]     .icon-fill, .layout-header[_ngcontent-%COMP%]     .icon-fill {\n      fill: #002970 !important; }\n    aside[_ngcontent-%COMP%]     .icon-stroke, .layout-header[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: #002970 !important; }\n  aside[_ngcontent-%COMP%] {\n    flex: 0 0 auto; }\n  aside[_ngcontent-%COMP%]    > .layout-header[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n    padding: 0; }\n  .main-content[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    -webkit-flex: 1 1 auto;\n    position: relative;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n     }\n    .main-content.modal-open[_ngcontent-%COMP%] {\n      -webkit-overflow-scrolling: auto; } }\n@media (max-width: 991px) {\n  [_nghost-%COMP%] {\n    flex-direction: column; }\n    [_nghost-%COMP%]   nav[_ngcontent-%COMP%] {\n      flex: 0 0 auto; }\n    [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n      flex: 1 1 auto; }\n  .reveal-main-nav[_nghost-%COMP%]   .catcher[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; } }\n@media not all and (min-resolution: 0.001dpcm) {\n  @supports (-webkit-appearance: none) {\n    [_nghost-%COMP%] {\n      overflow-y: inherit !important; } } }\n@media (min-width: 1200px) {\n  [_nghost-%COMP%] {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: row;\n    overflow-y: hidden;\n    z-index: 95;\n    -webkit-overflow-scrolling: touch;\n     }\n  nav[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    \n    width: 16.66666667vw; }\n  spinner[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%); }\n  .module-header-wrapper[_ngcontent-%COMP%] {\n    background: #f8f8f8; }\n  aside[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 20.83333333vw;\n    background: white;\n    padding: 2.08333333vw 4.16666667vw;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n     } }\n@media print and (min-width: 1200px) {\n    aside[_ngcontent-%COMP%] {\n      display: none; } }\n@media (min-width: 1200px) {\n    aside[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin-bottom: 2.08333333vw; }\n    aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n      display: block;\n      padding: 0; }\n  .layout-header[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    background: white;\n    padding: 2.08333333vw 4.16666667vw; } }\n@media print and (min-width: 1200px) {\n    .layout-header[_ngcontent-%COMP%] {\n      display: none; } }\n@media (min-width: 1200px) {\n    .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin-bottom: 2.08333333vw; }\n  .main-content[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    overflow-y: scroll;\n    position: relative;\n    background: #f8f8f8; } }\n@media (max-width: 767px) {\n  [_nghost-%COMP%] {\n    background: #f8f8f8;\n    z-index: 95;\n    min-height: 100vh;\n    transition: transform 0.3s ease-out;\n    transform-origin: 0% 50vh;\n    transition-delay: 0.2s; } }\n@media (max-width: 767px) and (max-width: 767px) {\n    [_nghost-%COMP%] {\n      position: relative;\n      z-index: 91;\n      min-height: 100vh;\n      display: block; } }\n@media (max-width: 767px) {\n    .reveal-main-nav[_nghost-%COMP%] {\n      overflow: hidden;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      transform: translateX(66%) scale(0.85) rotate(8deg);\n      transform-origin: 50% 100vh; }\n    [_nghost-%COMP%]   .main-content[_ngcontent-%COMP%] {\n      overflow: hidden;\n      position: relative;\n      padding-top: 70px; }\n  .layout-header[_ngcontent-%COMP%] {\n    padding: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background: #002970;\n    color: white;\n    height: 70px;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    z-index: 100;\n    padding: 1.04166667vw 0; }\n    .layout-header[_ngcontent-%COMP%]     .icon-fill {\n      fill: white !important; }\n    .layout-header[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: white !important; }\n    .layout-header[_ngcontent-%COMP%]    \u00A0a {\n      padding: 4.16666667vw; }\n    .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 100%;\n      text-align: center;\n      pointer-events: none;\n      top: 30px; }\n    .layout-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n      margin-left: 4.16666667vw; }\n  aside[_ngcontent-%COMP%] {\n    padding: 0;\n    position: fixed;\n    z-index: 100;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background: #002970;\n    height: 70px; }\n    aside[_ngcontent-%COMP%]    \u00A0a {\n      padding: 4.16666667vw; }\n    aside[_ngcontent-%COMP%]     .icon-fill {\n      fill: white !important; }\n    aside[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: white !important; }\n  h1[_ngcontent-%COMP%] {\n    color: white;\n    font-weight: 400;\n    line-height: 0.5em;\n    font-size: 18px;\n    top: 0px; }\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 70px;\n    min-height: 100vh; }\n    .main-content.loading[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 100 !important; } }\n@media print {\n  aside[_ngcontent-%COMP%], .layout-header[_ngcontent-%COMP%] {\n    display: none; } }\n\n\n\na[pill][_ngcontent-%COMP%] {\n  position: relative;\n  height: 35px; }\na[pill].not-visible[_ngcontent-%COMP%] {\n    color: #909090; }\na[pill][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    float: right; }\na[pill][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%]     .icon-fill {\n      fill: #909090 !important; }\na[pill][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: #909090 !important; }\na[pill][_ngcontent-%COMP%]   icon[name=eye][_ngcontent-%COMP%]     .icon-fill {\n      fill: #5cb85c !important; }\na[pill][_ngcontent-%COMP%]   icon[name=eye][_ngcontent-%COMP%]     .icon-stroke {\n      stroke: #5cb85c !important; }\n.block[_ngcontent-%COMP%] {\n  display: block !important; }\n.main-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  min-height: 85vh; }\n.audit-text[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  padding: 8px;\n  border-radius: 3px; }\n@media (min-width: 768px) and (max-width: 1199px) {\n  .main-content[_ngcontent-%COMP%] {\n    overflow-y: auto;\n    min-height: 45vh; } }\n.main-content[_ngcontent-%COMP%]   spinner[_ngcontent-%COMP%] {\n  margin-top: 20px; }\n.edx-name[_ngcontent-%COMP%] {\n  text-transform: none; }\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  line-height: 26px; }\n.color-blue[_ngcontent-%COMP%] {\n  color: #002970 !important; }\n@media (max-width: 767px) {\n  [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n    padding: 0;\n    text-align: center;\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: space-between; }\n    [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      padding: 0 12.5vw;\n      color: white;\n      font-weight: 400;\n      line-height: 0.5em;\n      font-size: 18px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      position: absolute;\n      width: 100%;\n      pointer-events: none;\n      top: 50%;\n      transform: translateY(-50%);\n      left: 0; }\n      [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n        font-size: 12px;\n        line-height: 1em;\n        margin: 0;\n        display: inline; }\n      [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%]:after {\n        display: inline;\n        content: ' \u203A '; }\n      [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    > .section[_ngcontent-%COMP%] {\n        font-size: 16px;\n        font-weight: 600;\n        display: block;\n        margin-bottom: 4px; }\n    [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      margin-bottom: 4px;\n      font-size: 14px;\n      color: white; }\n  [_nghost-%COMP%]   nav-pills[_ngcontent-%COMP%]   a[pill][_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 4.16666667vw; }\n  .ext-tool[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-indent: 14px; } }\n@media (min-width: 768px) {\n  aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   .acad-year-semester[_ngcontent-%COMP%] {\n    margin-top: 10px; }\n  .ext-tool[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-indent: 14px; } }\n@media (min-width: 768px) and (max-width: 1199px) {\n  [_nghost-%COMP%] {\n    overflow: hidden; }\n  aside[_ngcontent-%COMP%] {\n    padding-bottom: 0; }\n    aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n      position: relative;\n      height: auto; } }\n@media print and (min-width: 768px) and (max-width: 1199px) {\n      aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n        display: none; } }\n@media (min-width: 768px) and (max-width: 1199px) {\n      aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n        display: block;\n        font-size: 14px;\n        font-weight: 600;\n        color: #002970; }\n        aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]  {\n          display: inline-flex; }\n          aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]  a.red {\n            color: red; }\n      aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   .acad-year-semester[_ngcontent-%COMP%] {\n        color: #b6b6b6;\n        font-size: 15px;\n        margin-bottom: 0; }\n  nav-pills[_ngcontent-%COMP%]   a[pill][_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 4.16666667vw; }\n  .ext-tool[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-indent: 14px; } }\n@media (min-width: 1200px) {\n  aside[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    padding: 0; }\n    aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n      position: relative;\n      background: white;\n      padding-top: 2.08333333vw;\n      padding-left: 4.16666667vw;\n      padding-right: 2.08333333vw;\n      z-index: 1;\n      overflow: hidden; } }\n@media print and (min-width: 1200px) {\n      aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%] {\n        display: none; } }\n@media (min-width: 1200px) {\n      aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 10px;\n        font-weight: 600;\n        color: #002970; }\n        aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]  {\n          display: inline-flex; }\n          aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]  a.red {\n            color: red; }\n      aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   .acad-year-semester[_ngcontent-%COMP%] {\n        color: #b6b6b6;\n        font-size: 15px;\n        margin-bottom: 0; }\n      aside[_ngcontent-%COMP%]   .layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        margin-bottom: 0; }\n  nav-pills[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0 4.16666667vw 2.08333333vw 4.16666667vw;\n    height: 63vh !important;\n    overflow-y: auto; }\n  .ext-tool[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-indent: 14px; } }\n@media (min-height: 1050px) {\n  nav-pills[_ngcontent-%COMP%] {\n    height: 72vh !important; } }\n.user-role[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #b6b6b6;\n  font-size: 13px;\n  line-height: 42px; }\n.user-role[_ngcontent-%COMP%]     .icon-fill {\n    fill: #b6b6b6 !important; }\n.user-role[_ngcontent-%COMP%]     .icon-stroke {\n    stroke: #b6b6b6 !important; }\n.user-role[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n    margin-right: 5px; }\nnav-pills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n  color: #909090; }\nnav-pills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]     .icon-fill {\n    fill: #909090 !important; }\nnav-pills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]     .icon-stroke {\n    stroke: #909090 !important; }\nnav-pills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n    float: right; }\nnav-pills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 1.5em; }\nnav-pills[_ngcontent-%COMP%]   .edit-wrapper[_ngcontent-%COMP%] {\n  text-align: right; }\nnav-pills[_ngcontent-%COMP%]   .edit-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 8px; }\ndiv.save-spinner[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  position: relative; }\n.overview-selected[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-radius: 3px;\n  color: black;\n  background: #e6e5e5; }\n.display-fixed[_ngcontent-%COMP%] {\n  position: fixed; }\n.margin-bottom-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px; }"];



/***/ }),

/***/ "./src/app/course-module/course-module-tools.resolve.ts":
/*!**************************************************************!*\
  !*** ./src/app/course-module/course-module-tools.resolve.ts ***!
  \**************************************************************/
/*! exports provided: CourseModuleToolsResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleToolsResolve", function() { return CourseModuleToolsResolve; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _course_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CourseModuleToolsResolve = /** @class */ (function () {
    function CourseModuleToolsResolve(courseModuleService) {
        this.courseModuleService = courseModuleService;
    }
    CourseModuleToolsResolve.prototype.resolve = function (route) {
        var id = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findParam"])('moduleId', route);
        return this.courseModuleService.getActiveTools(id).toPromise();
    };
    CourseModuleToolsResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function CourseModuleToolsResolve_Factory() { return new CourseModuleToolsResolve(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_course_module_service__WEBPACK_IMPORTED_MODULE_1__["CourseModuleService"])); }, token: CourseModuleToolsResolve, providedIn: "root" });
    return CourseModuleToolsResolve;
}());



/***/ }),

/***/ "./src/app/course-module/faculties.resolve.ts":
/*!****************************************************!*\
  !*** ./src/app/course-module/faculties.resolve.ts ***!
  \****************************************************/
/*! exports provided: FacultiesResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultiesResolve", function() { return FacultiesResolve; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_faculty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/faculty.service */ "./src/app/core/faculty.service.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var FacultiesResolve = /** @class */ (function () {
    function FacultiesResolve(facultyService, routeSpinnerService, errorHandlerService) {
        this.facultyService = facultyService;
        this.routeSpinnerService = routeSpinnerService;
        this.errorHandlerService = errorHandlerService;
    }
    FacultiesResolve.prototype.resolve = function (route) {
        if (route.data['routeSpinner']) {
            this.routeSpinnerService.start(route.data['routeSpinner']);
        }
        return this.refreshFaculties(route);
    };
    FacultiesResolve.prototype.refreshFaculties = function (route) {
        var _this = this;
        return this.facultyService
            .query(null, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result.data; }))
            .toPromise()
            .catch(function (err) {
            _this.errorHandlerService.handle(err);
            throw err;
        });
    };
    FacultiesResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function FacultiesResolve_Factory() { return new FacultiesResolve(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_faculty_service__WEBPACK_IMPORTED_MODULE_2__["FacultyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_route_spinner_service__WEBPACK_IMPORTED_MODULE_3__["RouteSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerService"])); }, token: FacultiesResolve, providedIn: "root" });
    return FacultiesResolve;
}());



/***/ }),

/***/ "./src/app/lti/lti-apps.resolve.ts":
/*!*****************************************!*\
  !*** ./src/app/lti/lti-apps.resolve.ts ***!
  \*****************************************/
/*! exports provided: LtiAppsResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LtiAppsResolve", function() { return LtiAppsResolve; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _lti_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lti-app.service */ "./src/app/lti/lti-app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var LtiAppsResolve = /** @class */ (function () {
    function LtiAppsResolve(ltiAppService, errorHandlerService) {
        this.ltiAppService = ltiAppService;
        this.errorHandlerService = errorHandlerService;
    }
    LtiAppsResolve.prototype.resolve = function (route) {
        var _this = this;
        var moduleId = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["findParam"])('moduleId', route);
        return this.ltiAppService
            .query(new _utils__WEBPACK_IMPORTED_MODULE_2__["RESTQuery"]({ params: { resID: moduleId } }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (r) { return r.data; }))
            .toPromise()
            .catch(function (err) {
            _this.errorHandlerService.handle(err);
            return null;
        });
    };
    LtiAppsResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function LtiAppsResolve_Factory() { return new LtiAppsResolve(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_lti_app_service__WEBPACK_IMPORTED_MODULE_3__["LtiAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_error_handler_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlerService"])); }, token: LtiAppsResolve, providedIn: "root" });
    return LtiAppsResolve;
}());



/***/ }),

/***/ "./src/app/module-feedback/module-feedback.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/module-feedback/module-feedback.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ModuleFeedbackComponent, View_ModuleFeedbackComponent_0, View_ModuleFeedbackComponent_Host_0, ModuleFeedbackComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ModuleFeedbackComponent", function() { return RenderType_ModuleFeedbackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleFeedbackComponent_0", function() { return View_ModuleFeedbackComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleFeedbackComponent_Host_0", function() { return View_ModuleFeedbackComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleFeedbackComponentNgFactory", function() { return ModuleFeedbackComponentNgFactory; });
/* harmony import */ var _module_feedback_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-feedback.component.scss.shim.ngstyle */ "./src/app/module-feedback/module-feedback.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/moment.pipe */ "./src/app/shared/moment.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-feedback.component */ "./src/app/module-feedback/module-feedback.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ModuleFeedbackComponent = [_module_feedback_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ModuleFeedbackComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ModuleFeedbackComponent, data: {} });

function View_ModuleFeedbackComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "p", [["class", "feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" provided feedback on "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" via "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [".\n"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.creatorName; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.createdDate, "ll")); _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.context.$implicit.sendBy; _ck(_v, 9, 0, currVal_2); }); }
function View_ModuleFeedbackComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_2__["MomentPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End-of-Semester Feedback"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleFeedbackComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.feedbackSender; _ck(_v, 4, 0, currVal_0); }, null); }
function View_ModuleFeedbackComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-feedback", [], null, null, null, View_ModuleFeedbackComponent_0, RenderType_ModuleFeedbackComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _module_feedback_component__WEBPACK_IMPORTED_MODULE_4__["ModuleFeedbackComponent"], [], null, null)], null, null); }
var ModuleFeedbackComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("module-feedback", _module_feedback_component__WEBPACK_IMPORTED_MODULE_4__["ModuleFeedbackComponent"], View_ModuleFeedbackComponent_Host_0, { courseModule: "courseModule" }, {}, []);



/***/ }),

/***/ "./src/app/module-feedback/module-feedback.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/module-feedback/module-feedback.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid #dfdfdf;\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  margin: 0.5em 0px;\n  overflow: hidden;\n  position: relative; }\n[_nghost-%COMP%]:first-child {\n    margin-top: 0em; }\n[_nghost-%COMP%]:last-child {\n    margin-bottom: 0em; }\n.feedback[_ngcontent-%COMP%] {\n  display: block; }"];



/***/ }),

/***/ "./src/app/module-feedback/module-feedback.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/module-feedback/module-feedback.component.ts ***!
  \**************************************************************/
/*! exports provided: ModuleFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleFeedbackComponent", function() { return ModuleFeedbackComponent; });
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
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


var ModuleFeedbackComponent = /** @class */ (function (_super) {
    __extends(ModuleFeedbackComponent, _super);
    function ModuleFeedbackComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModuleFeedbackComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_0__["ComponentBase"]));



/***/ }),

/***/ "./src/app/module-promo-video/module-promo-video.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/module-promo-video/module-promo-video.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_ModulePromoVideoComponent, View_ModulePromoVideoComponent_0, View_ModulePromoVideoComponent_Host_0, ModulePromoVideoComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ModulePromoVideoComponent", function() { return RenderType_ModulePromoVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModulePromoVideoComponent_0", function() { return View_ModulePromoVideoComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModulePromoVideoComponent_Host_0", function() { return View_ModulePromoVideoComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePromoVideoComponentNgFactory", function() { return ModulePromoVideoComponentNgFactory; });
/* harmony import */ var _module_promo_video_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-promo-video.component.scss.shim.ngstyle */ "./src/app/module-promo-video/module-promo-video.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/action.directive */ "./src/app/shared/action.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tooltip.directive */ "./src/app/shared/tooltip.directive.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _shared_list_view_list_view_tools_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/list-view/list-view-tools.component.ngfactory */ "./src/app/shared/list-view/list-view-tools.component.ngfactory.js");
/* harmony import */ var _shared_list_view_list_view_tools_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/list-view/list-view-tools.component */ "./src/app/shared/list-view/list-view-tools.component.ts");
/* harmony import */ var _shared_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/list-view/list-view.component */ "./src/app/shared/list-view/list-view.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/form-group.component.ngfactory */ "./src/app/shared/form-group.component.ngfactory.js");
/* harmony import */ var _shared_form_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/form-group.component */ "./src/app/shared/form-group.component.ts");
/* harmony import */ var _shared_form_label_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/form-label.directive */ "./src/app/shared/form-label.directive.ts");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _module_promo_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./module-promo-video.component */ "./src/app/module-promo-video/module-promo-video.component.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_ModulePromoVideoComponent = [_module_promo_video_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ModulePromoVideoComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ModulePromoVideoComponent, data: {} });

function View_ModulePromoVideoComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["icon", "pencil"], ["tooltip", "Edit"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = ((_co.isEditingVideo = true) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[1, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { icon: [0, "icon"], tooltip: [1, "tooltip"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "pencil"; var currVal_1 = "Edit"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "Edit"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_ModulePromoVideoComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "video"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"]], [[8, "src", 5]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "tools"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "list-view-tools", [["class", "horizontal lg"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).swallowClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_list_view_list_view_tools_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ListViewToolsComponent_0"], _shared_list_view_list_view_tools_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ListViewToolsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 573440, null, 1, _shared_list_view_list_view_tools_component__WEBPACK_IMPORTED_MODULE_7__["ListViewToolsComponent"], [[2, _shared_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_8__["ListViewComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { tools: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModulePromoVideoComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.canEdit; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.videoUrl; _ck(_v, 1, 0, currVal_0); }); }
function View_ModulePromoVideoComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "div", [["class", "video-edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 29, "form", [["class", "form-horizontal"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co._updatePromoVideo() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 19, "form-group", [["controlName", "promoVideo"]], [[2, "has-error", null]], null, null, _shared_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_FormGroupComponent_0"], _shared_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 5357568, null, 2, _shared_form_group_component__WEBPACK_IMPORTED_MODULE_12__["FormGroupComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { controlName: [0, "controlName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { validationMessages: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { label: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 2, "label", [["for", "promoVideo"], ["form-label", ""]], [[2, "control-label", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, [[3, 4]], 0, _shared_form_label_directive__WEBPACK_IMPORTED_MODULE_13__["FormLabelDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Video URL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 1, 6, "div", [["class", "field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "promoVideo"], ["type", "url"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 3, 5, "div", [["class", "extras"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "p", [["class", "help-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Enter a module trailer video URL so that students can preview the course. The video should be short, max. 2-3 minutes. Please publish your video to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "a", [["href", "https://mediaweb.ap.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=fd558212-2fcc-4228-b945-18b01893081b"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["MediaWeb"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 4, "div", [["class", "buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "button", [["class", "btn btn-default"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isEditingVideo = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.form; _ck(_v, 3, 0, currVal_7); var currVal_9 = "promoVideo"; _ck(_v, 7, 0, currVal_9); var currVal_18 = "promoVideo"; _ck(_v, 17, 0, currVal_18); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).showError; _ck(_v, 6, 0, currVal_8); var currVal_10 = true; _ck(_v, 10, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending; _ck(_v, 14, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); }); }
function View_ModulePromoVideoComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "a", [["class", "add-video"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isEditingVideo = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "icon", [["name", "plus"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_15__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Module Trailer"]))], function (_ck, _v) { var currVal_0 = "plus"; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ModulePromoVideoComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModulePromoVideoComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.videoUrl && !_co.isEditingVideo); _ck(_v, 2, 0, currVal_0); }, null); }
function View_ModulePromoVideoComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModulePromoVideoComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModulePromoVideoComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModulePromoVideoComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!!_co.videoUrl && !_co.isEditingVideo); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.isEditingVideo; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.canEdit; _ck(_v, 5, 0, currVal_2); }, null); }
function View_ModulePromoVideoComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-promo-video", [], null, null, null, View_ModulePromoVideoComponent_0, RenderType_ModulePromoVideoComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _module_promo_video_component__WEBPACK_IMPORTED_MODULE_17__["ModulePromoVideoComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"], _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_18__["CourseModuleService"]], null, null)], null, null); }
var ModulePromoVideoComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("module-promo-video", _module_promo_video_component__WEBPACK_IMPORTED_MODULE_17__["ModulePromoVideoComponent"], View_ModulePromoVideoComponent_Host_0, { courseModule: "courseModule" }, { updatePromoVideo: "updatePromoVideo" }, []);



/***/ }),

/***/ "./src/app/module-promo-video/module-promo-video.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/module-promo-video/module-promo-video.component.scss.shim.ngstyle.js ***!
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
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%; }\n.video[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%; }\n.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%; }\n.video[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    right: 10px; }\n.video[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   list-view-tools[_ngcontent-%COMP%]     .tools-wrapper {\n      padding: 5px; }\n.video[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   list-view-tools[_ngcontent-%COMP%]     .menu   .icon-fill {\n      fill: white !important; }\n.video[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   list-view-tools[_ngcontent-%COMP%]     .menu   .icon-stroke {\n      stroke: white !important; }\n.add-video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 45px;\n  margin-bottom: 20px;\n  border: 2px dotted #dfdfdf;\n  border-radius: 3px;\n  text-align: center;\n  height: 100%; }\n.add-video[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n.add-video[_ngcontent-%COMP%]     .icon-fill {\n    fill: #909090 !important; }\n.add-video[_ngcontent-%COMP%]     .icon-stroke {\n    stroke: #909090 !important; }\n.add-video[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px; }\n.add-video[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    color: #909090;\n    text-transform: capitalize;\n    vertical-align: middle;\n    font-size: 14px;\n    font-weight: 600; }\n.add-video[_ngcontent-%COMP%]:hover {\n    text-decoration: none; }\n.add-overview[_ngcontent-%COMP%] {\n  margin-top: 25px; }\n.video-edit[_ngcontent-%COMP%] {\n  border: 1px solid #dfdfdf;\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  margin: 0.5em 0px;\n  overflow: hidden;\n  position: relative; }\n.video-edit[_ngcontent-%COMP%]:first-child {\n    margin-top: 0em; }\n.video-edit[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0em; }\n.video-edit[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    text-align: right; }\n@media (max-width: 767px) {\n  .add-video[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 30px; } }"];



/***/ }),

/***/ "./src/app/module-promo-video/module-promo-video.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/module-promo-video/module-promo-video.component.ts ***!
  \********************************************************************/
/*! exports provided: ModulePromoVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePromoVideoComponent", function() { return ModulePromoVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
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








var ModulePromoVideoComponent = /** @class */ (function (_super) {
    __extends(ModulePromoVideoComponent, _super);
    function ModulePromoVideoComponent(domSanitizer, courseModuleService) {
        var _this = _super.call(this) || this;
        _this.domSanitizer = domSanitizer;
        _this.courseModuleService = courseModuleService;
        _this.updatePromoVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            promoVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_utils__WEBPACK_IMPORTED_MODULE_7__["URLValidator"]])
        });
        _this.courseModuleService.onResourceUpdated
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (m) { return m.id === _this.courseModule.id; })).subscribe(function () {
            _this.isEditingVideo = false;
        });
        return _this;
    }
    Object.defineProperty(ModulePromoVideoComponent.prototype, "isEditingVideo", {
        get: function () {
            return this._isEditingVideo;
        },
        set: function (val) {
            this.form.get('promoVideo').reset(this.courseModule.promoVideo);
            this._isEditingVideo = val;
        },
        enumerable: true,
        configurable: true
    });
    ModulePromoVideoComponent.prototype.ngOnChanges = function (changes) {
        if (changes['courseModule']) {
            this.videoUrl = this.courseModule && this.courseModule.promoVideoEmbedUrl &&
                this.domSanitizer.bypassSecurityTrustResourceUrl(this.courseModule.promoVideoEmbedUrl);
            this.canEdit = this.courseModule.isManager || this.courseModule.isOwner;
        }
    };
    ModulePromoVideoComponent.prototype._updatePromoVideo = function () {
        this.updatePromoVideo.emit(this.form.value.promoVideo);
    };
    return ModulePromoVideoComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_4__["ComponentBase"]));



/***/ }),

/***/ "./src/app/module-summary/module-summary.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/module-summary/module-summary.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_ModuleSummaryComponent, View_ModuleSummaryComponent_0, View_ModuleSummaryComponent_Host_0, ModuleSummaryComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ModuleSummaryComponent", function() { return RenderType_ModuleSummaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleSummaryComponent_0", function() { return View_ModuleSummaryComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleSummaryComponent_Host_0", function() { return View_ModuleSummaryComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleSummaryComponentNgFactory", function() { return ModuleSummaryComponentNgFactory; });
/* harmony import */ var _module_summary_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-summary.component.scss.shim.ngstyle */ "./src/app/module-summary/module-summary.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/action.directive */ "./src/app/shared/action.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tooltip.directive */ "./src/app/shared/tooltip.directive.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _shared_katex_jax_katex_jax_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/katex-jax/katex-jax.component.ngfactory */ "./src/app/shared/katex-jax/katex-jax.component.ngfactory.js");
/* harmony import */ var _shared_katex_jax_katex_jax_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/katex-jax/katex-jax.component */ "./src/app/shared/katex-jax/katex-jax.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_form_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/form-field.component.ngfactory */ "./src/app/shared/form-field.component.ngfactory.js");
/* harmony import */ var _shared_form_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/form-field.component */ "./src/app/shared/form-field.component.ts");
/* harmony import */ var _ck_editor_ck_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ck-editor/ck-editor.component.ngfactory */ "./src/app/ck-editor/ck-editor.component.ngfactory.js");
/* harmony import */ var _ck_editor_ck_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ck-editor/ck-editor.component */ "./src/app/ck-editor/ck-editor.component.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _file_file_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../file/file.service */ "./src/app/file/file.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _shared_form_field_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/form-field.directive */ "./src/app/shared/form-field.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_list_view_list_view_tools_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/list-view/list-view-tools.component.ngfactory */ "./src/app/shared/list-view/list-view-tools.component.ngfactory.js");
/* harmony import */ var _shared_list_view_list_view_tools_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/list-view/list-view-tools.component */ "./src/app/shared/list-view/list-view-tools.component.ts");
/* harmony import */ var _shared_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/list-view/list-view.component */ "./src/app/shared/list-view/list-view.component.ts");
/* harmony import */ var _module_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./module-summary.component */ "./src/app/module-summary/module-summary.component.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var styles_ModuleSummaryComponent = [_module_summary_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ModuleSummaryComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ModuleSummaryComponent, data: {} });

function View_ModuleSummaryComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "action", [["icon", "pencil"], ["tooltip", "Edit"]], null, [[null, "click"], [null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = ((_co.isEditingOverview = true) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[1, 4]], 0, _shared_action_directive__WEBPACK_IMPORTED_MODULE_2__["ActionDirective"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]], { icon: [0, "icon"], tooltip: [1, "tooltip"] }, { click: "click" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null)], function (_ck, _v) { var currVal_0 = "pencil"; var currVal_1 = "Edit"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "Edit"; _ck(_v, 2, 0, currVal_2); }, null); }
function View_ModuleSummaryComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "overview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "katex", [], null, null, null, _shared_katex_jax_katex_jax_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_KatexJaxComponent_0"], _shared_katex_jax_katex_jax_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_KatexJaxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 573440, null, 0, _shared_katex_jax_katex_jax_component__WEBPACK_IMPORTED_MODULE_7__["KatexJaxComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { html: [0, "html"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.courseModule.purpose; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ModuleSummaryComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [["class", "add-overview"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isEditingOverview = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "icon", [["name", "plus"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_10__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Module Overview"]))], function (_ck, _v) { var currVal_0 = "plus"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ModuleSummaryComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "overview-edit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co._updateOverview() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 11, "form-field", [["controlName", "purpose"]], [[2, "has-error", null]], null, null, _shared_form_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_FormFieldComponent_0"], _shared_form_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_FormFieldComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 5357568, null, 1, _shared_form_field_component__WEBPACK_IMPORTED_MODULE_13__["FormFieldComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { controlName: [0, "controlName"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { validationMessages: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 8, "ck-editor", [["form-field", ""], ["formControlName", "purpose"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _ck_editor_ck_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_CkEditorComponent_0"], _ck_editor_ck_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_CkEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 13352960, null, 2, _ck_editor_ck_editor_component__WEBPACK_IMPORTED_MODULE_15__["CkEditorComponent"], ["AppEnvironment", _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _user_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _file_file_service__WEBPACK_IMPORTED_MODULE_17__["FileService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_18__["ErrorHandlerService"], _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_19__["SnackBarService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { toolbarButtons: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { toolbarGroups: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ck_editor_ck_editor_component__WEBPACK_IMPORTED_MODULE_15__["CkEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _shared_form_field_directive__WEBPACK_IMPORTED_MODULE_20__["FormFieldDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "button", [["class", "btn btn-default"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.isEditingOverview = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.form; _ck(_v, 3, 0, currVal_7); var currVal_9 = "purpose"; _ck(_v, 7, 0, currVal_9); _ck(_v, 10, 0); var currVal_17 = "purpose"; _ck(_v, 14, 0, currVal_17); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).showError; _ck(_v, 6, 0, currVal_8); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 9, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); }); }
function View_ModuleSummaryComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleSummaryComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleSummaryComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.courseModule.purpose && !_co.isEditingOverview); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.isEditingOverview; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ModuleSummaryComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "section", [["class", "overview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Module Overview"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "list-view-tools", [["class", "horizontal lg"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).swallowClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_list_view_list_view_tools_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_ListViewToolsComponent_0"], _shared_list_view_list_view_tools_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_ListViewToolsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 573440, null, 1, _shared_list_view_list_view_tools_component__WEBPACK_IMPORTED_MODULE_23__["ListViewToolsComponent"], [[2, _shared_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_24__["ListViewComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { tools: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleSummaryComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleSummaryComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleSummaryComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.canEdit; _ck(_v, 8, 0, currVal_0); var currVal_1 = (!!_co.courseModule.purpose && !_co.isEditingOverview); _ck(_v, 10, 0, currVal_1); var currVal_2 = _co.canEdit; _ck(_v, 12, 0, currVal_2); }, null); }
function View_ModuleSummaryComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-summary", [], null, null, null, View_ModuleSummaryComponent_0, RenderType_ModuleSummaryComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _module_summary_component__WEBPACK_IMPORTED_MODULE_25__["ModuleSummaryComponent"], [_course_module_course_module_service__WEBPACK_IMPORTED_MODULE_26__["CourseModuleService"]], null, null)], null, null); }
var ModuleSummaryComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("module-summary", _module_summary_component__WEBPACK_IMPORTED_MODULE_25__["ModuleSummaryComponent"], View_ModuleSummaryComponent_Host_0, { courseModule: "courseModule" }, { updateOverview: "updateOverview" }, []);



/***/ }),

/***/ "./src/app/module-summary/module-summary.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/module-summary/module-summary.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
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
var styles = [".add-overview[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 45px;\n  border: 2px dotted #dfdfdf;\n  border-radius: 3px;\n  text-align: center; }\n.add-overview[_ngcontent-%COMP%]     .icon-fill {\n    fill: #909090 !important; }\n.add-overview[_ngcontent-%COMP%]     .icon-stroke {\n    stroke: #909090 !important; }\n.add-overview[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px; }\n.add-overview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 30px;\n    color: #909090;\n    text-transform: capitalize;\n    vertical-align: middle;\n    font-size: 14px;\n    font-weight: 600; }\n.add-overview[_ngcontent-%COMP%]:hover {\n    text-decoration: none; }\nlist-view-tools[_ngcontent-%COMP%] {\n  width: auto; }\n.overview[_ngcontent-%COMP%] {\n  text-align: justify; }\n.add-overview[_ngcontent-%COMP%] {\n  margin-top: 25px; }\n.overview-edit[_ngcontent-%COMP%] {\n  border: 1px solid #dfdfdf;\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  margin: 0.5em 0px;\n  overflow: hidden;\n  position: relative; }\n.overview-edit[_ngcontent-%COMP%]:first-child {\n    margin-top: 0em; }\n.overview-edit[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0em; }\n.overview-edit[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    text-align: right; }\nsection.overview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 15px; }\nsection.overview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-right: 20px; }\nsection.overview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   list-view-tools[_ngcontent-%COMP%]     .tools-wrapper {\n    padding: 8px; }\n@media (max-width: 767px) {\n    section.overview[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   list-view-tools[_ngcontent-%COMP%]     .tools-wrapper .menu {\n      padding: 0; } }"];



/***/ }),

/***/ "./src/app/module-summary/module-summary.component.ts":
/*!************************************************************!*\
  !*** ./src/app/module-summary/module-summary.component.ts ***!
  \************************************************************/
/*! exports provided: ModuleSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleSummaryComponent", function() { return ModuleSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
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






var ModuleSummaryComponent = /** @class */ (function (_super) {
    __extends(ModuleSummaryComponent, _super);
    function ModuleSummaryComponent(courseModuleService) {
        var _this = _super.call(this) || this;
        _this.courseModuleService = courseModuleService;
        _this.updateOverview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        _this.courseModuleService.onResourceUpdated
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (m) { return m.id === _this.courseModule.id; })).subscribe(function () {
            _this.isEditingOverview = false;
        });
        return _this;
    }
    Object.defineProperty(ModuleSummaryComponent.prototype, "isEditingOverview", {
        get: function () {
            return this._isEditingOverview;
        },
        set: function (val) {
            this.form.get('purpose').reset(this.courseModule.purpose);
            this._isEditingOverview = val;
        },
        enumerable: true,
        configurable: true
    });
    ModuleSummaryComponent.prototype.ngOnChanges = function (changes) {
        if (changes['courseModule']) {
            this.canEdit = this.courseModule.isManager || this.courseModule.isOwner;
        }
    };
    ModuleSummaryComponent.prototype._updateOverview = function () {
        this.updateOverview.emit(this.form.value.purpose);
    };
    return ModuleSummaryComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_3__["ComponentBase"]));



/***/ }),

/***/ "./src/app/timetable/timetable-exams.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/timetable/timetable-exams.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_TimetableExamsComponent, View_TimetableExamsComponent_0, View_TimetableExamsComponent_Host_0, TimetableExamsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TimetableExamsComponent", function() { return RenderType_TimetableExamsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableExamsComponent_0", function() { return View_TimetableExamsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableExamsComponent_Host_0", function() { return View_TimetableExamsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableExamsComponentNgFactory", function() { return TimetableExamsComponentNgFactory; });
/* harmony import */ var _timetable_exams_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable-exams.component.scss.shim.ngstyle */ "./src/app/timetable/timetable-exams.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/moment.pipe */ "./src/app/shared/moment.pipe.ts");
/* harmony import */ var _timetable_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timetable-modal.component.ngfactory */ "./src/app/timetable/timetable-modal.component.ngfactory.js");
/* harmony import */ var _timetable_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timetable-modal.component */ "./src/app/timetable/timetable-modal.component.ts");
/* harmony import */ var _timetable_exams_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timetable-exams.component */ "./src/app/timetable/timetable-exams.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_TimetableExamsComponent = [_timetable_exams_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TimetableExamsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TimetableExamsComponent, data: {} });

function View_TimetableExamsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ", ", " - ", " (", " Minutes)"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.exam_date, "ddd, DD MMM YYYY")); var currVal_1 = _v.context.$implicit.start_time; var currVal_2 = _v.context.$implicit.end_time; var currVal_3 = _v.context.$implicit.duration; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_TimetableExamsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableExamsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.timetable; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TimetableExamsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["There are ", " examination slots in total"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.timetableModal.open() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See all examination slots"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.timetable.size; _ck(_v, 2, 0, currVal_0); }); }
function View_TimetableExamsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_3__["MomentPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { timetableModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Examinations"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableExamsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableExamsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "timetable-modal", [["title", "Examinations"]], null, null, null, _timetable_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TimetableModalComponent_0"], _timetable_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TimetableModalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 704512, [[1, 4], ["modal", 4]], 0, _timetable_modal_component__WEBPACK_IMPORTED_MODULE_5__["TimetableModalComponent"], [], { examItems: [0, "examItems"], displayModuleCode: [1, "displayModuleCode"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.timetable.size <= 5); _ck(_v, 5, 0, currVal_0); var currVal_1 = (_co.timetable.size > 5); _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.timetable; var currVal_3 = ((_co.courseModule == null) ? null : _co.courseModule.isCrossListed); _ck(_v, 9, 0, currVal_2, currVal_3); }, null); }
function View_TimetableExamsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "timetable-exams", [], null, null, null, View_TimetableExamsComponent_0, RenderType_TimetableExamsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _timetable_exams_component__WEBPACK_IMPORTED_MODULE_6__["TimetableExamsComponent"], [], null, null)], null, null); }
var TimetableExamsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("timetable-exams", _timetable_exams_component__WEBPACK_IMPORTED_MODULE_6__["TimetableExamsComponent"], View_TimetableExamsComponent_Host_0, { timetable: "timetable", courseModule: "courseModule" }, {}, []);



/***/ }),

/***/ "./src/app/timetable/timetable-exams.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/timetable/timetable-exams.component.scss.shim.ngstyle.js ***!
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
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid #dfdfdf;\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  margin: 0.5em 0px;\n  overflow: hidden;\n  position: relative; }\n[_nghost-%COMP%]:first-child {\n    margin-top: 0em; }\n[_nghost-%COMP%]:last-child {\n    margin-bottom: 0em; }\n.timetable-item[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 21px; }"];



/***/ }),

/***/ "./src/app/timetable/timetable-exams.component.ts":
/*!********************************************************!*\
  !*** ./src/app/timetable/timetable-exams.component.ts ***!
  \********************************************************/
/*! exports provided: TimetableExamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableExamsComponent", function() { return TimetableExamsComponent; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
/* harmony import */ var _timetable_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timetable-base.component */ "./src/app/timetable/timetable-base.component.ts");
/* harmony import */ var _timetable_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timetable-modal.component */ "./src/app/timetable/timetable-modal.component.ts");
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




var TimetableExamsComponent = /** @class */ (function (_super) {
    __extends(TimetableExamsComponent, _super);
    function TimetableExamsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timetable = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])();
        return _this;
    }
    return TimetableExamsComponent;
}(_timetable_base_component__WEBPACK_IMPORTED_MODULE_2__["TimetableComponentBase"]));



/***/ }),

/***/ "./src/app/timetable/timetable-modal.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/timetable/timetable-modal.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_TimetableModalComponent, View_TimetableModalComponent_0, View_TimetableModalComponent_Host_0, TimetableModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TimetableModalComponent", function() { return RenderType_TimetableModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableModalComponent_0", function() { return View_TimetableModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableModalComponent_Host_0", function() { return View_TimetableModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableModalComponentNgFactory", function() { return TimetableModalComponentNgFactory; });
/* harmony import */ var _timetable_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable-modal.component.scss.shim.ngstyle */ "./src/app/timetable/timetable-modal.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modal.component.ngfactory */ "./src/app/shared/modal.component.ngfactory.js");
/* harmony import */ var _shared_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modal.component */ "./src/app/shared/modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timetable_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timetable.component.ngfactory */ "./src/app/timetable/timetable.component.ngfactory.js");
/* harmony import */ var _timetable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _timetable_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timetable-modal.component */ "./src/app/timetable/timetable-modal.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_TimetableModalComponent = [_timetable_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TimetableModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TimetableModalComponent, data: {} });

function View_TimetableModalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.codeDisplay; _ck(_v, 1, 0, currVal_0); }); }
function View_TimetableModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "modal", [], null, null, null, _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModalComponent_0"], _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, [[1, 4], ["modal", 4]], 0, _shared_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 5, "modal-header", [], null, null, null, _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModalHeaderComponent_0"], _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModalHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _shared_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Time Table"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_TimetableModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 1, 3, "modal-content", [], null, null, null, _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ModalContentComponent_0"], _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ModalContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _shared_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalContentComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 1, "timetable", [], null, null, null, _timetable_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_TimetableComponent_0"], _timetable_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_TimetableComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 704512, null, 0, _timetable_component__WEBPACK_IMPORTED_MODULE_6__["TimetableComponent"], [], { timetableItems: [0, "timetableItems"], examItems: [1, "examItems"], displayModuleCode: [2, "displayModuleCode"], showDates: [3, "showDates"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !!_co.codeDisplay; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.timetableItems; var currVal_2 = _co.examItems; var currVal_3 = _co.displayModuleCode; var currVal_4 = false; _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
function View_TimetableModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "timetable-modal", [], null, null, null, View_TimetableModalComponent_0, RenderType_TimetableModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _timetable_modal_component__WEBPACK_IMPORTED_MODULE_7__["TimetableModalComponent"], [], null, null)], null, null); }
var TimetableModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("timetable-modal", _timetable_modal_component__WEBPACK_IMPORTED_MODULE_7__["TimetableModalComponent"], View_TimetableModalComponent_Host_0, { timetableItems: "timetableItems", examItems: "examItems", displayModuleCode: "displayModuleCode" }, {}, []);



/***/ }),

/***/ "./src/app/timetable/timetable-modal.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/timetable/timetable-modal.component.scss.shim.ngstyle.js ***!
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
var styles = ["@media (min-width: 768px) {\n  modal[_ngcontent-%COMP%]     .modal-dialog {\n    width: 75%;\n    min-width: 630px; }\n  modal[_ngcontent-%COMP%]     .modal-body {\n    height: 80vh;\n    overflow: hidden; }\n  modal[_ngcontent-%COMP%]     timetable   .timetable {\n    overflow-y: scroll;\n    height: 80vh; } }"];



/***/ }),

/***/ "./src/app/timetable/timetable-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/timetable/timetable-modal.component.ts ***!
  \********************************************************/
/*! exports provided: TimetableModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableModalComponent", function() { return TimetableModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _shared_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modal.component */ "./src/app/shared/modal.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
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





var TimetableModalComponent = /** @class */ (function (_super) {
    __extends(TimetableModalComponent, _super);
    function TimetableModalComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timetableItems = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        _this.examItems = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        _this.displayModuleCode = false;
        _this.header = 'Timetable Slots';
        return _this;
    }
    TimetableModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes['timetableItems'] && changes['timetableItems'].currentValue) {
            if (!this.timetableItems.isEmpty()) {
                var item = this.timetableItems.first();
                this.header = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toTitleCase"])(item.activityText) + " Slots";
                this.codeDisplay = "for " + item.module;
            }
        }
        if (changes['examItems'] && changes['examItems'].currentValue) {
            if (!this.examItems.isEmpty()) {
                var item = this.examItems.first();
                this.header = 'Examination Slots';
                this.codeDisplay = "for " + item.module;
            }
        }
    };
    TimetableModalComponent.prototype.open = function () {
        this.modal.open();
    };
    return TimetableModalComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_2__["ComponentBase"]));



/***/ }),

/***/ "./src/app/timetable/timetable-module-items.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/timetable/timetable-module-items.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_TimetableModuleItemsComponent, View_TimetableModuleItemsComponent_0, View_TimetableModuleItemsComponent_Host_0, TimetableModuleItemsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TimetableModuleItemsComponent", function() { return RenderType_TimetableModuleItemsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableModuleItemsComponent_0", function() { return View_TimetableModuleItemsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableModuleItemsComponent_Host_0", function() { return View_TimetableModuleItemsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableModuleItemsComponentNgFactory", function() { return TimetableModuleItemsComponentNgFactory; });
/* harmony import */ var _timetable_module_items_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable-module-items.component.scss.shim.ngstyle */ "./src/app/timetable/timetable-module-items.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _timetable_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timetable-modal.component.ngfactory */ "./src/app/timetable/timetable-modal.component.ngfactory.js");
/* harmony import */ var _timetable_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timetable-modal.component */ "./src/app/timetable/timetable-modal.component.ts");
/* harmony import */ var _timetable_module_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timetable-module-items.component */ "./src/app/timetable/timetable-module-items.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_TimetableModuleItemsComponent = [_timetable_module_items_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TimetableModuleItemsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TimetableModuleItemsComponent, data: {} });

function View_TimetableModuleItemsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Timetable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["There are ", " ", " slots in total"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.timetableModal.open() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See all timetable slots"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.timeTableSize; var currVal_1 = (_co.courseModule.isStudent ? _co.flatTimetable.toArray()[0].activityText : "timetable"); _ck(_v, 4, 0, currVal_0, currVal_1); }); }
function View_TimetableModuleItemsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["[", "] Week ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ", ", ", ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.modgrp; var currVal_1 = _v.context.$implicit.weekType; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.dayText; var currVal_3 = ((_v.context.$implicit.start_time + "-") + _v.context.$implicit.end_time); var currVal_4 = _v.context.$implicit.room; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }); }
function View_TimetableModuleItemsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getCurrentTimeTableItems(); _ck(_v, 2, 0, currVal_0); }, null); }
function View_TimetableModuleItemsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["[", "] Week ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ", ", ", ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.modgrp; var currVal_1 = _v.context.$implicit.weekType; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.dayText; var currVal_3 = ((_v.context.$implicit.start_time + "-") + _v.context.$implicit.end_time); var currVal_4 = _v.context.$implicit.room; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }); }
function View_TimetableModuleItemsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.expandTimeTable = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See more"]))], null, null); }
function View_TimetableModuleItemsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.expandTimeTable = false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See less"]))], null, null); }
function View_TimetableModuleItemsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getSplicedTimeTable(); _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.expandTimeTable; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.expandTimeTable; _ck(_v, 6, 0, currVal_2); }, null); }
function View_TimetableModuleItemsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "section-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.getCurrentTimeTableItems().length <= 5); _ck(_v, 4, 0, currVal_1); var currVal_2 = (_co.getCurrentTimeTableItems().length > 5); _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.header; _ck(_v, 2, 0, currVal_0); }); }
function View_TimetableModuleItemsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { timetableModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableModuleItemsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "timetable-modal", [["title", "Timetable"]], null, null, null, _timetable_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TimetableModalComponent_0"], _timetable_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TimetableModalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 704512, [[1, 4], ["modal", 4]], 0, _timetable_modal_component__WEBPACK_IMPORTED_MODULE_4__["TimetableModalComponent"], [], { timetableItems: [0, "timetableItems"], displayModuleCode: [1, "displayModuleCode"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.courseModule.isStudent; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.courseModule.isStudent; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.flatTimetable; var currVal_3 = ((_co.courseModule == null) ? null : _co.courseModule.isCrossListed); _ck(_v, 6, 0, currVal_2, currVal_3); }, null); }
function View_TimetableModuleItemsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "timetable-module-items", [], null, null, null, View_TimetableModuleItemsComponent_0, RenderType_TimetableModuleItemsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _timetable_module_items_component__WEBPACK_IMPORTED_MODULE_5__["TimetableModuleItemsComponent"], [], null, null)], null, null); }
var TimetableModuleItemsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("timetable-module-items", _timetable_module_items_component__WEBPACK_IMPORTED_MODULE_5__["TimetableModuleItemsComponent"], View_TimetableModuleItemsComponent_Host_0, { timetable: "timetable", courseModule: "courseModule" }, {}, []);



/***/ }),

/***/ "./src/app/timetable/timetable-module-items.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/timetable/timetable-module-items.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  border: 1px solid #dfdfdf;\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  margin: 0.5em 0px;\n  overflow: hidden;\n  position: relative; }\n[_nghost-%COMP%]:first-child {\n    margin-top: 0em; }\n[_nghost-%COMP%]:last-child {\n    margin-bottom: 0em; }\n.timetable-item[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 21px; }"];



/***/ }),

/***/ "./src/app/timetable/timetable-module-items.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/timetable/timetable-module-items.component.ts ***!
  \***************************************************************/
/*! exports provided: TimetableModuleItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableModuleItemsComponent", function() { return TimetableModuleItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_course_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/course-module */ "./src/app/models/course-module.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _timetable_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timetable-base.component */ "./src/app/timetable/timetable-base.component.ts");
/* harmony import */ var _timetable_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timetable-modal.component */ "./src/app/timetable/timetable-modal.component.ts");
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







var TimetableModuleItemsComponent = /** @class */ (function (_super) {
    __extends(TimetableModuleItemsComponent, _super);
    function TimetableModuleItemsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timetable = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        _this.expandTimeTable = false;
        return _this;
    }
    TimetableModuleItemsComponent.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    TimetableModuleItemsComponent.prototype.getSplicedTimeTable = function () {
        if (this.expandTimeTable) {
            return this.getCurrentTimeTableItems();
        }
        else {
            return this.getCurrentTimeTableItems().splice(0, 5);
        }
    };
    TimetableModuleItemsComponent.prototype.getCurrentTimeTableItems = function () {
        var currentTimeTableItems = this.groupBy(this.flatTimetable, function (value) {
            return [
                value.module,
                value.modgrp,
                value.activityText,
                value.session,
                value.dayText,
                value.weekType,
                value.start_time,
                value.end_time,
                value.room,
            ];
        });
        currentTimeTableItems = currentTimeTableItems.map(function (group) {
            return {
                module: group[0].module,
                modgrp: group[0].modgrp,
                activityText: group[0].activityText,
                session: group[0].session,
                dayText: group[0].dayText,
                start_time: group[0].start_time,
                end_time: group[0].end_time,
                room: group[0].room,
                weekType: group[0].weekType,
                eventdate: underscore__WEBPACK_IMPORTED_MODULE_2__["pluck"](group, 'eventdate')
                    .map(function (date) { return date; })
                    .sort(),
            };
        });
        currentTimeTableItems = underscore__WEBPACK_IMPORTED_MODULE_2__["flatten"](this.groupBy(currentTimeTableItems, function (value) {
            return [value.module, value.modgrp, value.activityText];
        }).map(function (group) {
            return underscore__WEBPACK_IMPORTED_MODULE_2__["flatten"](group);
        }));
        return currentTimeTableItems;
    };
    Object.defineProperty(TimetableModuleItemsComponent.prototype, "timeTableSize", {
        get: function () {
            return this.groupBy(this.flatTimetable, function (value) {
                return [
                    value.module,
                    value.modgrp,
                    value.activityText,
                    value.session,
                    value.dayText,
                    value.weekType,
                    value.start_time,
                    value.end_time,
                    value.room,
                ];
            }).length;
        },
        enumerable: true,
        configurable: true
    });
    TimetableModuleItemsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['timetable'] && changes['timetable'].currentValue) {
            if (!this.timetable.isEmpty()) {
                var item = this.timetable.first();
                this.header = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["toTitleCase"])(item[0].activityText);
            }
        }
    };
    Object.defineProperty(TimetableModuleItemsComponent.prototype, "flatTimetable", {
        get: function () {
            return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(this.timetable.reduce(function (col, arr) { return col.concat(arr); }, []));
        },
        enumerable: true,
        configurable: true
    });
    return TimetableModuleItemsComponent;
}(_timetable_base_component__WEBPACK_IMPORTED_MODULE_5__["TimetableComponentBase"]));



/***/ })

}]);