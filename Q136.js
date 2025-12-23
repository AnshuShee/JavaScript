function isThreeDigit(n) {
    n = Math.abs(n);
    return n >= 100 && n <= 999;
}


console.log(isThreeDigit(150));  

// function threedigit(a){
//     if(a>=100 && a<=999){
//         console.log(true)
//     }   
//     else{
//         console.log(false)
//     }
// }

function Digit(n){
let count=0;
while(n>0){
count++;
n=Math.floor(n/10);
}
console.log((count == 3))
}
Digit(100)