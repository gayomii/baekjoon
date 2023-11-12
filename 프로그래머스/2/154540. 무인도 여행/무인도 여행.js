function solution(maps) {
    let answer = []
    const width = maps[0].length
    maps = maps.map(m => m.split(''))
    const visited = Array.from(new Array(maps.length), () => Array(width).fill(null))

    function bfs(i, j) {
        const queue = [[i, j]]
        let days = 0
        
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
        while(queue.length) {
            let [x, y] = queue.shift()
            visited[x][y] = 1
            days += Number(maps[x][y])
            
            directions.forEach(dir => {
                const [dirX, dirY] = dir
                const dx = dirX + x
                const dy = dirY + y

                if((dx >= 0 && dx < maps.length) && (dy >= 0 && dy < width)) {
                    if(!visited[dx][dy] && maps[dx][dy] !== 'X') {
                        queue.push([dx, dy])
                        visited[dx][dy] = 1
                    }
                }       
            })
        }
        
        return days
    }
    
    for(let i=0; i<maps.length; i++) {
        for(let j=0; j<width; j++) {
            if(maps[i][j] !== 'X' && !visited[i][j]) {
                answer.push(bfs(i, j))
            }
        }
    } 
    
    return answer.length ? answer.sort((a, b) => a-b) : [-1]
}