import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
  ) {}

  create(patient: Partial<Patient>): Promise<Patient> {
    const newPatient = this.patientsRepository.create(patient);
    return this.patientsRepository.save(newPatient);
  }

  findAll(): Promise<Patient[]> {
    return this.patientsRepository.find();
  }

  findOne(id: number): Promise<Patient> {
    return this.patientsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.patientsRepository.delete(id);
  }
}
