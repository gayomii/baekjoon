function solution(n) {
    let result = []
    
    for(let i=0; i<=n; i++) {
        if(i === 0 || i === 1) result.push(i)
        else result.push((result[i-1] + result[i-2])%1234567) 
    }
    
    return result[n]
}