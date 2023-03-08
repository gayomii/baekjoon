function solution(phone_number) {
    let answer = ''
    const phoneNumberLen = phone_number.length
    answer = phone_number.slice(-4)
    answer = answer.padStart(phoneNumberLen, '*')
    
    return answer
}