function solution(brown, yellow) {
    let answer = []
    const sum = brown + yellow
    
    let height = 1
    while(true) {
        if(yellow%height === 0) {
            const width = yellow/height
            if(width < height) break 
            
            if((width+2)*(height+2) === sum) return answer = [width+2, height+2]
        }
        height++
    }
    
    return answer
}