System.register(['angular2/core', 'angular2/router', 'angular2/common', '../../shared/services/data.service', '../auth/auth', '../auth/check_auth'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, data_service_1, auth_1, check_auth_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            },
            function (check_auth_1_1) {
                check_auth_1 = check_auth_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _dataService, _auth, _formBuilder) {
                    this._router = _router;
                    this._dataService = _dataService;
                    this._auth = _auth;
                    this._formBuilder = _formBuilder;
                    this.username = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]));
                    this.password = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]));
                    this.form = _formBuilder.group({
                        username: this.username,
                        password: this.password,
                    });
                }
                LoginComponent.prototype.login = function (event) {
                    var _this = this;
                    // This will be called when the user clicks on the Login button
                    event.preventDefault();
                    this._dataService.loginUser(this.form.value)
                        .subscribe(function (response) {
                        _this._auth.login(response);
                        // and then we redirect the user to the home
                        _this._router.navigate(['\Home']);
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        providers: [data_service_1.DataService, auth_1.Auth],
                        directives: [router_1.RouterLink],
                        templateUrl: 'src/app/auth_module/login/login.component.html',
                        styles: ["\n      body {\n          background: #d2d6de;\n      }\n  "],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    router_1.CanActivate(function (next, previous) {
                        return check_auth_1.checkAuth(next, previous);
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService, auth_1.Auth, common_1.FormBuilder])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map