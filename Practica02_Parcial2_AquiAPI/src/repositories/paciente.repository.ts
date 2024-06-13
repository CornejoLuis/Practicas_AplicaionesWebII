import prisma from '../datasources/prisma.datasource';
import { Paciente } from '../entities/paciente.entity';

export class PacienteRepository {
  async findAll(): Promise<Paciente[]> {
    return prisma.paciente.findMany();
  }

  async findById(id: number): Promise<Paciente | null> {
    return prisma.paciente.findUnique({ where: { id } });
  }

  async create(paciente: Omit<Paciente, 'id'>): Promise<Paciente> {
    return prisma.paciente.create({ data: paciente });
  }

  async update(id: number, paciente: Partial<Omit<Paciente, 'id'>>): Promise<Paciente | null> {
    return prisma.paciente.update({ where: { id }, data: paciente });
  }

  async delete(id: number): Promise<Paciente | null> {
    return prisma.paciente.delete({ where: { id } });
  }
}