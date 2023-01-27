function solution(left, right) {
    let sum = 0;

    for(let i =left; i<=right;i++){
        let target = i;
        let temp = [...Array(target)].map((v,i) => i+1).filter((a) => target % a ==0 ).length 
        let temp2 = (temp % 2 ==0) ? target : -target
        sum +=temp2
    }
    return sum
 

}