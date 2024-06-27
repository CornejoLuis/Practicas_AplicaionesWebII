import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './cita.entity';
import { CreateCitaDto } from './dto/create-cita.input';
import { UpdateCitaDto } from './dto/update-cita.input';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>,
  ) {}

  async create(createCitaDto: CreateCitaDto): Promise<Cita> {
    const cita = this.citaRepository.create(createCitaDto);
    return this.citaRepository.save(cita);
  }

  async findAll(): Promise<Cita[]> {
    return this.citaRepository.find();
  }

  async findOne(id: string): Promise<Cita> {
    const cita = await this.citaRepository.findOne({ where: { id: +id } });
    if (!cita) {
      throw new NotFoundException(`Cita with ID ${id} not found`);
    }
    return cita;
  }

  async update(id: string, updateCitaDto: UpdateCitaDto): Promise<Cita> {
    const cita = await this.citaRepository.preload({
      id: +id,
      ...updateCitaDto,
    });
    if (!cita) {
      throw new NotFoundException(`Cita with ID ${id} not found`);
    }
    return this.citaRepository.save(cita);
  }

  async remove(id: string): Promise<Cita> {
    const cita = await this.findOne(id);
    cita.estado = false;  // Cambiar a eliminación lógica
    return this.citaRepository.save(cita);
  }
}
