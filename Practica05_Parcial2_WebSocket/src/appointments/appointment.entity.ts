import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from '../patients/patient.entity';
import { Doctor } from '../doctors/doctor.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  sintoma: string;

  @Column()
  fecha: string;

  @Column()
  hora: string;

  @ManyToOne(() => Patient, (patient) => patient.id)
  id_paciente: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.id)
  id_doctor: Doctor;
}
