function solution(arr1, arr2) {
    let answer = []
    const COL_LEN = arr1.length
    const ROW_LEN = arr1[0].length
    const ROW_LEN_2 = arr2[0].length

    for(let i=0; i<COL_LEN; i++) {
        let arr = []
        for(let j=0; j<ROW_LEN_2; j++) {
            let sum = 0
            for(let k=0; k<ROW_LEN; k++) {
                sum += arr1[i][k]*arr2[k][j]
            }
            arr.push(sum)
        }
        answer.push(arr)
    }
    
    return answer
}