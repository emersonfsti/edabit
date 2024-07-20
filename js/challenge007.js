/*
Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/

// Define the number of minutes to be converted
let minutes = 1;

// Call the convert function to convert minutes to seconds and store the result
let convertTime = convert(minutes);

// Output the converted time in seconds to the console
console.log(convertTime);

// Define the function convert that converts minutes to seconds
function convert(minutes) {
  // Multiply the number of minutes by 60 to get the equivalent in seconds
  return minutes * 60;
}
