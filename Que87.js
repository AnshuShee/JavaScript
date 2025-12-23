function isSquare(num) {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}


console.log(isSquare(16)); 

let number=25

let root=Math.sqrt(number);

if(root*root == number){
console.log("perfect square");

}else{
console.log("not a perfect sqaure");
}


// let number = 16;
// let isPerfectSquare = false;

// for (let i = 1; i * i <= number; i++) {
//     if (i * i === number) {
//         isPerfectSquare = true;
//         break;
//     }
// }

// if (isPerfectSquare) {
//     console.log("Perfect square");
// } else {
//     console.log("Not a perfect square");
// }
