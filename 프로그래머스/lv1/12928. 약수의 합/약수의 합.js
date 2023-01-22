function solution(n) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp.push(i + 1);
  }
  return temp.filter((num) => n % num === 0).reduce((a, b) => (a += b),0);
}
