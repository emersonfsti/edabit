/*
    013 - Is the Number Less than or Equal to Zero?: 

   Create a function that takes a number as its only argument 
   and returns true if it's less than or equal to zero, 
   otherwise return false. 
   
   Examples: 
   lessThanOrEqualToZero(5) ➞ false, 
   lessThanOrEqualToZero(0) ➞ true, 
   lessThanOrEqualToZero(-2) ➞ true. 
   
   Notes: 
   Don't forget to return the result. 
   If you get stuck on a challenge, find help in the Resources tab. 
   If you're really stuck, unlock solutions in the Solutions tab.
*/

// Call the function lessThanOrEqualToZero with the argument 5 and store the result in the variable number
let number = lessThanOrEqualToZero(5);

// Output the result to the console
console.log(number);

// Define the function lessThanOrEqualToZero that checks if the number is less than or equal to zero
function lessThanOrEqualToZero(num) {
  // Return true if num is less than or equal to zero, otherwise return false
  return num <= 0;
}