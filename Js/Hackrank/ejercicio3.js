let arr = [1, 2, 3, 2, 1];
let n = arr.length;
let arrNew = [];
let contador = 0;
for (let i = n - 1; i >= 0; i--) {
  arrNew.push(arr[i]);
}
for (let i = 0; i < n; i++) {
  if (arr[i] == arrNew[i]) {
    contador++
  }
}

if (contador === arr.length)
  console.log("array perfect")
arr
arrNew
