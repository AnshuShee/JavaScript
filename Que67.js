let arr = [1, 2, 2, 4, 2, 3, 4];
let value = 2;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         count++;
//     }
// }

// console.log(count);

let obj={};
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]!=undefined){
        obj[arr[i]]++;
        }
        else{
            obj[arr[i]]=1;
        }
    }
    console.log(obj[value]);
    
    
