function solution(food) {
    let answer = ''
    let contestFood = []
    
    for(let i=1; i<food.length; i++) {
        const cnt = parseInt(food[i]/2)
        for(let j=0; j<cnt; j++) {
            contestFood.push(i)
        }
    }
    
    answer = `${contestFood.join('')}0${contestFood.reverse().join('')}`
    return answer
}