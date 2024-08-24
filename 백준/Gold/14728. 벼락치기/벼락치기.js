const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, times] = input
  .splice(0, 1)[0]
  .split(' ')
  .map((d) => Number(d));

const data = input.map((d) => d.split(' ').map((n) => Number(n)));

function solution(n, times, data) {
  const dp = new Array(times + 1).fill(0);

  for (const [time, score] of data) {
    for (let i = times; i >= time; i--) {
      dp[i] = Math.max(dp[i], dp[i - time] + score);
    }
  }

  return dp[times];
}

console.log(solution(n, times, data));
