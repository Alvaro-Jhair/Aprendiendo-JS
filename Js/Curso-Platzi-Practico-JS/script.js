// h1 {color: blue;}
// .parrafo {color: red;}
// #parrafo {color: green;}


// querySelector devuelve el primer elemento 
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelectorAll('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
})

// .innerHTML cambia el texto de un elemento
h1.innerHTML = 'Cambia el texto';

// .innerText cambia el texto de un elemento
h1.innerText = 'patito';

// setAttribute cambia el atributo
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');

//classList.add agrega la clase
h1.classList.add('verde');
//classList.remove quita la clase
h1.classList.remove('verde');

//classList.toggle cambia y pone clase
h1.classList.toggle('verde');

//classList.contains devuelve true o false 
h1.classList.contains('verde');

//.value cambia el valor
input.value = '123456'

//creamos una imagen con document.createElement 
const img = document.createElement('img');
//agregamos el atributo
img.setAttribute("src", "https://i.blogs.es/d94dff/god-of-war-kratos/1366_2000.jpeg");
console.log(img);

pid.innerHTML = '';
//agregamos la imagen en un contener
pid.append(img);