"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SacerdoteModule = void 0;
var common_1 = require("@nestjs/common");
var sacerdote_service_1 = require("./sacerdote.service");
var sacerdote_resolver_1 = require("./sacerdote.resolver");
var typeorm_1 = require("@nestjs/typeorm");
var sacerdote_entity_1 = require("./entity/sacerdote.entity");
var SacerdoteModule = (function () {
    function SacerdoteModule() {
    }
    SacerdoteModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([sacerdote_entity_1.Sacerdote])],
            providers: [sacerdote_service_1.SacerdoteService, sacerdote_resolver_1.SacerdoteResolver],
            exports: [sacerdote_service_1.SacerdoteService],
        })
    ], SacerdoteModule);
    return SacerdoteModule;
}());
exports.SacerdoteModule = SacerdoteModule;
//# sourceMappingURL=sacerdote.module.js.map