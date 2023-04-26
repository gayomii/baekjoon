function solution(strings, n) {
    let answer = []
    
    answer = strings.sort((a, b) =>{
        let result
        if(a[n] !== b[n]) {
            a[n] > b[n] ? result = 1 : result = -1
        } else {
            a > b ? result = 1 : result = -1
        }
        return result
    })
    return answer
}