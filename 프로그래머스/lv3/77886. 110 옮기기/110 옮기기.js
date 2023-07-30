function solution(s) {
    let answer = []
    
    s.forEach(str => {
        let idx = -1
        let stack = ''
        let STR_LEN = str.length
        
        // '110' 찾아서 꺼내기
        let oneCnt = 0
        let newStrArr = []
        for(let j=0; j<STR_LEN; j++) {
            if(str[j] === '1') {
                oneCnt++
                newStrArr.push(str[j])
            } else {
                if(oneCnt >= 2) {
                    oneCnt -= 2
                    newStrArr.pop()
                    newStrArr.pop()
                    
                    stack += '110'
                } else {
                    newStrArr.push(str[j])
                    oneCnt = 0
                }
            }
        }
        let newStr = newStrArr.join('')

        // 110 넣기
        const lastZero = newStr.lastIndexOf('0') + 1
        newStr = [newStr.slice(0, lastZero), stack, newStr.slice(lastZero, newStr.length)].join('')
        
        answer.push(newStr)
    })
    
    return answer
}