const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, numbers, m] = input.splice(0, 3);
const N = Number(n);
const nums = [-1, ...numbers.split(' ').map(Number)];
const M = Number(m);
const data = input.map((i) => i.split(' ').map(Number));
const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill().map(() => -1));

function findPalin(start, end) {
  if (dp[start][end] !== -1) return dp[start][end];

  if (nums[start] !== nums[end]) return 0;
  else return (dp[start][end] = findPalin(start + 1, end - 1));
}

function solution() {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    dp[i][i] = 1;
    if (nums[i] === nums[i - 1]) {
      dp[i - 1][i] = 1;
    } else dp[i - 1][i] = 0;
  }

  for (const [s, e] of data) {
    answer.push(findPalin(s, e));
  }

  return answer.join('\n');
}

console.log(solution());
