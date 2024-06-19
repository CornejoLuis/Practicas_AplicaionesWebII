import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './cita.entity';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>,
  ) {}

  // Métodos del servicio
  async findAll(): Promise<Cita[]> {
    return this.citaRepository.find();
  }

  async findOne(id: number): Promise<Cita> {
    return this.citaRepository.findOne({ where: { id } });
  }

  async create(citaData: Partial<Cita>): Promise<Cita> {
    const cita = this.citaRepository.create(citaData);
    return this.citaRepository.save(cita);
  }

  async update(id: number, citaData: Partial<Cita>): Promise<Cita> {
    await this.citaRepository.update(id, citaData);
    return this.citaRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.citaRepository.delete(id);
  }
}
