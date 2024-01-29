function solution(n, k, enemy) {
  let answer = 0
  let heap = [null]
  const TOTAL_ROUND = enemy.length

  if (k >= TOTAL_ROUND) return TOTAL_ROUND
  if (n >= enemy.reduce((sum, num) => (sum += num), 0)) return TOTAL_ROUND

  // 힙 구현
  const swap = (a, b) => {
    return ([heap[a], heap[b]] = [heap[b], heap[a]])
  }

  const pushHeap = (enemy) => {
    heap.push(enemy)

    let i = heap.length - 1
    while (true) {
      const parentIdx = parseInt(i / 2)
      const parent = heap[parentIdx]
      if (parent && parent < heap[i]) {
        swap(i, parentIdx)
        i = parentIdx
      } else break
    }
  }

  const deleteHeap = () => {
    const target = heap[1]
    const lastValue = heap.pop()
    if (heap.length > 1) heap[1] = lastValue
    else return target

    let i = 1
    while (true) {
      const leftIdx = 2 * i
      const rightIdx = 2 * i + 1

      if (!heap[leftIdx]) break

      if (!heap[rightIdx]) {
        if (heap[leftIdx] > heap[i]) {
          swap(leftIdx, i)
          i = leftIdx
        } else break
      } else {
        if (heap[leftIdx] >= heap[rightIdx]) {
          if (heap[leftIdx] > heap[i]) {
            swap(leftIdx, i)
            i = leftIdx
          } else break
        } else {
          if (heap[rightIdx] > heap[i]) {
            swap(rightIdx, i)
            i = rightIdx
          } else break
        }
      }
    }
    return target
  }

  for (let i = 0; i < TOTAL_ROUND; i++) {
    n -= enemy[i]
    pushHeap(enemy[i])
    if (n < 0) {
      if (k > 0) {
        const deletedValue = deleteHeap()
        k--
        n += deletedValue
      } else return (answer = i)
    }
  }

  if (!answer) answer = TOTAL_ROUND

  return answer
}