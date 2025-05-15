import { TipoDocumento } from '../entity/documento.entity';
export declare class CreateDocumentoInput {
    tipo: TipoDocumento;
    fechaEmision: string;
    observaciones?: string;
    clienteId: string;
    sacerdoteNombre: string;
}
