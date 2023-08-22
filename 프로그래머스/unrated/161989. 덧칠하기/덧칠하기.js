function solution(n, m, section) {
    let answer = 0
    let end = -1
    
    section.forEach(target => {
        if(target > end) {
            answer++
            end = target + m - 1
        }
    })
    
    return answer
}