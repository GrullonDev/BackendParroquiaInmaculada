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
exports.UserResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var user_entity_1 = require("./entity/user.entity");
var user_service_1 = require("./user.service");
var auth_service_1 = require("../../auth/auth.service");
var create_user_input_1 = require("./dto/create-user.input");
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
var roles_decorator_1 = require("../../auth/roles.decorator");
var roles_guard_1 = require("../../auth/roles.guard");
var UserResolver = (function () {
    function UserResolver(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    UserResolver.prototype.hello = function () {
        return '¡Hola desde GraphQL!';
    };
    UserResolver.prototype.createUser = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.userService.create(input)];
            });
        });
    };
    UserResolver.prototype.login = function (correo, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.authService.validateUser(correo, password)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.UnauthorizedException('Credenciales inválidas');
                        }
                        return [4, this.authService.login(user)];
                    case 2:
                        token = _a.sent();
                        return [2, token.access_token];
                }
            });
        });
    };
    UserResolver.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.userService.findAll()];
            });
        });
    };
    __decorate([
        (0, graphql_1.Query)(function () { return String; }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], UserResolver.prototype, "hello", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return user_entity_1.User; }, { name: 'createUser' }),
        __param(0, (0, graphql_1.Args)('input')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "createUser", null);
    __decorate([
        (0, graphql_1.Mutation)(function () { return String; }, { name: 'login' }),
        __param(0, (0, graphql_1.Args)('correo')),
        __param(1, (0, graphql_1.Args)('password')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "login", null);
    __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard),
        (0, graphql_1.Query)(function () { return [user_entity_1.User]; }, { name: 'findAllUsers' }),
        (0, roles_decorator_1.Roles)(user_entity_1.UserRole.PARROCO),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "findAll", null);
    UserResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return user_entity_1.User; }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            auth_service_1.AuthService])
    ], UserResolver);
    return UserResolver;
}());
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map