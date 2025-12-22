let str = "Anshu Shee hola";

let words = str.split(" ");
let minLength = words[0].length;

for (let i = 1; i < words.length; i++) {
    if (words[i].length < minLength) {
        minLength = words[i].length;
    }
}

console.log(minLength);