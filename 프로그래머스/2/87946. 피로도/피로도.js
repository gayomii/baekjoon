

function solution(k, dungeons) {
    let answer = 0
    const result = []
    const visited = Array.from({ length: dungeons.length }, () => false)
    
    function perm(arr) {
        if(arr.length === dungeons.length) {
            result.push([...arr])
            return
        }
        
        for(let i=0; i<dungeons.length; i++) {
            if(!visited[i]) {
                visited[i] = true
                arr.push(dungeons[i])
                perm(arr)
                
                arr.pop()
                visited[i] = false
            }
        }
    }
    
    perm([])

    for(let currentDungeons of result) {
        let curK = k
        let cnt = 0

        for(let dungeon of currentDungeons) {
            const [need, consume] = dungeon
            if(curK-need < 0) break
        
            curK -= consume
            cnt++
        }

        answer = Math.max(answer, cnt)
    }
    return answer
}
