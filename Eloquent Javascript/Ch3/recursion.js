/*Here’s another way to define whether a positive whole
number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.*/

function isEven(number){
  if(number === 0)
    return true;
  else if(number === 1)
    return false;
  else
    return isEven(Math.abs(number - 2));
};
