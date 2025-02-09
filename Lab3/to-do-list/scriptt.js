function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");
    let listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    listItem.innerHTML = `
                <input type="checkbox" onclick="toggleTask(this)">
                <span>${taskText}</span>
                <span class="delete" onclick="deleteTask(this)">🗑️</span>
            `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function toggleTask(checkbox) {
    let taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("deleted", checkbox.checked);
}

function deleteTask(deleteBtn) {
    let taskItem = deleteBtn.parentElement;
    taskItem.remove();
}