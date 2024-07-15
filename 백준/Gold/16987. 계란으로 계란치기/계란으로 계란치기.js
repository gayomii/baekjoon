const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const totalNum = Number(input.splice(0, 1));
let answer = 0;

const eggs = input.map((data) => data.split(' ').map((value) => Number(value)));

function solution(targetIdx) {
  answer = Math.max(answer, eggs.filter((egg) => egg[0] <= 0).length);

  if (targetIdx === totalNum) return;

  if (eggs[targetIdx][0] <= 0) {
    solution(targetIdx + 1);
    return;
  }

  for (let i = 0; i < totalNum; i++) {
    if (eggs[i][0] <= 0 || targetIdx === i) continue;

    eggs[targetIdx][0] -= eggs[i][1];
    eggs[i][0] -= eggs[targetIdx][1];

    solution(targetIdx + 1);

    eggs[targetIdx][0] += eggs[i][1];
    eggs[i][0] += eggs[targetIdx][1];
  }
}

solution(0);
console.log(answer);
