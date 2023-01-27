function solution(array, height) {
    let result = 0;

  //array를 돌면서 height보다 큰값이 있으면 result를 ++ 해준다.
  for (let i =0;i<array.length;i++){
    if (array[i]> height){
        result +=1
    }
  }
  return result

}