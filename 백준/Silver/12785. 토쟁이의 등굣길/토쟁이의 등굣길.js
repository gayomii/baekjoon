const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const school = input[0].split(' ').map((num) => Number(num));
const toast = input[1].split(' ').map((num) => Number(num));

const MOD = 1000007;

function solution(school, toast) {
  const toastStreet = new Array(toast[1]).fill().map(() => new Array(toast[0]).fill(0));
  const schoolStreet = new Array(school[1] - toast[1] + 1).fill().map(() => new Array(school[0] - toast[0] + 1).fill(0));

  toastStreet[0][0] = 1;
  schoolStreet[0][0] = 1;

  for (let i = 0; i < toast[1]; i++) {
    for (let j = 0; j < toast[0]; j++) {
      if (i > 0) toastStreet[i][j] = (toastStreet[i][j] + toastStreet[i - 1][j]) % MOD;
      if (j > 0) toastStreet[i][j] = (toastStreet[i][j] + toastStreet[i][j - 1]) % MOD;
    }
  }

  for (let x = 0; x < schoolStreet.length; x++) {
    for (let y = 0; y < schoolStreet[0].length; y++) {
      if (x > 0) schoolStreet[x][y] = (schoolStreet[x][y] + schoolStreet[x - 1][y]) % MOD;
      if (y > 0) schoolStreet[x][y] = (schoolStreet[x][y] + schoolStreet[x][y - 1]) % MOD;
    }
  }

  toastCases = toastStreet[toast[1] - 1][toast[0] - 1];
  schoolCases = schoolStreet[schoolStreet.length - 1][schoolStreet[0].length - 1];

  return (toastCases * schoolCases) % MOD;
}

console.log(solution(school, toast));
