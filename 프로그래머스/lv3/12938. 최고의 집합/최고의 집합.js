function solution(n, s) {
    let answer = []
    
    if(s < n) return [-1]
    
    while(s > 0 && n > 0) {
        const num = Math.floor(s/n)
        answer.push(num)
        s -= num
        n--
    }
    
    return answer
}