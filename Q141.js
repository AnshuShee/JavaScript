function middle(str){
    let length = str.length;
    let mid = Math.floor(length / 2);
    if(length % 2 === 0){
        return str[mid - 1] + str[mid];
    } else {
        return str[mid];
    }

}
console.log(middle("testing"));