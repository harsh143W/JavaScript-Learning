//even world print 0 to 100 

    let i;
    for(i=0; i <=100; i++){
      if(i%2 === 0){  //for odd number !== 
        console.log(i);
      }
      
    }

//Guessing game 

    let gameNum = 25;

    let userNum = prompt("Guess the game number: ");

    while(userNum != gameNum){ //!== don't do this because its on a string form 
      userNum = prompt("Wrong,Game again:");
    }
    console.log("congaratualtions!");
