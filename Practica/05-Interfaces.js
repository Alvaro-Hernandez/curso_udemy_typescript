// Este modelo nos sirve para crear un objeto de tipo Persona
// Tenemos que respetar  los parametros de la interface para que no arroje un error
var persona1 = {
    nombre: "Alvaro",
    apellido: "Hernandez",
    edad: 21,
    isCasado: false,
    running: function () {
        return true;
    },
};
// Imprimir el objeto
// console.table(persona1);
// Clase - Usando la clausa implements para implementar la interface
// Tenemos que respetar  los parametros de la interface para que no arroje un error
// Pero como podemos ver hemos agregado un nuevo parametro pero en la clase, pero que no esta en la interface pero no da error
// Ya que el nuevo parametro no es parte de la interface
var Personas = /** @class */ (function () {
    function Personas(nombre, apellido, edad, isCasado, empleo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.isCasado = isCasado;
        this.empleo = empleo;
    }
    Personas.prototype.running = function () {
        return true;
    };
    return Personas;
}());
// Creamos una variable de tipo Movimiento
var pajaro;
// El valor de la variable de tipo Movimiento es una funcion
// La cual retorna un valor boolean
pajaro = function (valor) {
    return valor;
};
// Imprimir el objeto
// console.log(pajaro(false));
