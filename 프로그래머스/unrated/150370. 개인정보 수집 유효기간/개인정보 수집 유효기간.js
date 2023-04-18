function solution(today, terms, privacies) {
    let answer = []
    const termsObj = {}
    
    terms.forEach(term => {
        const [type, month] = term.split(' ')
        termsObj[type] = parseInt(month)
    })
    
    privacies.forEach((privacy, idx) => {
        const [date, type] = privacy.split(' ')
        
        if(calExpirationDate(date, termsObj[type]) <= new Date(today)) answer.push(idx+1)
    })
    return answer
}

function calExpirationDate(strDate, term) {
    let [year, month, day] = strDate.split('.').map(date => parseInt(date))

    if(month + term > 12) {
        year += parseInt((month + term)/12)
        month = (month + term)%12
        
        if(!month) {
            year --
            month = 12
        }
    } else month += term

    return new Date(`${year}.${month}.${day}`)
}