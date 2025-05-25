import { Sacerdote } from './entity/sacerdote.entity';
import { Repository } from 'typeorm';
export declare class SacerdoteService {
    private sacerdoteRepo;
    constructor(sacerdoteRepo: Repository<Sacerdote>);
    findAll(): Promise<Sacerdote[]>;
}
