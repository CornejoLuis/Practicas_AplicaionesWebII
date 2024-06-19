// src/cita/cita.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Controller('citas')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Post()
  create(@Body() createCitaDto: CreateCitaDto) {
    createCitaDto.fecha = new Date(createCitaDto.fecha);
    return this.citaService.create(createCitaDto);
  }

  @Get()
  findAll() {
    return this.citaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citaService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitaDto: UpdateCitaDto) {
    updateCitaDto.fecha = new Date(updateCitaDto.fecha);
    return this.citaService.update(Number(id), updateCitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citaService.remove(Number(id));
  }
}
