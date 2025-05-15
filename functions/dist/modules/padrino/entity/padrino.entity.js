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
exports.Padrino = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var cliente_entity_1 = require("../../cliente/entity/cliente.entity");
var Padrino = (function () {
    function Padrino() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; }),
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Padrino.prototype, "id", void 0);
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Padrino.prototype, "nombre", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        (0, typeorm_1.Column)({ default: 0 }),
        __metadata("design:type", Number)
    ], Padrino.prototype, "cantidad", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cliente_entity_1.Cliente; }, function (cliente) { return cliente.padrino; }),
        __metadata("design:type", Array)
    ], Padrino.prototype, "clientes", void 0);
    Padrino = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Padrino);
    return Padrino;
}());
exports.Padrino = Padrino;
//# sourceMappingURL=padrino.entity.js.map