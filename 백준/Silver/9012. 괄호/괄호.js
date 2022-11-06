const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(cnt, input) {
  for (let i = 0; i < cnt; i++) {
    let stack = []
    let answer = ''

    const testCase = input[i].split('')
    testCase.forEach((pStr) => {
      if (pStr === '(') stack.push(pStr)
      else if (pStr === ')') {
        if (!stack.length) answer = 'NO'
        else stack.pop()
      }
    })

    if (answer !== 'NO' && !stack.length) answer = 'YES'
    else answer = 'NO'
    console.log(answer)
  }
}

const cnt = Number(input.splice(0, 1)[0])
solution(cnt, input)
