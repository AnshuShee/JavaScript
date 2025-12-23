let marks= {math: 80, science: 90, english: 70};

let average=0;
let count=0;

for(let mark in marks){
    count++;
    average=average+marks [mark];

}

console.log(average/count)

