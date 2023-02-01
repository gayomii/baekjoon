function solution(s) {
    let strList = s.split(' ')
    strList = strList.map(str => str ? str[0].toUpperCase() + str.slice(1, str.length).toLowerCase() : str)
    return strList.join(' ')
}