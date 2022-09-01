(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./src/app/course-module-overview/course-module-overview-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/course-module-overview/course-module-overview-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CourseModuleOverviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleOverviewRoutingModule", function() { return CourseModuleOverviewRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [];
var CourseModuleOverviewRoutingModule = /** @class */ (function () {
    function CourseModuleOverviewRoutingModule() {
    }
    return CourseModuleOverviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/course-module-overview/course-module-overview.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/course-module-overview/course-module-overview.module.ts ***!
  \*************************************************************************/
/*! exports provided: CourseModuleOverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleOverviewModule", function() { return CourseModuleOverviewModule; });
var CourseModuleOverviewModule = /** @class */ (function () {
    function CourseModuleOverviewModule() {
    }
    return CourseModuleOverviewModule;
}());



/***/ }),

/***/ "./src/app/files-pending-download/files-pending-download.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/files-pending-download/files-pending-download.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: RenderType_FilesPendingDownloadComponent, View_FilesPendingDownloadComponent_0, View_FilesPendingDownloadComponent_Host_0, FilesPendingDownloadComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FilesPendingDownloadComponent", function() { return RenderType_FilesPendingDownloadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FilesPendingDownloadComponent_0", function() { return View_FilesPendingDownloadComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FilesPendingDownloadComponent_Host_0", function() { return View_FilesPendingDownloadComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPendingDownloadComponentNgFactory", function() { return FilesPendingDownloadComponentNgFactory; });
/* harmony import */ var _files_pending_download_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files-pending-download.scss.shim.ngstyle */ "./src/app/files-pending-download/files-pending-download.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/spinner.component.ngfactory */ "./src/app/shared/spinner.component.ngfactory.js");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_humanize_file_size_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/humanize-file-size.pipe */ "./src/app/shared/humanize-file-size.pipe.ts");
/* harmony import */ var _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/moment.pipe */ "./src/app/shared/moment.pipe.ts");
/* harmony import */ var _files_pending_download__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./files-pending-download */ "./src/app/files-pending-download/files-pending-download.ts");
/* harmony import */ var _file_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../file/file.service */ "./src/app/file/file.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_FilesPendingDownloadComponent = [_files_pending_download_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FilesPendingDownloadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FilesPendingDownloadComponent, data: {} });

function View_FilesPendingDownloadComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SpinnerComponent_0"], _shared_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], [], null, null)], null, null); }
function View_FilesPendingDownloadComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loadFiles() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show all files not downloaded"]))], null, null); }
function View_FilesPendingDownloadComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["class", "toggle-files hideMsg"], ["style", "flex:2;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.hideMessage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hide Files Message"]))], null, null); }
function View_FilesPendingDownloadComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a", [["class", "toggle-files downloadAll"], ["style", "flex:1;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.downloadAllFiles() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Download All"]))], null, null); }
function View_FilesPendingDownloadComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "infolet-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" You have downloaded all files in this module.\n"]))], null, null); }
function View_FilesPendingDownloadComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "task file"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "task-info file-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "span", [["class", "file-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openFiles(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" (", ")"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Uploaded On "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "small", [["class", "file-modified-date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["on ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 2)], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.fileName; _ck(_v, 4, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.fileSize)); _ck(_v, 5, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _v.context.$implicit.createdDate, "D MMM YYYY h:mm a")); _ck(_v, 11, 0, currVal_2); }); }
function View_FilesPendingDownloadComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilesPendingDownloadComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.files; _ck(_v, 2, 0, currVal_0); }, null); }
function View_FilesPendingDownloadComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_humanize_file_size_pipe__WEBPACK_IMPORTED_MODULE_5__["HumanizeFileSizePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_6__["MomentPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilesPendingDownloadComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "showDownload"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilesPendingDownloadComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilesPendingDownloadComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilesPendingDownloadComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilesPendingDownloadComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FilesPendingDownloadComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 3, 0, currVal_0); var currVal_1 = !_co.displayFiles; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.displayFiles; _ck(_v, 8, 0, currVal_2); var currVal_3 = (_co.displayFiles && ((_co.files == null) ? null : _co.files.size)); _ck(_v, 10, 0, currVal_3); var currVal_4 = ((!_co.isLoading && !((_co.files == null) ? null : _co.files.size)) && _co.displayFiles); _ck(_v, 12, 0, currVal_4); var currVal_5 = ((_co.displayFiles && !_co.isLoading) && ((_co.files == null) ? null : _co.files.size)); _ck(_v, 14, 0, currVal_5); }, null); }
function View_FilesPendingDownloadComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "files-pending-download", [], null, null, null, View_FilesPendingDownloadComponent_0, RenderType_FilesPendingDownloadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _files_pending_download__WEBPACK_IMPORTED_MODULE_7__["FilesPendingDownloadComponent"], [_file_file_service__WEBPACK_IMPORTED_MODULE_8__["FileService"], _core_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], null, null); }
var FilesPendingDownloadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("files-pending-download", _files_pending_download__WEBPACK_IMPORTED_MODULE_7__["FilesPendingDownloadComponent"], View_FilesPendingDownloadComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/files-pending-download/files-pending-download.scss.shim.ngstyle.js":
/*!************************************************************************************!*\
  !*** ./src/app/files-pending-download/files-pending-download.scss.shim.ngstyle.js ***!
  \************************************************************************************/
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
var styles = [".file[_ngcontent-%COMP%] {\n  padding-top: 15px !important;\n  padding-left: 2px !important; }\n  .file[_ngcontent-%COMP%]   label.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:before {\n    width: 17px;\n    height: 17px; }\n  .file-name[_ngcontent-%COMP%] {\n  margin-top: 2%; }\n  .file-info[_ngcontent-%COMP%] {\n  margin-left: 12%; }\n  .file-modified-date[_ngcontent-%COMP%] {\n  font-size: 90%;\n  color: grey; }\n  .showDownload[_ngcontent-%COMP%] {\n  height: 36px;\n  margin: 0 5%;\n  display: flex; }"];



/***/ }),

/***/ "./src/app/files-pending-download/files-pending-download.ts":
/*!******************************************************************!*\
  !*** ./src/app/files-pending-download/files-pending-download.ts ***!
  \******************************************************************/
/*! exports provided: FilesPendingDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPendingDownloadComponent", function() { return FilesPendingDownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _file_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../file/file.service */ "./src/app/file/file.service.ts");
/* harmony import */ var _models_multimedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/multimedia */ "./src/app/models/multimedia.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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









var FilesPendingDownloadComponent = /** @class */ (function (_super) {
    __extends(FilesPendingDownloadComponent, _super);
    function FilesPendingDownloadComponent(fileService, errorHandlerService, route, cdref) {
        var _this = _super.call(this) || this;
        _this.fileService = fileService;
        _this.errorHandlerService = errorHandlerService;
        _this.route = route;
        _this.cdref = cdref;
        _this.downloadStarted = false;
        _this.isLoading = false;
        return _this;
    }
    FilesPendingDownloadComponent.prototype.downloadFiles = function (files) {
        var _this = this;
        this.downloadStarted = true;
        this.fileService
            .download(files.length > 1 ? files : files[0], true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return (_this.downloadStarted = false); }))
            .subscribe(function () { }, function (err) { return _this.errorHandlerService.handle(err); });
    };
    FilesPendingDownloadComponent.prototype.loadFiles = function () {
        var _this = this;
        this.displayFiles = true;
        this.isLoading = true;
        this.fileService
            .downloadPendingFiles(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["findParam"])('moduleId', this.route))
            .subscribe(function (files) {
            _this.isLoading = false;
            _this.files = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(files.data);
            _this.cdref.detectChanges();
        }, function (err) {
            _this.isLoading = false;
            _this.errorHandlerService.handle(err);
        });
    };
    FilesPendingDownloadComponent.prototype.hideMessage = function () {
        this.displayFiles = false;
        this.isShowingFiles = false;
    };
    FilesPendingDownloadComponent.prototype.openFiles = function (files) {
        this.downloadFiles(files instanceof _models_multimedia__WEBPACK_IMPORTED_MODULE_6__["FileInfo"] ? [files] : files);
    };
    FilesPendingDownloadComponent.prototype.hideFiles = function () {
        this.isShowingFiles = false;
    };
    FilesPendingDownloadComponent.prototype.showFiles = function () {
        this.isShowingFiles = true;
    };
    FilesPendingDownloadComponent.prototype.downloadAllFiles = function () {
        this.openFiles(this.files.toArray());
    };
    return FilesPendingDownloadComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_3__["ComponentBase"]));



/***/ }),

/***/ "./src/app/lesson-select/lesson-select.component.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/lesson-select/lesson-select.component.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: RenderType_LessonSelectComponent, View_LessonSelectComponent_0, View_LessonSelectComponent_Host_0, LessonSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LessonSelectComponent", function() { return RenderType_LessonSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LessonSelectComponent_0", function() { return View_LessonSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LessonSelectComponent_Host_0", function() { return View_LessonSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonSelectComponentNgFactory", function() { return LessonSelectComponentNgFactory; });
/* harmony import */ var _lesson_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson-select.component.scss.shim.ngstyle */ "./src/app/lesson-select/lesson-select.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/tooltip.directive */ "./src/app/shared/tooltip.directive.ts");
/* harmony import */ var _core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/tooltip.service */ "./src/app/core/tooltip.service.ts");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _lesson_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lesson-select.component */ "./src/app/lesson-select/lesson-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_LessonSelectComponent = [_lesson_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LessonSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LessonSelectComponent, data: {} });

function View_LessonSelectComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "a", [["class", "lesson"]], [[2, "selected", null], [2, "current", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "span", [], null, [[null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 2, 0, _co.baseUrl, "lessons", _v.context.$implicit.id); _ck(_v, 1, 0, currVal_4); var currVal_5 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.selectedLesson == null) ? null : _co.selectedLesson.id) === _v.context.$implicit.id); var currVal_1 = (((_co.currentLesson == null) ? null : _co.currentLesson.id) === _v.context.$implicit.id); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_6 = _v.context.$implicit.navigationLabel; _ck(_v, 5, 0, currVal_6); }); }
function View_LessonSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "lessons"]], [[2, "scrolling", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "lesson arrow"]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.go(false) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "icon", [["name", "arrowLeft"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "a", [["class", "lesson"]], [[2, "selected", null], [8, "hidden", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { queryParams: [0, "queryParams"], routerLink: [1, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, { q: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](7, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "span", [["tooltip", "Overview"]], null, [[null, "mouseover"], [null, "mouseout"]], function (_v, en, $event) { var ad = true; if (("mouseover" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onMouseEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseout" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onMouseLeave($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 147456, null, 0, _shared_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_core_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { tooltip: [0, "tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Ov"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LessonSelectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "a", [["class", "lesson arrow"]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.go(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "icon", [["name", "arrowRight"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_7__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]], { name: [0, "name"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "arrowLeft"; _ck(_v, 3, 0, currVal_2); var currVal_7 = (_co.selectedLesson ? _ck(_v, 6, 0, "overview") : null); var currVal_8 = _ck(_v, 7, 0, _co.baseUrl); _ck(_v, 5, 0, currVal_7, currVal_8); var currVal_9 = "Overview"; _ck(_v, 9, 0, currVal_9); var currVal_10 = _co.visibleLessons; _ck(_v, 12, 0, currVal_10); var currVal_12 = "arrowRight"; _ck(_v, 15, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.visibleLessons.size < _co.lessons.size); _ck(_v, 0, 0, currVal_0); var currVal_1 = !_co.showGoLeft; _ck(_v, 1, 0, currVal_1); var currVal_3 = !_co.selectedLesson; var currVal_4 = (_co.start > 0); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_11 = !_co.showGoRight; _ck(_v, 13, 0, currVal_11); }); }
function View_LessonSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "lesson-select", [], null, null, null, View_LessonSelectComponent_0, RenderType_LessonSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4898816, null, 0, _lesson_select_component__WEBPACK_IMPORTED_MODULE_9__["LessonSelectComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], null, null); }
var LessonSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("lesson-select", _lesson_select_component__WEBPACK_IMPORTED_MODULE_9__["LessonSelectComponent"], View_LessonSelectComponent_Host_0, { lessons: "lessons", selectedLesson: "selectedLesson", baseUrl: "baseUrl" }, {}, []);



/***/ }),

/***/ "./src/app/lesson-select/lesson-select.component.scss.shim.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/lesson-select/lesson-select.component.scss.shim.ngstyle.js ***!
  \****************************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden; }\na[_ngcontent-%COMP%]:nth-last-child(2) {\n  margin-right: 10px; }\n.lessons[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  clear: both; }\n.lessons.scrolling[_ngcontent-%COMP%] {\n    justify-content: space-between; }\n.lessons[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center; }\n.lessons[_ngcontent-%COMP%]   .lesson[_ngcontent-%COMP%] {\n    flex: 0 0 45px;\n    width: 10px;\n    height: 45px;\n    display: flex;\n    padding: 5px;\n    justify-content: center;\n    align-items: center;\n    color: #333333;\n    font-weight: 600;\n    border-radius: 3px; }\n.lessons[_ngcontent-%COMP%]   .lesson[_ngcontent-%COMP%]:hover {\n      text-decoration: none; }\n.lessons[_ngcontent-%COMP%]   .lesson[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 5px;\n      border-radius: 3px; }\n.lessons[_ngcontent-%COMP%]   .lesson[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n      align-self: center; }\n.lessons[_ngcontent-%COMP%]   .lesson[_ngcontent-%COMP%]     .icon-fill {\n      fill: #333333 !important; }\n.lessons[_ngcontent-%COMP%]   .lesson[_ngcontent-%COMP%]     .icon-stroke {\n      stroke: #333333 !important; }\n.lessons[_ngcontent-%COMP%]   .lesson.current[_ngcontent-%COMP%] {\n      background-color: rgba(238, 177, 0, 0.33); }\n.lessons[_ngcontent-%COMP%]   .lesson.selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      background-color: #EEB100; }"];



/***/ }),

/***/ "./src/app/lesson-select/lesson-select.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lesson-select/lesson-select.component.ts ***!
  \**********************************************************/
/*! exports provided: LessonSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonSelectComponent", function() { return LessonSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _models_learning_flow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/learning-flow */ "./src/app/models/learning-flow.ts");
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







var LessonSelectComponent = /** @class */ (function (_super) {
    __extends(LessonSelectComponent, _super);
    function LessonSelectComponent(elRef, cdRef) {
        var _this = _super.call(this) || this;
        _this.elRef = elRef;
        _this.cdRef = cdRef;
        _this.lessons = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        _this.baseUrl = './';
        _this.visibleLessons = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        _this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200))
            .subscribe(function () {
            _this.width = _this.elRef.nativeElement.getBoundingClientRect().width;
            if (_this.width !== _this.lastWidth) {
                _this.setVisibleLessons();
            }
        });
        return _this;
    }
    LessonSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes['lessons']) {
            this.currentLesson = (this.lessons || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])()).find(function (l) {
                return moment__WEBPACK_IMPORTED_MODULE_2__().isSameOrAfter(l.startDate) && moment__WEBPACK_IMPORTED_MODULE_2__().isBefore(l.endDate);
            });
        }
        this.setVisibleLessons();
    };
    LessonSelectComponent.prototype.ngAfterViewInit = function () {
        this.setVisibleLessons();
    };
    LessonSelectComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.subscription.unsubscribe();
    };
    LessonSelectComponent.prototype.setVisibleLessons = function () {
        var _this = this;
        this.width = this.elRef.nativeElement.getBoundingClientRect().width;
        this.lastWidth = this.width;
        var absoluteMax = Math.floor(this.width / 50);
        this.noOfLessonsToShow = Math.min(absoluteMax, this.lessons.size);
        var i = this.selectedLesson ? this.lessons.findIndex(function (l) { return l.id === _this.selectedLesson.id; }) : -1;
        this.start = i > -1 ?
            Math.max(0, i - Math.ceil(this.noOfLessonsToShow / 2)) :
            0;
        if ((this.start + this.noOfLessonsToShow) > this.lessons.size - 1) {
            this.end = this.lessons.size - 1;
            this.start = Math.max(0, this.end - this.noOfLessonsToShow);
            if (absoluteMax <= this.lessons.size) {
                this.start += 1;
            }
        }
        else {
            this.end = this.start + this.noOfLessonsToShow;
        }
        // week 0 is not in the lessons collection
        if (this.start === 0 && absoluteMax <= this.lessons.size) {
            this.end -= 2;
        }
        this.showGoLeft = this.start > 0;
        this.showGoRight = this.end < (this.lessons.size - 1);
        if (this.showGoLeft && this.showGoRight) {
            this.start += 1;
            this.end -= 2;
        }
        else if (this.showGoLeft) {
            this.start += 1;
        }
        else if (this.showGoRight) {
            this.end -= 1;
        }
        this.visibleLessons = this.lessons.slice(this.start, this.end + 1).toList();
        this.cdRef.detectChanges();
    };
    LessonSelectComponent.prototype.go = function (right) {
        if (right) {
            var diff = Math.min(Math.floor(this.noOfLessonsToShow / 2), this.lessons.size - 1 - this.end);
            this.end += diff;
            this.start += diff;
        }
        else {
            var diff = Math.min(Math.floor(this.noOfLessonsToShow / 2), this.start);
            this.end -= diff;
            this.start -= diff;
        }
        this.showGoLeft = this.start > 0;
        this.showGoRight = this.end < (this.lessons.size - 1);
        this.visibleLessons = this.lessons.slice(this.start, this.end + 1).toList();
        this.cdRef.detectChanges();
    };
    return LessonSelectComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_5__["ComponentBase"]));



/***/ }),

/***/ "./src/app/lesson-select/lesson-select.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lesson-select/lesson-select.module.ts ***!
  \*******************************************************/
/*! exports provided: LessonSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonSelectModule", function() { return LessonSelectModule; });
var LessonSelectModule = /** @class */ (function () {
    function LessonSelectModule() {
    }
    return LessonSelectModule;
}());



/***/ }),

/***/ "./src/app/module-announcements/module-announcements.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/module-announcements/module-announcements.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_ModuleAnnouncementsComponent, View_ModuleAnnouncementsComponent_0, View_ModuleAnnouncementsComponent_Host_0, ModuleAnnouncementsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ModuleAnnouncementsComponent", function() { return RenderType_ModuleAnnouncementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleAnnouncementsComponent_0", function() { return View_ModuleAnnouncementsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ModuleAnnouncementsComponent_Host_0", function() { return View_ModuleAnnouncementsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAnnouncementsComponentNgFactory", function() { return ModuleAnnouncementsComponentNgFactory; });
/* harmony import */ var _module_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-announcements.component.scss.shim.ngstyle */ "./src/app/module-announcements/module-announcements.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/icon.component.ngfactory */ "./src/app/shared/icon.component.ngfactory.js");
/* harmony import */ var _shared_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/icon.component */ "./src/app/shared/icon.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_card_list_card_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/card-list/card-list-item.component.ngfactory */ "./src/app/shared/card-list/card-list-item.component.ngfactory.js");
/* harmony import */ var _shared_card_list_card_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/card-list/card-list-item.component */ "./src/app/shared/card-list/card-list-item.component.ts");
/* harmony import */ var _shared_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/card-list/card-list.component */ "./src/app/shared/card-list/card-list.component.ts");
/* harmony import */ var _announcement_announcement_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../announcement/announcement-list-item.component.ngfactory */ "./src/app/announcement/announcement-list-item.component.ngfactory.js");
/* harmony import */ var _announcement_announcement_list_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../announcement/announcement-list-item.component */ "./src/app/announcement/announcement-list-item.component.ts");
/* harmony import */ var _shared_card_list_card_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/card-list/card-list.component.ngfactory */ "./src/app/shared/card-list/card-list.component.ngfactory.js");
/* harmony import */ var _shared_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/list-view/list-view.component */ "./src/app/shared/list-view/list-view.component.ts");
/* harmony import */ var _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/tool-layout.component */ "./src/app/shared/tool-layout.component.ts");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-dragula/components/dragula.provider */ "./node_modules/ng2-dragula/components/dragula.provider.js");
/* harmony import */ var ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module_announcements_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./module-announcements.component */ "./src/app/module-announcements/module-announcements.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_ModuleAnnouncementsComponent = [_module_announcements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ModuleAnnouncementsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ModuleAnnouncementsComponent, data: {} });

function View_ModuleAnnouncementsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "btn btn-dotted"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.createAnnouncement.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "icon", [["name", "plus"]], null, null, null, _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IvleIconComponent_0"], _shared_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IvleIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 638976, null, 0, _shared_icon_component__WEBPACK_IMPORTED_MODULE_3__["IvleIconComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Create an Announcement\n"]))], function (_ck, _v) { var currVal_0 = "plus"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ModuleAnnouncementsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "infolet-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "no-announcements"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No announcements."]))], null, null); }
function View_ModuleAnnouncementsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "infolet-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "no-announcements"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No new announcements."]))], null, null); }
function View_ModuleAnnouncementsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "card-list-item", [], [[2, "selected", null], [2, "rearranging", null]], null, null, _shared_card_list_card_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CardListItemComponent_0"], _shared_card_list_card_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CardListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1228800, null, 1, _shared_card_list_card_list_item_component__WEBPACK_IMPORTED_MODULE_6__["CardListItemComponent"], [_shared_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__["CardListComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { dataItem: [0, "dataItem"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { tools: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "announcement-list-item", [["isNew", "true"]], null, null, null, _announcement_announcement_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AnnouncementListItemComponent_0"], _announcement_announcement_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AnnouncementListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4767744, null, 0, _announcement_announcement_list_item_component__WEBPACK_IMPORTED_MODULE_9__["AnnouncementListItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { announcement: [0, "announcement"], isNew: [1, "isNew"], limitHeight: [2, "limitHeight"] }, null)], function (_ck, _v) { var currVal_2 = _v.context.$implicit; _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit; var currVal_4 = "true"; var currVal_5 = true; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isSelected; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).classRearranging; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ModuleAnnouncementsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "card-list", [["hideGutter", "true"]], [[2, "has-selection", null], [2, "hide-header", null]], [["window", "keydown"], ["window", "keyup"]], function (_v, en, $event) { var ad = true; if (("window:keydown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onShiftKeyUp($event) !== false);
        ad = (pd_0 && ad);
    } if (("window:keyup" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onShiftKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _shared_card_list_card_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CardListComponent_0"], _shared_card_list_card_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CardListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _shared_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_11__["ListViewComponent"], null, [_shared_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__["CardListComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1753088, null, 3, _shared_card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__["CardListComponent"], [[2, _shared_tool_layout_component__WEBPACK_IMPORTED_MODULE_12__["ToolLayoutComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_dragula_components_dragula_provider__WEBPACK_IMPORTED_MODULE_13__["DragulaService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]], { data: [0, "data"], hideGutter: [1, "hideGutter"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { columns: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { contextMenu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { contextActions: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_ModuleAnnouncementsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.displayedAnnouncements; var currVal_3 = "true"; _ck(_v, 2, 0, currVal_2, currVal_3); var currVal_4 = _co.displayedAnnouncements; _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._selectedRows && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._selectedRows.size); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hideHeader; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ModuleAnnouncementsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleAnnouncementsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "infolet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleAnnouncementsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleAnnouncementsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ModuleAnnouncementsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.canCreate; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((!_co.isLoading && !((_co.announcements == null) ? null : _co.announcements.length)) && !_co.isError); _ck(_v, 4, 0, currVal_1); var currVal_2 = (((!_co.isLoading && !_co.isError) && ((_co.announcements == null) ? null : _co.announcements.length)) && !_co.hasDisplayedAnnouncements); _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.hasDisplayedAnnouncements; _ck(_v, 8, 0, currVal_3); }, null); }
function View_ModuleAnnouncementsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "module-announcements", [], null, null, null, View_ModuleAnnouncementsComponent_0, RenderType_ModuleAnnouncementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 0, _module_announcements_component__WEBPACK_IMPORTED_MODULE_16__["ModuleAnnouncementsComponent"], [], null, null)], null, null); }
var ModuleAnnouncementsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("module-announcements", _module_announcements_component__WEBPACK_IMPORTED_MODULE_16__["ModuleAnnouncementsComponent"], View_ModuleAnnouncementsComponent_Host_0, { announcements: "announcements", courseModule: "courseModule", showHeader: "showHeader" }, { createAnnouncement: "createAnnouncement" }, []);



/***/ }),

/***/ "./src/app/module-announcements/module-announcements.component.scss.shim.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/module-announcements/module-announcements.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************/
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
var styles = ["[_nghost-%COMP%]   announcement-list-item[_ngcontent-%COMP%]     article {\n  display: flex;\n  flex-direction: column; }\n[_nghost-%COMP%]   announcement-list-item[_ngcontent-%COMP%]     article h3 {\n    order: 0;\n    font-size: 14px;\n    line-height: 20px;\n    color: #333333;\n    margin-bottom: 0; }\n[_nghost-%COMP%]   announcement-list-item[_ngcontent-%COMP%]     article span.byline {\n    order: 1;\n    margin-bottom: 0;\n    line-height: 19px; }\n[_nghost-%COMP%]   announcement-list-item[_ngcontent-%COMP%]     article .delivery-channels {\n    display: none; }\n[_nghost-%COMP%]   announcement-list-item[_ngcontent-%COMP%]     article time {\n    order: 2;\n    margin-bottom: 0;\n    line-height: 19px; }\n[_nghost-%COMP%]   announcement-list-item[_ngcontent-%COMP%]     article > * {\n    order: 3; }\n.btn-dotted[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px; }"];



/***/ }),

/***/ "./src/app/module-announcements/module-announcements.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/module-announcements/module-announcements.component.ts ***!
  \************************************************************************/
/*! exports provided: ModuleAnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAnnouncementsComponent", function() { return ModuleAnnouncementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _announcement_announcement_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../announcement/announcement-list.component */ "./src/app/announcement/announcement-list.component.ts");
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



var ModuleAnnouncementsComponent = /** @class */ (function (_super) {
    __extends(ModuleAnnouncementsComponent, _super);
    function ModuleAnnouncementsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createAnnouncement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ModuleAnnouncementsComponent.prototype.isPublishedAnnouncement = function (announcement) {
        return (announcement &&
            announcement.isPublished &&
            moment__WEBPACK_IMPORTED_MODULE_1__().isAfter(announcement.displayFrom) &&
            (!announcement.archiveAfter ||
                moment__WEBPACK_IMPORTED_MODULE_1__().isBefore(announcement.archiveAfter)));
    };
    ModuleAnnouncementsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        _super.prototype.ngOnChanges.call(this, changes);
        this.hasDisplayedAnnouncements =
            !!this.announcements &&
                !!this.announcements.filter(function (a) { return _this.isPublishedAnnouncement(a) && _this.isNewAnnouncement(a); }).length;
        this.displayedAnnouncements = (this.announcements || []).filter(function (a) { return _this.isPublishedAnnouncement(a) && _this.isNewAnnouncement(a); });
    };
    return ModuleAnnouncementsComponent;
}(_announcement_announcement_list_component__WEBPACK_IMPORTED_MODULE_2__["AnnouncementListComponent"]));



/***/ }),

/***/ "./src/app/module-announcements/module-announcements.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/module-announcements/module-announcements.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModuleAnnouncementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAnnouncementsModule", function() { return ModuleAnnouncementsModule; });
var ModuleAnnouncementsModule = /** @class */ (function () {
    function ModuleAnnouncementsModule() {
    }
    return ModuleAnnouncementsModule;
}());



/***/ }),

/***/ "./src/app/module-feedback/module-feedback.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/module-feedback/module-feedback.module.ts ***!
  \***********************************************************/
/*! exports provided: ModuleFeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleFeedbackModule", function() { return ModuleFeedbackModule; });
var ModuleFeedbackModule = /** @class */ (function () {
    function ModuleFeedbackModule() {
    }
    return ModuleFeedbackModule;
}());



/***/ }),

/***/ "./src/app/module-promo-video/module-promo-video.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/module-promo-video/module-promo-video.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModulePromoVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulePromoVideoModule", function() { return ModulePromoVideoModule; });
var ModulePromoVideoModule = /** @class */ (function () {
    function ModulePromoVideoModule() {
    }
    return ModulePromoVideoModule;
}());



/***/ }),

/***/ "./src/app/module-summary/module-summary.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/module-summary/module-summary.module.ts ***!
  \*********************************************************/
/*! exports provided: ModuleSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleSummaryModule", function() { return ModuleSummaryModule; });
var ModuleSummaryModule = /** @class */ (function () {
    function ModuleSummaryModule() {
    }
    return ModuleSummaryModule;
}());



/***/ }),

/***/ "./src/app/timetable/timetable.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/timetable/timetable.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_TimetableComponent, View_TimetableComponent_0, View_TimetableComponent_Host_0, TimetableComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TimetableComponent", function() { return RenderType_TimetableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableComponent_0", function() { return View_TimetableComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TimetableComponent_Host_0", function() { return View_TimetableComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponentNgFactory", function() { return TimetableComponentNgFactory; });
/* harmony import */ var _timetable_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable.component.scss.shim.ngstyle */ "./src/app/timetable/timetable.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/moment.pipe */ "./src/app/shared/moment.pipe.ts");
/* harmony import */ var _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modal.component.ngfactory */ "./src/app/shared/modal.component.ngfactory.js");
/* harmony import */ var _shared_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modal.component */ "./src/app/shared/modal.component.ts");
/* harmony import */ var _timetable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timetable.component */ "./src/app/timetable/timetable.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_TimetableComponent = [_timetable_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TimetableComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TimetableComponent, data: {} });

function View_TimetableComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["There is no timetable."]))], null, null); }
function View_TimetableComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "article", [["class", "no-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.canCreate; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TimetableComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Module Code"]))], null, null); }
function View_TimetableComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.module; _ck(_v, 1, 0, currVal_0); }); }
function View_TimetableComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "tr", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [["class", "activity-type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Examination"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", " minutes"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.displayModuleCode; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.exam_date, "ddd, DD MMM YYYY")); _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.$implicit.start_time; _ck(_v, 9, 0, currVal_2); var currVal_3 = _v.context.$implicit.end_time; _ck(_v, 11, 0, currVal_3); var currVal_4 = _v.context.$implicit.duration; _ck(_v, 13, 0, currVal_4); }); }
function View_TimetableComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "infolet table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "div", [["class", "infolet-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 16, "table", [["class", "timetable-data table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Start Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.displayModuleCode; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.examItems; _ck(_v, 18, 0, currVal_1); }, null); }
function View_TimetableComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"]))], null, null); }
function View_TimetableComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.eventdate; _ck(_v, 1, 0, currVal_0); }); }
function View_TimetableComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "tr", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [["class", "activity-type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openTimeTableModel(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.showDates; _ck(_v, 12, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.module; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.activityText; _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.modgrp; _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.session; _ck(_v, 8, 0, currVal_3); var currVal_4 = _v.context.$implicit.dayText; _ck(_v, 10, 0, currVal_4); var currVal_6 = _v.context.$implicit.weekType; _ck(_v, 15, 0, currVal_6); var currVal_7 = _v.context.$implicit.start_time; _ck(_v, 17, 0, currVal_7); var currVal_8 = _v.context.$implicit.end_time; _ck(_v, 19, 0, currVal_8); var currVal_9 = _v.context.$implicit.room; _ck(_v, 21, 0, currVal_9); }); }
function View_TimetableComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "div", [["class", "infolet table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 25, "div", [["class", "infolet-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 24, "table", [["class", "timetable-data table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 20, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Class"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Group"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Session"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Day of Week"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Recurrence"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Start Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "th", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Venue"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showDates; _ck(_v, 15, 0, currVal_0); var currVal_1 = _co.currentTimeTableItems; _ck(_v, 26, 0, currVal_1); }, null); }
function View_TimetableComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["for ", " ", " (Group ", ", Session ", ")"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.expandableItem.module; var currVal_1 = _co.expandableItem.activityText; var currVal_2 = _co.expandableItem.modgrp; var currVal_3 = _co.expandableItem.session; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_TimetableComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "tr", [["class", "timetable-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.expandableItem.dayText; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit, "DD/MM/YYYY")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.expandableItem.start_time; _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.expandableItem.end_time; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.expandableItem.room; _ck(_v, 11, 0, currVal_4); }); }
function View_TimetableComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "infolet table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "infolet-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "table", [["class", "timetable-data table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 10, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Day of Week"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Start time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Venue"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.expandableItem.eventdate; _ck(_v, 16, 0, currVal_0); }, null); }
function View_TimetableComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_moment_pipe__WEBPACK_IMPORTED_MODULE_3__["MomentPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { timeTableDateModal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "section", [["class", "timetable"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "infolet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 12, "div", [["class", "infolet-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Note: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 9, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "b", [["class", "danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Class timetable is subject to changes."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Check with your Faculty Dean's Office for updates."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Refer to your department for information on commencement of tutorial classes or confirm with your module coordinator so that you do not miss any classes. You may refer to the weeks from "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "a", [["href", "http://www.nus.edu.sg/registrar/calendar"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NUS Academic Calendar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TimetableComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 12, "modal", [["class", "lg"]], null, null, null, _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ModalComponent_0"], _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ModalComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, [[1, 4], ["timeTableDateModal", 4]], 0, _shared_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { closeOnOutsideClick: [0, "closeOnOutsideClick"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 6, "modal-header", [], null, null, null, _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ModalHeaderComponent_0"], _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ModalHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _shared_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Timetable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_TimetableComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 1, 3, "modal-content", [], null, null, null, _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ModalContentComponent_0"], _shared_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ModalContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 49152, null, 0, _shared_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalContentComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_TimetableComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (((_co.examItems == null) ? null : _co.examItems.isEmpty()) && ((_co.timetableItems == null) ? null : _co.timetableItems.isEmpty())); _ck(_v, 18, 0, currVal_0); var currVal_1 = !((_co.examItems == null) ? null : _co.examItems.isEmpty()); _ck(_v, 20, 0, currVal_1); var currVal_2 = !((_co.currentTimeTableItems == null) ? null : _co.currentTimeTableItems.isEmpty()); _ck(_v, 22, 0, currVal_2); var currVal_3 = false; _ck(_v, 24, 0, currVal_3); var currVal_4 = _co.expandableItem; _ck(_v, 31, 0, currVal_4); var currVal_5 = _co.expandableItem; _ck(_v, 35, 0, currVal_5); }, null); }
function View_TimetableComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "timetable", [], null, null, null, View_TimetableComponent_0, RenderType_TimetableComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 704512, null, 0, _timetable_component__WEBPACK_IMPORTED_MODULE_6__["TimetableComponent"], [], null, null)], null, null); }
var TimetableComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("timetable", _timetable_component__WEBPACK_IMPORTED_MODULE_6__["TimetableComponent"], View_TimetableComponent_Host_0, { timetableItems: "timetableItems", examItems: "examItems", displayModuleCode: "displayModuleCode", showDates: "showDates" }, {}, []);



/***/ }),

/***/ "./src/app/timetable/timetable.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/timetable/timetable.component.scss.shim.ngstyle.js ***!
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
var styles = [".toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n.toggle.inline[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle; }\n.toggle-checkbox[_ngcontent-%COMP%] {\n  display: none; }\ninput[disabled][_ngcontent-%COMP%]    + .toggle-label[_ngcontent-%COMP%] {\n  background-color: #9c9c9c;\n  cursor: not-allowed; }\n.toggle-label[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  margin: 0; }\n.toggle-inner[_ngcontent-%COMP%] {\n  display: block;\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.3s ease-in 0s; }\n.toggle-inner[_ngcontent-%COMP%]:before, .toggle-inner[_ngcontent-%COMP%]:after {\n  display: block;\n  float: left;\n  width: 50%;\n  height: 30px;\n  padding: 0;\n  line-height: 30px;\n  font-size: 12px;\n  color: white;\n  font-weight: 600;\n  box-sizing: border-box; }\n.toggle-inner[_ngcontent-%COMP%]:before {\n  content: \"Yes\";\n  padding-left: 10px;\n  background-color: #44be42;\n  color: #FFFFFF; }\ninput[disabled][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   .toggle-inner[_ngcontent-%COMP%]:before {\n  background-color: #9c9c9c; }\n.toggle-inner[_ngcontent-%COMP%]:after {\n  content: \"No\";\n  padding-right: 10px;\n  background-color: #e1e1e1;\n  color: #909090;\n  text-align: right; }\n.toggle-switch[_ngcontent-%COMP%] {\n  display: block;\n  width: 26px;\n  margin: 2px;\n  background: #FFFFFF;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 41px;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  transition: all 0.3s ease-in 0s; }\n.toggle-checkbox[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .toggle-inner[_ngcontent-%COMP%] {\n  margin-left: 0; }\n.toggle-checkbox[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  right: 5px; }\n.toggle-control-label[_ngcontent-%COMP%] {\n  line-height: 30px;\n  font-weight: 600; }\n.toggle-control-label[_ngcontent-%COMP%]:after {\n    display: inline;\n    content: ' ';\n    word-spacing: 10px; }\nsection.timetable[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px; }\nsection.timetable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  margin-top: 15px; }\nsection.timetable[_ngcontent-%COMP%]   .activity-type[_ngcontent-%COMP%] {\n  text-transform: capitalize; }\nsection.timetable[_ngcontent-%COMP%]   .infolet-table[_ngcontent-%COMP%] {\n  overflow: auto; }\nsection.timetable[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\n  color: #c82128; }\n.align-content[_ngcontent-%COMP%] {\n  padding-left: 10px; }\nmodal[_ngcontent-%COMP%]     .modal-body {\n  overflow: auto !important; }\nmodal[_ngcontent-%COMP%]     .infolet-table {\n  height: 100%;\n  overflow-y: auto; }"];



/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/component-base */ "./src/app/core/component-base.ts");
/* harmony import */ var _shared_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modal.component */ "./src/app/shared/modal.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
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






var TimetableComponent = /** @class */ (function (_super) {
    __extends(TimetableComponent, _super);
    function TimetableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timetableItems = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        _this.examItems = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        _this.displayModuleCode = false;
        _this.showDates = true;
        return _this;
    }
    TimetableComponent.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            // console.log('each item', o);
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    TimetableComponent.prototype.ngOnChanges = function (changes) {
        if (changes['timetableItems']) {
            if (!this.showDates) {
                this.currentTimeTableItems = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(this.groupBy(changes['timetableItems'].currentValue, function (value) {
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
                }));
                this.currentTimeTableItems = this.currentTimeTableItems.map(function (group) {
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
                this.currentTimeTableItems = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(underscore__WEBPACK_IMPORTED_MODULE_2__["flatten"](this.groupBy(this.currentTimeTableItems, function (value) {
                    return [value.module, value.modgrp, value.activityText];
                }).map(function (group) {
                    return underscore__WEBPACK_IMPORTED_MODULE_2__["flatten"](group);
                })));
            }
            else {
                this.currentTimeTableItems = changes['timetableItems'].currentValue;
            }
        }
    };
    TimetableComponent.prototype.openTimeTableModel = function (item) {
        this.expandableItem = item;
        this.expandableItem.eventdate = this.expandableItem.eventdate.map(function (date) { return new Date(date); })
            .sort(function (a, b) { return moment__WEBPACK_IMPORTED_MODULE_5__(b).unix() - moment__WEBPACK_IMPORTED_MODULE_5__(a).unix(); }).reverse();
        this.timeTableDateModal.open();
    };
    return TimetableComponent;
}(_core_component_base__WEBPACK_IMPORTED_MODULE_3__["ComponentBase"]));



/***/ })

}]);