// Los namespaces nos permiten agrupar clases en un solo archivo y acceder a ellas desde otro archivo
var Clases;
(function (Clases) {
    var Bloque = /** @class */ (function () {
        function Bloque(posX, posY, ancho, alto, color) {
            this.posX = posX;
            this.posY = posY;
            this.ancho = ancho;
            this.alto = alto;
            this.color = color;
        }
        Bloque.prototype.dibujar = function () {
            ctx.fillStyle = "#8E0715";
            ctx.fillRect(this.posX, this.posY, this.ancho, this.alto);
        };
        Bloque.prototype.mover = function () {
            this.posY += 1;
        };
        return Bloque;
    }());
    Clases.listaBloque = [];
    Clases.listaBloque.push(new Bloque(32, 0, 32, 32, "#8E0715"));
    Clases.listaBloque.push(new Bloque(150, 0, 32, 32, "#8E0715"));
    Clases.listaBloque.push(new Bloque(210, 0, 32, 32, "#8E0715"));
    Clases.listaBloque.push(new Bloque(280, 0, 32, 32, "#8E0715"));
    Clases.listaBloque.push(new Bloque(360, 0, 32, 32, "#8E0715"));
    Clases.listaBloque.push(new Bloque(420, 0, 32, 32, "#8E0715"));
    Clases.listaBloque.push(new Bloque(560, 0, 32, 32, "#8E0715"));
    Clases.listaBloque.push(new Bloque(620, 0, 32, 32, "#8E0715"));
})(Clases || (Clases = {}));
// Importamos el nameSpace
///<reference path="./02-Clases.ts" />
// console.log(Clases.listaBloque);
// Creamos la escena tomando la referencia del canvas
var canvas = document.querySelector("canvas");
// Luego obtenemos el contexto de la escena para poder dibujar
var ctx = canvas.getContext("2d");
// Luego obtenemos el cuerpo de la ventana
var body = document.querySelector("body");
// Definimos el tamaño de la escena
canvas.width = 800;
canvas.height = 608;
canvas.style.border = "4px solid red";
canvas.style.backgroundColor = "pink";
// Definimos estilos para el body
body.style.backgroundColor = "grey";
body.style.display = "flex";
body.style.justifyContent = "center";
// Creamos el escenario
function PintarEscenario() {
    var escenario = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    // Creamos un for para dibujar la escena y los colores por casilla
    /* The code is using nested for loops to iterate over each element in the `escenario` array. */
    for (var i = 0; i < 19; i++) {
        for (var j = 0; j < 25; j++) {
            if (escenario[i][j] == 0) {
                ctx.fillStyle = "lightblue";
                ctx.fillRect(j * 32, i * 32, 32, 32);
            }
            if (escenario[i][j] == 1) {
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(j * 32, i * 32, 32, 32);
            }
        }
    }
    Clases.listaBloque.map(function (bloque) {
        var coordenadaX = Math.round(bloque.posX / 32);
        var coordenadaY = Math.round(bloque.posY / 31);
        bloque.dibujar();
        if (escenario[coordenadaY][coordenadaX] == 0) {
            bloque.mover();
        }
    });
}
function Principal() {
    requestAnimationFrame(Principal);
    canvas.width = 800;
    canvas.height = 608;
    PintarEscenario();
}
Principal();
// Importamos el nameSpace
///<reference path="./02-Clases.ts" />
/* The code is iterating over each element in the `listaBloque` array of the `Clases` namespace. For
each element, it adds an event listener to the `document` object for the "keydown" event. When a key
is pressed, it checks the value of the `event.key` property. If the key is "ArrowRight", it
increments the `posX` property of the current `bloque` object by 5. If the key is "ArrowLeft", it
decrements `posX` by 5. If the key is "ArrowUp", it decrements `posY` by 5. If the key is
"ArrowDown", it increments `posY` by 5. This code allows for moving the `bloque` objects on the
screen using the arrow keys. */
Clases.listaBloque.map(function (bloque) {
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowRight":
                bloque.posX += 5;
                break;
            case "ArrowLeft":
                bloque.posX -= 5;
                break;
            case "ArrowUp":
                bloque.posY -= 5;
                break;
            case "ArrowDown":
                bloque.posY += 5;
                break;
        }
    });
});
