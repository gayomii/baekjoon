function solution(s, skip, index) {
    let answer = ''
    const skipCodes = skip.split('').sort().map(word => word.charCodeAt(0)-97)
    let alphabets = []
    
    for(let i=0; i<26; i++) {
        if(skipCodes.indexOf(i) === -1) alphabets.push(String.fromCharCode(97+i))
    }
    
    const alp_len = alphabets.length
    s.split('').forEach(word => {
        const idx = alphabets.indexOf(word) 
        answer += alphabets[(idx+index)%alp_len]
    })

    return answer
}