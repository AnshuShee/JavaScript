let obj = {
    apple: 50,
    orange: 80,
    banana: 70,
    grape: 90,
}
let total = 0;
for (let key in obj) {
    total += obj[key];
}
console.log(total);