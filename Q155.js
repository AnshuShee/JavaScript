let str = "Hello";
let isValid = true;

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (
    !((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
  ) {
    isValid = false;
    break;
  }
}

console.log(isValid);
