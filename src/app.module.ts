// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PadrinoModule } from './modules/padrino/padrino.module';
import { SacerdoteModule } from './modules/sacerdote/sacerdote.module';
import { DocumentoModule } from './modules/documento/documento.module';
import { ReporteModule } from './modules/reporte/reporte.module';
import typeormConfig from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot(typeormConfig),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true, // o usa process.env.NODE_ENV !== 'production'
      introspection: true,
      path: '/graphql', // 👈 Esto es obligatorio en Firebase
    }),

    UserModule,
    AuthModule,
    ClienteModule,
    PadrinoModule,
    SacerdoteModule,
    DocumentoModule,
    ReporteModule,
  ],
})

export class AppModule { }