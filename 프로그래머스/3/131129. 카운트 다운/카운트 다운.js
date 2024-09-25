function solution(target) {
    const dp = Array.from({ length: target + 1 }, () => [Infinity, 0])
    dp[0] = [0, 0]
    
    for(let i=1; i<=target; i++) {
        for(let score=1; score<=20; score++) {
            // 불
            if(i >= 50) {
                if(dp[i][0] > dp[i-50][0] + 1) dp[i] = [dp[i-50][0] + 1, dp[i-50][1] + 1]
                else if(dp[i][0] === dp[i-50][0] + 1) dp[i][1] = Math.max(dp[i][1], dp[i-50][1]+1)
            }
            
            // 싱글
            if(i >= score) {
                if(dp[i][0] > dp[i-score][0] + 1) dp[i] = [dp[i-score][0] + 1, dp[i-score][1] + 1]
                else if(dp[i][0] === dp[i-score][0] + 1) dp[i][1] = Math.max(dp[i][1], dp[i-score][1]+1)
            }
            
            // 더블
            if(i >= score*2) {
                if(dp[i][0] > dp[i-score*2][0] + 1) dp[i] = [dp[i-score*2][0] + 1, dp[i-score*2][1]]
            }
            
            // 트리플
            if(i >= score*3) {
                if(dp[i][0] > dp[i-score*3][0] + 1) dp[i] = [dp[i-score*3][0] + 1, dp[i-score*3][1]]
            }
        }
    }
   
    return dp[dp.length-1]
}