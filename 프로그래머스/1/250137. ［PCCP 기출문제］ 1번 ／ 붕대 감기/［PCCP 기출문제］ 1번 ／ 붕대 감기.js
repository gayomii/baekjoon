function solution(bandage, health, attacks) {
    let answer = health
    
    let lastAttackTime = 0
    for(let i=0; i<attacks.length; i++) {
        const [time, attack] = attacks[i]
        const recoveryTime = time - 1 - lastAttackTime
        if(recoveryTime > 0) {
            const addHP = Math.floor(recoveryTime/bandage[0]) * bandage[2]
            const totalHP = recoveryTime * bandage[1] + addHP
        
            answer = answer+totalHP >= health ? health : answer+totalHP
        }
        
        lastAttackTime = time
        answer -= attack

        if(answer <= 0) break
    }
    
    return answer <= 0 ? -1 : answer
}