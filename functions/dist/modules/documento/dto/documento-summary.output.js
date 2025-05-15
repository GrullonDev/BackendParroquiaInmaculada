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
exports.DocumentosPorAnioOutput = void 0;
var graphql_1 = require("@nestjs/graphql");
var DocumentosPorAnioOutput = (function () {
    function DocumentosPorAnioOutput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], DocumentosPorAnioOutput.prototype, "anio", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], DocumentosPorAnioOutput.prototype, "bautizos", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], DocumentosPorAnioOutput.prototype, "comuniones", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], DocumentosPorAnioOutput.prototype, "confirmaciones", void 0);
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; }),
        __metadata("design:type", Number)
    ], DocumentosPorAnioOutput.prototype, "matrimonios", void 0);
    DocumentosPorAnioOutput = __decorate([
        (0, graphql_1.ObjectType)()
    ], DocumentosPorAnioOutput);
    return DocumentosPorAnioOutput;
}());
exports.DocumentosPorAnioOutput = DocumentosPorAnioOutput;
//# sourceMappingURL=documento-summary.output.js.map