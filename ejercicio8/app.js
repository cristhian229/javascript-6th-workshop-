function contador(numInicial) {
    function sumar(numero) {
        let contar = numero + numInicial;
        return contar;
    }
    return sumar;
}

while (true) {
    const accion = prompt(
        "Escribe 'i' para inicializar el contador, o 's' para salir:"
    );

    if (accion === "i") {
        const usercount = Number(
            prompt("en que numero desea inicializar el contador? ")
        );
        let contadorUsuario = contador(usercount);

        let añadir = Number(prompt("cuanto desea añadirle al contador? "));

        alert(contadorUsuario(añadir));
    }else if (accion === 's') {
     alert("Saliendo...");
      break;
    }
}


