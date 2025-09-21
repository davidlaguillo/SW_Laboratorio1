const usuarios = [
  { nombre: "Ana", activo: true },
  { nombre: "Markel", activo: false },
  { nombre: "Ainhoa", activo: true }
];

let resultado = usuarios
  .filter(item => item.activo)
  .map(item => item.nombre)
  .sort();

console.log(resultado);