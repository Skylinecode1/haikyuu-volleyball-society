//registration_form.html
const form = document.getElementById("clubForm");
const Name = document.getElementById("Name");
const studentId = document.getElementById("studentId");
const phoneNumber = document.getElementById("phoneNumber");
const studentEmail = document.getElementById("studentEmail");



form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isNameValid = false;
    let isStudentIdValid = false;
    let isPhoneNumberValid = false;
    let isEmailValid = false;
    const validNameRegex = /^[a-zA-Z ]+$/; //Limits input to only characters a-z A-Z and spaces. + operator to match the more than 1 characters in a string.
    const validStudentIdRegex = /^tp\d{6}$/i;//Sets the beginning of the str to be tp (x case sensitive) and limit to 6 numerical characters after
    const invalidPhoneNumberRegex = /^\D$/; // Invalid regex for phone number = notNumbers 
    const validEmailRegex = /^tp\d{6}@mail\.apu\.edu\.my$/i;//Limits the front to tp (x case sensitive) followed by 6 numerical characters, set end to "mail.apu.edu.my"
    

    if (Name.value.trim() === "") {
        showError(Name, "Name is required*");
        isNameValid = false;
    } else if (!validNameRegex.test(Name.value.trim())) {
        showError(Name, "Name must not contain numbers*");
        isPhoneNumberValid = false;
    } else {
        showSuccess(Name);
        isNameValid = true;
    }
    
    if (studentId.value.trim() === "") {
        showError(studentId, "Student ID is required*");
        isStudentIdValid = false;
    } else if (!validStudentIdRegex.test(studentId.value.trim())) {
        showError(studentId, "Invalid Student ID*");
        isStudentIdValid = false;
    } else {
        showSuccess(studentId);
        isStudentIdValid = true;
    }

    if (phoneNumber.value.trim() === "") {
        showError(phoneNumber, "Phone Number is required*");
        isPhoneNumberValid = false;
    } else if (!phoneNumber.value.trim().startsWith("01")) {
        showError(phoneNumber, "Invalid Phone Number*");
        isPhoneNumberValid = false;
    } else if(phoneNumber.value.trim().length !== 10 && phoneNumber.value.trim().length !== 11) {
        showError(phoneNumber, "Phone Number length must be 10-11*");
        isPhoneNumberValid = false;
    } else if (invalidPhoneNumberRegex.test(phoneNumber.value.trim())) {
        showError(phoneNumber, "Phone Number must contain numbers only*");
        isPhoneNumberValid = false;
    } else {
        showSuccess(phoneNumber);
        isPhoneNumberValid = true;
    }

    if (studentEmail.value.trim() === "") {
        showError(studentEmail, "Student Email Address is required*");
        isEmailValid = false;
    } else if (!validEmailRegex.test(studentEmail.value.trim())) {
        showError(studentEmail, "Invalid Student Email Address*");
        isEmailValid = false;
    } else {
        showSuccess(studentEmail);
        isEmailValid = true;
    }

    if (isNameValid && isStudentIdValid && isPhoneNumberValid && isEmailValid) {
        setTimeout(() => {
            window.location.href = "../html/form_success.html";
        },2000);
    }
})


function showError(input, message) {
    const parent = input.parentElement;
    parent.className = 'form-group error';
    const small = parent.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const parent = input.parentElement;
    parent.className = 'form-group success';
}
