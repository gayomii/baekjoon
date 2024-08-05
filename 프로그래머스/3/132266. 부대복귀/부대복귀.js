function solution(n, roads, sources, destination) {
    let answer = []
    const visited = new Array(n+1).fill(-1)
    const graph = new Array(n+1).fill(0).map(() => [])
    roads.forEach(([start, end]) => {
        graph[start].push(end)
        graph[end].push(start)
    })
    
    const queue = [destination]
    visited[destination] = 0
    
    while(queue.length) {
        const curDes = queue.shift()
        for(const node of graph[curDes]) {
            if(visited[node] === -1) {
                visited[node] = visited[curDes] + 1
                queue.push(node)
            }
        }
    }

    sources.forEach(source => answer.push(visited[source]))
    
    return answer
}
