
var todoItems = [];

function addTodoItem() {
    var todo = document.getElementById("todo-item");
    var itemText = todo.value;

    this.removeError();

    if (!this.isExistingItem(itemText)) {
        this.addToList(itemText);
    } else {
        this.displayError('Item exists')
    }

    todo.value = null

}

function getAlert () {
    return document.getElementById("todo-error");
}

function removeError() {
    var alert = this.getAlert();
    alert.classList.add("invisible");

    alert.innerHTML = null;
}

function displayError(message) {
    var alert = this.getAlert();
    alert.classList.remove("invisible");

    alert.innerHTML = message;
}

function addToList(message) {
    var list = document.getElementById("todo-list");
    var item = document.createElement("li");

    this.todoItems.push(message);


    item.appendChild(document.createTextNode(message));
    list.appendChild(item);
}
// Need function to add strike to element associated with event
function isExistingItem(message) {
    return this.todoItems.includes(message);
}
