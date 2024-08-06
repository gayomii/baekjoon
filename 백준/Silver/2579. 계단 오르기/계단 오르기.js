const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.splice(0, 1)[0]);
const stairs = input.map((stair) => Number(stair));

function solution(n, stairs) {
  const dp = new Array(n).fill(0);

  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]) + stairs[i];
  }

  return dp[n-1];
}

console.log(solution(n, stairs));
