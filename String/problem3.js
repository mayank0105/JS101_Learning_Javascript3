//find the indexes of max and min value

let arr=[1,2,-70,3,-30,4,5,54,97,-90];
let max=0;
let max_index_value=0;
let min=0;
let min_index_value=0;

for(let i=0; i<arr.length; i++){
  if(arr[i]<min){
    min=arr[i];
    min_index_value=min_index_value+i;
  }
  if(arr[i]>max){
    max=arr[i];
    max_index_value=max_index_value+i;
  }
}
console.log(max_index_value,min_index_value);
