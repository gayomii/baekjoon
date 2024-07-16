const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalLine = Number(input.splice(0, 1));
let lines = input.map((data) => data.split(' ').map((value) => Number(value)));
lines.sort((a, b) => a[0] - b[0]);
const checkLine = Array.from({ length: totalLine }, () => 1);

function solution() {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < i; j++) {
      if (lines[i][1] > lines[j][1]) {
        checkLine[i] = Math.max(checkLine[i], checkLine[j] + 1);
      }
    }
  }
}

solution();
console.log(totalLine - Math.max(...checkLine));
