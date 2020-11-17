var todoItems = [];

function sendAlert(message) {
    alert(message);
}

function addTodoItem() {
    var todo = document.getElementById("todo-item");
    var itemText = todo.value;
    if (!this.todoItems.includes(itemText)) {
        this.addToList(itemText);
    }   
    
    todo.value = null;
}

function addToList(message) {
    var list = document.getElementById("todo-list");
    var item = document.createElement("li");

    this.todoItems.push(message);
    console.log(this.todoItems);

    item.appendChild(document.createTextNode(message));
    list.appendChild(item);
}
// Need function to add strike to element associated with event