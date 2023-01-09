let arr=[1,2,3,4,5,6,7,8,9,10];

let even_sum=0;
let odd_sum=0;

for(let i=0; i<arr.length; i++){
  if(arr[i]%2==0){
    even_sum=even_sum+arr[i];
  }
  else if(arr[i]%2!=0){
    odd_sum=odd_sum+arr[i];
  }
}
if(odd_sum<even_sum){
  console.log("Even is greater : ", even_sum);
}
else{
   console.log("Odd is greater : ", odd_sum);

}