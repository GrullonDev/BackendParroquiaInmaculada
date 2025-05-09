import { Int, Query, Resolver } from '@nestjs/graphql';
import { Padrino } from '../padrino/entity/padrino.entity';
import { Sacerdote } from '../sacerdote/entity/sacerdote.entity';
import { ReporteService } from './reporte.service';

@Resolver()
export class ReporteResolver {
    constructor(private readonly reporteService: ReporteService) { }

    @Query(() => Int)
    countTotalDocumentos() {
        return this.reporteService.countTotalDocumentos();
    }

    @Query(() => [Sacerdote])
    topSacerdotesFirmantes() {
        return this.reporteService.topSacerdotesFirmantes();
    }

    @Query(() => [Padrino])
    topPadrinosConMasClientes() {
        return this.reporteService.topPadrinosConMasClientes();
    }

    @Query(() => [Int])
    getRangoAniosDisponibles() {
        return this.reporteService.getRangoAniosDisponibles();
    }
}
