"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteRepository = void 0;
const prisma_datasource_1 = __importDefault(require("../datasources/prisma.datasource"));
class PacienteRepository {
    async findAll() {
        return prisma_datasource_1.default.paciente.findMany();
    }
    async findById(id) {
        return prisma_datasource_1.default.paciente.findUnique({ where: { id } });
    }
    async create(paciente) {
        return prisma_datasource_1.default.paciente.create({ data: paciente });
    }
    async update(id, paciente) {
        return prisma_datasource_1.default.paciente.update({ where: { id }, data: paciente });
    }
    async delete(id) {
        return prisma_datasource_1.default.paciente.delete({ where: { id } });
    }
}
exports.PacienteRepository = PacienteRepository;
