function solution(priorities, location) {
    let answer = 0
    const process = priorities.map((pr, i) => [pr, i])
    
    while(process.length) {
        const target = process.shift()

        if(process.some(p => p[0] > target[0])) {
            process.push(target)
        } else {
            answer++
            if(target[1] === location) break
        }
    }
    
    return answer
}