

// let n=-100;

// const reversed = Math.sign(n)*(Number(String(Math.abs(n)).split("").reverse().join("")));
// console.log(reversed);



let n = 123;


let sign = 1;
if (n < 0) {
  sign = -1;
  n = Math.abs(n);
}

let rev = 0;
while (n > 0) {
  let digit = n % 10;
  rev = rev * 10 + digit;  
  n = Math.floor(n / 10);
}

rev = sign * rev;  

console.log(rev);   




