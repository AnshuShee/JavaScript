function merge(arr1,arr2){
      let i=0;
    let j=0;
    let res=[]
   while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++
        }
        else{
            res.push(arr2[j])
            j++
        }
   }
   while(i<arr1.length){
    res.push(arr1[i]);
    i++
   }
   while(j<arr2.length){
    res.push(arr2[j]);
    j++
   }
   console.log(res)

}
merge([1,9,11],[6,8,12]);