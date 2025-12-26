let arr = [1,2,3,4,6,7,5];
let k = 4;
let count = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>k){
        count++;

    }
}
console.log(count);