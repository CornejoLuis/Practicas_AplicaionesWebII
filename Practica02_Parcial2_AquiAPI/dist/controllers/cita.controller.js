"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCita = exports.updateCita = exports.createCita = exports.getCitaById = exports.getCitas = void 0;
const cita_repository_1 = require("../repositories/cita.repository");
const citaRepository = new cita_repository_1.CitaRepository();
const getCitas = async (req, res) => {
    const citas = await citaRepository.findAll();
    res.json(citas);
};
exports.getCitas = getCitas;
const getCitaById = async (req, res) => {
    const { id } = req.params;
    const cita = await citaRepository.findById(Number(id));
    if (cita) {
        res.json(cita);
    }
    else {
        res.status(404).json({ error: 'Cita not found' });
    }
};
exports.getCitaById = getCitaById;
const createCita = async (req, res) => {
    const { doctorId, pacienteId, fecha, hora, sintomas } = req.body;
    const newCita = await citaRepository.create({ doctorId, pacienteId, fecha, hora, sintomas });
    res.status(201).json(newCita);
};
exports.createCita = createCita;
const updateCita = async (req, res) => {
    const { id } = req.params;
    const { doctorId, pacienteId, fecha, hora, sintomas } = req.body;
    const updatedCita = await citaRepository.update(Number(id), { doctorId, pacienteId, fecha, hora, sintomas });
    if (updatedCita) {
        res.json(updatedCita);
    }
    else {
        res.status(404).json({ error: 'Cita not found' });
    }
};
exports.updateCita = updateCita;
const deleteCita = async (req, res) => {
    const { id } = req.params;
    const deletedCita = await citaRepository.delete(Number(id));
    if (deletedCita) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ error: 'Cita not found' });
    }
};
exports.deleteCita = deleteCita;
