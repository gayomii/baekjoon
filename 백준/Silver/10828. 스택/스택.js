const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(cnt, input) {
  let stack = []
  let result = []

  input.forEach((data) => {
    const [action, num] = data.split(' ')

    if (action === 'push') {
      stack.push(num)
    } else if (action === 'pop') {
      stack.length ? result.push(stack.pop()) : result.push(-1)
    } else if (action === 'size') {
      result.push(stack.length)
    } else if (action === 'empty') {
      stack.length ? result.push(0) : result.push(1)
    } else if (action === 'top') {
      stack.length ? result.push(stack[stack.length - 1]) : result.push(-1)
    }
  })
  console.log(result.join('\n'))
}

const cnt = Number(input.splice(0, 1)[0])
solution(cnt, input)
