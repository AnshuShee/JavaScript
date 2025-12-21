let str = "Anshu Shee 127";
let res = "";

for(let i=0; i<str.length; i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
        res += str[i].toUpperCase();
    }
    else if(str[i] >= 'A' && str[i] <= 'Z'){
        res += str[i].toLowerCase();
    }
    else{
        res += str[i]; 
    }
}

console.log(res);


let word = "OOOOOOOOOOOO!!!!!!!! HeHEhEhe";
let final = "";

for (let ch of word) {
    let code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90) {
        final += String.fromCharCode(code + 32);
    }
    else if (code >= 97 && code <= 122) {
      final += String.fromCharCode(code - 32);
    }
    else {
        final += ch;
    }
}

console.log(final);
