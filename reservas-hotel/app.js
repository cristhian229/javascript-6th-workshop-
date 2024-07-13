// Ruta del archivo data.json
const url = "http://localhost:3000/data"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
    // Retorna una nueva promesa que se resuelve después del setTimeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Realiza la solicitud fetch dentro del setTimeout
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then((data) => {
                    // console.log("Habitaciones:", data.rooms);
                    console.log("Tipos de Habitaciones:", data.roomTypes);
                    resolve(data); // Resuelve la promesa con los datos cargados
                })
                .catch((error) => {
                    console.error(error);
                    reject(error); // Rechaza la promesa si hay un error
                });
        }, 1000);
    });
}

const simularWhile = async function(){
    const {rooms,roomTypes} = await cargarYMostrarData()
        let opcion = Number(prompt("Ingrese el número de la opción correspondiente a la accion que desea realizar" + 
                                        "\n1.Realiza reserva" + 
                                        "\n2.Ver reservas" +
                                        "\n3.Cancelar reserva" + 
                                        "\n4.Editar reservas" +
                                        "\n5.Salir"))
        
        switch(opcion){
            case 1:
                alert("Generar reserva")
                generarReserva(rooms,roomTypes)
                simularWhile()
                break
            case 2:
                alert("Ver reservas")
                verReservasActuales()
                simularWhile()
                break
            case 3:
                alert("Cancelar reservas")
                verReservasActuales()
                cancelarReserva()
                simularWhile()
                break
            case 4:
                alert("Editar reservas")
                verReservasActuales()
                editarReserva()
                simularWhile()
                break
            case 5:
                alert("Gracias por usar nuestro sistema")
                break
            default:
                alert("El número ingresado es inválido")
                simularWhile()
        }
}
simularWhile()


const GenerarIdReserva = function () {
    let contId = 0;
    return function () {
        contId++;
        return contId;
    };
};

let idReserva = GenerarIdReserva();

// Llamar a la función para cargar y mostrar el contenido de data.json
// cargarYMostrarData()
//     .then(({ rooms, roomTypes }) => {
//         // Mostrar el contenido de las habitaciones después de cargar los datos

//         // ... Continuar con la lógica de la app
//         while (true) {
//             const userInput = prompt(
//                 "Ingresa la opcion que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Salir"
//             );
//             switch (userInput) {
//                 case "1":
//                     const userInput2 = prompt(
//                         "Ingrese el numero de habitacion a reservar: " +
//                             rooms
//                                 .map((room) => {
//                                     return `\nRoom Number: ${room.number} (${
//                                         roomTypes.find(
//                                             (type) =>
//                                                 type.id === room.roomTypeId
//                                         ).name
//                                     })`;
//                                 })
//                                 .join(", ")
//                     );
//                     break;
//                 case "2":
//                     // Lógica para ver reservas actuales
//                     break;
//                 case "3":
//                     // Lógica para cancelar reservas
//                     break;
//                 case "4":
//                     // Salir del programa
//                     return;
//                 default:
//                     console.log("Opción inválida. Inténtalo de nuevo.");
//             }
//         }
//     })
//     .catch((error) => {
//         console.error("Error al manejar la promesa:", error);
//     });
