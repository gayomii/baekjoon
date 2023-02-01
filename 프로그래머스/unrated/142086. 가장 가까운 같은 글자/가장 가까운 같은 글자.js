function solution(s) {
    let answer = []
    
    for(let i=0; i<s.length; i++) {
        const checkStr = s.slice(0, i)
        const idx = checkStr.lastIndexOf(s[i])
        idx === -1 ? answer.push(-1) : answer.push(i-idx)
    }
    
    return answer
}