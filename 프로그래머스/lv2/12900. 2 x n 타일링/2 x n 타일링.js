function solution(n) {
    let answer = 0
    let cases = [0]
    
    for(let i=1; i<=n; i++) {
        if(i === 1 || i === 2) cases.push(i)
        else cases.push((cases[i-1] + cases[i-2]) % 1000000007)
    }
    answer = cases[n]
    return answer
}