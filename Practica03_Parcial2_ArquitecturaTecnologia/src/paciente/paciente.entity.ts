import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cita } from '../cita/cita.entity';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column()
  direccion: string;

  @Column()
  estado: string;

  @OneToMany(() => Cita, cita => cita.paciente)
  citas: Cita[];
}
