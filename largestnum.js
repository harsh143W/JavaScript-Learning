let num = [10,12,12,34,5,34];

let largest = num[0];

for ( let i = 0; i < num.length; i++){
  if(num[i] > largest){  //if we want smaller then do < this 
    largest = num[i];
  }
}

console.log(largest);