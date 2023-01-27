function solution(arr, divisor) {
    let array =  arr.filter((a) => a % divisor ==0).sort((a,b) => a-b)
    return array.length ==0 ? [-1]: array
    
}