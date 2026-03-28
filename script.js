// script.js for To-Do List Application

// Function to get todos from local storage
function getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

// Function to save todos to local storage
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add a todo
function addTodo(todo) {
    const todos = getTodos();
    todos.push({ text: todo, completed: false });
    saveTodos(todos);
}

// Function to remove a todo
function removeTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
}

// Function to mark a todo as completed
function completeTodo(index) {
    const todos = getTodos();
    todos[index].completed = true;
    saveTodos(todos);
}

// Example usage
// addTodo('Learn JavaScript');
// removeTodo(0);
// completeTodo(0);