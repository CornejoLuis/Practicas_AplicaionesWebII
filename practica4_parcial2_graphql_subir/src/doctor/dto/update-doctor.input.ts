import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateDoctorDto } from './create-doctor.input';

@InputType()
export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {
  @Field({ nullable: true })
  estado?: boolean;
}
