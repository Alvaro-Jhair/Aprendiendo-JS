
function ffn(N) {
    let cadena = N.toString();
    let separado = cadena.split("");
    let cantidad = separado.length;
    let resultado = 0;
    let contador = 0;
    for (let i = 0; i < cantidad; i++) {
        resultado = N % parseInt(separado[i]);
        if (resultado == 0) {
            contador++;
        }
    } return (contador)
}
let x = ffn(2446);
console.log(x);
