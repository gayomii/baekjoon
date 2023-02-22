function solution(s) {
    let answer = ''
    let largeStr = []
    let smallStr = []
    
    for(let i=0; i<s.length; i++) {
        s[i] === s[i].toUpperCase() ? largeStr.push(s[i]) : smallStr.push(s[i])
    }
    
    smallStr = smallStr.sort().reverse()
    largeStr = largeStr.sort().reverse()
    
    answer = smallStr.join('') + largeStr.join('')
    
    return answer
}