// HTML Content of headcontent
let headcontentText = {
    0: `<p class="headContentP"></p>
        <h1>25M+ Downloads</h1>
        <p class="headContentP">on appstore & google playstore</p>`,
    1: `<p class="headContentP mb-0 me-5 pe-5">The Next Big</p>
        <h1 class="mt-0">BlockChain</h1>
        <p class="headContentP">Revolution</p>`,
    2: `<p class="headContentP mb-0" style="margin-right: 145px;">Redefining</p>
        <h1 class="mt-0">UX Strategy</h1>
        <p class="headContentP">and UI Design</p>`,
    3: `<p class="headContentP mt-5 mb-0 me-5 pe-4">Powered by advance</p>
        <h1 class="my-0">
            <img src="./Assets/nasa-mobile-app.png" alt="nasa">
        </h1>
        <p class="headContentP">algorithms</p>`,
    4: `<p class="headContentP mb-0" style="margin-right: 150px;">Text Headline</p>
        <h1 class="mt-0">Text Headline</h1>
        <p class="headContentP">Footer Headline</p>`,
    5: `<p class="headContentP mb-0">Developing ERP Solution for</p>
        <h1 class="mt-0">Text Headline</h1>
        <p class="headContentP">in furniture industry</p>`,
    6: `<p class="headContentP mb-0">Biggest Classifieds</p>
        <h1 class="mt-0">East Asia</h1>
        <p class="headContentP">Countries</p>`
};

let headcontent = document.querySelector(".headContent");
headcontent.innerHTML = headcontentText[0];

let slideCircle = document.getElementsByClassName("slideCircle");
let leftCol = document.getElementsByClassName("leftCol");
let rightCol = document.getElementsByClassName("rightCol");

let rightColImgDiv = document.getElementsByClassName("rightColImgDiv");
let imgSlideBottom = document.getElementsByClassName("imgSlideBottom");
let imgSlideTop = document.getElementsByClassName("imgSlideTop");
let isActiveImg = document.getElementsByClassName("is-active-img");

let slideCircleCurrent = slideCircle[0];
let leftColCurrent = leftCol[0];
let rightColCurrent = rightCol[0];
let rightColImgDivCurrent = rightColImgDiv[0];

let current = 0;

// Function for Slide Change
function changeSlide(i) {
    current = i;
    rightColImgDivCurrent.classList.toggle("is-active-slide");
    rightColImgDivCurrent = rightColImgDiv[i]
    setTimeout(() => {
        slideCircleCurrent = slideCircle[i];
        leftColCurrent.classList.toggle("d-none");
        leftColCurrent.classList.toggle("is-Active-Page");

        rightColCurrent.classList.toggle("d-none");
        rightColCurrent.classList.toggle("is-Active-Page");

        leftColCurrent = leftCol[i];
        rightColCurrent = rightCol[i];

        headcontent.innerHTML = headcontentText[current];

        leftCol[i].classList.toggle("d-none");
        leftCol[i].classList.toggle("is-Active-Page");
        leftCol[i].style.background = 'var(--leftCol' + (i + 1) + ')';

        shape.style.background = 'var(--leftCol' + (i + 1) + ')';

        rightCol[i].classList.toggle("d-none");
        rightCol[i].classList.toggle("is-Active-Page");
        rightCol[i].style.background = 'var(--rightCol' + (i + 1) + ')';
    }, 500);
}

// Function for Animating Path Slider SVG
let pathLen = document.getElementsByClassName("pathLen");
let sliderPath = document.querySelector(".sliderPath");
let sliderPathTotalLen = sliderPath.getTotalLength();

let sliderCircleSVG = document.getElementsByClassName("sliderCircleSVG");
sliderPath.setAttribute("stroke-dasharray", sliderPathTotalLen)
sliderPath.setAttribute("stroke-dashoffset", sliderPathTotalLen)

function drawSliderPath(i) {
    let sliderPathLen = 0;
    sliderPath.style.strokeDashOffset = 0;
    for (let j = 0; j < i; j++) {
        sliderPathLen += pathLen[j].getTotalLength();
    }
    sliderPath.setAttribute("stroke-dasharray", sliderPathTotalLen);
    sliderPath.setAttribute("stroke-dashoffset", sliderPathTotalLen - sliderPathLen);
    for (let j = 0; j < sliderCircleSVG.length; j++) {
        sliderCircleSVG[j].setAttribute("fill", "#B3C8CF");
    }

    for (let j = 0; j < i; j++) {
        sliderCircleSVG[j].setAttribute("fill", "#378CE7");
    }

    setTimeout(() => {
        sliderCircleSVG[i].setAttribute("fill", "#378CE7");
    }, 300)
}

// Animating Background on Click
for (let i = 0; i < slideCircle.length; i++) {
    slideCircle[i].addEventListener('click', () => {
        if (slideCircleCurrent != slideCircle[i]) {
            drawSliderPath(i)
            changeSlide(i);
            setTimeout(() => {
                rightColImgDiv[i].classList.toggle("is-active-slide");
            }, 610);
        }
    });
}

// Page Navigation Buttons
let pageUp = document.getElementById("pageUp");
let pageDown = document.getElementById("pageDown");

pageDown.addEventListener('click', () => {
    clearTimeout()
    if (current > 0) {
        pageUp.disabled = true;
        pageDown.disabled = true;
        --current;
        drawSliderPath(current)
        changeSlide(current);
        setTimeout(() => {
            rightColImgDiv[current].classList.toggle("is-active-slide");
            pageUp.disabled = false;
            pageDown.disabled = false;
        }, 610);
    }
});

pageUp.addEventListener('click', () => {
    if (current < slideCircle.length - 1) {
        pageUp.disabled = true;
        pageDown.disabled = true;
        ++current;
        drawSliderPath(current)
        changeSlide(current);
        setTimeout(() => {
            rightColImgDiv[current].classList.toggle("is-active-slide");
            pageUp.disabled = false;
            pageDown.disabled = false;
        }, 610);
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp") {
        pageUp.click();
    }
    else if (e.code === "ArrowDown") {
        pageDown.click();
    }
});

// Animating Text on Scroll Trigger

