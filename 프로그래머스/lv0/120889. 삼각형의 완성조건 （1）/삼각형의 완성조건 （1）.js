//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
/**
 * 가장 긴변의 길이를 먼저 찾아야한다
 * 나머지 두변의 합을 구한다
 * 가장 긴변과 나머지 두변의 합을 비교한다
 * 가장 긴변이 더 크면 1 나머지 두변의 길이가 더 크다면 2를 return
 */
//삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return
// side는 배열 [a,b,c]가 들어올것이다.
function solution(sides) {
  let max = 0;
  // 가장 긴변의 길이를 구한다
  for (let i = 0; i < sides.length; i++) {
    if (max < sides[i]) {
      max = sides[i];
    }
  }
  //나머지 두변의 합을 구한다 => (우리가 가진건 세변과 max값 )배열 다 더하고 긴변 빼주면 나머지 두변의 합이 될것이다.
  let hab = 0;
  for (let i = 0; i < sides.length; i++) {
    hab += sides[i];
  }
  hab = hab - max;

  //가장 긴변과 나머지 두변의 합을 비교한다.

  //가장 긴변이 더 크면 1 나머지 두 변의 길이가 더 크다면 2를 return
  if (max < hab) {
    return 1;
  } else {
    return 2;
  }
}