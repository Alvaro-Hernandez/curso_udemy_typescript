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
console.log(typeof nombre);

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
