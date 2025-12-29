function rotateRight(arr,k){
//     for(let i=1;i<=k;i++){
        
//         let add=arr.pop();
//         arr.unshift(add);
//     }
//     console.log(arr);
// }
let res=[];
for(let i=arr.length-k-1;i<arr.length; i++){
res.push(arr[i]);
}
for(let i=0;i<arr.length-k;i++){
res.push(arr[i]);

}
// console.log(res);
for(let i=0;i<k-1;i++){
    // arr.push();
    // arr.unshit();
    console.log(res)
}
}

rotateRight([1,2,3,4,5],3);


