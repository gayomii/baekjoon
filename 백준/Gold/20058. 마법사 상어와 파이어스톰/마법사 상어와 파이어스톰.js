const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, q] = input
  .splice(0, 1)[0]
  .split(' ')
  .map((i) => Number(i));
const stages = input
  .pop()
  .split(' ')
  .map((d) => Number(d));
const grid = input.map((data) => data.split(' ').map((d) => Number(d)));
const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function rotate(grid, r, c, length) {
  const newGrid = Array.from(Array(length), () => Array(length).fill(0));
  for (let dr = 0; dr < length; dr++) {
    for (let dc = 0; dc < length; dc++) {
      newGrid[dc][length - 1 - dr] = grid[r + dr][c + dc];
    }
  }
  for (let dr = 0; dr < length; dr++) {
    for (let dc = 0; dc < length; dc++) {
      grid[r + dr][c + dc] = newGrid[dr][dc];
    }
  }
}

function bfs(grid, r, c, n, visited) {
  const queue = [[r, c]];
  visited[r][c] = 1;
  let size = 0;

  while (queue.length > 0) {
    const [rr, cc] = queue.shift();
    size++;
    for (let x = 0; x < 4; x++) {
      const dr = rr + dir[x][0];
      const dc = cc + dir[x][1];
      if (dr >= 0 && dr < 2 ** n && dc >= 0 && dc < 2 ** n && !visited[dr][dc] && grid[dr][dc] > 0) {
        visited[dr][dc] = 1;
        queue.push([dr, dc]);
      }
    }
  }

  return size;
}

function solution(n, q, grid, stages) {
  for (let L of stages) {
    const curLen = 2 ** L;
    for (let r = 0; r < 2 ** n; r += curLen) {
      for (let c = 0; c < 2 ** n; c += curLen) {
        rotate(grid, r, c, curLen);
      }
    }

    // 얼음이 있는 칸 3개 또는 그 이상과 인접해있지 않은 칸은 얼음의 양이 1 줄어든다.
    const tmp = [];
    for (let r = 0; r < 2 ** n; r++) {
      for (let c = 0; c < 2 ** n; c++) {
        if (grid[r][c] > 0) {
          let cnt = 0;
          for (let x = 0; x < 4; x++) {
            const dr = r + dir[x][0];
            const dc = c + dir[x][1];
            if (dr >= 0 && dr < 2 ** n && dc >= 0 && dc < 2 ** n && grid[dr][dc] > 0) cnt++;
          }
          if (cnt < 3) tmp.push([r, c]);
        }
      }
    }

    tmp.map(([r, c]) => (grid[r][c] -= 1));
  }

  const totalIce = grid.reduce((total, val) => {
    const totalVal = val.reduce((sum, v) => (sum += v), 0);
    total += totalVal;
    return total;
  }, 0);

  const visited = Array.from(Array(2 ** n), () => Array(2 ** n).fill(0));
  let largest = 0;
  for (let r = 0; r < 2 ** n; r++) {
    for (let c = 0; c < 2 ** n; c++) {
      if (grid[r][c] > 0 && !visited[r][c]) {
        const blockSize = bfs(grid, r, c, n, visited);
        largest = Math.max(largest, blockSize);
      }
    }
  }

  return [totalIce, largest];
}

console.log(solution(n, q, grid, stages).join('\n'));
