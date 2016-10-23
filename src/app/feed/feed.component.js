System.register(['angular2/core', 'angular2/router', 'angular2/common', '../shared/services/data.service', '../dashboard_layout/dashboard_layout.component', '../auth_module/auth/check_auth', '../auth_module/auth/auth', './sensor1.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, data_service_1, dashboard_layout_component_1, check_auth_1, auth_1, sensor1_component_1;
    var FeedComponent;
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
            function (dashboard_layout_component_1_1) {
                dashboard_layout_component_1 = dashboard_layout_component_1_1;
            },
            function (check_auth_1_1) {
                check_auth_1 = check_auth_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            },
            function (sensor1_component_1_1) {
                sensor1_component_1 = sensor1_component_1_1;
            }],
        execute: function() {
            FeedComponent = (function () {
                function FeedComponent(_router, _auth) {
                    this._router = _router;
                    this._auth = _auth;
                }
                FeedComponent = __decorate([
                    core_1.Component({
                        selector: 'feed',
                        inputs: ['sensor1'],
                        providers: [data_service_1.DataService]
                    }),
                    core_1.View({
                        templateUrl: 'src/app/feed/feed.component.html',
                        directives: [dashboard_layout_component_1.DashboardLayoutComponent, common_1.NgIf, sensor1_component_1.Sensor1Component]
                    }),
                    router_1.CanActivate(function (next, previous) {
                        return check_auth_1.checkAuth(next, previous);
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, auth_1.Auth])
                ], FeedComponent);
                return FeedComponent;
            }());
            exports_1("FeedComponent", FeedComponent);
        }
    }
});
//# sourceMappingURL=feed.component.js.map