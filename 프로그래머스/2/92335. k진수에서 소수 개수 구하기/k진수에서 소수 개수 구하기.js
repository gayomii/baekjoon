function isPrime(num) {
    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false
    }
    
    return true
}

function solution(n, k) {
    let answer = 0
    const nums = n.toString(k).split('0').reduce((result, data) => {
        if(data) result.push(Number(data))
        return result
    },[])

    for(const num of nums) {
        if(isPrime(num)) answer++
    }
    
    return answer
}