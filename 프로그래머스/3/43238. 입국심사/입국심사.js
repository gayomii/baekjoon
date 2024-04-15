function solution(n, times) {
    let answer = 0
    const TIMES_LEN = times.length
    
    times.sort((a, b) => a-b)
    
    let left = 1
    let right = n*times[TIMES_LEN-1]
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        let cnt = 0
        times.forEach(time => {
            cnt += Math.floor(mid/time)
            if(cnt > n) return
        })
        
        if(cnt >= n) {
            right = mid - 1
            answer = mid
        }
        else left = mid + 1
    }
    
    return answer
}