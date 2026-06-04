    let num1 = +prompt("Enter First Number:- ");
    let num2 = +prompt("Enter second Number:- ");
    let operator = prompt("Enter Operator (+,-,*,/)");

    if ( operator === "+"){
      alert(num1 + num2);
    } else if (operator === "-") {
      alert(num1 - num2);
    } else if (operator === "*") {
      alert(num1 * num2);
    } else if (operator === "/") {
      alert(num1 / num2);
    } else {
      alert("You choose Invalid Operator.....")
    }
