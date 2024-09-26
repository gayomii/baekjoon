const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, k] = input.splice(0, 1)[0].split(' ').map(Number);
const land = input.splice(0, n).map((data) => data.split(' ').map(Number));
const treeList = input.map((data) => data.split(' ').map(Number));
const trees = Array.from({ length: n }, () => Array.from({ length: n }, () => []));

function solution() {
  const foods = Array.from({ length: n }, () => Array.from({ length: n }, () => 5));
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  treeList.sort((a, b) => a[2] - b[2]);
  for (const [x, y, z] of treeList) {
    trees[x - 1][y - 1].push(z);
  }

  for (let year = 1; year <= k; year++) {
    // 봄에는 나무가 자신의 나이만큼 양분을 먹고, 나이가 1 증가한다. 각각의 나무는 나무가 있는 1×1 크기의 칸에 있는 양분만 먹을 수 있다. 하나의 칸에 여러 개의 나무가 있다면, 나이가 어린 나무부터 양분을 먹는다. 만약, 땅에 양분이 부족해 자신의 나이만큼 양분을 먹을 수 없는 나무는 양분을 먹지 못하고 즉시 죽는다.

    // 여름에는 봄에 죽은 나무가 양분으로 변하게 된다. 각각의 죽은 나무마다 나이를 2로 나눈 값이 나무가 있던 칸에 양분으로 추가된다. 소수점 아래는 버린다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!trees[i][j].length) continue;

        let livedTrees = [];
        let deadAges = 0;
        for (const age of trees[i][j]) {
          if (foods[i][j] >= age) {
            foods[i][j] -= age;
            livedTrees.push(age + 1);
          } else {
            deadAges += parseInt(age / 2);
          }
        }

        trees[i][j] = livedTrees;
        foods[i][j] += deadAges;
      }
    }

    // 가을에는 나무가 번식한다. 번식하는 나무는 나이가 5의 배수이어야 하며, 인접한 8개의 칸에 나이가 1인 나무가 생긴다.
    // 겨울에는 S2D2가 땅을 돌아다니면서 땅에 양분을 추가한다. 각 칸에 추가되는 양분의 양은 A[r][c]이고, 입력으로 주어진다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 가을
        if (trees[i][j].length > 0) {
          for (const age of trees[i][j]) {
            if (age % 5 === 0) {
              for (let d = 0; d < 8; d++) {
                const di = i + dirs[d][0];
                const dj = j + dirs[d][1];

                if (di < 0 || di >= n || dj < 0 || dj >= n) continue;
                trees[di][dj].unshift(1);
              }
            }
          }
        }

        // 겨울
        foods[i][j] += land[i][j];
      }
    }
  }

  // 모든 나무의 개수를 계산
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cnt += trees[i][j].length; // 각 칸에 있는 나무 수를 합산
    }
  }

  return cnt; // 총 살아있는 나무 수 반환
}

console.log(solution());
