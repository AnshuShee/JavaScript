let arr = [1,2,3,4,5];
    let first = -1;
    let second = -1;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
console.log(second);



