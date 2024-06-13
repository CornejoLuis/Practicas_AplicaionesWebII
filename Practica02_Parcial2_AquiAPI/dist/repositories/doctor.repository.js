"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRepository = void 0;
const prisma_datasource_1 = __importDefault(require("../datasources/prisma.datasource"));
class DoctorRepository {
    async findAll() {
        return prisma_datasource_1.default.doctor.findMany();
    }
    async findById(id) {
        return prisma_datasource_1.default.doctor.findUnique({ where: { id } });
    }
    async create(doctor) {
        return prisma_datasource_1.default.doctor.create({ data: doctor });
    }
    async update(id, doctor) {
        return prisma_datasource_1.default.doctor.update({ where: { id }, data: doctor });
    }
    async delete(id) {
        return prisma_datasource_1.default.doctor.delete({ where: { id } });
    }
}
exports.DoctorRepository = DoctorRepository;
