let str = "hello".toLowerCase();
let count = 0;

let vowels = { a: true, e: true, i: true, o: true, u: true };

for (let i = 0; i < str.length; i++) {
  if (vowels[str[i]]) {
    count++;
  }
}

console.log(count);
