/*
    017 - Area of a Triangle:
    
    Write a function that takes the base and height of a triangle and 
    return its area. 
    
    Examples: 
    triArea(3, 2) ➞ 3, 
    triArea(7, 4) ➞ 14, 
    triArea(10, 10) ➞ 50. 
    
    Notes: 
    The area of a triangle is: 
    (base \* height) / 2, Don't forget to return the result. 
    If you get stuck on a challenge, find help in the Resources tab. 
    If you're really stuck, unlock solutions in the Solutions tab.
*/
let calcArea = triArea(10, 10);
console.log(calcArea);

function triArea(base, height) {
  return (base * height) / 2;
}
