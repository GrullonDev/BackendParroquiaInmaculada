import { Module } from '@nestjs/common';
import { SacerdoteService } from './sacerdote.service';
import { SacerdoteResolver } from './sacerdote.resolver';

@Module({
  providers: [SacerdoteService, SacerdoteResolver]
})
export class SacerdoteModule {}
