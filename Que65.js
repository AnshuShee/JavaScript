let arr = [1, 2, 3];
let value = 2;
let state = false;


//method 1:
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        state = true;
        
    }
}

console.log(state);

//method 2:
console.log(arr.includes(value));


