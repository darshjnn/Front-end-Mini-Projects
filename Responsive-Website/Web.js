const hambugerBars = document.getElementById("hambugerBars");

const inputbarBtn = document.getElementById("barBtn");

inputbarBtn.addEventListener('click', () => {
    hambugerBars.classList.toggle("is-active")
});