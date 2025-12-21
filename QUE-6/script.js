// console.log("Enter a number:");

// let num = 4;

// if(num%2===0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }

let marks = -1

switch(true){
    case (marks>=90&&marks<=100):
    console.log("A");
    break;

    case (marks>=80&&marks<=89):
    console.log("B");
    break;

    case (marks>=70&&marks<=79):
        console.log("C");
        break;

        case(marks>=60&&marks<=69):
        console.log("D");
        break;

        case(marks>=0&&marks<=59):
        console.log("F");
        break;
default:
    console.log("Invalid");


}
 