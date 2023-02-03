function solution(s) {
    if(typeof s !== 'string') throw new Error('error.s is not a string type')
    
    let strList = s.split(' ')
    strList = strList.map(str => str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str)
    return strList.join(' ')
}