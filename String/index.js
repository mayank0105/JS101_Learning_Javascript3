//Problem 1 : Given a string count the number of words in that string

let str="Hello my name is mayank and i am from sehore";
let count=1;
for(let i=0; i<str.length; i++){
  if(str[i]==" "){
    count=count+str[i].length;
  }
}
console.log(count);
//console.log(str.length);