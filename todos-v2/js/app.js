// state
let todos = [];

// DOM Nodes
const $newTodo = document.querySelector('.new-todo');
const $main = document.querySelector('.main');
const $toggleAll = document.querySelector('.toggle-all');
const $todoList = document.querySelector('.todo-list');
const $footer = document.querySelector('.footer');
const $todoCount = document.querySelector('.todo-count');
const $filters = document.querySelector('.filters');
const $clearCompleted = document.querySelector('.clear-completed');

// 렌더링 함수
const render = () => {
  $todoList.innerHTML = todos
    .map(
      ({ id, content, completed }) =>
        `<li data-id="${id}">
          <div class="view">
            <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}>
            <label>${content}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${content}">
        </li>`
    )
    .join('');
};

const controlDisplay = () => {
  todos.length > 0 ? $main.classList.remove('hidden') : $main.classList.add('hidden');
  todos.length > 0 ? $footer.classList.remove('hidden') : $footer.classList.add('hidden');
};

const countingItems = () => {
  $todoCount.textContent = todos.length === 1 ? `${todos.length} item left` : `${todos.length} items left`;
};

const countingCompleted = () => {
  todos.filter(todo => todo.completed === true).length
    ? $clearCompleted.classList.remove('hidden')
    : $clearCompleted.classList.add('hidden');
};

const setTodo = newTodos => {
  todos = newTodos;
  render();
  controlDisplay();
  countingItems();
  countingCompleted();
  console.log('[TODO]', todos);
};

const fetchTodos = () => {
  setTodo([
    { id: 3, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false }
  ]);
};
const generateId = () => Math.max(...todos.map(todo => todo.id), 0) + 1;

const toggelTodoComplete = id =>
  setTodo(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));

const addTodo = content => {
  setTodo([{ id: generateId(), content, completed: false }, ...todos]);
};

const removeTodo = id => {
  setTodo(todos.filter(todo => todo.id !== +id));
};

const updateTodo = (id, content) => {
  setTodo(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

const removeCompletedTodo = () => {
  setTodo(todos.filter(todo => todo.completed === false));
};

const sortingTodo = id => {
  id === 'all'
    ? [...$todoList.children].map(list => list.classList.remove('hidden'))
    : id === 'active'
    ? [...$todoList.children].map(list =>
        list.firstElementChild.firstElementChild.checked
          ? list.classList.add('hidden')
          : list.classList.remove('hidden')
      )
    : [...$todoList.children].map(list =>
        list.firstElementChild.firstElementChild.checked
          ? list.classList.remove('hidden')
          : list.classList.add('hidden')
      );
};
// Event
window.addEventListener('DOMContentLoaded', fetchTodos);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = $newTodo.value.trim();

  if (content) addTodo(content);

  $newTodo.value = '';
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  removeTodo(e.target.parentNode.parentNode.dataset.id);
};

$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  toggelTodoComplete(e.target.parentNode.parentNode.dataset.id);
};

$toggleAll.onchange = e => {
  e.target.checked
    ? setTodo(todos.map(todo => ({ ...todo, completed: true })))
    : setTodo(todos.map(todo => ({ ...todo, completed: false })));
};

$todoList.ondblclick = e => {
  e.target.parentNode.parentNode.classList.add('editing');
};

$todoList.onkeyup = e => {
  const oldContent = e.target.getAttribute('value');
  const newContent = e.target.value.trim();

  if (e.key !== 'Enter') return;

  newContent
    ? updateTodo(e.target.parentNode.dataset.id, newContent)
    : updateTodo(e.target.parentNode.dataset.id, oldContent);
};

$clearCompleted.onclick = () => {
  removeCompletedTodo();
};

$filters.onclick = e => {
  [...$filters.children].map(filter =>
    filter.firstElementChild.classList.contains('selected')
      ? filter.firstElementChild.classList.remove('selected')
      : filter
  );

  e.target.classList.add('selected');

  sortingTodo(e.target.id);
};
