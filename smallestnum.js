//Find thee Smallest Number 
let num = [1,2,3,4,3,4,4];

let smallest = num[0];

for(let i = 1; i < num.length; i++){
  if(num[i] < smallest) {
    smallest = num[i];
  }
}
console.log("Smallest = ",smallest);