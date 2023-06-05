// JavaScript code
const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');
const loginPopup = document.getElementById('loginPopup');

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginPopup.style.display = 'flex';
});

signupLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Add code here to redirect to the signup page or handle signup logic.
    // For example, you can redirect to a separate signup.html page:
    window.location.href = 'signup.html';
  });