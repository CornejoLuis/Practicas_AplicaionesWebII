//Importamos las interfacez creadas en el archivo "Interfaz01.ts"
import { ICita } from './InterfazP01';
import { IDoctor } from './InterfazP01';
import { IPaciente } from './InterfazP01';

// Crear un arreglo de objetos de citas
  const citas: ICita[] = [
    { id: 1, fecha: "2024-04-30", hora: "20:08", sintomas: "Fiebre", pacienteId: 1, doctorId: 1 },
    { id: 2, fecha: "2024-05-01", hora: "20:08", sintomas: "Fiebre", pacienteId: 2, doctorId: 2 },
    { id: 3, fecha: "2024-05-02", hora: "20:08", sintomas: "Fiebre", pacienteId: 3, doctorId: 1 }
  ];

//Creamor un arreglo de objetos de doctor
const Doctor: IDoctor[] = [
    { id: 1, nombre: "Juan", identificacion: "0000001" },
    { id: 2, nombre: "Carlos", identificacion: "0000002" },
    { id: 3, nombre: "Luis", identificacion: "0000003" }
  ];

//Creamor un arreglo de objetos de paciente
const paciente: IPaciente[] = [
    { id: 1, nombre: "Pedro", identificacion: "1000001" },
    { id: 2, nombre: "Rey", identificacion: "1000002" },
    { id: 3, nombre: "Mar", identificacion: "1000003" }
  ];
  
//Ahora, creemos la función para eliminar un elemento del arreglo según un ID:
// Función para eliminar elemento del arreglo por ID
function eliminarElementoPorId<T extends { id: number }>(arr: T[], id: number): T | undefined {
    const index = arr.findIndex(item => item.id === id);
    if (index !== -1) {
      const deletedItem = arr.splice(index, 1)[0];
      return deletedItem;
    }
  }
  
  // Probemos la función
  const deletedCita = eliminarElementoPorId(citas, 2);
  console.log("Elemento eliminado:", deletedCita);
  console.log("Arreglo actualizado:", citas);

  
 //A continuación, agreguemos un callback a la función para mostrar el elemento eliminado:
 // Función para eliminar elemento del arreglo por ID con Callback
function eliminarElementoPorIdConCallback<T extends { id: number }>(
    arr: T[],
    id: number,
    callback: (deletedItem: T | undefined) => void
  ): void {
    const index = arr.findIndex(item => item.id === id);
    if (index !== -1) {
      const deletedItem = arr.splice(index, 1)[0];
      callback(deletedItem);
    }
  }
  
  // Probemos la función con un callback
  eliminarElementoPorIdConCallback(citas, 1, deletedCita => {
    console.log("Elemento eliminado:", deletedCita);
    console.log("Arreglo actualizado:", citas);
  });

  
//Por último, busquemos un servicio REST de acceso libre en internet y validemos su respuesta:
// Definir interfaz para la respuesta del servicio REST
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  // URL del servicio REST
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
  // Función para hacer la solicitud a la API y validar la respuesta
  async function fetchDataAndValidate(): Promise<void> {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data: Post = await response.json();
      console.log("Respuesta de la API:", data);
      // Aquí puedes hacer más validaciones si es necesario
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Llamada a la función para probarla
  fetchDataAndValidate();
  


