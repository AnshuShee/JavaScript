
let year = 2020;

 if (year % 400 === 0) {
        console.log("leap year") ;
    } else if (year % 100 === 0) {
      console.log("not a leap year");
    } else if (year % 4 === 0) {
        console.log( "leap year");
    } else {
        console.log ("not a leap year");
    }
// function isLeapYear(year) {
   
// }

// console.log(isLeapYear(2000)); // leap year
// console.log(isLeapYear(1900)); // not a leap year
// console.log(isLeapYear(2020)); // leap year
// console.log(isLeapYear(2021)); // not a leap year