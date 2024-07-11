const userTimer = Number(prompt("ingrese en cuantos milisegundos iniciar el programa "));


async function bring(){
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await response.json()
    console.log(data);
    }
    catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

setTimeout(bring,userTimer)



