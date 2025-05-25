import { Cliente } from './entity/cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteInput } from './dto/create-cliente.input';
export declare class ClienteResolver {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    createCliente(input: CreateClienteInput): Promise<Cliente>;
    findAllClientes(): Promise<Cliente[]>;
    findClienteByNoFolioLibro(noFolioLibro: string): Promise<Cliente | null>;
}
