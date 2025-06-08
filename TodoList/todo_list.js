const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = []; // Tablica będzie przechowywać obiekty { text: string, completed: boolean }

function addTask() {
// POPRAWKA 1: Użyj .value zamiast .ariaValueMax
const taskText = taskInput.value.trim();
if (taskText !== "") {
    // POPRAWKA 2: Dodaj obiekt zadania z tekstem i statusem ukończenia
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    displayTasks();
}
}

function displayTasks() {
taskList.innerHTML = "";
tasks.forEach((task, index) => {
    const li = document.createElement("li");
    // POPRAWKA 3: task.text i task.completed są teraz dostępne
    li.innerHTML = `
        <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>
    `;
    li.querySelector('input').addEventListener("change", () => {
        toggleTask(index);
    });
    taskList.appendChild(li);
});
}

function toggleTask(index) {
// POPRAWKA 4: Zmień status completed dla obiektu zadania
tasks[index].completed = !tasks[index].completed;
displayTasks(); // Odśwież listę, aby checkbox się zaktualizował
}

function clearCompletedTasks() {
tasks = tasks.filter(task => !task.completed);
displayTasks();
}

// Nasłuchiwanie zdarzeń
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// POPRAWKA 5: Wywołaj displayTasks() po załadowaniu skryptu, aby wyświetlić początkowe zadania (jeśli jakieś są)
displayTasks();