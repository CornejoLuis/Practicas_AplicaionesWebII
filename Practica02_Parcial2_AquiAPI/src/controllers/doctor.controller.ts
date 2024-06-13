import { Request, Response } from 'express';
import { DoctorRepository } from '../repositories/doctor.repository';

const doctorRepository = new DoctorRepository();

export const getDoctors = async (req: Request, res: Response) => {
  const doctors = await doctorRepository.findAll();
  res.json(doctors);
};

export const getDoctorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const doctor = await doctorRepository.findById(Number(id));
  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({ error: 'Doctor not found' });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  const { nombre, identificacion } = req.body;
  const newDoctor = await doctorRepository.create({ nombre, identificacion });
  res.status(201).json(newDoctor);
};

export const updateDoctor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, identificacion } = req.body;
  const updatedDoctor = await doctorRepository.update(Number(id), { nombre, identificacion });
  if (updatedDoctor) {
    res.json(updatedDoctor);
  } else {
    res.status(404).json({ error: 'Doctor not found' });
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedDoctor = await doctorRepository.delete(Number(id));
  if (deletedDoctor) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Doctor not found' });
  }
};
