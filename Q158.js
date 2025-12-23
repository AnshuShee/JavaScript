let str = "I love to play football"
let words = str.split(" ");
let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].length >= 5) {
    count++;
  }
}
console.log(count);

let sentence = "I love JavaScript coding";
let count1 = 0;
let wordLength = 0;

for (let i = 0; i <= sentence.length; i++) {
  if (sentence[i] !== " " && sentence[i] !== undefined) {
    wordLength++;
  } else {
    if (wordLength >= 5) {
      count1++;
    }
    wordLength = 0;
  }
}

console.log(count1);
