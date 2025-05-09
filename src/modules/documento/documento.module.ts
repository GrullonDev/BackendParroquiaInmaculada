import { Module } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { DocumentoResolver } from './documento.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Documento } from './entity/documento.entity';
import { Cliente } from '../cliente/entity/cliente.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Documento, Cliente, Sacerdote])],
  providers: [DocumentoService, DocumentoResolver],
})

export class DocumentoModule { }
