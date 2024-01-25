function sumaX(arr, n, x) {
    let contador = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let suma = arr[i] + arr[j];
            console.log(arr[i], arr[j], "=", suma);
            if (suma === x) {
                contador++;
            }
        }
    }
    console.log(contador);
}
sumaX([1, 5, 7, 1], 4, 6);