function solution(n) {
  return [...Array(n).keys()] //
    .map((i) => (i % 2 == 0 ? "수" : "박"))
    .join("");
}
