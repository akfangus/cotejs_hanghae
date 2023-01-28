function solution(num) {
  //num값을 받아주는 target변수 선언
  let target = num;

  if (num == 1) return 0;
  let cnt = 0; // 반복 횟수
  //1-1, 1-2 결과값을 넣어주는 배열을 빈배열을 만든다
  let arr = [];

  //계속 반복해서 500에 제한을 둬야하니 while문을 쓴다.\
  while (cnt < 500) {
    //1-1, 1-2 구현
    if (target == 1) return arr.length;
    if (target % 2 == 0) {
      target = target / 2;
      arr.push(target);
    } else {
      target = target * 3 + 1;
      arr.push(target);
    }
    cnt += 1;
  }
  //   console.log(arr);

  // 배열의 길이를 return 하면 result가 된다.
  return -1;
}
