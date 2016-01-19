function genericPoemMaker(name, gender){
  console.log(name + "is finer than fine wine.");
  console.log("A " + gender + " of unfortunate tragedies.");
}

function GetUserInput(firstName, lastName, gender, callback){
  var fullName = firstName = " " + lastName;

  callback(fullName, gender);
}

getUserInput("Michael","Fassbender","Man",genericPoemMaker);
  //output
    /*Michael Fassbender is finer than fine wine.
    A Man of unfortunate tragedies.*/

function greetUser(customerName, sex){
  var salutation = sex && sex === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + customerName);
}

getUserInput("Bill","Gates","Man",greetUser);

//output
//Hello, Mr. Bill Gates
