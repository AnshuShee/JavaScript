let N = 10;   
let count = 0;


for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) {
        count++;
    }
}


console.log("Output:", count);