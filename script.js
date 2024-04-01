
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.role-option');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('selected')); // Remove 'selected' class from all buttons
            this.classList.add('selected'); // Add 'selected' class to the clicked button
        });
    });


    // Reusable email validation function
    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Registration Form Validation
    var regForm = document.getElementById('itSupportFormRegister');
    if (regForm) {
        regForm.addEventListener('submit', handleRegistrationSubmit);
    }

    // Login Form Validation
    var loginForm = document.getElementById('itSupportFormLogin');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }

    // IT Issue Log Form Validation
    var issueLogForm = document.getElementById('itIssueLogForm');
    if (issueLogForm) {
        issueLogForm.addEventListener('submit', handleIssueLogSubmit);
    }

    // Registration Form Validation
    function handleRegistrationSubmit(event) {
        event.preventDefault(); // Prevent form submission to view the validation result


        var isValid = true;
        var email = document.getElementById('registerEmail').value; // Assume unique ID for register form
        var password = document.getElementById('registerPassword').value; // Assume unique ID for register form
        var repeatPassword = document.getElementById('repeatPassword').value;
        var termsChecked = document.getElementById('terms').checked;

        // Validate email
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Password length validation
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            isValid = false;
        }

        // Password match validation
        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            isValid = false;
        }

        // Terms and conditions checkbox validation
        if (!termsChecked) {
            alert('You must agree to the terms and conditions.');
            isValid = false;
        }

        // Check for empty fields in name and email as password fields are already checked above
        var inputs = this.querySelectorAll('input[type="text"], input[type="email"]');
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                alert('Please fill in all fields.');
                isValid = false;
                return;
            }
        });

        if (isValid) {
            // Form is valid, you can proceed with form submission or AJAX call here
            alert('Your registration is successful.');
            // Redirect to the login page
            window.location.href = 'login.html';
        }
    }

    // Login Form Validation
    function handleLoginSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        var isValid = true;
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        // Validate email
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Validate that the password field is not empty
        if (!password.trim()) {
            alert('Please enter your password.');
            isValid = false;
        }
        console.log(isValid)

        if (isValid) {
            // If form validation is successful, proceed to dashboard
            alert('Login successful.');
            window.location.href = 'logForm.html'; // Redirect to the dashboard page
        }
    }

    function handleIssueLogSubmit(event) {
        event.preventDefault();

        var isValid = true;
        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var location = document.getElementById('location').value;
        var issueDescription = document.getElementById('issueDescription').value;

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (!name.trim()) {
            alert('Please enter your name.');
            isValid = false;
        }

        if (!location.trim()) {
            alert('Please enter the location of the fault.');
            isValid = false;
        }

        if (!issueDescription.trim()) {
            alert('Please enter a description of the issue.');
            isValid = false;
        }

        if (isValid) {
            alert('Your IT support request has been submitted.');
            // Here, you could reset the form or handle the data further
            // Reset the form after successful submission
            document.getElementById('itIssueLogForm').reset();
        }
    }
});