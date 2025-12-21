function length(str) {
  let count = 0;

  while (str[count]) {
    count++;
  }
  return count;
}

function main(arr) {
  let n = arr.length;  
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(length(arr[i]));
  }

  console.log(res);
}

main(["Hello", "he", "the"]);
