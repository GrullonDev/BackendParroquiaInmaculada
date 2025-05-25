import { Padrino } from 'src/modules/padrino/entity/padrino.entity';
import { Sacerdote } from 'src/modules/sacerdote/entity/sacerdote.entity';
export declare class Cliente {
    id: string;
    noFolioLibro: string;
    nombreNino: string;
    fechaNacimiento: string;
    padre: string;
    madre: string;
    padrino: Padrino;
    sacerdote: Sacerdote;
    parroquia: string;
    firmaSacerdote: string;
    createdAt: Date;
}
