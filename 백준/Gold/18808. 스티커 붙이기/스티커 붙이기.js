const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((data) => data.split(' ').map((d) => Number(d)));

const [n, m, k] = input.splice(0, 1)[0];
const stickers = [];
let answer = 0;

function separateSticker() {
  while (input.length) {
    const [col, row] = input.splice(0, 1)[0];
    stickers.push(input.splice(0, col));
  }
}

function checkLocation(notebook, sticker, x, y) {
  for (let i = 0; i < sticker.length; i++) {
    for (let j = 0; j < sticker[0].length; j++) {
      if (sticker[i][j] === 1) {
        if (x + i >= n || y + j >= m || notebook[x + i][y + j] === 1) return false;
      }
    }
  }
  return true;
}

function attachSticker(notebook, sticker, x, y) {
  for (let i = 0; i < sticker.length; i++) {
    for (let j = 0; j < sticker[0].length; j++) {
      if (sticker[i][j] === 1) notebook[x + i][y + j] = 1;
    }
  }
}

function rotateSticker(sticker) {
  const newSticker = [];
  const row = sticker.length;
  const col = sticker[0].length;

  for (let i = 0; i < col; i++) {
    const tmp = [];
    for (let j = 0; j < row; j++) {
      tmp.push(sticker[row - 1 - j][i]);
    }
    newSticker.push(tmp);
  }

  return newSticker;
}

function solution() {
  separateSticker();

  const notebook = Array.from(Array(n), () => Array(m).fill(0));

  for (let sticker of stickers) {
    let placed = false;
    for (let rotateNum = 0; rotateNum < 4; rotateNum++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (checkLocation(notebook, sticker, i, j)) {
            attachSticker(notebook, sticker, i, j);
            placed = true;
            break;
          }
        }
        if (placed) break;
      }
      if (placed) break;
      sticker = rotateSticker(sticker);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (notebook[i][j] === 1) answer++;
    }
  }
}

solution();
console.log(answer);
