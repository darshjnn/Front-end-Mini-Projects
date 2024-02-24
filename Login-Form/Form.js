// For Rotating Card
const createaccAnchor = document.getElementById("createaccAnchor");
const container = document.getElementById("container");
createaccAnchor.addEventListener('click', () => {
    container.style.transform = "rotateY(180deg)";
});

const closeCreateAcc = document.getElementById("closeCreateAcc");
closeCreateAcc.addEventListener('click', () => {
    container.style.transform = "rotateY(360deg)";
});

// For Date of Birth Fieldset
const userDobInp = document.getElementById("userDobInp");
const DOBresetBtn = document.getElementById("DOBresetBtn");
userDobInp.onfocus = (e) => {
    e.target.type = 'date';
};
userDobInp.onblur = (e) => {
    if (!e.target.value) {
        e.target.type = 'text';
    }
}

// For All Button's Hover Animation
const hoverFunction = document.getElementsByClassName("hoverFunction");
for (let i = 0; i < hoverFunction.length; i++) {
    hoverFunction[i].onmousemove = function (e) {
        const x = e.layerX;
        const y = e.layerY;

        hoverFunction[i].style.setProperty('--x', x + 'px');
        hoverFunction[i].style.setProperty('--y', y + 'px');
    }
}

// For Generate Password Button
const userPswInp = document.getElementById("userPswInp");
const generatePswBtn = document.getElementById("generatePswBtn");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()[]{}/|-=+_~<>?.,;:";
const allChar = upperCase + lowerCase;
const allCharSet = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    for (let i = 0; i < 2; i++) {
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];
    }
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    password = password.shuffle();
    userPswInp.value = password;
}
generatePswBtn.addEventListener('click', createPassword);

// Function to Shuffle Characters of Password
String.prototype.shuffle = function () {
    let a = this.split('');
    for (let i = 0; i < a.length; i++) {
        let j = Math.floor(Math.random() * i);
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
}

// For Copy Button Function
document.getElementById("copyBtn").addEventListener('click', () => {
    userPswInp.select();
    userPswInp.setSelectionRange(0, 99999);   // For mobile devices
    navigator.clipboard.writeText(userPswInp.value);
});

const copyBtn = document.getElementById("copyBtn");
const copyBtnImg = document.getElementById("copyBtnImg");
const resetBtn = document.getElementById("resetBtn");
const copyBtnHoverContent = document.getElementById("copyBtnHoverContent");
const copyBtnHover = document.getElementById("copyBtnHover");

copyBtn.addEventListener('click', () => {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/check-square-svgrepo-com.svg';
    copyBtnHoverContent.innerHTML = "Copied!";
    copyBtnHover.classList.add("copiedBtnHover");
    setTimeout(resetCopyBtn, 3000);
});

resetBtn.addEventListener('click', () => {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/copy-svgrepo-com.svg';
    copyBtnHoverContent.innerHTML = "Copy?";
    copyBtnHover.classList.remove("copiedBtnHover");
});

generatePswBtn.addEventListener('click', () => {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/copy-svgrepo-com.svg';
    copyBtnHoverContent.innerHTML = "Copy?";
    copyBtnHover.classList.remove("copiedBtnHover");
});

function resetCopyBtn() {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/copy-svgrepo-com.svg';
    copyBtnHoverContent.innerHTML = "Copy?";
    copyBtnHover.classList.remove("copiedBtnHover");
}

// To Hide-Show Password
const PswInp = document.getElementsByClassName("PswInp");
const passwordEye = document.getElementsByClassName("passwordEye");
const showPassword = document.getElementsByClassName("showPassword");
const animateHeight = document.getElementsByClassName("animateHeight");
const passwordEyeHoverContent = document.getElementsByClassName("passwordEyeHoverContent");

for (let i = 0; i < passwordEye.length; i++) {
    passwordEye[i].addEventListener('click', () => {
        if (passwordEye[i].className.includes('showPassword')) {
            passwordEye[i].classList.remove('showPassword');
            PswInp[i].type = "text";
            animateHeight[i].style.height = "0";
            animateHeight[i].style.bottom = "3px";
            animateHeight[i].style.top = "auto";
            passwordEyeHoverContent[i].innerHTML = "Hide";
        }
        else {
            passwordEye[i].classList.add('showPassword');
            PswInp[i].type = "password";
            animateHeight[i].style.height = "35px";
            animateHeight[i].style.top = "6px";
            animateHeight[i].style.bottom = "auto";
            passwordEyeHoverContent[i].innerHTML = "Show";
        }
    });
}

// Form Validation
/*
Check following website for form validation:
https://www.w3resource.com/javascript/form/javascript-form-validation.php
*/

const submitBtn = document.querySelectorAll('button[type = "submit"]');
const createAccBtn = document.getElementById("createAccBtn");

// 1. Check Empty Fields
// Check if there is any empty field left and show a prompt if any empty field is there
const userloginInfo = document.getElementsByClassName('userloginInfo');
const loginField = document.getElementsByClassName("loginField");

const newAccInfo = document.getElementsByClassName('newAccInfo');
const createAccField = document.getElementsByClassName("createAccField");

for (let i = 0; i < submitBtn.length; i++) {
    submitBtn[i].addEventListener('click', () => {
        if (submitBtn[i].id == "logInBtn") {
            for (let j = 0; j < userloginInfo.length; j++) {
                checkEmptyField(userloginInfo[j], loginField[j]);
            }
        }
        else if (submitBtn[i].id == "createAccBtn") {
            for (let j = 0; j < newAccInfo.length; j++) {
                checkEmptyField(newAccInfo[j], createAccField[j]);
            }
        }
    });
}

function checkEmptyField(e, f) {
    if (e.value == "") {
        f.classList.add('emptyFieldPopup');
        setTimeout(() => {
            f.classList.remove('emptyFieldPopup');
        }, 5000);
    }
    else {
        f.classList.remove('emptyFieldPopup');
    }
}

// Preventing Default pop-up of "required" input field without removing validation
const requiredInput = document.querySelectorAll('input');
for (let i = 0; i < requiredInput.length; i++) {
    document.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
            requiredInput[i].focus();
        };
    })(), true);
}

// 2. Name field Validation for letters only
// Verify if the user has entered only alphabets in Enter Name input
let letters = /^[A-za-z]+$/;
const userNameInp = document.NewUserRegistration.userNameInp;
createAccBtn.addEventListener('click', () => {
    if (userNameInp.value.match(letters)) {
        return true;
    }
    else {
        userNameInp.parentElement.classList.add("invalidFieldPopup");
        setTimeout(() => {
            userNameInp.parentElement.classList.remove("invalidFieldPopup");
        }, 5000);
    }
});

// 3. E-mail Validation

/*
Regular Expression Pattern for E-mail Validation
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
*/

// RFC 2822 Standard E-mail Validation
let mailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]| \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?| \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]: (?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const userMailInp = document.NewUserRegistration.userMailInp;
createAccBtn.addEventListener('click', () => {
    if (userMailInp.value.match(mailFormat)) {
        return true;
    }
    else {
        userMailInp.parentElement.classList.add("invalidFieldPopup");
        setTimeout(() => {
            userMailInp.parentElement.classList.remove("invalidFieldPopup");
        }, 5000);
    }
});

// 4. Mobile Number Validation
/*
To valididate a phone number like:
XXX-XXX-XXXX
XXX.XXX.XXXX
XXX XXX XXXX
*/
let numberFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const userMobileInp = document.getElementById("userMobileInp");
createAccBtn.addEventListener('click', () => {
    if (userMobileInp.value.match(numberFormat)) {
        return true;
    }
    else {
        userMobileInp.parentElement.classList.add("invalidFieldPopup");
        setTimeout(() => {
            userMobileInp.parentElement.classList.remove("invalidFieldPopup");
        }, 5000);
    }
});

// 5. Password Validation & Password Strength Checker

// https://www.w3resource.com/javascript/form/javascript-form-validation.php
const strongPsw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,15}$/;
const mediumPsw1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,11}$/;
const mediumPsw2 = /^(?=.*\d)(?=.*[A-Z])(?!.*\s).{5,8}$/;
const mediumPsw3 = /^(?=.*\d)(?=.*[a-z])(?!.*\s).{5,8}$/;

createAccBtn.addEventListener('click', () => {
    if (userPswInp.value.match(strongPsw)) {
        console.log("kadak h");
    }
    else if (userPswInp.value.match(mediumPsw1) || userPswInp.value.match(mediumPsw2) || userPswInp.value.match(mediumPsw3)) {
        console.log("thik hi h")
    }
    else {
        console.log("katega")
    }
});