function solution(n) {
  let arr = [];
  let answer = 0;
  while (n !== 0) {
    arr.push(n % 3);
    n = Math.floor(n / 3);
  }
  arr.reverse();
  //이걸 map으로...?
  // for (let i = 0; i < arr.length; i++) {
  //   answer += arr[i] * 3 ** i;
  // }
  answer = arr.map((a, i) => a * 3 ** i).reduce((a, b) => a + b);
  return answer;
}