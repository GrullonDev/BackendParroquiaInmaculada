import { Test, TestingModule } from '@nestjs/testing';
import { ReporteResolver } from './reporte.resolver';

describe('ReporteResolver', () => {
  let resolver: ReporteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteResolver],
    }).compile();

    resolver = module.get<ReporteResolver>(ReporteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
