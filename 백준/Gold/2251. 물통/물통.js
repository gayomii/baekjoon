const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const data = input.split(' ').map(Number);

function solution() {
  const [a, b, c] = data;
  const visited = Array.from(Array(a + 1), () => Array.from(Array(b + 1), () => Array.from(Array(c + 1).fill(false))));
  const result = new Set();

  function bfs() {
    const queue = [];
    queue.push([0, 0, c]);

    visited[0][0][c] = true;

    while (queue.length) {
      const [ta, tb, tc] = queue.shift();
      if (ta === 0) result.add(tc);

      shiftWater(queue, [ta, tb, tc]);
    }
  }

  function shiftWater(queue, waters) {
    const w = [a, b, c];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === j) continue;

        const newWaters = [...waters];
        if (waters[i] + waters[j] > w[j]) {
          newWaters[i] -= w[j] - waters[j];
          newWaters[j] = w[j];
        } else {
          newWaters[j] = waters[j] + waters[i];
          newWaters[i] = 0;
        }

        const [wa, wb, wc] = newWaters;
        if (!visited[wa][wb][wc]) queue.push(newWaters);

        visited[wa][wb][wc] = true;
      }
    }
  }

  bfs();

  return Array.from(result)
    .sort((a, b) => a - b)
    .join(' ');
}

console.log(solution());
