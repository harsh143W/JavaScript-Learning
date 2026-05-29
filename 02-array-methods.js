 //push() 
  let cars = ["BMW", "Mercedes" , "Alto ", "lamborgini"];
  cars.push("Porche","kenigsag");

  console.log(cars);

  //pop()
  let cars = ["BMW", "Mercedes" , "Alto ", "lamborgini"];
  console.log(cars);
  let deletedvcar = cars.pop();
  console.log(cars);
  console.log(deletedvcar); //this give us value which was deleted by pop();
  
  //toString()
  let cars = ["BMW", "Mercedes" , "Alto ", "lamborgini"];
  console.log(cars);
  console.log(cars.toString());

  let marks = [32,34,2,2,3,34];
  console.log(marks.toString());

  //Concat

    let cars=["lamborgini","BMW","Porche"];
    let bikes=["Buggati","HeroHonda","NinjaH2R"];
    let airPlane=["AirIndia","America"];

    let company = cars.concat(bikes,airPlane);
    console.log(company);

  //Unshift

    let cars=["lamborgini","BMW","Porche"];
    
    cars.unshift("Buggati chiron");
    console.log(cars);

    //shift

    let cars=["lamborgini","BMW","Porche"];
    
    let val = cars.shift();
    console.log("deleted car",val)
   
   //splice  

    let arr = [1,2,3,4,5,6,7];
    //add, remove, replace
    // arr.splice(2,2,101,102);

    //Element add 

    arr.splice(2,0,101);
    console.log(arr);

    //slice 

    let cars = ["lamborgini", "BMW" ,"Defender", "Porche","Buggati chiron"];

    console.log(cars.slice(2,4));


    //Q-1

    let com = ["Bloomberg", "Microsoft", "Uber" ,"Google", "IBM", "Netfilix"];

    //Remove the first company form the array 
    com.splice(0,0);
    console.log(com);

    //Remove Under and Add Ola in its place 
    com.splice(2,1,"Ola");
    console.log(com);

    //Add Amzon at the end 
    com.push("Amzon");
    console.log(com);