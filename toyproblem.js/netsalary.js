// Constants
const monthlySalary = 24000; //Monthly taxable pay in Kenyan shillings
const annualTaxThreshold = 288000; //Annual tax pay threshold in Kenyan shillings
const taxRates = 0.10; //Tax rate (10%)
const nhifRango = [
  { min: 0, max: 85000, deduction: 750 },
  { min: 85001, max: Infinity, deduction: 1500},
];

const nssfRate = 0.06; //NSSF rate (6%)

// Function to calculate PAYE(Tax)
function calculatePAYE(salary) {
  if(salary * 12 <= annualTaxThreshold) {
    return 0;
  }
  const taxableIncome = salary * 12 - annualTaxThreshold;
  return taxable * taxRates / 12;
}

//Function to calculate NHIF Deductions
function calculateNHIF(salary) {
  for(const range of nhifRanges) {
    if(salary <= range.max) {
      return range.deduction;
    }
  }
}

// Function to calculate NSSF Deductions
function calculateNSSF(salary) {
  return salary * nssfRate;
}

// Main function to calculate Net salary
function calculateNetSalary(monthlySalary) {
  const annualSalary = monthlySalary * 12;
  const payee = calculatePAYE(monthlySalary);
  const nhifDeduction = calculateNHIF(annualSalary/12);
  const nssfDeduction = calculateNSSF(annualSalary/12);
  const netSalary = annualSalary - (payee * 12) - (nhifDeduction * 12) - (nssfDeduction * 12);
  return {
    payee,
    nhifDeduction,
    nssfDeduction,
    grossSalary,
    netSalary,
  };
}

// Calculate and display the results
const result = calculateNetSalary(monthlySalary);
console.log("PAYE (Tax):", result.payee, "Kenyan shillings");
console.log("NHIF Deduction:", result.nhifDeduction, "Kenyan shilling");
console.log("Gross Salary:", result.grossSalary, "Kenyan shilling");
console.log("Net Salary:", result.netSalary,"Kenyan shilling");