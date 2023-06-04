function solution(s) {
    let answer = [];
    const tupleStr = s.replace(/{/g, '[').replace(/}/g, ']')
    const tupleArr = JSON.parse(tupleStr)
    
    tupleArr.sort((a, b) => a.length - b.length)
    tupleArr.forEach((tuple) => {
        tuple.forEach(t => {
            if(!answer.includes(t)) answer.push(t)
        })
    })
    
    return answer;
}