function solution(progresses, speeds) {
    const answer = []
    
    const days = progresses.map((progress, i) => Math.ceil((100-progress)/speeds[i]))
    let bepo = days[0]
    let cnt = 1

    for(let i=1; i<days.length; i++) {
        if(bepo >= days[i]) cnt++
        else {
            answer.push(cnt)
            cnt = 1
            bepo = days[i]
        }
    }
    
    answer.push(cnt)
    
    return answer
}