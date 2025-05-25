"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});
var config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=typeorm.config.js.map