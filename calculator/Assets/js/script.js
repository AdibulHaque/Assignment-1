// Function to perform calculation
function calculate() {
    // Retrieve input values
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
  
    // Perform calculation based on the selected operation
    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          document.getElementById('result').innerHTML = "Error: Cannot divide by zero";
          return;
        }
        break;
      default:
        document.getElementById('result').innerHTML = "Error: Invalid operation";
        return;
    }
  
    // Display the result
    document.getElementById('result').innerHTML = "Result: " + result;
  }
  
  // Event listener for form submission
  document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    calculate(); // Call the calculate function
  });
  