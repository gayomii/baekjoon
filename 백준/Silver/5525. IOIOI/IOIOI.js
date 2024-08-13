const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S] = input.splice(0, 2).map((d) => Number(d));

function solution(N, S, p) {
  let answer = 0;
  let i = 0;
  let tmp = 0;

  while (i < S) {
    if (p[i] === 'I') {
      if (p[i + 1] === 'O' && p[i + 2] === 'I') {
        tmp++;
        i++;

        if (tmp === N) {
          answer++;
          tmp--;
        }
      } else tmp = 0;
    } else tmp = 0;
    i++;
  }

  return answer;
}

console.log(solution(N, S, input[0]));
