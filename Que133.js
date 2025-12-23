function digit(n){
// let arr=String(n).split("");
// let res=Math.max( ... arr);
// console.log(res)
let count=0;
while(n>0){
if(n%2 == 0 && n%10 != 0){
count++
}
n=Math.floor(n/10);
}
console.log(count)
}
digit(4265)