import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cita } from 'src/cita/cita.entity';

@ObjectType()
@Entity()
export class Paciente {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  nombre: string;

  @Field()
  @Column()
  identificacion: string;

  @Field()
  @Column({ default: true })
  estado: boolean;

  @OneToMany(() => Cita, cita => cita.paciente)
  citas: Cita[];
}
