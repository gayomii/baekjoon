const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let targetMap = input.map((data) => data.split(' ').map((value) => Number(value)));
const [M, N] = targetMap.splice(0, 1)[0];

let answer = 0;

function solution(M, N, targetMap) {
  let dp = Array.from({ length: M }, () => Array(N).fill(0));
  let maxLen = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (targetMap[i][j] === 0) {
        if (i === 0 || j === 0) dp[i][j] = 1;
        else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }

      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }

  answer = maxLen;
}

solution(M, N, targetMap);
console.log(answer);
