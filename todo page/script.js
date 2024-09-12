document.getElementById('addBtn').addEventListener('click', addTodo);

function addTodo() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    if (title === "" || description === "") {
        alert("Please fill out both fields!");
        return;
    }

    let todoItems = document.getElementById('todoItems');

    let row = document.createElement('tr');

    let titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);

    let descCell = document.createElement('td');
    descCell.textContent = description;
    row.appendChild(descCell);

    let deleteCell = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function() {
        todoItems.removeChild(row);
    };
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    todoItems.appendChild(row);

    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
}
