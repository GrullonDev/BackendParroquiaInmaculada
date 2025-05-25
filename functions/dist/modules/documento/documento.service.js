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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var documento_entity_1 = require("./entity/documento.entity");
var cliente_entity_1 = require("../cliente/entity/cliente.entity");
var sacerdote_entity_1 = require("../sacerdote/entity/sacerdote.entity");
var DocumentoService = (function () {
    function DocumentoService(documentoRepo, clienteRepo, sacerdoteRepo, entityManager) {
        this.documentoRepo = documentoRepo;
        this.clienteRepo = clienteRepo;
        this.sacerdoteRepo = sacerdoteRepo;
        this.entityManager = entityManager;
    }
    DocumentoService.prototype.create = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var cliente, sacerdote, documento;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.clienteRepo.findOneBy({ id: input.clienteId })];
                    case 1:
                        cliente = _a.sent();
                        if (!cliente)
                            throw new Error('Cliente no encontrado');
                        return [4, this.sacerdoteRepo.findOneBy({ nombreCompleto: input.sacerdoteNombre })];
                    case 2:
                        sacerdote = _a.sent();
                        if (!sacerdote) {
                            sacerdote = this.sacerdoteRepo.create({ nombreCompleto: input.sacerdoteNombre, cantidad: 1 });
                        }
                        else {
                            sacerdote.cantidad += 1;
                        }
                        return [4, this.sacerdoteRepo.save(sacerdote)];
                    case 3:
                        _a.sent();
                        documento = this.documentoRepo.create({
                            tipo: input.tipo,
                            fechaEmision: input.fechaEmision,
                            observaciones: input.observaciones,
                            cliente: cliente,
                            sacerdote: sacerdote,
                        });
                        return [2, this.documentoRepo.save(documento)];
                }
            });
        });
    };
    DocumentoService.prototype.findAll = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var where;
            return __generator(this, function (_a) {
                where = {};
                if (filter.tipo) {
                    where.tipo = filter.tipo;
                }
                if (filter.desde && filter.hasta) {
                    where.fechaEmision = (0, typeorm_2.Between)(filter.desde, filter.hasta);
                }
                return [2, this.documentoRepo.find({
                        where: where,
                        order: { fechaEmision: 'DESC' },
                    })];
            });
        });
    };
    DocumentoService.prototype.countDocumentosByTipo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rawData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.entityManager.query("\n    SELECT \n      EXTRACT(YEAR FROM \"fechaEmision\"::DATE) AS anio,\n      SUM(CASE WHEN tipo = 'BAUTIZO' THEN 1 ELSE 0 END) AS bautizos,\n      SUM(CASE WHEN tipo = 'COMUNION' THEN 1 ELSE 0 END) AS comuniones,\n      SUM(CASE WHEN tipo = 'CONFIRMACION' THEN 1 ELSE 0 END) AS confirmaciones,\n      SUM(CASE WHEN tipo = 'MATRIMONIO' THEN 1 ELSE 0 END) AS matrimonios\n    FROM documento\n    GROUP BY anio\n    ORDER BY anio ASC;\n  ")];
                    case 1:
                        rawData = _a.sent();
                        return [2, rawData.map(function (row) { return ({
                                anio: parseInt(row.anio),
                                bautizos: parseInt(row.bautizos),
                                comuniones: parseInt(row.comuniones),
                                confirmaciones: parseInt(row.confirmaciones),
                                matrimonios: parseInt(row.matrimonios),
                            }); })];
                }
            });
        });
    };
    DocumentoService.prototype.countDocumentosPorMes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rawData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.entityManager.query("\n    SELECT \n      EXTRACT(YEAR FROM \"fechaEmision\"::DATE) AS anio,\n      EXTRACT(MONTH FROM \"fechaEmision\"::DATE) AS mes,\n      SUM(CASE WHEN tipo = 'BAUTIZO' THEN 1 ELSE 0 END) AS bautizos,\n      SUM(CASE WHEN tipo = 'COMUNION' THEN 1 ELSE 0 END) AS comuniones,\n      SUM(CASE WHEN tipo = 'CONFIRMACION' THEN 1 ELSE 0 END) AS confirmaciones,\n      SUM(CASE WHEN tipo = 'MATRIMONIO' THEN 1 ELSE 0 END) AS matrimonios\n    FROM documento\n    GROUP BY anio, mes\n    ORDER BY anio ASC, mes ASC;\n  ")];
                    case 1:
                        rawData = _a.sent();
                        return [2, rawData.map(function (row) { return ({
                                anio: parseInt(row.anio),
                                mes: parseInt(row.mes),
                                bautizos: parseInt(row.bautizos),
                                comuniones: parseInt(row.comuniones),
                                confirmaciones: parseInt(row.confirmaciones),
                                matrimonios: parseInt(row.matrimonios),
                            }); })];
                }
            });
        });
    };
    DocumentoService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(documento_entity_1.Documento)),
        __param(1, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
        __param(2, (0, typeorm_1.InjectRepository)(sacerdote_entity_1.Sacerdote)),
        __metadata("design:paramtypes", [typeorm_2.Repository,
            typeorm_2.Repository,
            typeorm_2.Repository,
            typeorm_2.EntityManager])
    ], DocumentoService);
    return DocumentoService;
}());
exports.DocumentoService = DocumentoService;
//# sourceMappingURL=documento.service.js.map