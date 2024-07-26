const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [totalNum, fretLen] = input
  .splice(0, 1)[0]
  .split(' ')
  .map((n) => Number(n));
const play = input.map((nums) => nums.split(' ')).map((n) => n.map((num) => Number(num)));

function solution(total, fretLen, play) {
  let answer = 0;
  const tmp = Array(6)
    .fill()
    .map(() => []);
  const maxNum = new Array(6).fill(0);

  for (let i = 0; i < total; i++) {
    const [line, fret] = play[i];
    if (maxNum[line - 1] > fret) {
      const originLen = tmp[line - 1].length;
      tmp[line - 1] = [...tmp[line - 1].filter((f) => f <= fret)];
      answer += originLen - tmp[line - 1].length;

      if (tmp[line - 1].indexOf(fret) === -1) {
        answer++;
        tmp[line - 1].push(fret);
      }

      maxNum[line - 1] = fret;
    } else if (maxNum[line - 1] < fret) {
      answer++;
      tmp[line - 1].push(fret);
      maxNum[line - 1] = fret;
    } else continue;
  }
  return answer;
}

console.log(solution(totalNum, fretLen, play));
