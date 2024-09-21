const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution([x, y, c]) {
  let start = 1;
  let end = Math.min(x, y);

  while (end - start >= 0.001) {
    // ab/(a+b) = c
    // a^2 = x^2 - w^2
    // b^2 = y^2 - w^2

    const w = (start + end) / 2;
    let a = Math.sqrt(Math.pow(x, 2) - Math.pow(w, 2));
    let b = Math.sqrt(Math.pow(y, 2) - Math.pow(w, 2));
    result = (a * b) / (a + b);

    if (result >= c) {
      start = w;
    } else end = w;
  }

  return end.toFixed(3);
}

console.log(solution(input));
