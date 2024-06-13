import { Request, Response } from 'express';
import { PacienteRepository } from '../repositories/paciente.repository';

const pacienteRepository = new PacienteRepository();

export const getPacientes = async (req: Request, res: Response) => {
  const pacientes = await pacienteRepository.findAll();
  res.json(pacientes);
};

export const getPacienteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const paciente = await pacienteRepository.findById(Number(id));
  if (paciente) {
    res.json(paciente);
  } else {
    res.status(404).json({ error: 'Paciente not found' });
  }
};

export const createPaciente = async (req: Request, res: Response) => {
  const { nombre, identificacion } = req.body;
  const newPaciente = await pacienteRepository.create({ nombre, identificacion });
  res.status(201).json(newPaciente);
};

export const updatePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, identificacion } = req.body;
  const updatedPaciente = await pacienteRepository.update(Number(id), { nombre, identificacion });
  if (updatedPaciente) {
    res.json(updatedPaciente);
  } else {
    res.status(404).json({ error: 'Paciente not found' });
  }
};

export const deletePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedPaciente = await pacienteRepository.delete(Number(id));
  if (deletedPaciente) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Paciente not found' });
  }
};
