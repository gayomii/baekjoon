function solution(str1, str2) {
    let answer = 0
    const str1Box = setStrs(str1)
    const str2Box = setStrs(str2)
    
    if(!str1Box.length && !str2Box.length) return Math.floor(65536*1)
    answer = getCalculation(str1Box, str2Box)
    return answer
}

function setStrs(str) {
    const STR_LEN = str.length - 1
    const regEng = /^[a-zA-Z]*$/
    let strBox = {}
    
    for(let i=0; i<STR_LEN; i++) {
        const ss = str.slice(i, i+2)
        if(regEng.test(ss)) {
            const target = ss.toLowerCase()
            strBox[target] ? strBox[target] += 1 : strBox[target] = 1
        }
    }
    
    return Object.entries(strBox)
}

function getCalculation(box1, box2) {
    let intersection = 0
    let union = 0
    
    box1.forEach((data, i) => {
        const strs = box2.map(b => b[0])
        const idx = strs.indexOf(data[0])
        if(idx !== -1) {
            union += Math.min(data[1], box2[idx][1])
            intersection += Math.max(data[1], box2[idx][1])
            box2.splice(idx, 1)
        } else intersection += data[1]
    })
    
    box2.forEach(data => intersection += data[1])
    
    return Math.floor(65536*union/intersection)
}
