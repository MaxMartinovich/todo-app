//****************************Variaveis*****************************************
const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let arrTodos = [];

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
}

function refreshTodoList() {
  todoList.innerHTML = "";
  arrTodos.forEach((todo, todoIndex) => {
    todoItem = criarTodoItem(todo, todoIndex);
    todoList.append(todoItem);
  });
}
function criarTodoItem(todo, todoIndex) {
  const todoLi = document.createElement("li");
  todoLi.className = "todo";
  return todoLi;
}
