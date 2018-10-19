webpackJsonp([1,4],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http, location) {
        this.http = http;
        this.location = location;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api_url;
        this.ARG = [];
        this.randomConflictingArgSubtype = [];
    }
    DataService.prototype.getRandomConflictingArgSubtype = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/get/subtype/random/')
            .map(function (res) {
            _this.randomConflictingArgSubtype = res.json();
        });
    };
    DataService.prototype.getRandomKnownARG = function () {
        var _this = this;
        // console.log(this.baseUrl)
        return this.http.get(this.baseUrl + '/get/arg/random/')
            .map(function (res) {
            try {
                _this.ARG = res.json();
            }
            catch (error) {
                _this.ARG = { "status": false };
            }
        });
    };
    DataService.prototype.searchAPI = function (keyword, index) {
        return this.http.get(this.baseUrl + '/get/search/?keyword=' + keyword.replace(/\s/g, '') + '&index=' + index)
            .map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.fast_search = function (keyword, index, action) {
        return this.http.get(this.baseUrl + '/get/fast_search/?keyword=' + keyword.replace(/\s/g, '') + '&index=' + index + '&action=' + action)
            .map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.getKnownARGInfo = function (gene_id) {
        var _this = this;
        return this.http.get(this.baseUrl + '/get/arg/info/' + gene_id)
            .map(function (res) {
            _this.ARG = res.json();
        });
    };
    DataService.prototype.getListAntibioticClass = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/get/antibiotic/class')
            .map(function (res) {
            _this.ATYPE = res.json();
        });
    };
    DataService.prototype.getListAntibioticGroup = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/get/antibiotic/group')
            .map(function (res) {
            _this.ATYPE = res.json();
        });
    };
    DataService.prototype.insertCuration = function (curation) {
        curation['gene_id'] = this.ARG['entry']['gene_id'];
        console.log(curation);
        return this.http.post(this.baseUrl + '/post/curation', curation)
            .map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.predict_nomenclature = function (parameters) {
        return this.http.post(this.baseUrl + '/predict/nomenclature/', parameters)
            .map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.get_plasmid = function (parameters) {
        return this.http.post(this.baseUrl + '/get/plasmid/', parameters)
            .map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.getDatabaseList = function () {
        return this.http.get(this.baseUrl + '/get/database/list')
            .map(function (res) {
            return res.json();
        });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(656),
        styles: [__webpack_require__(569)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualize_class__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var AdminComponent = (function () {
    function AdminComponent(adminService, dataService) {
        this.adminService = adminService;
        this.dataService = dataService;
        this.datetime = new Date(0);
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.scores = [];
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(EMAIL_REGEX)
        ]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required
        ]);
        this.online = false;
        this.databaseVersion = '';
        this.databaseComments = '';
        this.ARGindex = 0;
        this.getARG(this.ARGindex);
    };
    AdminComponent.prototype.acceptAnnotation = function () {
        var _this = this;
        this.adminService.updateGene(this.ARG)
            .subscribe(function (res) {
            _this.ARGindex += 1;
            _this.getARG(_this.ARGindex);
        });
    };
    AdminComponent.prototype.updateConflictingARGs = function () {
        this.adminService.updateConfilctingARGs()
            .subscribe(function (res) {
        });
    };
    AdminComponent.prototype.login = function (email, password) {
        var _this = this;
        this.adminService.login({ email: email, password: password })
            .subscribe(function (res) {
            // console.log(res);
            _this.online = res['token'];
        });
    };
    AdminComponent.prototype.upgradeDataBase = function (version, comments) {
        var _this = this;
        this.adminService.upgradeDatabase({ version: version, comments: comments })
            .subscribe(function (res) {
            // console.log(res,'123456')
            _this.databaseVersion = null;
            _this.databaseComments = null;
        });
    };
    AdminComponent.prototype.getARG = function (idx) {
        var _this = this;
        this.adminService.getCuratedARGs(idx)
            .subscribe(function (res) {
            _this.curatedARGs = res;
            _this.curatedARGs[0]['inspected'].forEach(function (e) {
                var date = new Date(e.token);
                e.date = date.toLocaleDateString('en-GB');
            });
            _this.adminService.score_annotation(_this.curatedARGs[0]['entry']['gene_id'])
                .subscribe(function (response) {
                _this.scores = response;
                _this.ARG = {
                    gene_id: _this.curatedARGs[0]['entry']['gene_id'],
                    type: _this.scores[0]['scores'][0]['name'],
                    subtype: _this.scores[1]['scores'][0]['name'],
                    mechanism: _this.scores[2]['scores'][0]['name'],
                    inspected: _this.scores[0]['scores'][0]['counts'],
                    score: [
                        { kind: _this.scores[0]['kind'], score: _this.scores[0]['scores'][0]['score'] },
                        { kind: _this.scores[1]['kind'], score: _this.scores[1]['scores'][0]['score'] },
                        { kind: _this.scores[2]['kind'], score: _this.scores[2]['scores'][0]['score'] },
                    ]
                };
            });
            _this.ARGindex += 1;
        });
    };
    AdminComponent.prototype.search = function (keyword) {
        var _this = this;
        var indx = '0';
        this.dataService.searchAPI(keyword, indx)
            .subscribe(function (response) {
            console.log(response);
            _this.curatedARGs = [response];
            _this.curatedARGs[0]['inspected'].forEach(function (e) {
                var date = new Date(e.token);
                e.date = date.toLocaleDateString('en-GB');
            });
            _this.adminService.score_annotation(_this.curatedARGs[0]['entry']['gene_id'])
                .subscribe(function (response) {
                _this.scores = response;
            });
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(657),
        styles: [__webpack_require__(570)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__visualize_class__["a" /* ComplexPieChart */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classify_component__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// services

// components

var ExploreComponent = (function () {
    function ExploreComponent(dataService, classifyComponent) {
        this.dataService = dataService;
        this.classifyComponent = classifyComponent;
    }
    ExploreComponent.prototype.ngOnInit = function () {
        this.loading_search = false;
        this.search_keyword = '';
        this.search_general_result = [];
        this.selected_gene = [];
        this.search_on = false;
        this.search_index = 0;
        // this.search(this.search_keyword);
    };
    ExploreComponent.prototype.search = function (argID) {
        var _this = this;
        this.loading_search = true;
        this.dataService.fast_search(argID, '0', 'overall')
            .subscribe(function (response) {
            // console.log(response);
            _this.search_general_result = response;
            _this.loading_search = false;
            _this.search_keyword = null;
            _this.search_on = true;
            _this.search_index = 0;
        });
    };
    ExploreComponent.prototype.close_search = function () {
        this.search_on = false;
        // console.log(this.search_on);
    };
    ExploreComponent.prototype.explore_gene = function (data) {
        this.selected_gene = data;
        // console.log(this.selected_gene);
        this.search_index = 0;
        this.classifyComponent.search(this.selected_gene.sequences[this.search_index][0]);
    };
    ExploreComponent.prototype.explore_next = function () {
        this.search_index = (this.search_index < this.selected_gene.sequences.length - 1) ? this.search_index += 1 : 0;
        this.classifyComponent.search(this.selected_gene.sequences[this.search_index][0]);
    };
    return ExploreComponent;
}());
ExploreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-explore',
        template: __webpack_require__(664),
        styles: [__webpack_require__(577)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__classify_component__["a" /* ClassifyComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__classify_component__["a" /* ClassifyComponent */]) === "function" && _b || Object])
], ExploreComponent);

var _a, _b;
//# sourceMappingURL=explore.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__explore_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__explore_routing_module__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// primeng









var ExploreModule = (function () {
    function ExploreModule() {
    }
    return ExploreModule;
}());
ExploreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_10__explore_routing_module__["a" /* ExploreRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* CompatibilityModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["StepsModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CodeHighlighterModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar__["ProgressBarModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable__["DataTableModule"]
        ],
        declarations: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_0__explore_component__["a" /* ExploreComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"]
        ],
    })
], ExploreModule);

//# sourceMappingURL=explore.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var InstructionsComponent = (function () {
    function InstructionsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    InstructionsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return InstructionsComponent;
}());
InstructionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-instructions',
        template: __webpack_require__(666),
        styles: [__webpack_require__(579)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _a || Object, Object])
], InstructionsComponent);

var _a;
//# sourceMappingURL=instructions.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseComponent = (function () {
    function DatabaseComponent(dataService) {
        this.dataService = dataService;
    }
    DatabaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getDatabaseList()
            .subscribe(function (response) {
            _this.databases = response;
        });
    };
    return DatabaseComponent;
}());
DatabaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-database',
        template: __webpack_require__(670),
        styles: [__webpack_require__(583)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], DatabaseComponent);

var _a;
//# sourceMappingURL=database.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.info = [
            {
                title: 'Crowdsourcing',
                subtitle: 'ARGminer is open to the ARG community',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/collaborate.svg',
                description: 'ARGminer is an effort to correct the annotation of ARGs from multiple databases into a common nomenclature by removing redundant information. It also brings the opportunity to experts to share their knowledge by inspecting and evaluating ARGs.'
            },
            {
                title: 'Open Database',
                subtitle: 'ARGminer is free',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/open.svg',
                description: 'ARGminer includes ARGs from multiple resources and provides information from each one of those resources. Thus, you can verify the authenticity of the annotations through the different resources. To date, ARGminer is the only platform that offers comparisons among different ARG resources.',
                credit: "<a href='https://www.freepik.com/free-vector/open-locker_2900481.htm'>Designed by Rawpixel.com</a>"
            },
            {
                title: 'Complementary information',
                subtitle: 'ARGminer and Mobile Genetic Elements',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/mobile.svg',
                description: 'ARGminer also provides insights into mobile genetic elements by using the ACLAME database to identify ARGs with evidence of being carried by MGEs as well as a intesive search of ARGs in plasmids from the PATRIC database.',
                credit: "<a href='https://www.freepik.com/free-vector/biology-organisms_766984.htm'>Designed by Freepik</a>"
            },
            {
                title: 'Periodic Update',
                subtitle: 'ARGminer is constantly updated',
                subsubtitle: 'Contribute to ARGminer is easy!',
                image: 'assets/images/update.svg',
                description: 'As the collaborative nature of ARGminer, it is expected to update ARGminer periodically towards to build a solid and standarized product available for the ARG community.',
                credit: "<a href='https://www.freepik.com/free-vector/business-woman-character-improving_1105849.htm'>Designed by Freepik</a>"
            }
        ];
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(671),
        styles: [__webpack_require__(584)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminService = (function () {
    function AdminService(http, location) {
        this.http = http;
        this.location = location;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].api_url;
    }
    // ADMIN SECTION
    AdminService.prototype.getCuratedARGs = function (ixg) {
        return this.http.get(this.baseUrl + "/admin/inspect/arg/" + ixg)
            .map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.search = function (keyword) {
        return this.http.get(this.baseUrl + "/admin/inspect/token/" + keyword)
            .map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.updateGene = function (fields) {
        return this.http.post(this.baseUrl + "/admin/update/arg/", fields)
            .map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.updateConfilctingARGs = function () {
        return this.http.get(this.baseUrl + "/admin/update/conflict/arg/")
            .map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.login = function (cred) {
        return this.http.post(this.baseUrl + "/admin/login/", cred)
            .map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.upgradeDatabase = function (cred) {
        return this.http.post(this.baseUrl + "/admin/upgrade/database/", cred)
            .map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.score_annotation = function (gene_id) {
        return this.http.get(this.baseUrl + '/admin/score/' + gene_id)
            .map(function (res) {
            return res.json();
        });
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object])
], AdminService);

var _a, _b;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NcbiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NcbiService = (function () {
    function NcbiService(http) {
        this.http = http;
    }
    NcbiService.prototype.getPubMed = function (pubMedID) {
        return this.http.get('https://www.ncbi.nlm.nih.gov/CBBresearch/Lu/Demo/RESTful/tmTool.cgi/BioConcept/' + pubMedID + '/JSON/')
            .map(function (res) {
            // this.reference = res.json()
            // console.log(res.json())
            try {
                return res.json();
            }
            catch (error) {
                console.log(res);
                return res.json();
            }
        });
    };
    return NcbiService;
}());
NcbiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NcbiService);

var _a;
//# sourceMappingURL=ncbi.service.js.map

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 256;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplexPieChart; });
var ComplexPieChart = (function () {
    function ComplexPieChart() {
        this.data = [];
        this.totalCategoryCounts = 0;
        this.bestCategoryCounts = 0;
        this.confidenc = {};
        this.expertc = {};
        this.mge = 0;
        this.pathogen = 0;
        this.showLegend = false;
        this.explodeSlices = false;
        this.doughnut = false;
        this.gradient = true;
        this.showLabels = true;
        this.bestCategory = "---";
        this.bestCategoryCounts = 0;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.ready = false;
    }
    ComplexPieChart.prototype.draw = function (edata, key) {
        var _this = this;
        var counts = {};
        // let mge = 0
        edata.forEach(function (element) {
            try {
                element[key] = element[key].toLowerCase();
            }
            catch (error) {
            }
            counts[element[key]] = counts[element[key]] ? counts[element[key]] + 1 : 1;
            try {
                _this.confidenc[element[key]] = _this.confidenc[element[key]] ? _this.confidenc[element[key]] + element['rating']['confidence']['value'] : element['rating']['confidence']['value'];
            }
            catch (error) {
                // element['rating']['confidence']['value'] = 0;
            }
            try {
                _this.expertc[element[key]] = _this.expertc[element[key]] ? _this.expertc[element[key]] + element['rating']['expertise']['value'] : element['rating']['expertise']['value'];
            }
            catch (error) {
                // element['rating']['expertise']['value'] = 0;
            }
            try {
                _this.mge += element['rating']['mge']['value'];
            }
            catch (error) {
                // element['rating']['mge']['value'] = 0;
            }
            try {
                _this.pathogen += element['rating']['genome']['value'];
            }
            catch (error) {
                // element['rating']['genome']['value'] = 0;
            }
        });
        // let data = [];
        var CNTs = {};
        for (var k in counts) {
            this.data.push({ name: k, value: counts[k], confidence: this.confidenc[k], expertice: this.expertc[k] });
            CNTs[k] = this.confidenc[k] / edata.length + 1.2 * this.expertc[k] / edata.length;
        }
        this.bestCategory = Object.keys(CNTs).reduce(function (a, b) { return CNTs[a] > CNTs[b] ? a : b; });
        this.bestCategoryCounts = counts[this.bestCategory];
        this.totalCategoryCounts = edata.length;
        this.ready = true;
    };
    return ComplexPieChart;
}());

//# sourceMappingURL=visualize.class.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classify_classify_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__ = __webpack_require__(151);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });






var router = [
    {
        path: '',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'classify', component: __WEBPACK_IMPORTED_MODULE_1__classify_classify_component__["a" /* ClassifyComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
            { path: 'database', component: __WEBPACK_IMPORTED_MODULE_3__database_database_component__["a" /* DatabaseComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__["a" /* AdminComponent */] },
            { path: 'instructions', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] }
            // { path: 'explore', component: ExploreComponent}
        ]
    }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(router, { useHash: true });
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(658),
        styles: [__webpack_require__(571)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classify_explore_explore_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classify_classify_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__database_database_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_charts__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_ncbi_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_admin_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_hammerjs__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { HomeComponent } from './home/home.component';
// import { DatabaseComponent } from './database/database.component';

// APP modules



// import {NgCytoscapeModule} from "ng2-cytoscape/dist";
// Visualization

// Services





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            // jqxChartComponent,
            __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__classify_classify_module__["a" /* ClassifyModule */],
            __WEBPACK_IMPORTED_MODULE_0__classify_explore_explore_module__["a" /* ExploreModule */],
            __WEBPACK_IMPORTED_MODULE_12__database_database_module__["a" /* DatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_13__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_15__services_ncbi_service__["a" /* NcbiService */],
            __WEBPACK_IMPORTED_MODULE_16__services_admin_service__["a" /* AdminService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestHitArdbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BestHitArdbComponent = (function () {
    function BestHitArdbComponent(dataService) {
        this.dataService = dataService;
    }
    BestHitArdbComponent.prototype.ngOnInit = function () {
        this.render = false;
        this.randomARG = this.dataService.ARG;
        this.alCoverage = 100 * this.randomARG['besthit']['alignments'][0]['algn_length'] / this.randomARG['entry']['length'].toFixed(0);
        if (this.randomARG['besthit']) {
            this.render = true;
        }
    };
    return BestHitArdbComponent;
}());
BestHitArdbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'besthit-metadata-ardb',
        template: __webpack_require__(659),
        styles: [__webpack_require__(572)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], BestHitArdbComponent);

var _a;
//# sourceMappingURL=ardb.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestHitCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BestHitCardComponent = (function () {
    function BestHitCardComponent(dataService) {
        this.dataService = dataService;
    }
    BestHitCardComponent.prototype.get_subtype = function (element) {
        if (element.best_hit_database === 'ARDB') {
            return element.metadata.subtype;
        }
        else {
            return element.subtype;
        }
    };
    BestHitCardComponent.prototype.get_best_hit_id = function (element) {
        if (element.best_hit_database === 'megares') {
            return element.best_hit.split('|')[1];
        }
        else {
            return element.best_hit;
        }
    };
    BestHitCardComponent.prototype.get_coverage = function (element) {
        if (element.best_hit_database === 'ARDB') {
            var coverage = (100 * element.algn_len / this.randomARG['entry'].length).toFixed(0);
            return element.coverage <= 100 ? element.coverage : 100;
        }
        else {
            return element.coverage <= 100 ? element.coverage : 100;
        }
    };
    BestHitCardComponent.prototype.get_bitscore_rate = function (element) {
        if (element.best_hit_database === 'CARD') {
            return (100 * element.bitscore / element.optimum_bit_score).toFixed(0);
        }
        else {
            // return (100*element.bitscore/1000).toFixed(0);
            return null;
        }
    };
    BestHitCardComponent.prototype.get_antibiotic_class = function (element) {
        if (element.best_hit_database === 'CARD') {
            return element.metadata.filter(function (e) { return e.category_aro_class_name === "Drug Class"; }).map(function (e) { return e.category_aro_name; });
        }
        else if (element.best_hit_database === 'ARDB') {
            // return (100*element.bitscore/1000).toFixed(0);
            return element.metadata.resistance_profile.map(function (e) { return e.type; });
        }
        else {
            return [element.type];
        }
    };
    BestHitCardComponent.prototype.get_nomenclature = function (keyword, _res) {
        this.dataService.predict_nomenclature({ sentence: keyword })
            .subscribe(function (res) {
            _res = res;
        });
    };
    BestHitCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.color = 'rgb(255,0,0)';
        this.randomARG = this.dataService.ARG;
        this.render = false;
        this.cars = [];
        this.predicted_nomenclature = [];
        // this.alCoverage = 100*this.randomARG['besthit']['alignments'][0]['algn_len'] / this.randomARG['entry']['length'].toFixed(0)
        // console.log(this.alCoverage)
        if (this.randomARG['besthit']) {
            // traverse the alignments and create the table
            var _max_bitscore_1 = this.randomARG['besthit']['alignments'].map(function (e) {
                return e.bitscore;
            });
            _max_bitscore_1 = Math.max.apply(Math, _max_bitscore_1);
            this.randomARG['besthit']['alignments'].forEach(function (element) {
                _this.cars.push({
                    database: element.best_hit_database,
                    gene_name: _this.get_subtype(element),
                    best_hit_id: _this.get_best_hit_id(element),
                    similarity: element.identity.toFixed(2),
                    coverage: _this.get_coverage(element),
                    bitscore_rate: 'rgba(' + (255 * element.bitscore / _max_bitscore_1).toFixed(0) + ',0,0,' + element.bitscore / _max_bitscore_1 + ')',
                    bitscore: element.bitscore.toFixed(1),
                    antibiotic: _this.get_antibiotic_class(element),
                });
            });
            var _sentence = this.cars.map(function (e) {
                return (e.bitscore > 150) ? e.gene_name : '';
            }).join(' ');
            console.log(this.cars);
            // this.get_nomenclature(_sentence, this.predicted_nomenclature);
            this.dataService.predict_nomenclature({ sentence: _sentence })
                .subscribe(function (res) {
                _this.predicted_nomenclature = res;
            });
            this.render = true;
        }
    };
    return BestHitCardComponent;
}());
BestHitCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'besthit-metadata-card',
        template: __webpack_require__(660),
        styles: [__webpack_require__(573)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], BestHitCardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenericComponent = (function () {
    function GenericComponent(dataService) {
        this.dataService = dataService;
    }
    GenericComponent.prototype.ngOnInit = function () {
        this.render = false;
        this.randomARG = this.dataService.ARG;
        this.alCoverage = 100 * this.randomARG['besthit']['alignments'][0]['algn_length'] / this.randomARG['entry']['length'];
        if (this.randomARG['besthit']) {
            this.render = true;
        }
    };
    return GenericComponent;
}());
GenericComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-generic',
        template: __webpack_require__(661),
        styles: [__webpack_require__(574)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], GenericComponent);

var _a;
//# sourceMappingURL=generic.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classify_component__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__classify_component__["a" /* ClassifyComponent */] }
];
var ClassifyRoutingModule = (function () {
    function ClassifyRoutingModule() {
    }
    return ClassifyRoutingModule;
}());
ClassifyRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ClassifyRoutingModule);

//# sourceMappingURL=classify-routing.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_star_rating__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_accordion_accordion__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_accordion_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_accordion_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classify_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classify_routing_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__metadata_uniprot_uniprot_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__metadata_card_card_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__metadata_ardb_ardb_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__besthit_card_card_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__besthit_ardb_ardb_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__genomes_genome_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__curate_curate_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__besthit_generic_generic_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__instructions_instructions_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__explore_explore_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__explore_explore_module__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// Visualization
// import { NgxChartsModule} from '@swimlane/ngx-charts';

// primeng









// Metadata



// BestHit


// Genomes and MGE

// import { GenomeModule } from './genomes/genome.module';
// Curate






// tour walkthroug
// import { HintModule } from 'angular-custom-tour';

var ClassifyModule = (function () {
    function ClassifyModule() {
    }
    return ClassifyModule;
}());
ClassifyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* CompatibilityModule */],
            __WEBPACK_IMPORTED_MODULE_12__classify_routing_module__["a" /* ClassifyRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            // NoopAnimationsModule,
            // NgxChartsModule,
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["StepsModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular_star_rating__["a" /* StarRatingModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CodeHighlighterModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_components_progressbar_progressbar__["ProgressBarModule"],
            __WEBPACK_IMPORTED_MODULE_9_primeng_components_datatable_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_components_accordion_accordion__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_23__explore_explore_module__["a" /* ExploreModule */]
            // HintModule,
            // GenomeModule
        ],
        schemas: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__classify_component__["a" /* ClassifyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__metadata_uniprot_uniprot_component__["a" /* UniprotComponent */],
            __WEBPACK_IMPORTED_MODULE_14__metadata_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__metadata_ardb_ardb_component__["a" /* ArdbComponent */],
            __WEBPACK_IMPORTED_MODULE_17__besthit_ardb_ardb_component__["a" /* BestHitArdbComponent */],
            __WEBPACK_IMPORTED_MODULE_16__besthit_card_card_component__["a" /* BestHitCardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__genomes_genome_component__["a" /* GenomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__curate_curate_component__["a" /* CurateComponent */],
            __WEBPACK_IMPORTED_MODULE_20__besthit_generic_generic_component__["a" /* GenericComponent */],
            __WEBPACK_IMPORTED_MODULE_22__explore_explore_component__["a" /* ExploreComponent */],
            __WEBPACK_IMPORTED_MODULE_21__instructions_instructions_component__["a" /* InstructionsComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_11__classify_component__["a" /* ClassifyComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_21__instructions_instructions_component__["a" /* InstructionsComponent */]
        ]
    })
], ClassifyModule);

//# sourceMappingURL=classify.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classify_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__score_class__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CurateComponent = (function () {
    function CurateComponent(dataService, classifyComponent, confirmationService) {
        var _this = this;
        this.dataService = dataService;
        this.classifyComponent = classifyComponent;
        this.confirmationService = confirmationService;
        this.display = false;
        this.activeIndex = 0;
        this.options_type = [];
        this.group_options = [];
        this.mge_options = ["Plasmid", "Virus", "Prophage"];
        this.notification = [];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.groupControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.mgeControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        // keep track of the ratings bars
        this.onRatingChange = function (label, $event) {
            // console.log(label, $event);
            _this.antibiotic['rating'][label] =
                {
                    name: label,
                    value: $event['rating']
                };
        };
    }
    CurateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inspectedGenes = [];
        this.overlay = {
            title: "none",
            content: "none"
        };
        this.step1 = true;
        // menu
        this.items = [
            { label: '' },
            { label: '' },
            { label: '' }
        ];
        // Get ARG data
        this.randomARG = this.dataService.ARG;
        this.liveScore = new __WEBPACK_IMPORTED_MODULE_7__score_class__["a" /* ScoreAnnotation */]();
        this.liveScoreAnnotation = { class: 0, group: 0, mechanism: 0 };
        this.antibiotic = {
            class: null,
            group: null,
            mechanism: null,
            onlineScore: { class: 0, group: 0, mechanism: 0 },
            MGE: {},
            comments: "",
            rating: {},
            gene_id: "",
            token: "------------"
        };
        // Get the list of antibiotic types in the database
        this.dataService.getListAntibioticClass()
            .subscribe(function (response) {
            for (var _i = 0, _a = _this.dataService.ATYPE; _i < _a.length; _i++) {
                var type = _a[_i];
                _this.options_type.push(type['type']);
            }
            // console.log(this.options)
            _this.filteredOptions = _this.myControl.valueChanges
                .startWith(null)
                .map(function (val) { return val ? _this.filter(val, _this.options_type) : _this.options_type.slice(); });
        });
        // Get list of antibiotic subtypes
        this.dataService.getListAntibioticClass()
            .subscribe(function (response) {
            for (var _i = 0, _a = _this.dataService.ATYPE; _i < _a.length; _i++) {
                var type = _a[_i];
                // this.group_options.push(type['subtype'])
            }
            // console.log(this.options)
            _this.groupFilteredOptions = _this.groupControl.valueChanges
                .startWith(null)
                .map(function (val) { return val ? _this.filter(val, _this.group_options) : _this.group_options.slice(); });
        });
    };
    // Filter once typing the type of antibiotic
    CurateComponent.prototype.filter = function (val, Marray) {
        return Marray.filter(function (option) { return new RegExp("" + val, 'gi').test(option); });
    };
    // setup the options under mobile genetic elements
    CurateComponent.prototype.mgeOptions = function (label, event) {
        this.antibiotic['MGE'][label] =
            {
                name: label,
                value: event.checked
            };
    };
    ;
    CurateComponent.prototype.showDialog = function () {
        this.display = true;
    };
    // to keep track of the changes between the steps
    CurateComponent.prototype.validate = function (value) {
        this.classifyComponent.scrollToMGEs();
        if (value == 1) {
            this.liveScoreAnnotation = this.liveScore.score(this.classifyComponent.randomARG, this.antibiotic);
            console.log(this.liveScoreAnnotation);
            if (this.antibiotic['class'] == null || this.antibiotic['group'] == null || this.antibiotic['mechanism'] == null) {
                this.classifyComponent.notification.push({ severity: 'error', summary: 'Score', detail: 'Your score is: 0 out of 100' });
            }
            else if (this.liveScoreAnnotation.class < 50 || this.liveScoreAnnotation.group < 50 || this.liveScoreAnnotation.mechanism < 50) {
                var points = (this.liveScoreAnnotation.class + this.liveScoreAnnotation.group + this.liveScoreAnnotation.mechanism) / 3;
                this.classifyComponent.notification.push({ severity: 'error', summary: 'Error', detail: 'Your score is: ' + points.toFixed(0) + ' out of 100 <hr>Class Score: ' + this.liveScoreAnnotation.class.toFixed(1) + '<br>Gene Name Score: ' + this.liveScoreAnnotation.group.toFixed(1) + '<br>Mechanism Score: ' + this.liveScoreAnnotation.mechanism.toFixed(1) });
            }
            else {
                this.classifyComponent.notification = [];
                var points = (this.liveScoreAnnotation.class + this.liveScoreAnnotation.group + this.liveScoreAnnotation.mechanism) / 3;
                this.classifyComponent.notification.push({ severity: 'success', summary: 'Success', detail: 'Your score is: ' + points.toFixed(0) + ' out of 100 <hr>Class Score: ' + this.liveScoreAnnotation.class.toFixed(1) + '<br>Gene Name Score: ' + this.liveScoreAnnotation.group.toFixed(1) + '<br>Mechanism Score: ' + this.liveScoreAnnotation.mechanism.toFixed(1) });
                this.antibiotic['onlineScore'] = this.liveScoreAnnotation;
                this.classifyComponent.ARG_display = false;
                this.classifyComponent.MGE_display = true;
                console.log(this.classifyComponent.ARG_display, this.classifyComponent.MGE_display);
                this.activeIndex = 1;
                this.step1 = false;
                this.step2 = true;
            }
        }
        else if (value == 2) {
            console.log(this.classifyComponent.ARG_display, this.classifyComponent.MGE_display);
            this.step2 = false;
            this.step3 = true;
            this.activeIndex = 2;
        }
        else if (value == 3) {
            this.classifyComponent.ARG_display = true;
            this.classifyComponent.MGE_display = false;
            this.step3 = false;
            this.step1 = true;
            this.activeIndex = 0;
        }
    };
    CurateComponent.prototype.submitReview = function () {
        var _this = this;
        // console.log(this.antibiotic)
        this.classifyComponent.ARG_display = true;
        this.classifyComponent.MGE_display = false;
        // show the overlay with the score
        // this.showDialog()
        this.antibiotic['token'] = Date.now();
        this.dataService.insertCuration(this.antibiotic)
            .subscribe(function (response) {
            // console.log(response)
            // restart the form values to empty.
            _this.inspectedGenes.push(_this.classifyComponent.randomARG['entry']['gene_id']);
            _this.continueReview();
            // alert("token: "+this.antibiotic['token']);
        });
    };
    CurateComponent.prototype.continueReview = function () {
        // Restart and get a new gene
        this.activeIndex = 0;
        this.step1 = true;
        this.step3 = false;
        this.classifyComponent.randomARG['entry']['database'] = '-------------';
        this.classifyComponent.randomARG['entry']['gene_id'] = '-----------';
        this.classifyComponent.randomARG['entry']['subtype'] = '-----------';
        this.classifyComponent.randomARG['entry']['type'] = '--------------';
        this.classifyComponent.randomARG['entry']['inspected'] = '-----';
        this.classifyComponent.randomARG['entry']['score'] = '----';
        this.classifyComponent.loading = true;
        this.antibiotic['class'] = null;
        this.antibiotic['group'] = null;
        this.antibiotic['mechanism'] = null;
        this.antibiotic['onlineScore'] = { class: 0, group: 0, mechanism: 0 };
        if (this.classifyComponent.conflictedArgSubtypeFlag) {
            this.classifyComponent.nextGeneConflictList();
        }
        else if (this.classifyComponent.trainingARGFlag) {
            this.classifyComponent.trainingARGNextGene();
        }
        else {
            this.classifyComponent.nextGene();
        }
        this.display = false;
    };
    return CurateComponent;
}());
CurateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-curate',
        template: __webpack_require__(663),
        styles: [__webpack_require__(576)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__score_class__["a" /* ScoreAnnotation */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__classify_component__["a" /* ClassifyComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__classify_component__["a" /* ClassifyComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], CurateComponent);

var _a, _b, _c;
//# sourceMappingURL=curate.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_intersect_index_js__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_intersect_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_intersect_index_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreAnnotation; });

// import removeStopwords from 'stopword/lib/stopword.js'
var ScoreAnnotation = (function () {
    function ScoreAnnotation() {
        this.texts = '';
    }
    ScoreAnnotation.prototype.getAllSubstrings = function (str, size) {
        var i, j, result = [];
        for (i = 0; i < str.length - size + 1; i++) {
            result.push(str.slice(i, i + size));
        }
        return result;
    };
    ScoreAnnotation.prototype.score = function (ARG, VAL) {
        var _this = this;
        this.texts = JSON.stringify(ARG['metadata']);
        ARG['besthit'].alignments.forEach(function (element) {
            if (element) {
                _this.texts += JSON.stringify(element);
            }
        });
        var unique = this.texts.replace(/\W|\_/g, " ").toUpperCase().match(/.{1,3}/g).filter(function (item, i, ar) { return ar.indexOf(item) === i; });
        // let unique2 = this.texts.replace(/\W|\_/g," ").toUpperCase().match(/.{1,4}/g).filter(function(item, i, ar){ return ar.indexOf(item) === i; });
        var unique2 = this.getAllSubstrings(this.texts.replace(/\W/g, " ").toUpperCase(), 4).filter(function (item, i, ar) { return ar.indexOf(item) === i; });
        var ggroup = this.getAllSubstrings(JSON.stringify([VAL['group']]).replace(/\W|\_|null/g, "").toUpperCase(), 3).filter(function (item, i, ar) { return ar.indexOf(item) === i; });
        var gclass = this.getAllSubstrings(JSON.stringify([VAL['class']]).replace(/\W|\_|null/g, "").toUpperCase(), 4).filter(function (item, i, ar) { return ar.indexOf(item) === i; });
        var gmech = this.getAllSubstrings(JSON.stringify([VAL['mechanism']]).replace(/\W|\_|null/g, "").toUpperCase(), 4).filter(function (item, i, ar) { return ar.indexOf(item) === i; });
        // console.log(gclass);
        var iclass = __WEBPACK_IMPORTED_MODULE_0_intersect_index_js___default()(unique2, gclass);
        var igroup = __WEBPACK_IMPORTED_MODULE_0_intersect_index_js___default()(unique, ggroup);
        var imech = __WEBPACK_IMPORTED_MODULE_0_intersect_index_js___default()(unique2, gmech);
        // console.log(ggroup, gclass, gmech);
        // console.log(iclass, igroup, imech);
        if (gclass.length == 0) {
            gclass = [1];
        }
        if (ggroup.length == 0) {
            ggroup = [1];
        }
        if (gmech.length == 0) {
            gmech = [1];
        }
        return {
            class: 100 * iclass.length / gclass.length,
            group: 100 * igroup.length / ggroup.length,
            mechanism: 100 * imech.length / gmech.length,
        };
    };
    return ScoreAnnotation;
}());

//# sourceMappingURL=score.class.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var ExploreRoutingModule = (function () {
    function ExploreRoutingModule() {
    }
    return ExploreRoutingModule;
}());
ExploreRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ExploreRoutingModule);

//# sourceMappingURL=explore-routing.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChart; });
var PieChart = (function () {
    function PieChart() {
        this.showLegend = false;
        this.explodeSlices = false;
        this.doughnut = false;
        this.gradient = true;
        this.showLabels = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.ready = false;
    }
    PieChart.prototype.draw = function (edata) {
        try {
            if (edata.length >= 1) {
                this.data = edata.sort(function (a, b) { return b.value - a.value; }).slice(0, 3);
                this.ready = true;
            }
            else {
                this.ready = false;
            }
        }
        catch (Error) {
            this.ready = false;
        }
    };
    return PieChart;
}());

//# sourceMappingURL=Charts.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Charts__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenomeComponent = (function () {
    function GenomeComponent(dataService, pieChart) {
        this.dataService = dataService;
        this.pieChart = pieChart;
    }
    GenomeComponent.prototype.ngOnInit = function () {
        this.genomeCount = 0;
        this.renderMobile = false;
        this.renderPathogen = false;
        this.randomARG = this.dataService.ARG;
        this.disease = new __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]();
        this.plasmid = [];
        this.disease.draw(this.randomARG['pathogen']['disease']);
        this.AMR_phenotype = new __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]();
        this.AMR_phenotype.draw(this.randomARG['pathogen']['phenotype']);
        this.host = new __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]();
        this.host.draw(this.randomARG['pathogen']['host']);
        this.conditions();
        this.render_plasmids();
    };
    GenomeComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    GenomeComponent.prototype.render_plasmids = function () {
        var _this = this;
        this.dataService.get_plasmid({ gene_id: this.randomARG['entry'].gene_id })
            .subscribe(function (res) {
            _this.plasmid = res;
        });
    };
    GenomeComponent.prototype.conditions = function () {
        try {
            this.genomeCount = 100 * this.randomARG['pathogen'].genomes_pathogen / this.randomARG['pathogen'].genomes_count.toFixed(0);
        }
        catch (error) {
            this.genomeCount = 0;
        }
        if (this.randomARG['mobile'][0].status === true) {
            this.renderMobile = true;
        }
        if (this.randomARG['pathogen'].status === true) {
            this.renderPathogen = true;
        }
    };
    return GenomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GenomeComponent.prototype, "gene_id", void 0);
GenomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'genome-metadata',
        template: __webpack_require__(665),
        styles: [__webpack_require__(578)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]) === "function" && _b || Object])
], GenomeComponent);

var _a, _b;
//# sourceMappingURL=genome.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArdbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArdbComponent = (function () {
    function ArdbComponent(dataService) {
        this.dataService = dataService;
        this.render = false;
    }
    ArdbComponent.prototype.ngOnInit = function () {
        this.randomARG = this.dataService.ARG;
        if (this.randomARG['metadata'].status == true) {
            this.render = true;
        }
    };
    return ArdbComponent;
}());
ArdbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'classify-metadata-ardb',
        template: __webpack_require__(667),
        styles: [__webpack_require__(580)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ArdbComponent);

var _a;
//# sourceMappingURL=ardb.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent(dataService) {
        this.dataService = dataService;
        this.render = false;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.randomARG = this.dataService.ARG;
        if (this.randomARG['metadata'].status == true) {
            this.render = true;
        }
    };
    return CardComponent;
}());
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'classify-metadata-card',
        template: __webpack_require__(668),
        styles: [__webpack_require__(581)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], CardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ncbi_service__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniprotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UniprotComponent = (function () {
    function UniprotComponent(dataService, ncbiService) {
        this.dataService = dataService;
        this.ncbiService = ncbiService;
        this.pubmed = [];
        this.render = false;
        this.renderError = false;
    }
    UniprotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomARG = this.dataService.ARG;
        // GET all reference ids from pubmed:
        if (this.randomARG['metadata'].status == false) {
            this.renderError = true;
        }
        if (this.randomARG['metadata'].status == true) {
            this.render = true;
            this.randomARG['metadata'].references.forEach(function (element) {
                if (element.citation.dbReferences) {
                    element.citation.dbReferences.forEach(function (citation) {
                        if (citation.type == "PubMed") {
                            _this.ncbiService.getPubMed(citation.id)
                                .subscribe(function (response) {
                                var str = response.text;
                                var lstr = [];
                                var inpos = 0;
                                var denotations = [];
                                try {
                                    var denotations_1 = response.denotations.sort(function (a, b) { return b.span.begin - a.span.begin; }).reverse();
                                }
                                catch (err) {
                                    denotations = [];
                                }
                                // let denotations = response.denotations
                                for (var _i = 0, denotations_2 = denotations; _i < denotations_2.length; _i++) {
                                    var pos = denotations_2[_i];
                                    lstr.push({ "text": str.substring(inpos, pos.span.begin), "type": "paragraph" });
                                    lstr.push({ "text": str.substring(pos.span.begin, pos.span.end), "type": "keyword" });
                                    inpos = pos.span.end;
                                }
                                lstr.push(str.substring(inpos, str.length));
                                // console.log(denotations)
                                citation['abstract'] = lstr;
                            });
                        }
                    });
                }
            });
        }
        // console.log(this.randomARG)
    };
    return UniprotComponent;
}());
UniprotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'classify-metadata-uniprot',
        template: __webpack_require__(669),
        styles: [__webpack_require__(582)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ncbi_service__["a" /* NcbiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ncbi_service__["a" /* NcbiService */]) === "function" && _b || Object])
], UniprotComponent);

var _a, _b;
//# sourceMappingURL=uniprot.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var DatabaseRoutingModule = (function () {
    function DatabaseRoutingModule() {
    }
    return DatabaseRoutingModule;
}());
DatabaseRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], DatabaseRoutingModule);

//# sourceMappingURL=database-routing.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_routing_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DatabaseModule = (function () {
    function DatabaseModule() {
    }
    return DatabaseModule;
}());
DatabaseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__database_routing_module__["a" /* DatabaseRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__database_component__["a" /* DatabaseComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_3__database_component__["a" /* DatabaseComponent */]
        ]
    })
], DatabaseModule);

//# sourceMappingURL=database.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instructions_instructions_component__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import instructions component for modal window

var ClassifyComponent = (function () {
    function ClassifyComponent(dataService, router, dialog
        // public hintService: HintService
    ) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.dialog = dialog;
        this.loading = false;
        this.drawGenomes = false;
        this.searchIndex = 0;
        this.conflictedArgSubtypeFlag = false;
        this.conflictedArgSubtypeGeneListCounter = 1;
        this.conflictedArgSubtypeClassListCounter = 0;
        this.trainingARGFlag = false;
        this.trainingARGCount = 0;
        this.trainingARGTotal = 0;
        this.notification = [];
        this.trainingGenes = [
            "YP_490697.1",
            "AAM15533.1",
            "AAR84672.1",
            "P52067",
            "YP_042788",
            "YP_416138",
            "AAB53445.1",
            "F0JWD5",
            "A0A0D0NPG2",
            "A0A0E9C576",
            "AAN80811",
            "A0A0Q9QYU5",
            "ABC54722",
            "YP_001346278",
            "A0A0U9H4P4",
            "Q1RPS3",
            "J2LT98",
            "P52067",
            "D3V1W5"
        ];
        this.dataService.getRandomKnownARG()
            .subscribe(function (response) {
            _this.randomARG = _this.dataService.ARG;
            _this.render = true;
        });
    }
    ClassifyComponent.prototype.ngOnInit = function () {
        this.MGE_display = false;
        this.ARG_display = true;
        this.randomARG = {
            entry: {
                database: false,
            },
        };
    };
    ClassifyComponent.prototype.selectConflictedArgEvent = function ($event) {
        this.conflictedArgSubtypeFlag = $event.checked;
        this.trainingARGFlag = false;
        this.nextGene();
        if (this.conflictedArgSubtypeFlag) {
            this.notification = [];
            this.notification.push({ severity: 'info', summary: 'Message', detail: 'Enabled Conflicted ARGs' });
        }
    };
    ClassifyComponent.prototype.trainingARGEvent = function ($event) {
        // the conflicting ARGs cannot be enabled.
        this.trainingARGTotal = 2;
        this.conflictedArgSubtypeFlag = false;
        this.trainingARGCount = 0;
        this.trainingARGFlag = $event.checked;
        this.search(this.trainingGenes[Math.floor(Math.random() * this.trainingGenes.length)]);
        this.trainingARGCount += 1;
        if (this.trainingARGFlag) {
            this.notification = [];
            this.notification.push({ severity: 'info', summary: 'Message', detail: 'Enabled Training Mode' });
        }
    };
    ClassifyComponent.prototype.trainingARGNextGene = function () {
        if (this.trainingARGCount < this.trainingARGTotal) {
            this.search(this.trainingGenes[Math.floor(Math.random() * this.trainingGenes.length)]);
            this.trainingARGCount += 1;
            // console.log(this.trainingARGCount, this.trainingARGTotal)
        }
        else {
            this.notification = [];
            this.notification.push({ severity: 'success', summary: 'End of Training', detail: 'Training is done!' });
            this.notification.push({ severity: 'info', summary: 'Get Reward', detail: 'Click on <strong>Random ARG</strong> to start' });
            // this.notification.push({severity:'success', summary:'End of Training', detail:'You are ready to perform tasks with reward'});
            this.trainingARGFlag = false;
            this.nextGeneConflictList();
        }
    };
    ClassifyComponent.prototype.nextGeneConflictList = function () {
        var _this = this;
        this.randomARG['entry']['database'] = '-------------';
        this.randomARG['entry']['gene_id'] = '-------------';
        this.randomARG['entry']['subtype'] = '----------';
        this.randomARG['entry']['type'] = '--------------';
        this.randomARG['entry']['inspected'] = '------';
        this.randomARG['entry']['score'] = '------';
        this.loading = true;
        if (this.conflictedArgSubtypeFlag) {
            if (this.conflictedArgSubtypeGeneListCounter >= this.conflictingARGSubtype['conflict'][this.conflictedArgSubtypeClassListCounter]['genes'].length) {
                this.conflictedArgSubtypeClassListCounter += 1;
                this.conflictedArgSubtypeGeneListCounter = 0;
            }
            if (this.conflictedArgSubtypeClassListCounter == this.conflictingARGSubtype['conflict'].length) {
                this.conflictedArgSubtypeClassListCounter = 0;
                this.conflictedArgSubtypeGeneListCounter = 1;
                this.nextGene();
            }
            else {
                // console.log(this.conflictedArgSubtypeClassListCounter, this.conflictedArgSubtypeGeneListCounter)
                this.dataService.getKnownARGInfo(this.conflictingARGSubtype['conflict'][this.conflictedArgSubtypeClassListCounter]['genes'][this.conflictedArgSubtypeGeneListCounter])
                    .subscribe(function (res2) {
                    _this.randomARG = _this.dataService.ARG;
                    _this.loading = false;
                });
                this.conflictedArgSubtypeGeneListCounter += 1;
            }
        }
        else {
            this.nextGene();
        }
    };
    ClassifyComponent.prototype.nextGene = function () {
        var _this = this;
        this.randomARG['entry']['database'] = '-------------';
        this.randomARG['entry']['gene_id'] = '-------------';
        this.randomARG['entry']['subtype'] = '----------';
        this.randomARG['entry']['type'] = '--------------';
        this.randomARG['entry']['inspected'] = '------';
        this.randomARG['entry']['score'] = '------';
        this.loading = true;
        if (this.conflictedArgSubtypeFlag) {
            this.dataService.getRandomConflictingArgSubtype()
                .subscribe(function (response) {
                _this.conflictingARGSubtype = _this.dataService.randomConflictingArgSubtype;
                // console.log(this.conflictingARGSubtype)
                // Then, select the first ARG
                _this.dataService.getKnownARGInfo(_this.conflictingARGSubtype['conflict'][0]['genes'][0])
                    .subscribe(function (res2) {
                    _this.randomARG = _this.dataService.ARG;
                    _this.loading = false;
                });
            });
        }
        else {
            this.dataService.getRandomKnownARG()
                .subscribe(function (response) {
                _this.randomARG = _this.dataService.ARG;
                // console.log(this.randomARG)
                _this.loading = false;
            });
        }
    };
    ClassifyComponent.prototype.search = function (argID) {
        var _this = this;
        this.randomARG['entry']['database'] = '-------------';
        this.randomARG['entry']['gene_id'] = '-----------';
        this.randomARG['entry']['subtype'] = '-----------';
        this.randomARG['entry']['type'] = '--------------';
        this.randomARG['entry']['inspected'] = '-----';
        this.randomARG['entry']['score'] = '----';
        this.loading = true;
        this.dataService.searchAPI(argID, this.searchIndex.toString())
            .subscribe(function (response) {
            // this.loading = false;
            _this.dataService.getKnownARGInfo(response['entry']['gene_id'])
                .subscribe(function (res2) {
                _this.randomARG = _this.dataService.ARG;
                // console.log(this.randomARG)
                _this.loading = false;
            });
        });
    };
    ClassifyComponent.prototype.tabsEvent = function ($event) {
        this.drawGenomes = false;
        if ($event.index == 2) {
            this.drawGenomes = true;
        }
    };
    ClassifyComponent.prototype.openInstructions = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__instructions_instructions_component__["a" /* InstructionsComponent */], {
            width: '80%',
            data: { train: 'three', animal: 'faa' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    ClassifyComponent.prototype.scrollToMGEs = function () {
        // this.content.scrollTo(0, this.target.nativeElement.offsetTop, 500);
    };
    return ClassifyComponent;
}());
ClassifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(662),
        styles: [__webpack_require__(575)],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */]) === "function" && _c || Object])
], ClassifyComponent);

var _a, _b, _c;
//# sourceMappingURL=classify.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".box-vis {\n    min-height: 190px !important;\n    /* border-style: solid !important; */\n    /* border-width: 1px; */\n    /* border-color: rgba(0, 0, 0, 0.2); */\n}\n\n.box-vis-2 {\n    min-height: 50px !important;\n    max-height: 80px !important;\n}\n\n.box-plot {\n    cursor: pointer;\n    float: right;\n    height: 30px;\n    margin-left: 20px;\n    width: 50%;\n    position: relative;\n    margin-right: 30px;\n}\n\n.box-plot-component {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    overflow: hidden;\n    border-style: solid;\n    border-color: #030303\n}\n\n.box-left {\n    left: 0%;\n    width: 50%;\n    height: 20px;\n    border-width: 1px;\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    border-right-width: 0;\n    background: #fff;\n}\n\n.box-right {\n    left: 50%;\n    width: 50%;\n    height: 20px;\n    border-width: 1px;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n    background: #fff;\n}\n\n.box-mean {\n    top: 3px;\n    height: 14px;\n    width: 15px;\n    left: 50%;\n    border: 1px solid #248;\n    background: #abd;\n    border-radius: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".container-par {\n    width: 90%;\n    margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Jua);", ""]);

// module
exports.push([module.i, ".nomenclature-text {\n    font-family: 'Jua', sans-serif;\n    color: brown\n}\n\nsvg {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".curate-nav {\n    right: 5%;\n    width: 21.5%;\n    overflow: scroll;\n    max-height: 80%;\n}\n\n.sequence {\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n}\n\n.user_growl {\n    position: absolute !important;\n    top: 20px !important;\n    z-index: 9999 !important;\n}\n\n\n/*  */\n\n.intro-tour-hint-wrapper {\n    position: absolute !important;\n    background-color: rgba(255, 255, 255, .7) !important;\n    text-align: center;\n    font-size: 14px;\n    color: #000;\n    width: 100% !important;\n}\n\n.box-step {\n    border: solid 1px rgba(0, 0, 0, 1) !important;\n    width: 100%;\n    height: 100%;\n}\n\n.coffix {\n    width: 25% !important;\n    padding-right: 3.5% !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".ui-steps .ui-steps-item {\n    width: 33%;\n}\n\n.ui-steps.steps-custom {\n    margin-bottom: 10px;\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n    height: 4px;\n    /* padding: 0 1em; */\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n    background-color: #0081c2;\n    color: #FFFFFF;\n    /* display: inline-block;  */\n    width: 26px;\n    /* border-radius: 5%; */\n    margin-top: -20px;\n    margin-bottom: 12px;\n    font-size: 200%;\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n    /* color: #555555;  */\n    color: #FFFFFF;\n    margin-top: -43px;\n    font-weight: bold;\n}\n\n.badge,\n.ui-steps-item,\n.ui-steps-number,\np-dialog {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 6px 0 rgba(0, 0, 0, 0.19) !important;\n    border-color: rgba(255, 255, 255, 0) !important;\n}\n\n.box,\n.box-primary,\n.panel {\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1) !important;\n    border-color: rgba(0, 0, 0, 0.1) !important;\n}\n\nmd-input-container textarea {\n    background-color: rgba(0, 0, 0, 0.05) !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".close-btn {\n    float: right;\n    /* background: red; */\n    /* color: white; */\n    top: 10px;\n    right: 0px;\n    z-index: 1;\n    position: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "ng2-cytoscape {\n    height: 100vh;\n    float: left;\n    width: 100%;\n    position: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Encode+Sans+Expanded);", ""]);

// module
exports.push([module.i, ".home-logo {\n    font-family: 'Encode Sans Expanded', sans-serif !important;\n    /* text-align: center; */\n    color: #000;\n    font-size: 1.6em;\n}\n\n.home-font {\n    font-family: 'Encode Sans Expanded', sans-serif !important;\n}\n\n.home-font h4 {\n    font-family: 'Encode Sans Expanded', sans-serif !important;\n}\n\n.logo-text img {\n    vertical-align: middle;\n    height: 80px;\n    width: 80px;\n    /* border-right: solid 1px; */\n}\n\n.funding img {\n    /* height: 50px !important; */\n    width: 100%;\n    height: 50px;\n    opacity: 0.8 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: auto\" class=\"col-md-12\">\n    <h2>Instructions</h2>\n    <p>\n        The goal of this platform is to validate and complement the information under the <strong> Current Annotation </strong> panel by looking at the data presented in the main section. Then, you will have to fill the form uder the <strong>ARG Annotation</strong>        section.\n    </p>\n    <br>\n\n    <img class=\"col-md-8 col-md-offset-2\" src=\"assets/images/demo.png\" alt=\"\">\n\n    <div class=\"col-md-12\">\n\n        <h4>1. Get familiar with the environment</h4>\n        <p>\n            In order to understand the structure of this website, please, click on the <strong>Tour</strong> button.\n        </p>\n        <h4>2. New user</h4>\n        <p class=\"\">\n            If this is the first time you enter the website, you are required to perform two classifications. To do so, click the <strong>New User</strong> button and perform two ARG annotations. An score with your performance will be prompted. <strong>All fields are required</strong>,\n            values unrelated to the gene are not accepted.\n        </p>\n\n        <h4>3. How to get a reward </h4>\n        <p>\n            Once you have done with the training, you are ready to start. First, click on <strong>Priority ARGs</strong> button and perform one annotation. After you done with the annotation you will get a token number. Please, copy and paste this token\n            to the Amazon Mturk website and submit the form. If you plan to make another Hit <strong><span style=\"color:red\">DO NOT close the ARG-miner website.</span></strong> Other case you will have to do the training again.\n        </p>\n\n        <h4>4. Perform a new Hit</h4>\n        <p>\n            First, open a new hit in Amazon Mturk, then, get back to this webpage and just click on the <strong>Other ARG Group</strong> button. Perform the annotation and submit the token to Amazon Mturk.\n        </p>\n\n        <strong><h4 style=\"color:red\"> Please Be Aware! </h4></strong>\n        <p>\n            If you don't do the mandatory training, the system <strong>will not</strong> prompt the token.\n        </p>\n        <p>\n            If the annotation contains random, unrelated or nonsense words, the HIT will be rejected.\n        </p>\n        <p>\n            Only tokens are accepted, if you submit other values such as gene_id, the HIT will be rejected. Several workers are working in the same gene_id, if the token is not provided, we cannot check your performance.\n        </p>\n\n    </div>\n    <hr class=\"col-md-10\">\n</div>\n\n<hr>\n\n\n<md-expansion-panel class=\"\" [expanded]=\"false\">\n    <md-expansion-panel-header>\n        <md-panel-title>\n            <h4>Micro-Tasks</h4>\n        </md-panel-title>\n    </md-expansion-panel-header>\n    <h4>ARG identification</h4>\n    <p>Please fill up the Antibiotic resistance class, group and mechanism (if any) of the gene based on the observation from the different resources.</p>\n\n    <p class=\"small\">The <strong>Blast alignment</strong> sections associate the queried gene to its closest antibiotic resistance gene from curated databases. From this section you need to look at the scores (Bitscore, evalue, identity and coverage). High identity and\n        coverage represent close related sequences. Statistically significant alignments don't necesarly need high identity percentages. Therefore, pay attention to the Bitscores and Evalues. <strong>Note</strong>: A bitscore greater than 50 is considered\n        significant if it spans at least 90% coverage.\n    </p>\n\n\n    <hr>\n\n    <h4> Mobile Genetic Elements</h4>\n\n    <p><strong>Horizontal Gene Transfer</strong></p>\n    <p>Please check if there is any evidence that suggests the gene has been observed in a plasmid, prophage or virus.</p>\n    <p class=\"small\">To complete this task please check the Plasmid, Virus, or Prophages sections. If there is not any section with plasmid, prophage or virus tags it means that there is not evidence that the gene is transfered by any of those mechanisms.\n    </p>\n    <p><strong>Pathogen Genomes</strong></p>\n    <p>Please take a look at the pathogen genomes panel under the horizontal gene transfer section. </p>\n    <p class=\"small\">This panel will show you the association of the queried gene against a set of ~100,000 bacterial genomes. You will get information about the association of the gene to pathogens (as percentages) as well as their antimicrobial phenotype (resistant,\n        susceptible, intermediate). Rate your findigns according to the provided evidence.\n\n    </p>\n\n    <hr>\n    <h4>Review and submit</h4>\n    <p>This panel contains your observations for the queried gene.</p>\n    <p><strong>Verify your observations</strong></p>\n    <p>Please, make sure the values in the fields (ARG class, ARG group and ARG mechanism) correspond to what you have observed.</p>\n    <p><strong>Rate your expertise</strong></p>\n    <p>Please in a scale from 1 to 5 rate your confidence or expertice level, where 1 depicts a non expert evaluator, and 5 if you have experience working with Antibiotic Resistance Genes.\n        <p>\n            <p><strong>Rate your annotation confidence</strong></p>\n            <p>Please in a scale from 1 to 5, rate your confidence in the curation of the queried gene where 1 means that there is a lack of evidence about the gene and 5 the data correlates with your observations.</p>\n</md-expansion-panel>\n<hr>\n\n<md-expansion-panel [expanded]=\"false\">\n    <md-expansion-panel-header>\n        <md-panel-title>\n            <h4>MGEs and pathogens</h4>\n        </md-panel-title>\n    </md-expansion-panel-header>\n    <p>\n        Mobile Genetic Elements or MGEs are segments that encode proteins that mediates the movment of DNA within genomes. Plasmids are collection of stable funcional genetic elements. Plasmids can often be transferred to another cell. Bacteriophages can also\n        transfer genetic material by accidentally package segments of DNA to inject into their host.\n    </p>\n    <p>\n        To identify if the ARG is carried by plasmids, phages or viruses, the gene was aligned to the <a href=\"\">ACLAME</a> database. Scores provide insight into the presence of this gene into the MGE.\n    </p>\n    <p>\n        Pathogens are invaders that attack their hosts. The most familiar are viruses and bacteria and they can cause a wide range of infections and diseases. To identify if the gene is hosted in a pathogen genome, the gene was matched to the <a href=\"\">PATRIC</a>        database. Then, we were able to identify the number of pathogen genomes that carry the gene.\n    </p>\n    <p class=\"small\">Each color represents a different scoring scale</p>\n</md-expansion-panel>\n\n\n\n<hr>\n\n<md-expansion-panel [expanded]=\"false\">\n    <md-expansion-panel-header>\n        <md-panel-title>\n            <h4>Similarity to known ARGs</h4>\n        </md-panel-title>\n    </md-expansion-panel-header>\n    <p>\n        To curate a gene as an ARG, it is necesary to validate its evidence. One way to do it is by looking at the information provided from curated databases such as the <a href=\"\">CARD</a> database. Thus, the entry was compared against the databases\n        to reinforce, reject or modify the <strong>current annotation.</strong>\n    </p>\n    <p>\n        For this comparison, the gene was aligned to the genes from the databases using blast and its best hit was extracted. For each database, a panel shows the quality of the alignment and the information regarding that best hit.\n    </p>\n\n    <p> <span class=\"label bg-blue\">Tip</span> To identify the\n        <strong> class of antibiotic </strong> consider looking at <u>middle</u> to <u>high</u> bitscore, evalue and coverage. However, to identify <strong> antibiotic resistance names </strong>, we would recomend to look at the panels where the sequence\n        similarity is <u>high</u> with a <u>very strong</u> coverage.\n    </p>\n\n</md-expansion-panel>\n\n<hr><br><br><br><br><br>"

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"online\">\n    <div class=\"col-sm-3\">\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border text-center\">\n                <h4>Upgrade database</h4>\n                <!-- <h3 class=\"box-title\">\n                <strong>Main Actions</strong>\n            </h3> -->\n            </div>\n            <div class=\"box-body\">\n\n\n                <p class=\"small\">Publish a new version of the ARG-miner database. This database is updated once a considered number of genes have been curated. Once you click submit it will create a new version of the database and update the download links under the Donwloads\n                    tab.\n                </p>\n\n\n                <!-- UPGRADE DATABASE FORM -->\n                <md-input-container class=\"col-md-12\">\n                    <input mdInput placeholder=\"Database version\" [value]=\"databaseVersion\" #dversion>\n                </md-input-container>\n\n                <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" mdInput #dmessage maxlength=\"256\" placeholder=\"Comments\" [value]=\"databaseComments\">\n\n                    <md-hint align=\"end\">{{dmessage.value.length}} / 256</md-hint>\n                </md-input-container>\n\n            </div>\n            <div class=\"box-footer\">\n                <br>\n                <div class=\"col-md-12 text-center\"> <button (click)=\"upgradeDataBase(dversion.value, dmessage.value)\" class=\"bg-black\" color=\"default\" md-raised-button>Upgrade ARG-miner database</button><br><br></div>\n\n                <p class=\"small\">*The upgrading gets run in the background of the web server and the fasta file will be available under the downloads once the process is done.</p>\n            </div>\n        </div>\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border text-center\">\n                <h4>Obtain Problematic Annotations</h4>\n            </div>\n            <div class=\"box-body\">\n\n                <p class=\"small\">Use this tool after you have accepted/rejected annotations from the crowdsourcing platform. This action will compute/update all those ARGs that have conflicting annotations e.g., the same gene name associated to several ARG categories.</p>\n                <div class=\"text-center\"> <button (click)=\"updateConflictingARGs()\" class=\"bg-blue\" md-raised-button>Compute\n            Problematic ARGs</button></div>\n                <hr>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-sm-9\">\n\n        <div class=\"box-body\">\n            <div class=\"box box-solid \">\n                <div class=\"box-body\">\n                    <md-input-container class='col-sm-12 col-sm-offset-0'>\n                        <input #keyword type=\"search\" (keyup.enter)=\"search(keyword.value)\" mdInput placeholder=\"Search ARG \" value=\"\" />\n                    </md-input-container>\n                </div>\n            </div>\n        </div>\n\n        <div *ngFor=\"let item of curatedARGs\" class=\"\">\n            <!-- <div class=\"box-header with-border\"> -->\n            <!-- <h3 class=\"box-title\">{{item.entry.gene_id}}</h3> -->\n            <!-- </div> -->\n\n            <!-- <p>The gene <u>{{item.entry.gene_id}}</u> has been curated {{ item.inspected.length }} times.</p> -->\n            <div class=\"col-md-12\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"box box-solid box-primary\">\n                        <div class=\"box-header\">\n                            <h4 class=\"text-center\"> <strong> Current Annotation </strong></h4>\n                        </div>\n                        <div class=\"box-body\">\n                            <ul class=\"clearfix\">\n\n                                <li>\n                                    <span class=\"users-list-date\">Antibiotic Class</span> {{ item.entry.type }}\n                                </li>\n                                <li>\n                                    <span class=\"users-list-date\">ARG Name</span> {{ item.entry.subtype }}\n                                </li>\n                                <li>\n                                    <span class=\"users-list-date\">Database</span> {{ item.entry.database }}\n                                </li>\n                                <li>\n                                    <span class=\"users-list-date\">Gene ID</span> {{ item.entry.gene_id }}\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-8\">\n\n                    <div class=\"box box-solid box-primary\">\n                        <div class=\"box-header\">\n                            <h4 class=\"text-center\"> <strong> Weighted Annotation </strong> </h4>\n                        </div>\n\n                        <div class=\"box-body\">\n                            <ul class=\"clearfix\">\n                                <li>\n                                    <span class=\"users-list-date\">Antibiotic Class</span> {{ scores[0]['scores'][0]['name'] }}\n                                </li>\n                                <li>\n                                    <span class=\"users-list-date\">ARG name</span> {{ scores[1]['scores'][0]['name'] }}\n                                </li>\n                                <li>\n                                    <span class=\"users-list-date\">Antibiotic Resistance Mechanism</span> {{scores[2]['scores'][0]['name']}}\n                                </li>\n                            </ul>\n\n                        </div>\n\n                        <div class=\"box-footer\">\n                            <button (click)=\"acceptAnnotation()\" class=\"pull-left bg-blue\" md-raised-button>Approve</button>\n                            <button (click)=\"getARG(ARGindex)\" class=\"pull-right bg-red\" md-raised-button>Next Gene</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"box-body\">\n                <div class=\"col-md-12\">\n                    <!-- <h3 class=\"text-center\">Crowsourced Annotation</h3> -->\n                    <div class=\"box box-solid with-border box-primary\">\n                        <div class=\"box-body\">\n\n                            <div *ngFor=\"let kind of scores\" class=\"col-md-12\">\n                                <!-- <hr> -->\n                                <div>\n                                    <h3>{{ kind.kind }}</h3>\n                                    <p>This table shows the {{kind.kind}} results for the gene {{ item.entry.gene_id }}</p>\n                                </div>\n                                <br>\n                                <table class=\"table table-responsive table-bordered text-center\">\n                                    <tbody>\n                                        <tr class=\"table-success\">\n                                            <th>ARG {{kind.kind}}</th>\n                                            <th>Counts</th>\n                                            <th>Confidence/Expertise Score</th>\n                                            <th>Majority Votes</th>\n                                            <th>Validation Filter</th>\n                                            <th>Score</th>\n                                            <th>Weighted Score</th>\n                                        </tr>\n\n                                        <tr *ngFor=\"let itemx of kind.scores\">\n                                            <td>{{ itemx.name }}</td>\n                                            <td>{{ itemx.counts }}</td>\n                                            <td>{{ itemx.expertise_confidence_score.toFixed(4) }}</td>\n                                            <td>{{ itemx.majority_voting_score.toFixed(2) }}</td>\n                                            <td>{{ itemx.true_validation_filter_score.toFixed(2) }}</td>\n                                            <td>{{ itemx.raw_score.toFixed(2) }}</td>\n                                            <td>{{ itemx.score.toFixed(6) }}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <!-- <hr> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n\n\n\n                <div class=\"col-sm-12\">\n                    <div class=\"box box-solid\">\n                        <table class=\"table table-responsive table-bordered text-center\">\n                            <tbody>\n                                <tr class=\"table-success\">\n                                    <th>Token</th>\n                                    <th>Date</th>\n                                    <th>Expertise</th>\n                                    <th>Confidence</th>\n                                    <th>Gene Name</th>\n                                    <th>ARG Class</th>\n                                    <th>ARG Mechanism</th>\n                                </tr>\n                                <tr *ngFor=\"let itemx of curatedARGs[0]['inspected']\">\n                                    <td>{{ itemx.token }}</td>\n                                    <td>{{ itemx.date }}</td>\n                                    <td *ngIf=\"itemx.rating.expertise; else expertiseBlockA\">{{ (itemx.rating.expertise.value).toFixed(2) }}\n                                    </td>\n                                    <ng-template #expertiseBlockA>\n                                        <td>0.00</td>\n                                    </ng-template>\n                                    <td *ngIf=\"itemx.rating.confidence; else confidenceBlockA\">{{ (itemx.rating.confidence.value).toFixed(2) }} </td>\n                                    <ng-template #confidenceBlockA>\n                                        <td>0.00</td>\n                                    </ng-template>\n                                    <td>{{ itemx.group }}</td>\n                                    <td>{{ itemx.class }}</td>\n                                    <td>{{ itemx.mechanism }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n\n    </div>\n\n\n\n</div>\n\n\n<div class=\"col-md-3 col-md-offset-4\" *ngIf=\"online==false\">\n    <div class=\"box box-solid\">\n        <div class=\"box-header text-center\">\n            <h3 class=\"box-title\">Login</h3>\n        </div>\n        <div class=\"box-body\">\n            <!-- <form class=\"example-form\"> -->\n            <md-input-container class=\"col-md-12\">\n                <input mdInput placeholder=\"Email\" [formControl]=\"emailFormControl\" #uemail>\n                <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n                    Please enter a valid email address\n                </md-error>\n                <md-error *ngIf=\"emailFormControl.hasError('required')\">\n                    Email is <strong>required</strong>\n                </md-error>\n            </md-input-container>\n            <br>\n            <md-input-container class=\"col-md-12\">\n                <input mdInput type=\"password\" placeholder=\"Password\" [formControl]=\"passwordFormControl\" #upass>\n                <md-error *ngIf=\"passwordFormControl.hasError('pattern')\">\n                    Please enter a valid email address\n                </md-error>\n                <md-error *ngIf=\"passwordFormControl.hasError('required')\">\n                    Password is <strong>required</strong>\n                </md-error>\n            </md-input-container>\n\n            <!-- </form> -->\n        </div>\n\n        <div class=\"box-footer text-center\"> <button (click)=\"login(uemail.value, upass.value)\" class=\"bg-blue\" md-raised-button>Login</button></div>\n    </div>\n</div>"

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-par\">\n        <!-- <div class=\"col-md-12\"> -->\n        <div class=\"navbar-header\">\n            <!-- <div class=\"col-md-1\"> -->\n            <!-- </div> -->\n            <a routerLink=\"home\" class=\"navbar-brand\">ARGminer</a>\n            <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n        </div>\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <a routerLink=\"home\">Home</a>\n            </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <a routerLink=\"classify\">Inspect ARGs</a>\n            </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <a routerLink=\"database\">Download</a>\n            </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <a routerLink=\"about\" target=\"_blank\"> Instructions</a>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a routerLink=\"admin\">Admin</a></li>\n        </ul>\n\n        <!-- </div> -->\n        <!-- </div> -->\n    </div>\n</div>\n\n\n\n<div class=\"container-par\">\n    <br>\n    <br>\n    <br>\n    <br>\n    <!-- <div class=\"wrapper\"> -->\n    <router-outlet></router-outlet>\n    <!-- </div> -->\n</div>"

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"render\">\n    <div *ngFor=\"let bh of randomARG.besthit.alignments\">\n        <div *ngIf=\"bh.best_hit_database=='ARDB'\" class=\"\">\n\n            <div class=\"box box-solid \">\n                <div class=\"box-header with-border\">\n                    <i class=\"fa fa-gears\"></i>\n                    <h3 class=\"box-title\"><strong> {{ bh.best_hit_database }} </strong> Database </h3>\n                </div>\n\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n\n                    <!-- <dd> -->\n                    <h5>Resistance Mechanism</h5>\n                    <p> {{bh.metadata.description}} </p>\n                    <h5>AMR drug class / Gene family</h5>\n                    <div *ngFor=\"let type of bh.metadata.resistance_profile\">\n\n                        <p-accordion>\n                            <p-accordionTab [header]=\"type.type\">\n                                <p *ngIf=\"type.description\"> {{ type.description }} </p>\n                            </p-accordionTab>\n                        </p-accordion>\n\n                    </div>\n                    <!-- <dd> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"render\">\n\n    <div class=\"box box-solid\">\n        <div class=\"box-body\">\n\n            <p-dataTable [value]=\"cars\">\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Database</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <strong> {{gene.database.toUpperCase()}} </strong>\n                    </ng-template>\n\n                </p-column>\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Gene Name</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        {{gene.gene_name}}\n                        <i *ngIf=\"gene.similarity>=80\" class=\"fa fa-check text-primary\"></i> <i span *ngIf=\"gene.similarity<80\" class=\"text-danger fa fa-exclamation-circle\"></i>\n                    </ng-template>\n                </p-column>\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Antibiotic Class</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n\n                        <p *ngFor='let ant of gene.antibiotic'>{{ant}}</p>\n\n                    </ng-template>\n                </p-column>\n                <!-- <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Nomenclature</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        {{gene.gene_nomenclature}}\n                    </ng-template>\n                </p-column> -->\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Similarity</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <p-progressBar [value]=\"gene.similarity\"></p-progressBar>\n                    </ng-template>\n                </p-column>\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Coverage</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <p-progressBar [value]=\"gene.coverage\"></p-progressBar>\n                    </ng-template>\n                </p-column>\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Bitscore</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <span [ngStyle]=\"{'color': gene.bitscore_rate}\"> <strong> {{gene.bitscore}} </strong> </span>\n                        <!-- <p-progressBar style=\"display:inline\" [value]=\"gene.bitscore_rate\"></p-progressBar> -->\n                    </ng-template>\n                </p-column>\n                <!-- <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Bitscore</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        {{ gene.bitscore }}\n                    </ng-template>\n                </p-column> -->\n\n\n            </p-dataTable>\n\n            <br>\n            <!-- <h5>Pay attention to:</h5> -->\n            <p><i class=\"fa fa-check text-primary\"></i> <span> Strong evidence.</span> <br></p>\n            <p><i class=\"text-danger fa fa-exclamation-circle\"></i> <span>Caution! <strong> not </strong> strong evidence,\n          try to find a consensus from all gene names, if all gene names differ its recommended to keep the original\n          gene name.</span></p>\n\n            <!-- nomenclature -->\n            <hr>\n            <!-- <div *ngIf=\"nomenclature.probability>0.8\"> -->\n            <h5 class=\"\">Predicted Gene <strong> Nomenclature </strong></h5>\n            <!-- <p>This is the suggested structure for the nomenclature of the gene name.</p> -->\n            <div class=\"\" *ngFor=\"let nomenclature of predicted_nomenclature\">\n                <span *ngIf=\"nomenclature.probability>0.3\">\n          <h2 class=\"nomenclature-text\"> {{ nomenclature.nomenclature }} </h2>\n          <span>(probability = {{\n            nomenclature.probability.toFixed(2) }})</span>\n                </span>\n\n            </div>\n            <hr>\n            <p>\n                The structure of the gene nomenclature is retrieved by using a machine learning model that predicts the shape of the gene name. For instance, a gene name <strong>BACA</strong> with a nomenclature <strong> xxxX </strong>, should be written\n                as <strong><i> bacA</i></strong>.\n            </p>\n\n            <p-accordion>\n                <p-accordionTab [header]=\"'Bacterial Gene Nomenclature (more)'\">\n                    <h5>Antibiotic Resistance</h5>\n                    <p>\n                        Two and three letter designations are used for ARGs. There is not a real consensus in the nomenclature of ARGs and there are multiple ways in which ARGs are named. For instance, the gene APH(3') corresponds to a\n                        <i> Phosphorylation of 2-deoxystreptamine aminoglycosides on the hydroxyl group at position 3' </i> does not compy with the suggested gene nomenclature making difficult to determine the real ARG name.\n                    </p>\n                    <p>\n                        In ARG miner, we decided to build a machine learning model that predicts the structure of the gene name based on the information provided by the CARD database and the UniProt TreMBL database. Thus, only gene names from entries that have been experimentally\n                        validated were subtracted to train the a text classifier. As result, ARGminer reports to users the likely structure of the gene name. For instance, when ARGminer prints xxxX it means the three first words are in lower case whereas\n                        the latest word is in upper case (bacA, uppP, etc.). Other cases such as the <i>APH(3')-Ia</i> gene has a nomenclature <strong> XXX(N')-Xx </strong>, where x represents lower case, X upper case and N a number.\n                    </p>\n                </p-accordionTab>\n            </p-accordion>\n\n            <!-- </div> -->\n            <!-- <p class=\"small\"> <strong>*Bitscore Rate</strong>: Reffers to the rate between the alignment bitscore and the optimal bitscore curated by CARD for this ARG.</p> -->\n\n\n        </div>\n    </div>\n\n    <div *ngFor=\"let bh of randomARG.besthit.alignments\">\n\n        <div *ngIf=\"bh.best_hit_database=='CARD'\" class=\"\">\n            <!-- <p>\n                <strong> Scoring </strong>:\n                <span class=\"label bg-red\">Very Weak</span>\n                <span class=\"label bg-yellow\">Weak</span>\n                <span class=\"label bg-green\">Middle</span>\n                <span class=\"label bg-blue\">Strong</span>\n                <span class=\"label bg-black\">Very Strong</span>\n            </p> -->\n            <div class=\"box box-solid \">\n                <div class=\"box-header with-border\">\n                    <i class=\"fa fa-gears\"></i>\n                    <h3 class=\"box-title\"> <strong> {{ bh.best_hit_database }} </strong> Database </h3>\n\n                </div>\n                <!-- /.box-header -->\n                <div class=\"box-body\">\n\n                    <strong>\n            <h5>AMR Gene Family (Antibiotic Class)</h5>\n          </strong>\n                    <div *ngFor=\"let meta of bh.metadata\">\n                        <div *ngIf=\"meta.category_aro_class_name == 'AMR Gene Family'\">\n                            <p-accordion>\n                                <p-accordionTab [header]=\"meta.category_aro_name\">\n                                    {{ meta.category_aro_description}}\n                                </p-accordionTab>\n                            </p-accordion>\n                        </div>\n                    </div>\n\n                    <strong>\n            <h5>Resistance Mechanism</h5>\n          </strong>\n                    <div *ngFor=\"let meta of bh.metadata\">\n                        <div *ngIf=\"meta.category_aro_class_name == 'Resistance Mechanism'\">\n                            <p-accordion>\n                                <p-accordionTab [header]=\"meta.category_aro_name\">\n                                    {{ meta.category_aro_description}}\n                                </p-accordionTab>\n                            </p-accordion>\n                        </div>\n                    </div>\n\n                    <strong>\n            <h5>Drug Class</h5>\n          </strong>\n                    <div *ngFor=\"let meta of bh.metadata\">\n                        <div *ngIf=\"meta.category_aro_class_name == 'Drug Class'\">\n                            <p-accordion>\n                                <p-accordionTab [header]=\"meta.category_aro_name\">\n                                    {{ meta.category_aro_description}}\n                                </p-accordionTab>\n                            </p-accordion>\n                        </div>\n                    </div>\n\n                    <!-- <button color=\"primary\" class=\"pull-left\" md-mini-fab> <i class=\"fa fa-chevron-left\"></i> </button> -->\n                    <!-- <button color=\"primary\" class=\"pull-right\" md-mini-fab> <i class=\"fa fa-chevron-right\"></i> </button> -->\n                </div>\n                <!-- /.box-body -->\n            </div>\n            <!-- /.box -->\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"render\">\n    <div *ngFor=\"let bh of randomARG.besthit.alignments\">\n        <div *ngIf=\"bh.best_hit_database!=='CARD' && bh.best_hit_database!=='ARDB'\" class=\"\">\n            <div class=\"box box-solid \">\n                <div class=\"box-header with-border\">\n                    <i class=\"fa fa-gears\"></i>\n\n                    <h3 class=\"box-title\"><strong> {{ bh.best_hit_database }} </strong> Database </h3>\n                </div>\n                <div class=\"box-body\">\n\n                    <h5> Antibiotic Class: </h5>\n\n                    <p-accordion>\n                        <p-accordionTab [header]=\"bh.type\">\n                            <p *ngIf=\"bh.description\"> {{ bh.description }} </p>\n                        </p-accordionTab>\n                    </p-accordion>\n\n                    <!-- <strong> Gene Name: </strong> {{ bh.subtype }}<br> -->\n                    <h5> Antibiotic Mechanism: </h5>\n                    <p-accordion>\n                        <p-accordionTab [header]=\"bh.mechanism\">\n                            <p *ngIf=\"bh.description\"> {{ bh.description }} </p>\n                        </p-accordionTab>\n                    </p-accordion>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <hr> -->\n</div>"

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<p-growl class=\"user_growl\" [(value)]=\"notification\"></p-growl>\n\n<div *ngIf=\"!render\" class=\"col-md-4 col-md-offset-4\">\n</div>\n\n<div *ngIf=\"render\">\n    <!--Left panel-->\n    <div class=\"col-sm-3 affix coffix\">\n        <!-- <div class=\"\"> -->\n        <div *ngIf=\"randomARG.status==true\" class=\"\">\n            <!-- <div class=\"col-md-12\"> -->\n\n            <div class=\"box box-solid box-primary\">\n                <div class=\"box-header with-border\">\n\n\n\n                    <i class=\"fa fa-gears\"></i>\n                    <!-- <p *ngIf=\"loading\"><md-progress-bar mode=\"indeterminate\"></md-progress-bar></p>  -->\n                    <h3 class=\"box-title\"><strong>Gene to validate</strong> </h3>\n\n                </div>\n\n                <!-- /.box-header -->\n\n                <!-- <tour-step class=\"intro-tour-hint-wrapper\" selector=\"step1\" order=\"1\" position=\"right\">\n                        <div class=\"box box-step\">\n                            <div class=\"box-header\">\n                                <h3 class=\"box-title\">\n                                    ARG you have to curate\n                                </h3>\n                            </div>\n                            <div class=\"box-body\">\n                                This panel shows you the basic information about the antibiotic reistance gene you need to inspect. Note this information may contain errors. Therefore, by comparing this information with the known ARGs databases you will be able to correct or accept\n                                the current annotation.\n                            </div>\n                        </div>\n                    </tour-step> -->\n\n                <div class=\"box-body\">\n\n                    <dl id=\"step1\" class=\"dl\">\n                        <!-- <p> -->\n                        <!-- </p> -->\n                        <!-- <p> -->\n\n                        <!-- <strong>Gene Name:</strong> -->\n                        <!-- <span class=\"\">{{ randomARG.entry.subtype }}</span> -->\n                        <!-- </p> -->\n                        <!-- <p> -->\n                        <!-- <br> -->\n                        <!-- <strong>Antibiotic Class:</strong> -->\n                        <!-- <span class=\"\">{{ randomARG.entry.type }}</span> -->\n                        <!-- </p> -->\n                        <!-- <p> -->\n                        <!-- <br> -->\n                        <strong>Database:</strong>\n                        <span class=\"\">{{ randomARG.entry.database }}</span>\n                        <!-- </p> -->\n                        <!-- <p> -->\n                        <br>\n                        <strong data-intro=\"step1\">Inspected:</strong>\n                        <span class=\"\">{{ randomARG.inspected.length }}</span>\n                        <br>\n                        <strong data-intro=\"step1\">Gene ID:</strong>\n                        <span class=\"\">{{ randomARG.entry.gene_id }}</span>\n                        <br>\n                        <!-- </p> -->\n                        <!-- <dt>Score:</dt> -->\n                        <!-- <dd><span class=\"badge bg-blue\">{{ randomARG.entry.score }}</span></dd> -->\n                    </dl>\n\n                    <p class=\"small text-left\">\n                        *ARG: <u><strong>A</strong>ntibiotic <strong>R</strong>esistance <strong>G</strong>ene</u>\n                        <!-- <a (click)=\"startTour()\" class=\"badge bg-blue btn-xs\"><span class=\"\"> <strong> <i class=\"fa fa-compass\"></i> <u>Take a tour </u></strong> </span></a> -->\n                    </p>\n\n\n                    <hr>\n                    <!-- <h4>Tutorial</h4> -->\n\n                    <!-- <div class=\"text-left\"> -->\n\n\n\n                    <!-- <a (click)=\"openInstructions()\" class=\"badge bg-red btn-xs\"><span class=\"\"> <strong> <u>Instructions</u></strong> </span></a> -->\n                    <!-- </div> -->\n                    <!-- <br> -->\n                    <!-- <hr> -->\n\n                    <!-- <h4>Filter options</h4> -->\n\n                    <!-- <tour-step class=\"intro-tour-hint-wrapper\" selector=\"step2\" order=\"2\">\n                            <div class=\"col-md-12\">\n                                <div class=\"box box-primary\">\n                                    <div class=\"box-header\">\n                                        <h3 class=\"box-title\">\n                                            <strong>I am a New user</strong>\n                                        </h3>\n                                    </div>\n                                    <div class=\"box-body\">\n                                        If you are a new user, activate the new user button. You will have to complete 20 entries that will help you to get familiar with the system. I will also score your results based on the real annotation.\n                                    </div>\n                                    <div class=\"box-footer\">\n\n                                    </div>\n                                </div>\n                            </div>\n\n                        </tour-step> -->\n\n                    <div id=\"step3\">\n                        <md-slide-toggle (change)=\"trainingARGEvent($event)\" [checked]=\"trainingARGFlag\"><strong>Enable Training</strong></md-slide-toggle>\n                        <p class=\"small\">Enable this option if this is the first time you enter the website.</p>\n                    </div>\n                    <!-- <hr> -->\n                    <div id=\"step4\">\n                        <md-slide-toggle (change)=\"selectConflictedArgEvent($event)\" [checked]=\"conflictedArgSubtypeFlag\"><strong>Priority\n                ARGs</strong></md-slide-toggle>\n                        <p class=\"small\">This option selects ARGs with high priority of curation.</p>\n                    </div>\n                    <hr>\n\n\n\n                    <div *ngIf=\"loading==false && conflictedArgSubtypeFlag\">\n\n                        <h4> Conflicted ARGs </h4>\n                        <p class=\"small\">This section contains the list of ARGs under the category {{ conflictingARGSubtype.subtype }} that present inconsistences respect its ARG class annotation.</p>\n                        <!-- <div class=\"box-body\"> -->\n                        <!-- <p> <strong>Gene:</strong> <mark>{{ conflictingARGSubtype.subtype }}</mark></p> -->\n                        <div *ngFor=\"let item of conflictingARGSubtype.conflict\">\n                            <strong>{{ item.class }}</strong> {{ item.genes.length }}\n                        </div>\n                        <hr>\n                        <button (click)=\"nextGene()\" class=\"\" color=\"primary\" md-raised-button>Random ARG</button>\n                        <button (click)=\"nextGeneConflictList()\" class=\"\" color=\"warn\" md-raised-button>Next ARG</button>\n                        <!-- </div> -->\n                    </div>\n\n                    <div *ngIf=\"conflictedArgSubtypeFlag==false && trainingARGFlag==false\" class=\"col-md-12 text-center\">\n                        <button (click)=\"nextGene()\" class=\"\" color=\"primary\" md-raised-button>Random ARG</button>\n                    </div>\n\n                    <div *ngIf=\"trainingARGFlag && conflictedArgSubtypeFlag==false\" class=\"col-md-12 text-center\">\n                        <button (click)=\"trainingARGNextGene()\" class=\"\" color=\"primary\" md-raised-button>Next ARG</button>\n                    </div>\n\n                    <!-- <div class=\"col-md-12 text-right\">\n                            <button (click)=\"nextGene()\" class=\"\" color=\"red\" md-raised-button>Random</button>\n                        </div> -->\n\n\n                </div>\n\n                <!-- /.box-body -->\n                <!-- </div> -->\n                <!-- /.box -->\n            </div>\n        </div>\n\n        <!-- <div class=\"col-md-12 box box-solid \">\n\n                <h4>Note about BitScores</h4>\n                <p class=\"small\">A bitscore of 50 is considered significant if the alignment covers at least 90% of the reference sequence</p>\n                <p class=\"small\">Bit-score does not depend on database size. The bit-score gives the same value for hits in databases of different sizes and hence can be used for searching in an constantly increasing database.</p>\n                <p class=\"small\"> The higher the bitscore, the better the quality of the sequence alignment</p>\n\n            </div> -->\n\n    </div>\n\n    <app-explore class=\"col-sm-6 col-sm-offset-3\"></app-explore>\n    <div class=\"col-sm-6 col-sm-offset-3\">\n\n        <div *ngIf=\"randomARG.status==true && loading==false && ARG_display\">\n            <br>\n            <div *ngFor=\"let bh of randomARG.besthit.alignments\">\n                <besthit-metadata-ardb *ngIf=\"bh.best_hit_database=='ARDB'\"> </besthit-metadata-ardb>\n                <besthit-metadata-card *ngIf=\"bh.best_hit_database=='CARD'\"> </besthit-metadata-card>\n            </div>\n            <!-- </md-tab> -->\n\n            <!-- OTHER DATABASES  -->\n            <div id=\"step9\">\n                <app-generic></app-generic>\n            </div>\n\n            <!-- <h4 *ngIf=\"randomARG.entry.database=='UNIPROT'\">Metadata</h4> -->\n\n            <!--METADATA SECTION-->\n            <div id=\"step6\">\n                <classify-metadata-uniprot *ngIf=\"randomARG.entry.database=='UNIPROT'\"> </classify-metadata-uniprot>\n            </div>\n            <classify-metadata-card> </classify-metadata-card>\n            <br>\n            <div>\n                <div class=\"box box-solid \">\n                    <div class=\"box-header with-border\">\n                        <h3 class=\"box-title\"> <strong>Protein sequence</strong> ({{ randomARG.entry.gene_id }}) </h3>\n                    </div>\n                    <div class=\"box-body\">\n                        <p class=\"sequence small\"> ><strong>{{randomARG.entry.gene_id}}</strong> <br> {{ randomARG.entry.sequence }}\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <br>\n        </div>\n    </div>\n\n\n    <!-- <div class=\"col-sm-3\"> -->\n    <div id=\"step11\" class=\"curate-nav affix clarify\">\n        <!-- <aside class=\"control-sidebar control-sidebar-open\"> -->\n        <app-curate></app-curate>\n        <!-- </aside> -->\n    </div>\n    <!-- </div> -->\n</div>\n\n<div class=\"col-sm-6 col-sm-offset-3\">\n    <!-- *ngIf=\"MGE_display\" -->\n    <div id=\"step10\">\n        <genome-metadata *ngIf=\"randomARG.entry.database=='UNIPROT'\"></genome-metadata>\n        <genome-metadata *ngIf=\"randomARG.entry.database=='CARD'\"></genome-metadata>\n        <genome-metadata *ngIf=\"randomARG.entry.database=='ARDB'\"></genome-metadata>\n    </div>\n</div>"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"box\">\n        <div class=\"box-body\">\n            <p class=\"small\">Please copy and paste this token to the Mturk website.</p>\n            <strong>Token:</strong> <code *ngIf=\"inspectedGenes.length >= classifyComponent.trainingARGTotal+1\">{{antibiotic.token}}</code>\n        </div>\n    </div>\n</div>\n<div class=\"\">\n    <div class=\"box box-solid box-primary\">\n        <div class=\"box-body\">\n            <p-steps styleClass=\"steps-custom\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\" [model]=\"items\"></p-steps>\n\n            <div *ngIf=\"step1 text-center\">\n\n                <!-- <div class=\"col-md-12\"> -->\n                <h4 class=\"text-center\"><strong>ARG Annotation</strong></h4>\n                <p>Please based on your observations add the corresponding data to the form below:</p>\n\n                <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" [formControl]=\"groupControl\" [mdAutocomplete]=\"AGroup\" mdInput [(ngModel)]=\"antibiotic.group\" placeholder=\"Gene Name\">\n                </md-input-container>\n\n                <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" mdInput [formControl]=\"myControl\" [mdAutocomplete]=\"AClass\" [(ngModel)]=\"antibiotic.class\" placeholder=\"Antibiotic Class\">\n                </md-input-container>\n\n                <md-autocomplete #AClass=\"mdAutocomplete\">\n                    <md-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\" required>\n                        {{ option }}\n                    </md-option>\n                </md-autocomplete>\n\n                <md-autocomplete #AGroup=\"mdAutocomplete\">\n                    <md-option *ngFor=\"let option of groupFilteredOptions | async\" [value]=\"option\" required>\n                        {{ option }}\n                    </md-option>\n                </md-autocomplete>\n\n                <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" mdInput [(ngModel)]=\"antibiotic.mechanism\" placeholder=\"Antibiotic Mechanism\" required>\n                </md-input-container>\n\n                <br><br>\n\n                <div class=\"col-md-12 text-center\">\n                    <a (click)=\"validate(1)\" color=\"primary\" md-raised-button>Next</a>\n                    <!-- <button (click)=\"reportARG()\" class=\"\" color=\"red\" md-raised-button>Report ARG</button> -->\n                </div>\n                <!-- </div> -->\n\n            </div>\n\n\n\n            <div *ngIf=\"step2\">\n\n\n                <!-- <div class=\"col-md-12\"> -->\n                <h4 class=\"text-center\"><strong>Mobile Genetic Elements</strong></h4>\n                <div class=\"col-md-12\">\n                    <p class=\"small\">Is there any evidence that suggests the ARG to be carried by any of the following: </p>\n\n                    <div *ngFor=\"let ht of mge_options\">\n                        <md-checkbox value=\"{{ht}}\" (change)=\"mgeOptions(ht, $event)\">{{ ht }}</md-checkbox>\n                    </div>\n                    <p>How do you rate this evidence? </p>\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('mge',$event)\" [starType]=\"'svg'\" [rating]=\"0\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <!-- <p class=\"small\"> Scores: 1 means there is not evidence and 5 means there is strong evidene that the gene is being carried by any of the three options.</p> -->\n                </div>\n\n                <div class=\"col-md-12\">\n                    <h4 class=\"text-center\"><strong>Pathogenic Genomes</strong></h4>\n\n                    <p>Is there evidence of any pathogenic genomes containing the gene? </p>\n\n                    <!-- <md-radio-group [(ngModel)]=\"antibiotic.pathGenome\">\n                        <md-radio-button value=\"1\">Yes</md-radio-button> <br>\n                        <md-radio-button value=\"2\">Not</md-radio-button> <br>\n                    </md-radio-group> -->\n\n                    <!-- <p>How do you rate this evidence? </p> -->\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('genome',$event)\" [starType]=\"'svg'\" [rating]=\"0\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <p class=\"small\">Scores: 1 means there is not evidence whereas 5 means there is strong evidence.</p>\n                    <hr>\n\n                </div>\n\n\n\n                <div class=\"col-md-12 text-center\">\n                    <button (click)=\"validate(2)\" color=\"primary\" md-raised-button>Next</button>\n                </div>\n                <!-- </div> -->\n\n\n\n            </div>\n\n            <div *ngIf=\"step3\">\n                <div class=\"col-md-12 text-center\">\n                    <h4>Overall Rating</h4>\n                </div>\n                <!-- <div class=\"col-md-12\"> -->\n                <!-- <div class=\"col-md-12\"> -->\n                <!-- <h4 class=\"text-center\"><strong>ARG annotation</strong></h4> -->\n                <!-- <dl class=\"dl\"> -->\n                <!-- <h4></h4>\n                        <strong>ARG Class:</strong>\n                        <span class=\"\"> {{ antibiotic.class }} </span>\n                        <br>\n\n                        <strong>ARG Group:</strong>\n                        <span class=\"\"> {{ antibiotic.group }} </span>\n                        <br>\n\n                        <strong *ngIf=\"!antibiotic.mechanism==null\">ARG Mechanism:</strong>\n                        <span *ngIf=\"!antibiotic.mechanism==null\">{{ antibiotic.mechanism }} </span> -->\n\n                <!-- </dl> -->\n                <!-- <hr> -->\n                <!-- </div> -->\n\n                <div class=\"col-md-12 col-md-offset-0 text-center\">\n                    <p>Please rate the confidence in your observations</p>\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('confidence',$event)\" [starType]=\"'svg'\" [rating]=\"0\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <hr>\n                </div>\n\n                <div class=\"col-md-12 col-md-offset-0 text-center\">\n                    <p>Please rate your level of expertise</p>\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('expertise',$event)\" [starType]=\"'svg'\" [rating]=\"0\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <hr>\n                </div>\n\n\n\n                <!-- <md-input-container class=\"col-md-12\">\n                    <p>Please add any relevant comments</p>\n                    <textarea mdInput [(ngModel)]=\"antibiotic.comments\" rows=\"5\"></textarea>\n                </md-input-container> -->\n\n\n                <div class=\"col-md-12 text-center\">\n                    <button (click)=\"submitReview()\" class=\"\" color=\"green\" md-raised-button>Submit</button>\n                    <button (click)=\"validate(3)\" class=\"\" color=\"red\" md-raised-button>Cancel</button>\n                </div>\n\n\n                <!-- </div> -->\n            </div>\n\n\n\n        </div>\n\n    </div>\n\n    <div *ngIf=\"inspectedGenes.length>0\" class=\"box box-solid\">\n        <div class=\"box-header\">\n            <h3 class=\"box-title\">Inspected genes: {{ inspectedGenes.length }}</h3>\n        </div>\n        <!-- <div class=\"box-body\">\n\n            <span *ngFor=\"let item of inspectedGenes\" class=\"badge\">\n                {{ item }}\n            </span>\n        </div> -->\n    </div>\n</div>"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-solid \">\n    <div class=\"box-body\">\n        <md-input-container class='col-sm-12 col-sm-offset-0'>\n            <input #keyword type=\"search\" (keyup.enter)=\"search(keyword.value)\" mdInput placeholder=\"Search term \" [(ngModel)]=\"search_keyword\" />\n        </md-input-container>\n    </div>\n</div>\n\n<div class=\"col-md-12\" *ngIf=\"loading_search\">\n    <div class=\"sk-folding-cube\">\n        <div class=\"sk-cube1 sk-cube\"></div>\n        <div class=\"sk-cube2 sk-cube\"></div>\n        <div class=\"sk-cube4 sk-cube\"></div>\n        <div class=\"sk-cube3 sk-cube\"></div>\n    </div>\n</div>\n\n<!-- table with the search information -->\n<!-- <div class=\"col-md-12\"> -->\n<div *ngIf=\"search_on\">\n    <a class=\"close-btn\" [style.cursor]=\"'pointer'\" (click)=\"close_search()\"> <i class=\"fa fa-times-circle fa-lg text-danger\"></i>\n    </a>\n    <p-dataTable [value]=\"search_general_result\" [rows]=\"5\" [paginator]=\"true\">\n        <p-column>\n            <ng-template pTemplate=\"header\">\n                <th>Antibiotic Class</th>\n            </ng-template>\n            <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                <strong> {{gene.type}} </strong>\n            </ng-template>\n        </p-column>\n        <p-column>\n            <ng-template pTemplate=\"header\">\n                <th>Gene Name</th>\n            </ng-template>\n            <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                <u>\n          <a [style.color]=\"'blue'\" [style.cursor]=\"'pointer'\" (click)=\"explore_gene(gene)\"> {{gene.subtype}} </a>\n\n        </u>\n\n\n            </ng-template>\n        </p-column>\n        <p-column>\n            <ng-template pTemplate=\"header\">\n                <th>Sequences</th>\n            </ng-template>\n            <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                <!-- <strong> {{gene.count}} </strong> -->\n                <span *ngFor=\"let _db of gene.db_counts\">\n          <a [style.color]=\"'green'\" [style.cursor]=\"'pointer'\"> <u> {{_db['database']}} </u></a>\n          <strong> ({{ _db['counts'] }}) </strong>\n        </span>\n            </ng-template>\n        </p-column>\n        <!-- <p-column>\n        <ng-template pTemplate=\"header\">\n            <th>Databases</th>\n        </ng-template>\n        <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n            <span *ngFor=\"let _db of gene.db_counts\"> {{_db['database']}}\n                        <span class=\"badge\" bg-color=\"red\"> {{ _db['counts'] }} </span>\n            </span>\n        </ng-template>\n    </p-column> -->\n    </p-dataTable>\n\n    <br>\n\n    <p *ngIf=\"selected_gene.sequences\" class=\"text-center\"> {{search_index+1}} of {{ selected_gene.sequences.length }}\n        <a [style.cursor]=\"'pointer'\" (click)=\"explore_next()\"> <i class=\"fa fa-arrow-alt-circle-right fa-lg\"></i> Next\n\n        </a>\n    </p>\n\n</div>\n<!-- </div> -->\n<!-- <div class=\"col-md-12\">\n        <span class='badge'>\n          <strong> UNIPROT </strong>\n        </span>\n\n        <span class='badge bg-green'>\n          <strong> CARD/ARDB </strong>\n        </span>\n\n        <span [style.cursor]=\"'pointer'\" *ngFor=\"let _gene of selected_gene.sequences\">\n        <span class=\"badge\" *ngIf=\"_gene[1]=='UNIPROT'; else other_db\"> {{ _gene[0] }} </span>\n\n        <ng-template #other_db>\n            <span class='badge bg-green'> {{ _gene[0] }} </span>\n        </ng-template>\n        </span>\n\n    </div> -->"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-solid\">\n    <div class=\"box-header with-border\">\n        <i class=\"fa fa-tag\"></i>\n        <h3 class=\"box-title\"><strong> PATRIC  </strong>database</h3>\n    </div>\n    <div *ngIf=\"plasmid.length > 0\" class=\"box-body\">\n        <h4>Plasmids</h4>\n        <p>\n            Prevalence of <strong> {{ randomARG.entry.gene_id }} </strong> in plasmids from the <a href=\"\">PATRIC</a> database. Values represent the number of plasmids that contain this particular ARG and its AMR phenotype: resistant (<strong>R</strong>),\n            susceptible (\n            <strong>S</strong>), intermediate (<strong>I</strong>).\n        </p>\n        <p>\n            ARGs were aligned against the plasmids from PATRIC database and only genes with an identity > 80% and a coverage of 90% were selected.\n        </p>\n        <br><br>\n\n        <div *ngFor=\"let _plasmid of plasmid\">\n\n            <p-dataTable [value]=\"_plasmid['taxa-counts']\" [rows]=\"5\" [paginator]=\"true\">\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Specices</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <i> {{gene.taxa}} </i>\n                    </ng-template>\n                </p-column>\n\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>Counts</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <strong> {{gene.plasmids}} </strong>\n                    </ng-template>\n                </p-column>\n\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>R</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <strong> {{gene.resistant}} </strong>\n                    </ng-template>\n                </p-column>\n\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>S</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <strong> {{gene.susceptible}} </strong>\n                    </ng-template>\n                </p-column>\n\n                <p-column>\n                    <ng-template pTemplate=\"header\">\n                        <th>I</th>\n                    </ng-template>\n                    <ng-template let-gene=\"rowData\" pTemplate=\"body\">\n                        <strong> {{gene.intermediate}} </strong>\n                    </ng-template>\n                </p-column>\n\n            </p-dataTable>\n\n        </div>\n\n    </div>\n\n\n    <div *ngIf=\"randomARG.pathogen.status==true\" class=\"box-body\">\n        <h4>Pathogens</h4>\n        <p>\n            This section shows the proportion of pathogen bacteria that contains the gene {{ randomARG.entry['gene_id'] }} ( <strong>{{ randomARG.entry['subtype'] }}</strong>). Colors represent the quality of the evidence from very weak to very strong.\n        </p>\n        <p>\n            <span class=\"label bg-red\">Very Weak</span>\n            <span class=\"label bg-yellow\">Weak</span>\n            <span class=\"label bg-green\">Middle</span>\n            <span class=\"label bg-blue\">Strong</span>\n            <span class=\"label bg-black\">Very Strong</span>\n        </p>\n\n        <p>\n            <strong>Pathogen Score:</strong>\n            <span class=\"badge bg-red\" *ngIf=\"genomeCount<10\">\n                                            {{(genomeCount).toFixed(1)}}%\n                                        </span>\n            <span class=\"badge bg-yellow\" *ngIf=\"genomeCount<20 && genomeCount>10\">\n                                            {{(genomeCount).toFixed(1)}}%\n                                        </span>\n            <span class=\"badge bg-green\" *ngIf=\"genomeCount<30 && genomeCount>20\">\n                                            {{(genomeCount).toFixed(1)}}%\n                                        </span>\n            <span class=\"badge bg-blue\" *ngIf=\"genomeCount<60 && genomeCount>30\">\n                                            {{(genomeCount).toFixed(1)}}%\n                                        </span>\n            <span class=\"badge bg-black\" *ngIf=\"genomeCount<90 && genomeCount>60\">\n                                            {{(genomeCount).toFixed(1)}}%\n                                        </span>\n        </p>\n        <hr> The gene entry {{randomARG.entry.gene_id}} (<strong>{{ randomARG.entry.subtype }}</strong>) has been aligned to the <a href=\"https://www.patricbrc.org/\">PATRIC</a> database using strict cutoffs to ensure the existence of the gene (>80% identity,\n        >90% coverage).\n        <br><br><strong>{{ randomARG['pathogen'].genomes_count }}</strong> genomes contain this particular gene ({{randomARG.entry.gene_id}}). From those,\n        <strong>{{ randomARG.pathogen.genomes_pathogen }}</strong> (\n        <span class=\"badge bg-red\" *ngIf=\"genomeCount<10\">\n                            {{(genomeCount).toFixed(1)}}%\n                        </span>\n        <span class=\"badge bg-yellow\" *ngIf=\"genomeCount<20 && genomeCount>10\">\n                            {{(genomeCount).toFixed(1)}}%\n                        </span>\n        <span class=\"badge bg-green\" *ngIf=\"genomeCount<30 && genomeCount>20\">\n                            {{(genomeCount).toFixed(1)}}%\n                        </span>\n        <span class=\"badge bg-blue\" *ngIf=\"genomeCount<60 && genomeCount>30\">\n                            {{(genomeCount).toFixed(1)}}%\n                        </span>\n        <span class=\"badge bg-black\" *ngIf=\"genomeCount<90 && genomeCount>60\">\n                            {{(genomeCount).toFixed(1)}}%\n                        </span>) genomes are labeled as <u>pathogens</u>.\n    </div>\n\n\n</div>\n\n\n<div *ngIf=\"renderMobile\" class=\"box box-solid\">\n\n    <div class=\"box-header with-border \">\n        <i class=\"fa fa-tag\"></i>\n        <h3 class=\"box-title\"><strong>ACLAME</strong> database </h3>\n    </div>\n\n    <div class=\"box-body\">\n        <p>\n            This section contains evidence of ARGs being present in mobile-associated elements from the <a href=\"\">ACLAME</a> database.\n        </p>\n\n    </div>\n\n    <div *ngFor=\"let item of randomARG.mobile\" class=\"box-body\">\n        <div *ngIf=\"item.status==true && item.identity.mean>50\" class=\"\">\n            <div class=\"box-body\">\n                <dl class=\"dl-horizontal\">\n                    <dt>Type:</dt>\n                    <dd>\n                        <strong><p *ngIf=\"item.type=='proph'\">Prophages</p></strong>\n                        <strong><p *ngIf=\"item.type=='plasmid'\">Plasmids</p></strong>\n                        <strong><p *ngIf=\"item.type=='vir'\">Viruses</p></strong>\n                    </dd>\n                    <dt>Count:</dt>\n                    <dd> <span> {{ item.count }} </span></dd>\n                    <dt>Similarity:</dt>\n                    <dd> <span class=\"badge bg-{{ item.identity.color }}\"> {{ item.identity.mean }}%  {{ '&plusmn;' }} {{item.identity.std}} </span></dd>\n                    <dt>BitScore:</dt>\n                    <dd> <span class=\"badge bg-{{ item.bitscore.color }}\"> {{ item.bitscore.mean }} {{ '&plusmn;' }} {{item.bitscore.std}} </span></dd>\n                    <dt>Coverage:</dt>\n                    <dd> <span class=\"badge bg-{{ item.coverage.color }}\"> {{  (100*item.coverage.mean/randomARG.entry['length']).toFixed(0) }}% {{ '&plusmn;' }} {{(100*item.coverage.std/randomARG.entry['length']).toFixed(0)}} </span></dd>\n                    <dt>Description:</dt>\n                    <dd>{{ item.mge_description }}</dd>\n                    <dt>Gene Aclame ID:</dt>\n                    <dd>{{ item.mge_id }}</dd>\n                </dl>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"col-md-12\" [style.height]=\"'200px'\"></div>"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: auto\" class=\"\">\n    <h3>Instructions</h3>\n    <p>\n        The goal of this platform is to validate and complement the information under the <strong> Current Annotation </strong> panel by looking at the data presented in the main section. Then, you will have to fill the form uder the <strong>ARG Annotation</strong>        section.\n    </p>\n    <h4>1. Get familiar with the environment</h4>\n    <p>\n        In order to understand the structure of this website, please, click on the <strong>Tour</strong> button.\n    </p>\n    <h4>2. New user</h4>\n    <p class=\"\">\n        If this is the first time you enter the website, you are required to perform two classifications. To do so, click the <strong>New User</strong> button and perform three ARG annotations.\n    </p>\n\n    <h4>3. How to get a reward </h4>\n    <p>\n        Once you have done with the training, you are ready to start. First, click on <strong>Priority ARGs</strong> button and perform one annotation. After you done with the annotation you will get a token number. Please, copy and paste this token to\n        the Amazon Mturk website and submit the form. If you plan to make another Hit <strong><span style=\"color:red\">DO NOT close the ARG-miner website.</span></strong> Other case you will have to do the training again.\n    </p>\n\n    <h4>4. Perform a new Hit</h4>\n    <p>\n        First, open a new hit in Amazon Mturk, then, get back to this webpage and just click on the <strong>Other ARG Group</strong> button. Perform the annotation and submit the token to Amazon Mturk.\n    </p>\n\n    <strong><h4 style=\"color:red\"> Be Aware! </h4></strong>\n    <p>\n        If you don't do the mandatory training, the system <strong>will not</strong> prompt the token.\n    </p>\n    <p>\n        If the annotation contains random, unrelated or nonsense words, the HIT will be rejected.\n    </p>\n\n</div>"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"randomARG.metadata.status==true\" class=\"\">\n    <div class=\"box box-solid\">\n        <div class=\"box-header\">\n            <h3 class=\"panel-title\"> <i class=\"fa fa-bug\"></i> <strong> Lineage (<a class=\"panel-title\" href=\"https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id={{ randomARG.metadata.organism.taxonomy }}\">NCBI Taxonomy </a>) </strong></h3>\n        </div>\n\n        <div class=\"box-body\">\n            <div class=\"dl-vertical\">\n                <span *ngFor=\"let item of randomARG.metadata.organism.lineage\">\n          {{ item }} <strong>&rsaquo;</strong>\n        </span>\n            </div>\n            <p *ngIf=\"randomARG.metadata.organism.names\"> <strong>Organism: </strong>{{ randomARG.metadata.organism.names[0].value }}</p>\n        </div>\n\n    </div>\n\n</div> -->\n\n\n\n<div *ngIf=\"render\" class=\"\">\n    <div class=\"box box-solid \">\n        <div class=\"box-header with-border\">\n            <i class=\"fa fa-tag\"></i>\n\n            <h3 class=\"box-title\"><strong>Metadata</strong></h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <p *ngIf=\"randomARG.metadata.gene\"> <strong *ngIf=\"randomARG.metadata.gene[0].name\">Gene Name: </strong> <span class=\"\" *ngIf=\"randomARG.metadata.gene[0].name\"> {{ randomARG.metadata.gene[0].name.value }} </span></p>\n            <p *ngIf=\"randomARG.metadata.protein.recommendedName\" class=\"\" data-original-title=\"\"> <strong>Protein: </strong> <span class=\"\"> {{ randomARG.metadata.protein.recommendedName.fullName.value }} </span> </p>\n            <p *ngIf=\"randomARG.metadata.proteinExistence\" data-original-title=\"\"> <strong>Protein Existence: </strong> <span class=\"\">  {{ randomARG.metadata.proteinExistence }} </span> </p>\n\n            <p><strong>Sequence length (AA)</strong>: <span> {{ randomARG.entry['length'] }}</span></p>\n\n            <hr>\n\n            <span *ngFor=\"let item of randomARG.metadata.keywords\" class=\"badge bg-blue\" data-original-title=\"\"> {{ item.value }} </span>\n\n        </div>\n        <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n</div>\n\n\n<div *ngIf=\"render\" class=\"\">\n    <div class=\"box box-solid \">\n        <div class=\"box-header with-border\">\n            <i class=\"fa fa-object-group\"></i>\n\n            <h3 class=\"box-title\"><strong>Description</strong></h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <dl class=\"dl-horizontal\">\n                <div *ngFor=\"let item of randomARG.metadata.comments\">\n                    <dt *ngIf=\"item.text\"> {{ item.type }}:</dt>\n                    <dd *ngIf=\"item.text\"> {{ item.text[0].value }}</dd>\n                    <br>\n                </div>\n            </dl>\n\n        </div>\n        <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n</div>\n\n\n<div *ngIf=\"render\" class=\"\">\n    <md-expansion-panel class=\"box box-solid\">\n        <!-- <div class=\"box box-solid\"> -->\n        <md-expansion-panel-header>\n            <md-panel-title>\n                <h4>Gene Ontology</h4>\n            </md-panel-title>\n            <md-panel-description>\n                Functions and Biological Process\n            </md-panel-description>\n        </md-expansion-panel-header>\n\n\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <dl class=\"dl-horizontal\">\n                <div *ngFor=\"let item of randomARG.metadata.dbReferences\">\n                    <dt *ngIf=\"item.type=='GO'\"> {{ item.id }}:</dt>\n                    <dd *ngIf=\"item.type=='GO'\"> {{ item.properties.term }} <span class=\"badge bg-lightblue\">{{ item.properties.source }} </span></dd>\n                    <br *ngIf=\"item.type=='GO'\">\n                </div>\n            </dl>\n\n        </div>\n        <!-- /.box-body -->\n    </md-expansion-panel>\n    <!-- /.box -->\n</div>\n\n<!-- <div *ngIf=\"randomARG.metadata.features\" class=\"\">\n    <div class=\"box box-solid\">\n        <div class=\"box-header with-border\">\n            <i class=\"fa fa-object-group\"></i>\n\n            <h3 class=\"box-title\"><strong>Domains</strong></h3>\n        </div>\n\n        <div class=\"box-body\">\n\n            <table class=\"table table-bordered text-center\">\n                <tbody>\n                    <tr>\n                        <th><span class=\"\">Type</span></th>\n                        <th><span class=\"\">Position(s)</span></th>\n                        <th><span class=\"\">Description</span></th>\n                        <th><span class=\"\">Evidence</span></th>\n                    </tr>\n                    <tr *ngFor=\"let item of randomARG.metadata.features\">\n                        <th> <span *ngIf=\"item.type!=undefined\"> {{ item.type }}</span></th>\n                        <th> <span *ngIf=\"item.begin!=undefined\">{{ item.begin }}-{{ item.end }}</span></th>\n                        <th><span *ngIf=\"item.description!=undefined\">{{ item.description }}</span></th>\n                        <th *ngIf=\"item.evidences\">\n                            <span *ngIf=\"item.evidences[0].source\">{{ item.evidences[0].source.name }}</span>\n                            <a *ngIf=\"item.evidences[0].source\" href=\"{{ item.evidences[0].source.url }}\">({{ item.evidences[0].source.id}})</a>\n                        </th>\n                    </tr>\n\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>\n\n</div> -->\n\n\n<div *ngIf=\"render\" class=\"\">\n    <md-expansion-panel class=\"box box-solid\">\n        <!-- <div class=\"box box-solid\"> -->\n        <md-expansion-panel-header>\n            <md-panel-title>\n                <h4>References</h4>\n            </md-panel-title>\n            <md-panel-description>\n                Scientific papers that support the gene {{ randomARG.entry.gene_id }}\n            </md-panel-description>\n        </md-expansion-panel-header>\n\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <dl class=\"dl-horizontal\">\n                <div *ngFor=\"let item of randomARG.metadata.references\">\n                    <strong *ngIf=\"item.citation.authors\"> {{ item.citation.authors[0] }} {{ item.citation.authors[1] }} et al., </strong> {{ item.citation.title }} {{item.citation.publication.submissionDatabase}} ({{ item.citation.publicationDate }})\n\n                    <div *ngFor=\"let ref of item.citation.dbReferences\">\n                        <strong>{{ ref.type }}</strong>: {{ ref.id }}\n                        <div *ngIf=\"ref.abstract\">\n\n                            <span *ngFor=\"let kw of ref.abstract\">\n                <span *ngIf=\"kw.type=='paragraph'\">{{ kw.text }}</span> <strong class=\"\" *ngIf=\"kw.type=='keyword'\">{{ kw.text }}</strong>\n                            </span>\n\n                        </div>\n\n                    </div>\n\n                </div>\n            </dl>\n\n        </div>\n        <!-- /.box-body -->\n        <!-- </div> -->\n    </md-expansion-panel>\n    <!-- /.box -->\n</div>\n\n<div *ngIf=\"renderError\">\n    <div class=\"alert alert-info alert-dismissible\">\n        <h4><i class=\"icon fa fa-ban\"></i> {{ randomARG.entry.database }} Alert!</h4>\n        <strong>There is a problem with this request!</strong>\n        <p>\n            {{ randomARG.metadata.errorMessage[0] }}\n        </p>\n        <p>\n            Please take a look at the provided information to make the annotation.\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 col-md-offset-1\">\n    <div class=\"box box-solid\">\n        <div class=\"box-body\">\n            <h4>ARGminer database download</h4>\n            <table class=\"table table-responsive table-bordered text-center\">\n                <tbody>\n                    <tr class=\"table-success\">\n                        <th>Database</th>\n                        <th>Version</th>\n                        <th>Comments</th>\n                    </tr>\n\n                    <tr *ngFor=\"let item of databases\">\n                        <td><a [href]=\"'http://bench.cs.vt.edu/ftp/argminer/release/'+item.version+'.fasta'\" target=\"_blank\">ARGminer-DB</a></td>\n                        <td>{{ item.version }}</td>\n                        <td>{{ item.comments }}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <br>\n            <h4>Structure</h4>\n            <p class=\"small\">ARGminer annotation can be downloaded as a fasta file. The annotation of each entry is reported in the fasta header as follows:</p>\n            <code>\n                >gene_id | score:0 | validated:True/False | ARG-Class | ARG-name | ARG-mechanism | MGE-score:0 | Pat-score:0  \n            </code>\n            <br><br>\n            <p class=\"small\">\n                <strong>Score: </strong> Score of the validated entry.\n                <br><strong> Validated:</strong> flag to show if the ARG has been validated.\n                <br><strong>Pat(Pathogen):</strong> Evidence of the ARG being carried by a pathogen.\n                <br><strong>MGE(Mobile Genetic Element):</strong> Evidence of the ARG being carried by a mobie element e.g., plasmids.\n            </p>\n            <p class=\"small\">Genes that have not been validated conserve their original annotation (deepARG-DB)</p>\n        </div>\n        <div class=\"box-footer text-center\">\n            <p class=\"small\">*ARGminer uses the antibiotic resistance annotation from <a href=\"https://bench.cs.vt.edu/deeparg/\" target=\"_blank\">deepARG-DB</a>, <a href=\"https://card.mcmaster.ca/home\" target=\"_blank\">CARD</a>, <a href=\"https://ardb.cbcb.umd.edu/\" target=\"_blank\">ARDB</a>,\n                <a href=\"http://www.uniprot.org/\" target=\"_blank\">UniProt</a>,\n                <a href=\"https://megares.meglab.org/\" target=\"_blank\">MEGARes</a>,\n                <a href=\"http://aclame.ulb.ac.be/\" target=\"_blank\">ACLAME</a>, <a href=\"https://www.patricbrc.org/\" target=\"_blank\">PATRIC</a> and <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/\" target=\"_blank\">PubMed</a> databases. ARGminer is free for\n                academic use, in any othercase, please check each one of the cited resources.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid home-font\">\n\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n\n\n            <div class=\"col-md-6\">\n                <h1 class=\"display-3\">ARGminer</h1>\n                <p class=\"lead\">\n                    <strong>A</strong>ntibiotic <strong>R</strong>esistance <strong>G</strong>ene <strong>miner</strong> database\n                </p>\n                <hr class=\"my-4\">\n                <p>A database and crowdsourcing platform for the inspection and validation of antibiotic resistance genes</p>\n                <a routerLink=\"/classify\" class=\"btn btn-primary btn-large\">Help to validate ARGs</a> <a routerLink=\"/database\" class=\"btn btn-primary btn-large\">Download</a>\n            </div>\n\n            <div class=\"col-md-6 btn-holder\">\n                <img src=\"assets/images/ARGminer_pipeline.svg\" alt=\"pipeline\">\n                <!-- <a href='https://www.freepik.com/free-vector/ten-workflow-slide-templates-set_1371515.htm'>Designed by\n              Katemangostar</a> -->\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"my-4\">\n\n\n    <div class=\"row\">\n        <div *ngFor='let item of info' class=\"col-md-3 no-gutter\">\n            <div class=\"panel panel-primary no-gutter\">\n                <h3 class=\"panel-heading\">{{item.title}}</h3>\n                <div class=\"panel-body\">\n                    <h5 class=\"panel-title\">{{item.subtitle}}</h5>\n                    <h6 class=\"panel-subtitle text-muted\">{{item.subsubtitle}}</h6>\n                </div>\n                <img [src]=\"item.image\" alt=\"Card image\">\n                <!-- <a href='https://www.freepik.com/free-vector/hands-putting-puzzle-pieces-together_795183.htm'>Designed by Freepik</a> -->\n                <div class=\"panel-body\">\n                    <p class=\"panel-text\">\n                        {{item.description}}\n                    </p>\n                </div>\n\n                <div class=\"panel-body\">\n                    <a routerLink=\"/classify\" class=\"card-link\">Inspect ARGs</a>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n\n\n\n\n    <!-- <div class=\"box box-solid\">\n        <div class=\"box-body\">\n            <div class=\"logo-text text-center\">\n                <span class=\"home-logo\"><strong>ARG-miner:</strong>\n          A database and crowdsourcing platform for the inspection\n          and validation of\n          antibiotic resistance genes\n        </span>\n                <hr>\n            </div>\n            <p>\n                Welcome to ARG-miner, a powerful open access web-platform dedicated to the inspection, curation and exploration of <strong>A</strong>ntibiotic <strong>R</strong>esitance <strong>G</strong>enes (ARGs). ARG-miner offers a novel approach\n                to validate the ARGs annotation by inspecting their metadata and relationship with known ARGs resources. It enables the detection of genes that have evidence of being transferred by mobile genetic elements and evidence about the pathogenic\n                hosts. We use a set of different databases including: <a href=\"https://bench.cs.vt.edu/deeparg/\" target=\"_blank\">deepARG-DB</a>,\n                <a href=\"https://card.mcmaster.ca/home\" target=\"_blank\">CARD</a>, <a href=\"https://ardb.cbcb.umd.edu/\" target=\"_blank\">ARDB</a>,\n                <a href=\"http://www.uniprot.org/\" target=\"_blank\">UniProt</a>,\n                <a href=\"https://megares.meglab.org/\" target=\"_blank\">MEGARes</a>,\n                <a href=\"http://aclame.ulb.ac.be/\" target=\"_blank\">ACLAME</a>, <a href=\"https://www.patricbrc.org/\" target=\"_blank\">PATRIC</a> and <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/\" target=\"_blank\">PubMed</a>.\n            </p>\n            <hr>\n            <a class=\"btn btn-primary \" href=\"#/classify\">Get Started</a>\n            <a class=\"btn btn-primary \" href=\"#/database\">Download</a>\n\n        </div>\n    </div> -->\n\n\n    <hr>\n</div>\n\n<div class=\"container-fluid\">\n    <footer class=\"footer\" style=\"background:white\">\n        <br><br>\n\n        <div class=\"col-md-2 col-md-offset-4 funding\" style=\"width:7%\">\n            <img src=\"assets/images/nsf.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-md-2 funding\">\n            <img src=\"assets/images/vt.jpg\" alt=\"\">\n        </div>\n        <div class=\"col-md-2 funding\">\n            <img src=\"assets/images/heard.png\" alt=\"\" style=\"width:60%\">\n        </div>\n        <br><br><br><br>\n        <div class=\"col-md-12\"></div>\n\n    </footer>\n</div>"

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(257);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    api_url: 'http://localhost:5001'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[722]);
//# sourceMappingURL=main.bundle.js.map