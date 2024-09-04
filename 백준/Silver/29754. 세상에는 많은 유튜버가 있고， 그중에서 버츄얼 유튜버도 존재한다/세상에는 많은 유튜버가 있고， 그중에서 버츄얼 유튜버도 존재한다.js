const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [cnt, lastDay] = input.splice(0, 1)[0].split(' ').map(Number);

function isVirtualYoutuber(youtubeData) {
  for (const data of youtubeData) {
    const [days, time] = data;
    if (days < 5 || time < 3600) return false;
  }

  return true;
}

function solution() {
  const answer = [];
  const youtubers = new Map();
  input.forEach((data) => {
    const [youtuber, day, startTime, endTime] = data.split(' ');
    const [sh, sm] = startTime.split(':').map(Number);
    const [eh, em] = endTime.split(':').map(Number);
    const time = eh * 60 + em - (sh * 60 + sm);
    const week = parseInt((day - 1) / 7);

    const youtuberData = youtubers.has(youtuber)
      ? youtubers.get(youtuber)
      : Array.from({ length: parseInt(lastDay / 7) })
          .fill()
          .map(() => [0, 0]);

    youtuberData[week][0] += 1;
    youtuberData[week][1] += time;
    youtubers.set(youtuber, youtuberData);
  });

  for (let youtuber of youtubers) {
    const [name, youtubeData] = youtuber;

    if (isVirtualYoutuber(youtubeData)) answer.push(name);
  }

  if (!answer.length) return -1;
  return answer.sort().join('\n');
}

console.log(solution());
