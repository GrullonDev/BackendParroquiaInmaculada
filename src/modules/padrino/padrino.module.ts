import { Module } from '@nestjs/common';
import { PadrinoService } from './padrino.service';
import { PadrinoResolver } from './padrino.resolver';

@Module({
  providers: [PadrinoService, PadrinoResolver]
})
export class PadrinoModule {}
