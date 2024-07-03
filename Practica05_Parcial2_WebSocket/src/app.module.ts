import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './patients/patients.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { Patient } from './patients/patient.entity';
import { Doctor } from './doctors/doctor.entity';
import { Appointment } from './appointments/appointment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'medicalp5',
      entities: [Patient, Doctor, Appointment],
      synchronize: true,
    }),
    PatientsModule,
    DoctorsModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
