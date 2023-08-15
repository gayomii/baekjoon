function solution(s) {
    let answer = 0
    let sameCnt = 0
    let diffCnt = 0
    
    while(s.length) {
        const target = s[0]
        if(sameCnt !== diffCnt) {
            answer++
            break
        }
        
        sameCnt++
        for(let i=1; i<s.length; i++) {
            target === s[i] ? sameCnt++ : diffCnt++
            if(sameCnt === diffCnt) {
                s = s.slice(i+1)   
                sameCnt = 0
                diffCnt = 0
                answer++
                break
            }
        }
    }
    
    return answer
}