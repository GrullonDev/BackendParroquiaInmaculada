import { Test, TestingModule } from '@nestjs/testing';
import { PadrinoService } from './padrino.service';

describe('PadrinoService', () => {
  let service: PadrinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadrinoService],
    }).compile();

    service = module.get<PadrinoService>(PadrinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
