const sumar = function(num1,num2) {
  // let res = num1 + num2;
  return num1 + num2
}


class Persona {
  constructor(nombre,edad) {
    (this.nombre = nombre), (this.edad = edad)
  }
  hablar (){
    console.log(`${this.nombre} está hablando`)
  }
}

let juan = new Persona ('Juan', 25);
let pablo = new Persona('Pablo', 30);

class Profesor extends Persona {
  constructor(nombre, edad, tipo){
    super(nombre,edad);
    this.tipo = tipo;
  }
  tipoFormateado () {
    return `Tiop de contratación ${this.tipo}`
  }
}