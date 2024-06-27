import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.input';
import { UpdatePacienteDto } from './dto/update-paciente.input';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(paciente);
  }

  async findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async findOne(id: string): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({ where: { id: +id } });
    if (!paciente) {
      throw new NotFoundException(`Paciente with ID ${id} not found`);
    }
    return paciente;
  }

  async update(id: string, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    const paciente = await this.pacienteRepository.preload({
      id: +id,
      ...updatePacienteDto,
    });
    if (!paciente) {
      throw new NotFoundException(`Paciente with ID ${id} not found`);
    }
    return this.pacienteRepository.save(paciente);
  }

  async remove(id: string): Promise<Paciente> {
    const paciente = await this.findOne(id);
    paciente.estado = false;  // Cambiar a eliminación lógica
    return this.pacienteRepository.save(paciente);
  }
}
