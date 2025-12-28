const userId = 1; // assume logged-in user

function addTask() {
    const title = document.getElementById("taskInput").value;

    fetch("http://localhost:8080/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: title,
            status: "PENDING",
            user: { id: userId }
        })
    }).then(() => {
        document.getElementById("taskInput").value = "";
        loadTasks();
    });
}

function loadTasks() {
    fetch(`http://localhost:8080/api/tasks/user/${userId}`)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";
            data.forEach(task => {
                const li = document.createElement("li");
                li.innerHTML = `${task.title}
                    <button onclick="deleteTask(${task.id})">X</button>`;
                list.appendChild(li);
            });
        });
}

function deleteTask(id) {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
        method: "DELETE"
    }).then(() => loadTasks());
}

loadTasks();
