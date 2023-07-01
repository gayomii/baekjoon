function solution(book_time) {
    let answer = 0
    const BOOK_LEN = book_time.length
    
    const newBookTime = book_time.map(times => {
        const [ start, end ] = times

        const startTime = setTimes(start)
        const endTime = setTimes(end)
        
        return [startTime, endTime]
    })
    
    newBookTime.sort((a, b)=>a[0] - b[0])

    let rooms = [newBookTime[0][1]]
    for(let i=1; i<BOOK_LEN; i++) {
        const idx = rooms.findIndex(room => newBookTime[i][0] >= room+10)
        if(idx === -1) rooms.push(newBookTime[i][1])
        else rooms[idx] = newBookTime[i][1]
     }
    
    answer = rooms.length
    
    return answer
}

function setTimes(strTime) {
    const [hours, mins] = strTime.split(':')
    return Number(hours)*60 + Number(mins)
}