import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Cliente } from './src/modules/cliente/entity/cliente.entity';
import { Padrino } from './src/modules/padrino/entity/padrino.entity';
import { Sacerdote } from './src/modules/sacerdote/entity/sacerdote.entity';
import { Documento } from 'src/modules/documento/entity/documento.entity';
// agrega tus otras entidades

dotenv.config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
    synchronize: false,
    entities: [Cliente, Padrino, Sacerdote, Documento],
    migrations: ['src/database/migrations/*.ts'],
});