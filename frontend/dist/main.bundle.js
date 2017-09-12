webpackJsonp([2,5],{

/***/ 158:
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
        template: __webpack_require__(671),
        styles: [__webpack_require__(581)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function DatabaseComponent() {
    }
    DatabaseComponent.prototype.ngOnInit = function () {
    };
    return DatabaseComponent;
}());
DatabaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-database',
        template: __webpack_require__(682),
        styles: [__webpack_require__(592)]
    }),
    __metadata("design:paramtypes", [])
], DatabaseComponent);

//# sourceMappingURL=database.component.js.map

/***/ }),

/***/ 160:
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
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(683),
        styles: [__webpack_require__(593)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(241);
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

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
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
        if (location['_platformStrategy']._platformLocation._location.hostname == "localhost") {
            this.baseUrl = location['_platformStrategy']._platformLocation._location.protocol + '//' + location['_platformStrategy']._platformLocation._location.hostname + ":5001";
        }
        else {
            this.baseUrl = location['_platformStrategy']._platformLocation._location.protocol + '//' + location['_platformStrategy']._platformLocation._location.hostname + "/argpedia_api";
        }
        this.ARG = [];
    }
    DataService.prototype.getRandomKnownARG = function () {
        var _this = this;
        console.log(this.baseUrl);
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
        return this.http.get(this.baseUrl + '/get/search/?keyword=' + keyword + '&index=' + index)
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
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 263;


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(296);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classify_classify_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__(158);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });





var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'classify', component: __WEBPACK_IMPORTED_MODULE_1__classify_classify_component__["a" /* ClassifyComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'database', component: __WEBPACK_IMPORTED_MODULE_3__database_database_component__["a" /* DatabaseComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(router);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 283:
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
        template: __webpack_require__(672),
        styles: [__webpack_require__(582)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__database_database_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classify_classify_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jqwidgets_framework_jqwidgets_ts_angular_jqxchart__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_ncbi_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// APP modules

// Visualization

// Services



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__database_database_component__["a" /* DatabaseComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12_jqwidgets_framework_jqwidgets_ts_angular_jqxchart__["a" /* jqxChartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__classify_classify_module__["a" /* ClassifyModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_14__services_ncbi_service__["a" /* NcbiService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
        this.randomARG = this.dataService.ARG;
    };
    return BestHitArdbComponent;
}());
BestHitArdbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'besthit-metadata-ardb',
        template: __webpack_require__(673),
        styles: [__webpack_require__(583)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], BestHitArdbComponent);

var _a;
//# sourceMappingURL=ardb.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
    BestHitCardComponent.prototype.ngOnInit = function () {
        this.randomARG = this.dataService.ARG;
        // console.log(this.randomARG)
    };
    return BestHitCardComponent;
}());
BestHitCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'besthit-metadata-card',
        template: __webpack_require__(674),
        styles: [__webpack_require__(584)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], BestHitCardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
        this.randomARG = this.dataService.ARG;
    };
    return GenericComponent;
}());
GenericComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-generic',
        template: __webpack_require__(675),
        styles: [__webpack_require__(585)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], GenericComponent);

var _a;
//# sourceMappingURL=generic.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classify_component__ = __webpack_require__(72);
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_star_rating__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__classify_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classify_routing_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__metadata_uniprot_uniprot_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__metadata_card_card_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__metadata_ardb_ardb_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__besthit_card_card_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__besthit_ardb_ardb_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__genomes_genome_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__curate_curate_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__besthit_generic_generic_component__ = __webpack_require__(287);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Visualization


// primeng





// Metadata



// BestHit


// Genomes and MGE

// import { GenomeModule } from './genomes/genome.module';
// Curate




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
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_10__classify_routing_module__["a" /* ClassifyRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["StepsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular_star_rating__["a" /* StarRatingModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TabViewModule"], __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CodeHighlighterModule"]
            // GenomeModule
        ],
        schemas: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__classify_component__["a" /* ClassifyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__metadata_uniprot_uniprot_component__["a" /* UniprotComponent */],
            __WEBPACK_IMPORTED_MODULE_12__metadata_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__metadata_ardb_ardb_component__["a" /* ArdbComponent */],
            __WEBPACK_IMPORTED_MODULE_15__besthit_ardb_ardb_component__["a" /* BestHitArdbComponent */],
            __WEBPACK_IMPORTED_MODULE_14__besthit_card_card_component__["a" /* BestHitCardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__genomes_genome_component__["a" /* GenomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__curate_curate_component__["a" /* CurateComponent */],
            __WEBPACK_IMPORTED_MODULE_18__besthit_generic_generic_component__["a" /* GenericComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmationService"]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_9__classify_component__["a" /* ClassifyComponent */]
        ]
    })
], ClassifyModule);

//# sourceMappingURL=classify.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classify_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
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
        this.group_options = ["Bla1", "MacB", "BacA"];
        this.mge_options = ["Plasmid", "Virus", "Prophage", "None"];
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
        this.antibiotic = {
            class: "",
            group: "",
            mechanism: "",
            MGE: {},
            comments: "",
            rating: {},
            gene_id: ""
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
        if (value == 1) {
            if (this.antibiotic['class'] == "" || this.antibiotic['group'] == "") {
                this.overlay['title'] = "Emtpy group and/or class not allowed";
                this.overlay['content'] = "Please make sure to insert the antibiotic class and group in the form (mechanism is optional)";
                this.showDialog();
            }
            else {
                this.activeIndex = 1;
                this.step1 = false;
                this.step2 = true;
            }
        }
        else if (value == 2) {
            this.step2 = false;
            this.step3 = true;
            this.activeIndex = 2;
        }
        else if (value == 3) {
            this.step3 = false;
            this.step1 = true;
            this.activeIndex = 0;
        }
    };
    CurateComponent.prototype.submitReview = function () {
        // console.log(this.antibiotic)
        var _this = this;
        this.overlay['title'] = "Your results";
        this.overlay['content'] = "Your manual inspection has been registered in the system and its ready for validation.";
        this.overlay['score'] = 10;
        this.overlay['average_score'] = 15;
        // show the overlay with the score
        // this.showDialog()
        this.dataService.insertCuration(this.antibiotic)
            .subscribe(function (response) {
            // console.log(response)
            // restart the form values to empty.
            _this.continueReview();
        });
    };
    CurateComponent.prototype.continueReview = function () {
        var _this = this;
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
        // this.classifyComponent.render=false;
        this.dataService.getRandomKnownARG()
            .subscribe(function (response) {
            _this.classifyComponent.randomARG = _this.dataService.ARG;
            // console.log(this.randomARG)
            _this.classifyComponent.loading = false;
            _this.antibiotic = {
                class: "",
                group: "",
                mechanism: "",
                MGE: {},
                comments: "",
                rating: {},
                gene_id: ""
            };
        });
        this.display = false;
    };
    return CurateComponent;
}());
CurateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-curate',
        template: __webpack_require__(677),
        styles: [__webpack_require__(587)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__classify_component__["a" /* ClassifyComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__classify_component__["a" /* ClassifyComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], CurateComponent);

var _a, _b, _c;
//# sourceMappingURL=curate.component.js.map

/***/ }),

/***/ 291:
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Charts__ = __webpack_require__(291);
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
        this.randomARG = this.dataService.ARG;
        this.disease = new __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]();
        // console.log(this.disease)
        this.disease.draw(this.randomARG['pathogen']['disease']);
        this.AMR_phenotype = new __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]();
        this.AMR_phenotype.draw(this.randomARG['pathogen']['phenotype']);
        this.host = new __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]();
        this.host.draw(this.randomARG['pathogen']['host']);
    };
    GenomeComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    return GenomeComponent;
}());
GenomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'genome-metadata',
        template: __webpack_require__(678),
        styles: [__webpack_require__(588)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Charts__["a" /* PieChart */]) === "function" && _b || Object])
], GenomeComponent);

var _a, _b;
//# sourceMappingURL=genome.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
    }
    ArdbComponent.prototype.ngOnInit = function () {
        this.randomARG = this.dataService.ARG;
    };
    return ArdbComponent;
}());
ArdbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'classify-metadata-ardb',
        template: __webpack_require__(679),
        styles: [__webpack_require__(589)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ArdbComponent);

var _a;
//# sourceMappingURL=ardb.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
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
    }
    CardComponent.prototype.ngOnInit = function () {
        this.randomARG = this.dataService.ARG;
    };
    return CardComponent;
}());
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'classify-metadata-card',
        template: __webpack_require__(680),
        styles: [__webpack_require__(590)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], CardComponent);

var _a;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ncbi_service__ = __webpack_require__(161);
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
    }
    UniprotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomARG = this.dataService.ARG;
        // GET all reference ids from pubmed:
        if (this.randomARG['metadata'].status == true) {
            this.randomARG['metadata'].references.forEach(function (element) {
                if (element.citation.dbReferences) {
                    element.citation.dbReferences.forEach(function (citation) {
                        if (citation.type == "PubMed") {
                            _this.ncbiService.getPubMed(citation.id)
                                .subscribe(function (response) {
                                var str = response.text;
                                var lstr = [];
                                var inpos = 0;
                                var denotations = response.denotations.sort(function (a, b) { return b.span.begin - a.span.begin; }).reverse();
                                // let denotations = response.denotations
                                for (var _i = 0, denotations_1 = denotations; _i < denotations_1.length; _i++) {
                                    var pos = denotations_1[_i];
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
        template: __webpack_require__(681),
        styles: [__webpack_require__(591)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ncbi_service__["a" /* NcbiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ncbi_service__["a" /* NcbiService */]) === "function" && _b || Object])
], UniprotComponent);

var _a, _b;
//# sourceMappingURL=uniprot.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

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
exports.push([module.i, ".container-par {\n    width: 90%;\n    margin: 0 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".curate-nav {\n    right: 5%;\n    width: 21.5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".ui-steps .ui-steps-item {\n    width: 33%;\n}\n\n.ui-steps.steps-custom {\n    margin-bottom: 10px;\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n    height: 4px;\n    /* padding: 0 1em; */\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n    background-color: #0081c2;\n    color: #FFFFFF;\n    /* display: inline-block;  */\n    width: 26px;\n    /* border-radius: 5%; */\n    margin-top: -20px;\n    margin-bottom: 12px;\n    font-size: 200%;\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n    /* color: #555555;  */\n    color: #FFFFFF;\n    margin-top: -43px;\n    font-weight: bold;\n}\n\n.badge,\n.ui-steps-item,\n.ui-steps-number,\np-dialog {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n    border-color: rgba(255, 255, 255, 0) !important;\n}\n\n.box,\n.box-primary,\n.panel {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.19) !important;\n    border-color: rgba(0, 0, 0, 0.3) !important;\n}\n\nmd-input-container textarea {\n    background-color: rgba(0, 0, 0, 0.05) !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-par\">\n        <!-- <div class=\"col-md-12\"> -->\n        <div class=\"navbar-header\">\n            <a routerLink=\"\" class=\"navbar-brand\">ARG-miner</a>\n            <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n        </div>\n\n        <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n            <ul class=\"nav navbar-nav\">\n                <li>\n                    <a routerLink=\"database\">Database</a>\n                </li>\n                <li>\n                    <a routerLink=\"classify\">Classify</a>\n                </li>\n                <li>\n                    <a routerLink=\"about\">About</a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a routerLink=\"home\">Home</a></li>\n            </ul>\n\n        </div>\n        <!-- </div> -->\n    </div>\n</div>\n\n<hr>\n<br>\n<br>\n<div class=\"container-par\">\n    <!-- <div class=\"wrapper\"> -->\n    <router-outlet></router-outlet>\n    <!-- </div> -->\n</div>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let bh of randomARG.besthit.alignments\">\n    <div *ngIf=\"bh.best_hit_database=='ARDB'\" class=\"\">\n        <div class=\"box box-solid \">\n            <div class=\"box-header with-border\">\n                <i class=\"fa fa-gears\"></i>\n                <h3 class=\"box-title\"><strong> {{ bh.best_hit_database }} </strong> BLAST alignment <span class=\"badge\">{{ bh.metadata.subtype }}</span></h3>\n            </div>\n\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <dl class=\"dl-horizontal\">\n\n                    <dt>Best Hit ID</dt>\n                    <dd> {{ bh.best_hit }}\n                        <dd>\n\n                            <dt>Coverage:</dt>\n                            <dd>\n\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=30\" class=\"badge bg-red\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>30 && (100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=50\" class=\"badge bg-yellow\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}%</span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>50 && (100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=80\" class=\"badge bg-green\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>80\" class=\"badge bg-blue\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n\n                            </dd>\n                            <dt>Bitscore:</dt>\n                            <dd>\n                                <span *ngIf=\"bh.bitscore<=50\" class=\"badge bg-red\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>50 && bh.bitscore<=100\" class=\"badge bg-yellow\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>100 && bh.bitscore<=500\" class=\"badge bg-green\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>500\" class=\"badge bg-blue\"> {{ bh.bitscore }} </span>\n\n                            </dd>\n                            <dt>evalue:</dt>\n                            <dd>\n\n                                <span *ngIf=\"bh.evalue>=1e-5\" class=\"badge bg-red\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-5 && bh.evalue>=1e-10\" class=\"badge bg-yellow\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-10 && bh.evalue>=1e-50\" class=\"badge bg-green\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-50\" class=\"badge bg-blue\"> {{ bh.evalue }} </span>\n\n                            </dd>\n                            <dt>Similarity:</dt>\n                            <dd>\n\n                                <span *ngIf=\"bh.identity<=30\" class=\"badge bg-red\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>30 && bh.identity<=50\" class=\"badge bg-yellow\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>50 && bh.identity<=80\" class=\"badge bg-green\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>80\" class=\"badge bg-blue\"> {{ bh.identity }}% </span>\n\n                            </dd>\n\n                            <hr>\n                            <strong> AMR profile: </strong>\n\n\n                            <!-- <dd> -->\n                            <p> {{bh.metadata.description}} </p>\n                            <div *ngFor=\"let type of bh.metadata.resistance_profile\">\n                                <strong> <span class=\"strong\">{{ type.type }} </span> </strong>\n                                <p *ngIf=\"type.description\"> {{ type.description }} </p>\n                            </div>\n                            <!-- <dd> -->\n\n\n                </dl>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let bh of randomARG.besthit.alignments\">\n\n    <div *ngIf=\"bh.best_hit_database=='CARD'\" class=\"\">\n        <div class=\"box box-solid \">\n            <div class=\"box-header with-border\">\n                <i class=\"fa fa-gears\"></i>\n\n                <h3 class=\"box-title\"><strong> {{ bh.best_hit_database }} </strong> BLAST alignment <span class=\"badge\">{{ bh.metadata.subtype }}</span></h3>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <dl class=\"dl-horizontal\">\n\n                    <dt>Best Hit ID</dt>\n                    <dd> {{ bh.best_hit }}\n                        <dd>\n\n                            <dt>Coverage:</dt>\n                            <dd>\n\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=30\" class=\"badge bg-red\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>30 && (100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=50\" class=\"badge bg-yellow\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}%</span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>50 && (100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=80\" class=\"badge bg-green\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>80\" class=\"badge bg-blue\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n\n                            </dd>\n                            <dt>Bitscore:</dt>\n                            <dd>\n                                <span *ngIf=\"bh.bitscore<=50\" class=\"badge bg-red\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>50 && bh.bitscore<=100\" class=\"badge bg-yellow\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>100 && bh.bitscore<=500\" class=\"badge bg-green\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>500\" class=\"badge bg-blue\"> {{ bh.bitscore }} </span>\n\n                            </dd>\n                            <dt>evalue:</dt>\n                            <dd>\n\n                                <span *ngIf=\"bh.evalue>=1e-5\" class=\"badge bg-red\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-5 && bh.evalue>=1e-10\" class=\"badge bg-yellow\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-10 && bh.evalue>=1e-50\" class=\"badge bg-green\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-50\" class=\"badge bg-blue\"> {{ bh.evalue }} </span>\n\n                            </dd>\n                            <dt>Similarity:</dt>\n                            <dd>\n\n                                <span *ngIf=\"bh.identity<=30\" class=\"badge bg-red\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>30 && bh.identity<=50\" class=\"badge bg-yellow\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>50 && bh.identity<=80\" class=\"badge bg-green\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>80\" class=\"badge bg-blue\"> {{ bh.identity }}% </span>\n\n                            </dd>\n\n                            <hr>\n                            <strong> AMR profile: </strong>\n\n                            <!-- <dd> -->\n                            <p> {{bh.metadata.description}} </p>\n                            <div *ngFor=\"let type of bh.metadata.type\">\n                                <strong> {{ type.name }} </strong> ({{ type.namespace }})\n                                <p> {{ type.def }} </p>\n\n                                <div *ngIf=\"type.is_a\">\n                                    <div *ngFor=\"let rel of type.is_a\">\n                                        <strong> {{ rel['id'] }} </strong> {{ rel.term }}\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"type.relationship\">\n                                    <div *ngFor=\"let rel of type.relationship\">\n                                        <strong> {{ rel.accession }} </strong> <u> {{ rel.term }} </u> ( {{ rel.id }} )\n                                    </div>\n                                </div>\n\n                            </div>\n                            <!-- </dd> -->\n\n\n\n                </dl>\n            </div>\n            <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n    </div>\n</div>"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let bh of randomARG.besthit.alignments\">\n    <div *ngIf=\"bh.best_hit_database!=='CARD' && bh.best_hit_database!=='ARDB'\" class=\"\">\n        <div class=\"box box-solid \">\n            <div class=\"box-header with-border\">\n                <i class=\"fa fa-gears\"></i>\n\n                <h3 class=\"box-title\"><strong> {{ bh.best_hit_database }} </strong> BLAST alignment <span class=\"badge\">{{ bh.subtype }}</span></h3>\n            </div>\n            <div class=\"box-body\">\n                <dl class=\"dl-horizontal\">\n\n                    <dt>Best Hit ID</dt>\n                    <dd> {{ bh.best_hit.substring(0, 30) }}\n                        <dd>\n\n                            <dt>Coverage:</dt>\n                            <dd>\n\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=30\" class=\"badge bg-red\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>30 && (100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=50\" class=\"badge bg-yellow\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}%</span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>50 && (100*bh.algn_len/randomARG.entry['length']).toFixed(2)<=80\" class=\"badge bg-green\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n                                <span *ngIf=\"(100*bh.algn_len/randomARG.entry['length']).toFixed(2)>80\" class=\"badge bg-blue\"> {{ (100*bh.algn_len/randomARG.entry['length']).toFixed(0) }}% </span>\n\n                            </dd>\n                            <dt>Bitscore:</dt>\n                            <dd>\n                                <span *ngIf=\"bh.bitscore<=50\" class=\"badge bg-red\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>50 && bh.bitscore<=100\" class=\"badge bg-yellow\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>100 && bh.bitscore<=500\" class=\"badge bg-green\"> {{ bh.bitscore }} </span>\n                                <span *ngIf=\"bh.bitscore>500\" class=\"badge bg-blue\"> {{ bh.bitscore }} </span>\n\n                            </dd>\n                            <dt>evalue:</dt>\n                            <dd>\n\n                                <span *ngIf=\"bh.evalue>=1e-5\" class=\"badge bg-red\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-5 && bh.evalue>=1e-10\" class=\"badge bg-yellow\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-10 && bh.evalue>=1e-50\" class=\"badge bg-green\"> {{ bh.evalue }} </span>\n                                <span *ngIf=\"bh.evalue<1e-50\" class=\"badge bg-blue\"> {{ bh.evalue }} </span>\n\n                            </dd>\n                            <dt>Similarity:</dt>\n                            <dd>\n\n                                <span *ngIf=\"bh.identity<=30\" class=\"badge bg-red\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>30 && bh.identity<=50\" class=\"badge bg-yellow\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>50 && bh.identity<=80\" class=\"badge bg-green\"> {{ bh.identity }}% </span>\n                                <span *ngIf=\"bh.identity>80\" class=\"badge bg-blue\"> {{ bh.identity }}% </span>\n\n                            </dd>\n\n                            <hr>\n                            <strong> AMR profile: </strong><br><br>\n\n                            <!-- <dd> -->\n\n\n                            <strong> Antibiotic Resistance Class: </strong> {{ bh.type }}<br>\n                            <strong> Antibiotic Resistance Group: </strong> {{ bh.subtype }}<br>\n                            <strong> Antibiotic Resistance Mechanism: </strong> {{ bh.mechanism }}<br>\n\n\n                            <!-- </dd> -->\n\n\n\n                </dl>\n            </div>\n        </div>\n    </div>\n</div>\n<hr>"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n    <div *ngIf=\"!render\" class=\"col-md-4 col-md-offset-4\">\n        <div class=\"col-sm-4 col-sm-offset-4\">\n            <object>\n            <embed src=\"assets/images/loading_1.svg\" />\n          </object>\n        </div>\n    </div>\n\n    <div *ngIf=\"render\">\n        <!--Left panel-->\n        <div class=\"col-sm-3 \">\n            <!-- <div class=\"\"> -->\n            <div *ngIf=\"randomARG.status==true\" class=\"\">\n                <!-- <div class=\"col-md-12\"> -->\n                <div class=\"box box-solid box-primary\">\n                    <div class=\"box-header with-border\">\n\n                        <i class=\"fa fa-gears\"></i>\n                        <!-- <p *ngIf=\"loading\"><md-progress-bar mode=\"indeterminate\"></md-progress-bar></p>  -->\n                        <h3 class=\"box-title\"><strong>Current Annotation </strong> </h3>\n\n                    </div>\n                    <!-- /.box-header -->\n                    <div class=\"box-body\">\n\n                        <dl class=\"dl\">\n                            <!-- <p> -->\n                            <strong>Query gene id:</strong>\n                            <span class=\"\">{{ randomARG.entry.gene_id }}</span>\n                            <!-- </p> -->\n                            <!-- <p> -->\n                            <br>\n                            <strong>ARG Class:</strong>\n                            <span class=\"\">{{ randomARG.entry.type }}</span>\n                            <!-- </p> -->\n                            <!-- <p> -->\n                            <br>\n                            <strong>ARG Group:</strong>\n                            <span class=\"\">{{ randomARG.entry.subtype }}</span>\n                            <!-- </p> -->\n                            <!-- <p> -->\n                            <br>\n                            <strong>ARG Database:</strong>\n                            <span class=\"\">{{ randomARG.entry.database }}</span>\n                            <!-- </p> -->\n                            <!-- <p> -->\n                            <hr>\n                            <strong>Inspected:</strong>\n                            <span class=\"\">{{ randomARG.inspected.length }}</span>\n                            <!-- </p> -->\n                            <!-- <dt>Score:</dt> -->\n                            <!-- <dd><span class=\"badge bg-blue\">{{ randomARG.entry.score }}</span></dd> -->\n\n                        </dl>\n\n                        <div class=\"col-md-12 text-center\">\n                            <button (click)=\"nextGene()\" class=\"\" color=\"red\" md-raised-button>Skip Gene</button>\n                        </div>\n\n\n                    </div>\n\n                    <!-- /.box-body -->\n                    <!-- </div> -->\n                    <!-- /.box -->\n                </div>\n            </div>\n\n            <div class=\"col-md-12 box box-solid \">\n                <h4><strong>1: ARG identification</strong></h4>\n                <p>Please fill up the Antibiotic resistance class, group and mechanism (if any) of the gene based on the observation from the different resources.</p>\n\n                <p>The Blast alignment sections associate the queried gene to its closest antibiotic resistance genes from curated databases. From this section you need to look at the alignment scores (Bitscore, evalue, identity and coverage). High identity\n                    and coverage represent close related sequences. Statistically significant alignments don't necesarly need high identity percentages. Therefore, pay attention to the Bitscores and Evalues. <strong>Note</strong>: A bitscore greater than\n                    50 is considered significant if it spans at least 90% coverage.\n                </p>\n\n\n                <hr>\n\n                <h4><strong>2: Mobile Genetic Elements</strong></h4>\n\n                <p><strong>Horizontal Gene Transfer</strong></p>\n                <p>Please check if there is any evidence that suggests the gene has been observed in a plasmid, prophage or virus.</p>\n                <p>To complete this task please check the Horizontal Gene Transfer sections. If there is not any box with plasmid, prophage or virus tags it means to date there is not evidence that the gene is transfered by any of those mechanisms.\n                </p>\n                <p><strong>Pathogen Genomes</strong></p>\n                <p>Please take a look at the pathogen genomes panel under the horizontal gene transfer section. This panel will show you the association of the queried gene against a set of ~100,000 bacterial genomes. You will get information about the association\n                    of the gene to pathogens as well as their antimicrobial phenotype (resistant, susceptible, intermediate). Rate your findigns according to the provided evidence.\n\n                </p>\n\n                <hr>\n                <h4><strong>3: Review and submit</strong></h4>\n                <p>This panel contains your observations for the queried gene.</p>\n                <p><strong>Verify your observations</strong></p>\n                <p>Please, make sure the values in the fields (ARG class, ARG group and ARG mechanism) correspond to what you have observed.</p>\n                <p><strong>Rate your expertise</strong></p>\n                <p>Please in a scale from 1 to 5 rate your confidence or expertice level, where 1 depicts a non expert evaluator, and 5 if you have experience working with Antibiotic Resistance Genes.\n                    <p>\n                        <p><strong>Rate your annotation confidence</strong></p>\n                        <p>Please in a scale from 1 to 5, rate your confidence in the curation of the queried gene where 1 means that there is a lack of evidence about the gene and 5 the data correlates with your observations.</p>\n            </div>\n\n\n            <!-- </div> -->\n        </div>\n\n\n        <div class=\"col-sm-6 col-sm-offset-0\">\n\n            <div class=\"\">\n                <div class=\"box box-solid \">\n                    <div class=\"box-body\">\n                        <md-input-container class='col-sm-12 col-sm-offset-0'>\n                            <input #keyword (keyup.enter)=\"search(keyword.value)\" mdInput placeholder=\"Search term \" value=\"\" />\n                        </md-input-container>\n                    </div>\n                </div>\n            </div>\n\n\n\n            <div *ngIf=\"loading==true\" class=\"col-md-4 col-md-offset-4\">\n                <div class=\"col-sm-8 col-sm-offset-2\">\n                    <object>\n                <embed src=\"assets/images/loading_1.svg\" />\n              </object>\n                </div>\n            </div>\n\n            <div *ngIf=\"randomARG.status==true && loading==false\">\n                <!-- <md-tab-group (selectChange)=\"tabsEvent($event)\"> -->\n                <!-- <md-tab  label=\"METADATA\"> -->\n\n                <!--METADATA SECTION-->\n                <classify-metadata-uniprot *ngIf=\"randomARG.entry.database=='UNIPROT'\"> </classify-metadata-uniprot>\n                <classify-metadata-card> </classify-metadata-card>\n\n\n                <!-- </md-tab> -->\n\n                <!-- <md-tab  label=\"BEST HIT\"> -->\n                <hr>\n                <div *ngFor=\"let bh of randomARG.besthit.alignments\">\n                    <!-- <p> {{ bh.best_hit_database }} </p>  -->\n                    <besthit-metadata-ardb *ngIf=\"bh.best_hit_database=='ARDB'\"> </besthit-metadata-ardb>\n                    <besthit-metadata-card *ngIf=\"bh.best_hit_database=='CARD'\"> </besthit-metadata-card>\n                </div>\n                <!-- </md-tab> -->\n\n                <!-- OTHER DATABASES  -->\n\n                <app-generic></app-generic>\n\n\n                <!-- <md-tab  label=\"HORIZONTAL GENE TRANSFER\"> -->\n                <!-- <div *ngIf=\"drawGenomes\"> -->\n                <genome-metadata *ngIf=\"randomARG.entry.database=='UNIPROT'\"></genome-metadata>\n                <genome-metadata *ngIf=\"randomARG.entry.database=='CARD'\"></genome-metadata>\n                <genome-metadata *ngIf=\"randomARG.entry.database=='ARDB'\"></genome-metadata>\n                <!-- </div> -->\n                <!-- </md-tab> -->\n\n                <!-- </md-tab-group> -->\n            </div>\n        </div>\n\n\n        <!-- <div class=\"col-sm-3\"> -->\n        <div class=\"curate-nav affix\">\n            <app-curate></app-curate>\n        </div>\n        <!-- </div> -->\n    </div>\n\n    <!--</md-tab>-->\n\n    <!--<md-tab label=\"Novel ARGs\">Content 2</md-tab>-->\n\n    <!--<md-tab label=\"Potential ARGs\">Content 2</md-tab>-->\n\n    <!--</md-tab-group>-->\n</div>"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"box box-solid box-primary\">\n        <div class=\"box-body\">\n            <p-steps styleClass=\"steps-custom\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\" [model]=\"items\"></p-steps>\n\n            <p-dialog header=\"{{overlay.title}}\" icon=\"fa-external-link-square\" modal=\"modal\" [(visible)]=\"display\">\n\n                <div class=\"\">\n                    <div class=\"box-body text-center\">\n                        <p>{{ overlay.content }}</p>\n                        <p *ngIf=\"overlay.score\"><strong>Your annotation score is: {{ overlay.score }}</strong> which is\n                            <span class=\"badge bg-blue\" *ngIf=\"overlay.score<overlay.average_score\">lower</span>\n                            <span class=\"badge bg-red\" *ngIf=\"overlay.score>overlay.average_score\">higher</span> than the average score ( {{ overlay.average_score }} ) for this gene. </p>\n\n                    </div>\n                </div>\n\n\n                <p-footer class=\"text-center\">\n                    <button *ngIf=\"overlay.score\" type=\"button\" pButton icon=\"fa-check\" (click)=\"continueReview()\" label=\"Continue\"></button>\n                    <button *ngIf=\"!overlay.score\" type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Continue\"></button>\n                </p-footer>\n\n            </p-dialog>\n\n            <div *ngIf=\"step1 text-center\">\n\n                <!-- <div class=\"col-md-12\"> -->\n                <h4 class=\"text-center\"><strong>ARG Annotation</strong></h4>\n                <p>Please based on your observations add the corresponding data to the form below:</p>\n\n                <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" mdInput [formControl]=\"myControl\" [mdAutocomplete]=\"AClass\" [(ngModel)]=\"antibiotic.class\" placeholder=\"Antibiotic Class\">\n                </md-input-container>\n\n                <md-autocomplete #AClass=\"mdAutocomplete\">\n                    <md-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                        {{ option }}\n                    </md-option>\n                </md-autocomplete>\n\n                <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" [formControl]=\"groupControl\" [mdAutocomplete]=\"AGroup\" mdInput [(ngModel)]=\"antibiotic.group\" placeholder=\"Antibiotic Group\">\n                </md-input-container>\n\n                <md-autocomplete #AGroup=\"mdAutocomplete\">\n                    <md-option *ngFor=\"let option of groupFilteredOptions | async\" [value]=\"option\">\n                        {{ option }}\n                    </md-option>\n                </md-autocomplete>\n\n                <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" mdInput [(ngModel)]=\"antibiotic.mechanism\" placeholder=\"Antibiotic Mechanism (if any)\">\n                </md-input-container>\n\n                <br><br>\n\n                <div class=\"col-md-12 text-center\">\n                    <button (click)=\"validate(1)\" color=\"primary\" md-raised-button>Next</button>\n                    <button (click)=\"reportARG()\" class=\"\" color=\"red\" md-raised-button>Report ARG</button>\n                </div>\n                <!-- </div> -->\n\n            </div>\n\n\n\n            <div *ngIf=\"step2\">\n\n\n                <!-- <div class=\"col-md-12\"> -->\n                <h4 class=\"text-center\"><strong>Horizontal Gene Transfer</strong></h4>\n                <div class=\"col-md-12\">\n                    <p>Is there any evidence that suggests the queried gene to be horizontally transfered? </p>\n\n                    <div *ngFor=\"let ht of mge_options\">\n                        <md-checkbox value=\"{{ht}}\" (change)=\"mgeOptions(ht, $event)\">{{ ht }}</md-checkbox>\n                    </div>\n                    <p>From a scale from 1 to 5 how would you rate this evidence? </p>\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('mge',$event)\" [starType]=\"'svg'\" [rating]=\"1\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <hr>\n                </div>\n\n\n\n\n                <div class=\"col-md-12\">\n                    <h4 class=\"text-center\"><strong>Pathogenic Genomes</strong></h4>\n\n                    <p>Is there evidence that suggests the queried gene is present any pathogenic genomes? </p>\n\n                    <md-radio-group [(ngModel)]=\"antibiotic.pathGenome\">\n                        <md-radio-button value=\"1\">Yes</md-radio-button> <br>\n                        <md-radio-button value=\"2\">Not</md-radio-button> <br>\n                    </md-radio-group>\n\n                    <p>From a scale from 1 to 5 how would you rate this evidence? </p>\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('genome',$event)\" [starType]=\"'svg'\" [rating]=\"1\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <hr>\n\n                </div>\n\n\n\n                <div class=\"col-md-12 text-center\">\n                    <button (click)=\"validate(2)\" color=\"primary\" md-raised-button>Next</button>\n                </div>\n                <!-- </div> -->\n\n\n\n            </div>\n\n            <div *ngIf=\"step3\">\n\n                <!-- <div class=\"col-md-12\"> -->\n                <div class=\"col-md-12 text-center\">\n                    <!-- <h4 class=\"text-center\"><strong>ARG annotation</strong></h4> -->\n                    <dl class=\"dl\">\n\n                        <dt>ARG Class:</dt>\n                        <dd><span class=\"\"> {{ antibiotic.class }} </span></dd>\n\n                        <dt>ARG Group:</dt>\n                        <dd><span class=\"\"> {{ antibiotic.group }} </span></dd>\n\n                        <dt *ngIf=\"!antibiotic.mechanism==''\">ARG Mechanism:</dt>\n                        <dd *ngIf=\"!antibiotic.mechanism==''\"><span class=\"\"> {{ antibiotic.mechanism }} </span></dd>\n\n                    </dl>\n                    <hr>\n                </div>\n\n                <div class=\"col-md-12 col-md-offset-0 text-center\">\n                    <p>Please rate your level of expertise</p>\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('expertise',$event)\" [starType]=\"'svg'\" [rating]=\"1\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <hr>\n                </div>\n\n                <div class=\"col-md-12 col-md-offset-0 text-center\">\n                    <p>Please rate your confidence in your observations</p>\n                    <star-rating-comp (onRatingChange)=\"onRatingChange('confidence',$event)\" [starType]=\"'svg'\" [rating]=\"1\" [labelPosition]=\"'top'\"></star-rating-comp>\n                    <hr>\n                </div>\n\n                <md-input-container class=\"col-md-12\">\n                    <p>Please add any relevant comments</p>\n                    <textarea mdInput [(ngModel)]=\"antibiotic.comments\" rows=\"5\"></textarea>\n                </md-input-container>\n\n\n                <div class=\"col-md-12 text-center\">\n                    <button (click)=\"submitReview()\" class=\"\" color=\"green\" md-raised-button>Submit</button>\n                    <button (click)=\"validate(3)\" class=\"\" color=\"red\" md-raised-button>Cancel</button>\n                </div>\n\n\n                <!-- </div> -->\n            </div>\n\n\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of randomARG.mobile\" class=\"\">\n    <div *ngIf=\"item.status==true && item.identity.mean>50\" class=\"\">\n        <div class=\"box box-solid\">\n            <!-- <div class=\"col-md-10 col-md-offset-1\"> -->\n\n            <div class=\"box-header with-border \">\n                <i class=\"fa fa-tag\"></i>\n                <h3 class=\"box-title\" *ngIf=\"item.type=='proph'\">Prophages</h3>\n                <h3 class=\"box-title\" *ngIf=\"item.type=='plasmid'\">Plasmids</h3>\n                <h3 class=\"box-title\" *ngIf=\"item.type=='vir'\">Viruses</h3>\n\n            </div>\n\n            <!-- </div> -->\n\n            <!-- <div class=\"col-md-12\"> -->\n            <div class=\"box-body\">\n                <dl class=\"dl-horizontal\">\n                    <dt>Count:</dt>\n                    <dd> <span class=\"badge bg-blue\"> {{ item.count }} </span></dd>\n                    <dt>BitScore:</dt>\n                    <dd> <span class=\"badge bg-{{ item.bitscore.color }}\"> {{ item.bitscore.mean }} {{ '&plusmn;' }} {{item.bitscore.std}} </span></dd>\n                    <dt>Evalue (log):</dt>\n                    <dd> <span class=\"badge bg-{{ item.evalue.color }}\"> {{ item.evalue.mean.toPrecision(2)}} {{ '&plusmn;' }} {{item.evalue.std.toPrecision(2)}} </span></dd>\n                    <dt>Coverage:</dt>\n                    <dd> <span class=\"badge bg-{{ item.coverage.color }}\"> {{  (100*item.coverage.mean/randomARG.entry['length']).toFixed(0) }}% {{ '&plusmn;' }} {{(100*item.coverage.std/randomARG.entry['length']).toFixed(0)}} </span></dd>\n                    <dt>Identity:</dt>\n                    <dd> <span class=\"badge bg-{{ item.identity.color }}\"> {{ item.identity.mean }}%  {{ '&plusmn;' }} {{item.identity.std}} </span></dd>\n                    <dt>Description:</dt>\n                    <dd>{{ item.mge_description }}</dd>\n                    <dt>Gene Aclame ID:</dt>\n                    <dd>{{ item.mge_id }}</dd>\n                </dl>\n            </div>\n            <!-- </div> -->\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"randomARG.pathogen.status==true\" class=\"\">\n    <!-- <div class=\"col-md-12\"> -->\n    <div class=\"box box-solid\">\n\n\n        <div class=\"box-header with-border\">\n\n            <!-- <div class=\"col-md-10 col-md-offset-1\">\n                            <svg  width=\"50px\" height=\"50px\"  class=\"resistant\" />  \n                        </div> -->\n            <i class=\"fa fa-bug\"></i>\n            <h3 class=\"box-title\">Full Genomes</h3>\n\n        </div>\n\n\n        <div class=\"\">\n            <div class=\"box-body\">\n                The gene entry {{randomARG.entry.gene_id}} (<strong>{{ randomARG.entry.subtype }}</strong>) has been aligned to the <a href=\"https://www.patricbrc.org/\">PATRIC</a> database using strict cutoffs to ensure the existence of the gene (>90%\n                identity, >90% coverage).\n                <br><br><strong>{{ randomARG.pathogen.genomes_count }}</strong> genomes contain this particular gene ({{randomARG.entry.gene_id}}). From those,\n                <strong>{{ randomARG.pathogen.genomes_pathogen }}</strong> ( {{(100*randomARG.pathogen.genomes_pathogen/randomARG.pathogen.genomes_count).toFixed(1)}}% ) genomes are labeled as <u>pathogens</u>.\n            </div>\n        </div>\n    </div>\n\n    <!-- PIE CHARTS WITH THE DATA INFORMATION  -->\n    <div *ngIf=\"disease.ready\" class=\"fig-panel\">\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border\">\n                <!-- <i class=\"fa fa-bug\"></i> -->\n                <h3 class=\"box-title\">Genomes causing diseases</h3>\n            </div>\n            <div class=\"box-body\">\n                <p>This figure shows the distribution of the bacterial genomes that are reported to cause or be involved in any diseases and contain the gene <u>{{ randomARG.entry.gene_id }}</u>.</p>\n                <ngx-charts-pie-grid [scheme]=\"disease.colorScheme\" [results]=\"disease.data\" (select)=\"onSelect($event)\">\n                </ngx-charts-pie-grid>\n            </div>\n        </div>\n    </div>\n\n    <!-- PIE CHARTS WITH THE DATA INFORMATION  -->\n    <div *ngIf=\"AMR_phenotype.ready\" class=\" fig-panel\">\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border\">\n                <!-- <i class=\"fa fa-bug\"></i> -->\n                <h3 class=\"box-title\">Genomes with Antimicrobial Resistance phenotype</h3>\n            </div>\n            <div class=\"box-body\">\n                <p>This figure shows the existing antimicrobial resistance phenotype from the genomes.</p>\n                <ngx-charts-pie-grid [scheme]=\"AMR_phenotype.colorScheme\" [results]=\"AMR_phenotype.data\" (select)=\"onSelect($event)\">\n                </ngx-charts-pie-grid>\n            </div>\n        </div>\n    </div>\n\n    <!-- PIE CHARTS WITH THE DATA INFORMATION  -->\n    <div *ngIf=\"host.ready\" class=\"fig-panel\">\n        <div class=\"box box-solid\">\n            <div class=\"box-header with-border\">\n                <!-- <i class=\"fa fa-bug\"></i> -->\n                <h3 class=\"box-title\">Bacterial hosts</h3>\n            </div>\n            <div class=\"box-body\">\n                <p>This figure shows the distribution of the host organisms. The number of genomes corresponds to the genomes with it reported hosts.</p>\n                <ngx-charts-pie-grid [scheme]=\"host.colorScheme\" [results]=\"host.data\" (select)=\"onSelect($event)\">\n                </ngx-charts-pie-grid>\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n\n    <!-- </div> -->\n</div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"randomARG.metadata.status==false\" class=\"\">\n\n    <div class=\"alert alert-danger alert-dismissible\">\n        <h4><i class=\"icon fa fa-ban\"></i> {{ randomARG.entry.database }} Alert!</h4>\n        <strong>This Gene is outdated</strong>\n        <p>\n            The entry {{ randomARG.entry.gene_id }} is no longer active in the {{ randomARG.entry.database }} database.\n        </p>\n    </div>\n\n</div>"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"randomARG.metadata.status==false\" class=\"\">\n\n    <div class=\"alert alert-info alert-dismissible\">\n        <h4><i class=\"icon fa fa-ban\"></i> {{ randomARG.entry.database }} Alert!</h4>\n        <strong>This Gene could not be found in the {{ randomARG.entry.database }} database</strong>\n        <p>\n            The entry {{ randomARG.entry.gene_id }} is no longer active in the {{ randomARG.entry.database }} database. Please take a look at the other information to curate/reject the gene.\n        </p>\n    </div>\n\n</div>"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"randomARG.metadata.status==true\" class=\"\">\n    <div class=\"box box-solid\">\n        <div class=\"box-header\">\n            <h3 class=\"panel-title\"> <i class=\"fa fa-bug\"></i> <strong> Lineage (<a class=\"panel-title\" href=\"https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id={{ randomARG.metadata.organism.taxonomy }}\">NCBI Taxonomy </a>) </strong></h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <div class=\"dl-vertical\">\n                <span *ngFor=\"let item of randomARG.metadata.organism.lineage\">\n          {{ item }} <strong>&rsaquo;</strong>\t\n        </span>\n            </div>\n            <p *ngIf=\"randomARG.metadata.organism.names\"> <strong>Organism: </strong>{{ randomARG.metadata.organism.names[0].value }}</p>\n        </div>\n        <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n</div>\n\n\n\n<div *ngIf=\"randomARG.metadata.status==true\" class=\"\">\n    <div class=\"box box-solid \">\n        <div class=\"box-header with-border\">\n            <i class=\"fa fa-tag\"></i>\n\n            <h3 class=\"box-title\"><strong>Keywords</strong></h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <p *ngIf=\"randomARG.metadata.gene\"> <strong *ngIf=\"randomARG.metadata.gene[0].name\">Gene Name: </strong> <span class=\"badge bg-red\" *ngIf=\"randomARG.metadata.gene[0].name\"> {{ randomARG.metadata.gene[0].name.value }} </span></p>\n            <p *ngIf=\"randomARG.metadata.protein.recommendedName\" class=\"\" data-original-title=\"\"> <strong>Protein: </strong> <span class=\"badge bg-green\"> {{ randomARG.metadata.protein.recommendedName.fullName.value }} </span> </p>\n            <div *ngIf=\"randomARG.metadata.proteinExistence\" data-original-title=\"\"> <strong>Protein Existence: </strong> <span class=\"badge bg-orange\">  {{ randomARG.metadata.proteinExistence }} </span> </div>\n            <hr>\n\n            <span *ngFor=\"let item of randomARG.metadata.keywords\" class=\"badge bg-blue\" data-original-title=\"\"> {{ item.value }} </span>\n\n        </div>\n        <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n</div>\n\n\n<div *ngIf=\"randomARG.metadata.comments\" class=\"\">\n    <div class=\"box box-solid \">\n        <div class=\"box-header with-border\">\n            <i class=\"fa fa-object-group\"></i>\n\n            <h3 class=\"box-title\"><strong>Description</strong></h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <dl class=\"dl-horizontal\">\n                <div *ngFor=\"let item of randomARG.metadata.comments\">\n                    <dt *ngIf=\"item.text\"> {{ item.type }}:</dt>\n                    <dd *ngIf=\"item.text\"> {{ item.text[0].value }}</dd>\n                    <br>\n                </div>\n            </dl>\n\n        </div>\n        <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n</div>\n\n\n<div *ngIf=\"randomARG.metadata.dbReferences\" class=\"\">\n    <div class=\"box box-solid\">\n        <div class=\"box-header with-border\">\n            <i class=\"fa fa-object-group\"></i>\n\n            <h3 class=\"box-title\"><strong>Gene Ontology</strong></h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <dl class=\"dl-horizontal\">\n                <div *ngFor=\"let item of randomARG.metadata.dbReferences\">\n                    <dt *ngIf=\"item.type=='GO'\"> {{ item.id }}:</dt>\n                    <dd *ngIf=\"item.type=='GO'\"> {{ item.properties.term }} <span class=\"badge bg-lightblue\">{{ item.properties.source }} </span></dd>\n                    <br *ngIf=\"item.type=='GO'\">\n                </div>\n            </dl>\n\n        </div>\n        <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n</div>\n\n\n<div *ngIf=\"randomARG.metadata.references\" class=\"\">\n    <div class=\"box box-solid\">\n        <div class=\"box-header with-border\">\n            <i class=\"fa fa-object-group\"></i>\n\n            <h3 class=\"box-title\"><strong>References</strong></h3>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body\">\n            <dl class=\"dl-horizontal\">\n                <div *ngFor=\"let item of randomARG.metadata.references\">\n                    <strong> {{ item.citation.authors[0] }} {{ item.citation.authors[1] }} et al., </strong> {{ item.citation.title }} {{item.citation.publication.submissionDatabase}} ({{ item.citation.publicationDate }})\n\n                    <div *ngFor=\"let ref of item.citation.dbReferences\">\n                        <strong>{{ ref.type }}</strong>: {{ ref.id }}\n                        <div *ngIf=\"ref.abstract\">\n\n                            <span *ngFor=\"let kw of ref.abstract\">\n                <span *ngIf=\"kw.type=='paragraph'\">{{ kw.text }}</span> <strong class=\"\" *ngIf=\"kw.type=='keyword'\">{{ kw.text }}</strong>\n                            </span>\n\n                        </div>\n\n                    </div>\n\n                </div>\n            </dl>\n\n        </div>\n        <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n</div>\n\n\n<div *ngIf=\"randomARG.metadata.errorMessage\" class=\"\">\n\n    <div class=\"alert alert-danger alert-dismissible\">\n        <h4><i class=\"icon fa fa-ban\"></i> {{ randomARG.entry.database }} Alert!</h4>\n        <strong>There is a problem with this request!</strong>\n        <p>\n            {{ randomARG.metadata.errorMessage[0] }}\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<p>\n  database works!\n</p>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(20);
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



var ClassifyComponent = (function () {
    function ClassifyComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.loading = false;
        this.drawGenomes = false;
        this.searchIndex = 0;
        this.dataService.getRandomKnownARG()
            .subscribe(function (response) {
            _this.randomARG = _this.dataService.ARG;
            _this.render = true;
            // console.log(this.randomARG)
        });
    }
    ClassifyComponent.prototype.ngOnInit = function () {
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
        this.dataService.getRandomKnownARG()
            .subscribe(function (response) {
            _this.randomARG = _this.dataService.ARG;
            // console.log(this.randomARG)
            _this.loading = false;
        });
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
    return ClassifyComponent;
}());
ClassifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(676),
        styles: [__webpack_require__(586)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], ClassifyComponent);

var _a, _b;
//# sourceMappingURL=classify.component.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264);


/***/ })

},[794]);
//# sourceMappingURL=main.bundle.js.map