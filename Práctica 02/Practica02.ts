//Usaremos Mongoose para conectarnos a MongoDB y agregar algunos registros a cada entidad.
import mongoose from 'mongoose';
import Doctor from './Doctor';
import Paciente from './Paciente';
import Cita from './Cita';

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/clinica', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Ejemplo de creación de registros
async function createEntities() {
  // Crear doctores
  const doctor1 = await Doctor.create({ name: 'Dr. Smith', specialty: 'Cardiologist' });
  const doctor2 = await Doctor.create({ name: 'Dr. Johnson', specialty: 'Dermatologist' });

  // Crear pacientes
  const patient1 = await Paciente.create({ name: 'John Doe', age: 35 });
  const patient2 = await Paciente.create({ name: 'Jane Doe', age: 28 });

  // Crear citas
  await Cita.create({ doctor: doctor1._id, paciente: patient1._id, date: new Date() });
  await Cita.create({ doctor: doctor2._id, paciente: patient2._id, date: new Date() });
}

createEntities().then(() => console.log('Registros creados')).catch(err => console.error(err));

//Creamos funciones para cambiar el estado de una transacción (cita en este caso) a eliminada (false) o recuperarla (true).


export async function eliminarTransaccion(id: string): Promise<void> {
  await Cita.findByIdAndUpdate(id, { state: false });
}

export async function recuperarTransaccion(id: string): Promise<void> {
  await Cita.findByIdAndUpdate(id, { state: true });
}


import mongoose from 'mongoose';
import { eliminarTransaccion, recuperarTransaccion } from './TransaccionService';

mongoose.connect('mongodb://localhost:27017/clinic', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Eliminar una cita
eliminarTransaccion('cita_id').then(() => console.log('Cita eliminada'));

// Recuperar una cita
recuperarTransaccion('cita_id').then(() => console.log('Cita recuperada'));
