// Funciones en TypeScript
// La diferencia con las de JS es que estas estan tipadas y podemos definir que pueden devolver en este caso
// Reciben un parametro string y debe retornar un string
//Funciones declaradas
function saludo(frase) {
    return "".concat(frase);
}
// console.log(saludo("Hola Mileydi"));
// Funciones expresadas
var adios = function (despedida) {
    return "".concat(despedida);
};
// console.log(adios("Hasta pronto"));
// Funcion flecha
var salto = function (posY, posX) {
    return posY + posX;
};
// console.log(salto(30, 20));
// Funcion flecha que retorna un String, usando template string
var suma = function (num1, num2) {
    return "".concat(num1 + num2);
};
// console.log(suma(1, 2));
// Parametros opcionales o por defecto
function salto2(posY, posX) {
    if (posY === void 0) { posY = 30; }
    return posY;
}
// console.log(salto2());
// Funcion pasando arrays por medio del operador res "..."
function animales() {
    var listaAnimales = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listaAnimales[_i] = arguments[_i];
    }
    return listaAnimales;
}
console.log(animales("Perro", "Pato", "Gato", "Elefante", "Cebra"));