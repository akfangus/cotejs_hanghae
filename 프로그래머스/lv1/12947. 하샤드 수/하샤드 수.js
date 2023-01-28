function solution(x) {
  let hab = [...(x + "")].map((a) => parseInt(a)).reduce((a, b) => a + b);

  return x % hab == 0 ? true : false;
}