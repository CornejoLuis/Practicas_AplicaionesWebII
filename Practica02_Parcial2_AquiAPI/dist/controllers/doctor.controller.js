"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoctor = exports.updateDoctor = exports.createDoctor = exports.getDoctorById = exports.getDoctors = void 0;
const doctor_repository_1 = require("../repositories/doctor.repository");
const doctorRepository = new doctor_repository_1.DoctorRepository();
const getDoctors = async (req, res) => {
    const doctors = await doctorRepository.findAll();
    res.json(doctors);
};
exports.getDoctors = getDoctors;
const getDoctorById = async (req, res) => {
    const { id } = req.params;
    const doctor = await doctorRepository.findById(Number(id));
    if (doctor) {
        res.json(doctor);
    }
    else {
        res.status(404).json({ error: 'Doctor not found' });
    }
};
exports.getDoctorById = getDoctorById;
const createDoctor = async (req, res) => {
    const { nombre, identificacion } = req.body;
    const newDoctor = await doctorRepository.create({ nombre, identificacion });
    res.status(201).json(newDoctor);
};
exports.createDoctor = createDoctor;
const updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { nombre, identificacion } = req.body;
    const updatedDoctor = await doctorRepository.update(Number(id), { nombre, identificacion });
    if (updatedDoctor) {
        res.json(updatedDoctor);
    }
    else {
        res.status(404).json({ error: 'Doctor not found' });
    }
};
exports.updateDoctor = updateDoctor;
const deleteDoctor = async (req, res) => {
    const { id } = req.params;
    const deletedDoctor = await doctorRepository.delete(Number(id));
    if (deletedDoctor) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ error: 'Doctor not found' });
    }
};
exports.deleteDoctor = deleteDoctor;
