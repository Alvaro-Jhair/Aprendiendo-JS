function ffn(N) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(N * i);
    } 
    return (arr);
}
let x = ffn(9);
console.log(x);