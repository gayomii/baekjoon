const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((n) => Number(n));

const numLen = input.splice(0, 1)[0];
const setList = input;

function solution(len, setList) {
  setList.sort((a, b) => a - b);

  let targetIdx = len;
  while (targetIdx > 0) {
    const target = setList[targetIdx - 1];
    for (let i = 0; i < len; i++) {
      if (setList[i] * 3 === target) return target;
      if (setList[i] * 3 > target) continue;
      for (let j = i + 1; j < len; j++) {
        if (setList[i] * 2 + setList[j] === target) return target;
        if (setList[i] + setList[j] * 2 === target) return target;

        if (setList[i] + setList[j] * 2 > target) continue;
        for (let k = j + 1; k < len; k++) {
          if (setList[i] + setList[j] + setList[k] === target) return target;
        }
      }
    }
    targetIdx--;
  }
}

console.log(solution(numLen, setList));
