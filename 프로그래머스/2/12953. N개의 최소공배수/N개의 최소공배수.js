function gcd(a, b) {
    let r
    while(b !== 0) {
        r = a%b
        a = b
        b = r
    }
    
    return a
}

function lcm(a, b) {
    return a*b / gcd(a, b)
}


function solution(arr) {
    arr.sort((a, b) => b - a)
    
    if(arr.length === 1) return arr[0]
    
    let a = arr[0]
    for(let i=1; i<arr.length; i++) {
        let b = arr[i]
        const lcmNum = lcm(a, b)
        a = lcmNum
    }
    
    return a
}

