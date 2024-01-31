// Genericos
// Los genericos en typeScript nos permiten definir un tipo de dato que puede ser reemplazado por otro tipo de dato
// Ejemplo
// Los genericos son: <T>
function saludar() {
    return "Hola mundo";
}
// Si queremos usar la funcion floor en el console.log nos arroja un error ya que es un tipo string no es un number
// console.log(saludar().floor());
// Forma correcta
// console.log(saludar());
