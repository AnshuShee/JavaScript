// Prime Number:

// let n=10;
// while(n>=2){
//     if(n%n==0 && n%1==0){
//         console.log("Prime Number - True");
//         break;
//     }
//     else{
//         console.log("Not a Prime Number - False");
//         break;
//     }

// }

let n = 9;
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime Number - True");
} else {
  console.log("Not a Prime Number - False");
}
