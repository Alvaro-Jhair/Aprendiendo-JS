let n = 200;
let j = n.toString();
let array = [];
for (let i = j.length - 1; i >= 0; i--) {
    array.push(j[i]);
}
let reverse = array.join('');
let int = parseInt(reverse);
console.log(int);



