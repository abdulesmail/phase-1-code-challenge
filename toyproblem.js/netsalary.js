// Monthly PAYE (From 1 July 2023)

"use strict"; // This allows for error checking 
const prompt = require("prompt-sync")(); // 'Prompt sync'  for user input

// Prompt the user input: To enter the Salary
const grossSalary = parseFloat(prompt(`Enter your salary : `))

// Function that claculates the paye tax
function calculatePaye(grossSalary) {
  if (isNaN(grossSalary) || grossSalary < 0) {
    console.log('Invalid input. Please enter a valid number!!! NB:Should be greater than 0');
  } 
  else if (grossSalary <= 24000) {
    return (grossSalary * 0.01) //  1% tax rate for the first income bracket
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
    return (grossSalary - 24000) * 0.25 // 25% tax rate for the second income bracket
  } else if (grossSalary >= 32334 && grossSalary <= 500000) {
    return (grossSalary - 32333) * 0.30 // 30% tax rate for the third income bracket
  } else if (grossSalary >= 500001 && grossSalary <= 800000) {
    return (grossSalary - 500000) * 0.325 // 32.5% tax rate for the fourth income bracket
  } else if (grossSalary > 800000) {
    return (grossSalary - 800000) * 0.35 // 35% tax rate for the fifth income bracket
  }
} // Calculate PAYE tax

const paye = Math.round(calculatePaye(grossSalary)); 
console.log (`PAYE: ${paye}`)

// DEDUCTIONS::
// Calculate NHIF Deductions
function nhifDeduction(grossSalary) {
  let nhifdeduction = 0;

  switch (true) {
    case grossSalary <= 5999:
      nhifdeduction = 150; // Fixed deduction of 150 for the lowest income bracket
      break;
    case grossSalary <= 7999:
      nhifdeduction = 300; // Fixed deduction of 300 for the second income bracket
      break;
    // ... (Repeat the process for other income brackets)
    case grossSalary <= 99999:
      nhifdeduction = 1700; // Fixed deduction of 1700 for the highest income bracket
      break;
  }

  console.log(`NHIF Deduction: ${nhifdeduction}`)

  // The nhifdeduction function is called 
  return nhifdeduction
} 

// Calculate NSSF deduction (Tier 1) as 6% of gross salary
const nssfTier1 = grossSalary * 0.06; // Tier 1 NSSF rate (6% of gross salary)

console.log(`NSSF Tier 1 Deduction: ${nssfTier1}`);

// Calculate net pay 
// NetPay = gross salary - (Other Deductions)
const totalDeductions = Math.round(paye + nhifDeduction(grossSalary) + nssfTier1)
console.log(`Total Deductions : ${totalDeductions}`)

const netPay = Math.round(grossSalary - totalDeductions);

console.log(`Net Pay: ${netPay}`);

// A infinite loop that is created to for the user to exit 
while (true) {
  const userInput = prompt('Type "exit" to quit): ');
  // checks if the user wants to quit and prints "Goodbye!"
  if (userInput.toLowerCase() === 'exit' ) {
    console.log('Goodbye!');
    break;
  }
  
  // Converts the user input into a number
  marks = parseInt(userInput);
}