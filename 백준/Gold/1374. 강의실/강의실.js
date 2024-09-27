const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.splice(0, 1)[0]);
const lectures = input.map((data) => data.split(' ').map(Number));

function solution() {
  lectures.sort((a, b) => (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]));
  const rooms = [lectures[0][2]];

  for (let i = 1; i < n; i++) {
    const [classNo, start, end] = lectures[i];

    const roomNo = rooms.findIndex((room) => start >= room);
    if (roomNo !== -1) rooms[roomNo] = end;
    else rooms.push(end);
  }

  return rooms.length;
}

console.log(solution());
