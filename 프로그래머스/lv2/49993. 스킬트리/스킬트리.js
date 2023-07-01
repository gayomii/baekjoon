function solution(skill, skill_trees) {
    let answer = 0
    let LEN = skill_trees.length
    
    const skills = skill.split('')
    for(let i=0; i<LEN; i++) {
        const needSkills = skill_trees[i].split('').filter(st => skills.includes(st))
        
        let j=0
        while(true) {
            if(!needSkills.length) {
                answer++
                break
            }
            const target = needSkills.shift()
            if(target === skills[j]) {
                j++
            } else break
        }
    }
    
    return answer
}