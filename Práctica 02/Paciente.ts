//Creamos las entidad Paciente con los atributos necesarios, además de agregar el campo estado (booleano).
import mongoose, { Schema, Document } from 'mongoose';

export interface IPaciente extends Document {
  name: string;
  age: number;
  state: boolean;
}

const PacienteSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  state: { type: Boolean, default: true },
});

export default mongoose.model<IPaciente>('Paciente', PacienteSchema);
