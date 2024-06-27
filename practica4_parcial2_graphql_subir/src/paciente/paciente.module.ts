import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteService } from './paciente.service';
import { PacienteResolver } from './paciente.resolver';
import { Paciente } from './paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  providers: [PacienteService, PacienteResolver],
  exports: [PacienteService],
})
export class PacienteModule {}
