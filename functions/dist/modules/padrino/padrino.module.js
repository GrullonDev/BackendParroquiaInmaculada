"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PadrinoModule = void 0;
var common_1 = require("@nestjs/common");
var padrino_service_1 = require("./padrino.service");
var padrino_resolver_1 = require("./padrino.resolver");
var PadrinoModule = (function () {
    function PadrinoModule() {
    }
    PadrinoModule = __decorate([
        (0, common_1.Module)({
            providers: [padrino_service_1.PadrinoService, padrino_resolver_1.PadrinoResolver]
        })
    ], PadrinoModule);
    return PadrinoModule;
}());
exports.PadrinoModule = PadrinoModule;
//# sourceMappingURL=padrino.module.js.map