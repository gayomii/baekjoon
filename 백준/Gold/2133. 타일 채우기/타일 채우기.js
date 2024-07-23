const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

function solution(n) {
  if (n === 2) return 3;
  if (n % 2 !== 0) return 0;

  const dp = Array.from(Array(n + 1).fill(0));
  dp[0] = 1;
  dp[2] = 3;

  for (let i = 4; i <= N; i += 2) {
    dp[i] = dp[i - 2] * 3;
    for (let j = i - 4; j >= 0; j -= 2) {
      dp[i] += dp[j] * 2;
    }
  }

  return dp[n];
}

console.log(solution(N));
