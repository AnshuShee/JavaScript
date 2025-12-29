function unique(arr){
let obj={};
let res=[];
for(let i=0;i<arr.length; i++){
if(obj[arr[i]] == undefined){
obj[arr[i]]=1
}
else{
obj[arr[i]]++;

}

}

console.log(res)
}
unique([1,2,3,2,1,2,4,2,1,24,2,1,11,1,])