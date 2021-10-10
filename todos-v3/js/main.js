import StatesFunctions from './state.js';

// DOM Nodes
const $newTodo = document.querySelector('.new-todo');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// Event bindings
window.addEventListener('DOMContentLoaded', StatesFunctions.fetchTodos);

$newTodo.onchange = () => {
  const content = $newTodo.value.trim();

  if (content) StatesFunctions.addTodo(content);

  $newTodo.value = '';
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  StatesFunctions.toggelTodoCompleted(e.target.closest('li').dataset.id);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  StatesFunctions.removeTodo(e.target.closest('li').dataset.id);
};

$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;
  e.target.closest('li').classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;
  StatesFunctions.updateTodoContent(e.target.closest('li').dataset.id, e.target.value);
};

$clearCompleted.onclick = StatesFunctions.removeAllcompletedTodos;

$toggleAll.onchange = () => {
  StatesFunctions.toggleAllTodoCompleted($toggleAll.checked);
};

$filters.onclick = e => {
  if (!e.target.matches('.filters > li> a')) return;

  [...$filters.querySelectorAll('a')].forEach($el => $el.classList.toggle('selected', $el === e.target));

  StatesFunctions.setFilter(e.target.id);
};
