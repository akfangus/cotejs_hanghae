function solution(slice, n) {
  var answer = 1;
  while (true) {
    if ((slice * answer) / n >= 1) {
      break;
    } else {
      answer += 1;
    }
  }
  return answer;
}