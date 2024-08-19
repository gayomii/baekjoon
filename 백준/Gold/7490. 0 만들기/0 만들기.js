const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.splice(0, 1)[0]);
const data = input.map((d) => Number(d));

function solution(N, data) {
  let answer = [];
  const operation = [' ', '+', '-'];

  function dfs(len, idx, curResult, result) {
    if (idx === len) {
      calculation = curResult.replaceAll(' ', '');
      let sum = 0;
      let prev;
      let stack = '';

      for (const cur of calculation) {
        if (cur === '+' || cur === '-') {
          if (prev) {
            sum += prev === '+' ? +Number(stack) : -Number(stack);
          } else sum = Number(stack);
          prev = cur;
          stack = '';
        } else {
          stack += cur;
        }
      }

      if (stack) sum += prev === '+' ? +Number(stack) : -Number(stack);
      if (sum === 0) result.push(curResult);
      return;
    }

    for (const op of operation) {
      dfs(len, idx + 1, curResult + op + (idx + 1), result);
    }
  }

  for (let i = 0; i < N; i++) {
    const len = data[i];
    const result = [];

    dfs(len, 1, '1', result);

    answer.push(result.join('\n'));
  }

  return answer.join('\n\n');
}

console.log(solution(N, data));
