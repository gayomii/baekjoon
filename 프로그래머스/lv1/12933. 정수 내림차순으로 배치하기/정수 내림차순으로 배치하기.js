function solution(n) {
    let answer
    
    const numArr = n.toString().split('')
    numArr.sort((a, b) => Number(b) - Number(a))
    answer = Number(numArr.join(''))
    
    return answer
}