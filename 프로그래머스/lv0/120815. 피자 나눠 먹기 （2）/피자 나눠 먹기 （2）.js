function solution(n) {
  for (i = Math.max(n, 6); i < 6 * n + 1; i++) {
    if (i % n == 0 && i % 6 == 0) {
      return i/6;
    }
  }
}