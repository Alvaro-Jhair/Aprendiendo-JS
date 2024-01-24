function sumaX(arr, n, x) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let suma = arr[i] + arr[j + 1];
            if (suma == x) {
               console.log(suma);
               return true;
            } 
        }
    }
}

sumaX([1, 4, 45, 6, 10, 8], 6, 16);
