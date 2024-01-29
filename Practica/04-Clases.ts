// Clases
// Las clases en TypeScript nos permiten crear objetos con propiedades y metodos
/* The class "UsuarioPrincipal" represents a user with position, width, and height properties, and has
a method to jump. */
class UsuarioPrincial {
  public posX: number;
  private posY: number;
  protected ancho: number;
  protected alto: number;
  constructor(posX: number, posY: number, ancho: number, alto: number) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
  }

  public saltar(): number {
    this.posY += 10;
    return this.posY;
  }

  // los getters y setters nos permiten obtener y establecer valores de una propiedad
  protected get getAncho(): number {
    return this.ancho;
  }

  private set setAncho(ancho: number) {
    this.ancho = ancho;
  }
}

// Crear un objeto
let user1: UsuarioPrincial = new UsuarioPrincial(10, 20, 30, 40);

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
class UsuarioSecundario extends UsuarioPrincial {
  color: string;
  constructor(
    posX: number,
    posY: number,
    ancho: number,
    alto: number,
    color: string
  ) {
    super(posX, posY, ancho, alto);
    this.color = color;
  }

  // Al crear una funcion que usa la propiedad de la clase padre y la variable protegida
  informacion() {
    console.log(this.ancho);
  }
}

let user2: UsuarioSecundario = new UsuarioSecundario(5, 5, 5, 5, "red");
// Al llamar la funcion que usa la variable protegida nos deja mostrar el valor de la variable
// Pero de los valores de la clase secundaria
user2.informacion();
