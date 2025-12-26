function maxmumindex(arr){
   let maxindex=0;
   for(let i=0; i<arr.length; i++){
     if(arr[i]>arr[maxindex]){
        maxindex=i;
     }
   }
   console.log(maxindex);
   
}
maxmumindex([1,2,100,2,89])