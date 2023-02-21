function solution(arr) {
    let answer = []
    let min = arr.reduce((min, cur) => cur < min ? cur : min, arr[0])
    answer = arr.filter(num => num !== min)
    
    return !(answer.length) ? [-1] : answer
}