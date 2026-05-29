  let marks = [97 , 82 ,34, 23,54,32];
    console.log(marks);
    console.log(marks.length); //property 

  let heroes = ["ironman","thor","hulk"];
    console.log(heroes);

        //loops over an Array
    //for loop
     let heroes = ["ironman","thor","hulk"];
    
    for(let i=0; i<heroes.length; i++){
      console.log(heroes[i]);
    } 

    //for of loop
    for(let el of heroes){
      console.log(el);
    }

    //Q-1

     let marks=[85,97,44,37,76,60];

    let sum = 0;

    for(let i of marks){
      sum += i;
    }

    let avg = sum / marks.length;
    console.log(`avg marks of the class = ${avg}`);


    // Q-2 

    //pirnt inxdex value -10% by for of loop indirectly , directly we cannot print 
    //full array value in for of loop for that we need to use for loop 

    let items = [ 250,645,300,900,50];
    
    let i = 0;
    for(let val of items){
     // console.log(`value at index ${i} = ${val}`);
      let offer = val /  10;
      items[i] = items[i] - offer;
      console.log(`value after offer=${items[i]}`)
      i++;
    }

    //print index value - 10% by for loop 
    for(let i=0; i<items.length; i++){
        let offer = items[i] / 10;
        items[i] -= offer;
    }

    console.log(items);

