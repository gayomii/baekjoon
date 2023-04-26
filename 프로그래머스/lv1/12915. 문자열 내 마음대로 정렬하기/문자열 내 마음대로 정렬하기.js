function solution(strings, n) {
    let answer = []
    
    answer = strings.sort((a, b) => a[n] !== b[n] ? (a[n] > b[n] ? 1 : -1) : (a > b ? 1 : -1))  
    return answer
}