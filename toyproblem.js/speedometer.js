"use strict"; // Enable strict mode for enhanced error checking

//Import the 'Prompt-sync' library

const prompt = require('prompt-sync')();

//Function for the speed detector
function speedDetector() {
   // Is speed a Number or is it less than 0
  if (isNaN(speed) || speed < 0) {
    console.log('Invalid input. Please enter a valid number!!! Should be greater than 0');
  } else if (speed < 70) {   // The speed is less than 70 then it wil display "Ok."
    console.log('Ok.');
  } else {
    const aboveLimit = speed - 70;   // if speed is above the limit then we subtract the above limit from the speed.
    const demeritPoints = Math.ceil(aboveLimit / 5);  // The above limit is then divided by 5 and rounded to the nearest integer
    console.log(`Demerit points: ${demeritPoints}`);
    if (demeritPoints > 12) {
      console.log('License suspended!!!')
    }
  }
  
} 

let speed ;   // The variable the user will be assigned to

// By typing "exit",the program terminates
while (true) {
  const userInput = prompt("Enter the speed of the car: (type 'exit' to quit) ");
// User wants to exit it should display "goodbye"
  if (userInput.toLowerCase() === 'exit' ) {
    console.log('Goodbye!');
    break;
  }
  
  speed =  parseFloat(userInput);  // converts the speed from a string to a number
  speedDetector();   // The function speedDector is called 

}
