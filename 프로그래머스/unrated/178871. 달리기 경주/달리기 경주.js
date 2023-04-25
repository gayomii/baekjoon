function solution(players, callings) {    
    let answer = []
    let rankPlayers = new Map(players.map((player, idx) => [idx+1, player]))
    let playerRanks = new Map(players.map((player, idx) => [player, idx+1]))

    callings.forEach(calling => {
        const rank = playerRanks.get(calling)
        const frontPlayer = rankPlayers.get(rank-1)
        
        playerRanks.set(frontPlayer, rank)
        playerRanks.set(calling, rank-1)
        rankPlayers.set(rank, frontPlayer)
        rankPlayers.set(rank-1, calling)
    })
    
    answer = Array.from(playerRanks).sort((a, b) => a[1] - b[1]).map((item) => item[0])
    return answer
}