// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Select the form and total cost display element
    const form = document.getElementById('petrol-form');
    const costDisplay = document.getElementById('total-cost');
  
    // Listen for form submit
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent page refresh
  
      // Get input values
      const costPerLiter = parseFloat(document.getElementById('cost-per-liter').value);
      const liters = parseFloat(document.getElementById('liters').value);
  
      // Validate input
      if (isNaN(costPerLiter) || isNaN(liters) || costPerLiter < 0 || liters < 0) {
        costDisplay.textContent = 'Please enter valid positive numbers.';
        costDisplay.style.color = 'red';
        return;
      }
  
      // Calculate total cost
      const totalCost = (costPerLiter * liters).toFixed(2);
  
      // Display the result
      costDisplay.textContent = `Total cost: ${totalCost}`;
      costDisplay.style.color = '#222';
    });
  });
  