class ArrayOrdenado {

  constructor(comparador) {
    this.comparador = comparador;
    this.contenido = [];
  }

  findPos = (elt) => {
    const index = this.contenido.findIndex(item => this.comparador(elt, item) < 0);
    return index === -1 ? this.contenido.length : index;
  }

  insert = (elt) => {
    this.contenido.splice(this.findPos(elt), 0, elt);
  }
}

const ordenado = new ArrayOrdenado((a, b) => a - b);
ordenado.insert(5);
ordenado.insert(1);
ordenado.insert(2);
ordenado.insert(4);
ordenado.insert(3);

console.log("array:", ordenado.contenido); 
