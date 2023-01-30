function solution(lottos, win_nums) {
  score = [6, 6, 5, 4, 3, 2, 1];
  cnt = 0;
  zerocnt = 0;

  //   for (let i = 0; i < lottos.length; i++) {
  //     if (lottos[i] == 0) {
  //       zerocnt += 1;
  //       continue;
  //     }
  //     if (win_nums.includes(lottos[i])) cnt += 1;
  //   }

  cnt = lottos.filter((i, v) => win_nums.includes(i)).length;
  zerocnt = lottos.filter((i, v) => i == 0).length;

  return [score[cnt + zerocnt], score[cnt]];
}