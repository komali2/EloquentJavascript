/*
Write a range function that takes two arguments, start and end, and returns an
 array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum
of these numbers. Run the previous program and see whether it does indeed
return 55.

As a bonus assignment, modify your range function to take an optional third
 argument that indicates the “step” value used to build up the array. If no
  step is given, the array elements go up by increments of one, corresponding
   to the old behavior. The function call range(1, 10, 2) should return
   [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
    range(5, 2, -1) produces [5, 4, 3, 2].
*/

var range = function(start, end, step){
  var arrayRange = [];
  if (step === undefined)
    step = 1;
	if (start < end)
      for(i = start; i <= end; i += step)
   		arrayRange.push(i);
  	else if(start > end)
      if (step <= 0)
        step = -1;
  		for(i = start; i>=end; i += step)
          arrayRange.push(i);

  return arrayRange;
};

var sum = function(array){
	var length = array.length; //so we don't check length every loop
  	var total = 0;
  for(i = 0; i < length; i++)
    total += array[i];

  return total;
}
