// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  let sum = ((+num1)+(+num2)+(+num3)+(+num4)+(+num5))
  let average = sum/5
  return Math.round (average * 10 /10)
  // code here
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));
  // code here



// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
