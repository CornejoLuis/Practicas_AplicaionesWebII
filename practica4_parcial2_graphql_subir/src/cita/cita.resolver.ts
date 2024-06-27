import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CitaService } from './cita.service';
import { Cita } from './cita.entity';
import { CreateCitaDto } from './dto/create-cita.input';
import { UpdateCitaDto } from './dto/update-cita.input';

@Resolver(() => Cita)
export class CitaResolver {
  constructor(private readonly citaService: CitaService) {}

  @Mutation(() => Cita)
  createCita(@Args('createCitaInput') createCitaInput: CreateCitaDto): Promise<Cita> {
    return this.citaService.create(createCitaInput);
  }

  @Query(() => [Cita], { name: 'citas' })
  findAll(): Promise<Cita[]> {
    return this.citaService.findAll();
  }

  @Query(() => Cita, { name: 'cita' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Cita> {
    return this.citaService.findOne(id);
  }

  @Mutation(() => Cita)
  updateCita(@Args('id') id: string, @Args('updateCitaInput') updateCitaInput: UpdateCitaDto): Promise<Cita> {
    return this.citaService.update(id, updateCitaInput);
  }

  @Mutation(() => Cita)
  removeCita(@Args('id') id: string): Promise<Cita> {
    return this.citaService.remove(id);
  }
}
