import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.input';
import { UpdatePacienteDto } from './dto/update-paciente.input';

@Resolver(() => Paciente)
export class PacienteResolver {
  constructor(private readonly pacienteService: PacienteService) {}

  @Mutation(() => Paciente)
  createPaciente(@Args('createPacienteInput') createPacienteInput: CreatePacienteDto): Promise<Paciente> {
    return this.pacienteService.create(createPacienteInput);
  }

  @Query(() => [Paciente], { name: 'pacientes' })
  findAll(): Promise<Paciente[]> {
    return this.pacienteService.findAll();
  }

  @Query(() => Paciente, { name: 'paciente' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Paciente> {
    return this.pacienteService.findOne(id);
  }

  @Mutation(() => Paciente)
  updatePaciente(@Args('id') id: string, @Args('updatePacienteInput') updatePacienteInput: UpdatePacienteDto): Promise<Paciente> {
    return this.pacienteService.update(id, updatePacienteInput);
  }

  @Mutation(() => Paciente)
  removePaciente(@Args('id') id: string): Promise<Paciente> {
    return this.pacienteService.remove(id);
  }
}

