import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.input';
import { UpdateDoctorDto } from './dto/update-doctor.input';

@Resolver(() => Doctor)
export class DoctorResolver {
  constructor(private readonly doctorService: DoctorService) {}

  @Mutation(() => Doctor)
  createDoctor(@Args('createDoctorInput') createDoctorInput: CreateDoctorDto): Promise<Doctor> {
    return this.doctorService.create(createDoctorInput);
  }

  @Query(() => [Doctor], { name: 'doctores' })
  findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }

  @Query(() => Doctor, { name: 'doctor' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Doctor> {
    return this.doctorService.findOne(id);
  }

  @Mutation(() => Doctor)
  updateDoctor(@Args('id') id: string, @Args('updateDoctorInput') updateDoctorInput: UpdateDoctorDto): Promise<Doctor> {
    return this.doctorService.update(id, updateDoctorInput);
  }

  @Mutation(() => Doctor)
  removeDoctor(@Args('id') id: string): Promise<Doctor> {
    return this.doctorService.remove(id);
  }
}
