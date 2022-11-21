const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(cnt, input) {
  let queue = []
  let answer = []
  input.forEach((data) => {
    const [action, num] = data.split(' ')
    if (action === 'push') {
      queue.push(Number(num))
    } else if (action === 'pop') {
      queue.length ? answer.push(queue.shift()) : answer.push(-1)
    } else if (action === 'size') {
      answer.push(queue.length)
    } else if (action === 'empty') {
      queue.length ? answer.push(0) : answer.push(1)
    } else if (action === 'front') {
      queue.length ? answer.push(queue[0]) : answer.push(-1)
    } else if (action === 'back') {
      queue.length ? answer.push(queue[queue.length - 1]) : answer.push(-1)
    }
  })
  console.log(answer.join('\n'))
}

const cnt = input.splice(0, 1)[0]
solution(cnt, input)
