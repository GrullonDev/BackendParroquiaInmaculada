import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteResolver } from './cliente.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entity/cliente.entity';
import { Padrino } from '../padrino/entity/padrino.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente, Padrino, Sacerdote]), // 👈 IMPORTANTE
  ],
  providers: [ClienteService, ClienteResolver],
})
export class ClienteModule {}
