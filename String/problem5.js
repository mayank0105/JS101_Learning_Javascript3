let str="school";
let str_first="";
let str_second="";

for(let i=2; i>=0; i--){
  str_first=str_first+str[i];
}
//console.log(str_first);

for(let i=5; i>=3; i--){
  str_second=str_second+str[i];
}
//console.log(str_second);
console.log(str_first+str_second);