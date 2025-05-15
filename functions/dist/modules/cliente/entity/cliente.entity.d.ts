import { Padrino } from 'src/modules/padrino/entity/padrino.entity';
import { Sacerdote } from 'src/modules/sacerdote/entity/sacerdote.entity';
export declare class Cliente {
    id: string;
    cui: string;
    nombreNino: string;
    fechasPlaticas: string;
    padrino: Padrino;
    sacerdote: Sacerdote;
    parroquia: string;
    direccion: string;
    firmaSacerdote: string;
    createdAt: Date;
}
