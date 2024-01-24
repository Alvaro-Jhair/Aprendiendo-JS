function ffn(N) {
    switch (N) {
        case 1: {
            return (6);
        }
        case 6: {
            return (1);
        }
        case 2: {
            return (5);
        }
        case 5: {
            return (2);
        }
        case 3: {
            return (4);
        }
        case 4: {
            return (3);
        }
    }
}
let x = ffn(6);
console.log(x);
