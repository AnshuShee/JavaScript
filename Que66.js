let arr = [10, 20, 30];
let value = 10;
let index ;

//method 1:
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        index = i;
        break;

    }else{
        index = -1;
    }
}

console.log(index);

//method 2:
console.log(arr.indexOf(value));


