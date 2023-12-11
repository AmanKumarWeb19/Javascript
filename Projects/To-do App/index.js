let todoList = [
  {
    item: "Buy Milk",
    dueDate: 11 / 12 / 2023,
  },
  {
    item: "Go to College",
    dueDate: 11 / 12 / 2023,
  },
];
displayItem();

function addTodo() {
  let inputElement = document.querySelector("#todoInput");
  let inputDate = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  inputDate.value = "";
  displayItem();
}

function displayItem() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
    <div>
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick='todoList.splice(${i},1); displayItem();'>Delete</button>
    </div>
   
    `;
  }
  containerElement.innerHTML = newHtml;
}
