const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, h] = input
  .splice(0, 1)[0]
  .split(' ')
  .map((d) => Number(d));

const hurdle = input.map((n) => Number(n));

function solution() {
  const prefixA = Array.from({ length: h + 1 }, () => 0);
  const prefixB = Array.from({ length: h + 1 }, () => 0);

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? prefixA[hurdle[i]]++ : prefixB[hurdle[i]]++;
  }

  for (let j = h - 1; j >= 1; j--) {
    prefixA[j] += prefixA[j + 1];
    prefixB[j] += prefixB[j + 1];
  }

  let cnt = 0;
  let min = n;

  for (let k = 1; k <= h; k++) {
    const sum = prefixA[k] + prefixB[h - k + 1];
    if (sum < min) {
      min = sum;
      cnt = 1;
    } else if (sum === min) cnt++;
  }

  console.log(min, cnt);
}

solution();
