//array [numeros repetidos] encontra el numero no repetido
//A = [9,9,3] = 3

let a = [9,9,3];
let b = 0;
for (let i = 0; i < a.length; i += 2) {
    if (a[i] != a[i + 1]) {
        b = a[i];
        break;
    }
}
console.log(b)


