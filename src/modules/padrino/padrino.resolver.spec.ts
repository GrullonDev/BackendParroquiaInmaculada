import { Test, TestingModule } from '@nestjs/testing';
import { PadrinoResolver } from './padrino.resolver';

describe('PadrinoResolver', () => {
  let resolver: PadrinoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PadrinoResolver],
    }).compile();

    resolver = module.get<PadrinoResolver>(PadrinoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
