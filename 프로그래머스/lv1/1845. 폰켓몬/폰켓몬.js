function solution(nums) {
  maxLength = nums.length / 2;
  a = nums.sort().filter((v, i) => v != nums[i + 1]).length;
  console.log(a);

  return a >= maxLength ? maxLength : a;
}