import prisma from '../datasources/prisma.datasource';
import { Doctor } from '../entities/doctor.entity';

export class DoctorRepository {
  async findAll(): Promise<Doctor[]> {
    return prisma.doctor.findMany();
  }

  async findById(id: number): Promise<Doctor | null> {
    return prisma.doctor.findUnique({ where: { id } });
  }

  async create(doctor: Omit<Doctor, 'id'>): Promise<Doctor> {
    return prisma.doctor.create({ data: doctor });
  }

  async update(id: number, doctor: Partial<Omit<Doctor, 'id'>>): Promise<Doctor | null> {
    return prisma.doctor.update({ where: { id }, data: doctor });
  }

  async delete(id: number): Promise<Doctor | null> {
    return prisma.doctor.delete({ where: { id } });
  }
}