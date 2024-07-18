/*
    004 - Return the Next Number from the Integer Passed: 
    Create a function that takes a number as an argument, increments the number 
    by +1 and returns the result. 
    Examples: addition(0) ➞ 1, addition(9) ➞ 10, addition(-3) ➞ -2. 
    Notes: 
    Don't forget to return the result. 
    If you get stuck on a challenge, find help in the Resources tab. 
    If you're really stuck, unlock solutions in the Solutions tab.
*/
// Initialize the first number with a value of -3
let firstNumber = -3;

// Call the addition function with firstNumber as the argument to get the next number
let nextNumber = addition(firstNumber);

// Output the first number and the next number to the console
console.log(
  "The first number is " +
    firstNumber +
    ", and the next number is " +
    nextNumber
);

// Define the addition function that takes a number as an argument and returns the number plus 1
function addition(num) {
  // Increment the input number by 1
  let result = num + 1;
  
  // Return the incremented result
  return result;
}
