function solution(s) {
    let answer = ''
    let idx = 0
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === ' ') {
            answer += s[i]
            idx = 0
        }
        else {
            idx%2 === 0 ? answer += s[i].toUpperCase() : answer += s[i].toLowerCase()
            idx++
        }
    }
    
    return answer
}