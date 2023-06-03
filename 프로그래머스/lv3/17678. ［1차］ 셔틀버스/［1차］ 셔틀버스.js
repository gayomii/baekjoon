function solution(n, t, m, timetable) {
  let answer = ''
  let shuttles = []
  let times = timetable
    .map((time) => {
      const [hours, mins] = time.split(':')
      return parseInt(hours) * 60 + parseInt(mins)
    })
    .sort((a, b) => a-b)
  let cornTime = 0

  // 셔틀 시각 구하기
  for (let i = 0; i < n; i++) {
    shuttles.push(540 + t * i)
  }

  let cnt = 0
  let idx = 0
  let shuttle = shuttles.shift()

  while (true) {
    if(times[idx] <= shuttle) {
      cnt++
      if(cnt >= m) {
        if(shuttles.length) {
          shuttle = shuttles.shift()
          cnt = 0
        } else {
          cornTime = times[idx] - 1
          break
        }
      }
      idx++
    } else {
      if(shuttles.length) {
        shuttle = shuttles.shift()
        cnt = 0
      } else {
        cornTime = shuttle
        break
      }
    }

    if(idx-1 === times.length) {
      cornTime = shuttle
      break
    }
  }

  const hh = parseInt(cornTime/60) < 10 ? `0${parseInt(cornTime/60)}` : `${parseInt(cornTime/60)}`
  const mm = cornTime%60 < 10 ? `0${cornTime%60}` : cornTime%60
  
  answer = `${hh}:${mm}`
  return answer
}
