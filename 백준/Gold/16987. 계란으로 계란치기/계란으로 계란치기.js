const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];

rl.on('line', (input) => {
  data.push(input);
}).on('close', () => {
  const checkBreakCount = (info) => {
    return info.filter((i) => i[0] <= 0).length;
  };

  const N = +data.shift();
  const info = data.map((i) => i.split(' ').map(Number));

  let maxValue = 0;
  const dfs = (index, info) => {
    if (index === N) {
      const currentBreakCount = checkBreakCount(info);
      if (maxValue < currentBreakCount) maxValue = currentBreakCount;
      return;
    }

    const currentEgg = info[index];

    // 현재 계란으로 다른 계란을 칠 수 있는지 여부
    let hitFlag = false;

    for (let i = 0; i < info.length; i++) {
      // 현재 선택한 계란이 깨져있거나, 대상이 되는 계란이 깨졌다면 패스
      const targetEgg = info[i];
      if (i === index || currentEgg[0] <= 0 || targetEgg[0] <= 0) continue;

      hitFlag = true;

      currentEgg[0] -= targetEgg[1];
      targetEgg[0] -= currentEgg[1];
      info[index][0] = currentEgg[0];
      info[i][0] = targetEgg[0];

      dfs(index + 1, info);

      currentEgg[0] += targetEgg[1];
      targetEgg[0] += currentEgg[1];
      info[index][0] = currentEgg[0];
      info[i][0] = targetEgg[0];
    }

    // 계란을 던질수 없을때 (현재 선택한 계란이 깨져있거나, 다른 계란도 모두 깨져있을때)
    // 백트래킹 탐색을 종료하는게 아니라 다음 탐색으로 넘어간다.
    if (!hitFlag) {
      dfs(index + 1, info);
    }
  };

  dfs(0, info);

  console.log(maxValue);

  process.exit();
});
