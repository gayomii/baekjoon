function solution(fees, records) {
    let answer = []
    const cars = records.reduce((parkings, record) => {
        const [time, num, inout] = record.split(' ')
        const [h, m] = time.split(':')
        const min = Number(h)*60 + Number(m)
        if(num in parkings) {
            if(inout === 'IN') parkings[num] -= min
            else parkings[num] += min
        } else {
            parkings[num] = -min
        }
        
        return parkings
    }, {})
    
    for(const car in cars) {
        let time = cars[car]
        // 23:59 = 1439
        if(time <= 0) time += 1439
        if(time <= fees[0]) cars[car] = fees[1]
        else {
            cars[car] = fees[1] + Math.ceil((time - fees[0])/fees[2])*fees[3]
        }
    }
    answer = Object.keys(cars).sort((a, b) => Number(a) - Number(b)).map(carNum => cars[carNum])
    return answer
}