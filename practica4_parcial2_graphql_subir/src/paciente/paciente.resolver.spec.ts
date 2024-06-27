import { Test, TestingModule } from '@nestjs/testing';
import { PacienteResolver } from './paciente.resolver';

describe('PacienteResolver', () => {
  let resolver: PacienteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacienteResolver],
    }).compile();

    resolver = module.get<PacienteResolver>(PacienteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
