import express from 'express';
import { PrismaClient } from '@prisma/client';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear un enrutador de Express
const router = express.Router();

// Cita routes
router.get('/', async (req, res) => {
  const citas = await prisma.cita.findMany({
    where: { estado: 'ACTIVO' }
  });
  res.json(citas);
});

router.post('/', async (req, res) => {
  const { doctorId, pacienteId, sintomas } = req.body;
  const cita = await prisma.cita.create({
    data: {
      doctorId,
      pacienteId,
      sintomas
    }
  });
  res.json(cita);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { doctorId, pacienteId, sintomas, estado } = req.body;
  const cita = await prisma.cita.update({
    where: { id: Number(id) },
    data: {
      doctorId,
      pacienteId,
      sintomas,
      estado
    }
  });
  res.json(cita);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const cita = await prisma.cita.update({
    where: { id: Number(id) },
    data: { estado: 'ELIMINADO' }
  });
  res.json(cita);
});

// Exportar el enrutador para que pueda ser utilizado en otros archivos
export { router as citaRoutes };
