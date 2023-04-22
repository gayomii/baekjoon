function solution(k, tangerine) {
    let answer = 0
    let cnt = k
    
    const tangerineObj = tangerine.reduce((obj, item) => {
        obj[item] ? obj[item] += 1 : obj[item] = 1
        return obj
    }, {})
    
    const tangerineCntArr = Object.values(tangerineObj).sort((a, b) => b - a)
    tangerineCntArr.forEach(item => {
        if(cnt <= 0) return
        cnt -= item
        answer++
    })

    return answer
}