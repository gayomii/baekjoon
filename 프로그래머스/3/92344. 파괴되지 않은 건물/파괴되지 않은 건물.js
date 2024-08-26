function solution(board, skill) {
    let answer = 0;
    
    const n = board.length;
    const m = board[0].length;
    const prefixSum = Array.from({ length: n + 1 }, () => Array(m+1).fill(0))

    for(let [type, r1, c1, r2, c2, degree] of skill) {
        if(type === 1) degree = -degree
        
        prefixSum[r1][c1] += degree
        prefixSum[r1][c2 + 1] -= degree
        prefixSum[r2 + 1][c1] -= degree
        prefixSum[r2 + 1][c2 + 1] += degree
    }
    
    for(let i=0; i<n; i++) {
        for(let j=1; j<m; j++) {
            prefixSum[i][j] += prefixSum[i][j-1]
        }
    }
    
    for(let j=0; j<m; j++) {
        for(let i=1; i<n; i++) {
            prefixSum[i][j] += prefixSum[i-1][j]
        }
    }
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            board[i][j] += prefixSum[i][j]
            if(board[i][j] > 0) answer++
        }
    }
    
    return answer;
}