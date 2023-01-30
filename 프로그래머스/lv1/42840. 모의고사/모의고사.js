function solution(answers) {

  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let AA1 = answers.filter((v, i) => v == p1[i % 5]).length;
  let AA2 = answers.filter((v, i) => v == p2[i % 8]).length;
  let AA3 = answers.filter((v, i) => v == p3[i % 10]).length;


  let max = Math.max(AA1, AA2, AA3);
    // console.log(max)
let answer = [];
  let arr0 = [AA1, AA2, AA3].filter((v, i) => {
    if (v == max) {
        console.log(i) 
      answer.push(i+1);
    }
  });
  return answer.sort();
}