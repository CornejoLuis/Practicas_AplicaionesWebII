import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctor]), // Asegúrate de que esta línea esté presente
  ],
  providers: [DoctorService],
  controllers: [DoctorController],
})
export class DoctorModule {}
