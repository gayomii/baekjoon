function solution(x, n) {
    let answer = []
    let originX = x
    
    while(n > 0) {
        answer.push(x)
        x += originX
        n--
    }
    
    return answer
}