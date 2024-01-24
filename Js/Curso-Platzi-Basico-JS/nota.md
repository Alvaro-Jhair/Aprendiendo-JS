El motor JS V8
Resumen Aquí dejo un video por si quieren profundizar Link Una vez que Chrome recibe el código o los scripts javascript en la página web, el motor JS V8 comienza a analizarlo. Primero, analizará parcialmente el código comprobando errores de sintaxis. Si no encuentra ninguno, comienza a leer el código de arriba a abajo. Su objetivo final es convertir el código javascript en código de máquina que la computadora pueda entender. Pero antes de comprender qué hace exactamente con el código, debemos comprender el entorno en el que se analiza.

Event Loop
Tarea asignada para mover del Tas Queue al Stack, Solo si el Stack esta vacío

Memory Heap (Montón)
Donde se almacena los valores de las variables y las funciones
Se destina un espacio en memoria para las variables.
La información en el memory heap, No se guarda de manera lineal
EL MONTÓN

El primer contenedor en el entorno, que también forma parte del motor V8 JS Engine, se denomina "montón de memoria". A medida que el motor JS V8 encuentra variables y declaraciones de funciones en el código, las almacena en el montón .

Call Stack (Pila) = El ultimo que entra es el primero en salir
Como se mandan a llamar las variables y las funciones
Las tareas en el callstack se apilan de abajo hacia arriba.
Se llaman de la última que mandamos a llamar hacia abajo
En la base de la pila reposa el Global Object
Si una función llama a otra, la pone encima de la pila.
Se ejecuta una tarea a la vez (sincronía)
Una vez que se van ejecutando las tareas se van retirando de la pila
Al ejecutar todas las tareas se retira el Global object.
LA PILA

El segundo contenedor en el entorno se denomina "pila de llamadas". También es parte del motor JS V8. Cuando JS Engine encuentra un elemento procesable, como una llamada a función, lo agrega a la pila .

Task Queue (Cola) = El primer que entra es el primero en salir
Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar el stack (Pila). El stack debe de esta vacío

MicroTask Queue (Micro Tareas)
Las promesas tienen otra forma de ejecutarse y una prioridad superior

Web APIs
JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File reader, DOM

Node: fs, https

Garbage Collection
limpia la memoria de los datos no utilizados para no sobrecargarla y seguir trabajando sin problemas.