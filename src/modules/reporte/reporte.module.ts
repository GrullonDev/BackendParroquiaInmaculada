import { Module } from '@nestjs/common';
import { ReporteResolver } from './reporte.resolver';
import { ReporteService } from './reporte.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Documento } from '../documento/entity/documento.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';
import { Padrino } from '../padrino/entity/padrino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Documento, Sacerdote, Padrino])],
  providers: [ReporteService, ReporteResolver],
})

export class ReporteModule { }
