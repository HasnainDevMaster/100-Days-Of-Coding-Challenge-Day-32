// 100 Days Of Coding Challenge!

/** Question 95: Array using .filter() method
Write a function that uses the .filter() method to return an array of numbers greater than 10.*/

//----------------------------------------------------------------------------------------------

// Array of numbers
const numbers = [7, 8, 9, 15, 20, 25];
const filteredNumbers = numbers.filter((num) => num > 10); // Filter numbers greater than 10
console.log("Array of numbers greater than 10:", filteredNumbers); // Outputs: [15, 20, 25]
