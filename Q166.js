function allPossitive(arr){
for(let i=0;i<arr.length; i++){
if(arr[i] <= 0){
console.log(false);
return;
}
}
console.log(true)
}
allPossitive([0,1,2])