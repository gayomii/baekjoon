const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input
  .splice(0, 1)[0]
  .split(' ')
  .map((d) => Number(d));
const data = input.map((d) => d.split(' ').map((num) => Number(num)))[0];

function binarySearch(mid) {
  let count = 1;
  let curMin = data[0];
  let curMax = data[0];

  for (let i = 1; i < N; i++) {
    curMin = Math.min(curMin, data[i]);
    curMax = Math.max(curMax, data[i]);

    if (curMax - curMin > mid) {
      count++;
      curMin = data[i];
      curMax = data[i];
    }

    if (count > M) return false;
  }

  return true;
}

function solution(N, M, data) {
  let min = 0;
  let max = Math.max(...data) - Math.min(...data);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (binarySearch(mid)) max = mid - 1;
    else min = mid + 1;
  }

  return min;
}

console.log(solution(N, M, data));
