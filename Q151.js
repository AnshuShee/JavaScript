let str = "Anshu Shee hola   am";

let words = str.split(" ");
let minLength = words[0].length;

for (let i = 1; i < words.length; i++) {
    if (words[i].length < minLength && words[i]!=0) {
        minLength = words[i].length;
    }
}

console.log(minLength);