function solution(n, arr1, arr2) {
  let result1 = arr1.map((v) => v.toString(2).padStart(n, "0"));
  let result2 = arr2.map((v) => v.toString(2).padStart(n, "0"));

  let answer = result1.map((v, i) => {
    return v
      .split("")
      .map((v2, i2) => {
        return v2 == 0 && result2[i][i2] == 0 ? " " : "#";
      })
      .join("");
  });

  return answer;
}