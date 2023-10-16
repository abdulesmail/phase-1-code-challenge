"use strict";
//The prompt sync is imported and requires user input
const prompt = require('prompt-sync')();

// The function for grading
function grading(marks) {
  if (marks > 79 && marks <= 100) {
    return "A";  // If marks are greater than 79 but less than 100, return "A"
  } else if (marks >= 60 && marks <= 79) {
    return "B"; // If marks are greater or equal to 60 but less than or equal to 79, return "B"
  } else if (marks >= 50 && marks <= 59) {
    return "C"; // If marks are greater than or equal to 50 but less than or equal to 59, return "C"
  } else if (marks >= 40 && marks <= 49) {
    return "D"; // If marks are greater or equal to 40 but less than or equal to 49, return "D"
  } else if (marks >= 0 && marks <= 39) {
    return "E"; // If marks are greater or equal to 0 but less than or equal to 39, return "E"
  } else {
    return "Invalid input. Please enter a valid number between 0 and 100.";
  }
}

let marks;
// This is the validation of marks 
//  Program terminates if the user types in "exit"
while (true) {
  const userInput = prompt('Enter your marks (or type "exit" to quit): ');
  // Checks if the user wants to quit and prints "Goodbye!"
  if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
    console.log('Goodbye!');
    break;
  }

  // Converts the user input to a number
  marks = parseInt(userInput);

  // The function is called so that the grade is displayed
  const grade = grading(marks);
  console.log(`Your grade is ${grade}`);
}
