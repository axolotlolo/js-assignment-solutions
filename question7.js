const todoList = [];

function addTask(task) {
  todoList.push(task);
  console.log(`Task added: ${task}`);
}

function viewTasks() {
  console.log("To-Do List:");
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function updateTask(index, newTask) {
  if (index >= 0 && index < todoList.length) {
    todoList[index] = newTask;
    console.log(`Task ${index + 1} updated to: ${newTask}`);
  } else {
    console.log("Invalid task index");
  }
}

function deleteTask(index) {
  if (index >= 0 && index < todoList.length) {
    const removed = todoList.splice(index, 1);
    console.log(`Task deleted: ${removed[0]}`);
  } else {
    console.log("Invalid task index");
  }
}

addTask("Buy groceries");
addTask("Complete assignment");
addTask("Call mom");
viewTasks();
updateTask(1, "Finish JavaScript assignment");
viewTasks();
deleteTask(0);
viewTasks();
