const fs = require('fs')
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((data) => Number(data))

function solution(cnt, input) {
  const nums = Array.from({ length: input.length }, (_v, i) => i + 1)

  let stack = []
  let result = []

  nums.forEach((num) => {
    stack.push(num)
    result.push('+')

    while (
      stack.length &&
      input.length &&
      stack[stack.length - 1] === input[0]
    ) {
      stack.pop()
      input.shift()
      result.push('-')
    }
  })

  if (!stack.length) console.log(result.join('\n'))
  else console.log('NO')
}

const cnt = input.splice(0, 1)[0]
solution(cnt, input)
