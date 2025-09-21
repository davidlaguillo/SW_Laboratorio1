const frases = [
  "Es el alcalde el que quiere que sean los vecinos el alcalde",
  "Un vaso es un vaso y un plato es un plato",
  "Una cosa es ser solidario y otra cosa es serlo a cambio de nada",
  "It is very difficult todo esto",
  "Me gustan los catalanes porque hacen cosas",
  "Dije que bajaría los impuestos y los estoy subiendo",
  "¿Ustedes piensan antes de hablar o hablan tras pensar?"
];

let resultado = frases
  .reverse()
  .filter(frase => frase.length < 45)
  .map(frase => frase.toUpperCase());

console.log(resultado);