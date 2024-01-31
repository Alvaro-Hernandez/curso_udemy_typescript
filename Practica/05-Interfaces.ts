// Interfaces
// Que es?
// Las interfaces son un conjunto de reglas que determinan el comportamiento de los objetos para poder ser utilizados
interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  isCasado: boolean;
  running(): boolean;
}

// Este modelo nos sirve para crear un objeto de tipo Persona
// Tenemos que respetar  los parametros de la interface para que no arroje un error

let persona1: Persona = {
  nombre: "Alvaro",
  apellido: "Hernandez",
  edad: 21,
  isCasado: false,
  running() {
    return true;
  },
};

// Imprimir el objeto
// console.table(persona1);

// Clase - Usando la clausa implements para implementar la interface
// Tenemos que respetar  los parametros de la interface para que no arroje un error
// Pero como podemos ver hemos agregado un nuevo parametro pero en la clase, pero que no esta en la interface pero no da error
// Ya que el nuevo parametro no es parte de la interface
class Personas implements Persona {
  nombre: string;
  apellido: string;
  edad: number;
  isCasado: boolean;
  empleo: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    isCasado: boolean,
    empleo: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.isCasado = isCasado;
    this.empleo = empleo;
  }

  public running(): boolean {
    return true;
  }
}

// Interfaces en funciones
// esta interfaz nos permite retornar un valor boolean
interface Movimiento {
  (valor: boolean): boolean;
}

// Creamos una variable de tipo Movimiento
let pajaro: Movimiento;
// El valor de la variable de tipo Movimiento es una funcion
// La cual retorna un valor boolean
pajaro = function (valor: boolean): boolean {
  return valor;
};

// Imprimir el objeto
// console.log(pajaro(false));
