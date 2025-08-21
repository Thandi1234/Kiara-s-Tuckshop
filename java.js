// Calculate the total price based on selected checkboxes
function calculateTotal() {
  const checkboxes = document.querySelectorAll('.product');
  let total = 0;

  checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
          total += parseFloat(checkbox.getAttribute('data-price'));
      }
  });

  document.getElementById('totalDisplay').textContent = `Total: R${total.toFixed(2)}`;
}

// Clear all form inputs and total display
function clearForm() {
  const checkboxes = document.querySelectorAll('.product');
  checkboxes.forEach((checkbox) => checkbox.checked = false);

  document.getElementById('totalDisplay').textContent = 'Total: R0.00';
}

// Handle form submission
document.getElementById('salesForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent real submission
  alert('Order submitted successfully!');
  clearForm();
});
