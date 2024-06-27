import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreatePacienteDto } from './create-paciente.input';

@InputType()
export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
  @Field({ nullable: true })
  estado?: boolean;
}
