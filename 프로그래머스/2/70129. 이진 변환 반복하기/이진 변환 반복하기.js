function solution(s) {
    if(s === '1') return [0, 0]
    
    let answer = [1, 0]
    let newStr = s.split('').filter(n => n === '1')
    
    answer[1] += s.length - newStr.length
     
    while(true) {
        if(newStr.length <= 1) break
        
        const num = newStr.length
        const binary = num.toString(2)
        answer[0]++
        
        newStr = binary.split('').filter(n => n === '1')
        answer[1] += binary.length - newStr.length
    }
    
    return answer
}