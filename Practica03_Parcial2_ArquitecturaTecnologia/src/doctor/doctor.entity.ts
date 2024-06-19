import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cita } from '../cita/cita.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  especialidad: string;

  @Column()
  estado: string;

  @OneToMany(() => Cita, (cita) => cita.doctor)
  citas: Cita[];
}
