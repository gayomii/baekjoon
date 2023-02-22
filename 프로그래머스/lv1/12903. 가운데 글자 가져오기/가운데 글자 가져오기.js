function solution(s) {
    let answer = ''
    const len = parseInt(s.length / 2)
    answer = s.length%2 === 0 ? s[len - 1] + s[len] : s[len]
    return answer
}