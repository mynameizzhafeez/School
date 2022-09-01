(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./src/app/course-module-overview/course-module-overview.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/course-module-overview/course-module-overview.page.ts ***!
  \***********************************************************************/
/*! exports provided: CourseModuleOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModuleOverviewPage", function() { return CourseModuleOverviewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modernizr */ "./.modernizrrc");
/* harmony import */ var modernizr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(modernizr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _announcement_announcement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../announcement/announcement.service */ "./src/app/announcement/announcement.service.ts");
/* harmony import */ var _core_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/confirm.service */ "./src/app/core/confirm.service.ts");
/* harmony import */ var _core_department_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/department.service */ "./src/app/core/department.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _core_faculty_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/faculty.service */ "./src/app/core/faculty.service.ts");
/* harmony import */ var _core_page_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/page-base */ "./src/app/core/page-base.ts");
/* harmony import */ var _core_route_spinner_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/route-spinner.service */ "./src/app/core/route-spinner.service.ts");
/* harmony import */ var _course_module_course_module_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../course-module/course-module.service */ "./src/app/course-module/course-module.service.ts");
/* harmony import */ var _learning_flow_lesson_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../learning-flow/lesson.service */ "./src/app/learning-flow/lesson.service.ts");
/* harmony import */ var _shared_snackbar_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/snackbar.service */ "./src/app/shared/snackbar.service.ts");
/* harmony import */ var _task_task_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../task/task.service */ "./src/app/task/task.service.ts");
/* harmony import */ var _timetable_timetable_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../timetable/timetable.service */ "./src/app/timetable/timetable.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
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






















var CourseModuleOverviewPage = /** @class */ (function (_super) {
    __extends(CourseModuleOverviewPage, _super);
    function CourseModuleOverviewPage(userService, router, route, confirmService, snackBarService, errorHandlerService, timetableService, courseModuleService, announcementService, lessonService, taskService, facultyService, departmentService, routeSpinnerService) {
        var _this = _super.call(this, userService) || this;
        _this.router = router;
        _this.route = route;
        _this.confirmService = confirmService;
        _this.snackBarService = snackBarService;
        _this.errorHandlerService = errorHandlerService;
        _this.timetableService = timetableService;
        _this.courseModuleService = courseModuleService;
        _this.announcementService = announcementService;
        _this.lessonService = lessonService;
        _this.taskService = taskService;
        _this.facultyService = facultyService;
        _this.departmentService = departmentService;
        _this.routeSpinnerService = routeSpinnerService;
        _this.lessons = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])();
        _this.lectures = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])();
        _this.tutorials = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])();
        _this.tasks = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])();
        _this.isShowingFiles = false;
        _this.downloadStarted = false;
        _this.errorWeeks = [];
        return _this;
    }
    Object.defineProperty(CourseModuleOverviewPage.prototype, "timeTableGroup", {
        get: function () {
            if (this.moduleItemGroupings) {
                return this.moduleItemGroupings.every(function (group) { return group.size > 0; });
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    CourseModuleOverviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(_utils__WEBPACK_IMPORTED_MODULE_21__["findDataByResolve"])('CourseModuleResolve', this.route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) { return data.courseModule; })), this.courseModuleService.onResourceUpdated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (c) { return c.id === _this.courseModule.id; }))).subscribe(function (courseModule) {
            _this.isLoadingLessons = true;
            //
            if (_this.courseModule && _this.courseModule.id === courseModule.id) {
                _this.courseModule = underscore__WEBPACK_IMPORTED_MODULE_7__["extend"]({}, _this.courseModule, courseModule);
            }
            else {
                _this.courseModule = courseModule;
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(_this.facultyService.query(new _utils__WEBPACK_IMPORTED_MODULE_21__["RESTQuery"]({ where: "facultyCode=\"" + _this.courseModule.facultyCode + "\"" }, null, null, null, null), null), _this.departmentService.query(new _utils__WEBPACK_IMPORTED_MODULE_21__["RESTQuery"]({ where: "departmentCode=\"" + _this.courseModule.departmentCode + "\"" }, null, null, null, null))).subscribe(function (_a) {
                var facultyResult = _a[0], departmentResult = _a[1];
                _this.courseModule['facultyName'] = facultyResult.data[0].name;
                _this.courseModule['departmentName'] = departmentResult.data[0].name;
            });
            _this.lessonService
                .getByModuleID(_this.courseModule.id)
                .subscribe(function (result) {
                _this.lessons = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(result.data);
                if (_this.courseModule.isStudent) {
                    _this.lessons = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(_this.lessons.filter(function (lesson) {
                        return moment__WEBPACK_IMPORTED_MODULE_4__().isSameOrAfter(lesson.displayStartDate);
                    }));
                }
                var qParam;
                _this.route.queryParams.subscribe(function (params) { return (qParam = params['q']); });
                if (!qParam) {
                    _this.selectedLesson = (_this.lessons || Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])()).find(function (l) {
                        return moment__WEBPACK_IMPORTED_MODULE_4__().isSameOrAfter(l.startDate) &&
                            moment__WEBPACK_IMPORTED_MODULE_4__().isBetween(l.startDate, l.endDate);
                    });
                }
                if (_this.selectedLesson && !qParam) {
                    _this.router.navigate(['lessons', _this.selectedLesson.id], {
                        relativeTo: _this.route,
                    });
                }
                else {
                    _this.isLoadingLessons = false;
                    _this.routeSpinnerService.stop('courseModuleRoot');
                }
            });
            _this.canEdit = _this.courseModule.isManager || _this.courseModule.isOwner;
            _this.learningFlowEnabled = _this.courseModule.enableLearningFlow;
            _this.showModuleFeedback =
                _this.courseModule.feedbackSender &&
                    _this.courseModule.feedbackSender.length &&
                    _this.canEdit;
        });
        this.lessonService.onResourceCreated.asObservable().subscribe(function (lesson) {
            _this.lessons = _this.lessons.push(lesson);
        });
        this.lessonService.onResourceUpdateWeeks.asObservable().subscribe(function (lessons) {
            lessons.map(function (lesson) {
                var i = _this.lessons.findIndex(function (l) { return l.id === lesson.id; });
                if (i > -1) {
                    _this.lessons = _this.lessons.set(i, lesson);
                }
            });
            if (lessons.length > _this.lessons.size) {
                _this.lessons = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(lessons);
            }
        });
        this.lessonService.onResourceDeleted.asObservable().subscribe(function (id) {
            var i = _this.lessons.findIndex(function (l) { return l.id === id; });
            if (i > -1) {
                _this.lessons = _this.lessons.delete(i);
            }
        });
        this.updateDimensions();
        this.resizeSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(400))
            .subscribe(function () {
            _this.updateDimensions();
        });
        var courseName = this.courseModule.name.split('/');
        var regex = new RegExp('^' + 'OTH', 'i');
        if (underscore__WEBPACK_IMPORTED_MODULE_7__["some"](courseName, function (name) { return !regex.test(name); })) {
            this.isLoadingTimetables = true;
            var moduleTimetable$ = this.timetableService
                .queryModuleTimetableById(this.courseModule.name, this.courseModule.term)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return res.data; }));
            var studentTimetable$ = this.timetableService
                .getStudentTimetable(this.courseModule.name, this.courseModule.term)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return res.data; }));
            var examTimetable$ = this.timetableService
                .queryExamTimeTable(this.courseModule.name, this.courseModule.term)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return res.data; }));
            var obs = void 0;
            if (this.courseModule.isOfficialModule) {
                if (this.courseModule.isStudent && !this.courseModule.isGuest) {
                    obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(moduleTimetable$, examTimetable$, studentTimetable$);
                }
                else {
                    obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(moduleTimetable$, examTimetable$);
                }
                obs.subscribe(function (_a) {
                    var moduleTimetable = _a[0], examTimetable = _a[1], studentTimetable = _a[2];
                    _this.exams = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](examTimetable, function (t) { return t['exam_date']; }));
                    if (!_this.courseModule.isStudent && moduleTimetable.length) {
                        var groupedItems = underscore__WEBPACK_IMPORTED_MODULE_7__["groupBy"](moduleTimetable, function (t) { return t.activityType; });
                        _this.moduleItemGroupings = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(underscore__WEBPACK_IMPORTED_MODULE_7__["values"](groupedItems).map(function (items) {
                            return Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(underscore__WEBPACK_IMPORTED_MODULE_7__["chain"](items)
                                .groupBy(function (t) { return t['recurrenceType'] + ", " + t['roomId']; })
                                .values()
                                .map(function (arr) {
                                return underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](arr, function (a) { return a.day * 10000 + a.startTime; });
                            })
                                .value());
                        }));
                    }
                    if (_this.courseModule.isStudent && studentTimetable && studentTimetable.length) {
                        var groupedItems = underscore__WEBPACK_IMPORTED_MODULE_7__["groupBy"](studentTimetable, function (t) { return t.activityType; });
                        _this.moduleItemGroupings = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(underscore__WEBPACK_IMPORTED_MODULE_7__["values"](groupedItems).map(function (items) {
                            return Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(underscore__WEBPACK_IMPORTED_MODULE_7__["chain"](items)
                                .map(function (t) {
                                return moduleTimetable.find(function (m) {
                                    return m.modgrp === t.modgrp;
                                });
                            })
                                .filter(function (t) { return t !== undefined; })
                                .groupBy(function (t) { return t.recurrenceType + ", " + t.roomId; })
                                .values()
                                .map(function (arr) {
                                return underscore__WEBPACK_IMPORTED_MODULE_7__["sortBy"](arr, function (a) { return a.day * 10000 + a.startTime; });
                            })
                                .value());
                        }));
                    }
                    _this.isLoadingTimetables = false;
                });
            }
        }
        this.isLoadingAnnouncements = true;
        this.announcementService
            .getNonArchivedAnnouncements(this.courseModule.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isLoadingAnnouncements = false); }))
            .subscribe(function (announcements) {
            _this.announcements = announcements;
        }, function (err) {
            _this.errorHandlerService.handle(err);
        });
        this.announcementService.onResourceCreated.subscribe(function (a) {
            _this.announcements.splice(0, 0, a);
            _this.announcements = _this.announcements.slice();
        });
        if (!this.canEdit) {
            var taskQuery = new _utils__WEBPACK_IMPORTED_MODULE_21__["RESTQuery"]();
            taskQuery.where =
                "endDate >= \"" + moment__WEBPACK_IMPORTED_MODULE_4__().toISOString() + "\" and " +
                    ("rootID = \"" + this.courseModule.id + "\"");
            taskQuery.populate = 'ancestor';
            taskQuery.limit = 20;
            taskQuery.sortby = 'endDate asc';
            this.isLoadingTasks = true;
            this.taskService
                .queryByResourceForStudent(this.courseModule.id, taskQuery)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.isLoadingTasks = false); }))
                .subscribe(function (result) {
                _this.tasks = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(result.data);
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        }
    };
    CourseModuleOverviewPage.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.resizeSub.unsubscribe();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CourseModuleOverviewPage.prototype.updateDimensions = function () {
        this.screenxs = modernizr__WEBPACK_IMPORTED_MODULE_3___default.a.mq('(max-width: 767px)');
        this.screensm = modernizr__WEBPACK_IMPORTED_MODULE_3___default.a.mq('(min-width: 768px) and (max-width: 991px)');
        this.screenmd = modernizr__WEBPACK_IMPORTED_MODULE_3___default.a.mq('(min-width: 992px) and (max-width: 1199px)');
        this.screenlg = modernizr__WEBPACK_IMPORTED_MODULE_3___default.a.mq('(min-width: 1200px)');
    };
    CourseModuleOverviewPage.prototype.updatePromoVideo = function (url) {
        var _this = this;
        this.courseModuleService
            .patch({ id: this.courseModule.id, promoVideo: url })
            .subscribe(function () {
            _this.snackBarService.pop('Module trailer updated.', 'success');
        }, function (err) {
            _this.errorHandlerService.handle(err);
        });
    };
    CourseModuleOverviewPage.prototype.updateOverview = function (overview) {
        var _this = this;
        this.courseModuleService
            .patch({ id: this.courseModule.id, purpose: overview })
            .subscribe(function () {
            _this.snackBarService.pop('Module overview updated.', 'success');
        }, function (err) {
            _this.errorHandlerService.handle(err);
        });
    };
    CourseModuleOverviewPage.prototype.leaveModule = function () {
        var _this = this;
        var leave = function () {
            _this.courseModuleService.leave(_this.courseModule.id).subscribe(function () {
                _this.router.navigate(['/modules']);
                _this.snackBarService.pop("You have left " + _this.courseModule.courseName + ".", 'success');
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        };
        this.confirmService
            .confirm('Are you sure you want to leave this module?')
            .then(function (yes) { return yes && leave(); });
    };
    CourseModuleOverviewPage.prototype.disableLearningFlow = function () {
        var _this = this;
        var disable = function () {
            _this.courseModuleService
                .patch({ id: _this.courseModule.id, enableLearningFlow: false })
                .subscribe(function (courseModule) {
                _this.courseModule = courseModule;
                _this.learningFlowEnabled = _this.courseModule.enableLearningFlow;
                _this.lessons = _this.lessons.clear();
                _this.snackBarService.pop('Learning flow disabled.', 'success');
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        };
        this.confirmService
            .confirm('Are you sure you want to disable Learning Flow?')
            .then(function (yes) { return yes && disable(); });
    };
    CourseModuleOverviewPage.prototype.enableLearningFlow = function () {
        var _this = this;
        if (!this.courseModule.enableLearningFlow) {
            this.courseModuleService
                .patch({ id: this.courseModule.id, enableLearningFlow: true })
                .subscribe(function (courseModule) {
                _this.lessonService
                    .getByModuleID(_this.courseModule.id)
                    .subscribe(function (result) {
                    var lessons = result.data;
                    if (lessons.length > 0) {
                        _this.lessons = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])(lessons);
                        _this.snackBarService.pop('Learning flow enabled.', 'success');
                    }
                    else {
                        _this.router.navigate(['setup/enable-flow'], {
                            relativeTo: _this.route,
                        });
                    }
                });
            }, function (err) {
                _this.errorHandlerService.handle(err);
            });
        }
        else {
            this.router.navigate(['setup/enable-flow'], { relativeTo: this.route });
        }
    };
    CourseModuleOverviewPage.prototype.academicModule = function (courseModule) {
        return !courseModule.isCorporateCourse;
    };
    CourseModuleOverviewPage.prototype.resetWeek = function () {
        var _this = this;
        this.confirmService
            .confirm({
            question: this.resetWeekQuestion
        }).then(function (yes) {
            if (yes) {
                var payload = {
                    resourceID: _this.courseModule.id,
                    displayByWeekPeriod: true,
                    timeTableIncluded: false,
                    publish: true
                };
                _this.lessonService.updateTopicWeek(payload).subscribe(function (data) {
                    _this.snackBarService.pop('Weeks updated successfully.', 'success');
                }, function (err) {
                    var errorKeys = Object.keys(err.error);
                    if (errorKeys.includes('code')) {
                        _this.errorHandlerService.handle(err);
                    }
                    else {
                        _this.errorWeeks = errorKeys.map(function (errorKey) {
                            return errorKey.replace(/(^.*\[|\].*$)/g, '');
                        });
                        _this.snackBarService.openFromTemplate(_this.snackTemplate, { panelClass: 'error' });
                    }
                });
            }
        });
    };
    return CourseModuleOverviewPage;
}(_core_page_base__WEBPACK_IMPORTED_MODULE_13__["PageBase"]));



/***/ }),

/***/ "./src/app/learning-flow/lesson.service.ts":
/*!*************************************************!*\
  !*** ./src/app/learning-flow/lesson.service.ts ***!
  \*************************************************/
/*! exports provided: LessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonService", function() { return LessonService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_learning_flow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/learning-flow */ "./src/app/models/learning-flow.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/app/utils/index.ts");
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










var LessonService = /** @class */ (function (_super) {
    __extends(LessonService, _super);
    function LessonService(environment, userService, httpClient) {
        var _this = _super.call(this, _models_learning_flow__WEBPACK_IMPORTED_MODULE_4__["Lesson"], userService, httpClient, environment) || this;
        _this.resourceBaseUrl = '/lessonplan/Lesson/';
        _this.isStaging = false;
        _this.onResourceUpdateWeeks = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.isStaging = environment.ENV === 'staging';
        if (_this.isStaging) {
            _this.apiBaseUrl = _this.environment.API_BASE_URL_GRP3;
        }
        else {
            _this.apiBaseUrl = _this.environment.API_BASE_URL;
        }
        return _this;
    }
    LessonService.prototype.getByModuleID = function (moduleID, query) {
        if (query === void 0) { query = new _utils__WEBPACK_IMPORTED_MODULE_6__["RESTQuery"](); }
        query.params = underscore__WEBPACK_IMPORTED_MODULE_3__["extend"]({}, query.params, { ModuleID: moduleID });
        return _super.prototype.query.call(this, query);
    };
    LessonService.prototype.multiplePublish = function (payload) {
        var _this = this;
        return this.httpClient
            .put(this.apiBaseUrl + this.resourceBaseUrl + 'MultiplePublish', payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _utils__WEBPACK_IMPORTED_MODULE_6__["RESTQueryResult"](r, function (m) { return _this.createModelInstance(m); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (d) { return d.data.forEach(function (l) { return _this.onResourceUpdated.emit(l); }); }));
    };
    LessonService.prototype.setupCalendarBased = function (moduleID, displayByWeekPeriod, timeTableIncluded, publish) {
        var _this = this;
        return this.httpClient
            .post(this.apiBaseUrl + this.resourceBaseUrl + 'NUSCalendar', {
            resourceID: moduleID,
            displayByWeekPeriod: displayByWeekPeriod,
            timeTableIncluded: timeTableIncluded,
            publish: publish
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _utils__WEBPACK_IMPORTED_MODULE_6__["RESTQueryResult"](r, function (m) { return _this.createModelInstance(m); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (d) { return d.data.forEach(function (l) { return _this.onResourceCreated.emit(l); }); }));
    };
    LessonService.prototype.setup = function (moduleID, lessonCount, publish) {
        var _this = this;
        return this.httpClient
            .post(this.apiBaseUrl + this.resourceBaseUrl + 'FreeFormat', {
            resourceID: moduleID,
            lessonCount: lessonCount,
            publish: publish
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _utils__WEBPACK_IMPORTED_MODULE_6__["RESTQueryResult"](r, function (m) { return _this.createModelInstance(m); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (d) { return d.data.forEach(function (l) { return _this.onResourceCreated.emit(l); }); }));
    };
    LessonService.prototype.remove = function (id, url) {
        if (url === void 0) { url = this.apiBaseUrl + this.resourceBaseUrl + id; }
        return _super.prototype.remove.call(this, id, url);
    };
    LessonService.prototype.updateTopicWeek = function (payload) {
        var _this = this;
        return this.httpClient
            .put(this.apiBaseUrl + this.resourceBaseUrl + 'ByNUSCalendar', payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return new _utils__WEBPACK_IMPORTED_MODULE_6__["RESTQueryResult"](r, function (m) { return _this.createModelInstance(m); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (d) { return _this.onResourceUpdateWeeks.emit(d.data); }));
    };
    LessonService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function LessonService_Factory() { return new LessonService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]("AppEnvironment"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: LessonService, providedIn: "root" });
    return LessonService;
}(_utils__WEBPACK_IMPORTED_MODULE_6__["RESTService"]));



/***/ })

}]);