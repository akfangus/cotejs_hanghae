function solution(n) {
  return [...Array(n)]
    .map((v, i) => i)
    .map((v) => (v % 2 == 0 ? "수" : "박"))
    .join("");
}
