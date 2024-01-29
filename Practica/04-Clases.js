var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clases
// Las clases en TypeScript nos permiten crear objetos con propiedades y metodos
/* The class "UsuarioPrincipal" represents a user with position, width, and height properties, and has
a method to jump. */
var UsuarioPrincial = /** @class */ (function () {
    function UsuarioPrincial(posX, posY, ancho, alto) {
        this.posX = posX;
        this.posY = posY;
        this.ancho = ancho;
        this.alto = alto;
    }
    UsuarioPrincial.prototype.saltar = function () {
        this.posY += 10;
        return this.posY;
    };
    Object.defineProperty(UsuarioPrincial.prototype, "getAncho", {
        // los getters y setters nos permiten obtener y establecer valores de una propiedad
        get: function () {
            return this.ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UsuarioPrincial.prototype, "setAncho", {
        set: function (ancho) {
            this.ancho = ancho;
        },
        enumerable: false,
        configurable: true
    });
    return UsuarioPrincial;
}());
// Crear un objeto
var user1 = new UsuarioPrincial(10, 20, 30, 40);
// Imprimos en la consola la posicion del usuario - Acceso a propiedades publicas
console.log(user1.posX);
// Imprimos en la consola la posicion del usuario - Acceso a propiedades privadas
// Esta da error por que la propiedad es privada y solo se puede acceder a ella desde dentro de la clase
// console.log(user1.posY);
// Imprimos en la consola la posicion del usuario - Acceso a propiedades protegidas
// Esta da error por que la propiedad es protegida y solo se puede acceder a ella desde dentro de la clase
// Y de las clases heredadas
// console.log(user1.ancho);
// Clase herencia
/* The class "UsuarioSecundario" extends the class "UsuarioPrincipal" and adds a "color" property. */
var UsuarioSecundario = /** @class */ (function (_super) {
    __extends(UsuarioSecundario, _super);
    function UsuarioSecundario(posX, posY, ancho, alto, color) {
        var _this = _super.call(this, posX, posY, ancho, alto) || this;
        _this.color = color;
        return _this;
    }
    // Al crear una funcion que usa la propiedad de la clase padre y la variable protegida
    UsuarioSecundario.prototype.informacion = function () {
        console.log(this.ancho);
    };
    return UsuarioSecundario;
}(UsuarioPrincial));
var user2 = new UsuarioSecundario(5, 5, 5, 5, "red");
// Al llamar la funcion que usa la variable protegida nos deja mostrar el valor de la variable
// Pero de los valores de la clase secundaria
user2.informacion();
