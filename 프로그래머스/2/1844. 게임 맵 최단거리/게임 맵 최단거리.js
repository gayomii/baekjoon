function solution(maps) {
    const rowLen = maps.length
    const colLen = maps[0].length
    const dist = Array.from({ length: rowLen }, () => Array(colLen).fill(-1))
    const move = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    
    function bfs(start) {
        const queue = []
        queue.push(start)
        dist[start[0]][start[1]] = 1
        
        while(queue.length > 0) {
            const [x, y] = queue.shift()
            
            for(const m of move) {
                const dx = x + m[0]
                const dy = y + m[1]

                if(dx < 0 || dx >= rowLen || dy < 0 || dy >= colLen) continue
                if(maps[dx][dy] === 0) continue
                if(dist[dx][dy] === -1) {
                    queue.push([dx, dy])
                    dist[dx][dy] = dist[x][y] + 1
                }
            }
        }
    }
    
    bfs([0, 0])
    return dist[rowLen - 1][colLen -1]
}