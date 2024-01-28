// Objetos - Definicion
// Los objetos son una estructura de datos que nos permiten almacenar datos en una estructura de datos

// Crear un objeto
let persona: {
  nombre: string;
  apellido: string;
  edad: number;
  activo(): boolean;
} = {
  nombre: "Alvaro",
  apellido: "Hernandez",
  edad: 21,
  activo() {
    return true;
  },
};

// Tipos o Moldes
type Asignatura = {
  matematicas: boolean;
  lenguaje: boolean;
  ciencias: boolean;
  programacion: boolean;
  fisica: boolean;
  quimica: boolean;
  biologia: boolean;
  activoActual: () => boolean;
};

// Creamos un objeto a partir de un tipo
let Antonio: Asignatura = {
  matematicas: true,
  lenguaje: true,
  ciencias: true,
  programacion: true,
  fisica: true,
  quimica: true,
  biologia: true,
  activoActual() {
    return true;
  },
};

// console.table(Antonio);
