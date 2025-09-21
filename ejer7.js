const cesta = [
 { nombre: "manzana", precio: 2.50, cantidad: 3 },
 { nombre: "naranja", precio: 3.60, cantidad: 0 },
 { nombre: "plátano", precio: 2.69, cantidad: 2 }
];

let total = cesta
  .map(item => item.precio * item.cantidad)
  .reduce((acum, subtotal) => acum + subtotal, 0);

console.log(total.toFixed(2));