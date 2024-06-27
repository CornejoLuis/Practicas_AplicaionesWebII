import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { PacienteModule } from './paciente/paciente.module';
import { DoctorModule } from './doctor/doctor.module';
import { CitaModule } from './cita/cita.module';
import { Paciente } from './paciente/paciente.entity';
import { Doctor } from './doctor/doctor.entity';
import { Cita } from './cita/cita.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Paciente, Doctor, Cita],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    PacienteModule,
    DoctorModule,
    CitaModule,
  ],
})
export class AppModule {}
