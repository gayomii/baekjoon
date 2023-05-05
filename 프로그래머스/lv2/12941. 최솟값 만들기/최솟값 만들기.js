function solution(A,B){
    let answer = 0

    const ascA = A.sort((a, b) => a-b)
    const descB = B.sort((a, b) => b-a)
    
    answer = ascA.reduce((cul, a, i) => cul += a*descB[i], 0)
    
    return answer
}