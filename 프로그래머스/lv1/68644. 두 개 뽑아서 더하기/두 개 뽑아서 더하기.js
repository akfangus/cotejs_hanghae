function solution(numbers) {
  arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }

  return arr.sort((a, b) => a - b).filter((a, i) => a != arr[i + 1]);
}