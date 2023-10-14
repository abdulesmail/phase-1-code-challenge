function calculateGrade() {
  // Prompt the user for input
  const input = prompt("Enter the student's marks (between 0 and 100):");

  // Convert the input to a number
  const marks = parseFloat(input);

  // Check if the input is a valid number and within the range
  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Invalid input! Please enter a valid number between 0 and 100.");
  } else {
    // Determine the grade based on the input marks
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    // Display the grade to the user
    alert(`The student's grade is: ${grade}`);
  }
}

// Call the function to calculate the grade
calculateGrade();
