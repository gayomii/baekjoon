const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.splice(0, 1)[0]);
const dice = input[0].split(' ').map((n) => Number(n));

function solution(dice, N) {
  if (N == 1) {
    return dice.reduce((a, b) => a + b) - Math.max(...dice);
  }

  const pairs = [
    [dice[0], dice[5]],
    [dice[1], dice[4]],
    [dice[2], dice[3]],
  ];

  const min1 = Math.min(...dice);
  const min2 = Math.min(
    dice[0] + dice[1],
    dice[0] + dice[2],
    dice[0] + dice[3],
    dice[0] + dice[4],
    dice[1] + dice[2],
    dice[1] + dice[3],
    dice[1] + dice[5],
    dice[2] + dice[4],
    dice[2] + dice[5],
    dice[3] + dice[4],
    dice[3] + dice[5],
    dice[4] + dice[5]
  );
  const min3 = Math.min(
    dice[0] + dice[1] + dice[2],
    dice[0] + dice[1] + dice[3],
    dice[0] + dice[2] + dice[4],
    dice[0] + dice[3] + dice[4],
    dice[1] + dice[2] + dice[5],
    dice[1] + dice[3] + dice[5],
    dice[2] + dice[4] + dice[5],
    dice[3] + dice[4] + dice[5]
  );

  const oneFace = (N - 2) * (N - 2) + (N - 2) * (N - 1) * 4;
  const twoFaces = (N - 1) * 4 + (N - 2) * 4;
  const threeFaces = 4;

  const answer = min1 * oneFace + min2 * twoFaces + min3 * threeFaces;

  return answer;
}

console.log(solution(dice, N));
