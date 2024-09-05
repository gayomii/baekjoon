function solution(triangle) {
    const TRI_LEN = triangle.length
    const dp = Array.from({ length: TRI_LEN }, (_, i) => Array.from({ length: i+1 }, () => 0))

    if(TRI_LEN === 1) return triangle[0][0]
    
    dp[0][0] = triangle[0][0]
    dp[1][0] = triangle[1][0] + dp[0][0]
    dp[1][1] = triangle[1][1] + dp[0][0]
    
    for(let i=2; i<TRI_LEN; i++) {
        for(let j=0; j<triangle[i].length; j++) {
            if(j === 0) dp[i][j] = triangle[i][j] + dp[i-1][j]
            else if(j === triangle[i].length - 1) dp[i][j] = triangle[i][j] + dp[i-1][j-1]
            else dp[i][j] = Math.max(triangle[i][j] + dp[i-1][j], triangle[i][j] + dp[i-1][j-1])
        }
    }
    
    return Math.max(...dp[TRI_LEN-1])
}