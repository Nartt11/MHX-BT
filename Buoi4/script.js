function changeText(){
    let element = document.getElementById("greeting");
    element.textContent = "Chào mừng bạn đến với trang web của chúng tôi!";
}

function changeBoxColor() {
    let box = document.getElementById("box");
    box.style.backgroundColor = "orange";
}

function addNewTodo() {
    let input = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList");
    if (input.value.trim() !== "") {
        let newItem = document.createElement("li");
        newItem.innerHTML = `<span>${input.value}</span> <button onclick="removeTodo(this)">Xóa</button>`;
        todoList.appendChild(newItem);
        input.value = ""; 
    } else {
        alert("Vui lòng nhập công việc!");
    }
}

function removeTodo(button) {
    let todoList = document.getElementById("todoList");
    todoList.removeChild(button.parentElement);
}

function changeImage() {
    let image = document.getElementById("myImage");
    image.src = `https://www.svgrepo.com/show/452030/avatar-default.svg`; 
}

function toggleHighlight(){
    let text = document.getElementById("toggleClassText");
    if (text.style.backgroundColor === "yellow") {
        text.style.backgroundColor = "";
    } else {
        text.style.backgroundColor = "yellow";
    }
}