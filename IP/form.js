function validateForm() {
  // Validate name
  var nameInput = document.getElementById('name');
  var name = nameInput.value.trim();
  var nameRegex = /^[A-Za-z\s]+$/; // Basic email format
  if (!nameRegex.test(name)) {
    alert('Please enter a valid name.');
    nameInput.focus();
    return false;
  }

  // Rest of the validation logic for other fields

  // Validate phone number
  var phoneInput = document.getElementById('phonenum');
  var phone = phoneInput.value.trim();
  var phoneRegex = /^\d{11}$/; // 11-digit number
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid 11-digit phone number.');
    phoneInput.focus();
    return false;
  }

  // Validate email
  var emailInput = document.getElementById('email');
  var email = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // Basic email format
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }


  // Form validation successful
  return true;
}

