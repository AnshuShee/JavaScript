let str = "Anshu";
let ch = "i";

let found = false;

for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
        found = true;
        break;
    }
}

console.log(found);
