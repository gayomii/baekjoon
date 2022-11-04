const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(cnt, input) {
  input.forEach((data) => {
    let stack = []
    let result = ''
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ') {
        while (stack.length) {
          result += stack.pop()
        }
        result += ' '
      } else {
        stack.push(data[i])
      }
    }
    if (stack.length) {
      while (stack.length) result += stack.pop()
    }
    console.log(result)
  })
}

const cnt = Number(input.splice(0, 1)[0])
solution(cnt, input)
