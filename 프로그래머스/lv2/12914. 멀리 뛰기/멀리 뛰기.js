function solution(n) {
    let answer = 0
    let result = [0]
    
    for(let i=1; i<=n; i++) {
        if(i === 1 || i === 2) result.push(i)
        else result.push((result[i-1] + result[i-2])%1234567)
    }

    answer = result[n]
    return answer
}