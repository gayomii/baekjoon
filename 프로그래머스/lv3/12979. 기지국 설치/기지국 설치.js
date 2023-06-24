function solution(n, stations, w) {
    let answer = 0;
    const wLen = (2*w)+1;
    
    let left = 1
    for(let i=0; i<stations.length; i++) {
        const right = stations[i]-w-1
        if(right - left + 1 > 0) answer += Math.ceil((right - left + 1)/wLen)
        left = stations[i]+w+1
    }
    if(left <= n) answer += Math.ceil((n - left + 1)/wLen)
    
    return answer;
}