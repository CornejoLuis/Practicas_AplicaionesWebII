// Definir objeto Cita
export interface ICita {
    id: number;
    fecha: string;
    hora: string;
    sintomas: string;
    pacienteId: number;
    doctorId: number;
  }
  
  // Definir objeto Doctor
  export interface IDoctor {
    id: number;
    nombre: string;
    identificacion: string;
  }
  
  // Definir objeto Paciente
  export interface IPaciente {
    id: number;
    nombre: string;
    identificacion: string;
  }