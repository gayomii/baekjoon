function solution(picks, minerals) {
    let answer = 0
    let cntMinerals = []
    const picksCnt = picks.reduce((sum, pick) => sum += pick, 0)
    
    for(let i=0; i<minerals.length; i+=5) {
        const min = minerals.slice(i, i+5)
        cntMinerals.push(min.reduce((result, mineral) => {
            result[mineral] += 1
            return result
        }, {diamond: 0, iron: 0, stone: 0}))
    }
    
    cntMinerals = cntMinerals.slice(0, picksCnt).sort((a, b) => {
        if(a.diamond === b.diamond) {
            if(a.iron === b.iron) {
                return b.stone - a.stone
            } else {
                return b.iron - a.iron
            }
        } else {
            return b.diamond - a.diamond
        }
    })

    cntMinerals.forEach(mineral => {
        if(picks[0]) {
            answer += mineral.diamond + mineral.iron + mineral.stone
            picks[0]--
        } else if(picks[1]) {
            answer += mineral.diamond*5 + mineral.iron + mineral.stone
            picks[1]--    
        } else {
            answer += mineral.diamond*25 + mineral.iron*5 + mineral.stone
            picks[2]--
        }
    })

    return answer
}