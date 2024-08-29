// 100 Days Of Coding Challenge!

/** Question 96: Array using .reduce() method
Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.*/

//--------------------------------------------------------------------------------------------

// Array of numbers
const numbersToSum = [5, 10, 15, 20];
const sum = numbersToSum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); // Calculate sum
console.log("Array sum:", sum); // Outputs: 50
