let str = "Hello   567839";
let count = 0;
for(let i=0; i<str.length; i++){
    if(str[i]>="0" && str[i]<="9"){
        count ++;
    }
}
console.log(count);

