import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  especialidad: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
