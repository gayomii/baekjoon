function solution(sequence) {
    const SEQ_LEN = sequence.length
    const aPulse = [sequence[0]]
    const bPulse = [-sequence[0]]
    let answer= Math.max(aPulse[0], bPulse[0])
    
    for(let i=1; i<SEQ_LEN; i++) {
        if(i%2 === 0) {
            aPulse[i] = Math.max(aPulse[i-1] + sequence[i], sequence[i])
            bPulse[i] = Math.max(bPulse[i-1] - sequence[i], -sequence[i])
        } else {
            aPulse[i] = Math.max(aPulse[i-1] - sequence[i], -sequence[i])
            bPulse[i] = Math.max(bPulse[i-1] + sequence[i], sequence[i])
        }
        
        answer = Math.max(answer, aPulse[i], bPulse[i])
    }
    
    return answer
}