function solution(n, left, right) {
    let answer = []
    
    for(let i=left; i<=right; i++) {
        const row = parseInt(i/n) 
        const col = i%n

        answer.push(row > col ? row+1 : col+1)
    }
    return answer
}