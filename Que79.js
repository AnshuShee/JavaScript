let arr = [0,1,0,1,0];

let count1 = 0;
let count2 = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]==0){
        count1++;
    }
    else if(arr[i]==1){
  count2++;
    }
  

}
console.log("Zeroes",count1);
console.log("Ones",count2)

