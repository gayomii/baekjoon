function solution(s){
    let answer = true
    let pCnt = 0
    let yCnt = 0
    
    const strBox = s.toLowerCase().split('')
    
    strBox.forEach(str => {
        if(str === 'p') pCnt++
        else if(str === 'y') yCnt++
    })

    answer = Boolean(pCnt===yCnt)
    return answer
}