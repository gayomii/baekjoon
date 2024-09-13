const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.splice(0, 1)[0]);
const data = input.map((value) => value.split(' ').map(Number));

function solution(n, costs) {
  let result = Infinity;
  // R: 0, G: 1, B: 2
  const dp = Array.from({ length: n }, () => Array(3).fill(0));

  for (let color = 0; color < 3; color++) {
    dp[0][0] = color === 0 ? costs[0][color] : Infinity;
    dp[0][1] = color === 1 ? costs[0][color] : Infinity;
    dp[0][2] = color === 2 ? costs[0][color] : Infinity;

    for (let i = 1; i < n; i++) {
      dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
      dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
      dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
    }

    result = Math.min(result, color === 0 ? Infinity : dp[n - 1][0], color === 1 ? Infinity : dp[n - 1][1], color === 2 ? Infinity : dp[n - 1][2]);
  }

  return result;
}

console.log(solution(n, data));
