// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Schema generado automáticamente
      sortSchema: true,
      playground: process.env.NODE_ENV !== 'production', // Playground solo en desarrollo
      introspection: true,
    }),
    UserModule,
    AuthModule,
    // Aquí irán tus módulos como AuthModule, UsersModule, etc.
  ],
})

export class AppModule { }