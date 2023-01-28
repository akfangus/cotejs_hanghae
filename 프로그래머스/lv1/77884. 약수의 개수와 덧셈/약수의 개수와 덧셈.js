function solution(left, right) {

  
  let sum = 0; //13+14+15-16

  for (let target = left; target <= right; target++) {
    //13
    let temp =
      [...Array(Math.floor(target / 2))]  
        .map((v, i) => i + 1)
        .filter((a) => target % a == 0).length + 1;



    let temp2 = temp % 2 == 0 ? target : -target;
    sum += temp2;
  }
  return sum;
}