let arr = [10,25,3,99,42];

let count = arr[0];

for(let i=0; i<arr.length; i++){
  if(arr[i] >  count){
    count = arr[i];
  }
}
console.log(count);