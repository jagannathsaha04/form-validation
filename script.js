var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var feedbackError = document.getElementById("feedback-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById('contact-name').value;
    
    if (name.length === 0) {
        nameError.innerHTML = '* Name is required *';
        return false;
    }
    
    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    
    nameError.innerHTML = '✓';
    nameError.style.color = 'green';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    
    if (phone.length == 0) {
        phoneError.innerHTML = '* Phone no. is required *';
        return false;
    }
    
    if (!phone.match(/^\d{10}$/)) {
        phoneError.innerHTML = '* Please enter a valid 10-digit number *';
        return false;
    }
    
    phoneError.innerHTML = '✓';
    phoneError.style.color = 'green';
    return true;
}

function validateEmail() {
    var email = document.querySelector('[type="email"]').value;
    
    if (email.length === 0) {
        emailError.innerHTML = '* Email is required *';
        return false;
    }
    
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = '* Please enter a valid email *';
        return false;
    }
    
    emailError.innerHTML = '✓';
    emailError.style.color = 'green';
    return true;
}

function validateFeedback() {
    var feedback = document.querySelector('textarea').value;
    
    if (feedback.length === 0) {
        feedbackError.innerHTML = '* Feedback is required *';
        return false;
    }
    
    feedbackError.innerHTML = '✓';
    feedbackError.style.color = 'green';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateFeedback()) {
        submitError.innerHTML = '* Please fix all errors before submitting *';
        return false;
    }
    return true;
}