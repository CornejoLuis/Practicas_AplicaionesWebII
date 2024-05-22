import express from 'express';
import { PrismaClient } from '@prisma/client';

// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear un enrutador de Express
const router = express.Router();

// Paciente routes
router.get('/', async (req, res) => {
  const pacientes = await prisma.paciente.findMany({
    where: { estado: 'ACTIVO' }
  });
  res.json(pacientes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const paciente = await prisma.paciente.findUnique({
    where: { id: Number(id) }
  });
  res.json(paciente);
});

router.post('/', async (req, res) => {
  const { nombre, identificacion } = req.body;
  const paciente = await prisma.paciente.create({
    data: { nombre, identificacion }
  });
  res.json(paciente);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, identificacion, estado } = req.body;
  const paciente = await prisma.paciente.update({
    where: { id: Number(id) },
    data: { nombre, identificacion, estado }
  });
  res.json(paciente);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const paciente = await prisma.paciente.update({
    where: { id: Number(id) },
    data: { estado: 'ELIMINADO' }
  });
  res.json(paciente);
});


// Exportar el enrutador para que pueda ser utilizado en otros archivos
export { router as pacienteRoutes };

