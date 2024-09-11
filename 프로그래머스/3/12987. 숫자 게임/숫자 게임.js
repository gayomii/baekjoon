function solution(A, B) {
    let answer = 0;

    A.sort((a, b) => b-a)
    B.sort((a, b) => b-a)
    
    let i = 0
    for(const a of A) {
        if(a < B[i]) {
            answer++
            i++
        }
    }
    
    
    return answer;
}