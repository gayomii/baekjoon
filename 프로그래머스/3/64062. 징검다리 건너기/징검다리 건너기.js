function solution(stones, k) {
    let left = 1;
    let right = 200000001;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(binary(mid, stones, k)) left = mid + 1;
        else right = mid - 1;
    }

    return left;
}

function binary(mid, stones, k){
    let zero = 0;
    for(let i=0; i<stones.length; i++){
        if(stones[i] <= mid) zero++; 
        else zero = 0;
        
        if(zero >= k) return false;
    }
    return true;
}