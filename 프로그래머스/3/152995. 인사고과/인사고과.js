function solution(scores) {
    let answer = 1
    const [targetAtt, targetPeer] = scores[0]

    scores.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1]
        return b[0] - a[0]
    })

    let maxPeer = 0
    for(const score of scores) {
        if(targetAtt < score[0]) {
            if(targetPeer < score[1]) return -1
        }
        
        if(score[1] >= maxPeer) {
            maxPeer = score[1]
            if(score[0] + score[1] > targetAtt + targetPeer) answer++
        }
    }
    
    return answer
}