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

// For Log in Button Hover Animation
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

const length = 10;

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

copyBtn.addEventListener('click', () => {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/check-square-svgrepo-com.svg';
    setTimeout(resetCopyImg, 3000);
});

resetBtn.addEventListener('click', () => {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/copy-svgrepo-com.svg';
});

generatePswBtn.addEventListener('click', () => {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/copy-svgrepo-com.svg';
});

function resetCopyImg() {
    copyBtnImg.src = '/Front-end-Mini-Projects/Login-Form/SVG/copy-svgrepo-com.svg';
}

// To Hide-Show Password
const PswInp = document.getElementsByClassName("PswInp");
const passwordEye = document.getElementsByClassName("passwordEye");
const showPassword = document.getElementsByClassName("showPassword");

for (let i = 0; i < showPassword.length; i++) {
    passwordEye[i].addEventListener('click', () => {
        if (showPassword[i].style.display == "block") {
            showPassword[i].style.display = "none";
            PswInp[i].type = "text";
        }
        else if (showPassword[i].style.display = "none") {
            showPassword[i].style.display = "block";
            PswInp[i].type = "password";
        }
    });
}

// Password Strength Checker
// https://www.w3resource.com/javascript/form/javascript-form-validation.php