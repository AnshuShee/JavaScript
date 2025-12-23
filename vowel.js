// let input = "Anshu";

// let vowel = "AEIOUaeiou";
// let count = 0;
// for(let i=0; i<input.length; i++){
//     if(vowel.includes(input[i])){
//         count ++;
//         console.log(input[i]);
//     }
// }

// console.log(count);



// let input = "Anshu Shee";

// let count = 0;

// let str = input.toLowerCase();

// for(let i=0;i<str.length; i++){
// if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o"|| str[i] == "u"){
// count ++;

// }
// }

// console.log(count);

// let obj = {
//     a:1, e:1, i:1, o:1, u:1,
//     A:1, E:1, I:1, O:1, U:1
// };

// let str = "Hello World";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] == 1) {
//         count++;
//     }
// }

// console.log(count);   


// function fibbo(n){
//     let a=0;
//     let b=1;

// for(let i = 0; i<n ; i++){
//     console.log(a)
//     let c = a+b;
//     a=b;
//     b=c;
// }
// };
// console.log(fibbo(10));


let str="Hello world";

for(let i=0;i<str.length; i++){

let ascii =str.charCodeAt(i);
let char= String. fromCharCode(ascii);
console.log(char)
}