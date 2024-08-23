const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(str, targetWord) {
  const stack = [];
  const strLen = str.length;

  for (let i = 0; i < strLen; i++) {
    stack.push(str[i]);
    if (str[i] === targetWord[targetWord.length - 1]) {
      const word = stack.slice(-targetWord.length);
      if (word.join('') === targetWord) stack.splice(-targetWord.length);
    }
  }

  if (!stack.length) return 'FRULA';

  return stack.join('');
}

console.log(solution(input[0], input[1]));
