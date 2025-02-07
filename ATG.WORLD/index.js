// Actions for Join Group button on smaller screen
const grpBtn = document.getElementById("grpBtn");
grpBtn.addEventListener('click', () => {
    if (grpBtn.innerHTML === "Leave Group") {
        grpBtn.innerHTML = "Join Group";
    } else {
        grpBtn.innerHTML = "Leave Group";
    }
});

// Change background of navbar on scroll
const navBar = document.getElementById("navBar");
window.onscroll = () => {
    if (document.body.scrollTop >= 490 || document.documentElement.scrollTop >= 490) {
        navBar.classList.add("navBar");
    } else {
        navBar.classList.remove("navBar");
    }
};

// Actions for Join Group button
const grpAction = document.getElementById("grpAction");
grpAction.addEventListener('click', () => {
    if (grpAction.classList.contains("btn-primary")) {
        grpAction.classList.toggle("btn-outline-secondary");
        grpAction.classList.toggle("btn-primary");
        grpAction.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
        fill="#ADB5BD">
        <path
        d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z" />
        </svg>
        &nbsp;Leave Group
        `;
    } else if (grpAction.classList.contains("btn-outline-secondary")) {
        grpAction.classList.toggle("btn-outline-secondary");
        grpAction.classList.toggle("btn-primary");
        grpAction.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
        fill="#ffffff">
        <path
        d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
        </svg>
        &nbsp;Join Group
        `;
    }
});

// Actions for follow and Unfollow button
const followBtn = document.getElementsByClassName("followBtn");
for (let btn of followBtn) {
    btn.addEventListener('click', () => {
        if (btn.classList.contains("followBtn")) {
            btn.classList.toggle("followBtn");
            btn.classList.toggle("unfollowBtn");
            btn.classList.toggle("border-0");
            btn.innerHTML = "Unfollow";
        } else {
            btn.classList.toggle("followBtn");
            btn.classList.toggle("unfollowBtn");
            btn.classList.toggle("border-0");
            btn.innerHTML = "Follow";
        }
    })
}

// Create Account Form Validation
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

// Switch between Sign in and Create Account
const signInBtn = document.getElementsByClassName("signInBtn");
const switchSignIn = document.getElementById("switchSignIn");
const createAcc = document.getElementById("createAcc");

for (btn of signInBtn) {
    btn.addEventListener('click', () => {
        if (switchSignIn.classList.contains("d-none")) {
            switchSignIn.classList.toggle("d-none");
            createAcc.classList.toggle("d-none");
            btn.innerHTML = `Create Account instead? <span class="text-primary">Create Account</span>`;
        } else {
            switchSignIn.classList.toggle("d-none");
            createAcc.classList.toggle("d-none");
            btn.innerHTML = `Already have an account? <span class="text-primary">Sign in</span>`;
        }
    });
}

// Action for favorite button
const favorite = document.getElementsByClassName("favorite");
// console.log(favorite[2])
for (let i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener('click', () => {
        if (favorite[i].classList.contains("like")) {
            favorite[i].classList.toggle("like");
            favorite[i].innerHTML = `<img src="./Assets/removelike.svg" alt="removLike"> 
        <div>Remove from Favorites</div>`;
        } else {
            favorite[i].classList.toggle("like");
            favorite[i].innerHTML = `<img src="./Assets/like.svg" alt="like"> 
        <div>Add to Favorites</div>`;
        }
    });
}