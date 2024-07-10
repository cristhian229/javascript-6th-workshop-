function crearSumador(numeroInicial) {
  // Definición de la función interna que utiliza el closure
  function sumar(numero) {
    return numeroInicial + numero;
  }

  // Retorna la función interna
  console.log(sumar);
  return sumar;
  
}
// closure es una funcion que ejecuta el contexto del padre

// Invocación de crearSumador con un número específico
const sumarCinco = crearSumador(5);  //sumar cinco es una variable que esta almacenando la funcion sumar(numero) porque eso es lo que estamos retornando en crearSumador
console.log(sumarCinco);
console.log(sumarCinco());
// Uso de sumarCinco para sumar otro número
const resultado = sumarCinco(3);

console.log(resultado); // Output: 8



document.getElementById("hola").addEventListener("click",)

