const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(num) {
  if(num === 1) return 1
  if(num === 0) return 0
  else return solution(num-1) + solution(num-2)
}

const result = solution(Number(input))
console.log(result)