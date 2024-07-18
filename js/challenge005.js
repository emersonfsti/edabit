/*
    005 - Return the First Element in an Array: 
    Create a function that takes an array containing only numbers 
    and return the first element. 
    
    Examples: 
    getFirstValue([1, 2, 3]) ➞ 1, 
    getFirstValue([80, 5, 100]) ➞ 80, 
    getFirstValue([-500, 0, 50]) ➞ -500. 
    
    Notes: 
    The first element in an array always has an index of 0.
*/
// Call the getFirstValue function with an array of values and store the result in the variable 'first'
let first = getFirstValue([-500, 0, 50]);

// Output the first value from the array to the console
console.log(first);

// Define the getFirstValue function that takes an array as an argument and returns the first value
function getFirstValue(arr) {
  // Retrieve the first value from the array
  let firstValue = arr[0];

  // Return the first value
  return firstValue;
}
