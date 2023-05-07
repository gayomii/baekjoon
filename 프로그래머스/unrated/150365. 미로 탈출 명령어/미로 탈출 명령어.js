function solution(n, m, x, y, r, c, k) {
    let answer = ''
    const dlru = [[1, 0, 'd'], [0, -1, 'l'], [0, 1, 'r'], [-1, 0, 'u']]

    // impossible
    const distance = Math.abs(x-r) + Math.abs(y-c)
    if(k < distance || (k-distance)%2 !== 0) return 'impossible'

    function dfs(x, y, distance, path) {
        // 탈출 조건
        if(distance === 0) {
            if(x === r && y === c) return answer = path
            else return
        } 
        
        const dist = Math.abs(x-r) + Math.abs(y-c)
        if(distance < dist || (distance-dist)%2 !== 0) return 'impossible'
        
        if(answer) return
        let result = ''
        for(let i=0; i<4; i++) {
            
            const [dx, dy, str] = dlru[i]
            const nx = x+dx
            const ny = y+dy
            if(nx <= n && ny <= m && nx >= 1 && ny >= 1) {
                result += str
                dfs(nx, ny, distance-1, path+str)
            }
        }
    }
    
    dfs(x, y, k, '')
    return answer ? answer : 'impossible'
}