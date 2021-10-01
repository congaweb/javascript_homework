const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1번 문제
const render = todos => {
  const a = `
  <li id="${todos[0].id}">
    <label><input type="checkbox" ${todos[0].completed ? 'checked' : ''}>${
    todos[0].content
  }</label>
  </li>
  <li id="${todos[1].id}">
    <label><input type="checkbox" ${todos[1].completed ? 'checked' : ''}>${
    todos[1].content
  }</label>
  </li>
  <li id="${todos[2].id}">
    <label><input type="checkbox" ${todos[2].completed ? 'checked' : ''}>${
    todos[2].content
  }</label>
  </li>
  `;
  return a;
};
console.log(render(todos));
