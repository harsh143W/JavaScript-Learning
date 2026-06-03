let num = [ 1,2,3,4,5];

//Forward loop 
for(let i = 0; i<num.length; i++){
  console.log(num[i]);
}

console.log("This is the second loop ");

//Backword loop 
for(let i= num.length - 1; i >= 0; i--){
  console.log(num[i]);
}

//for avg 
let sum = 0;
for(let i=0; i < num.length; i++){
  sum += num[i];
}

let avg = sum / num.length;
console.log("This is the sum ");
console.log(avg);

//Even 

let count = 0;

for(let i=0; i < num.length; i++){
  if(num[i] % 2 === 0 ){
    count++;
    console.log("This is even number",num[i]);
  }
}