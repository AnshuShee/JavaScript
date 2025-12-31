// let arr = [1,-5,2,4,3,7];
// arr.sort((a,b) => a-b);
// console.log(arr);


function selectionSort(arr){

for(let i=0;i<arr.length; i++){
let max =- Infinity;
let maxIndex=0;
for(let j=0;j<arr.length-i;j++){
if(arr[j]>max){
max=arr[j];
maxIndex=j;
}
}
[arr[arr.length-i-1],arr[maxIndex]]=[arr[maxIndex],arr[arr.length-i-1]];
}
console.log(arr);
}
selectionSort([3, 1, 4, 2]);