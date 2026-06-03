//Find Average of Numbers 
let num = [ 10,20,30,40,50];

let sum = 0;

let i 
for(i = 0; i < num.length; i++){
  sum += num[i];
}

let avg = sum / num.length;
console.log("Average of num = ",avg);