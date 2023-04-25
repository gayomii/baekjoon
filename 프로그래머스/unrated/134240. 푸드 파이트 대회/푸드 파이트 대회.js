function solution(food) {
    let answer = ''
    let contestFood = []
    
    food.forEach((f, idx) => {
        const cnt = parseInt(f/2)
        for(let i=0; i<cnt; i++) contestFood.push(idx)
    })
    
    answer = `${contestFood.join('')}0${contestFood.reverse().join('')}`
    return answer
}