function solution(s, n) {
    let answer = ''
    
    let chars = s.split('')
    const newChars = chars.map(ch => {
        if(ch !== ' ') {
            const code = ch.charCodeAt()
            let newCode = code + n
            if((code <= 90 && newCode > 90) || (code >= 97 && newCode > 122)) {
                newCode -= 26
            }
            return String.fromCharCode(newCode)
        } else return ch
    })
    
    answer = newChars.join('')
    return answer
}