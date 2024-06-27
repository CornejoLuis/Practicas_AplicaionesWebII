import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateCitaDto } from './create-cita.input';

@InputType()
export class UpdateCitaDto extends PartialType(CreateCitaDto) {
  @Field({ nullable: true })
  estado?: boolean;
}
