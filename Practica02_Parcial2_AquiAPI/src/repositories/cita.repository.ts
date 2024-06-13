import prisma from '../datasources/prisma.datasource';
import { Cita } from '../entities/cita.entity';

export class CitaRepository {
  async findAll(): Promise<Cita[]> {
    return prisma.cita.findMany();
  }

  async findById(id: number): Promise<Cita | null> {
    return prisma.cita.findUnique({ where: { id } });
  }

  async create(cita: Omit<Cita, 'id'>): Promise<Cita> {
    return prisma.cita.create({ data: cita });
  }

  async update(id: number, cita: Partial<Omit<Cita, 'id'>>): Promise<Cita | null> {
    return prisma.cita.update({ where: { id }, data: cita });
  }

  async delete(id: number): Promise<Cita | null> {
    return prisma.cita.delete({ where: { id } });
  }
}