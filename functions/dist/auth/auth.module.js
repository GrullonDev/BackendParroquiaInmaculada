"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var auth_service_1 = require("./auth.service");
var user_module_1 = require("../modules/user/user.module");
var jwt_strategy_1 = require("./jwt.strategy");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [
                (0, common_1.forwardRef)(function () { return user_module_1.UserModule; }),
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET || 's3cr3t',
                    signOptions: { expiresIn: '1d' },
                }),
            ],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
            exports: [auth_service_1.AuthService],
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map