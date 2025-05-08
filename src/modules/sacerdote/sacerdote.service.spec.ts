import { Test, TestingModule } from '@nestjs/testing';
import { SacerdoteService } from './sacerdote.service';

describe('SacerdoteService', () => {
  let service: SacerdoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SacerdoteService],
    }).compile();

    service = module.get<SacerdoteService>(SacerdoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
