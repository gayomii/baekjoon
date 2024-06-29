function solution(participant, completion){
    let map = new Map()
    
    participant.forEach((value, idx) => {
        if(map.has(value)) map.set(value, map.get(value)+1)
        else map.set(value, 1)
    })
    
    completion.forEach(name => {
        const cnt = map.get(name)
        if(cnt > 1) map.set(name, cnt-1)
        else map.delete(name)
    })
    
    for(let key of map.keys()) return key
}