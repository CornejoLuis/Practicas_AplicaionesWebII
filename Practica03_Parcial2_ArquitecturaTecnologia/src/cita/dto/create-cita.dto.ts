// src/cita/dto/create-cita.dto.ts
import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCitaDto {
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  fecha: Date;

  @IsNotEmpty()
  @IsString()
  motivo: string;

  @IsOptional()
  @IsString()
  estado: string;

  @IsNotEmpty()
  pacienteId: number;

  @IsNotEmpty()
  doctorId: number;
}
