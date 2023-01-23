function solution(n) {
  //정수제곱근 판별은 sqrt해서 소수 인지 정수인지를 가리면 되는데
  // 1로 나눠서 나머지가 없으면 정수 있으면 소수로 판별을 한다더라! 신기
  return Math.sqrt(n) % 1 == 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}