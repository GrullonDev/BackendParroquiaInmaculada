import { Cliente } from '../../cliente/entity/cliente.entity';
import { Sacerdote } from '../../sacerdote/entity/sacerdote.entity';
export declare enum TipoDocumento {
    BAUTIZO = "BAUTIZO",
    COMUNION = "COMUNION",
    CONFIRMACION = "CONFIRMACION",
    MATRIMONIO = "MATRIMONIO"
}
export declare class Documento {
    id: string;
    tipo: TipoDocumento;
    fechaEmision: string;
    observaciones: string;
    cliente: Cliente;
    sacerdote: Sacerdote;
    creadoEn: Date;
}
