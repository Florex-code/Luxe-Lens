   document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission

      // Get values
      const fname = document.getElementById('fname').value.trim();
      const lname = document.getElementById('lname').value.trim();
      const pwd = document.getElementById('pwd').value;
      const confirmPwd = document.getElementById('confirm-pwd').value;
      const state = document.getElementById('state').value;
      const email = document.getElementById('email').value.trim();

      // Basic validation
      if (!fname || !lname || !pwd || !confirmPwd || !state || !email) {
        alert('Please fill in all fields.');
        return;
      }

      if (pwd !== confirmPwd) {
        alert('Passwords do not match!');
        return;
      }


      alert('Sign-up successful!');
      window.location.href = 'index.html'; // Redirect after success
    });