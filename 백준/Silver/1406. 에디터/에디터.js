const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(word, cnt, input) {
  let left = word.split('')
  let right = []

  input.forEach((data) => {
    const [action, char] = data.split(' ')
    if (action === 'L') {
      if (left.length) right.push(left.pop())
    } else if (action === 'D') {
      if (right.length) left.push(right.pop())
    } else if (action === 'B') {
      if (left.length) left.pop()
    } else if (action === 'P') {
      left.push(char)
    }
  })

  
  const result = [...left, ...right.reverse()].join('')
  console.log(result)
}

const word = input.splice(0, 1)[0]
const cnt = parseInt(input.splice(0, 1)[0])
solution(word, cnt, input)
