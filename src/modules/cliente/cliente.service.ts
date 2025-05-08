import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entity/cliente.entity';
import { Repository } from 'typeorm';
import { CreateClienteInput } from './dto/create-cliente.input';

@Injectable()
export class ClienteService {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepo: Repository<Cliente>,
    ) { }

    create(input: CreateClienteInput): Promise<Cliente> {
        const nuevo = this.clienteRepo.create(input);
        return this.clienteRepo.save(nuevo);
    }

    findAll(): Promise<Cliente[]> {
        return this.clienteRepo.find();
    }

    async findByCui(cui: string): Promise<Cliente | null> {
        return this.clienteRepo.findOne({ where: { cui } });
    }
}