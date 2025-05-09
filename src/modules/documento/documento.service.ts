import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documento } from './entity/documento.entity';
import { CreateDocumentoInput } from './dto/create-documento.input';
import { Cliente } from '../cliente/entity/cliente.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';

@Injectable()
export class DocumentoService {
    constructor(
        @InjectRepository(Documento) private readonly documentoRepo: Repository<Documento>,
        @InjectRepository(Cliente) private readonly clienteRepo: Repository<Cliente>,
        @InjectRepository(Sacerdote) private readonly sacerdoteRepo: Repository<Sacerdote>,
    ) { }

    async create(input: CreateDocumentoInput): Promise<Documento> {
        const cliente = await this.clienteRepo.findOneBy({ id: input.clienteId });
        if (!cliente) throw new Error('Cliente no encontrado');

        let sacerdote = await this.sacerdoteRepo.findOneBy({ nombreCompleto: input.sacerdoteNombre });
        if (!sacerdote) {
            sacerdote = this.sacerdoteRepo.create({ nombreCompleto: input.sacerdoteNombre, cantidad: 1 });
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

    findAll(): Promise<Documento[]> {
        return this.documentoRepo.find();
    }
}
