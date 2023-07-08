function solution(genres, plays) {
    let answer = []
    
    // 1. 속한 노래가 많이 재생된 장르를 먼저
    // 2. 장르 내에서 많이 재생된 노래를 먼저
    // 3. 장르 내에서 재생 횟수가 같은 노래 중 고유 번호가 낮은 노래를 먼저 수록
    const hash = genres.reduce((obj, genre, idx) => {
        obj[genre] ? obj[genre] += plays[idx] : obj[genre] = plays[idx]
        return obj
    }, {})
    
    const sortByPlays = (Object.entries(hash).sort((a, b) => b[1] - a[1])).map(genre => genre[0])

    sortByPlays.forEach((target, idx) => {
        const genrePlays = plays.reduce((obj, play, idx) => {
            if(genres[idx] === target) obj[idx] = play
            return obj
        }, {})
        
        const sortedPlays = Object.entries(genrePlays).sort((a, b) => {
            if(b[1] - a[1] === 0) return a[0] - b[0]
            else return b[1] - a[1]
        }).slice(0, 2)

        answer = [...answer, ...sortedPlays.map(playIdx => Number(playIdx[0]))]
    })
    return answer
}