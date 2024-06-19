import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { DoctorModule } from './doctor/doctor.module';
import { CitaModule } from './cita/cita.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'MEDICAL_P3',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PacienteModule,
    DoctorModule,
    CitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
