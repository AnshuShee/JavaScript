let num1=7
let num2=9;

let gcd=0;

let commont=1;
for(let i=0; i<num1 && i<num2; i++){
    if(num1%i==0 && num2%i==0){
      
        gcd++;
    }
}
if(gcd==commont){
   console.log(true);
}
else{
   console.log(false);
}
console.log(gcd);