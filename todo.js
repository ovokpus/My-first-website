
var todoItems = [];

function addTodoItem() {
    var todo = document.getElementById("todo-item");
    var itemText = todo.value;

    this.removeError(this.getAlert());

    if (!this.isExistingItem(itemText)) {
        this.addToList(itemText);
    } else {
        this.displayError('Item exists', this.getAlert())
    }

    todo.value = null
}

function getAlert () {
    return document.getElementById("todo-error");
}

function removeError(alert) {
    alert.classList.add("invisible");

    alert.innerHTML = null;
}

function displayError(message, alert) {
    alert.classList.remove("invisible");

    alert.innerHTML = message;
}

function addToList(message) {
    var list = document.getElementById("todo-list");
    var item = document.createElement("li");

    this.todoItems.push(message);

    item.addEventListener("click", this.completeItem);
    item.appendChild(document.createTextNode(message));
    list.appendChild(item);
}

function completeItem(item) {
    var message = item.target.innerHTML;
    var strikeout = document.createElement("del");

    strikeout.innerHTML = message;

    item.target.innerHTML = null;
    item.target.appendChild(strikeout);
    item.target.removeEventListener("click", completeItem);
    item.target.addEventListener("click", renewItem);
}

function renewItem (item) {
    var message = item.target.innerHTML;
    var listItem = item.target.parentNode;

    listItem.innerHTML = null;
    listItem.appendChild(document.createTextNode(message));
    listItem.removeEventListener("click", renewItem);
    listItem.addEventListener("click", completeItem);
}

function isExistingItem(message) {
    return this.todoItems.includes(message);
}
