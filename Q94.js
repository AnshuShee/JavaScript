let arr=[{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}]

let maxmarks=0;
let student="";
for(let c of arr){
if(c.marks>maxmarks){
student=c.name;
maxmarks=c.marks

}
}

console.log(student)