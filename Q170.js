let arr = [1, 2, 3, 1];
let obj = {};
let result = false;

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    result = true;
    break;
  }
  obj[arr[i]] = 1;
}

console.log(result); 


function containsDuplicate(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return true;
    }
    obj[arr[i]] = 1;
  }

  return false;
}


console.log(containsDuplicate([1, 2, 3, 4]))