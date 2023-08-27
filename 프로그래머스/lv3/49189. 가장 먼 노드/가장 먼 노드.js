function solution(n, edge) {
    let answer = 0
    const routes = new Array(n+1).fill().map(() => [])
    
    edge.forEach((route, i) => {
        routes[route[0]].push(route[1])
        routes[route[1]].push(route[0])
    })

    const visited = new Array(n+1).fill(0)
    visited[1] = 1
    const queue = [1]

    while(queue.length) {
        const node = queue.shift()
        routes[node].forEach(route => {
            if(visited[route] === 0) {
                visited[route] = visited[node]+1
                queue.push(route)
            }
        })
    }
    
    const max = Math.max(...visited)
    answer = visited.filter(r => r===max).length

    return answer 
}