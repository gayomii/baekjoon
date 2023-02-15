function solution(x) {
    let answer
    
    const strX = x.toString()
    const sumNum = (strX.split('')).reduce((sum, cur) => sum += Number(cur) ,0)
    
    x%sumNum === 0 ? answer = true : answer = false
    return answer;
}