function solution(nums) {
  let answer = 0;
  let arr = [];
  
  for (let i = 0; i < nums.length-2; i++) {
    for (let j = i + 1; j < nums.length- 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        result = nums[i] + nums[j] + nums[k];
        //result가 소수냐? 아니면 answer +1
        let cnt=0
        for (let p = 1; p <=result; p++) {
          if (result % p == 0) {cnt++;}
          }
          (cnt==2)? answer++:answer;
        } 
      }
    }
  return answer;
}