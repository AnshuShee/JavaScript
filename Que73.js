let arr1 = [1,2,3];
let arr2 = [4,5];

let result = [...arr1,...arr2,];
console.log(result);
// console.log(arr1 + arr2);
console.log(arr1.concat(arr2))


let arr = [];
for(let i=0;i<arr1 ;i++){
    arr.push(arr1[i]);
}
for(let i=0; i<arr2; i++){
    arr.push(arr2[i]);
}

console.log(arr)