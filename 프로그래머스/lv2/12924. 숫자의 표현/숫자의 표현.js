function solution(n) {
    let answer = 0
    
    for(let i=1; i<=parseInt(n/2); i++) {
        let sum = 0
        let num = i
        
        while(sum<n) {
            sum += num
            num++
        }

        if(sum === n) answer++
    }
    answer++

    return answer
}