function solution(arr, divisor) {
    let answer = []
    answer = arr.filter(num => num%divisor === 0)
    
    if(!answer.length) answer.push(-1)
    else answer = answer.sort((a, b) => a-b)
    
    return answer
}