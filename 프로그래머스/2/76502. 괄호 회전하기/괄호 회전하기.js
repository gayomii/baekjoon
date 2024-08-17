function solution(s) {
    let answer = 0
    const STR_LEN = s.length
    
    for(let x=0; x<STR_LEN; x++) {
        // x칸 만큼 회전하기
        const target = s.slice(x, STR_LEN) + s.slice(0, x)
        
        // 올바른 괄호 문자열인지 체크
        const stack = []
        let isCorrect = true
        for(let i=0; i<STR_LEN; i++) {
            if(target[i] === '{' || target[i] === '[' || target[i] === '(') {
                stack.push(target[i])
            } else {
                const top = stack[stack.length - 1]
                if((target[i] === '}' && top === '{') || (target[i] === ')' && top === '(') || (target[i] === ']' && top === '[')) {
                    stack.pop()
                } else {
                    isCorrect = false
                    break
                }
            }
        }
        
        if(stack.length === 0 && isCorrect) answer++
    }
    
    return answer
}