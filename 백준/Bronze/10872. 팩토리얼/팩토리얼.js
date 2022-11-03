const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(num) {
  if(num === 1 || num === 0) return 1
  else return num * solution(num-1)
}

const result = solution(Number(input))
console.log(result)