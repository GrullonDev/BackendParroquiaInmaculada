import { Injectable } from '@nestjs/common';
import { Padrino } from '../padrino/entity/padrino.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';
import { DataSource, Repository } from 'typeorm';
import { Documento } from '../documento/entity/documento.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReporteService {
  constructor(
    @InjectRepository(Documento) private documentoRepo: Repository<Documento>,
    @InjectRepository(Sacerdote) private sacerdoteRepo: Repository<Sacerdote>,
    @InjectRepository(Padrino) private padrinoRepo: Repository<Padrino>,
    private dataSource: DataSource,
  ) {}

  async countTotalDocumentos(): Promise<number> {
    return this.documentoRepo.count();
  }

  async topSacerdotesFirmantes(): Promise<Sacerdote[]> {
    return this.sacerdoteRepo.find({ order: { cantidad: 'DESC' }, take: 5 });
  }

  async topPadrinosConMasClientes(): Promise<Padrino[]> {
    return this.padrinoRepo.find({ order: { cantidad: 'DESC' }, take: 5 });
  }

  async getRangoAniosDisponibles(): Promise<number[]> {
    const raw = await this.dataSource.query(`
      SELECT DISTINCT EXTRACT(YEAR FROM "fechaEmision"::DATE) AS anio
      FROM documento
      ORDER BY anio ASC;
    `);
    return raw.map((r: any) => parseInt(r.anio));
  }
}
