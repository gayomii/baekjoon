const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.splice(0, 1)[0]);
const wines = input.map(Number);

function solution() {
  if (n < 3) return wines.reduce((sum, wine) => (sum += wine), 0);

  const dp = Array.from({ length: n }, () => 0);
  dp[0] = wines[0];
  dp[1] = wines[0] + wines[1];
  dp[2] = Math.max(dp[1], wines[0] + wines[2], wines[1] + wines[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(wines[i] + wines[i - 1] + dp[i - 3], dp[i - 1], wines[i] + dp[i - 2]);
  }

  return dp[n - 1];
}

console.log(solution());
