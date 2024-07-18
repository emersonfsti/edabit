/*
    002 - Power Calculator:
    Create a function that takes voltage and current and returns the calculated power.
    Crie uma função que receba a voltagem e a corrente e retorne a potência calculada.
    
    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600
*/
// Call the circuitPower function with voltage 230 and current 10 and store the result in calculatedPower
let calculatedPower = circuitPower(230, 10);

// Output the calculated power to the console
console.log("Calculated Power: " + calculatedPower);

// Define the circuitPower function that takes voltage and current as arguments and returns the power
function circuitPower(voltage, current) {
  // Calculate the power by multiplying voltage and current
  let calculated = voltage * current;

  // Return the calculated power
  return calculated;
}
