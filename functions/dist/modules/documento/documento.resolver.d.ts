import { Documento, TipoDocumento } from './entity/documento.entity';
import { DocumentoService } from './documento.service';
import { CreateDocumentoInput } from './dto/create-documento.input';
import { DocumentosPorAnioOutput } from './dto/documento-summary.output';
import { DocumentosPorMesOutput } from './dto/documento-summary-by-mes.output';
export declare class DocumentoResolver {
    private readonly documentoService;
    constructor(documentoService: DocumentoService);
    createDocumento(input: CreateDocumentoInput): Promise<Documento>;
    findAllDocumentos(tipo?: TipoDocumento, desde?: string, hasta?: string): Promise<Documento[]>;
    countDocumentosByTipo(): Promise<DocumentosPorAnioOutput[]>;
    countDocumentosPorMes(): Promise<DocumentosPorMesOutput[]>;
}
