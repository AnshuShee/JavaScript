// let arr = [-1,2,-3];
// let arr1 =[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         // arr[i]*-1;
//         arr1.push(arr[i]*-1)
//     }
//     else if(arr[i]>0){
//         arr1.push(arr[i]*1);
//     }
// }
// console.log(arr1)

function absolute(num){
for(let i=0;i<num.length;i++){
    num[i]=Math.abs(num[i]);
}
console.log(num)
}
absolute([-1,-2,1,3]);
