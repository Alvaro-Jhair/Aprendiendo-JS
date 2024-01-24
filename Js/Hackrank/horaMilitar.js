var s = '12:01:00PM';
var hora = s.split(':');
var pm = hora[2].split('');   //'00PM' '0' '0' 'p' 'm'

var resultado = [];
resultado.push(hora[0], hora[1], pm[0] + pm[1], pm[2] + pm[3]);

if (resultado[3] === 'PM' && resultado[0] !== '12') { //=== extrictamente igual
  resultado[0] = parseInt(resultado[0]) + 12;
  resultado[0] = resultado[0].toString();
  resultado
} else if (resultado[3] === 'AM' && resultado[0] === '12') {
  resultado[0] = '00';
}

var resultadoFinal = [];
resultadoFinal.push(resultado[0], resultado[1], resultado[2]);
resultadoFinal = resultadoFinal.join(":");
console.log(resultadoFinal);


