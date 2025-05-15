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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var documento_entity_1 = require("./entity/documento.entity");
var documento_service_1 = require("./documento.service");
var create_documento_input_1 = require("./dto/create-documento.input");
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
var roles_guard_1 = require("../../auth/roles.guard");
var roles_decorator_1 = require("../../auth/roles.decorator");
var user_entity_1 = require("../user/entity/user.entity");
var documento_summary_output_1 = require("./dto/documento-summary.output");
var documento_summary_by_mes_output_1 = require("./dto/documento-summary-by-mes.output");
var DocumentoResolver = (function () {
    function DocumentoResolver(documentoService) {
        this.documentoService = documentoService;
    }
    DocumentoResolver.prototype.createDocumento = function (input) {
        return this.documentoService.create(input);
    };
    DocumentoResolver.prototype.findAllDocumentos = function (tipo, desde, hasta) {
        return this.documentoService.findAll({ tipo: tipo, desde: desde, hasta: hasta });
    };
    DocumentoResolver.prototype.countDocumentosByTipo = function () {
        return this.documentoService.countDocumentosByTipo();
    };
    DocumentoResolver.prototype.countDocumentosPorMes = function () {
        return this.documentoService.countDocumentosPorMes();
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return documento_entity_1.Documento; }),
        (0, roles_decorator_1.Roles)(user_entity_1.UserRole.PARROCO),
        __param(0, (0, graphql_1.Args)('input')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_documento_input_1.CreateDocumentoInput]),
        __metadata("design:returntype", void 0)
    ], DocumentoResolver.prototype, "createDocumento", null);
    __decorate([
        (0, graphql_1.Query)(function () { return [documento_entity_1.Documento]; }),
        (0, roles_decorator_1.Roles)(user_entity_1.UserRole.PARROCO),
        __param(0, (0, graphql_1.Args)('tipo', { nullable: true })),
        __param(1, (0, graphql_1.Args)('desde', { nullable: true })),
        __param(2, (0, graphql_1.Args)('hasta', { nullable: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", void 0)
    ], DocumentoResolver.prototype, "findAllDocumentos", null);
    __decorate([
        (0, graphql_1.Query)(function () { return [documento_summary_output_1.DocumentosPorAnioOutput]; }),
        (0, roles_decorator_1.Roles)(user_entity_1.UserRole.PARROCO),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DocumentoResolver.prototype, "countDocumentosByTipo", null);
    __decorate([
        (0, graphql_1.Query)(function () { return [documento_summary_by_mes_output_1.DocumentosPorMesOutput]; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DocumentoResolver.prototype, "countDocumentosPorMes", null);
    DocumentoResolver = __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard),
        (0, graphql_1.Resolver)(function () { return documento_entity_1.Documento; }),
        __metadata("design:paramtypes", [documento_service_1.DocumentoService])
    ], DocumentoResolver);
    return DocumentoResolver;
}());
exports.DocumentoResolver = DocumentoResolver;
//# sourceMappingURL=documento.resolver.js.map