const isPalindrome = s => {
  const temp = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

  return temp === [...temp].reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false
