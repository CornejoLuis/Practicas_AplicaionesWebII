import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Paciente } from '../paciente/paciente.entity';
import { Doctor } from '../doctor/doctor.entity';

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  motivo: string;

  @Column()
  estado: string;

  @ManyToOne(() => Paciente, paciente => paciente.citas)
  paciente: Paciente;

  @ManyToOne(() => Doctor, doctor => doctor.citas)
  doctor: Doctor;
}
