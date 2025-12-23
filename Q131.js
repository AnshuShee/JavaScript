function digit(n){
let arr=String(n).split("");
let res=Math.max( ... arr);
console.log(res)
while(n>0){
max=Math.max(max,n%10);
n=Math.floor(n/10);
console.log(max)
}

let max=0;

}
digit(4365)