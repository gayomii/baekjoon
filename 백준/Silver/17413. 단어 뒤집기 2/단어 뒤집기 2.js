const fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('')

function solution(input) {
  let stack = []
  let answer = ''
  let isTag = false

  input.forEach((word) => {
    if (word === '<' || word === '>') {
      if (word === '<') {
        if (stack.length) {
          answer += `${stack.reverse().join('')}`
          stack = []
        }
        isTag = true
        answer += word
      } else {
        isTag = false
        answer += word
      }
    } else {
      if (isTag) {
        answer += word
      } else {
        if (word === ' ') {
          answer += `${stack.reverse().join('')} `
          stack = []
        } else {
          stack.push(word)
        }
      }
    }
  })

  if (stack.length) answer += stack.reverse().join('')
  console.log(answer)
}

solution(input)
