const inputText = document.getElementById("textCont");
const inputBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function addTask() {
    if (inputText.value === ' ' || inputText.value === '') {
        alert('Write Something to add a task..')
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    saveData();
}

list.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//TO SAVE DATA
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

//TO DISPLAY VALUE
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();