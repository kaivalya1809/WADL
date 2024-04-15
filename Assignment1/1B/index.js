function validateForm() {
  var name = document.getElementById('form3Example1c').value;
  var email = document.getElementById('form3Example3c').value;
  var password = document.getElementById('form3Example4c').value;
  var confirmPassword = document.getElementById('form3Example4cd').value;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert('Please fill in all fields and agree to the terms.');
    return false;
  }

  if (password.length < 8) {
    alert("Password must be atleast 8 characters long");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    alert("Password must contain a uppercase letter");
    return false;
  }
  if (!/[a-z]/.test(password)) {
    alert("Password must contain a lower letter");
    return false;
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password must contain a spercial character");      
    return false;
  }
  if (password != confirmPassword) {
    alert("Password doesnt match");
    return false;
  }

  return true;
}


function submitForm() {
  if (validateForm()) {
    alert('Form submitted successfully!');
  }
}