/*
    - 006 - Find the Perimeter of a Rectangle:
    Create a function that takes length and width and finds the perimeter 
    of a rectangle. 
    
    Examples: 
    findPerimeter(6, 7) ➞ 26, 
    findPerimeter(20, 10) ➞ 60, 
    findPerimeter(2, 9) ➞ 22. 
    
    Notes: 
    Don't forget to return the result. 
    If you're stuck, find help in the Resources tab. 
    If you're really stuck, find solutions in the Solutions tab.
*/
// Calculate the perimeter of a rectangle with length 2 and width 9
let perimeterRectangle = findPerimeter(2, 9);

// Output the perimeter of the rectangle to the console
console.log("The Perimeter of a Rectangle is " + perimeterRectangle);

// Define the function findPerimeter that calculates the perimeter of a rectangle
function findPerimeter(length, width) {
  // Calculate the perimeter by summing the length and width and multiplying by 2
  let result = (length + width) * 2;

  // Return the calculated perimeter
  return result;
}
