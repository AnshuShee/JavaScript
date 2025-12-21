let str = "Hello 123456";

let res = "";
for(let i = 0; i<str.length;i++){
    if(!(str[i]>="0" && str[i]<="9")){
        res=res+str[i];
    }
}console.log(res);