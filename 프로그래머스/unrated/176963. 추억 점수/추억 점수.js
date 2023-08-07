function solution(name, yearning, photo) {
    let answer = []
    
    const scores = name.reduce((result, target, i) => {
        result[target] = yearning[i]
        return result
    }, {})
    
    photo.map(p => {
        const cnt = p.reduce((result, target) => {
            if(scores[target]) result += scores[target]
            return result
        }, 0)
        answer.push(cnt)
    })
    
    return answer
}