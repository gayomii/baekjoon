const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S] = input.splice(0, 2).map((d) => Number(d));

function solution(N, S, p) {
  let answer = 0;
  const strLen = 2 * N + 1;
  let resultStr = '';

  for (let x = 0; x < strLen; x++) {
    if (x % 2 === 0) resultStr += 'I';
    else resultStr += 'O';
  }

  for (let i = 0; i < S; i++) {
    if (p[i] === 'I') {
      const checkStr = p.slice(i, i + strLen);

      if (checkStr.length === strLen) {
        if (checkStr === resultStr) answer++;
      }
    }
  }

  return answer;
}

console.log(solution(N, S, input[0]));
