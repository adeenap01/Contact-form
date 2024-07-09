document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    let hasError = false;

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email) || email.length < 5) {
        document.getElementById('emailError').innerText = 'Incorrect Email , Please enter valid Email address.';
        hasError = true;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits.';
        hasError = true;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a symbol.';
        hasError = true;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match . Make sure the password should be same.';
        hasError = true;
    }

    if (hasError) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});

