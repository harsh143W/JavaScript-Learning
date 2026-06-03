//Count Occurrences of an element 
let num = [1,2,2,2,2,2,3,4,5,6];
let target = 2;
let count = 0;

for(let i = 0; i < num.length; i++){
  if( num[i] === target){
    count++;
  }
}

console.log("Count of target number is =",count);