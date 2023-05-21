function solution(key, lock) {
    let answer = false
    
    const ARR_LEN = 2*key[0].length + lock[0].length - 2
    const KEY_LEN = key[0].length
    const LOCK_LEN = lock[0].length
    
    let findArray = new Array(ARR_LEN).fill(-2).map(() => new Array(ARR_LEN).fill(-2))

    for(let i=0; i<LOCK_LEN; i++) {
        for(let j=0; j<LOCK_LEN; j++) {
            findArray[KEY_LEN - 1 + i][KEY_LEN - 1 + j] = lock[i][j]
        }
    }

    // lock 계산
    const checkLock = (arr) => {
        let check = true
        for(let i=0; i<LOCK_LEN; i++) {
            for(let j=0; j<LOCK_LEN; j++) {
                if(arr[KEY_LEN - 1 + i][KEY_LEN - 1 + j] === 0 || arr[KEY_LEN -1 + i][KEY_LEN -1 + j] === 2) {
                    check = false
                    break
                }
            }
        }
    
        return check
    }
    
    // 탐색
    const checkRotKey = () => {
        let check = false
        for(let i=0; i<=ARR_LEN-KEY_LEN; i++) {
            for(let j=0; j<=ARR_LEN-KEY_LEN; j++){
                const checkKey = JSON.parse(JSON.stringify(findArray))
                for(let x=0; x<KEY_LEN; x++) {
                    for(let y=0; y<KEY_LEN; y++) {
                        checkKey[i+x][j+y] = key[x][y] + findArray[i+x][j+y] 
                    }
                }
                if(checkLock(checkKey)) return check = true
            }
        }
        return check
    }
    
    
    if(checkRotKey()) {
        answer = true
        return answer
    }
    
    // 회전
    for(let z=0; z<3; z++) {
        let newArr = new Array(KEY_LEN).fill(null).map(() => new Array(KEY_LEN).fill(null))
        for(let i=0; i<KEY_LEN; i++) {
            for(let j=0; j<KEY_LEN; j++) {
                newArr[j][KEY_LEN-i-1] = key[i][j]
            }
        }
        key = newArr
        if(checkRotKey()) {
            answer = true
            return answer
        }
    }
    
    
    
    return answer
}   