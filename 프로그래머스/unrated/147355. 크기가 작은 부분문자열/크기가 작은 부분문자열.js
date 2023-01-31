function solution(t, p) {
    let answer = 0
    let nums = []
    const len = p.length
    
    for(let i=0; i<t.length; i++) {
        const sliceStr = t.substring(i, len+i)
        if(sliceStr.length === len) nums.push(Number(sliceStr))
    }

    nums.forEach(num => {
        if(num <= p) answer++
    })
    
    return answer
}