        // Prevent empty submission and give user feedback
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("Please fill in all fields.");
                event.preventDefault(); // Stop form submission
            } else {
                alert("Login successful!");
                // Allow form submission or redirect as needed
            }
        });

        // Toggle Password Visibility
        function togglePassword() {
            const passwordInput = document.getElementById("password");
            const toggleText = document.querySelector(".toggle-password");
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggleText.textContent = "Hide Password";
            } else {
                passwordInput.type = "password";
                toggleText.textContent = "Show Password";
            }
        }
