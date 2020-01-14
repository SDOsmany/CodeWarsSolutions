function positiveSum(arr) {
var sum=0;

 
for(var count =0;count<arr.length;count++){
  if(arr[count]>0){
   sum +=arr[count];
  }
}
return sum;
}