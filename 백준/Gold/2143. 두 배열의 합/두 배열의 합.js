const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
const aSize = Number(input[1]);
const a = input[2].split(' ').map((n) => Number(n));
const bSize = Number(input[3]);
const b = input[4].split(' ').map((n) => Number(n));

function getSumList(arr, n) {
  const sumList = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      sumList.push(sum);
    }
  }

  return sumList;
}

function solution(T, a, aSize, b, bSize) {
  let answer = 0;

  const aSumList = getSumList(a, aSize);
  const bSumList = getSumList(b, bSize);

  const bSumMap = new Map();
  for (let bSum of bSumList) {
    if (bSumMap.has(bSum)) bSumMap.set(bSum, bSumMap.get(bSum) + 1);
    else bSumMap.set(bSum, 1);
  }

  for (let aSum of aSumList) {
    if (bSumMap.has(T - aSum)) answer += bSumMap.get(T - aSum);
  }

  return answer;
}

console.log(solution(T, a, aSize, b, bSize));
