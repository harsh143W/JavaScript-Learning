//Search for a number 
let num = [10,20,30,40,50];
let target = 30;
let found = false;

for ( let i = 0; i < num.length; i++){
  if ( num[i] === target) {
    found = true;
    break;
  }
}

console.log(found ? "Found" : "Not Found");
//Ternary conditional operator 
//Condition ? valueIfTrue: valueIfFalse 