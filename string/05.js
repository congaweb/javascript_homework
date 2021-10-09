const count = (s, t) => {
  const regExp = new RegExp(t, 'g');

  return s.match(regExp).length;
};

console.log(count('COMPUTERPROGRAMMING', 'R')); // => 3
