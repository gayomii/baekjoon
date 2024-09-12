const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [strNum, str] = input;

function solution(n, str) {
  const STR_LEN = str.length;
  let maxLen = 0;
  let left = 0;
  let existWords = new Map();
  existWords.set(str[left], 1);

  for (let right = 1; right < STR_LEN; right++) {
    const cnt = existWords.get(str[right]) || 0;
    existWords.set(str[right], cnt + 1);

    while (existWords.size > n) {
      const cnt = existWords.get(str[left]);
      if (cnt === 1) existWords.delete(str[left]);
      else existWords.set(str[left], cnt - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(solution(Number(strNum), str));
