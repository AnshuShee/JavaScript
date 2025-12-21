let number = 100;
let sum = 0;
let result ;

for (let i = 1; i <= number; i++) {
    let digitSum = 0;
    let temp = i;
    
    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    
    if (i % digitSum === 0) {
        sum += i;
        

        }
        if(sum = number){
            result=true;
        }
        else{
            result=false;

    }
}
console.log(result);
