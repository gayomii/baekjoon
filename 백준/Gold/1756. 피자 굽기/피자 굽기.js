const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [d, n] = input.splice(0, 1)[0].split(' ').map(Number);
const oven = input.splice(0, 1)[0].split(' ').map(Number);
const pizzas = input[0].split(' ').map(Number);

function solution() {
  if (d < n) return 0;

  for (let i = 1; i < d; i++) {
    oven[i] = Math.min(oven[i], oven[i - 1]);
  }

  let last = d;
  for (const pizza of pizzas) {
    while (last > 0 && oven[last - 1] < pizza) {
      last--;
    }

    if (last === 0) return 0;
    last--;
  }

  return last + 1;
}

console.log(solution());
