const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const len = Number(input.splice(0, 1));
const startList = input.splice(0, len);
const endList = input;
let answer = 0;

function solution() {
  let i = 0;
  endList.map((car) => {
    if (car === startList[i]) i++;
    else {
      answer++;
      startList.splice(startList.indexOf(car), 1);
    }
  });
}

solution();
console.log(answer);
