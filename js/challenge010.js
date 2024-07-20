/*
    010 - Convert Age to Days:
    
    Create a function that takes the age in years and returns the age in days. 
    
    Examples: 
    calcAge(65) ➞ 23725, 
    calcAge(0) ➞ 0, 
    calcAge(20) ➞ 7300. 
    
    Notes: 
    Use 365 days as the length of a year for this challenge. 
    Ignore leap years and days between last birthday and now. 
    Expect only positive integer inputs._
*/

// Define the age in years to be converted to days
let year = calcAge(20);

// Output the converted age in days to the console
console.log(year);

// Define the function calcAge that converts age in years to days
function calcAge(age) {
  // Multiply the age by 365 to get the equivalent in days
  return age * 365;
}