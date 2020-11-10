function sendAlert(message) {
    alert(message);
}

function addTodoItem() {
    var todo =document.getElementById("todo-item");

    this.addToList(todo.value);

    todo.value = null;
}

function addToList(message) {
    var list = document.getElementById("todo-list");
    var item = document.createElement("li");

    item.appendChild(document.createTextNode(message));
    list.appendChild(item);
}