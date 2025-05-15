"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteModule = void 0;
var common_1 = require("@nestjs/common");
var reporte_resolver_1 = require("./reporte.resolver");
var reporte_service_1 = require("./reporte.service");
var typeorm_1 = require("@nestjs/typeorm");
var documento_entity_1 = require("../documento/entity/documento.entity");
var sacerdote_entity_1 = require("../sacerdote/entity/sacerdote.entity");
var padrino_entity_1 = require("../padrino/entity/padrino.entity");
var ReporteModule = (function () {
    function ReporteModule() {
    }
    ReporteModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([documento_entity_1.Documento, sacerdote_entity_1.Sacerdote, padrino_entity_1.Padrino])],
            providers: [reporte_service_1.ReporteService, reporte_resolver_1.ReporteResolver],
        })
    ], ReporteModule);
    return ReporteModule;
}());
exports.ReporteModule = ReporteModule;
//# sourceMappingURL=reporte.module.js.map