import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Doctor } from 'src/doctor/doctor.entity';
import { Paciente } from 'src/paciente/paciente.entity';

@ObjectType()
@Entity()
export class Cita {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  descripcion: string;

  @Field()
  @Column()
  sintoma: string;

  @Field()
  @Column()
  fecha: string;

  @Field()
  @Column()
  hora: string;

  @Field()
  @Column()
  id_paciente: number;

  @Field()
  @Column()
  id_doctor: number;

  @Field()
  @Column({ default: true })
  estado: boolean;

  @ManyToOne(() => Doctor, doctor => doctor.citas)
  doctor: Doctor;

  @ManyToOne(() => Paciente, paciente => paciente.citas)
  paciente: Paciente;
}
