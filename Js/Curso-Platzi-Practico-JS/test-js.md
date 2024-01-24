## Variables y operaciones


- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.



###  Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre     "string"
Apellido    "string"
Nombre de usuario en Platzi    "string"
Edad   "number"
Correo electrónico   "string"
Mayor de edad   "boolean"
Dinero ahorrado   "number"
Deudas   "number"

###  Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
```js
var nombre = "Alvaro";
var apellido = "Castro";
var nombreUsuario = "AlvaroKiller";
var edad = 30;
var correoElectronico = "qy5hP@example.com";
var esMayorDeEdad = true;
var DineroAhorrado = 1000;
var Deudas = 200;


let nombreCompleto  = nombre + " " + apellido;
let dineroTotal = DineroAhorrado - Deudas;
console.log(nombre, apellido, DineroAhorrado - Deudas);
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

Las funciones nos permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en el futuro.

- ¿Cuándo me sirve usar una función en mi código?

Nos sirve cuando tenemos variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro.

También nos sirve para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

las funciones reciben parámetros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.


//parametros(a,b,c);
```js
function nombreCompleto(name, lastName) { 
    return name + ' ' + lastName 
}

function saludo(name, lastname, username) {
     const completeName = nombreCompleto(name, lastname);
    
     console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");  
}
saludo("alvaro" , "castro", "ALV")
```

## Condicionales

###  Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de código u otro dependien de alguna condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF (else y else if), Switch
El codicional if (con el se y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?

Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.


Replica el comportamiento del siguiente código que usa la sentenci switch utilizando if, else y else if:
```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


let tipo = "Basic";

if (tipo == "Free") {
    console.log("Solo puedes tomar los cusros gratis");
} else if (tipo == "Basic") {
    console.log("Puedes tomar los cursos de Platzi durante un mes");
} else if (tipo == "Expert") {
    console.log("Puedes tomar los cursos de Platzi durante un año");
} else if (tipo == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar los cursos de Platzi durante un año");
}
```


## Ciclos

### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?

While, do while y for.

- ¿Qué es un ciclo infinito y por qué es un problema?

Es cuando la validación de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicación (e.j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).

- ¿Puedo mezclar ciclos y condicionales?

Sí, aunque los ciclos son una especie de condionales, nada nos impide agregar más condionales dentro del ciclo.

```js
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i)
    i++;
}


let e = 10;
while (e >= 2) {
    console.log("El valor de e es: " + e)
    e--;
}
```

//corre por consola de navegador
```js
const pregunta = prompt('¿Cuánto es 2 + 2?');
const respuesta = parseInt(pregunta);

if(respuesta != 4){
    alert("Incorrecto!");
} else {
    alert("¡Felicitaciones es Correcto!");
}
```

//2da opción

```js
while (respuesta != '4') { 
    let pregunta = prompt('¿Cuánto es 2 + 2?') 
    respuesta = pregunta; 
}
```


## Listas

### Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

Es una lista de elementos.
```js
const array = [1, 'jaja', true, false, { nombre: 'lala', edad: 3 }];
```


- ¿Qué es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave.
```js
const obj = { 
    nombre: 'Fulanito', 
    edad: 3, 
    comidasFavoritas: ['Pollo frito', 'vegetales'], 
};
```


- ¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.


```js
let array = ["lima", "chile", "mexico", "peru"];
function imprimir(array) {
    console.log(array[0]);
}
imprimir(array);

function imprimir2(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
imprimir2(array);

let car = {
    marca: "Ford",
    modelo: "Mustang",
    annio: 2020
};

function imprimirElementoPorElementoObjeto(obj) {
  const arr = Object.values(obj); for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
```


```js
function conseguirTipoSucripcion(suscripcion) {
  if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cusros gratis");
    return;
  }
  if (suscripcion == "Basic") {
    console.log("Puedes tomar los cursos de Platzi durante un mes");
    return;
  }
  if (suscripcion == "Expert") {
    console.log("Puedes tomar los cursos de Platzi durante un año");
    return;
  }
  if (suscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar los cursos de Platzi durante un año");
    return;
  }
  console.warn("No es una suscripción válida");
}
conseguirTipoSucripcion("Free");

```


 si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional.

```js

conts tipoDeSuscripciones = {
    free:  "Free""Solo puedes tomar los cusros gratis",
    basic: "Puedes tomar los cursos de Platzi durante un mes",
    expert: "Puedes tomar los cursos de Platzi durante un año",
    ExpertPlus:  "Tú y alguien más pueden tomar los cursos de Platzi durante un año",
}


function conseguirTipoSuscripcion(suscripcion) {
  if (tiposDeSuscripciones[suscripcion]) { console.log(tiposDeSuscripciones[suscripcion]); return; }

  console.warn('Ese tipo de suscripción no existe')
}
```