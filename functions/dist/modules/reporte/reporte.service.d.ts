import { Padrino } from '../padrino/entity/padrino.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';
import { DataSource, Repository } from 'typeorm';
import { Documento } from '../documento/entity/documento.entity';
export declare class ReporteService {
    private documentoRepo;
    private sacerdoteRepo;
    private padrinoRepo;
    private dataSource;
    constructor(documentoRepo: Repository<Documento>, sacerdoteRepo: Repository<Sacerdote>, padrinoRepo: Repository<Padrino>, dataSource: DataSource);
    countTotalDocumentos(): Promise<number>;
    topSacerdotesFirmantes(): Promise<Sacerdote[]>;
    topPadrinosConMasClientes(): Promise<Padrino[]>;
    getRangoAniosDisponibles(): Promise<number[]>;
}
