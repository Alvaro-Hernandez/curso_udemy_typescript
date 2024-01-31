// Importamos el nameSpace
///<reference path="./02-Clases.ts" />

/* The code is iterating over each element in the `listaBloque` array of the `Clases` namespace. For
each element, it adds an event listener to the `document` object for the "keydown" event. When a key
is pressed, it checks the value of the `event.key` property. If the key is "ArrowRight", it
increments the `posX` property of the current `bloque` object by 5. If the key is "ArrowLeft", it
decrements `posX` by 5. If the key is "ArrowUp", it decrements `posY` by 5. If the key is
"ArrowDown", it increments `posY` by 5. This code allows for moving the `bloque` objects on the
screen using the arrow keys. */
Clases.listaBloque.map((bloque) => {
  document.addEventListener("keydown", (event) => {
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
