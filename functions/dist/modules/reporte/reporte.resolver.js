"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporteResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var padrino_entity_1 = require("../padrino/entity/padrino.entity");
var sacerdote_entity_1 = require("../sacerdote/entity/sacerdote.entity");
var reporte_service_1 = require("./reporte.service");
var ReporteResolver = (function () {
    function ReporteResolver(reporteService) {
        this.reporteService = reporteService;
    }
    ReporteResolver.prototype.countTotalDocumentos = function () {
        return this.reporteService.countTotalDocumentos();
    };
    ReporteResolver.prototype.topSacerdotesFirmantes = function () {
        return this.reporteService.topSacerdotesFirmantes();
    };
    ReporteResolver.prototype.topPadrinosConMasClientes = function () {
        return this.reporteService.topPadrinosConMasClientes();
    };
    ReporteResolver.prototype.getRangoAniosDisponibles = function () {
        return this.reporteService.getRangoAniosDisponibles();
    };
    __decorate([
        (0, graphql_1.Query)(function () { return graphql_1.Int; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ReporteResolver.prototype, "countTotalDocumentos", null);
    __decorate([
        (0, graphql_1.Query)(function () { return [sacerdote_entity_1.Sacerdote]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ReporteResolver.prototype, "topSacerdotesFirmantes", null);
    __decorate([
        (0, graphql_1.Query)(function () { return [padrino_entity_1.Padrino]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ReporteResolver.prototype, "topPadrinosConMasClientes", null);
    __decorate([
        (0, graphql_1.Query)(function () { return [graphql_1.Int]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ReporteResolver.prototype, "getRangoAniosDisponibles", null);
    ReporteResolver = __decorate([
        (0, graphql_1.Resolver)(),
        __metadata("design:paramtypes", [reporte_service_1.ReporteService])
    ], ReporteResolver);
    return ReporteResolver;
}());
exports.ReporteResolver = ReporteResolver;
//# sourceMappingURL=reporte.resolver.js.map