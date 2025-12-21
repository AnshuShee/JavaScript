let arr = [1,2,3,-2,-1];

let max=Math.max(...arr);
let min=Math.min(...arr);

console.log(max>0 ? max: null );
console.log(min<0 ? min: null );

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }

}
console.log(max);
console.log(min);