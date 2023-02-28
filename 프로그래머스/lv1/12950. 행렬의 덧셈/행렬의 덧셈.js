function solution(arr1, arr2) {
    let answer = []
    
    for(let i=0; i<arr1.length; i++) {
        const sumArr = arr1[i].map((arr, j) => arr1[i][j] + arr2[i][j])
        answer.push(sumArr)
    }
    return answer
}