// Initialize EmailJS
(function() {
    emailjs.init("vbN646JNojGNp7J8f"); // Replace with your EmailJS user ID
})();

document.getElementById('sendOtpBtn').addEventListener('click', sendOTP);
document.getElementById('verifyOtpBtn').addEventListener('click', verifyOTP);
document.getElementById('registrationForm').addEventListener('submit', validateForm);

let generatedOTP;

function sendOTP() {
    const email = document.getElementById('email').value;
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    const templateParams = {
        to_email: email,
        otp: generatedOTP
    };

    emailjs.send('service_31wvdln', 'template_cpuhzdb', templateParams)
        .then(() => {
            alert('OTP sent to your email!');
            document.getElementById('otpSection').style.display = 'block';
        }, (error) => {
            console.log('FAILED...', error);
        });
}

function verifyOTP() {
    const userOTP = document.getElementById('otp').value;
    if (userOTP === generatedOTP) {
        alert('OTP verified!');
        document.getElementById('submitBtn').disabled = false;
    } else {
        alert('Invalid OTP, please try again.');
    }
}

function validateForm(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Registration successful!');
    // Add your form submission logic here
}
