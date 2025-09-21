class Locutor {

  constructor(nombre, verbo = "dice") {
    this.nombre = nombre;
    this.verbo = verbo;
  }

  dice(texto) {
    console.log(`${this.nombre} ${this.verbo} '${texto}'`);
  }
}

class Feriante extends Locutor {
  
  constructor(nombre) {
    super(nombre, "grita");
  }

  dice(texto) {
    super.dice(texto.toUpperCase());
  }
}

new Feriante("Mr. Crecepelo").dice("Me lo quitan de las manos");

let keitel = new Feriante("Sr. Lobo");
console.log(keitel.constructor.name);
