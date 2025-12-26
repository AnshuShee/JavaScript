let arr =[1,3,2];
let result = true;
for(let i =0; i<arr.length; i++){
    if(arr[i]%2===0){
        result=true;
    }
    else{
        result = false;
    }
}
console.log(result);