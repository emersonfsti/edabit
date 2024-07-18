/*
003 - Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and returns their sum.
Examples
addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

// Call the addition function with 7 and 3 as arguments and store the result in sumTwoNumber
let sumTwoNumber = addition(7, 3);

// Output the result to the console
console.log("The sum of two numbers is: " + sumTwoNumber);

// Define the addition function that takes two arguments and returns their sum
function addition(a, b) {
  // Calculate the sum of the two arguments
  let sum = a + b;
  
  // Return the calculated sum
  return sum;
}
