let nameInput = document.querySelector(".todo-input");
let add = document.querySelector(".add-todo");
let displayTODO = document.querySelector(".display-todo");
let dateInput = document.querySelector(".due-date");
let todoList = JSON.parse(localStorage.getItem('todoList'))||[];

showTODO()
function addTODO() {
  const Name = nameInput.value;
  const date = dateInput.value;
  todoList.push({ Name, date });
  console.log(todoList);
  nameInput.value = "";
}

add.addEventListener("click", function () {
  addTODO();
  showTODO();
  saveToLocalStorage()
});
function showTODO() {
  console.log()
  let totalHTML = '';
  for (let i = 0; i < todoList.length; i++) {
   const value = todoList[i];
    let { Name, date } = value;
    let html = `<div>${Name}</div>
    <div>${date}</div>
    <button onclick="deleteTODO(${i})" class="delete-todo">delete</button> 
    `;
    totalHTML += html;
    console.log(totalHTML)
  }
  displayTODO.innerHTML = totalHTML;
  saveToLocalStorage()
  
}
function deleteTODO(index){
  todoList.splice(index,1);
  showTODO()
  saveToLocalStorage()
}
function saveToLocalStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList))
}

