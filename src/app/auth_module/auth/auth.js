System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Auth;
    return {
        setters:[],
        execute: function() {
            Auth = (function () {
                function Auth() {
                    this.loggedIn = false;
                    this.emptyLoginData();
                }
                Auth.prototype.login = function (loginData) {
                    this.loggedIn = true;
                    this.loginData = loginData;
                    // set session
                    localStorage.setItem('a2authLoginData', JSON.stringify(loginData));
                    console.log('login()');
                };
                Auth.prototype.loginFromSession = function () {
                    // load from session
                    if (localStorage.getItem("a2authLoginData") !== null && this.loggedIn === false) {
                        console.log('loginFromSession()');
                        var a2authLoginData = JSON.parse(localStorage.getItem("a2authLoginData"));
                        console.log(a2authLoginData);
                        this.login(a2authLoginData);
                    }
                };
                Auth.prototype.logout = function () {
                    this.loggedIn = false;
                    this.emptyLoginData();
                    localStorage.removeItem('a2authLoginData');
                };
                Auth.prototype.check = function () {
                    if (localStorage.getItem("a2authLoginData") === null) {
                        console.log('Auth.check: Login false');
                        return false;
                    }
                    var a2authLoginData = JSON.parse(localStorage.getItem("a2authLoginData"));
                    // session exits therefore, make at it login
                    if (a2authLoginData.token) {
                        console.log('Auth.check: Login true');
                        this.loginFromSession();
                        return true;
                    }
                };
                Auth.prototype.emptyLoginData = function () {
                    this.loginData = {};
                };
                return Auth;
            }());
            exports_1("Auth", Auth);
        }
    }
});
//# sourceMappingURL=auth.js.map