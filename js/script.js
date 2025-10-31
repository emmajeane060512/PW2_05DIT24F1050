document.addEventListener("DOMContentLoaded",function() {
document.getElementById("phone").addEventListener("blur", function () {
  alert("You left the phone number field!");
});

// Highlight email field when focused
document.getElementById("email").addEventListener("focus", function () {
  this.style.backgroundColor = "#A55166";
});

// Convert name fields to uppercase on change
function convertToUpper(id) {
  const input = document.getElementById(id);
  input.addEventListener("change", function () {
    this.value = this.value.toUpperCase();
  });
}

convertToUpper("studentName");
convertToUpper("fatherName");
convertToUpper("motherName");

// Show modal on form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const modal = new bootstrap.Modal(document.getElementById("successModal"));
  modal.show();
});
});