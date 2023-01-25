function solution(my_string) {
  return my_string
    .split("")
    .filter((a) => !isNaN(a))
    .reduce((a, b) => a + parseInt(b), 0);
}
