// let str = " Anshu Shee ";
// let count = 0;
// let value = false;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//         if (!value) {
//             count++;       
//             value = true; 
//         }
//     } else {
//         value = false;    
//       }
// }

// console.log(count); 
let str = " Hello World ";

let count = 0;
for(let i=0; i <str.length; i++){
    if(i==0 && str[i]!=" "){
        count ++;
    }
}
