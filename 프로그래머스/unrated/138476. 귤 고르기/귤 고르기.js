function solution(k, tangerine) {
    let answer = 0
    let cnt = k
    
    const tangerineObj = tangerine.reduce((obj, item) => {
        obj[item] ? obj[item] += 1 : obj[item] = 1
        return obj
    }, {})
    const tangerineArr = Object.entries(tangerineObj).sort((a, b) => b[1] - a[1])
    tangerineArr.forEach(item => {
        if(cnt <= 0) return
        cnt -= item[1]
        answer++
    })

    return answer
}