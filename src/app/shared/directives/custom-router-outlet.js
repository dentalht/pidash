System.register(['angular2/core', 'angular2/router', "../../config/config"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, config_1;
    var CustomRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CustomRouterOutlet = (function (_super) {
                __extends(CustomRouterOutlet, _super);
                function CustomRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr, _config) {
                    _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
                    this._config = _config;
                    this.parentRouter = _parentRouter;
                }
                CustomRouterOutlet.prototype.activate = function (instruction) {
                    var _this = this;
                    return this._config.load().then(function () { return _super.prototype.activate.call(_this, instruction); });
                };
                CustomRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'custom-router-outlet'
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, config_1.Config])
                ], CustomRouterOutlet);
                return CustomRouterOutlet;
            }(router_1.RouterOutlet));
            exports_1("CustomRouterOutlet", CustomRouterOutlet);
        }
    }
});
//# sourceMappingURL=custom-router-outlet.js.map