const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [C, N] = input
  .splice(0, 1)[0]
  .split(' ')
  .map((d) => Number(d));
const data = input.map((d) => d.split(' ').map((num) => Number(num)));

function solution(C, N, data) {
  const dp = new Array(C + 101).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    const [cost, customers] = data[i];

    for (let j = customers; j < C + 101; j++) {
      dp[j] = Math.min(dp[j], cost + dp[j - customers]);
    }
  }

  return Math.min(...dp.slice(C, C + 101));
}

console.log(solution(C, N, data));
