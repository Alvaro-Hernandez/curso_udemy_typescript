// Funciones en TypeScript
// La diferencia con las de JS es que estas estan tipadas y podemos definir que pueden devolver en este caso
// Reciben un parametro string y debe retornar un string
//Funciones declaradas
function saludo(frase: string): string {
  return `${frase}`;
}

// console.log(saludo("Hola Mileydi"));

// Funciones expresadas
const adios = function (despedida: string): string {
  return `${despedida}`;
};

// console.log(adios("Hasta pronto"));

// Funcion flecha
const salto = (posY: number, posX: number): number => {
  return posY + posX;
};

// console.log(salto(30, 20));

// Funcion flecha que retorna un String, usando template string
const suma = (num1: number, num2: number): string => {
  return `${num1 + num2}`;
};

// console.log(suma(1, 2));

// Parametros opcionales o por defecto
function salto2(posY: number = 30, posX?: number): number {
  return posY;
}
// console.log(salto2());

// Funcion pasando arrays por medio del operador res "..."
function animales(...listaAnimales: string[]): string[] {
  return listaAnimales;
}

console.log(animales("Perro", "Pato", "Gato", "Elefante", "Cebra"));
