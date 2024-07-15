const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [ totalNums, minNums ] = input[0].split(' ').map(data => Number(data))
const nums = input[1].split(' ').map(data => Number(data))

function solution(_n, k, arr) {
  const sortedArr = arr.sort((a, b) => b-a)
  console.log(sortedArr[k-1])
}

solution(totalNums, minNums, nums)