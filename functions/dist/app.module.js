"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var apollo_1 = require("@nestjs/apollo");
var path_1 = require("path");
var user_module_1 = require("./modules/user/user.module");
var auth_module_1 = require("./auth/auth.module");
var typeorm_1 = require("@nestjs/typeorm");
var config_1 = require("@nestjs/config");
var cliente_module_1 = require("./modules/cliente/cliente.module");
var padrino_module_1 = require("./modules/padrino/padrino.module");
var sacerdote_module_1 = require("./modules/sacerdote/sacerdote.module");
var documento_module_1 = require("./modules/documento/documento.module");
var reporte_module_1 = require("./modules/reporte/reporte.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: process.env.DB_HOST,
                    port: +process.env.DB_PORT,
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    autoLoadEntities: true,
                    synchronize: true,
                }),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                    sortSchema: true,
                    playground: true,
                    introspection: true,
                    path: '/graphql',
                }),
                user_module_1.UserModule,
                auth_module_1.AuthModule,
                cliente_module_1.ClienteModule,
                padrino_module_1.PadrinoModule,
                sacerdote_module_1.SacerdoteModule,
                documento_module_1.DocumentoModule,
                reporte_module_1.ReporteModule,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map