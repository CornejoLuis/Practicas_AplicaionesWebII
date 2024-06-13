"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaciente = exports.updatePaciente = exports.createPaciente = exports.getPacienteById = exports.getPacientes = void 0;
const paciente_repository_1 = require("../repositories/paciente.repository");
const pacienteRepository = new paciente_repository_1.PacienteRepository();
const getPacientes = async (req, res) => {
    const pacientes = await pacienteRepository.findAll();
    res.json(pacientes);
};
exports.getPacientes = getPacientes;
const getPacienteById = async (req, res) => {
    const { id } = req.params;
    const paciente = await pacienteRepository.findById(Number(id));
    if (paciente) {
        res.json(paciente);
    }
    else {
        res.status(404).json({ error: 'Paciente not found' });
    }
};
exports.getPacienteById = getPacienteById;
const createPaciente = async (req, res) => {
    const { nombre, identificacion } = req.body;
    const newPaciente = await pacienteRepository.create({ nombre, identificacion });
    res.status(201).json(newPaciente);
};
exports.createPaciente = createPaciente;
const updatePaciente = async (req, res) => {
    const { id } = req.params;
    const { nombre, identificacion } = req.body;
    const updatedPaciente = await pacienteRepository.update(Number(id), { nombre, identificacion });
    if (updatedPaciente) {
        res.json(updatedPaciente);
    }
    else {
        res.status(404).json({ error: 'Paciente not found' });
    }
};
exports.updatePaciente = updatePaciente;
const deletePaciente = async (req, res) => {
    const { id } = req.params;
    const deletedPaciente = await pacienteRepository.delete(Number(id));
    if (deletedPaciente) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ error: 'Paciente not found' });
    }
};
exports.deletePaciente = deletePaciente;
