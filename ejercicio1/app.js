// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

let answer1 = prompt("es posible acceder a una variable global desde cualquier parte del codigo? responda si o no ")
let answer2 = prompt("es posible acceder a una variable local desde cualquier parte del codigo? responda si o no ")
let answer3 = prompt("es posible acceder a una variable bloque desde cualquier parte del codigo? responda si o no ")

switch (answer1) {
  case "si":
    console.log("correcto");
    break;

  case "no":
    console.log("Incorrecto, Las variables declaradas en el global scope son accesibles desde cualquier parte del código, incluyendo dentro de funciones u otros bloques");
    break;

  default:
    console.log("No ingresaste una respuesta valida");
    break;
}

switch (answer2) {
  case "no":
    console.log("correcto");
    break;

  case "si":
    console.log("Incorrecto, Las variables declaradas dentro de una función usando var (o let y const desde ES6) son locales a esa función, lo que significa que solo son accesibles dentro de esa función y no desde fuera.");
    break;

  default:
    console.log("No ingresaste una respuesta valida");
    break;
}
switch (answer3) {
  case "no":
    console.log("correcto");
    break;

  case "si":
    console.log("Incorrecto, El block scope se refiere al ámbito creado por un par de llaves {} dentro del código, como en una estructura condicional if, un bucle for, o cualquier bloque {} dentro de una función.");
    break;

  default:
    console.log("No ingresaste una respuesta valida");
    break;
}