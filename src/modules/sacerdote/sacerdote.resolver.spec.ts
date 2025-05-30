import { Test, TestingModule } from '@nestjs/testing';
import { SacerdoteResolver } from './sacerdote.resolver';

describe('SacerdoteResolver', () => {
  let resolver: SacerdoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SacerdoteResolver],
    }).compile();

    resolver = module.get<SacerdoteResolver>(SacerdoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
