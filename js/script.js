//registration_form.html
const form = document.getElementById("clubForm");
const name = document.getElementById("name");
const studentId = document.getElementById("studentId");
const phoneNumber = document.getElementById("phoneNumber");
const studentEmail = document.getElementById("studentEmail");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isNameValid = false;
    let isStudentIdValid = false;
    let isPhoneNumberValid = false;
    let isEmailValid = false;
        

    if (name.value.trim() === "") {
        showError(name, "Name is required*");
        isNameValid = false;
    } else {
        showSuccess(name);
        isNameValid = true;
    }

    if (studentId.value.trim() === "") {
        showError(studentId, "Student ID is required*");
        isStudentIdValid = false;
    } else if (studentId.value.trim().length !== 8) {
        showError(studentId, "Invalid Student ID");
        isStudentIdValid = false;
    } else if (!studentId.value.trim().toLowerCase().startsWith("tp")) {
        showError(studentId, "Invalid Student ID");
        isStudentIdValid = false;
    } else {
        showSuccess(studentId);
        isStudentIdValid = true;
    }

    if (phoneNumber.value.trim() === "") {
        showError(phoneNumber, "Phone Number is required*");
        isPhoneNumberValid = false;
    } else {
        showSuccess(phoneNumber);
        isPhoneNumberValid = true;
    }

    if (studentEmail.value.trim() === "") {
        showError(studentEmail, "Student Email Address is required*");
        isEmailValid = false;
    } else if (!studentEmail.value.trim().endsWith("@mail.apu.edu.my")) {
        showError(studentEmail, "Invalid Student Email Address");
        isEmailValid = false;
    } else if (!studentEmail.value.trim().toLowerCase().startsWith("tp")) {
        showError(studentEmail, "Invalid Student Email Address");
        isEmailValid = false;
    } else if (studentEmail.value.trim().length !== 24) {
        showError(studentEmail, "Invalid Student Email Address");
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