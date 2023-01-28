function solution(num) {
  //let target = num;

  //if (num == 1) return 0; // 이게 필요없어지겟고
  //let cnt2 = 0;
  let cnt = 0;

  while (num != 1 && cnt != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    cnt++;
  }
  return num == 1 ? cnt : -1;
}