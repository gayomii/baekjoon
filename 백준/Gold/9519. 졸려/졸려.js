const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
  const n = Number(input.shift());
  const str = input[0];
  const STR_LEN = str.length;
  const HALF_LEN = parseInt(STR_LEN / 2);

  if (STR_LEN === 3) return n % 2 === 0 ? str : str[0] + str[2] + str[1];

  let newStr = str;
  const changeStrList = [newStr];

  while (true) {
    let tmp = '';

    for (let i = 0; i < HALF_LEN; i++) {
      tmp += newStr[i] + newStr[STR_LEN - 1 - i];
    }

    newStr = STR_LEN % 2 === 0 ? tmp : tmp + newStr[HALF_LEN];

    if (newStr === str) break;
    changeStrList.push(newStr);
  }

  const CSL_LEN = changeStrList.length;
  return n % CSL_LEN === 0 ? changeStrList[0] : changeStrList[CSL_LEN - (n % CSL_LEN)];
}

console.log(solution());
