function solution(survey, choices) {
    let answer = ''
    let mbti = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    
    choices.forEach((choice, idx) => {
        const score = choice - 4
        const [type1, type2] = survey[idx]
        
        score < 0 ? mbti[type1] += score*-1 : mbti[type2] += score
    })
    
    mbti['R'] >= mbti['T'] ? answer += 'R' : answer += 'T'
    mbti['C'] >= mbti['F'] ? answer += 'C' : answer += 'F'
    mbti['J'] >= mbti['M'] ? answer += 'J' : answer += 'M'
    mbti['A'] >= mbti['N'] ? answer += 'A' : answer += 'N'

    return answer
}