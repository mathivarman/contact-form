//popup click button
document.getElementById('contactUsBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});
document.getElementsByClassName('close-btn')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    // Reset error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    // Name validation
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required.';
        valid = false;
    }
    // Address validation
    if (!address) {
        document.getElementById('addressError').innerText = 'Address is required.';
        valid = false;
    }
    // Phone validation
    const phonePattern = /^\+94\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Invalid Phone Number. It should start with +94 and be followed by exactly 9 digits.';
        valid = false;
    }
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email';
        valid = false;
    }
    // Message length validation
    if (message.length < 10) {
        document.getElementById('messageError').innerText = 'Message should be at least 10 characters long.';
        valid = false;
    }
    if (valid) {
        // Store data in local storage
        const contactData = {
            name,
            address,
            phone,
            email,
            message
        };
        localStorage.setItem('contactData', JSON.stringify(contactData));
        // Show success alert
        alert('Contact Data Submitted successfully!');
        // Close the modal
        document.getElementById('modal').style.display = 'none';
    }
});