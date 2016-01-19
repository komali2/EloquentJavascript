/*
Arrays have a method reverse, which changes the array by inverting the order
in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
as argument and produces a new array that has the same elements in the inverse
order. The second, reverseArrayInPlace, does what the reverse method does: it
modifies the array given as argument in order to reverse its elements. Neither
may use the standard reverse method.
*/

var reverseArray = function(arrayIn){
 var newArray = [];
  var length = arrayIn.length; //so we don't check length every loop
  for(i = 0; i < length; i++){
    newArray.unshift(arrayIn[i]);
  }
  return newArray;
}

var reverseArrayInPlace= function(arrayIn){
  var length = arrayIn.length;
  var saved;
  for(i = 0; i < Math.floor(length/2); i++){
   saved = arrayIn[i];
    arrayIn[i] = arrayIn[length - 1 - i];
    arrayIn[length - 1 - i] = saved;
  }
  return arrayIn;
}
