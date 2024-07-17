const navbarBtn = document.getElementById("navbarBtn");

const inputbarBtn = document.getElementById("barBtn");

inputbarBtn.addEventListener('click', () => {
    console.log(navbarBtn)
    navbarBtn.classList.toggle("is-active")
});