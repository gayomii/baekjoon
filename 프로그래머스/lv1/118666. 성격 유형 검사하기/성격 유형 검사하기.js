function solution(survey, choices) {
    let answer = ''
    let mbti = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0}
    
    for(let i=0; i<survey.length; i++) {
        const result = choices[i]-4
        result < 0 ? mbti[survey[i][0]] += Math.abs(result) :  mbti[survey[i][1]] += result
    }

    mbti['R'] >= mbti['T'] ? answer+= 'R' : answer+='T'
    mbti['C'] >= mbti['F'] ? answer+= 'C' : answer+='F'
    mbti['J'] >= mbti['M'] ? answer+= 'J' : answer+='M'
    mbti['A'] >= mbti['N'] ? answer+= 'A' : answer+='N'
    
    return answer
}