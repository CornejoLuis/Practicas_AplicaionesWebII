import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentsRepository: Repository<Appointment>,
  ) {}

  create(appointment: Partial<Appointment>): Promise<Appointment> {
    const newAppointment = this.appointmentsRepository.create(appointment);
    return this.appointmentsRepository.save(newAppointment);
  }

  findAll(): Promise<Appointment[]> {
    return this.appointmentsRepository.find();
  }

  findOne(id: number): Promise<Appointment> {
    return this.appointmentsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.appointmentsRepository.delete(id);
  }
}
