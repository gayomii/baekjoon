const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input
  .splice(0, 1)[0]
  .split(' ')
  .map((d) => Number(d));

const board = input.map((d) => d.split(' ').map((n) => Number(n)));
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function bfs() {
  const queue = [[0, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const melting = [];
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of dir) {
      const [xx, yy] = [x + dx, y + dy];

      if (xx >= 0 && xx < n && yy >= 0 && yy < m && !visited[xx][yy]) {
        visited[xx][yy] = true;
        if (board[xx][yy] === 0) {
          queue.push([xx, yy]);
        } else melting.push([xx, yy]);
      }
    }
  }

  return melting;
}

function solution() {
  let time = 0;
  let lastCheeseCnt = 0;

  while (true) {
    const melting = bfs();

    if (!melting.length) break;

    for (const [x, y] of melting) {
      board[x][y] = 0;
    }

    lastCheeseCnt = melting.length;
    time++;
  }

  console.log(time);
  console.log(lastCheeseCnt);
}

solution();
