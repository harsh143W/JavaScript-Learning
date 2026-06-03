//Create a new array of squares 
let num = [1,2,3,4];
let squares = [];

for(let i = 0; i < num.length; i++){
  squares.push(num[i] * num[i]);
}

console.log(squares);