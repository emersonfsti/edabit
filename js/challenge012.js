/*
    012 - Convert Hours into Seconds:
    
    Write a function that converts hours into seconds. 
    
    Examples: 
    howManySeconds(2) ➞ 7200, 
    howManySeconds(10) ➞ 36000, 
    howManySeconds(24) ➞ 86400. 
    
    Notes: 
    60 seconds in a minute, 
    60 minutes in an hour, 
    Don't forget to return your answer._
*/
// Define the number of hours to be converted to seconds
let hours = howManySeconds(24);

// Output the converted time in seconds to the console
console.log(hours);

// Define the function howManySeconds that converts hours to seconds
function howManySeconds(hours) {
  // Multiply the hours by 60 twice (60^2) to get the equivalent in seconds
  return hours * 60 ** 2;
}
