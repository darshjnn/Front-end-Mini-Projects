const allquestion = [
    {
        easy: [
            {
                question: "Which type of language is JavaScript?",
                answers: [
                    { text: "A. Object-Oriented", correct: "false" },
                    { text: "B. Object-Based", correct: "true" },
                    { text: "C. Assembly-language", correct: "false" },
                    { text: "D. High-level", correct: "false" },
                ]
            },
            {
                question: "Which one of the following also known as Conditional Expression?",
                answers: [
                    { text: "A. Alternative to if-else", correct: "false" },
                    { text: "B. Switch statement", correct: "false" },
                    { text: "C. If-then-else statement", correct: "false" },
                    { text: "D. immediate if", correct: "true" },
                ]
            },
            {
                question: "In JavaScript, what is a block of statement?",
                answers: [
                    { text: "A. Conditional block", correct: "false" },
                    { text: "B. block that combines a number of statements into a single compound statement", correct: "true" },
                    { text: "C. both conditional block and a single statement", correct: "false" },
                    { text: "D. block that contains a single statement", correct: "false" },
                ]
            },
            {
                question: " When interpreter encounters an empty statements, what it will do?",
                answers: [
                    { text: "A. Shows a warning", correct: "false" },
                    { text: "B. Prompts to complete the statement", correct: "false" },
                    { text: "C. Ignores the statements", correct: "true" },
                    { text: "D. Throws an error", correct: "false" },
                ]
            },
            {
                question: 'The "function" and "var" are known as?',
                answers: [
                    { text: "A. Declaration statements", correct: "true" },
                    { text: "B. Keywords", correct: "false" },
                    { text: "C. Data types", correct: "false" },
                    { text: "D. Prototypes", correct: "false" },
                ]
            }
        ]
    },
    {
        medium: [
            {
                question: "Why JavaScript and Java have similar name?",
                answers: [
                    { text: "A. JavaScript is a stripped-down version of Java", correct: "false" },
                    { text: "B. JavaScript’s syntax is loosely based on Java’s", correct: "true" },
                    { text: "C. They both originated on the island of Java", correct: "false" },
                    { text: "D. None of the above", correct: "false" },
                ]
            },
            {
                question: "______ JavaScript is also called client-side JavaScript.",
                answers: [
                    { text: "A.  Microsoft", correct: "false" },
                    { text: "B. Native", correct: "false" },
                    { text: "C. LiveWire", correct: "false" },
                    { text: "D. Navigator", correct: "true" },
                ]
            },
            {
                question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
                answers: [
                    { text: "A.  Client-side", correct: "true" },
                    { text: "B. Server-side", correct: "false" },
                    { text: "C. Local", correct: "false" },
                    { text: "D. Native", correct: "false" },
                ]
            },
            {
                question: "______ JavaScript is also called server-side JavaScript.",
                answers: [
                    { text: "A.  Microsoft", correct: "false" },
                    { text: "B. Native", correct: "false" },
                    { text: "C. LiveWire", correct: "true" },
                    { text: "D. Navigator", correct: "false" },
                ]
            },
            {
                question: "Which of the following can’t be done with client-side JavaScript?",
                answers: [
                    { text: "A.  Validating a form", correct: "false" },
                    { text: "B. Sending a form’s contents by email", correct: "false" },
                    { text: "C. Storing the form’s contents to a database file on the server", correct: "true" },
                    { text: "D. None of the above", correct: "false" },
                ]
            }
        ]
    },
    {
        hard: [
            {
                question: "How does JavaScript store dates in a date object?",
                answers: [
                    { text: "A.  The number of milliseconds since January 1st, 1970.", correct: "true" },
                    { text: "B. The number of days since January 1st, 1900.", correct: "false" },
                    { text: "C. The number of seconds since Netscape’s public stock offering.", correct: "false" },
                    { text: "D. None of the above", correct: "false" },
                ]
            },
            {
                question: "Which of the following attribute can hold the JavaScript version?",
                answers: [
                    { text: "A. LANGUAGE", correct: "true" },
                    { text: "B. SCRIPT", correct: "false" },
                    { text: "C. VERSION", correct: "false" },
                    { text: "D. None of the above", correct: "false" },
                ]
            },
            {
                question: "Which of the following type of a variable is volatile?",
                answers: [
                    { text: "A. Mutable variable", correct: "true" },
                    { text: "B. Dynamic variable", correct: "false" },
                    { text: "C. Volatile variable", correct: "false" },
                    { text: "D. Immutable variable", correct: "false" },
                ]
            },
            {
                question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
                answers: [
                    { text: 'A. Prints an exception error', correct: "false" },
                    { text: 'B. Prints an overflow error', correct: "false" },
                    { text: 'C. Displays "Infinity"', correct: "true" },
                    { text: 'D. Prints the value as such', correct: "false" },
                ]
            },
            {
                question: "Which types of image maps can be used with JavaScript?",
                answers: [
                    { text: "A. Server-side image maps", correct: "false" },
                    { text: "B. Client-side image maps", correct: "true" },
                    { text: "C. Server-side image maps and Client-side image maps", correct: "false" },
                    { text: "D. None of the above", correct: "false" },
                ]
            }
        ]
    }
];

const start = document.getElementById("start");
const quit = document.getElementById("quit");
const queslevel = document.getElementById("level");
const attempt = document.getElementById("attemptedNo");
const mssg = document.getElementById("mssg");
const quesnum = document.getElementById("quesnum");
const question = document.getElementById("question");
const answerBtn = document.getElementById("answerBtn");
const nxtBtn = document.getElementById("nxt");
const prevBtn = document.getElementById("prev");
const check = document.getElementById("check");
const submit = document.getElementById("submit");

let level = null;
let index = 0;
let score = 0;

start.addEventListener('click', () => {
    resetOptions();
    level = null;
    index = 0;
    score = 0;
    start.style.width = "fit-content";
    start.innerHTML = "Select Level to Start";
    queslevel.style.display = "block";
    check.style.display = "none";
    quit.style.display = "none";
    document.getElementById("mainQuiz").style.display = "block";
    document.getElementById("scoreboard").style.display = "none";
});

function selectLevel(event) {
    level = event.target.value;
    document.getElementById("foot").style.display = "block";
    document.getElementById("navigate").style.display = "block";
    queslevel.style.display = "none";
    start.style.display = "none";
    showquest(level);
};

function showquest(level) {
    check.style.display = "none";
    revisited();
    if (index >= 5) {
        submitquiz();
    } else {
        quesnum.innerHTML = index + 1;

        if (level === "easy") {
            question.innerHTML = allquestion[0].easy[index].question;
            resetOptions();
            allquestion[0].easy[index].answers.forEach(answer => {
                createbtn(answer);
            })
        } else if (level === "medium") {
            resetOptions();
            question.innerHTML = allquestion[1].medium[index].question;
            allquestion[1].medium[index].answers.forEach(answer => {
                createbtn(answer);
            })
        } else if (level === "hard") {
            resetOptions();
            question.innerHTML = allquestion[2].hard[index].question;
            allquestion[2].hard[index].answers.forEach(answer => {
                createbtn(answer);
            })
        }
    }
    selectAnswer();
}

// Create button elements for options
function createbtn(answer) {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("opt");
    button.setAttribute("id", "opt" + index);
    answerBtn.appendChild(button);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    };
};

// Apply Design on selecting an option
function selectAnswer(e) {
    var selected;
    answerBtn.onclick = function (e) {
        var c = e.target;
        if (c.tagName === 'BUTTON') {
            e.stopPropagation();
            if (c.className.indexOf('selected') === -1) {
                if (selected) {
                    check.style.display = "none";
                    selected.className = selected.className.replace(/\s?selected/, '');
                };
                selected = c;
                selected.className += ' selected';
                check.style.display = "block";
            } else {
                check.style.display = "none";
                c.className = c.className.replace(/\s?selected/, '');
            }
        }
    };
    document.getElementById("resetopt").onclick = function (e) {
        selected.className = selected.className.replace(/\s?selected/, '');
        check.style.display = "none";
        selected = false;
    };
};

// Next Question
nxtBtn.addEventListener('click', () => {
    if (index < 4) {
        index += 1;
        showquest(level);
    }
});

// Previos Question
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index -= 1;
        showquest(level);
    }
});

// Check Answer and Counting Attempted Questions
let visitCount = 0;
check.addEventListener('click', checkanswer);
let visit = [null];
function checkanswer(e) {
    var node = answerBtn.getElementsByTagName("button");
    for (var i = 0; i < node.length; i++) {
        node[i].disabled = true;
        if (node[i].className.indexOf('selected') !== -1 && node[i].dataset.correct === "true") {
            score += 1;
            check.innerHTML = "Answered";
            check.disabled = true;
            node[i].style.background = "rgb(136, 171, 142)";
            node[i].style.color = "rgb(255, 251, 245)";
        } else {
            check.innerHTML = "Answered";
            check.disabled = true;
            if (node[i].dataset.correct === "true") {
                node[i].style.background = "rgb(136, 171, 142)";
                node[i].style.color = "rgb(255, 251, 245)";
            } else {
                node[i].style.background = "rgb(255, 105, 105)";
                node[i].style.color = "rgb(255, 249, 222)";
            }
            if (node[i].className.indexOf('selected') !== -1) {
                node[i].style.background = "rgb(255, 234, 32)";
                node[i].style.color = "rgb(9, 38, 53)";
            }
        }

    }
    visit += index;
    visitCount += 1;
    attempt.innerHTML = visitCount;
};

// Stopping the user to reanswer the same question by hiding check answer button
function revisited() {
    if (visit.includes(index)) {
        check.style.display = "block";
        check.innerHTML = "Answered";
        check.disabled = true;
    } else {
        check.innerHTML = "Check Answer";
        check.disabled = false;
    }
}

// Submit
submit.addEventListener('click', submitquiz);

function submitquiz() {
    resetOptions();
    quit.style.display = "block";
    document.getElementById("mainQuiz").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("scoreVal").textContent = score;
    document.getElementById("difficulty").textContent = "Level: " + level.toUpperCase();
    document.getElementById("attempted").textContent = visitCount;
    document.getElementById("navigate").style.display = "none";
    document.getElementById("foot").style.display = "none";
    if (score == 5) {
        mssg.innerHTML = "SAAT KARORRR!!!";
    } else if (score == 3 || score == 4) {
        mssg.innerHTML = "KADAK HAI!!!";
    } else if (score == 2) {
        mssg.innerHTML = "150 RUPIYA DEGA!!!";
    } else {
        mssg.innerHTML = "PADDAII LIKHAII KARO YRR!!!";
    }
};

// Reset Options
function resetOptions() {
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
};

// Quit
quit.addEventListener('click', () => {
    start.innerHTML = "Start";
    attempt.innerHTML = "-- ";
    quesnum.innerHTML = "-- ";
    question.innerHTML = "Your Question will <br> be displayed here..";
    score = 0;
    index = 0;
    level = null;
    visit = [null];
    visitCount = 0;
    resetOptions();
    start.style.display = "block";
    start.style.width = "95px";
    quit.style.display = "none";
    document.getElementById("scoreVal").textContent = score;
    document.getElementById("attempted").textContent = "--";
    document.getElementById("foot").style.display = "none";
    document.getElementById("mainQuiz").style.display = "none";
    document.getElementById("navigate").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
});