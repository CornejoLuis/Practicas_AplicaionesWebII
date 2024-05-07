//Creamos las entidad Cita con los atributos necesarios, además de agregar el campo estado (booleano).
import mongoose, { Schema, Document } from 'mongoose';
import { IDoctor } from './Doctor';
import { IPaciente } from './Paciente';

export interface ICita extends Document {
  doctor: IDoctor['_id'];
  paciente: IPaciente['_id'];
  date: Date;
  state: boolean;
}

const CitaSchema: Schema = new Schema({
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  paciente: { type: Schema.Types.ObjectId, ref: 'Paciente', required: true },
  date: { type: Date, required: true },
  state: { type: Boolean, default: true },
});

export default mongoose.model<ICita>('Cita', CitaSchema);
