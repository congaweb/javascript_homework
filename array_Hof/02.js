const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const getValues = (todos, key) => todos.map(todo => todo[key]);

console.log(getValues(todos, 'id'));
console.log(getValues(todos, 'content'));
console.log(getValues(todos, 'completed'));
