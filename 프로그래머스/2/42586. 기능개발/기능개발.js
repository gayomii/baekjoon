function solution(progresses, speeds) {
    const answer = []
    let bepo = 0
    let cnt = 1
    
    progresses.map((progress, i) => {
        const finish = Math.ceil((100-progress)/speeds[i])
        if(!bepo) bepo = finish
        else {
            if(bepo >= finish) cnt++
            else {
                answer.push(cnt)
                cnt = 1
                bepo = finish
            }
        }
    })

    answer.push(cnt)
    return answer
}
