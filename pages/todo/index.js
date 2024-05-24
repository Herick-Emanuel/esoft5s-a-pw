const taskKey = "@tasks";

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault(); // Evita o recarregamento da página
  const taskId = new Date().getTime();
  const taskList = document.querySelector("#taskList");

  const form = document.querySelector("#taskForm");
  const formData = new FormData(form);

  const taskTitle = formData.get("title");
  const taskDescription = formData.get("description");

  const li = document.createElement("li");

  li.id = taskId;
  li.innerHTML = `
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
      <button class="edit-button" title="Editar tarefa">✏️</button>
      <button class="remove-button" title="Remover tarefa">🗑️</button>
  `;

  taskList.appendChild(li);

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  tasks.push({ id: taskId, title: taskTitle, description: taskDescription });
  localStorage.setItem(taskKey, JSON.stringify(tasks));

  form.reset();

  addTaskButtonsListeners(li);
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = tasks
    .map(
      (task) => `
      <li id="${task.id}">
        <h2>${task.title}</h2>
        <p>${task.description}</p>
        <button class="edit-button" title="Editar tarefa">✏️</button>
        <button class="remove-button" title="Remover tarefa">🗑️</button>
      </li>
    `
    )
    .join("");

  document.querySelectorAll("li").forEach((li) => {
    addTaskButtonsListeners(li);
  });
});

function addTaskButtonsListeners(li) {
  li.querySelector(".edit-button").addEventListener("click", function () {
    openEditDialog(li);
  });

  li.querySelector(".remove-button").addEventListener("click", function () {
    removeTask(li);
  });
}

function openEditDialog(li) {
  const dialogOverlay = document.createElement("div");
  dialogOverlay.classList.add("dialog-overlay");

  const dialog = document.createElement("div");
  dialog.classList.add("dialog");

  dialog.innerHTML = `
    <div class="dialog-header">
      <h2>Editar Tarefa</h2>
    </div>
    <div class="dialog-body">
      <form id="editTaskForm">
        <input type="text" name="editTitle" id="editTitle" value="${
          li.querySelector("h2").textContent
        }" required />
        <textarea name="editDescription" id="editDescription" required>${
          li.querySelector("p").textContent
        }</textarea>
      </form>
    </div>
    <div class="dialog-footer">
      <button id="cancelButton">Cancelar</button>
      <button id="saveButton">Editar</button>
    </div>
  `;

  dialogOverlay.appendChild(dialog);
  document.body.appendChild(dialogOverlay);

  document.querySelector("#cancelButton").addEventListener("click", () => {
    document.body.removeChild(dialogOverlay);
  });

  document.querySelector("#saveButton").addEventListener("click", () => {
    const editTitle = document.querySelector("#editTitle").value;
    const editDescription = document.querySelector("#editDescription").value;

    // Atualizar a tarefa no localStorage
    const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(li.id));
    if (taskIndex !== -1) {
      tasks[taskIndex].title = editTitle;
      tasks[taskIndex].description = editDescription;
      localStorage.setItem(taskKey, JSON.stringify(tasks));
    }

    // Atualizar a tarefa na lista
    li.querySelector("h2").textContent = editTitle;
    li.querySelector("p").textContent = editDescription;

    document.body.removeChild(dialogOverlay);
  });
}

function removeTask(li) {
  // Remover a tarefa do localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const updatedTasks = tasks.filter((task) => task.id !== parseInt(li.id));
  localStorage.setItem(taskKey, JSON.stringify(updatedTasks));

  // Remover a tarefa da lista
  li.remove();
}
