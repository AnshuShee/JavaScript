let num = [-2,-1,0,1,2,3];
let postive = 0;
let negative = 0;
let zeroes = 0;

for(let i=0; i<num.length; i++){
    if(num[i]>0){
        postive++;
    }
    else if(num[i]<0){
        negative++;
    }
    else{
        zeroes++;
    }
}
console.log(postive);
console.log(negative);
console.log(zeroes);