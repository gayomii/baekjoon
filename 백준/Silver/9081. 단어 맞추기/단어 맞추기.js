const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.splice(0, 1)[0]);

function solution(words) {
  const answer = [];
  for (const w of words) {
    const W_LEN = w.length;
    const word = w.split('');
    let newWord = '';

    for (let i = W_LEN - 1; i > 0; i--) {
      if (word[i] > word[i - 1]) {
        let j = W_LEN - 1;
        let tmp;

        while (i - 1 < j) {
          if (word[i - 1] < word[j]) {
            if (!tmp) tmp = [word[j], j];
            else if (tmp[0] > word[j]) tmp = [word[j], j];
          }
          j--;
        }

        [word[i - 1], word[tmp[1]]] = [word[tmp[1]], word[i - 1]];
        newWord = [...word.slice(0, i), ...word.slice(i, W_LEN).reverse()].join('');
        break;
      }
    }

    newWord ? answer.push(newWord) : answer.push(word.join(''));
  }

  return answer.join('\n');
}

console.log(solution(input));
