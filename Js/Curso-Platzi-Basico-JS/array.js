var frutas = ["manzana", "banana", "pera", "naranja"];

// .push nos ayuda a agregar elementos
var masfrutas = frutas.push("fresa");

// .pop nos ayuda a quitar el ultimo elemento
var ultimo = frutas.pop();

// .push nos ayuda a agregar elemento al inicio
var nuevaLongitud = frutas.unshift("piña");

// .shift nos ayuda a quitar el primer elemento
var borrar = frutas.shift("piña");

// .indexOf nos ayuda a saber la posicion
var posicion = frutas.indexOf("pera");


//impirmir en consola
console.log(frutas);

//imprimir en consola la posicion
console.log("la posicion es: " + posicion);

//impirmir longitud
console.log("la longitud es: " + frutas.length);

//acceder a un elemento
console.log(frutas[0]);
