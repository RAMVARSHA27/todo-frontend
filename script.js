const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  todoList.appendChild(listItem);
  todoInput.value = '';

  const deleteButton = listItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });
});
