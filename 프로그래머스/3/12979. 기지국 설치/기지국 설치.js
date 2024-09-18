function solution(n, stations, w) {
    let answer = 0
    let left = 1
    const stationLen = w*2 + 1
    const STA_LEN = stations.length
    
    for(let i=0; i<STA_LEN; i++) {
        let right = stations[i] - w - 1
        const dist = right - left + 1
        if(dist > 0) answer += Math.ceil(dist/stationLen)
        left = stations[i] + w + 1
    }
    
    if(left <= n) answer += Math.ceil((n - left + 1)/stationLen)
    
    return answer
}