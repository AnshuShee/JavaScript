// let n = 121;
// let original = n;

// n = Math.abs(n);

// let rev = 0;
// while (n > 0) {
//   let digit = n % 10;
//   rev = rev * 10 + digit;
//   n = Math.floor(n / 10);
// }


// console.log(original === rev); 


let n=121;

const reversed = Math.sign(n)*(Number(String(Math.abs(n)).split("").reverse().join("")));
console.log(reversed);

if(n===reversed){
    console.log(true);
}else{
    console.log(false);
}
