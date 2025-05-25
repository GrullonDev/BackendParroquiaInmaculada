import { Padrino } from '../padrino/entity/padrino.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';
import { ReporteService } from './reporte.service';
export declare class ReporteResolver {
    private readonly reporteService;
    constructor(reporteService: ReporteService);
    countTotalDocumentos(): Promise<number>;
    topSacerdotesFirmantes(): Promise<Sacerdote[]>;
    topPadrinosConMasClientes(): Promise<Padrino[]>;
    getRangoAniosDisponibles(): Promise<number[]>;
}
