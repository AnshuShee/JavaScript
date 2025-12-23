function isArmstrong(num) {
    const digits = String(num).split('');
    const power = digits.length;
    
    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(Number(digit), power);
    }, 0);
    
    return sum === num;
}


console.log(isArmstrong(153)); 

let number = 9474;
let temp = number;
let sum = 0;
let digits = String(number).length; 
while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}
if (sum === number) {
    console.log(number + " is an Armstrong number");
}
else {
    console.log(number + " is not an Armstrong number");
}


let num = 153;

let root1 = Math.pow(1,3);
let root2 = Math.pow(5,3);
let root3 = Math.pow(3,3);

if(root1+root2+root3==num){
    console.log("true")
}
else{
    console.log("false")
}