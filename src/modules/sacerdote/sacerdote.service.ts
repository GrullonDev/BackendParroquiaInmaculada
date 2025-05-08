import { Injectable } from '@nestjs/common';
import { Sacerdote } from './entity/sacerdote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SacerdoteService {
    constructor(
        @InjectRepository(Sacerdote)
        private sacerdoteRepo: Repository<Sacerdote>,
    ) { }

    async findAll(): Promise<Sacerdote[]> {
        return this.sacerdoteRepo.find({
            relations: ['clientes'],
            order: { cantidad: 'DESC' },
        });
    }
}
