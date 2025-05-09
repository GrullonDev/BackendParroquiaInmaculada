import { Test, TestingModule } from '@nestjs/testing';
import { DocumentoResolver } from './documento.resolver';

describe('DocumentoResolver', () => {
  let resolver: DocumentoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentoResolver],
    }).compile();

    resolver = module.get<DocumentoResolver>(DocumentoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
