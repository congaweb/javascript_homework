const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 2번 문제
const getValues = (todos, key) => todos.map(item => item[key]);
console.log(getValues(todos, 'id'));
console.log(getValues(todos, 'content'));
console.log(getValues(todos, 'completed'));
