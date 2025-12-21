let arr = [1, 2, 3, 4];
let sum = 0;
let count = 0;
let average = 0;


for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}


average = sum / arr.length;


for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
        console.log(arr[i]);
        count++;
    }
}

console.log("Average:", average);
console.log("Count:", count);
