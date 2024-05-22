import express from 'express';
import { PrismaClient } from '@prisma/client';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear un enrutador de Express
const router = express.Router();

router.get('/', async (req, res) => {
  const doctor = await prisma.doctor.findMany({
    where: { estado: 'ACTIVO' }
  });
  res.json(doctor);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const doctor = await prisma.doctor.findUnique({
    where: { id: Number(id) }
  });
  res.json(doctor);
});

router.post('/', async (req, res) => {
  const { nombre, identificacion } = req.body;
  const doctor = await prisma.doctor.create({
    data: { nombre, identificacion }
  });
  res.json(doctor);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, identificacion, estado } = req.body;
  const doctor = await prisma.doctor.update({
    where: { id: Number(id) },
    data: { nombre, identificacion, estado }
  });
  res.json(doctor);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const doctor = await prisma.doctor.update({
    where: { id: Number(id) },
    data: { estado: 'ELIMINADO' }
  });
  res.json(doctor);
});


// Exportar el enrutador para que pueda ser utilizado en otros archivos
export { router as doctorRoutes };
