import { Cliente } from './entity/cliente.entity';
import { Repository } from 'typeorm';
import { CreateClienteInput } from './dto/create-cliente.input';
import { Padrino } from '../padrino/entity/padrino.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';
export declare class ClienteService {
    private clienteRepo;
    private padrinoRepo;
    private sacerdoteRepo;
    constructor(clienteRepo: Repository<Cliente>, padrinoRepo: Repository<Padrino>, sacerdoteRepo: Repository<Sacerdote>);
    create(input: CreateClienteInput): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findByNoFolioLibro(noFolioLibro: string): Promise<Cliente | null>;
}
