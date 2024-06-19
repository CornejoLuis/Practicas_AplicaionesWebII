import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  // Métodos del servicio
  async findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find();
  }

  async findOne(id: number): Promise<Doctor> {
    return this.doctorRepository.findOne({ where: { id } });
  }

  async create(doctorData: Partial<Doctor>): Promise<Doctor> {
    const doctor = this.doctorRepository.create(doctorData);
    return this.doctorRepository.save(doctor);
  }

  async update(id: number, doctorData: Partial<Doctor>): Promise<Doctor> {
    await this.doctorRepository.update(id, doctorData);
    return this.doctorRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.doctorRepository.delete(id);
  }
}
