import express from 'express';
import { PrismaClient } from '@prisma/client';
import { citaRoutes } from './routes/citaRoutes';
import { pacienteRoutes } from './routes/pacienteRoutes';
import { doctorRoutes } from './routes/doctorRoutes';
import { HttpServiceUnified } from './HttpService';
// Crear una instancia de HttpServiceUnified
const httpService = new HttpServiceUnified();

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

// Ruta para interactuar con API A
app.get('/api-a/cocineros', async (req, res) => {
    try {
        const response = await httpService.get('http://localhost:3000/cocinero');
        if (response) {
            res.json(response.data || response); // Ajustar según el cliente
        } else {
            res.status(500).json({ error: 'Unable to fetch data from API A' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch data from API A' });
    }
});

// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
    console.log('API B (Doctor) is running on http://localhost:3001');
});
