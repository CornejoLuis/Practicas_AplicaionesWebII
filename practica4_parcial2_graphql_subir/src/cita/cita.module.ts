import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaService } from './cita.service';
import { CitaResolver } from './cita.resolver';
import { Cita } from './cita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cita])],
  providers: [CitaService, CitaResolver],
})
export class CitaModule {}
