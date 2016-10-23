System.register(['angular2/core', 'angular2/router', './shared/directives/custom-router-outlet', './auth_module/login/login.component', './auth_module/signup/signup.component', './home/home.component', './feed/feed.component'], function(exports_1, context_1) {
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
    var core_1, router_1, custom_router_outlet_1, login_component_1, signup_component_1, home_component_1, feed_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (custom_router_outlet_1_1) {
                custom_router_outlet_1 = custom_router_outlet_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (feed_component_1_1) {
                feed_component_1 = feed_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-container',
                        template: '<custom-router-outlet></custom-router-outlet>',
                        directives: [custom_router_outlet_1.CustomRouterOutlet],
                    }),
                    router_1.RouteConfig([
                        { path: '/home', as: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/feed', as: 'Feed', component: feed_component_1.FeedComponent },
                        { path: '/login', as: 'Login', component: login_component_1.LoginComponent },
                        { path: '/signup', as: 'Signup', component: signup_component_1.SignupComponent },
                        { path: '/**', redirectTo: ['Home'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map