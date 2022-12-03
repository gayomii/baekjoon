const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(cnt, input) {
  let deque = []
  let result = []

  input.forEach((data) => {
    const [action, value] = data.split(' ')
    if (action === 'push_front') {
      deque.unshift(value)
    } else if (action === 'push_back') {
      deque.push(value)
    } else if (action === 'pop_front') {
      deque.length ? result.push(deque.shift()) : result.push(-1)
    } else if (action === 'pop_back') {
      deque.length ? result.push(deque.pop()) : result.push(-1)
    } else if (action === 'size') {
      result.push(deque.length)
    } else if (action === 'empty') {
      deque.length ? result.push(0) : result.push(1)
    } else if (action === 'front') {
      deque.length ? result.push(deque[0]) : result.push(-1)
    } else if (action === 'back') {
      deque.length ? result.push(deque[deque.length - 1]) : result.push(-1)
    }
  })

  console.log(result.join('\n'))
}

const cnt = Number(input.splice(0, 1))
solution(cnt, input)
