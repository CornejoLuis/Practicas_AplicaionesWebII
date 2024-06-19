import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pacienteService.findOne(id);
  }

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePacienteDto: Partial<CreatePacienteDto>) {
    return this.pacienteService.update(id, updatePacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pacienteService.remove(id);
  }
}
