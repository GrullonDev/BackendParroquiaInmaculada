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
exports.ClienteService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var cliente_entity_1 = require("./entity/cliente.entity");
var typeorm_2 = require("typeorm");
var padrino_entity_1 = require("../padrino/entity/padrino.entity");
var sacerdote_entity_1 = require("../sacerdote/entity/sacerdote.entity");
var ClienteService = (function () {
    function ClienteService(clienteRepo, padrinoRepo, sacerdoteRepo) {
        this.clienteRepo = clienteRepo;
        this.padrinoRepo = padrinoRepo;
        this.sacerdoteRepo = sacerdoteRepo;
    }
    ClienteService.prototype.create = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var nombresSeparados, _i, nombresSeparados_1, nombre, padrinoExistente, nuevoPadrino, padrinoPrincipal, sacerdoteExistente, sacerdote, nuevoCliente;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nombresSeparados = input.padrinos.split(/\s+y\s+/);
                        _i = 0, nombresSeparados_1 = nombresSeparados;
                        _a.label = 1;
                    case 1:
                        if (!(_i < nombresSeparados_1.length)) return [3, 7];
                        nombre = nombresSeparados_1[_i];
                        return [4, this.padrinoRepo.findOne({ where: { nombre: nombre } })];
                    case 2:
                        padrinoExistente = _a.sent();
                        if (!!padrinoExistente) return [3, 4];
                        nuevoPadrino = this.padrinoRepo.create({ nombre: nombre, cantidad: 1 });
                        return [4, this.padrinoRepo.save(nuevoPadrino)];
                    case 3:
                        _a.sent();
                        return [3, 6];
                    case 4:
                        padrinoExistente.cantidad += 1;
                        return [4, this.padrinoRepo.save(padrinoExistente)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3, 1];
                    case 7: return [4, this.padrinoRepo.findOne({ where: { nombre: nombresSeparados[0] } })];
                    case 8:
                        padrinoPrincipal = _a.sent();
                        return [4, this.sacerdoteRepo.findOne({
                                where: { nombreCompleto: input.sacerdote },
                            })];
                    case 9:
                        sacerdoteExistente = _a.sent();
                        if (!!sacerdoteExistente) return [3, 11];
                        sacerdote = this.sacerdoteRepo.create({
                            nombreCompleto: input.sacerdote,
                            cantidad: 1,
                        });
                        return [4, this.sacerdoteRepo.save(sacerdote)];
                    case 10:
                        _a.sent();
                        return [3, 13];
                    case 11:
                        sacerdoteExistente.cantidad += 1;
                        return [4, this.sacerdoteRepo.save(sacerdoteExistente)];
                    case 12:
                        sacerdote = _a.sent();
                        _a.label = 13;
                    case 13:
                        if (!padrinoPrincipal) {
                            throw new Error('Padrino no encontrado');
                        }
                        if (!sacerdote) {
                            throw new Error('Sacerdote no encontrado');
                        }
                        nuevoCliente = {
                            cui: input.cui,
                            nombreNino: input.nombreNino,
                            fechasPlaticas: input.fechasPlaticas,
                            parroquia: input.parroquia,
                            direccion: input.direccion,
                            firmaSacerdote: input.firmaSacerdote,
                            padrino: padrinoPrincipal,
                            sacerdote: sacerdote,
                        };
                        return [2, this.clienteRepo.save(this.clienteRepo.create(nuevoCliente))];
                }
            });
        });
    };
    ClienteService.prototype.findAll = function () {
        return this.clienteRepo.find();
    };
    ClienteService.prototype.findByCui = function (cui) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.clienteRepo.findOne({ where: { cui: cui } })];
            });
        });
    };
    ClienteService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
        __param(1, (0, typeorm_1.InjectRepository)(padrino_entity_1.Padrino)),
        __param(2, (0, typeorm_1.InjectRepository)(sacerdote_entity_1.Sacerdote)),
        __metadata("design:paramtypes", [typeorm_2.Repository,
            typeorm_2.Repository,
            typeorm_2.Repository])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map