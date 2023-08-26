function solution(n, k) {
    let answer = []
    let totalNum = multipleNum(n)
    let nums = Array(n).fill().map((num, i) => i+1)

    k--
    while(n>1) {
        totalNum = totalNum/n
        const quo = parseInt(k/totalNum)
        const div = k%totalNum
        const removed = nums.splice(quo, 1)
        answer.push(removed[0])
        
        k = div
        n--
        if(n === 1) {
            answer.push(nums[0])
            break
        }
    }
    
    return answer
}

function multipleNum(num) {
    let totalNum = 1
    while(num) {
        totalNum *= num
        num--
    }
    
    return totalNum
}