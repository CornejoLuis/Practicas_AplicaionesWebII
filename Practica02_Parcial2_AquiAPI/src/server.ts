import express from 'express';
import dotenv from 'dotenv';
import doctorRoutes from './routes/doctor.routes';
import pacienteRoutes from './routes/paciente.routes';
import citaRoutes from './routes/cita.routes';
import githubRoutes from './routes/github';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', doctorRoutes);
app.use('/api', pacienteRoutes);
app.use('/api', citaRoutes);
app.use('/github', githubRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
