//****************************Variaveis*****************************************
const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let arrTodos = pegarTodos();
refreshTodoList();

//****************************Pega o todoForm, coloca um eventlistener e ao clicar em enviar ele "submita"*****************************************
//O e.preventDefault() é pra que o browser nao de um refresh
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoTexto = todoInput.value.trim();
  arrTodos.push(todoTexto);
  refreshTodoList();
  localStorageTodo();
}

function refreshTodoList() {
  todoList.innerHTML = "";
  arrTodos.forEach((todo, todoIndex) => {
    todoItem = criarTodoItem(todo, todoIndex);
    todoList.append(todoItem);
  });
}
function criarTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLi = document.createElement("li");
  todoLi.className = "todo";
  todoLi.innerHTML = `
          <li class="tarefas">
          <input type="checkbox" id="${todoId}" />
          <label class="customizar-checkbox" for="${todoId}"> ✓ </label>
          <label for="${todoId}" class="tarefas-texto">${todo}</label>
          <button class="delete-button">🗑️</button>
        </li>`;
  return todoLi;
}

function localStorageTodo() {
  const todosJson = JSON.stringify(arrTodos);
  localStorage.setItem("todos", todosJson);
}

function pegarTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}
