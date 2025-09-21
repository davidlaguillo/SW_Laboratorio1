class Punto {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  suma(p1) {
    return new Punto(this.x + p1.x, this.y + p1.y);
  }
}

console.log(new Punto(1,2).suma(new Punto(2,1)))

