function solution(want, number, discount) {
    let answer = 0
    const disLen = discount.length
    
    for(let i=0; i<=disLen; i++) {
        let discountNums = []
        const items = discount.slice(i, i+10)
        want.forEach((w, i) => {
            discountNums[i] = items.filter(item => item === w).length
        })
        const pass = number.every((num, i) => num <= discountNums[i])
        if(pass) answer++
        if(i > disLen-10 && !pass) break
    }
    
    return answer
}