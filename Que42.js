let str="Banana";

// let res=str.replaceAll("a","e").replace("A","E")



let res="";

for(let i=0;i<str.length; i++){
if(str[i] == "a"|| str[i] == "A"){
res=res+"e"
}
else{
res=res+str[i];

}
}

console.log(res)