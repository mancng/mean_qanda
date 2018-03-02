webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/all-questions/all-questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 700px;\n    /* border: 1px solid black; */\n    padding: 40px;\n    background-color: #36322b;\n}\n\nh1{\n    color: #eca341\n}\n\ntable, th, td {\n    border: 1px solid #eca341;\n    border-collapse: collapse;\n    padding: 10px;\n    color: white;\n    font-size: 12pt;\n}\n\n#search_txt{\n    margin: 15px 0px;\n}\n\nspan, a, p{\n    color: white;\n}\n\np{\n    display: inline;\n    margin-left: 332px;\n}\n\n#search_txt{\n    width: 300px;\n    margin-left: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-questions/all-questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h1>Hi {{currentUser.name}}!</h1>\n  <a [routerLink]=\"['/new_question']\">Add a question</a><span> | </span>\n  <a href=\"javascript:void(0)\" (click)=\"logoutThruService()\">Logout</a><br>\n  <p>Search: </p>\n  <input id=\"search_txt\" type=\"text\" name=\"search\" (keyup)=\"search()\" [(ngModel)]=\"searchedString\">\n  <table>\n    <tr id=\"header\">\n      <th>Question</th>\n      <th>Answer</th>\n      <th>Action</th>\n    </tr>\n    <tr *ngFor=\"let x of searchedQuestions\">\n      <td>{{x.questionContent}}</td>\n      <td>{{x.answers.length}}</td>\n      <td><a [routerLink]=\"['/question/', x._id]\">Show</a>   <a [routerLink]=\"['/question/new_answer/', x._id]\">Answer</a></td>\n    </tr>\n  </table>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/all-questions/all-questions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AllQuestionsComponent = /** @class */ (function () {
    function AllQuestionsComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.questions = [];
        this.currentUser = { name: "" };
        this.errorMessages = [];
        this.searchedQuestions = [];
    }
    AllQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getCurrentUser()
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            if (responseData.errors) {
                _this._router.navigate(['']);
                console.log(_this.currentUser);
            }
            else {
                _this.currentUser = responseData;
                _this.getAllQuestionsFromServer();
                console.log(_this.currentUser);
            }
        });
    };
    AllQuestionsComponent.prototype.getAllQuestionsFromServer = function () {
        var _this = this;
        var observable = this._httpService.getAllQuestions();
        observable.subscribe(function (responseData) {
            _this.questions = responseData.questions;
            console.log(_this.questions);
            _this.searchedQuestions = _this.questions;
        });
    };
    AllQuestionsComponent.prototype.search = function () {
        var self = this;
        this.searchedQuestions = this.questions.filter(function (questionObj) {
            return questionObj.questionContent.toLowerCase().includes(self.searchedString.toLowerCase()) || questionObj.questionDesc.toLowerCase().includes(self.searchedString.toLowerCase());
        });
    };
    AllQuestionsComponent.prototype.logoutThruService = function () {
        var _this = this;
        console.log("Logout clicked!");
        this._httpService.logout()
            .subscribe(function (responseData) {
            _this.errorMessages = [];
            if (responseData.errors) {
                for (var key in responseData.errors) {
                    _this.errorMessages.push(responseData.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['']);
            }
        });
    };
    AllQuestionsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-questions',
            template: __webpack_require__("../../../../../src/app/all-questions/all-questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-questions/all-questions.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], AllQuestionsComponent);
    return AllQuestionsComponent;
}());
exports.AllQuestionsComponent = AllQuestionsComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var all_questions_component_1 = __webpack_require__("../../../../../src/app/all-questions/all-questions.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var create_question_component_1 = __webpack_require__("../../../../../src/app/create-question/create-question.component.ts");
var single_question_component_1 = __webpack_require__("../../../../../src/app/single-question/single-question.component.ts");
var create_answer_component_1 = __webpack_require__("../../../../../src/app/create-answer/create-answer.component.ts");
var routes = [
    { path: 'all', component: all_questions_component_1.AllQuestionsComponent },
    { path: '', component: user_component_1.UserComponent },
    { path: 'new_question', component: create_question_component_1.CreateQuestionComponent },
    { path: 'question/:id', component: single_question_component_1.SingleQuestionComponent },
    { path: 'question/new_answer/:id', component: create_answer_component_1.CreateAnswerComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\"> -->\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var create_answer_component_1 = __webpack_require__("../../../../../src/app/create-answer/create-answer.component.ts");
var create_question_component_1 = __webpack_require__("../../../../../src/app/create-question/create-question.component.ts");
var single_question_component_1 = __webpack_require__("../../../../../src/app/single-question/single-question.component.ts");
var all_questions_component_1 = __webpack_require__("../../../../../src/app/all-questions/all-questions.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                create_answer_component_1.CreateAnswerComponent,
                create_question_component_1.CreateQuestionComponent,
                single_question_component_1.SingleQuestionComponent,
                all_questions_component_1.AllQuestionsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/create-answer/create-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 700px;\n    border: 1px solid black;\n    padding: 40px;\n    margin-top: 30px;\n    background-color: #36322b;\n}\n\nh2{\n    color: #eca341;\n}\n\nspan, a{\n    color: white;\n}\n\nbutton{\n    background: #b0afac;\n    width: 100px;\n    font-size: 11pt;\n    border-radius: 5px;\n    margin-right: 10px;\n    color: #36322b;\n}\n\n#cancel_btn{\n    margin-left: 427px;\n}\n\n#yourAnswer{\n    vertical-align: top;\n    margin-right: 105px;\n    color: white;\n}\n\n#answerContent{\n    margin-bottom: 20px;\n}\n\n#description{\n    width: 176px;\n    display: inline-block;\n    vertical-align: top;\n    line-height: 2.5em;\n    margin-right: 20px;\n    color: white;\n}\n\n#answerDesc{\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n#ptag{\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-answer/create-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <a [routerLink]=\"['/all']\">Home</a> <span> | </span>\n    <a [routerLink]=\"['/question',questionId]\">Go Back to Question</a> <span> | </span>\n    <a href=\"javascript:void(0)\" (click)=\"logoutThruService()\">Logout</a><br>\n    <h2>{{questionContent}}</h2>\n    <form>\n        <span id=\"yourAnswer\">Your Answer:</span>\n        <textarea name=\"answerContent\" id=\"answerContent\n        \" cols=\"70\" rows=\"8\" [(ngModel)]=\"answerContent\"></textarea><br>\n        <p id=\"description\">Supporting details for your answer (optional):</p>\n        <textarea name=\"answerDesc\" id=\"answerDesc\" cols=\"70\" rows=\"8\" [(ngModel)]=\"answerDesc\"></textarea><br>\n        <button id=\"cancel_btn\" [routerLink]=\"['/all']\" >Cancel</button>\n        <button (click)=\"createAnswer()\">Submit</button>\n    </form>\n    <p id=\"ptag\" *ngFor=\"let error of errorMessages\">\n        {{error}}\n    </p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/create-answer/create-answer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var CreateAnswerComponent = /** @class */ (function () {
    function CreateAnswerComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.currentUser = { name: "" };
        this.questionToAnswer = { _id: "", questionContent: "", questionDesc: "", answers: [], writer: "" };
        this.errorMessages = [];
    }
    CreateAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getCurrentUser()
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            if (responseData.errors) {
                _this._router.navigate(['']);
                console.log(_this.currentUser);
            }
            else {
                _this.currentUser = responseData;
                console.log("i'm calling the service");
                _this._route.paramMap.subscribe(function (params) {
                    _this._httpService.getSingleQuestion(params.get('id'))
                        .subscribe(function (responseData) {
                        _this.questionToAnswer = responseData;
                        _this.questionContent = _this.questionToAnswer.questionContent;
                        _this.questionDesc = _this.questionToAnswer.questionDesc;
                        _this.questionId = _this.questionToAnswer._id;
                    });
                });
            }
        });
    };
    CreateAnswerComponent.prototype.createAnswer = function () {
        var _this = this;
        this._httpService.addAnswerByQuestionId(this.questionId, { "answers": [{
                    "answerContent": this.answerContent, "answerDesc": this.answerDesc, "writer": this.currentUser.name
                }] })
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            _this.errorMessages = [];
            if (responseData.error) {
                for (var key in responseData.error.errors) {
                    _this.errorMessages.push(responseData.error.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['/question/' + _this.questionId]);
            }
        });
    };
    CreateAnswerComponent.prototype.logoutThruService = function () {
        var _this = this;
        console.log("Logout clicked!");
        this._httpService.logout()
            .subscribe(function (responseData) {
            _this.errorMessages = [];
            if (responseData.errors) {
                for (var key in responseData.errors) {
                    _this.errorMessages.push(responseData.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['']);
            }
        });
    };
    CreateAnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-create-answer',
            template: __webpack_require__("../../../../../src/app/create-answer/create-answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-answer/create-answer.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_service_1.HttpService, router_1.Router])
    ], CreateAnswerComponent);
    return CreateAnswerComponent;
}());
exports.CreateAnswerComponent = CreateAnswerComponent;


/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 700px;\n    border: 1px solid black;\n    padding: 40px;\n    margin-top: 30px;\n    background-color: #36322b;\n}\n\nh1{\n    color: #eca341;\n}\n\nspan, a{\n    color: white;\n}\n\nbutton{\n    background: #b0afac;\n    width: 100px;\n    font-size: 11pt;\n    border-radius: 5px;\n    margin-right: 10px;\n    color: #36322b;\n}\n\n#cancel_btn{\n    margin-left: 444px;\n}\n\n#question{\n    vertical-align: top;\n    margin-right: 105px;\n}\n\n#questionContent{\n    margin-bottom: 20px;\n}\n\n#description{\n    vertical-align: top;\n    line-height: 5em;\n    margin-right: 20px;\n}\n\n#questionDesc{\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n#ptag{\n    color: red;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <a [routerLink]=\"['/all']\">Home</a> <span>|</span>\n  <a href=\"javascript:void(0)\" (click)=\"logoutThruService()\">Logout</a><br>\n  <h1>New Question</h1>\n  <form>\n      <span id=\"question\">Question:</span>\n      <textarea name=\"questionContent\" id=\"questionContent\n      \" cols=\"78\" rows=\"8\" [(ngModel)]=\"newQuestion.questionContent\"></textarea><br>\n      <span id=\"description\">Description (optional):</span>\n      <textarea name=\"questionDesc\" id=\"questionDesc\" cols=\"78\" rows=\"8\" [(ngModel)]=\"newQuestion.questionDesc\"></textarea><br>\n      <button id=\"cancel_btn\" [routerLink]=\"['/all']\" >Cancel</button>\n      <button (click)=\"createQuestion()\">Submit</button>\n  </form>\n  <p id=\"ptag\" *ngFor=\"let error of errorMessages\">\n    {{error}}\n  </p>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/create-question/create-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CreateQuestionComponent = /** @class */ (function () {
    function CreateQuestionComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newQuestion = { questionContent: "", questionDesc: "" };
        this.errorMessages = [];
        this.currentUser = { name: "" };
    }
    CreateQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getCurrentUser()
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            if (responseData.errors) {
                _this._router.navigate(['']);
                console.log(_this.currentUser);
            }
            else {
                _this.currentUser = responseData;
                console.log(_this.currentUser);
            }
        });
    };
    CreateQuestionComponent.prototype.createQuestion = function () {
        var _this = this;
        this._httpService.addQuestion(this.newQuestion)
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            _this.errorMessages = [];
            if (responseData.error) {
                for (var key in responseData.error.errors) {
                    _this.errorMessages.push(responseData.error.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['/all']);
            }
        });
    };
    CreateQuestionComponent.prototype.logoutThruService = function () {
        var _this = this;
        console.log("Logout clicked!");
        this._httpService.logout()
            .subscribe(function (responseData) {
            _this.errorMessages = [];
            if (responseData.errors) {
                for (var key in responseData.errors) {
                    _this.errorMessages.push(responseData.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['']);
            }
        });
    };
    CreateQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-create-question',
            template: __webpack_require__("../../../../../src/app/create-question/create-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-question/create-question.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], CreateQuestionComponent);
    return CreateQuestionComponent;
}());
exports.CreateQuestionComponent = CreateQuestionComponent;


/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.loginUser = function (userObj) {
        console.log("login user");
        return this._http.post('/api/users', userObj);
    };
    HttpService.prototype.getCurrentUser = function () {
        return this._http.get('/api/users/current');
    };
    HttpService.prototype.addQuestion = function (questionObj) {
        console.log("go create a question");
        return this._http.post('/api/questions', questionObj);
    };
    HttpService.prototype.getAllQuestions = function () {
        return this._http.get('/api/questions');
    };
    HttpService.prototype.getSingleQuestion = function (questionId) {
        console.log("Go get the Question!");
        return this._http.get("api/questions/" + questionId);
    };
    HttpService.prototype.addAnswerByQuestionId = function (id, newAnswer) {
        console.log("Am I being called?");
        return this._http.put("/api/write/" + id, newAnswer);
    };
    HttpService.prototype.incrementLike = function (questionId, answerIdObj) {
        console.log("I'm going to add the like");
        console.log(questionId);
        console.log(answerIdObj);
        return this._http.put("api/write/" + questionId + "/liked", answerIdObj);
    };
    HttpService.prototype.deleteQuestion = function (questionId) {
        console.log("I'm calling the server to delete");
        return this._http.delete("api/questions/" + questionId);
    };
    HttpService.prototype.logout = function () {
        console.log("I'm calling the server to logout");
        return this._http.get('/api/users/current/logout');
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/app/single-question/single-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 700px;\n    /* border: 1px solid black; */\n    padding: 40px;\n    background-color: #36322b;\n}\n\nh1{\n    color: #eca341;\n}\n\nh4{\n    color: #b0afac;\n}\n\n#data{\n    margin-bottom: 20px;\n}\n\nspan, a, p{\n    color: white;\n}\n\n#details_div{\n    display: inline-block;\n    width: 70%;\n    vertical-align: top;\n}\n\n#like_div{\n    display:inline-block;\n    width: 25%\n}\n\n#like_btn{\n    float: right;\n    background: #b0afac;\n    width: 100px;\n    font-size: 11pt;\n    border-radius: 5px;\n    margin-right: 10px;\n    color: #36322b;\n}\n\n.name{\n    font-style: bold;\n    color: #eca341;\n}\n\n.desc_txt{\n    font-size: 10pt;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-question/single-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"full\" fxLayout=\"column\">\n  <!-- <div> -->\n    <app-all-questions>Loading....</app-all-questions>\n  <!-- </div> -->\n  <div id=\"wrapper\" >\n    <a [routerLink]=\"['/all']\">Home</a> | \n    <a [routerLink]=\"['/question/new_answer/',questionId]\">Answer the question</a> | \n    <a href=\"javascript:void(0)\" (click)=\"deleteQuestion()\">Delete the question</a>\n    <h1>{{questionContent}}</h1>\n    <h4>{{questionDesc}}</h4>\n    <div id=\"data\" *ngFor=\"let y of showAnswers\">\n      <div id=\"details_div\">\n        <span class=\"name\">{{y.writer}}:</span><br>\n        <span>{{y.answerContent}}</span><br>\n        <span class=\"desc_txt\">{{y.answerDesc}}</span><br>\n    </div>\n      <div id=\"like_div\">\n        <span>{{y.likes}} likes</span>\n        <button id=\"like_btn\" (click)=\"liked(y._id)\">LIKE</button>\n      </div>\n    </div>\n  </div>\n  <p id=\"ptag\" *ngFor=\"let error of errorMessages\">\n    {{error}}\n  </p>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/single-question/single-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var SingleQuestionComponent = /** @class */ (function () {
    function SingleQuestionComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.questionToAnswer = { _id: "", questionContent: "", questionDesc: "", answers: [] };
        this.errorMessages = [];
        this.currentUser = { name: "" };
        this.showAnswers = [];
    }
    SingleQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getCurrentUser()
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            if (responseData.errors) {
                _this._router.navigate(['']);
                console.log(_this.currentUser);
            }
            else {
                _this.currentUser = responseData;
                console.log("i'm calling the service");
                _this.getData();
            }
        });
    };
    SingleQuestionComponent.prototype.getData = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._httpService.getSingleQuestion(params.get('id'))
                .subscribe(function (responseData) {
                console.log(responseData);
                _this.questionToAnswer = responseData;
                _this.questionContent = _this.questionToAnswer.questionContent;
                _this.questionDesc = _this.questionToAnswer.questionDesc;
                _this.showAnswers = _this.questionToAnswer.answers;
                _this.questionId = _this.questionToAnswer._id;
                console.log(_this.showAnswers);
                //To sort order by number of like at the top
                _this.questionToAnswer.answers = _this.questionToAnswer.answers.sort(function (a, b) {
                    return b.likes - a.likes;
                });
            });
        });
    };
    SingleQuestionComponent.prototype.liked = function (id) {
        var _this = this;
        var answerIdObj = { answerId: id };
        console.log("questionid: " + this.questionId);
        console.log(answerIdObj);
        this._httpService.incrementLike(this.questionId, answerIdObj)
            .subscribe(function (responseData) {
            _this.errorMessages = [];
            if (responseData.errors) {
                for (var key in responseData.errors) {
                    _this.errorMessages.push(responseData.errors[key].message);
                }
            }
            else {
                _this.getData();
            }
        });
    };
    SingleQuestionComponent.prototype.deleteQuestion = function () {
        var _this = this;
        console.log("I'm going to delete the question");
        console.log(this.questionId);
        this._httpService.deleteQuestion(this.questionId)
            .subscribe(function (responseData) {
            console.log('responseDta', responseData);
            _this.errorMessages = [];
            if (responseData.errors) {
                for (var key in responseData.errors) {
                    _this.errorMessages.push(responseData.errors[key].message);
                }
            }
            else {
                console.log("Are you here?");
                _this._router.navigate(['/all']);
            }
        });
    };
    SingleQuestionComponent.prototype.testing = function () {
        console.log("Testing clicked.");
    };
    SingleQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-single-question',
            template: __webpack_require__("../../../../../src/app/single-question/single-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/single-question/single-question.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_service_1.HttpService, router_1.Router])
    ], SingleQuestionComponent);
    return SingleQuestionComponent;
}());
exports.SingleQuestionComponent = SingleQuestionComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper{\n    width: 700px;\n    height: 400px;\n    border: 1px solid black;\n    padding: 40px;\n    background-color: #36322b;\n}\n\nh1{\n    color: #eca341;\n}\n\nspan{\n    color: white;\n}\n\n#text_field{\n    margin-top: 15px;\n    margin-bottom: 15px;\n    height: 19px;\n}\n\n#ptag{\n    color: red;\n}\n\nform[submit]{\n    color: white;\n}\n\n#submit{\n    background: #b0afac;\n    width: 100px;\n    font-size: 11pt;\n    border-radius: 5px;\n    margin-right: 10px;\n    color: #36322b;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" style=\"text-align:center\">\n  <h1>Q&A</h1>\n  <span>Please enter your name:</span>\n  <form (submit)=\"logInUser()\">\n    <input id=\"text_field\" type=\"text\" name=\"name\" [(ngModel)]=\"newUser.name\"><br>\n    <input id=\"submit\" type=\"submit\" value=\"Enter\">\n  </form>\n  <p id=\"ptag\" *ngFor=\"let error of errorMessages\">\n    {{error}}\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserComponent = /** @class */ (function () {
    function UserComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newUser = { name: "" };
        this.errorMessages = [];
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.logInUser = function () {
        var _this = this;
        console.log("i'm here");
        this._httpService.loginUser(this.newUser)
            .subscribe(function (responseData) {
            console.log('responseData', responseData);
            _this.errorMessages = [];
            if (responseData.errors) {
                for (var key in responseData.errors) {
                    _this.errorMessages.push(responseData.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['/all']);
            }
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map