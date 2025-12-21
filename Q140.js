let n = 5;
let square = n * n;

if (square % 10 === n) {
    console.log(true);
} else {
    console.log(false);
}

function automorphicNumber(n) { 
let length=String(n).length;

let sqaure=n*n;

let lastDigit=sqaure%(10 ** length);
if(lastDigit == n){
console.log("Automorphic Number");
} else {
console.log("Not a Automorphic Number");
}
}
automorphicNumber(100)