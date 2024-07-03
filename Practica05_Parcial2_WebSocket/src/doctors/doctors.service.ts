import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) {}

  create(doctor: Partial<Doctor>): Promise<Doctor> {
    const newDoctor = this.doctorsRepository.create(doctor);
    return this.doctorsRepository.save(newDoctor);
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find();
  }

  findOne(id: number): Promise<Doctor> {
    return this.doctorsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.doctorsRepository.delete(id);
  }
}
