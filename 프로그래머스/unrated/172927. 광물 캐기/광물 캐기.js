function solution(picks, minerals) {
    let answer = 0
    let cntMinerals = []
    let [diamond, iron, stone] = picks
    const picksCnt = picks.reduce((sum, pick) => sum += pick, 0)
    
    for(let i=0; i<minerals.length; i+=5) {
        const mineral = minerals.slice(i, i+5)
        cntMinerals.push(mineral.reduce((result, item) => {
            result[item] += 1
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
        if(diamond) {
            answer += mineral.diamond + mineral.iron + mineral.stone
            diamond--
        } else if(iron) {
            answer += mineral.diamond*5 + mineral.iron + mineral.stone
            iron--    
        } else {
            answer += mineral.diamond*25 + mineral.iron*5 + mineral.stone
            stone--
        }
    })

    return answer
}