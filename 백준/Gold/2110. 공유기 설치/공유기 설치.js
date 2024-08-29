const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, c] = input.splice(0, 1)[0].split(' ').map(Number);
const houses = input.map(Number);

function solution() {
  houses.sort((a, b) => a - b);
  let start = 1;
  let end = houses[houses.length - 1];

  while (start <= end) {
    let cnt = 1;
    let prev = houses[0];
    const mid = Math.floor((start + end) / 2);

    for (const house of houses) {
      if (house - prev < mid) continue;
      prev = house;
      cnt++;
    }

    if (cnt < c) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}

console.log(solution());
