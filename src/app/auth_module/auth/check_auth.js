System.register(['./app_injector', './auth', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_injector_1, auth_1, router_1;
    var checkAuth;
    return {
        setters:[
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("checkAuth", checkAuth = function (next, previous) {
                var injector = app_injector_1.appInjector(); // get the stored reference to the injector
                var auth = injector.get(auth_1.Auth);
                var router = injector.get(router_1.Router);
                var location = injector.get(router_1.Location);
                // return a boolean or a promise that resolves a boolean
                return new Promise(function (resolve, reject) {
                    if (auth.check()) {
                        // already login, redirect to default page
                        if (next.urlPath == 'login' || next.urlPath == 'signup') {
                            router.navigate(['/Home']); // r
                            // window.location.href = 'index.html';
                            resolve(false);
                        }
                        else {
                            resolve(true);
                        }
                    }
                    else {
                        // not login; show the login page
                        if (next.urlPath == 'login' || next.urlPath == 'signup') {
                            resolve(true);
                        }
                        else {
                            router.navigate(['/Login']); // r
                            // window.location.href = 'login.html';
                            resolve(false);
                        }
                    }
                });
            });
        }
    }
});
//# sourceMappingURL=check_auth.js.map