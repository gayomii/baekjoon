const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.splice(0, 1));
let targetMap = input.map((data) => data.split(' ').map((value) => Number(value)));
let answer = null;

function solution(targetMap, N) {
  // 1<=x<x+d1+d2<=N / x>=1, x+d1+d2<=N
  // 1<=y-d1<y<y+d2<=N / y-d1>=1, => y-d1<1 y+d2<=N
  for (let x = 1; x + 2 <= N; x++) {
    for (let y = 2; y + 1 <= N; y++) {
      for (let d1 = 1; d1 < N; d1++) {
        for (let d2 = 1; y + d2 <= N; d2++) {
          if (x + d1 + d2 > N) continue;
          if (y - d1 < 1 || y + d2 > N) continue;

          findTotalPeople(x, y, d1, d2);
        }
      }
    }
  }
}

function findTotalPeople(x, y, d1, d2) {
  let land = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  let people = Array.from({ length: 5 }, () => 0);

  // 경계선 구하기
  for (let i = 0; i <= d1; i++) {
    land[x + i][y - i] = 5;
    land[x + d2 + i][y + d2 - i] = 5;
  }
  for (let j = 0; j <= d2; j++) {
    land[x + j][y + j] = 5;
    land[x + d1 + j][y - d1 + j] = 5;
  }

  // 1구역 1 ≤ r < x+d1, 1 ≤ c ≤ y
  for (let r = 1; r < x + d1; r++) {
    for (let c = 1; c <= y; c++) {
      if (land[r][c] === 5) break;
      people[0] += targetMap[r - 1][c - 1];
      land[r][c] = 1;
    }
  }

  // 2구역 1 ≤ r ≤ x+d2, y < c ≤ N
  for (let r = 1; r <= x + d2; r++) {
    for (let c = N; c > y; c--) {
      if (land[r][c] === 5) break;
      people[1] += targetMap[r - 1][c - 1];
      land[r][c] = 2;
    }
  }

  // 3구역 x+d1 ≤ r ≤ N, 1 ≤ c < y-d1+d2
  for (let r = x + d1; r <= N; r++) {
    for (let c = 1; c < y - d1 + d2; c++) {
      if (land[r][c] === 5) break;
      people[2] += targetMap[r - 1][c - 1];
      land[r][c] = 3;
    }
  }

  // 4구역 x+d2 < r ≤ N, y-d1+d2 ≤ c ≤ N
  for (let r = x + d2 + 1; r <= N; r++) {
    for (let c = N; c >= y - d1 + d2; c--) {
      if (land[r][c] === 5) break;
      people[3] += targetMap[r - 1][c - 1];
      land[r][c] = 4;
    }
  }

  // 5구역
  for (let r = 1; r < N + 1; r++) {
    for (let c = 1; c < N + 1; c++) {
      if (land[r][c] === 5 || land[r][c] === 0) {
        people[4] += targetMap[r - 1][c - 1];
      }
    }
  }

  people.sort((a, b) => a - b);
  answer ? (answer = Math.min(answer, people[4] - people[0])) : (answer = people[4] - people[0]);
}

solution(targetMap, N);
console.log(answer);
