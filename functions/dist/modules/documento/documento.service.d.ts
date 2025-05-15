import { EntityManager, Repository } from 'typeorm';
import { Documento, TipoDocumento } from './entity/documento.entity';
import { CreateDocumentoInput } from './dto/create-documento.input';
import { Cliente } from '../cliente/entity/cliente.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';
import { DocumentosPorAnioOutput } from './dto/documento-summary.output';
import { DocumentosPorMesOutput } from './dto/documento-summary-by-mes.output';
interface DocumentoFilter {
    tipo?: TipoDocumento;
    desde?: string;
    hasta?: string;
}
export declare class DocumentoService {
    private readonly documentoRepo;
    private readonly clienteRepo;
    private readonly sacerdoteRepo;
    private readonly entityManager;
    constructor(documentoRepo: Repository<Documento>, clienteRepo: Repository<Cliente>, sacerdoteRepo: Repository<Sacerdote>, entityManager: EntityManager);
    create(input: CreateDocumentoInput): Promise<Documento>;
    findAll(filter: DocumentoFilter): Promise<Documento[]>;
    countDocumentosByTipo(): Promise<DocumentosPorAnioOutput[]>;
    countDocumentosPorMes(): Promise<DocumentosPorMesOutput[]>;
}
export {};
