function solution(s) {
    let answer = 0
    const LEN = s.length
    let sCase = []
    
    for(let i=0; i<LEN; i++) {
        sCase.push(s.slice(i) + s.slice(0, i))
    }
    
    sCase.forEach(item => {
        let stack = []
        for(let i=0; i<LEN; i++) {
            if(item[i] === '(' || item[i] === '{' || item[i] === '[') stack.push(item[i])
            else {
                if(stack.length) {
                    const target = stack.pop()
                    if(item[i] === ')') {
                        if(target !== '(') break
                    } else if(item[i] === '}') {
                        if(target !== '{') break
                    } else if(item[i] === ']') {
                        if(target !== '[') break
                    }
                } else break
            }
            if(i===LEN-1 && !stack.length) answer++
        }
    })
    return answer
}