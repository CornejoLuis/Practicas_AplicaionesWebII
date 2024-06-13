"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitaRepository = void 0;
const prisma_datasource_1 = __importDefault(require("../datasources/prisma.datasource"));
class CitaRepository {
    async findAll() {
        return prisma_datasource_1.default.cita.findMany();
    }
    async findById(id) {
        return prisma_datasource_1.default.cita.findUnique({ where: { id } });
    }
    async create(cita) {
        return prisma_datasource_1.default.cita.create({ data: cita });
    }
    async update(id, cita) {
        return prisma_datasource_1.default.cita.update({ where: { id }, data: cita });
    }
    async delete(id) {
        return prisma_datasource_1.default.cita.delete({ where: { id } });
    }
}
exports.CitaRepository = CitaRepository;
