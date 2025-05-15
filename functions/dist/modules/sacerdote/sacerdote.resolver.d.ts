import { Sacerdote } from './entity/sacerdote.entity';
import { SacerdoteService } from './sacerdote.service';
export declare class SacerdoteResolver {
    private readonly sacerdoteService;
    constructor(sacerdoteService: SacerdoteService);
    findAllSacerdotes(): Promise<Sacerdote[]>;
}
