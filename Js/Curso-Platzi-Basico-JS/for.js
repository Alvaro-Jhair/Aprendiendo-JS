var estudiantes = ["Maria", "Pedro", "Juan", "Luis"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// for(var i = 0; i < estudiantes.length; i++) {
//     saludarEstudiante(estudiantes[i]);
// }


for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}