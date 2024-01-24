//Para compilar un archivo de ts y que a su vez podamos ver sus cambios en tiempo real podemos ejecutar en el cmd
//tsc <<Nombre del archivo>> --watch o tsc <<Nombre del archivo>> -w
// Al tener compilando el archivo ts nos crea un archivo .js
// Y este nos muestra los cambios en tiempo real de TypeScript a JavaScript
var mensaje = "Hola mundo";
//console.log(mensaje);
// Tipos de datos
// --Booleanos
var esHombre = true;
//console.log(typeof esHombre);
// Number(Enteros y decimales)
var numero = 10;
// Al querer intentar cambiar su valor por un string nos arroja un error
// El tipo 'string' no se puede asignar al tipo 'number'.
//numero = "35";
numero = 35;
// String
var nombre = "Alvaro";
// console.log(typeof nombre);
// Any(Cualquier tipo)
var variable = 10;
// Al cambiar el valor a string nos deja hacer el cambio ya que el tipo es any por lo que no nos arroja un error
variable = "Hola";
// Tuplas y Array
// Array
var lista = ["uno", "dos", "tres"];
// Tupla
// La tupla nos permite definir el orden de los elementos y sus tipos
// Al no poner los tipos de los elementos nos arroja un error
var tupla = ["uno", 1, true];
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
var Color;
(function (Color) {
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
    Color[Color["Azul"] = 3] = "Azul";
    Color[Color["Amarillo"] = 4] = "Amarillo";
    Color[Color["Negro"] = 5] = "Negro";
})(Color || (Color = {}));
// Si no les pongo un valor a los enum los toma como 0, 1, 2, 3, 4, 5, pero si cambio este valor cambiara en
// el enum al valor que pongamos
// Los enumerables nos permiten saber la posicion de un elemento
var posicion = Color.Amarillo;
// console.log(posicion);
// Void - No retorna nada
// Cuando usamos void la usamos cuando no queremos retornar nada
function saludar() {
    console.log("Hola");
}
// saludar();
// Never - No retorna nada nunca
// Cuando usamos never la usamos cuando no queremos retornar nada nunca
function error(frase) {
    throw new Error(frase);
}
// error("No funciona");
// Null y Undefined
// El tipo de null y undefined son sub-tipos de any
// Es Undifined cuando no se le ha asignado un valor
// Es Null cuando se le ha asignado un valor
// Su diferencia es que es null cuando no se le ha asignado un valor y es undefined cuando se le ha asignado un valor
var variableNull = null;
var variableUndefined = undefined;
// console.log(variableNull);
// console.log(variableUndefined);
