function solution(arr) {
  let small = arr.reduce((a, b) => (a < b ? a : b));
  arr.splice(arr.indexOf(small), 1);

  return arr.length > 0 ? arr : [-1];
}