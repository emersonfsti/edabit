/*
    014 - Basketball Points: 
    
    You are counting points for a basketball game, given the amount 
    of 2-pointers scored and 3-pointers scored, find the final 
    points for the team and return that value. 
    
    Examples: 
    points(1, 1) ➞ 5, 
    points(7, 5) ➞ 29, 
    points(38, 8) ➞ 100
*/
// Call the function points with the arguments 38 and 8, and store the result in the variable counting
let counting = points(38, 8);

// Output the result to the console
console.log(counting);

// Define the function points that calculates the total points from two-pointers and three-pointers
function points(twoPointers, threePointers) {
  // Return the total points: twoPointers multiplied by 2 plus threePointers multiplied by 3
  return twoPointers * 2 + threePointers * 3;
}
