//Easy Level Questions
const EasyQuestions = [
    {
        question: "Which type of JavaScript language is ____?",
        answers: [
            {text: "A. Object-Oriented", correct: "false"},
            {text: "B. Object-Based", correct: "true"},
            {text: "C. Assembly-language", correct: "false"},
            {text: "D. High-level", correct: "false"},
        ]
    },
    {
        question: "Which one of the following also known as Conditional Expression?",
        answers: [
            {text: "A. Alternative to if-else", correct: "false"},
            {text: "B. Switch statement", correct: "false"},
            {text: "C. If-then-else statement", correct: "false"},
            {text: "D. immediate if", correct: "true"},
        ]
    },
    {
        question: "In JavaScript, what is a block of statement?",
        answers: [
            {text: "A. Conditional block", correct: "false"},
            {text: "B. block that combines a number of statements into a single compound statement", correct: "true"},
            {text: "C. both conditional block and a single statement", correct: "false"},
            {text: "D. block that contains a single statement", correct: "false"},
        ]
    },
    {
        question: " When interpreter encounters an empty statements, what it will do?",
        answers: [
            {text: "A. Shows a warning", correct: "false"},
            {text: "B. Prompts to complete the statement", correct: "false"},
            {text: "C. Ignores the statements", correct: "true"},
            {text: "D. Throws an error", correct: "false"},
        ]
    },
    {
        question: 'The "function" and "var" are known as?',
        answers: [
            {text: "A. Declaration statements", correct: "true"},
            {text: "B. Keywords", correct: "false"},
            {text: "C. Data types", correct: "false"},
            {text: "D. Prototypes", correct: "false"},
        ]
    }
];

//Medium Level Questions
const MedQuestions = [
    {
        question: "Why so JavaScript and Java have similar name?",
        answers: [
            {text: "A. JavaScript is a stripped-down version of Java", correct: "false"},
            {text: "B. JavaScript’s syntax is loosely based on Java’s", correct: "true"},
            {text: "C. They both originated on the island of Java", correct: "false"},
            {text: "D. None of the above", correct: "false"},
        ]
    },
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        answers: [
            {text: "A.  Microsoft", correct: "false"},
            {text: "B. Native", correct: "false"},
            {text: "C. LiveWire", correct: "false"},
            {text: "D. Navigator", correct: "true"},
        ]
    },
    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        answers: [
            {text: "A.  Client-side", correct: "true"},
            {text: "B. Server-side", correct: "false"},
            {text: "C. Local", correct: "false"},
            {text: "D. Native", correct: "false"},
        ]
    },
    {
        question: "______ JavaScript is also called server-side JavaScript.",
        answers: [
            {text: "A.  Microsoft", correct: "false"},
            {text: "B. Native", correct: "false"},
            {text: "C. LiveWire", correct: "true"},
            {text: "D. Navigator", correct: "false"},
        ]
    },
    {
        question: "Which of the following can’t be done with client-side JavaScript?",
        answers: [
            {text: "A.  Validating a form", correct: "false"},
            {text: "B. Sending a form’s contents by email", correct: "false"},
            {text: "C. Storing the form’s contents to a database file on the server", correct: "true"},
            {text: "D. None of the above", correct: "false"},
        ]
    },
];    

const HardQuestions = [
    {
        question: "How does JavaScript store dates in a date object?",
        answers: [
            {text: "A.  The number of milliseconds since January 1st, 1970.", correct: "true"},
            {text: "B. The number of days since January 1st, 1900.", correct: "false"},
            {text: "C. The number of seconds since Netscape’s public stock offering.", correct: "false"},
            {text: "D. None of the above", correct: "false"},
        ]
    },
    {
        question: "Which of the following attribute can hold the JavaScript version?",
        answers: [
            {text: "A. LANGUAGE", correct: "true"},
            {text: "B. SCRIPT", correct: "false"},
            {text: "C. VERSION", correct: "false"},
            {text: "D. None of the above", correct: "false"},
        ]
    },
    {
        question: "",
        answers: [
            {text: "A.  ", correct: "false"},
            {text: "B. ", correct: "false"},
            {text: "C. ", correct: "true"},
            {text: "D. ", correct: "false"},
        ]
    },
    {
        question: "Which of the following way can be used to indicate the LANGUAGE attribute?",
        answers: [
            {text: 'A. <LANGUAGE=”JavaScriptVersion”>', correct: "false"},
            {text: 'B.  <SCRIPT LANGUAGE=”JavaScriptVersion”>', correct: "false"},
            {text: 'C. <SCRIPT LANGUAGE=”JavaScriptVersion”> JavaScript statements…</SCRIPT>', correct: "true"},
            {text: 'D. <SCRIPT LANGUAGE=”JavaScriptVersion”!> JavaScript statements…</SCRIPT>', correct: "false"},
        ]
    },
    {
        question: "Which types of image maps can be used with JavaScript?",
        answers: [
            {text: "A. Server-side image maps", correct: "false"},
            {text: "B. Client-side image maps", correct: "true"},
            {text: "C. Server-side image maps and Client-side image maps", correct: "false"},
            {text: "D. None of the above", correct: "false"},
        ]
    },
];    

const question = document.getElementById("question");