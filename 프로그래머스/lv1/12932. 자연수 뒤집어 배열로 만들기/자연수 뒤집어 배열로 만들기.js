function solution(n) {
    return n
    .toString()
    .split("")
    .map((word) => parseInt(word))
    .reverse()
}