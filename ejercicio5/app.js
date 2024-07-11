// 5.1: Definir la función manejarAsincronia
function manejarAsincronia(callback, promesa) {
    // 5.3: Ejecutar el Callback una vez que la promesa se resuelva
    promesa.then(() => {
        callback();
    });
}

// 5.2: Crear la Promesa
function crearPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000); // La promesa se resuelve después de 2 segundos
    });
}

// Definir el callback
function miCallback() {
    console.log("¡Promesa cumplida y callback ejecutado!");
}

// 5.4: Invocar la Función
const promesa = crearPromesa();
manejarAsincronia(miCallback, promesa);

// 5.5: Responder las preguntas

// Si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo,
// el comportamiento será el siguiente:

// - Si se cambia a 5 segundos:
// La promesa se resolverá después de 5 segundos y el callback se ejecutará
// después de este tiempo. Por lo tanto, el mensaje "¡Promesa cumplida y callback ejecutado!"
// aparecerá en la consola después de 5 segundos.

// - Si se cambia a 1 segundo:
// La promesa se resolverá después de 1 segundo y el callback se ejecutará
// después de este tiempo. Por lo tanto, el mensaje "¡Promesa cumplida y callback ejecutado!"
// aparecerá en la consola después de 1 segundo.

// ¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos?

// La promesa se resolverá después de 5 segundos y el callback se ejecutará después de este tiempo. Por lo tanto, el mensaje "¡Promesa cumplida y callback ejecutado!" aparecerá en la consola después de 5 segundos.
// ¿Qué sucede si cambias el tiempo de resolución de la promesa a 1 segundo?

// La promesa se resolverá después de 1 segundo y el callback se ejecutará después de este tiempo. Por lo tanto, el mensaje "¡Promesa cumplida y callback ejecutado!" aparecerá en la consola después de 1 segundo.