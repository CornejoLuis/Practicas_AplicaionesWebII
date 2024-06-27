import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsDateString, IsInt } from 'class-validator';

@InputType()
export class CreateCitaDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  sintoma: string;

  @Field()
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  hora: string;

  @Field()
  @IsInt()
  @IsNotEmpty()
  id_paciente: number;

  @Field()
  @IsInt()
  @IsNotEmpty()
  id_doctor: number;
}
