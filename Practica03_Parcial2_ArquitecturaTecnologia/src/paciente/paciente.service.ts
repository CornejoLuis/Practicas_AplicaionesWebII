import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from './paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  // Métodos del servicio
  async findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    return this.pacienteRepository.findOne({ where: { id } });
  }

  async create(pacienteData: Partial<Paciente>): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(pacienteData);
    return this.pacienteRepository.save(paciente);
  }

  async update(id: number, pacienteData: Partial<Paciente>): Promise<Paciente> {
    await this.pacienteRepository.update(id, pacienteData);
    return this.pacienteRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.pacienteRepository.delete(id);
  }
}
