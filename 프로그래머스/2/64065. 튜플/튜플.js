function solution(s) {
    const tupleArr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))

    tupleArr.sort((a, b) => a.length - b.length)
    const answer = tupleArr.reduce((total, nums) => Array.from(new Set([...total, ...nums])), [])

    return answer;
}