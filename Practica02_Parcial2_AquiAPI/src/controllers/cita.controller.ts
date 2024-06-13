import { Request, Response } from 'express';
import { CitaRepository } from '../repositories/cita.repository';

const citaRepository = new CitaRepository();

export const getCitas = async (req: Request, res: Response) => {
  const citas = await citaRepository.findAll();
  res.json(citas);
};

export const getCitaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cita = await citaRepository.findById(Number(id));
  if (cita) {
    res.json(cita);
  } else {
    res.status(404).json({ error: 'Cita not found' });
  }
};

export const createCita = async (req: Request, res: Response) => {
  const { doctorId, pacienteId, fecha, hora, sintomas } = req.body;
  const newCita = await citaRepository.create({ doctorId, pacienteId, fecha, hora, sintomas });
  res.status(201).json(newCita);
};

export const updateCita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { doctorId, pacienteId, fecha, hora, sintomas } = req.body;
  const updatedCita = await citaRepository.update(Number(id), { doctorId, pacienteId, fecha, hora, sintomas });
  if (updatedCita) {
    res.json(updatedCita);
  } else {
    res.status(404).json({ error: 'Cita not found' });
  }
};

export const deleteCita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedCita = await citaRepository.delete(Number(id));
  if (deletedCita) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Cita not found' });
  }
};
