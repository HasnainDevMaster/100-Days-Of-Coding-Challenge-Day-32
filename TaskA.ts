// 100 Days Of Coding Challenge!

/** Question 94: Array using .map() method 
Use the .map() method to create a new array that contains the length of each word from an array of words.*/

//--------------------------------------------------------------------------------------------------------------------------

// Array of words
const words: string[] = ["NodeJS", "Typescript", "VSCode", "Coding"];
const wordLengths = words.map((word) => word.length); // Map each word to its length
console.log("Array of word lengths:", wordLengths); // Output: [6, 10, 7, 6]
