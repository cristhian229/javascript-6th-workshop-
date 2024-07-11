// Macrotareas: setTimeout, I/O tasks, setInterval

// Microtareas: Promesas (Promise.then), queueMicrotask.

// El event loop maneja la ejecución de código observando las colas de macrotareas y microtareas. Primero ejecuta todas las tareas del call stack. Luego, ejecuta todas las microtareas en la cola antes de mover la siguiente macrotarea desde la cola de macrotareas al call stack.

// La nueva macrotarea se coloca en la cola de macrotareas y se ejecutará después de que todas las microtareas actuales y las macrotareas previas se hayan completado.

// Las promesas se manejan como microtareas y se ejecutan inmediatamente después de que el código síncrono actual haya terminado.

// Los setTimeout se manejan como macrotareas y se colocan en la cola de macrotareas después de que el temporizador haya expirado. Se ejecutan después de que todas las microtareas actuales hayan sido ejecutadas.