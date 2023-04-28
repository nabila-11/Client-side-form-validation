const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const usernameValue = username.value.trim();
console.log(usernameValue)
form.addEventListener('submit', (event)=> {
event.preventDefault();

checkInputs();
});


function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    // Username
    if(usernameValue === "") {
        // ShowError
        // Add error class
        setErrorFor(username, 'Username cannot be empty!');
    } else {
        // Add success class
        setSuccessFor(username);
    }


    // Email
    if(emailValue === "") {
        setErrorFor(email, "Email cannot be empty!");
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    }
    else {
        setSuccessFor(email);
    }

    // password
    if(passwordValue === '') {
        setErrorFor(password, "Password cannot be empty!");
    }
    else {
        setSuccessFor(password);
    }

    // Confirm password
    if(password2Value === '') {
        setErrorFor(password2, "Confirm Password cannot be empty!"); 
    }
    else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Password does not match");
    }
    else {
        setSuccessFor(password2);
    }


    // Error Message
    function setErrorFor(input, message) {
       const formControl = input.parentElement;
       const small = formControl.querySelector('small');
    //    Add error message
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
    }


    // Success Message
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }


    // Email Validation
    function isEmail(email) {
        return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}