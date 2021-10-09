const toggleCase = s =>
  [...s].map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())).join('');

console.log(toggleCase('StuDY')); // => 'sTUdy'
