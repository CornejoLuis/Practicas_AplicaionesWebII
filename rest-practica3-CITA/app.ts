import express from 'express';
import { PrismaClient } from '@prisma/client';
import { citaRoutes } from './routes/citaRoutes';
import { pacienteRoutes } from './routes/pacienteRoutes';
import { doctorRoutes } from './routes/doctorRoutes';


// Crear una instancia del cliente Prisma
const prisma = new PrismaClient();
// Crear una instancia de la aplicación Express
const app = express();

// Middleware para analizar las solicitudes JSON
app.use(express.json());

// Usar las rutas definidas en otros archivos
app.use('/cita', citaRoutes);
app.use('/paciente', pacienteRoutes);
app.use('/doctor', doctorRoutes);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});




