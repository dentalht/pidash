System.register(['angular2/core', 'rxjs/Observable', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1;
    var Config;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Config = (function () {
                function Config(http) {
                    this.http = http;
                }
                Config.prototype.load = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get('src/app/config/env.json')
                            .map(function (res) { return res.json(); })
                            .subscribe(function (env_data) {
                            _this._env = env_data;
                            _this.http.get('src/app/config/' + env_data.env + '.json')
                                .map(function (res) { return res.json(); })
                                .catch(function (error) {
                                console.error(error);
                                return Observable_1.Observable.throw(error.json().error || 'Server error');
                            })
                                .subscribe(function (data) {
                                _this._config = data;
                                resolve(true);
                            });
                        });
                    });
                };
                Config.prototype.getEnv = function (key) {
                    return this._env[key];
                };
                Config.prototype.get = function (key) {
                    return this._config[key];
                };
                Config.prototype.setCustom = function (key, val) {
                    this._configCustom[key] = val;
                };
                Config.prototype.getCustom = function (key) {
                    return this._configCustom[key];
                };
                Config = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Config);
                return Config;
            }());
            exports_1("Config", Config);
            ;
        }
    }
});
//# sourceMappingURL=config.js.map