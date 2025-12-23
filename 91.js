function length(str) {
  let count = 0;

  while (str[count]) {
    count++;
  }
  return count;
}

function main(arr) {
  let n = arr.length;  
  let res = "";
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    let stringLength = length(arr[i]);

    if (stringLength > maxLength) {
      res = arr[i];
      maxLength = stringLength;
    }
  }

  console.log(res);
}

main(["Hello", "he", "the", "HelloWorld"]);
