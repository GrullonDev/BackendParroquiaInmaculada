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
exports.Documento = exports.TipoDocumento = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var cliente_entity_1 = require("../../cliente/entity/cliente.entity");
var sacerdote_entity_1 = require("../../sacerdote/entity/sacerdote.entity");
var TipoDocumento;
(function (TipoDocumento) {
    TipoDocumento["BAUTIZO"] = "BAUTIZO";
    TipoDocumento["COMUNION"] = "COMUNION";
    TipoDocumento["CONFIRMACION"] = "CONFIRMACION";
    TipoDocumento["MATRIMONIO"] = "MATRIMONIO";
})(TipoDocumento || (exports.TipoDocumento = TipoDocumento = {}));
(0, graphql_1.registerEnumType)(TipoDocumento, {
    name: 'TipoDocumento',
    description: 'Tipos de documento eclesiástico',
});
var Documento = (function () {
    function Documento() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; }),
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Documento.prototype, "id", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return TipoDocumento; }),
        (0, typeorm_1.Column)({ type: 'enum', enum: TipoDocumento }),
        __metadata("design:type", String)
    ], Documento.prototype, "tipo", void 0);
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Documento.prototype, "fechaEmision", void 0);
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Documento.prototype, "observaciones", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return cliente_entity_1.Cliente; }),
        (0, typeorm_1.ManyToOne)(function () { return cliente_entity_1.Cliente; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'cliente_id' }),
        __metadata("design:type", cliente_entity_1.Cliente)
    ], Documento.prototype, "cliente", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return sacerdote_entity_1.Sacerdote; }),
        (0, typeorm_1.ManyToOne)(function () { return sacerdote_entity_1.Sacerdote; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'sacerdote_id' }),
        __metadata("design:type", sacerdote_entity_1.Sacerdote)
    ], Documento.prototype, "sacerdote", void 0);
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Documento.prototype, "creadoEn", void 0);
    Documento = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Documento);
    return Documento;
}());
exports.Documento = Documento;
//# sourceMappingURL=documento.entity.js.map