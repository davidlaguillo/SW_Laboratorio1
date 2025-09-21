let numeros = [3, 7, 10, 15, 20, 25, 30];

numeros.splice(0,2);

let res = numeros
  .filter(item => item > 15)
  .map(item => item / 2)
  .reduce((acum, item) => acum + item, 0);

console.log(res);