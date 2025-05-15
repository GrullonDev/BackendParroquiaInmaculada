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
exports.Cliente = void 0;
var graphql_1 = require("@nestjs/graphql");
var padrino_entity_1 = require("../../padrino/entity/padrino.entity");
var sacerdote_entity_1 = require("../../sacerdote/entity/sacerdote.entity");
var typeorm_1 = require("typeorm");
var Cliente = (function () {
    function Cliente() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; }),
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Cliente.prototype, "id", void 0);
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Cliente.prototype, "cui", void 0);
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Cliente.prototype, "nombreNino", void 0);
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cliente.prototype, "fechasPlaticas", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return padrino_entity_1.Padrino; }, { nullable: true }),
        (0, typeorm_1.ManyToOne)(function () { return padrino_entity_1.Padrino; }, function (padrino) { return padrino.clientes; }, { eager: true }),
        __metadata("design:type", padrino_entity_1.Padrino)
    ], Cliente.prototype, "padrino", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return sacerdote_entity_1.Sacerdote; }, { nullable: true }),
        (0, typeorm_1.ManyToOne)(function () { return sacerdote_entity_1.Sacerdote; }, function (sacerdote) { return sacerdote.clientes; }, { eager: true }),
        (0, typeorm_1.JoinColumn)({ name: 'sacerdote_id' }),
        __metadata("design:type", sacerdote_entity_1.Sacerdote)
    ], Cliente.prototype, "sacerdote", void 0);
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cliente.prototype, "parroquia", void 0);
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cliente.prototype, "direccion", void 0);
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Cliente.prototype, "firmaSacerdote", void 0);
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Cliente.prototype, "createdAt", void 0);
    Cliente = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Cliente);
    return Cliente;
}());
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.entity.js.map