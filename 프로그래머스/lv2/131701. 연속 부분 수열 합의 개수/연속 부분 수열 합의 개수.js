function solution(elements) {
    let answer = 0
    let nums = []
    const ELE_LEN = elements.length
    elements = [...elements, ...elements]

    elements.forEach((element, idx) => {
        for(let i=1; i<=ELE_LEN; i++) {
            const num = elements.slice(idx, idx+i).reduce((sum, el) => sum += el)
            nums.push(num)
        }
    })
    
    answer = Array.from(new Set(nums)).length
    return answer
}