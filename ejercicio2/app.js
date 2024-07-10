// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};


// Las variables declaradas con var son izadas (hoisted) al comienzo de su contexto de ejecución (ya sea la función o el ámbito global), pero su asignación inicial (var a = 1;) permanece en su lugar original. Por lo tanto, al hacer console.log("Valor de a:", a);, a existe pero tiene el valor undefined antes de ser inicializado con 1.



// Las variables declaradas con let y const también se izan al principio del bloque, pero a diferencia de var, no pueden ser accedidas antes de su declaración. Por eso, console.log("Valor de b:", b); y console.log("Valor de c:", c); arrojan un ReferenceError porque b y c no están inicializados ni asignados antes de sus respectivas declaraciones.



// Las funciones declaradas (function funcionDeclarada() { ... }) son completamente izadas al principio de su contexto de ejecución, lo que significa que puedes llamarlas antes de su declaración y funcionarán correctamente. Por eso, funcionDeclarada() se ejecuta sin problemas.


// Las funciones expresadas (asignadas a una variable constante como const funcionExpresada = function () { ... };) también son izadas, pero solo la variable (funcionExpresada) se define inicialmente como undefined. Por lo tanto, al intentar ejecutar funcionExpresada(), obtienes un TypeError porque estás intentando llamar undefined como una función.