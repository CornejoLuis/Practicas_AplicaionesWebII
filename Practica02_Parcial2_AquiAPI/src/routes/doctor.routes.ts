import { Router } from 'express';
import { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } from '../controllers/doctor.controller';

const router = Router();

router.get('/doctores', getDoctors);
router.get('/doctores/:id', getDoctorById);
router.post('/doctores', createDoctor);
router.put('/doctores/:id', updateDoctor);
router.delete('/doctores/:id', deleteDoctor);

export default router;
