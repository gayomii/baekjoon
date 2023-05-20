function solution(n, works) {
    const sortedWorks = works.sort((a, b) => a-b)
    const WORKS_LEN = works.length
  
    if (n >= works.reduce((sum, work) => (sum += work), 0)) return 0
    if (WORKS_LEN === 1) {
        works[0] -= n
        return works[0] * works[0]
    }
    
    while(n) {
        const maxWork = sortedWorks[WORKS_LEN - 1]
        
        for(let i=WORKS_LEN-1; i>=0; i--) {
            if(maxWork <= sortedWorks[i]) {
                n--
                sortedWorks[i]--
            }
            if(n<=0) break
        }
    }
    
    return sortedWorks.reduce((sum, work) => sum += work*work, 0)
}
