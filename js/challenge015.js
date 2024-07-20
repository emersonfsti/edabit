/*
    015 - Return Something to Me!: 

    Write a function that returns the string "something" joined with 
    a space " " and the given argument a. 
    
    Examples: 
    giveMeSomething("is better than nothing") ➞ "something is better than nothing", 
    giveMeSomething("Bob Jane") ➞ "something Bob Jane", 
    giveMeSomething("something") ➞ "something something"
*/
// Call the function giveMeSomething with the argument "Bob Jane" and store the result in the variable prase
let prase = giveMeSomething("Bob Jane");

// Output the result to the console
console.log(prase);

// Define the function giveMeSomething that concatenates the string "something " with the provided argument
function giveMeSomething(a) {
  // Return the concatenated string "something " followed by the argument a
  return "something " + a;
}
