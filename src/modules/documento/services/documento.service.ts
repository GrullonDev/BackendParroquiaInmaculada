import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, EntityManager, getManager, Repository } from 'typeorm';
import { Documento, TipoDocumento } from '../entity/documento.entity';
import { CreateDocumentoInput } from '../dto/create-documento.input';
import { Cliente } from '../../cliente/entity/cliente.entity';
import { Sacerdote } from '../../sacerdote/entity/sacerdote.entity';
import { DocumentosPorAnioOutput } from '../dto/documento-summary.output';
import { DocumentosPorMesOutput } from '../dto/documento-summary-by-mes.output';

interface DocumentoFilter {
  tipo?: TipoDocumento;
  /*   desde?: string;
    hasta?: string; */
}

@Injectable()
export class DocumentoService {
  constructor(
    @InjectRepository(Documento)
    private readonly documentoRepo: Repository<Documento>,
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
    @InjectRepository(Sacerdote)
    private readonly sacerdoteRepo: Repository<Sacerdote>,
    private readonly entityManager: EntityManager, // 👈 inyección directa
  ) { }

  async create(input: CreateDocumentoInput): Promise<Documento> {
    // Obtener cliente
    const cliente = await this.clienteRepo.findOneBy({ id: input.clienteId });
    if (!cliente) throw new Error('Cliente no encontrado');

    // Obtener sacerdote
    let sacerdote = await this.sacerdoteRepo.findOneBy({
      nombreCompleto: input.sacerdoteNombre,
    });
    if (!sacerdote) {
      sacerdote = this.sacerdoteRepo.create({
        nombreCompleto: input.sacerdoteNombre,
        cantidad: 1,
      });
    } else {
      sacerdote.cantidad += 1;
    }
    await this.sacerdoteRepo.save(sacerdote);

    const documento = this.documentoRepo.create({
      tipo: input.tipo,
      fechaEmision: input.fechaEmision,
      observaciones: input.observaciones,
      cliente,
      sacerdote,
    });

    return this.documentoRepo.save(documento);
  }

  async findAll(filter: DocumentoFilter): Promise<Documento[]> {
    const where: any = {};

    if (filter.tipo) {
      where.tipo = filter.tipo;
    }

    return this.documentoRepo.find({
      where,
      order: { tipo: 'ASC' },
    });
  }

  async countDocumentByType(): Promise<any> {
    const result = await this.entityManager.query(
      `
        select
          SUM(case when tipo = 'BAUTIZO' then 1 else 0 end) as bautizos,
          SUM(case when tipo = 'COMUNION' then 1 else 0 end) as comuniones,
          SUM(case when tipo = 'CONFIRMACION' then 1 else 0 end) as confirmaciones,
          SUM(case when tipo = 'MATRIMONIO' then 1 else 0 end) as matrimonios
        from
          documento
      `,
    );

    return result[0];
  }

  async countDocumentByYear(): Promise<DocumentosPorAnioOutput[]> {
    const rawData = await this.entityManager.query(`
    SELECT 
      EXTRACT(YEAR FROM "fechaEmision"::DATE) AS anio,
      SUM(CASE WHEN tipo = 'BAUTIZO' THEN 1 ELSE 0 END) AS bautizos,
      SUM(CASE WHEN tipo = 'COMUNION' THEN 1 ELSE 0 END) AS comuniones,
      SUM(CASE WHEN tipo = 'CONFIRMACION' THEN 1 ELSE 0 END) AS confirmaciones,
      SUM(CASE WHEN tipo = 'MATRIMONIO' THEN 1 ELSE 0 END) AS matrimonios
    FROM documento
    GROUP BY anio
    ORDER BY anio ASC;
  `);

    return rawData.map((row: any) => ({
      anio: parseInt(row.anio),
      bautizos: parseInt(row.bautizos),
      comuniones: parseInt(row.comuniones),
      confirmaciones: parseInt(row.confirmaciones),
      matrimonios: parseInt(row.matrimonios),
    }));
  }

  async countDocumentosPorMes(): Promise<DocumentosPorMesOutput[]> {
    const rawData = await this.entityManager.query(`
    SELECT 
      EXTRACT(YEAR FROM "fechaEmision"::DATE) AS anio,
      EXTRACT(MONTH FROM "fechaEmision"::DATE) AS mes,
      SUM(CASE WHEN tipo = 'BAUTIZO' THEN 1 ELSE 0 END) AS bautizos,
      SUM(CASE WHEN tipo = 'COMUNION' THEN 1 ELSE 0 END) AS comuniones,
      SUM(CASE WHEN tipo = 'CONFIRMACION' THEN 1 ELSE 0 END) AS confirmaciones,
      SUM(CASE WHEN tipo = 'MATRIMONIO' THEN 1 ELSE 0 END) AS matrimonios
    FROM documento
    GROUP BY anio, mes
    ORDER BY anio ASC, mes ASC;
  `);

    return rawData.map((row: any) => ({
      anio: parseInt(row.anio),
      mes: parseInt(row.mes),
      bautizos: parseInt(row.bautizos),
      comuniones: parseInt(row.comuniones),
      confirmaciones: parseInt(row.confirmaciones),
      matrimonios: parseInt(row.matrimonios),
    }));
  }
}
