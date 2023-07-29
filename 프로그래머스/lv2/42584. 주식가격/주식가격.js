function solution(prices) {
    let answer = []
    
    prices.forEach((price, i) => {
        let cnt = 0
        for(let j = i+1; j < prices.length; j++) {
            cnt++
            if(prices[j] < price) break
        }
        answer[i] = cnt
    })
    
    return answer
}