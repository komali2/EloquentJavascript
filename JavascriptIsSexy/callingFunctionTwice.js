//closures have access to the outer function's variable after the function
//returns


function celebrityName(firstName){
  var nameIntro = "This celebrity is ";
  function lastName(theLastName){
    return nameIntro + firstName + " " + theLastName;
  }
  return lastName;
}

var mjName = celebrityName("Michael");
//here, the celebrityName outer function has returned
//now mjName has a "cocked" inner function, "lastName", ready to
//call and load up with an argument, then fire

//note that the closure still has access to outer functions variables
//and parameters

mjName("Jackson");
//shows
//This celebrity is Michael Jackson
