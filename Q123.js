let arr = [-1,2,-3];
let min = 0;

for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[min]){
        min = i;
    }       
 }
console.log(arr[min]);