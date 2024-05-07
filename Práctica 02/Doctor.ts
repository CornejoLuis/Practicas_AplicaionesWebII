//Creamos las entidad Doctor con los atributos necesarios, además de agregar el campo estado (booleano).
import mongoose, { Schema, Document } from 'mongoose';

export interface IDoctor extends Document {
  name: string;
  specialty: string;
  state: boolean;
}

const DoctorSchema: Schema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  state: { type: Boolean, default: true },
});

export default mongoose.model<IDoctor>('Doctor', DoctorSchema);
