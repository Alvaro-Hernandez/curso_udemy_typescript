// Los namespaces nos permiten agrupar clases en un solo archivo y acceder a ellas desde otro archivo
namespace Clases {
  class Bloque {
    public posX: number;
    public posY: number;
    public ancho: number;
    public alto: number;
    public color: string;

    constructor(
      posX: number,
      posY: number,
      ancho: number,
      alto: number,
      color: string
    ) {
      this.posX = posX;
      this.posY = posY;
      this.ancho = ancho;
      this.alto = alto;
      this.color = color;
    }
    public dibujar() {
      ctx.fillStyle = "#8E0715";
      ctx.fillRect(this.posX, this.posY, this.ancho, this.alto);
    }

    public mover() {
      this.posY += 1;
    }
  }

  export let listaBloque: any[] = [];

  listaBloque.push(new Bloque(32, 0, 32, 32, "#8E0715"));
  listaBloque.push(new Bloque(150, 0, 32, 32, "#8E0715"));
  listaBloque.push(new Bloque(210, 0, 32, 32, "#8E0715"));
  listaBloque.push(new Bloque(280, 0, 32, 32, "#8E0715"));
  listaBloque.push(new Bloque(360, 0, 32, 32, "#8E0715"));
  listaBloque.push(new Bloque(420, 0, 32, 32, "#8E0715"));
  listaBloque.push(new Bloque(560, 0, 32, 32, "#8E0715"));
  listaBloque.push(new Bloque(620, 0, 32, 32, "#8E0715"));
}
