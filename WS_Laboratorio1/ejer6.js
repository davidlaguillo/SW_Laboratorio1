let contador = {

  cont: 0,

  siguiente() {
    return this.cont++;
  }
};

console.log(contador.siguiente());
console.log(contador.siguiente());
console.log(contador.siguiente());