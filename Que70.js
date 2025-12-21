let arr = [1,2,3,4,5];

let smallest = Infinity;
let Secsmallest = Infinity;

for( let i = 0 ; i<arr.length; i++){
    if(arr[i]<smallest){
    Secsmallest=smallest;
    smallest=arr[i];
    }
    else if(arr[i]<Secsmallest&&arr[i]>smallest){
        Secsmallest=arr[i];

    }
}
console.log(Secsmallest);