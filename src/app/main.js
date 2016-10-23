System.register(['angular2/platform/browser', 'angular2/core', "angular2/common", 'angular2/router', 'angular2/http', './app.component', './auth_module/auth/auth', './config/config', './auth_module/auth/app_injector'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, common_1, router_1, http_1, app_component_1, auth_1, config_1, app_injector_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                auth_1.Auth,
                config_1.Config,
                router_1.ROUTER_PROVIDERS,
                common_1.FORM_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
            ]).then(function (appRef) {
                app_injector_1.appInjector(appRef.injector);
            }, function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map