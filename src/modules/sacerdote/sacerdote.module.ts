import { Module } from '@nestjs/common';
import { SacerdoteService } from './sacerdote.service';
import { SacerdoteResolver } from './sacerdote.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sacerdote } from './entity/sacerdote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sacerdote])], // ✅ REGISTRO REQUERIDO
  providers: [SacerdoteService, SacerdoteResolver],
  exports: [SacerdoteService],
})
export class SacerdoteModule {}
