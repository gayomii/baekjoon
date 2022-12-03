const fs = require('fs')
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((data) => Number(data))

function solution(num, k) {
  let queue = new Array(num).fill(0).map((data, i) => i + 1)
  let cnt = 1
  let result = []

  while (queue.length) {
    if (cnt < k) {
      queue.push(queue.shift())
      cnt++
    } else if (cnt === k) {
      result.push(queue.shift())
      cnt = 1
    }
  }

  console.log(`<${result.join(', ')}>`)
}

solution(input[0], input[1])
