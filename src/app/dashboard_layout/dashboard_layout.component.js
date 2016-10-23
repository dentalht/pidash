System.register(['angular2/core', 'angular2/router', 'angular2/common', '../shared/services/data.service', '../auth_module/auth/auth'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, data_service_1, auth_1;
    var DashboardLayoutComponent;
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
            }],
        execute: function() {
            DashboardLayoutComponent = (function () {
                function DashboardLayoutComponent(_router, _auth) {
                    this._router = _router;
                    this._auth = _auth;
                    this.loginData = this._auth.loginData;
                    this.loggedIn = this._auth.loggedIn;
                }
                DashboardLayoutComponent.prototype.logout = function () {
                    this._auth.logout();
                    this._router.navigate(['/Login']); // r
                };
                DashboardLayoutComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-layout',
                        inputs: ['pageTitle', 'pageSubtitle'],
                        providers: [data_service_1.DataService]
                    }),
                    core_1.View({
                        templateUrl: 'src/app/dashboard_layout/dashboard_layout.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_1.Auth])
                ], DashboardLayoutComponent);
                return DashboardLayoutComponent;
            }());
            exports_1("DashboardLayoutComponent", DashboardLayoutComponent);
        }
    }
});
//# sourceMappingURL=dashboard_layout.component.js.map