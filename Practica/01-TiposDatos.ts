//Para compilar un archivo de ts y que a su vez podamos ver sus cambios en tiempo real podemos ejecutar en el cmd
//tsc <<Nombre del archivo>> --watch o tsc <<Nombre del archivo>> -w

// Al tener compilando el archivo ts nos crea un archivo .js
// Y este nos muestra los cambios en tiempo real de TypeScript a JavaScript
const mensaje: string = "Hola mundo";
//console.log(mensaje);

// Tipos de datos
// --Booleanos
let esHombre: boolean = true;
//console.log(typeof esHombre);

// Number(Enteros y decimales)
let numero: number = 10;
// Al querer intentar cambiar su valor por un string nos arroja un error
// El tipo 'string' no se puede asignar al tipo 'number'.
//numero = "35";
numero = 35;

// String
let nombre: string = "Alvaro";
// console.log(typeof nombre);

// Any(Cualquier tipo)
let variable: any = 10;
// Al cambiar el valor a string nos deja hacer el cambio ya que el tipo es any por lo que no nos arroja un error
variable = "Hola";

// Tuplas y Array
// Array
let lista: string[] = ["uno", "dos", "tres"];
// Tupla
// La tupla nos permite definir el orden de los elementos y sus tipos
// Al no poner los tipos de los elementos nos arroja un error
let tupla: [string, number, boolean] = ["uno", 1, true];

// Añadir elementos a la tupla - Deberia devolver un error pero no lo hace
tupla.push("Nuevo");
// console.table(tupla);

// Al añadir un dato en el array es mas stricto, debe ser del mismo tipo o dara un error
// Error: No se puede asignar un argumento de tipo "number" al parámetro de tipo "string"
// lista.push(5);
lista.push("cuatro");
// console.table(lista);

// Enumerables o ENUM
// Los enumerables nos permiten definir los valores de los elementos de un enumerable
enum Color {
  Rojo = 1,
  Verde = 2,
  Azul = 3,
  Amarillo = 4,
  Negro = 5,
}
// Si no les pongo un valor a los enum los toma como 0, 1, 2, 3, 4, 5, pero si cambio este valor cambiara en
// el enum al valor que pongamos
// Los enumerables nos permiten saber la posicion de un elemento
let posicion: number = Color.Amarillo;
// console.log(posicion);

// Void - No retorna nada
// Cuando usamos void la usamos cuando no queremos retornar nada
function saludar(): void {
  console.log("Hola");
}
// saludar();

// Never - No retorna nada nunca
// Cuando usamos never la usamos cuando no queremos retornar nada nunca
function error(frase: string): never {
  throw new Error(frase);
}
// error("No funciona");

// Null y Undefined
// El tipo de null y undefined son sub-tipos de any
// Es Undifined cuando no se le ha asignado un valor
// Es Null cuando se le ha asignado un valor
// Su diferencia es que es null cuando no se le ha asignado un valor y es undefined cuando se le ha asignado un valor
let variableNull: null = null;
let variableUndefined: undefined = undefined;
// console.log(variableNull);
// console.log(variableUndefined);
