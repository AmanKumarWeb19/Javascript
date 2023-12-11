let todoList = ["Buy Milk", "Go to College"];
displayItem();

function addTodo() {
  let inputElement = document.querySelector("#todoInput");
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = "";
  displayItem();
}

function displayItem() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (i = 0; i < todoList.length; i++) {
    newHtml += `
    <div>
    <span>${todoList[i]}</span>
    <button onclick='todoList.splice(${i},1); displayItem();'>Delete</button>
    </div>
   
    `;
  }
  containerElement.innerHTML = newHtml;
}
