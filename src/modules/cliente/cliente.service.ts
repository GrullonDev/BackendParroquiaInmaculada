import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entity/cliente.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateClienteInput } from './dto/create-cliente.input';
import { Padrino } from '../padrino/entity/padrino.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepo: Repository<Cliente>,

        @InjectRepository(Padrino)
        private padrinoRepo: Repository<Padrino>,

        @InjectRepository(Sacerdote)
        private sacerdoteRepo: Repository<Sacerdote>,
    ) { }

    async create(input: CreateClienteInput): Promise<Cliente> {
        const nombresSeparados = input.padrinos.split(/\s+y\s+/); // separa por " y "

        // Inserta cada padrino si no existe
        for (const nombre of nombresSeparados) {
            const padrinoExistente = await this.padrinoRepo.findOne({ where: { nombre } });

            if (!padrinoExistente) {
                const nuevoPadrino = this.padrinoRepo.create({ nombre, cantidad: 1 });
                await this.padrinoRepo.save(nuevoPadrino);
            } else {
                padrinoExistente.cantidad += 1;
                await this.padrinoRepo.save(padrinoExistente);
            }
        }

        // Relacionar solo con el primer padrino por simplicidad
        const padrinoPrincipal = await this.padrinoRepo.findOne({ where: { nombre: nombresSeparados[0] } });
        // ───── Procesar Sacerdote por nombre ─────
        const sacerdoteExistente = await this.sacerdoteRepo.findOne({
            where: { nombreCompleto: input.sacerdote },
        });

        let sacerdote: Sacerdote;

        if (!sacerdoteExistente) {
            sacerdote = this.sacerdoteRepo.create({
                nombreCompleto: input.sacerdote,
                cantidad: 1,
            });
            await this.sacerdoteRepo.save(sacerdote);
        } else {
            sacerdoteExistente.cantidad += 1;
            sacerdote = await this.sacerdoteRepo.save(sacerdoteExistente);
        }

        if (!padrinoPrincipal) {
            throw new Error('Padrino no encontrado'); // puedes usar BadRequestException si prefieres
        }

        if (!sacerdote) {
            throw new Error('Sacerdote no encontrado');
        }

        const nuevoCliente: DeepPartial<Cliente> = {
            cui: input.cui,
            nombreNino: input.nombreNino,
            fechasPlaticas: input.fechasPlaticas,
            parroquia: input.parroquia,
            direccion: input.direccion,
            firmaSacerdote: input.firmaSacerdote,
            padrino: padrinoPrincipal,
            sacerdote: sacerdote,
        };

        return this.clienteRepo.save(this.clienteRepo.create(nuevoCliente));
    }

    findAll(): Promise<Cliente[]> {
        return this.clienteRepo.find();
    }

    async findByCui(cui: string): Promise<Cliente | null> {
        return this.clienteRepo.findOne({ where: { cui } });
    }
}