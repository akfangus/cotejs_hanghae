function solution(d, budget) {
  const result = d
    .sort((a, b) => a - b)
    .map((a, i) => {
      budget = budget - a;
      console.log(budget);
      return budget;
    });
  return result.filter((a) => a >= 0).length;
}